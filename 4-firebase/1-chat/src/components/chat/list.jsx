import { useEffect, useRef, useState } from "react";
import { onSnapshot, collection, query, where, orderBy } from "firebase/firestore";
import { auth, db } from "../../firebase";
import Message from "./message";
import Arrow from "./arrow";

const List = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);

  const audioRef = useRef(new Audio("/notify.mp3"));
  const prevMessagesLength = useRef(0);
  const lastMessageRef = useRef(null);

  // veritabanından mesajları al
  useEffect(() => {
    // abone olunacak kolleksiyonun referansını al
    const collectionRef = collection(db, "messages");

    // kullanıcnın bulunduğu odadaki mesajları fitlrele ve tarihe göre sırala
    const q = query(collectionRef, where("room", "==", room), orderBy("createdAt", "asc"));

    // messages kolleksiyonuna abone ol
    // kolleksiyon her değiştiğinde güncel dökümanları getirir
    const unsub = onSnapshot(q, (snapshot) => {
      // mesajların geçici olarak tutulduğu dizi
      const temp = [];

      // her belgenin içerisindeki dataya erişip diziye aktarıyor
      snapshot.forEach((doc) => temp.push(doc.data()));

      // mesaj verisini state'e aktarır
      setMessages(temp);
    });

    // kullanıcı sayfadan ayrılınca abonelik durur
    return () => unsub();
  }, []);

  // her yeni mesaj geldiğinde çalışır
  useEffect(() => {
    if (messages.length > 1) {
      // gönderilen son mesaja eriş
      const lastMsg = messages.at(-1);

      // kullanıcı yukardayken yeni mesaj gelirse
      if (messages.length > prevMessagesLength.current && !isAtBottom) {
        // atılan son mesaj fakrlı kullanıcı tarafından atıldysa
        if (lastMsg.author.id !== auth.currentUser.uid) {
          setUnreadCount((prev) => prev + 1);
        }
      }

      // toplam mesaj sayısını referansa aktar
      prevMessagesLength.current = messages.length;

      if (lastMsg.author.id === auth.currentUser.uid) {
        // eğer son mesajı aktif kullanıcı attıysa son mesaja odaklan
        scrollToBottom();
      } else if (isAtBottom) {
        // eğer son mesajı başka biri attıysa ve en aşağıdaysam son mesaja odaklan
        scrollToBottom();
      }
      playSound();
    }
  }, [messages]);

  // kaydırma anında çalışır
  const handleScroll = (e) => {
    // clientHeight: container'In kullanıcı ekranındaki yüksekliği
    // scrollTop: kullanıcı yukarıdan itibaren kaç px kaydırdı
    // scrollHeight: tüm içeriği yüksekliği (gizli kısımlar dahil)
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    // kullanıcı sayfanın en altından 150px üstünde mi?
    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 150);
  };

  // en aşşağıya kaydır
  const scrollToBottom = () => {
    lastMessageRef.current.scrollIntoView();
    setUnreadCount(0);
  };

  // bildirim sesini oynatır
  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <main
      onScroll={handleScroll}
      className="flex-1 p-3 flex flex-col gap-3 w-full overflow-y-auto overflow-x-hidden relative"
    >
      {messages.length < 1 ? (
        <div className="h-full grid place-items-center text-zinc-400">
          <p>Sohbete ilk mesajı gönderin</p>
        </div>
      ) : (
        messages.map((i, key) => <Message item={i} key={key} />)
      )}

      <div ref={lastMessageRef} />

      <Arrow isAtBottom={isAtBottom} scrollToBottom={scrollToBottom} unreadCount={unreadCount} />
    </main>
  );
};

export default List;

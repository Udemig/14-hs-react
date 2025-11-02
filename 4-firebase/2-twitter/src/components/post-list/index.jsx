import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "../loader";
import Post from "../post";

const PostList = () => {
  const [tweets, setTweets] = useState(undefined);

  useEffect(() => {
    // kolleksiyonun referansını al
    const collectionRef = collection(db, "tweets");

    // sorgu ayarlarını yap
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    // kolleksiyona abone ol
    const unsub = onSnapshot(q, (snapshot) => {
      // belgelerin geçici olarak tutulduğu dizi
      const temp = [];

      // belgelerin verilerine erişip geçici diziye aktar
      snapshot.docs.forEach((doc) => {
        temp.push({ id: doc.id, ...doc.data() });
      });

      // tweet'leri state'e aktar
      setTweets(temp);
    });

    // component ekrandan ayrılınca aboneliği durdur
    return () => unsub();
  }, []);

  // tweet'ler yükleniyorsa:
  if (tweets === undefined) return <Loader designs="my-40" />;

  // hiç tweet yoksa:
  if (tweets?.length === 0)
    return (
      <div className="my-40 grid place-items-center">
        <p className="text-zinc-400">Henüz hiç tweet atılmadı </p>
      </div>
    );

  // tweetler yüklendiyse:
  return tweets.map((tweet, key) => <Post key={key} tweet={tweet} />);
};

export default PostList;

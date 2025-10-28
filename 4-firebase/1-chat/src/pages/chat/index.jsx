import { useOutletContext, useParams } from "react-router-dom";
import Form from "../../components/chat/form";
import Header from "../../components/chat/header";
import List from "../../components/chat/list";

const Chat = () => {
  const user = useOutletContext();
  const { room } = useParams();

  return (
    <div className="h-screen md:grid md:place-items-center">
      <div className="bg-white text-grey w-full md:w-[80vw] lg:w-[60vw] xl:w-[50vw] h-screen md:h-[80vh] md:rounded-md overflow-hidden flex flex-col">
        <Header user={user} room={room} />

        <List room={room} />

        <Form user={user} room={room} />
      </div>
    </div>
  );
};

export default Chat;

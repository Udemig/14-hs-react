import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useOutletContext } from "react-router-dom";
import Nav from "../../components/feed/nav";
import Main from "../../components/feed/main";
import Aside from "../../components/feed/aside";

const Feed = () => {
  const user = useOutletContext();

  return (
    <div className="h-screen bg-primary overflow-hidden text-secondary grid grid-cols-[1fr_minmax(300px,600px)_1fr]">
      <Nav user={user} />
      <Main user={user} />
      <Aside />
    </div>
  );
};

export default Feed;

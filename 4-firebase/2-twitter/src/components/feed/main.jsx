import PostForm from "../post-form";
import PostList from "../post-list";

const Main = ({ user }) => {
  return (
    <div className="border-x border-tw-gray overflow-y-auto">
      <header className="border-b border-tw-gray p-4 font-bold">Anasayfa</header>

      <PostForm user={user} />

      <PostList user={user} />
    </div>
  );
};

export default Main;

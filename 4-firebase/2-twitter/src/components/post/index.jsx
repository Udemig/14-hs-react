import UserAvatar from "../post-form/user-avatar";
import Buttons from "./buttons";
import Content from "./content";
import Dropdown from "./dropdown";
import UserInfo from "./user-info";

const Post = ({ tweet }) => {
  return (
    <div className="border-b border-tw-gray p-4 flex gap-2">
      <UserAvatar photo={tweet.user.photo} name={tweet.user.name} />

      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between">
          <UserInfo />
          <Dropdown />
        </div>

        <Content />

        <Buttons />
      </div>
    </div>
  );
};

export default Post;

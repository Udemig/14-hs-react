const UserAvatar = ({ photo, name }) => {
  return <img src={photo} alt={name} className="size-[35px] md:size-[45px] rounded-full" />;
};

export default UserAvatar;

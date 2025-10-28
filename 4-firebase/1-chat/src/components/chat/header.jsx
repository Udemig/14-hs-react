import { Link } from "react-router-dom";

const Header = ({ user, room }) => {
  return (
    <header className="flex justify-between items-center p-5 border border-gray-200 shadow-lg">
      <p>{user.displayName}</p>

      <p className="font-semibold">{room}</p>

      <Link to="/" className="btn">
        Farklı Oda
      </Link>
    </header>
  );
};

export default Header;

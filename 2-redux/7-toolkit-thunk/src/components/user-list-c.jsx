import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData, setError, setLoading } from "../redux/slices/classicSlice";

const UserListC = () => {
  const { isLoading, error, data } = useSelector((store) => store.classicReducer);
  const dispatch = useDispatch();

  const getUsers = () => {
    dispatch(setLoading());

    axios
      .get("https://dummyjson.com/users")
      .then((res) => dispatch(setData(res.data.users)))
      .catch((err) => dispatch(setError(err.message)));
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) return <h1>Yükleniyor...</h1>;

  if (error)
    return (
      <div>
        <h1> Hata...{error}</h1>
        <button onClick={getUsers}>Tekrar Dene</button>
      </div>
    );

  return (
    <div>
      {data.map((user) => (
        <h1>{user.firstName}</h1>
      ))}
    </div>
  );
};

export default UserListC;

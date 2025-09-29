import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const { isLoading, error, users } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "USERS_LOADING" });

    axios
      .get("https://dummyjson.com/users")
      .then((res) => dispatch({ type: "USERS_SUCCESS", payload: res.data.users }))
      .catch((err) => dispatch({ type: "USERS_ERROR", payload: err.message }));
  }, []);

  if (isLoading) return <h1>Yükleniyor..</h1>;

  if (error) return <h1>Hata! {error.message}</h1>;

  return (
    <div>
      {users.map((user) => (
        <h1 key={user.id}>
          {user.firstName} {user.lastName}
        </h1>
      ))}
    </div>
  );
};

export default List;

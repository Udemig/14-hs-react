import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";

const List2 = () => {
  const { isLoading, error, users } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
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

export default List2;

import { useEffect } from "react";
import Form from "./components/form";
import List from "./components/list";
import api from "./service/api";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setTodos, setLoading, setError } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // yüklenmenin başladığını reducer'a haber ver
    dispatch(setLoading());

    // api'dan kayı edilmiş olan todo veirlrini almak için istek at
    api
      .get("/todos")
      // istek başarılı olursa reducer'a haber ver
      .then((res) => dispatch(setTodos(res.data)))
      // istek başarısız olursa reducer'a haber ver ve bildirim gönder
      .catch((err) => {
        dispatch(setError(err.message));
        toast.error("Veriler senkronize edilemedi");
      });
  }, []);

  return (
    <div className="h-screen container p-10">
      <h1 className="text-center text-2xl font-bold">
        <span className="text-yellow-600">Redux</span> CRUD
      </h1>

      <Form />

      <List />
    </div>
  );
};

export default App;

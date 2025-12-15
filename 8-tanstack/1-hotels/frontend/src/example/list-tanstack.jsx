import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ListTanstack = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["places"],
    queryFn: () => axios.get("http://localhost:4001/api/places"),
  });

  return (
    <div>
      <button onClick={refetch}>Tekrar Dene</button>
    </div>
  );
};

export default ListTanstack;

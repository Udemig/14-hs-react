import { useQuery } from "@tanstack/react-query";

const Header = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["places"],
    queryFn: () => axios.get("http://localhost:4001/api/places"),
  });

  return <div>Header</div>;
};

export default Header;

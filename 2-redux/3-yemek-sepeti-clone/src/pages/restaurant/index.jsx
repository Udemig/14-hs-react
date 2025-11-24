import RestaurantDetail from "./restaurant-detail";
import RestaurantProducts from "./restaurant-products";

const Restaurant = () => {
  return (
    <div className="container space-y-6">
      <div className="surface-card p-6">
        <RestaurantDetail />
      </div>
      <div className="surface-card p-6">
        <RestaurantProducts />
      </div>
    </div>
  );
};

export default Restaurant;

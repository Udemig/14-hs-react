import api from "./api";

const iceCreamService = {
  // Get all ice creams
  getAllIceCreams: async () => {
    const response = await api.get("/icecreams");
    return response.data;
  },

  // Get single ice cream by id
  getIceCreamById: async (id) => {
    const response = await api.get(`/icecreams/${id}`);
    return response.data;
  },
};

export default iceCreamService;

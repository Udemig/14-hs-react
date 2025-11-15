import api from "./api";
import { toast } from "react-toastify";

const iceCreamService = {
  // Get all ice creams
  getAllIceCreams: async () => {
    try {
      const response = await api.get('/icecreams');
      return response.data;
    } catch (error) {
      toast.error("Dondurma listesi alınamadı");
      throw error;
    }
  },

  // Get single ice cream by id
  getIceCreamById: async (id) => {
    try {
      const response = await api.get(`/icecreams/${id}`);
      return response.data;
    } catch (error) {
      toast.error("Dondurma detayı alınamadı");
      throw error;
    }
  },
};

export default iceCreamService;


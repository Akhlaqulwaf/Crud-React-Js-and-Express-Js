import { axiosInstance } from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function useFetchProduct() {
  return useQuery({
    queryFn: async () => {
      const productResponse = await axiosInstance.get("/products");
      return productResponse;
    },
  });
}

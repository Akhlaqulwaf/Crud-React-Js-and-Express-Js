import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";

export default function useCreateProduct({onSuccess}) {
  return useMutation({
    mutationFn: async (body) => {
      const createProductRes = await axiosInstance.post("/products", body);
      return createProductRes;
    },
    onSuccess
  });
}

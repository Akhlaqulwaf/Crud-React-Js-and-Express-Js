import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";

export default function usePatchProduct({onSuccess}) {
  return useMutation({
    mutationFn: async (body) => {
      const patchProductRes = await axiosInstance.patch(
        `/products/${body.id}`,
        body
      );
      return patchProductRes;
    },
    onSuccess
  });
}

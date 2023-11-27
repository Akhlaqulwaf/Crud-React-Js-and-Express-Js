import { useMutation } from "@tanstack/react-query";
import React from "react";
import { axiosInstance } from "../../lib/axios";

export default function useDeleteProduct({onSuccess}) {
  return useMutation({
    mutationFn: async (id) => {
      const deleteProductRes = await axiosInstance.delete(`/products/${id}`);
      return deleteProductRes;
    },
    onSuccess
  });
}

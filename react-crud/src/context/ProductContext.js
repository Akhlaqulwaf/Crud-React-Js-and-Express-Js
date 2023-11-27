import React, { createContext, useState } from "react";
import useFetchProduct from "../features/products/useFetchProduct";
import { useFormik } from "formik";
import useCreateProduct from "../features/products/useCreateProduct";
import usePatchProduct from "../features/products/usePatchProduct";
import useDeleteProduct from "../features/products/useDeleteProduct";
import Toaster from "react-hot-toast"

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [editId, setEditId] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const toast = Toaster

  const openConfirmFn = () => {
    setOpenConfirm(!openConfirm);
  };

  const openMod = () => {
    setOpenModal(!openModal);
  };
  const closeMode = () => {
    setEditId("")
    setOpenModal(false);
  };

  const {
    data: products,
    isLoading: productsLoading,
    refetch: refetchProducts,
  } = useFetchProduct();

  const { mutate: createProduct } = useCreateProduct({
    onSuccess: () => {
      refetchProducts();
    },
  });

  const { mutate: patchProduct } = usePatchProduct({
    onSuccess: () => {
      refetchProducts();
    },
  });

  const { mutate: deleteProduct } = useDeleteProduct({
    onSuccess: () => {
      refetchProducts();
    },
  });

  const handleDeleteProduct = (id) => {
    setDeleteId(id);
    setOpenConfirm(!openConfirm);
  };

  const handleDelete = () => {
    deleteProduct(deleteId);
    toast.success("Deleted Product", {
      position: "top-right"
    })
    setOpenConfirm(!openConfirm);
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      price: "",
      description: "",
      image: "",
    },
    onSubmit: () => {
      const { name, price, description, image, id } = formik.values;

      if (id) {
        patchProduct({
          id,
          name,
          price: parseInt(price),
          description,
          image,
        });
        toast.success("Success edited product", {
          position: "top-right"
        })
      } else {
        createProduct({
          name,
          price: parseInt(price),
          description,
          image,
        });
        toast.success("Success created product", {
          position: "top-right"
        })
      }
      setOpenModal(!openModal);
      formik.setFieldValue("id", "");
      formik.setFieldValue("name", "");
      formik.setFieldValue("price", "");
      formik.setFieldValue("description", "");
      formik.setFieldValue("image", "");
    },
  });

  const handleFormPatch = (product) => {
    openMod();
    setEditId(product.id)
    formik.setFieldValue("id", product.id);
    formik.setFieldValue("name", product.name);
    formik.setFieldValue("price", product.price);
    formik.setFieldValue("description", product.description);
    formik.setFieldValue("image", product.image);
  };

  const handleForm = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        productsLoading,
        openModal,
        openMod,
        closeMode,
        formik,
        handleForm,
        handleFormPatch,
        handleDeleteProduct,
        openConfirm,
        setOpenConfirm,
        openConfirmFn,
        handleDelete,
        editId
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

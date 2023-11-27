import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Toaster } from "react-hot-toast";

export default function Content() {
  const {
    products,
    productsLoading,
    openMod,
    handleFormPatch,
    handleDeleteProduct,
  } = useContext(ProductContext);

  const renderProduct = () => {
    let no = 1;
    return products?.data.map((product) => {
      return (
        <tbody className="border-b last:border-b-0 border-gray-300">
          <tr key={product.id}>
            <th className="py-[1rem] px-[1rem]">{no++}</th>
            <th className="py-[1rem] px-[1rem]">{product.name}</th>
            <th className="py-[1rem] px-[1rem]">{product.price}</th>
            <th className="py-[1rem] px-[1rem]">{product.description}</th>
            <th className="py-[1rem] px-[1rem]">
              <div className="flex justify-center items-center gap-[0.5rem]">
                <button
                  onClick={() => handleFormPatch(product)}
                  className="px-[0.6rem] py-[0.6rem] bg-yellow-400 rounded-md"
                >
                  edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="px-[0.6rem] py-[0.6rem] bg-red-400 rounded-md"
                >
                  delete
                </button>
              </div>
            </th>
          </tr>
        </tbody>
      );
    });
  };
  return (
    <div className="w-full h-auto">
      <div className="mx-auto px-[3rem] py-[2rem] ">
        <div className="w-full">
          <h1 className="text-center">SIMPLE CRUD</h1>
          <div className="py-[3rem]">
            {productsLoading ? (
              <p className="text-center">...Loading</p>
            ) : (
              <>
                <div className="w-[9rem]">
                  <button
                    onClick={openMod}
                    className="max-w-full px-[1rem] py-[0.5rem] rounded-md bg-green-300"
                  >
                    Add Product
                  </button>
                </div>
                <div className="overflow-x-auto mt-[1rem] rounded-md w-full shadow-md bg-slate-100 px-[1.5rem]">
                  <table className="w-full overflow-scroll">
                    <thead className="border-b border-gray-300">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          No
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {renderProduct()}
                  </table>
                </div>
              </>
            )}
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
}

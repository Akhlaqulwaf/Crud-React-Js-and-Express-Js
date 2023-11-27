import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function Forms() {
  const { openModal, closeMode, formik, handleForm, editId } =
    useContext(ProductContext);
    console.log(editId)
  return (
    <>
      {openModal ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-slate-200 bg-opacity-40 transition-opacity"></div>

          <div className="fixed inset-0 z-10 w-full overflow-y-auto">
            <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 w-full text-center sm:mt-0 sm:text-left">
                      <div
                        className="text-base font-semibold leading-6 text-gray-900 text-center"
                        id="modal-title"
                      >
                        {editId? <h3>Form Edit</h3> : <h3>Form Add</h3>}
                      </div>
                      <div className="mt-2">
                        <form onSubmit={formik.handleSubmit}>
                          <div className="mb-4 hidden">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Id
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="id"
                              name="id"
                              onChange={handleForm}
                              value={formik.values.id}
                              type="text"
                              placeholder="Id"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Name
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="name"
                              name="name"
                              onChange={handleForm}
                              value={formik.values.name}
                              type="text"
                              placeholder="Name"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Price
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                              id="price"
                              name="price"
                              onChange={handleForm}
                              value={formik.values.price}
                              type="number"
                              placeholder="Price"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Description
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                              id="description"
                              name="description"
                              onChange={handleForm}
                              value={formik.values.description}
                              type="text"
                              placeholder="Description"
                            />
                          </div>
                          <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Image
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                              id="image"
                              name="image"
                              onChange={handleForm}
                              value={formik.values.image}
                              type="text"
                              placeholder="Image"
                            />
                          </div>
                          <div className="bg-gray-50 px-2 py-3 sm:flex sm:flex-row-reverse">
                            <button
                              type="submit"
                              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            >
                              Submit
                            </button>
                            <button
                              type="button"
                              onClick={closeMode}
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

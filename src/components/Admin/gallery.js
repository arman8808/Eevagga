import React, { useEffect, useState } from "react";
import useServices from "../../hooks/useServices";
import adminActionsApi from "../../services/adminActionsApi";
import { formatDateTime } from "../../utils/formatDateTime";
import TableComponetWithApi from "../../utils/TableComponetWithApi";
import DeleteForm from "./DeleteForm";
import ReactQuill from "react-quill";
import ReusableModal from "../Modal/Modal";
import { useForm } from "react-hook-form";
import commonApis from "../../services/commonApis";
import { MdOutlineDelete } from "react-icons/md";
import { toast } from "react-toastify";

function Gallery() {
  const [allGallery, setAllGallery] = useState();
  const [page, setPage] = useState(1);
  const [allErrorLogs, setAllErrorLogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [oneGallery, setOneGallery] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalType, setModalType] = useState("addGallery");
  const getGalleryApi = useServices(commonApis.getGallery);
  const createGalleryApi = useServices(commonApis.createGallery);
  const deleteGalleryApi = useServices(commonApis.deleteGallery);
  const getGalleryHandle = async () => {
    const queryParams = {
      page: page || 1,
    };
    const response = await getGalleryApi.callApi(queryParams);
    setAllGallery(response ? response?.data : []);
    setTotalPages(response ? response?.pagination?.totalPages : 1);
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const {
    register,
    handleSubmit,
    setValue: setContent,
    formState: { errors },
  } = useForm();
  const {
    register: editRegister,
    handleSubmit: handleEdit,
    setValue,
    reset,
    formState: { errors: editErrors },
  } = useForm();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);

    reset();
  };
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("bannerImage", data.bannerImage[0]);

      const response = await createGalleryApi.callApi(formData);

      if (response.status === 201) {
        toast.success("Gallery image uploaded successfully!");
        setModalType(null);
        handleClose();
      } else {
        toast.error(response.message || "Failed to upload gallery image");
      }
    } catch (error) {
      toast.error("An error occurred while uploading the image");
      console.error("Error uploading gallery image:", error);
    }
  };

  const deleteOneGalleryHandle = async () => {
    try {
      const response = await deleteGalleryApi.callApi(oneGallery);
      toast.success("Gallery deleted successfully!");
      handleClose();
      getGalleryHandle();
    } catch (error) {
      toast.error("Failed to delete Gallery. Please try again later.");
      console.error("Error deleting Gallery:", error);
    }
  };

  useEffect(() => {
    getGalleryHandle();
  }, [page]);
  const columns = [
    { label: "No", key: "index", render: (_, i) => i + 1 },
    {
      label: "Gallery",
      key: "name",
      render: (row) => (
        <img
          src={
            process.env.REACT_APP_API_Aws_Image_BASE_URL + row?.originalImage
          }
          alt="gallery"
          className="w-[10rem] h-[10rem] object-contain aspect-3/2"
        />
      ),
    },

    {
      label: "Uploaded At",
      render: (row) => formatDateTime(row?.createdAt),
    },
    {
      label: "Action",
      key: "preferredDate",
      render: (row) => (
        <div className="flex items-center justify-center gap-2">
          <MdOutlineDelete
            className="text-3xl font-semibold cursor-pointer text-textGray"
            onClick={() => [
              handleOpen(),
              setModalType("deleteGallery"),
              setOneGallery(row?._id),
            ]}
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <button
        onClick={() => [handleOpen(), setModalType("addblog")]}
        className="float-right btn-primary w-fit px-2 mb-2"
      >
        Add Gallery
      </button>
      <TableComponetWithApi
        columns={columns}
        data={allGallery}
        page={page}
        itemsPerPage={10}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      />
      <ReusableModal open={open} onClose={handleClose} width={"70%"}>
        {modalType === "addblog" && (
          <div className="p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Add New Gallery Image
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
              className="space-y-6"
            >
              {/* File Input with Modern Dropzone-style - Entire area clickable */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Gallery Image
                </label>

                <label htmlFor="file-upload" className="cursor-pointer">
                  {" "}
                  {/* Entire container is now a label */}
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-primary transition-all duration-300 group">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400 group-hover:text-primary transition-colors duration-200"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex justify-center text-sm text-gray-600">
                        <span className="relative bg-white rounded-md font-medium text-primary group-hover:text-primary-dark transition-colors duration-200">
                          Click to upload
                        </span>
                        <span className="pl-1">or drag and drop</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 5MB
                      </p>
                    </div>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      {...register("bannerImage", {
                        required: "Image is required",
                      })}
                    />
                  </div>
                </label>

                {errors.bannerImage && (
                  <p className="mt-1 text-sm text-red-500 animate-pulse">
                    {errors.bannerImage.message}
                  </p>
                )}
              </div>

              {/* Submit Button with Loading Animation */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Uploading...
                  </>
                ) : (
                  "Upload Image"
                )}
              </button>
            </form>
          </div>
        )}

        {modalType === "deleteGallery" && (
          <DeleteForm
            onDelete={deleteOneGalleryHandle}
            deleteText={"Gallery"}
          />
        )}
      </ReusableModal>
    </div>
  );
}

export default Gallery;

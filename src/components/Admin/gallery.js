import React, { useEffect, useState } from "react";
import useServices from "../../hooks/useServices";
import adminActionsApi from "../../services/adminActionsApi";
import { formatDateTime } from "../../utils/formatDateTime";
import TableComponetWithApi from "../../utils/TableComponetWithApi";
import DeleteForm from "./DeleteForm";
import ReactQuill from "react-quill";
import ReusableModal from "../Modal/Modal";
import { useForm } from "react-hook-form";

function Gallery() {
  const [allGallery, setAllGallery] = useState();
  const [page, setPage] = useState(1);
  const [allErrorLogs, setAllErrorLogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [modalType, setModalType] = useState("addblog");
  const getAllBookingCtaApi = useServices(adminActionsApi.getAllBookingCta);
  const getAllErrorLogsApiHandle = async () => {
    const response = await getAllBookingCtaApi.callApi();
    setAllErrorLogs(response ? response?.data : []);
    setTotalPages(response ? response?.totalPages : 1);
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
  const onSubmit = async (data) => {};
  const updateOneBlogHandle = async (data) => {};

  const deleteOneBlogHandle = async () => {};

  useEffect(() => {
    getAllErrorLogsApiHandle();
  }, [page]);
  const columns = [
    { label: "No", key: "index", render: (_, i) => i + 1 },
    {
      label: "Gallery",
      key: "name",
    },

    {
      label: "Form Submitted Date",
      key: "preferredDate",
      render: (row) => formatDateTime(row?.createdAt),
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
          <div className=" p-6  rounded-lg ">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Add New Blog
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}></form>
          </div>
        )}
        {modalType === "editblog" && (
          <div className=" p-6  rounded-lg ">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Add New Blog
            </h2>
            <form onSubmit={handleEdit(updateOneBlogHandle)}></form>
          </div>
        )}
        {modalType === "deleteblog" && (
          <DeleteForm onDelete={deleteOneBlogHandle} deleteText={"Blog"} />
        )}
      </ReusableModal>
    </div>
  );
}

export default Gallery;

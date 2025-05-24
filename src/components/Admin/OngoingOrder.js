import React, { useEffect, useState } from "react";
import TableComponet from "../../utils/TableComponet";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit, CiViewBoard } from "react-icons/ci";
import { formatDate } from "../../utils/formatDate";
import useServices from "../../hooks/useServices";
import orderApis from "../../services/orderApis";
import formatCurrency from "../../utils/formatCurrency";
import PriceBreakdown from "./PriceBreakdownTable";
import ReusableModal from "../Modal/Modal";
import DateRangePicker from "../../utils/DateRangePicker";
import useDebounce from "../../utils/useDebounce";
import TableComponetWithApi from "../../utils/TableComponetWithApi";
const gatewayFeeRate = 0.02;
function OngoingOrder({ term }) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [allOrder, setAllOrder] = useState([]);
  const getAllNewOrderApi = useServices(orderApis.getAllOngoingOrder);
  const [oneOrder, setOneOrder] = useState([]);
  const getOneOrderDetailsadminApi = useServices(
    orderApis.GetOneOrderDetailsAdmin
  );
  const downloadOrdersCSVApi = useServices(orderApis.downloadOrdersCSV);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("viewOrder");
  const debounce = useDebounce(term);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const [orderIdAndItemId, setOrderIdAndItemId] = useState({
    orderId: "",
    id: "",
  });
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const getAllNewOrderHandle = async () => {
    const queryParams = {
      search: debounce || "",
      page: page || 1,
    };
    try {
      const response = await getAllNewOrderApi.callApi(queryParams);
      setAllOrder(response ? response.orders : []);
      setTotalPages(response ? response.pagination.totalPages : 1);
      console.log(response);
    } catch (error) {
      setAllOrder([]);
    }
  };
  const getOneOrderDetailsadminApiHandle = async (orderId, itemId) => {
    const response = await getOneOrderDetailsadminApi.callApi(orderId, itemId);
    setOneOrder(response?.order);
    console.log(response);
  };
  const downloadOrdersCSVApiHandle = async (fromDate, toDate) => {
    const queryParams = {
      fromDate: fromDate || "",
      toDate: toDate || "",
      // sortOrder: sortvalue || "asc",
    };
    try {
      const response = await downloadOrdersCSVApi.callApi(
        "active",
        queryParams
      );

      if (response && response) {
        const blob = new Blob([response], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "activeOrder.csv";
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error("No data received for CSV download");
      }
    } catch (error) {
      console.error("Error downloading CSV:", error);
    }
  };
  useEffect(() => {
    getAllNewOrderHandle();
  }, [page, debounce]);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const columns = [
    { label: "No", key: "index", render: (_, i) => i + 1 },
    {
      label: "Order ID",
      key: "OrderId",
    },
    {
      label: "User Name",
      key: "userId?.name",
      render: (row) => row?.userId?.name,
    },
    {
      label: "Order Date",
      key: "createdAt",
      render: (row) => formatDate(row?.createdAt),
    },
    {
      label: "Amount",
      key: "totalAmount",
      render: (row) =>
        formatCurrency(
          row?.totalPrice +
            row?.gstAmount +
            row?.platformFee +
            row?.platformGstAmount
        ),
    },
    {
      label: "Status",
      key: "status",
      render: (row) => row?.status,
    },

    {
      label: "Action",
      key: "interests",
      render: (row) => (
        <div className="flex items-center justify-center gap-2">
          <CiViewBoard
            className="text-3xl font-semibold cursor-pointer text-textGray"
            onClick={() => [
              handleOpenModal(),
              setModalType("viewOrder"),
              getOneOrderDetailsadminApiHandle(row?.OrderId, row?._id),
            ]}
          />
          {/* <CiEdit
                    className="text-3xl font-semibold cursor-pointer text-textGray"
                    onClick={() => [
                      handleOpen(),
                      setModalType("editGst"),
                      //   getOneCouponsHandle(row?._id),
                    ]}
                  /> */}
          <MdOutlineDelete
            className="text-3xl font-semibold cursor-pointer text-textGray"
            // onClick={() => [
            //   handleOpen(),
            //   setModalType("deleteGst"),
            //   //   setCouponId(row?._id),
            // ]}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <button
        onClick={() => [handleOpenModal(), setModalType("download")]}
        className="float-right btn-primary w-fit px-2 mb-2"
      >
        Download
      </button>
      <TableComponetWithApi
        columns={columns}
        data={allOrder}
        page={page}
        itemsPerPage={10}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      />
      <ReusableModal
        open={openModal}
        onClose={handleCloseModal}
        title={modalType === "viewOrder" ? "View Order" : ""}
      >
        {modalType === "viewOrder" && (
          <>
            <div className="w-full mx-auto p-6 bg-white ">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Order Details
              </h2>
              <div className="space-y-2">
                <p>
                  <strong className="text-primary">Order ID:</strong>{" "}
                  {oneOrder?.OrderId}
                </p>
                <p>
                  <strong className="text-primary">Title:</strong>{" "}
                  {oneOrder?.serviceDetails?.Title}
                </p>
                <p>
                  <strong className="text-primary">SKU:</strong>{" "}
                  {oneOrder?.serviceDetails?.SKU}
                </p>
                <p>
                  <strong className="text-primary">Start Date:</strong>{" "}
                  {new Date(oneOrder?.date).toLocaleDateString()}
                </p>
                <p>
                  <strong className="text-primary">Time:</strong>{" "}
                  {oneOrder?.time}
                </p>
              </div>
              <h3 className="text-xl font-semibold mt-6 text-primary">
                User Details
              </h3>
              <div className="space-y-2">
                <p>
                  <strong className="text-primary">Name:</strong>{" "}
                  {oneOrder?.userId?.name}
                </p>
                <p>
                  <strong className="text-primary">Email:</strong>{" "}
                  {oneOrder?.userId?.email}
                </p>
              </div>{" "}
              <h3 className="text-xl font-semibold mt-6 text-primary">
                Vendor Details
              </h3>
              <div className="space-y-2">
                <p>
                  <strong className="text-primary">Name:</strong>{" "}
                  {oneOrder?.vendor?.name}
                </p>
                <p>
                  <strong className="text-primary">Email:</strong>{" "}
                  {oneOrder?.vendor?.email}
                </p>{" "}
                <p>
                  <strong className="text-primary">Phone:</strong>{" "}
                  {oneOrder?.vendor?.phoneNumber}
                </p>
              </div>
              <h3 className="text-xl font-semibold mt-6 text-primary">
                Address
              </h3>
              <div className="space-y-2">
                <p>
                  <strong className="text-primary">Full Address:</strong>{" "}
                  {oneOrder?.address?.address},{" "}
                  {oneOrder?.address?.addressLine1},{" "}
                  {oneOrder?.address?.addressLine2},{oneOrder?.address?.city},
                </p>
                <p>
                  <strong className="text-primary">State:</strong>{" "}
                  {oneOrder?.address?.state}
                </p>
                <p>
                  <strong className="text-primary">Pin Code:</strong>{" "}
                  {oneOrder?.address?.pinCode}
                </p>{" "}
                <p>
                  {" "}
                  <strong className="text-primary">Phone:</strong>{" "}
                  {oneOrder?.address?.phone}
                </p>{" "}
                <p>
                  {" "}
                  <strong className="text-primary">
                    Alternate Phone:
                  </strong>{" "}
                  {oneOrder?.address?.alternatePhone}
                </p>{" "}
                <p>
                  {" "}
                  <strong className="text-primary">Address Type:</strong>{" "}
                  {oneOrder?.address?.addressType}
                </p>
              </div>
              <h3 className="text-xl font-semibold mt-6 text-primary">
                Payment Details
              </h3>
              <div className="space-y-2">
                <p>
                  <strong className="text-primary">Method:</strong>{" "}
                  {oneOrder?.paymentDetails?.method}
                </p>
                {/* <p><strong>UPI ID:</strong> {oneOrder?.paymentDetails?.details}</p> */}
                <p>
                  <strong className="text-primary">Status:</strong>{" "}
                  {oneOrder?.paymentStatus}
                </p>{" "}
                <p>
                  <strong className="text-primary">Payment Id:</strong>{" "}
                  {oneOrder?.razorPayOrderId}
                </p>
              </div>
              <h3 className="text-xl font-semibold mt-6 text-primary">
                Discount & Coupons
              </h3>
              <div className="space-y-2">
                <p>
                  <strong className="text-primary">Coupon Code:</strong>{" "}
                  {oneOrder?.appliedCouponAndDiscount?.code || "N/A"}
                </p>
                <p>
                  <strong className="text-primary">Discount:</strong> ₹
                  {oneOrder?.appliedCouponAndDiscount?.discount}
                </p>
              </div>
            </div>
            <PriceBreakdown
              totalPrice={oneOrder.totalPrice}
              gstAmount={oneOrder?.gstAmount}
              gstPercentage={oneOrder?.gstPercentage}
              platformFee={oneOrder?.platformFee}
              platformGstAmount={oneOrder?.platformGstAmount}
              gatewayFeeRate={gatewayFeeRate}
              feesPercentage={oneOrder?.feesPercentage || 12}
            />
          </>
        )}
        {modalType === "download" && (
          <div className="w-full flex items-center justify-center">
            <DateRangePicker onSearch={downloadOrdersCSVApiHandle} />
          </div>
        )}
      </ReusableModal>
    </div>
  );
}

export default OngoingOrder;

import React, { useEffect, useState } from "react";
import useServices from "../../hooks/useServices";
import adminActionsApi from "../../services/adminActionsApi";
import TableComponetWithApi from "../../utils/TableComponetWithApi";
import { formatDate } from "../../utils/formatDate";
import useDebounce from "../../utils/useDebounce";
import { formatDateTime } from "../../utils/formatDateTime";
function BookingCTA({ term }) {
  const [page, setPage] = useState(1);
  const [allErrorLogs, setAllErrorLogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const debounce = useDebounce(term);
  const getAllBookingCtaApi = useServices(adminActionsApi.getAllBookingCta);
  const getAllErrorLogsApiHandle = async () => {
    const queryParams = {
      search: debounce || "",
      page: page || 1,
      // sortOrder: sortvalue || "asc",
    };

    const response = await getAllBookingCtaApi.callApi(queryParams);
    setAllErrorLogs(response ? response?.data : []);
    setTotalPages(response ? response?.totalPages : 1);
  };

  useEffect(() => {
    getAllErrorLogsApiHandle();
  }, [page, debounce]);
  const columns = [
    { label: "No", key: "index", render: (_, i) => i + 1 },
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Phone Number",
      key: "phone",
    },
    {
      label: "Email",
      key: "email",
    },
    {
      label: "Event Type",
      key: "eventType",
    },
    // {
    //   label: "Event Date",
    //   key: "preferredDate",
    //   render: (row) => row?.preferredDate ?? "",
    // },
    {
      label: "Event Month",
      key: "eventMonth",
    },
    {
      label: "Event Location",
      key: "eventLocation",
    },
    {
      label: "Form Submitted Date",
      key: "preferredDate",
      render: (row) => formatDateTime(row?.createdAt),
    },
  ];
  return (
    <div>
      {" "}
      <TableComponetWithApi
        columns={columns}
        data={allErrorLogs}
        page={page}
        itemsPerPage={10}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
}

export default BookingCTA;

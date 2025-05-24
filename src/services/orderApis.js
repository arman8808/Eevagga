import apiService from "./apiService";
import apiEndpoints from "./apiEndpoints";

const orderApis = {
  createUserOrder: (userId, numofParts, formdata) => {
    // Proceed with the API call
    return apiService.post(
      apiEndpoints.order.createOrder(userId, numofParts),
      formdata
    );
  },

  valiDateUserOrder: (formdata) =>
    apiService.post(apiEndpoints.order.validateOrder, formdata),
  getPaymentDetailsByOrderId: (orderId) =>
    apiService.post(apiEndpoints.order.getpaymentdetailsbyuserid(orderId)),
  getPaymentDetailsByOrderId: (orderId) =>
    apiService.post(apiEndpoints.order.getpaymentdetailsbyuserid(orderId)),
  getAllNewOrder: (queryParams) =>
    apiService.get(apiEndpoints.order.getallneworder, queryParams),
  getAllCancelledOrder: (queryParams) =>
    apiService.get(apiEndpoints.order.getallcancelledorder, queryParams),
  getAllOngoingOrder: (queryParams) =>
    apiService.get(apiEndpoints.order.getallongoingorder, queryParams),
  getAllCompleteOrder: (queryParams) =>
    apiService.get(apiEndpoints.order.getallcompleteorder, queryParams),
  getAllConfirmedOrder: (queryParams) =>
    apiService.get(apiEndpoints.order.getallconfirmedorder, queryParams),
  getOrderByUserId: (userId) =>
    apiService.get(apiEndpoints.order.getorderbyuserid(userId)),
  getconfirmedorderbyuserid: (userId) =>
    apiService.get(apiEndpoints.order.getconfirmedorderbyuserid(userId)),
  getactiveorderbyuserid: (userId) =>
    apiService.get(apiEndpoints.order.getactiveorderbyuserid(userId)),
  getcompletedorderbyuserid: (userId) =>
    apiService.get(apiEndpoints.order.getcompletedorderbyuserid(userId)),
  getcancelledorderbyuserid: (userId) =>
    apiService.get(apiEndpoints.order.getcancelledorderbyuserid(userId)),
  getOneUserOrderByOrderId: (orderId, itemId) =>
    apiService.get(
      apiEndpoints.order.getoneuserorderbyorderid(orderId, itemId)
    ),
  getNewOrderByVendorId: (vendorId) =>
    apiService.get(apiEndpoints.order.getneworderbyvendorid(vendorId)),
  getConfirmedOrderByVendorId: (vendorId) =>
    apiService.get(apiEndpoints.order.getconfirmedorderbyvendorid(vendorId)),
  getvendoractiveorders: (vendorId) =>
    apiService.get(apiEndpoints.order.getVendorActiveOrders(vendorId)),
  getAllCompletedOrders: (vendorId) =>
    apiService.get(apiEndpoints.order.getAllCompletedOrders(vendorId)),
  getAllCancelledOrders: (vendorId) =>
    apiService.get(apiEndpoints.order.getAllCancelledOrders(vendorId)),
  AcceptUserOrderbyorderId: (orderId, id) =>
    apiService.post(apiEndpoints.order.acceptUserOrderbyorderId(orderId, id)),
  StartUserOrderbyorderId: (orderId, id) =>
    apiService.post(apiEndpoints.order.startUserOrderbyorderId(orderId, id)),
  EndUserorderbyorderId: (orderId, id) =>
    apiService.post(apiEndpoints.order.endUserorderbyorderId(orderId, id)),
  VerifyStartServicebyorderId: (orderId, id, formdata) =>
    apiService.post(
      apiEndpoints.order.verifyStartServicebyorderId(orderId, id),
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ),
  verifyEndServiceOrderId: (orderId, id, formdata) =>
    apiService.post(
      apiEndpoints.order.verifyEndServiceorderId(orderId, id),
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ),
  CancelOrder: (formdata) =>
    apiService.post(apiEndpoints.order.cancelOrder, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  GetOneOrderDetails: (formdata) =>
    apiService.post(apiEndpoints.order.getOneOrderDetails, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  GetOneOrderDetailsAdmin: (OrderId, itemId) =>
    apiService.get(
      apiEndpoints.order.getOneOrderDetailsadmin(OrderId, itemId),
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ),
  downloadOrdersCSV: (orderStatus, queryParams) =>
    apiService.get(
      apiEndpoints.order.downloadOrdersCSV(orderStatus),
      queryParams
    ),
};

export default orderApis;

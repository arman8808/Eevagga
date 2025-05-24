import apiService from "./apiService";
import apiEndpoints from "./apiEndpoints";

const commonApis = {
  getAllBanner: () => apiService.get(apiEndpoints.common.getAllBanner()),
  getUserBanner: () => apiService.get(apiEndpoints.common.getUserBanner()),
  getVendorBanner: () => apiService.get(apiEndpoints.common.getVendorBanner()),
  addToWaitlist: (formdata) =>
    apiService.post(apiEndpoints.common.addtowaitlist, formdata),
  addFeedBack: (formdata) =>
    apiService.post(apiEndpoints.common.addfeedback, formdata),
  getAllFeedBack: () => apiService.get(apiEndpoints.common.getallfeedback),
  getAllAaitlist: (queryParams) =>
    apiService.get(apiEndpoints.common.getallwaitlist, queryParams),
  CreateQuery: (formdata) =>
    apiService.post(apiEndpoints.common.createQuery, formdata),
  GetuserQuery: (userId) =>
    apiService.get(apiEndpoints.common.getuserQuery(userId)),
  GetvendorQuery: (userId) =>
    apiService.get(apiEndpoints.common.getvendorQuery(userId)),
  Getallquery: (role) => apiService.get(apiEndpoints.common.getallquery(role)),
  GetOneQueries: (queryId) =>
    apiService.get(apiEndpoints.common.getOneQueries(queryId)),
  getAllBlogs: () => apiService.get(apiEndpoints.common.getAllBlogs),
  getOneBlog: (blogId) =>
    apiService.get(apiEndpoints.common.getOneBlog(blogId)),
  getAllPublishedUrls: () =>
    apiService.get(apiEndpoints.common.getAllPublishedUrls),
  getOnePackageReview: (serviceId, packageId) =>
    apiService.get(
      apiEndpoints.common.getOnePackageReview(serviceId, packageId)
    ),
  addReviewWithUserId: (formdata) =>
    apiService.post(apiEndpoints.common.addReviewWithUserId, formdata),
  calculatedistance: (formdata) =>
    apiService.post(apiEndpoints.common.calculatedistance, formdata),
  getVendorPincode: (vendorId) =>
    apiService.get(apiEndpoints.common.getVendorPincode(vendorId)),
  getServiceableRadius: (vendorId) =>
    apiService.get(apiEndpoints.common.getServiceableRadius(vendorId)),
  bookingCta: (formdata) =>
    apiService.post(apiEndpoints.common.bookCta, formdata),
};

export default commonApis;

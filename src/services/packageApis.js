import apiService from "./apiService";
import apiEndpoints from "./apiEndpoints";

const packageApis = {
  getAllPackage: (queryParams) =>
    apiService.get(apiEndpoints.packages.getAllPackages(), queryParams),
  getAllPopular:()=> apiService.get(apiEndpoints.packages.getAllPopular),
  getOnePackage: (serviceId, packageId) =>
    apiService.get(apiEndpoints.packages.getOnePackage(serviceId, packageId)),
};

export default packageApis;

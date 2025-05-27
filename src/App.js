import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { internalRoutes } from "./utils/internalRoutes";
import { ToastContainer } from "react-toastify";
import ErrorHandler from "./components/Errors/ErrorHandler";
import { ErrorProvider } from "./context/ErrorContext";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga4";
import DynamicNav from "./components/navbar/DynamicNav";
import Footer from "./components/Footer/Footer";
import GlobalLoader from "./components/Loaders/GlobalLoader";
import { lazy, Suspense, useEffect } from "react";
import GoToTop from "./GoToTop";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserWishlist } from "./context/redux/slices/wishlistSlice";
import Cookies from "js-cookie";
import GlobalEventHandlers from "./utils/GlobalEventHandlers";
import Loader from "./components/Loaders/Loader";
import WhatsAppButton from "./utils/WhatsAppButton";
import ThankYou from "./pages/ThankYou.js";
import StickyAd from "./utils/StickyAd.js";
import Navbar from "./components/navbar/Navbar.jsx";
import AboutEvaga from "./pages/AboutEvaga";
import OurService from "./pages/OurService.jsx";
const Home = lazy(() => import("./pages/HomepageNew.jsx"));
const SinglePackage = lazy(() => import("./pages/SinglePackage"));
const UserLoginPage = lazy(() => import("./pages/User/UserLoginPage"));
const VendorDashboard = lazy(() => import("./pages/Vendor/VendorDashboard"));
const VendorSignUpPage = lazy(() => import("./pages/Vendor/VendorSignUpPage"));
const VendorLoginPage = lazy(() => import("./pages/Vendor/VendorLoginPage"));
const VendorProfile = lazy(() => import("./pages/Vendor/VendorProfilePage"));
const VendorCreateService = lazy(() =>
  import("./pages/Vendor/VendorCreateService")
);
const VendorOrderPage = lazy(() => import("./pages/Vendor/VendorOrderPage"));
const VendorOrderDetailPage = lazy(() =>
  import("./pages/Vendor/VendorOrderDetailPage")
);
const VendorForgotPasswordPage = lazy(() =>
  import("./pages/Vendor/VendorForgotPasswordPage")
);
const VendorEditService = lazy(() =>
  import("./pages/Vendor/VendorEditService")
);
const AdminLoginPage = lazy(() => import("./pages/Admin/AdminLoginPage"));
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const SearchResultPage = lazy(() => import("./pages/SearchResultPage "));
const UserSignupPage = lazy(() => import("./pages/User/UserSignupPage"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const UserForgotPassword = lazy(() =>
  import("./pages/User/UserForgotPassword")
);
const UserProfile = lazy(() => import("./pages/User/UserProfile"));
const PressRelease = lazy(() => import("./pages/PressRelease"));
const CheckOut = lazy(() => import("./pages/CheckOut"));
// const AboutEvaga = lazy(() => import("./pages/AboutEvaga"));

const RefundAndCancellation = lazy(() =>
  import("./pages/RefundAndCancellation")
);
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const FeedBack = lazy(() => import("./pages/FeedBack"));
const CustomerService = lazy(() => import("./pages/CustomerService"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const OrderSucessPage = lazy(() => import("./pages/OrderSucessPage"));
const OrderPage = lazy(() => import("./pages/OrderPage"));
const UserOrderDetailPage = lazy(() => import("./pages/userOrderDetailPage"));
const VendorService = lazy(() => import("./pages/Vendor/VendorService"));
const PrivacyAndPolicy = lazy(() => import("./pages/PrivacyAndPolicy"));
const Careers = lazy(() => import("./pages/Careers"));
const AdvertisewithUs = lazy(() => import("./pages/AdvertisewithUs"));
const Blog = lazy(() => import("./pages/Blog"));
const SingleBlogPage = lazy(() => import("./pages/singleBlogPage"));
const InterestSelection = lazy(() => import("./pages/InterestSelection"));
const BookingForm = lazy(() => import("./pages/BookingForm.js"));
// const OurService = lazy(() => import("./pages/OurService.jsx"));
const AppContent = () => {
  const { auth } = useAuth();
  const dispatch = useDispatch();
  const location = useLocation();
  const userId = Cookies.get("userId");
  const { allWishlist } = useSelector((state) => state.wishlist);
  const noNavbarPaths = [
    internalRoutes.userSignup,
    internalRoutes.userLogin,
    internalRoutes.adminSignup,
    internalRoutes.adminLogin,
    internalRoutes.vendorLogin,
    internalRoutes.vendorSignup,
    internalRoutes.vendorForgotPassword,
    internalRoutes.userForgotPassword,
    internalRoutes.adminDashboard,
    internalRoutes.interest,
  ];
  const noWhatsappPaths = [
    internalRoutes.adminSignup,
    internalRoutes.adminLogin,
    internalRoutes.adminDashboard,
    internalRoutes.interest,
  ];
  useEffect(() => {
    if (
      auth?.isAuthenticated &&
      auth?.role === "user" &&
      allWishlist?.length === 0
    ) {
      dispatch(fetchUserWishlist(userId));
    }
  }, [auth, allWishlist, userId, dispatch]);
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    const events = ["selectstart", "contextmenu", "copy", "cut", "dragstart"];

    events.forEach((event) => {
      document.addEventListener(event, preventDefault);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, preventDefault);
      });
    };
  }, []);
  return (
    <>
      {/* {!noNavbarPaths.includes(location.pathname) && <DynamicNav />} */}
      <Navbar />
      <GlobalEventHandlers>
        <GlobalLoader />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {!noWhatsappPaths.includes(location.pathname) && <WhatsAppButton />}{" "}
        {!noWhatsappPaths.includes(location.pathname) && <StickyAd />}
        <GoToTop />
        <Routes>
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <AdminLoginPage />
              </Suspense>
            }
            path={internalRoutes.adminLogin}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <UserLoginPage />
              </Suspense>
            }
            path={internalRoutes.userLogin}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <UserSignupPage />
              </Suspense>
            }
            path={internalRoutes.userSignup}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute allowedRoles={["user"]}>
                  <UserProfile />
                </ProtectedRoute>
              </Suspense>
            }
            path={internalRoutes.profile}
          />{" "}
          <Route
            element={
              // <Suspense fallback={<Loader />}>
                <OurService />
              // </Suspense>
            }
            path={internalRoutes.ourServices}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <UserForgotPassword />
              </Suspense>
            }
            path={internalRoutes.userForgotPassword}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
            path={internalRoutes.home}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <InterestSelection />
              </Suspense>
            }
            path={internalRoutes.interest}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <SearchResultPage />
              </Suspense>
            }
            path={internalRoutes.searchresultPage}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <Wishlist />
              </Suspense>
            }
            path={internalRoutes.wishlist}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <CheckOut />
              </Suspense>
            }
            path={internalRoutes.checkout}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <PaymentPage />
              </Suspense>
            }
            path={internalRoutes.payment}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <OrderSucessPage />
              </Suspense>
            }
            path={internalRoutes.orderStatus}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <PressRelease />
              </Suspense>
            }
            path={internalRoutes.pressReleases}
          />
          <Route
            element={
              // <Suspense fallback={<Loader />}>
              <AboutEvaga />
              // </Suspense>
            }
            path={internalRoutes.aboutUs}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <Blog />
              </Suspense>
            }
            path={internalRoutes.blog}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <SingleBlogPage />
              </Suspense>
            }
            path={`${internalRoutes.singleBlog + "/:blogId"}`}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <RefundAndCancellation />
              </Suspense>
            }
            path={internalRoutes.cancellationPolicy}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <TermsAndConditions />
              </Suspense>
            }
            path={internalRoutes.TermsAndConditions}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <PrivacyAndPolicy />
              </Suspense>
            }
            path={internalRoutes.privacyAndPolicy}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <Careers />
              </Suspense>
            }
            path={internalRoutes.careers}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <AdvertisewithUs />
              </Suspense>
            }
            path={internalRoutes.advertiseWithUs}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <FeedBack />
              </Suspense>
            }
            path={internalRoutes.feedbackForm}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <CustomerService />
              </Suspense>
            }
            path={internalRoutes.customerService}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <VendorService />
              </Suspense>
            }
            path={internalRoutes.vendorSupport}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <OrderPage />
              </Suspense>
            }
            path={internalRoutes.order}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <UserOrderDetailPage />
              </Suspense>
            }
            path={`${internalRoutes.orderDetail + "/:orderId/:itemId"}`}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <VendorOrderDetailPage />
              </Suspense>
            }
            path={`${internalRoutes.vendorOrderDeatil + "/:orderId/:itemId"}`}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <SinglePackage />
              </Suspense>
            }
            path={`${internalRoutes.SinglePackage + "/:serviceId/:packageId"}`}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <VendorSignUpPage />
              </Suspense>
            }
            path={internalRoutes.vendorSignup}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <VendorLoginPage />
              </Suspense>
            }
            path={internalRoutes.vendorLogin}
          />
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <VendorForgotPasswordPage />
              </Suspense>
            }
            path={internalRoutes.vendorForgotPassword}
          />
          {/* Vendor Protected Routes */}
          <Route
            path={internalRoutes.vendorDashboard}
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute allowedRoles={["vendor"]}>
                  <VendorDashboard />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path={internalRoutes.vendorProfile}
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute allowedRoles={["vendor"]}>
                  <VendorProfile />
                </ProtectedRoute>
              </Suspense>
            }
          />{" "}
          <Route
            path={internalRoutes.vendorCreateservice}
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute allowedRoles={["vendor"]}>
                  <VendorCreateService />
                </ProtectedRoute>
              </Suspense>
            }
          />{" "}
          <Route
            path={`${internalRoutes.vendorEditservice}/:serviceId`}
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute allowedRoles={["vendor"]}>
                  <VendorEditService />
                </ProtectedRoute>
              </Suspense>
            }
          />{" "}
          <Route
            path={internalRoutes.vendorOrders}
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute allowedRoles={["vendor"]}>
                  <VendorOrderPage />
                </ProtectedRoute>
              </Suspense>
            }
          />{" "}
          <Route
            path={internalRoutes.vendorOrderDeatil}
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute allowedRoles={["vendor"]}>
                  <VendorOrderDetailPage />
                </ProtectedRoute>
              </Suspense>
            }
          />
          {/* Admin Protected Routes */}
          <Route
            path={internalRoutes.adminDashboard}
            element={
              <Suspense fallback={<Loader />}>
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              </Suspense>
            }
          />{" "}
          <Route
            path={internalRoutes.bookingForm}
            element={
              <Suspense fallback={<Loader />}>
                <BookingForm />
              </Suspense>
            }
          />{" "}
          <Route
            path={internalRoutes.thankyou}
            element={
              <Suspense fallback={<Loader />}>
                <ThankYou />
              </Suspense>
            }
          />
        </Routes>
        {!noNavbarPaths.includes(location.pathname) && <Footer />}
      </GlobalEventHandlers>
    </>
  );
};

function App() {
  useEffect(() => {
    if (process.env.REACT_APP_Server === "production") {
      ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
    }
  }, []);

  return (
    <Router>
      <AuthProvider>
        <ErrorProvider>
          <ErrorHandler />
          <AppContent />
        </ErrorProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

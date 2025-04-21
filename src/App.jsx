import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TenantDashboard from './pages/TenantDashoard';
import PreLoginDashboard from "./pages/PreLoginDashboard";
import LandlordDashboard from "./pages/landlordDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PropertyDetails from "./pages/propertyDetail";
import MyListings from "./pages/tenant/MyListings";
import Messages from "./pages/tenant/Messages";
import Notifications from "./pages/tenant/Notifications";
import Profile from "./pages/tenant/Profile";
import Booking from "./pages/tenant/Booking";


import MylistingsL from "./pages/landlord/MyListingsL";
import AddListing from "./pages/landlord/AddListings";
import MessagesL from "./pages/landlord/Messages";
import BookingL from "./pages/landlord/BookingL";
import ProfileL from "./pages/landlord/ProfileL";
import EditListing from "./pages/landlord/Editlistings";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<PreLoginDashboard />} />
          <Route path="/tenantDashboard" element={<TenantDashboard />} />
          <Route path="/landlordDashboard" element={<LandlordDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/tenant/my-listings" element={<MyListings />} />
          <Route path="/tenant/messages" element={<Messages />} />
          <Route path="/tenant/notifications" element={<Notifications />} />
          <Route path="/tenant/profile" element={<Profile />} />
          <Route path="/booking/:id" element={<Booking />} />



          <Route path="/landlord/my-listings" element={<MylistingsL />} />
          <Route path="/landlord/add-listings" element={<AddListing />} />
          <Route path="/landlord/messages" element={<MessagesL />} />
          <Route path="/landlord/notification" element={<Notification />} />
          <Route path="/landlord/requests" element={<BookingL />} />
          <Route path="/landlord/profile" element={<ProfileL />} />
          <Route path="/landlord/edit-listing/:id" element={<EditListing />} />



        </Routes>
      </Router>
  );
}

export default App;

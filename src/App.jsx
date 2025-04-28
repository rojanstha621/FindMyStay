import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TenantDashboard from './pages/tenant/TenantDashoard';
import PreLoginDashboard from "./pages/PreLoginDashboard";
import LandlordDashboard from "./pages/landlord/landlordDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PropertyDetails from "./pages/propertyDetail";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import MyListings from "./pages/tenant/MyListings";
import Messages from "./pages/tenant/Messages";
import Notifications from "./pages/tenant/Notifications";
import Profile from "./pages/tenant/Profile";
import Booking from "./pages/tenant/Booking";
import ContactLandlordPage from "./pages/tenant/ContactLandlordPage"; 
import Settings from "./pages/tenant/Settings";
import PaymentHistory from "./pages/tenant/PaymentHistory";


import MylistingsL from "./pages/landlord/MyListingsL";
import AddListing from "./pages/landlord/AddListings";
import MessagesL from "./pages/landlord/Messages";
import BookingL from "./pages/landlord/BookingL";
import ProfileL from "./pages/landlord/ProfileL";
import EditListing from "./pages/landlord/Editlistings";
import LandlordPayments from "./pages/landlord/landlordPayments";


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<PreLoginDashboard />} />
          <Route path="/tenantDashboard" element={<TenantDashboard />} />
          <Route path="/landlordDashboard" element={<LandlordDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/tenant/my-listings" element={<MyListings />} />
          <Route path="/tenant/messages" element={<Messages />} />
          <Route path="/tenant/notifications" element={<Notifications />} />
          <Route path="/tenant/profile" element={<Profile />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/contact-landlord/:id" element={<ContactLandlordPage />} />
          <Route path="/tenant/settings" element={<Settings />} />
          <Route path="/tenant/payments" element={<PaymentHistory />} />


          <Route path="/landlord/my-listings" element={<MylistingsL />} />
          <Route path="/landlord/add-listings" element={<AddListing />} />
          <Route path="/landlord/messages" element={<MessagesL />} />
          <Route path="/landlord/notification" element={<Notification />} />
          <Route path="/landlord/requests" element={<BookingL />} />
          <Route path="/landlord/profile" element={<ProfileL />} />
          <Route path="/landlord/edit-listing/:id" element={<EditListing />} />
          <Route path="/landlord/payments" element={<LandlordPayments />} />



        </Routes>
      </Router>
  );
}

export default App;

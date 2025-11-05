import React from "react";
import AdminNav from "../Components/AdminNav";
import QuickNavigation from "../Components/QuickNavigation";
import StatsOverview from "../Components/StatsOverview";
import Dynamic from "../Components/Dynamic";
import Footer from "../Components/Footer";
import ProfitComparison from "../Components/ProfilComparison";
import RevenueSummary from "../Components/RevenueSummary";

// import "./AdminHome.css";

const AdminHome = () => {
  return (
    <div className="admin-home">
      <AdminNav />
      <div className="admin-content">
        <QuickNavigation />
        <Dynamic />
        <StatsOverview />

        <ProfitComparison />
        <RevenueSummary />
        <Footer />
      </div>
    </div>
  );
};

export default AdminHome;

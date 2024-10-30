import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../WebsitePages/Home";
import Menu from "../WebsitePages/Menu";
import Aboout from "../WebsitePages/Aboout";
import Reservation from "../WebsitePages/Reservation";
import Contact from "../WebsitePages/Contact";
import ConfirmReservation from "../WebsitePages/ConfirmReservation";
import Checkout from "../WebsitePages/Checkout";

const WebRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<Aboout />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confirm" element={<ConfirmReservation />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default WebRoutes;

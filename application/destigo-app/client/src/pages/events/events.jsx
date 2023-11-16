import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./events.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import EventList from "../../components/eventList/EventList";

const events = () => {
  return (
    <>
      <Navbar />
      <Header header={"Events"} />
      <EventList/>
      <Footer />
    </>
  );
};

export default events;

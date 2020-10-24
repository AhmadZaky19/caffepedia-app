import React from "react";
import Header from "../components/history/header";
import LeftBar from "../components/history/leftbar";
import Main from "../components/history/main";
import ModalAdd from "../components/history/modalAdd";
import "../asset/history.css";

const History = () => {
  return (
    <>
      <div>
        <Header />
        <div className="container-css">
          <LeftBar />
          <Main />
          <ModalAdd />
        </div>
      </div>
    </>
  );
};

export default History;

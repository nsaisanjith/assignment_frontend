import React, { useState } from "react";
// import axios from "axios";
import EntriesList from "./EntriesList";
import CreateModal from "./CreateModal";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const MainPage = () => {
  const [isCreate, setIsCreate] = useState(false);
  return (
    <>
      <div class="header">
        <h1>Lender Borrower</h1>
      </div>
      <div class="main-content">
        <EntriesList />
      </div>
      <div class="footer">
        <p>Created by <b>Sai Sanjith Narasaraj</b></p>
      </div>
      <Fab className="createButton" color="primary" aria-label="add" onClick={() => setIsCreate(!isCreate)}>
        <AddIcon />
      </Fab>
      <CreateModal open={isCreate} handleClose={() => {
        console.log("close");
        setIsCreate(false);
      }}/>
    </>
  );
}
export default MainPage;

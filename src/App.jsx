import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Table from "./components/Table";
import { AXIOS_ESHOP } from "./utils/constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await AXIOS_ESHOP.get("/orders");
      setOrders(data.orders);
    };
    getData();
  }, []);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Table orders={orders} />
      </Grid>

      <ToastContainer theme="colored" />
    </Grid>
  );
};

export default App;

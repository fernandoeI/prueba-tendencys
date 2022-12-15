import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductDetail from "./ProductDetail";

const DetailsTable = ({ products, setOpen, orderId, setSelectedOrder }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const productsFromStorage = JSON.parse(localStorage.getItem("products"));

      if (productsFromStorage) {
        const filtered = productsFromStorage.filter(
          (products) => products.orderId === orderId
        );
        setItems([...products, ...filtered]);
      } else {
        setItems(products);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container>
      <Grid
        item
        container
        justifyContent="space-between"
        textAlign="center"
        marginBottom={2}
      >
        <Grid item>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setSelectedOrder(orderId);
              setOpen(true);
            }}
          >
            Añdir productos
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            size="small"
            onClick={() => toast.success("Pago realizado con éxito")}
          >
            Pagar
          </Button>
        </Grid>
      </Grid>

      {items.map((product, key) => (
        <Grid item container spacing={4} key={key}>
          <Grid item>
            <ProductDetail value={product.sku} title="SKU" />
          </Grid>
          <Grid item>
            <ProductDetail value={product.name} title="NAME" />
          </Grid>
          <Grid item>
            <ProductDetail value={product.quantity} title="QUANTITY" />
          </Grid>
          <Grid item>
            <ProductDetail value={product.price} title="PRICE" />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default DetailsTable;

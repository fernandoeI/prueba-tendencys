import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Grid,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { toast } from "react-toastify";

const AddProduct = ({ open, setOpen, orderId }) => {
  const [addData, setAddData] = useState({
    sku: "",
    name: "",
    quantity: "",
    price: "",
  });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false);

    if (
      !addData.sku.trim() ||
      !addData.name.trim() ||
      !addData.quantity.trim() ||
      !addData.price.trim()
    ) {
      setError(true);
    }

    const products = JSON.parse(localStorage.getItem("products")) || [];

    products.push({ ...addData, orderId });
    localStorage.setItem("products", JSON.stringify(products));
    toast.success("Producto añadido con éxito a la orden");
    setTimeout(() => window.location.reload(), 2000);
  };

  return (
    <Dialog maxWidth="xs" open={open} onClose={() => setOpen(false)}>
      <DialogContent>
        <Typography variant="subtitle1" color="primary" marginBottom={1}>
          Añadir producto a orden de compra
        </Typography>

        <Grid container spacing={2} component="form" onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="SKU"
              variant="outlined"
              error={error && !addData.sku.trim()}
              helperText={
                error && !addData.sku.trim() ? "Campo requerido" : null
              }
              value={addData.sku}
              onChange={(e) => setAddData({ ...addData, sku: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Name"
              variant="outlined"
              error={error && !addData.name.trim()}
              helperText={
                error && !addData.name.trim() ? "Campo requerido" : null
              }
              value={addData.name}
              onChange={(e) => setAddData({ ...addData, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Quantity"
              variant="outlined"
              error={error && !addData.quantity.trim()}
              helperText={
                error && !addData.quantity.trim() ? "Campo requerido" : null
              }
              value={addData.quantity}
              onChange={(e) =>
                setAddData({ ...addData, quantity: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Price"
              variant="outlined"
              error={error && !addData.price.trim()}
              helperText={
                error && !addData.price.trim() ? "Campo requerido" : null
              }
              value={addData.price}
              onChange={(e) =>
                setAddData({ ...addData, price: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" size="small" type="submit">
              Agregar
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;

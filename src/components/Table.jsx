import React, { useState } from "react";
import MaterialReactTable from "material-react-table";
import { Grid } from "@mui/material";
import DetailsTable from "./DetailsTable";
import AddProduct from "./AddProduct";

const Table = ({ orders }) => {
  const [open, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const columns = [
    {
      accessorKey: "id",
      header: "ID de orden",
    },
    {
      accessorKey: "number",
      header: "Número de orden",
    },
  ];

  return (
    <Grid container>
      <Grid item>
        <MaterialReactTable
          columns={columns}
          data={orders}
          enableColumnResizing={false}
          enableDensityToggle={false}
          enableFullScreenToggle={false}
          renderDetailPanel={({ row }) => (
            <DetailsTable
              products={row.original.items}
              setOpen={setOpen}
              orderId={row.original.id}
              setSelectedOrder={setSelectedOrder}
            />
          )}
          positionActionsColumn="last"
        />
      </Grid>
      {open ? (
        <AddProduct open={open} setOpen={setOpen} orderId={selectedOrder} />
      ) : null}
    </Grid>
  );
};

export default Table;

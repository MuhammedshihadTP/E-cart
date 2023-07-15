import { Box, Typography } from "@mui/material";
import React from "react";
import { productListing } from "../assets/data/ProdectListing";
import ProductCard from "../components/ProductCard";

function Backpackpage() {
  // Filter the products to display only those belonging to the "BackPack" category
    const filteredProducts = productListing.filter(
        (product) => product.category === "BackPack"
      );
  return (
    <div>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        BackPack
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "3rem",
          marginTop: "1rem",
          "@media (max-width: 912px)": {
            gridTemplateColumns: "repeat(1, 1fr)",
          },
        }}
      >
        {" "}
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            data={product}
          />
        ))}
      </Box>
    </div>
  );
}

export default Backpackpage;

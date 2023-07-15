import { Box, Typography } from "@mui/material";
import React from "react";
import { productListing } from "../assets/data/ProdectListing";
import ProductCard from "../components/ProductCard";

function ShoesPage() {
  // Filter the products to display only those belonging to the "Shoes" category
    const filteredProducts = productListing.filter(
        (product) => product.category === "Shoes"
      );
  return (
    <div>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Shoes
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

export default ShoesPage;
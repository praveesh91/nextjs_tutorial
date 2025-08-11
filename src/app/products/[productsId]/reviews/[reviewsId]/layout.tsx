import React from "react";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <h2>Featured Products</h2>
    </div>
  );
};

export default ProductsLayout;

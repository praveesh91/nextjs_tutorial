import React from "react";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <h2>This is part of nested layout</h2>
    </div>
  );
};

export default ProductsLayout;

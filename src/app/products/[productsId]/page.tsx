import React from "react";

const Detail = async ({
  params,
}: {
  params: Promise<{ productsId: string }>;
}) => {
  const productId = (await params).productsId;
  return <div> Details about the product {productId}</div>;
};

export default Detail;

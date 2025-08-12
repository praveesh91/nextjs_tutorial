import { Metadata } from "next";
import React from "react";

//generate dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { productsId: string };
}): Promise<Metadata> {
  const id = params.productsId;
  return {
    title: `Product ${id}`,
  };
}

const Detail = ({ params }: { params: { productsId: string } }) => {
  const productId = params.productsId;
  return <div>Details about the product {productId}</div>;
};

export default Detail;

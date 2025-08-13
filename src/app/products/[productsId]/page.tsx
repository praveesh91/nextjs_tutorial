import { Metadata } from "next";
import Link from "next/link";
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
  return (
    <div>
      <h3 className="text-3xl font-bold">
        {" "}
        Details about the product {productId}
      </h3>
      <Link className="text-blue-400" href={`/products/${productId}/reviews/1`}>
        Review
      </Link>
    </div>
  );
};

export default Detail;

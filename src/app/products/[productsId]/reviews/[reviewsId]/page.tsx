import { notFound } from "next/navigation";
import React from "react";

const ReviewDetail = async ({
  params,
}: {
  params: { reviewsId: string; productsId: string };
}) => {
  const { reviewsId, productsId } = await params;
  if (parseInt(reviewsId) > 500) {
    notFound();
  }
  return (
    <div className="text-2xl font-medium">
      Review {reviewsId} Product {productsId}
    </div>
  );
};

export default ReviewDetail;

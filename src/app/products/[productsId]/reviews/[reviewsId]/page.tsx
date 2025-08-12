import { notFound } from "next/navigation";
import React from "react";

const ReviewDetail = ({
  params,
}: {
  params: { reviewsId: string; productsId: string };
}) => {
  const { reviewsId, productsId } = params;
  if (parseInt(reviewsId) > 500) {
    notFound();
  }
  return (
    <div>
      Review {reviewsId} Product {productsId}
    </div>
  );
};

export default ReviewDetail;

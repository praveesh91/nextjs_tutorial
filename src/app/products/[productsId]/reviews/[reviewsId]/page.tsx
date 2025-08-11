import React from "react";

const ReviewDetail = async ({
  params,
}: {
  params: Promise<{ reviewsId: string; productsId: string }>;
}) => {
  const { reviewsId, productsId } = await params;
  return (
    <div>
      Review {reviewsId} Product {productsId}
    </div>
  );
};

export default ReviewDetail;

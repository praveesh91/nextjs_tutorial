import React from "react";

const Docs = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;

  if (slug.length === 1) {
    return <div>Viewing docs for feature {slug[0]}</div>;
  }

  if (slug.length === 2) {
    return (
      <div>
        Viewing docs for feature {slug[0]} and concept of {slug[1]}
      </div>
    );
  }

  return <div>Docs home page</div>;
};

export default Docs;

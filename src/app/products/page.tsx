import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/products/1"} replace>
            Product 1
          </Link>
        </li>
        <li>
          <Link href={"/products/2"}>Product 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;

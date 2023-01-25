import React from "react";

export default function CountDataItem({ title, count }: any) {
  return (
    <div>
      <h5 className="text-center">{count}</h5>
      <p className="py-2 bg-black bg-opacity-25 fw-semibold px-4 rounded-1">{title}</p>
    </div>
  );
}

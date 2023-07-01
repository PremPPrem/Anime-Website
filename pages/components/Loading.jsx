import React from "react";
import { Watch } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="py-[4rem] flex items-center justify-center">
      <Watch
        height="120"
        width="120"
        radius="48"
        color="#f59e0b"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

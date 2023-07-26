import React from "react";
import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const BillboardComponent: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden drop-shadow-md">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-2xl relative aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-extrabold text-3xl sm:text-5xl lg:text-8xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillboardComponent;

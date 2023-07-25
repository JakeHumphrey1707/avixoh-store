"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoPros {
  data: Product;
}

const Info: React.FC<InfoPros> = ({
  data
}) => {
  return ( 
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4"/>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">
            Brand
          </h3>
          <div>
            {data?.brand?.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">
            Weight
          </h3>
          <div>
            {data?.weight?.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">
            Colour
          </h3>
          <div>
            {data?.colour?.name}
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
   );
}
 
export default Info;
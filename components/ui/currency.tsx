"use client";

import { useEffect, useState } from "react";

export const formatters = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "AUD"
});

interface CurrencyProps {
  value?: string | number;
}


const Currency: React.FC<CurrencyProps> = ({
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted) {
    return null;
  }

  return ( 
    <div className="font-semibold">
      {formatters.format(Number(value))}
    </div>
   );
}
 
export default Currency;
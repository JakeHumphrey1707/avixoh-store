"use client";

import React from "react";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Brand, Weight, Colour } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface FilterProps {
  data: (Weight | Brand | Colour)[];
  name: string;
  valueKey: string;
  category: string; // Add a category prop
}

const Filter: React.FC<FilterProps> = ({
  data,
  name,
  valueKey,
  category, // Destructure the category prop
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  // Filter the data based on category and sort alphabetically
  const sortedData = data
    .filter((filter) => {
      if (category === "yarn") {
        return !/^0+/.test(filter.name); // Exclude filters with leading zeros
      } else {
        return /^0+/.test(filter.name); // Include only filters with leading zeros
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {sortedData.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === filter.id && "bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
               {filter.name.replace(/^0+/, '')}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;

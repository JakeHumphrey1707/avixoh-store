"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Brand, Weight, Colour } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import Filter from "./filter";

interface MobileFiltersProps {
  weights: Weight[];
  brands: Brand[];
  colours: Colour[];
  categoryName: string;
}

const determineFilterTitles = (categoryName: string) => {
  return categoryName.toLowerCase().includes("yarn")
    ? { title1: "Weights", title2: "Brands", title3: "Colours" }
    : { title1: "Bodyshapes", title2: "Accessories", title3: "Genders" };
};

const MobileFilters: React.FC<MobileFiltersProps> = ({
  weights,
  brands,
  colours,
  categoryName,
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const filterTitles = determineFilterTitles(categoryName);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} className="" />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter
                valueKey="weightId"
                name={filterTitles.title1}
                data={weights}
                category={categoryName} // Pass the categoryName as a prop
              />
              <Filter
                valueKey="brandId"
                name={filterTitles.title2}
                data={brands}
                category={categoryName} // Pass the categoryName as a prop
              />
              <Filter
                valueKey="colourId"
                name={filterTitles.title3}
                data={colours}
                category={categoryName} // Pass the categoryName as a prop
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;

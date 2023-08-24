import React from "react";
import getBrands from "@/actions/get-brands";
import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import getWeights from "@/actions/get-weights";
import getColours from "@/actions/get-colours";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string,
  },
  searchParams: {
    weightId: string,
    brandId: string,
    colourId: string,
  }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    weightId: searchParams.weightId,
    brandId: searchParams.brandId,
    colourId: searchParams.colourId
  });
  const weights = await getWeights();
  const brands = await getBrands();
  const colours = await getColours();
  const category = await getCategory(params.categoryId);

  // Determine the filter titles based on the category name
  const categoryName = category.name.toLowerCase();
  const isYarnCategory = categoryName.includes("yarn");

  const filterTitles = isYarnCategory
    ? { title1: "Weights", title2: "Brands", title3: "Colours" }
    : { title1: "Bodyshapes", title2: "Accessories", title3: "Genders" };

  return ( 
    <div className="bg-white">
      <Container>
        <Billboard 
          data={category.billboard}
        />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters weights={weights} brands={brands} colours={colours} categoryName={categoryName} />
            <div className="hidden lg:block">
              <Filter 
                valueKey="weightId"
                name={filterTitles.title1}
                data={weights}
                category={categoryName}
              />
              <Filter 
                valueKey="brandId"
                name={filterTitles.title2}
                data={brands}
                category={categoryName}
              />
              <Filter 
                valueKey="colourId"
                name={filterTitles.title3}
                data={colours}
                category={categoryName}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                {products.map((item) => (
                    <ProductCard
                      key={item.id}
                      data={item}
                    />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
   );
}
 
export default CategoryPage;

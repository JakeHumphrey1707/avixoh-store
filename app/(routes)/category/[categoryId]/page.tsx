import getBrands from "@/actions/get-brands";
import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import getWeights from "@/actions/get-weights";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/protoypelogo.png";
import getColours from "@/actions/get-colours";


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

  return ( 
    <div className="bg-white">
      <Container>
        <Billboard 
          data={category.billboard}
        />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters weights={weights} brands={brands} colours={colours} />
            <div className="hidden lg:block">
              <Filter 
                valueKey="weightId"
                name="Weights"
                data={weights}
              />
              <Filter 
                valueKey="brandId"
                name="Brands"
                data={brands}
              />
              <Filter 
                valueKey="colourId"
                name="Colours"
                data={colours}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
import React from "react";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);

  const isYarnCategory = product.category.name.toLowerCase() === "yarn";

  // Fetch suggested products with optional parameters based on the category
  const suggestedProducts = await getProducts({
    categoryId: product.category.id,
    ...(isYarnCategory && {
      brandId: product.brand.id,
      weightId: product?.weight?.id,
    }),
  });

  if (!product) {
    return null;
  }

  const title =
    product.category.name.toLowerCase() === "yarn"
      ? "Compare Colours"
      : "Related Products"

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />

              {/* Used CSS to preserve line breaks in the product description */}
              <div className="pt-8" style={{ whiteSpace: "pre-wrap" }}>
                {product.description}
              </div>
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title={title} items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;

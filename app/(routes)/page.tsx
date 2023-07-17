import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("c047ea69-e8bf-4c1e-a2a1-0024f5846db7");
  return ( 
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>About Us</AccordionTrigger>
              <AccordionContent>
                Your information goes here! Please tell me what to put in it - Jake
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Contact Us</AccordionTrigger>
              <AccordionContent>
                Your information goes here! Please tell me what to put in it - Jake
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Product Care FAQ</AccordionTrigger>
              <AccordionContent>
                Your information goes here! Please tell me what to put in it - Jake
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Shipping Information</AccordionTrigger>
              <AccordionContent>
                Your information goes here! Please tell me what to put in it - Jake
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products}/>
        </div>
      </div>
    </Container>
   );
}
 
export default HomePage;
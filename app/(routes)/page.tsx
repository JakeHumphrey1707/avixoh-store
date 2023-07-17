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
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/protoypelogo.png";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("c047ea69-e8bf-4c1e-a2a1-0024f5846db7");
  return ( 
    <Container>
      <div className="pb-4">
        <div className="flex items-center justify-center pt-4">
          <Link href="/" className="ml-4 md:hidden flex lg:ml-0 gap-x-1">
            <div className="">
              <Image
                src={logo}
                alt="logo failed to load"
                width={240}
              />
            </div>
          </Link>
        </div>
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
import React from "react";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import TickerTape from "@/components/tickertape";
import equipment from "@/assets/equipment.png";
import knitwear from "@/assets/knitwear.png";
import patterns from "@/assets/patterns.png";
import yarn from "@/assets/yarn.png";
import Image from "next/image";
import Link from "next/link";



export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  const tickerTapeTexts = [
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
    "Use code BULK3 for 10% off on orders with 3 or more items!",
    "Use code BULK10 for 20% off on orders with 10 or more items!",
  ];

  return ( 
    <Container>
      <div className="pt-2 px-3">
        <div className="text-xl text-white bg-[#007FFF] py-1 pb-1 items-center flex justify-center rounded-md">
        <TickerTape texts={tickerTapeTexts} />
        </div>
      </div>
      <div className="pb-4">
      <div className="pt-2 px-3">
        <div className="carousel scroll-py-96 rounded-3xl">
          <div id="slide1" className="carousel-item relative w-full scroll-py-96">
            <Link href="/category/f9528ac4-e7ef-4490-9ea3-bd076f88ac3f">
            <Image src={yarn} className="" alt="" />
            </Link>
            <div className="md:scale-100 scale-75 absolute flex justify-between transform -translate-y-1/2 md:left-5 -left-12 -right-12 md:right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a> 
              <a href="#slide2" className="btn btn-circle">❯</a> 
            </div>
          </div> 
          <div id="slide2" className="carousel-item relative w-full scroll-py-96">
            <Link href="/category/f12cf7a4-4fd1-4773-a98c-405990d38380">
            <Image src={equipment} className="" alt="" />
            </Link>
            <div className="md:scale-100 scale-75 absolute flex justify-between transform -translate-y-1/2 md:left-5 -left-12 -right-12 md:right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a> 
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full scroll-py-96">
            <Link href="/category/e7378272-4c3f-4a83-87e7-54d8d078033c">
            <Image src={patterns} className="" alt="" />
            </Link>
            <div className="md:scale-100 scale-75 absolute flex justify-between transform -translate-y-1/2 md:left-5 -left-12 -right-12 md:right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a> 
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide4" className="carousel-item relative w-full scroll-py-96">
            <Link href="/category/98cc462d-19bd-486e-a168-c05233b0d667">
            <Image src={knitwear} className="" alt="" />
            </Link>
            <div className="md:scale-100 scale-75 absolute flex justify-between transform -translate-y-1/2 md:left-5 -left-12 -right-12 md:right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a> 
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
  
        <div className="flex items-center justify-center px-4 pb-4 sm:px-6 lg:px-8 lg:text-xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>About Us</AccordionTrigger>
              <AccordionContent className="lg:text-xl">
              AXIVOH is created by family that loves knitting, designing, and crafting unique pieces for others to enjoy.
              We are just starting on our journey so please be patient with us as we weave the creative and technical worlds of selling yarn and craft online.
              Our goal is to create individualised pieces that are tailored to your needs whilst offering the highest quality material.
              We love all the yarn we promote and sell on our website and believe handmade knitting deserves the best yarn sought globally all over the world. We love promoting Australian wool, designers and fibre artists and we are proud of Australian owned small businesses.
              Thank you for supporting us. We hope that we can share our love for fibre arts with you. 
              Happy Creating! - AXIVOH team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Contact Us</AccordionTrigger>
              <AccordionContent className="lg:text-xl">
              For any questions regarding our products or for assistance with your order please email knittingpearlsdesigns@gmail.com and you will receive a response in 1-2 business days. If you’re emailing about your order, please make sure to include the order number or the email address used at the checkout in your message. Thank you!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Product Care FAQ</AccordionTrigger>
              <AccordionContent  className="lg:text-xl">
              <span className="font-extrabold">How do I wash knitwear?</span><br/><br/>

              -&nbsp;Products sold by AVIXOH will specify what yarn was used to knit the garment and it will include instructions.
              <br/>-&nbsp;As a general rule if the instructions say “Machine Washable’ then it is safe to place your knitwear on a gentle wool cycle with specific measurements of quality wool laundry detergent.
              <br/>-&nbsp;It is highly recommended that you do not add any bleach or stain remover as this will damage the wool. Do not tumble dry.
              <br/>-&nbsp;Knitwear does not have to be washed often and sometimes spot clean is better than washing the whole garment. If you do have a stain, you can take it to your local dry cleaners and ask for recommendations.
              <br/>-&nbsp;Dry flat in shade.
              <br/>-&nbsp;For garments that says ‘Hand Wash Only’, place cold room temperature water in a tub and place measured wool detergent as recommended. DO NOT put more wool detergent necessary as this will change the wool fibres.
              <br/>-&nbsp;Leave 20 minutes in the tub, then rinse with clean water. Do not wring or shake. Gently squeeze the water out of the garment, until water runs clean. Then place garment on a towel and roll the garment in it squeezing the remaining water out.
              <br/>-&nbsp;Place garment on a flat surface and let it dry in shade, block if necessary by arranging the garment in shape.
              <br/>-&nbsp;If washed correctly, without agitating the wool fibres, quality wool garments will last a lifetime and can be passed on from generation to generation.
              <br/><br/><span className="font-extrabold">How do I store knitwear?</span><br/><br/>

              -&nbsp;Knitwear should be folded and never hung as it will stretch and change shape. Make sure you air out your knitwear periodically. The worst enemies for knitwear are moths and silverfish. Make sure you have no infestations in your closet before storage. Knitwear can be placed in tight containers, but they need to periodically breathe and have access to air.
              <br/><br/><span className="font-extrabold">For any specific questions, please do not hesitate to contact us.</span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Shipping Information</AccordionTrigger>
              <AccordionContent  className="lg:text-xl">
              We are proud to offer Worldwide Shipping. 

We are currently offering FREE SHIPPING anywhere in Australia for orders over $100! 

For further information please contact us and we will send postal details via email.

Thank you!

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
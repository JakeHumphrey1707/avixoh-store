import { Facebook, Instagram } from "lucide-react";

import { useEffect } from "react";

const Footer = () => {

  return ( 
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
       <div className="text-center text-xs pb-4">
          <p className="group cursor-pointer">
            Contact, Product Care FAQ, Shipping Information:
            <span className="group-hover:text-blue-500">
            &nbsp;<a href="/" className="underline">See home page.</a>
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center pb-4">
          <div className="px-2 group">
            <a 
            href="https://www.instagram.com/knittingpearlsdesigns/"
            target="blank"
            >
              <Instagram className="w-8 h-8 group-hover:text-pink-500" />
            </a>
          </div>
          <div className="px-2 group">
            <a 
            href="https://www.facebook.com/josh.hickleton.5/"
            target="blank"
            >
             <Facebook className="w-8 h-8 group-hover:text-blue-500" />
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-black pb-4">
          &copy; 2023 AVIXOH Knitting. All rights reserved.
        </p>
        <p className="text-center text-xs text-black group cursor-pointer">
          Web design and development by&nbsp;
          <a 
          className="underline group-hover:text-blue-500"
          href="https://jhportfolio.vercel.app"
          target="blank"
          >
            Jake Humphrey
          </a>
        </p>
        
      </div>
    </footer>
   );
}
 
export default Footer;
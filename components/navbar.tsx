import Container from "@/components/ui/container";
import Link from "next/link";
import logo from "@/assets/protoypelogo.png";
import Image from "next/image";
import MainNav from "@/components/mainnav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import MobileMenu from "@/components/mobile-menu";
import TickerTape from "@/components/tickertape";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return ( 
    <div className="border-b">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <MobileMenu data={categories} />
          <Link href="/" className="gap-x-1">
            <div className="">
              <Image className=""
                src={logo}
                alt="logo failed to load"
                width={120}
              />
            </div>
          </Link>
          <MainNav data={categories} 
          />
          
          <NavbarActions />
        </div>
      </Container>
    </div>
   );
}
 
export default Navbar;
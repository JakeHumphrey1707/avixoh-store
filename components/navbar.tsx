import Container from "@/components/ui/container";
import Link from "next/link";
import logo from "@/assets/protoypelogo.png";
import Image from "next/image";
import MainNav from "@/components/mainnav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-1">
            <p className="">
              <Image
                src={logo}
                alt="logo failed to load"
                width={120}
              />
            </p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
   );
}
 
export default Navbar;
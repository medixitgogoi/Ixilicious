import Link from "next/link";
import MobileMenu from "./MobileMenu";
import CartIcon from "./CartIcon";

const Navbar = () => {

  const user = true;

  return (
    <div className='h-12 text-green-700 border-b-2 border-green-500 flex items-center justify-between px-6 md:px-14 lg:px-20 lg:hover:h-20 transition-all md:h-16'>

      <div className="hidden md:flex items-center gap-6">
        <Link href="/" className="hover:scale-110 hover:text-green-700 hover:font-light transition-all">Home</Link>
        <Link href="/menu" className="hover:scale-110 hover:text-green-700 hover:font-light transition-all">Menu</Link>
        <Link href="/" className="hover:scale-110 hover:text-green-700 hover:font-light transition-all">Contact </Link>
      </div>

      <div className="md:font-bold text-lg md:text-2xl lg:text-3xl uppercase">
        <Link href="/">Ixilicious</Link>
      </div>

      <div className="md:hidden">
        <MobileMenu />
      </div>

      <div className="hidden md:flex items-center gap-6">
        {
          user ? (
            <Link href="/orders" className="py-3 px-5 border border-green-500 rounded-sm hover:bg-black hover:text-blue-200 transition ease-in-out duration-300">Orders</Link>
          ) : (
            <Link href="/login" className="py-3 px-5 border border-green-500 rounded-sm hover:bg-black hover:text-blue-200 transition ease-in-out duration-300">Login</Link>
          )
        }
        <Link href="/cart" className="bg-green-400 text-black font-medium rounded-sm py-3 px-5 border border-green-500 hover:bg-black hover:text-blue-200 transition ease-in-out duration-300">
          <CartIcon />
        </Link>
      </div>

    </div>
  );
}

export default Navbar;

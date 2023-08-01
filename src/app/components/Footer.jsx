import Link from "next/link";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-slate-800 flex flex-col gap-3 sm:gap-0 sm:flex-row  items-center justify-between px-6 md:px-20 py-3 text-white border-t-2 border-green-500 cursor-pointer">
      <p className="text-xs opacity-80">@All rights reserved</p>
      <Link href="/" className="font-bold text-lg sm:text-2xl uppercase">Logo</Link>
      <div className="flex gap-1 md:gap-3 opacity-80">
        <BiLogoFacebook className="transition hover:text-green-700" />
        <AiFillInstagram className="transition hover:text-green-700" />
        <AiOutlineTwitter className="transition hover:text-green-700" />
      </div>
    </div>
  );
}

export default Footer;

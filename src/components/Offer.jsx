import Image from "next/image";
import OfferTime from "./OfferTime";

const Offer = () => {
  return (
    <div className="h-[90vh] bg-black flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      <div className="flex-1 p-4 md:p-16 flex flex-col text-center md:text-left justify-center items-center md:items-start gap-8 text-white">
        <h1 className="text-2xl md:text-4xl font-bold uppercase">Delicious Burger & French Fry</h1>
        <p className="font-light md:text-xl">Progressively simplify effective e-toilers and process centric foods of empowerment. Quickly pontificate parallel</p>
        <OfferTime />
        <button className="bg-green-500 py-2 md:py-3 px-3 md:px-4 text-lg rounded-sm">Order Now</button>
      </div>
      <div className="relative w-full flex-1 md:h-full">
        <Image src="/offerProduct.png" fill className="object-contain" />
      </div>
    </div>
  );
}

export default Offer;

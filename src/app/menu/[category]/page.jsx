import { pizzas, burgers, pastas } from "@/data";
import Link from "next/link";
import Image from "next/image";

const Category = ({ params }) => {

  const cat = params.category;

  return (
    <div className="flex flex-wrap">

      {cat === "pizzas" && (
        pizzas.map(item => (
          <Link href={`/product/${item.id}`} key={item.id} className="w-full h-[50vh] sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-b-2 border-green-500 sm:border-r-2 flex flex-col justify-between items-center group even:bg-fuchsia-50">
            <div className="relative h-[80%] w-full">
              <Image src={item.img} fill className="object-contain" />
            </div>
            <div className="text-green-800 w-full flex justify-between items-center">
              <h1 className="font-bold w-2/3 text-xl p-2">{item.title}</h1>
              <p className="group-hover:hidden font-semibold text-lg">₹{item.price}</p>
              <button className="hidden group-hover:block bg-green-500 text-white text-sm lg:text-base p-2 lg:p-2 rounded-sm">Add to cart</button>
            </div>
          </Link>
        ))
      )}

      {cat === "burgers" && (
        burgers.map(item => (
          <Link href={`/product/${item.id}`} key={item.id} className="w-full h-[50vh] sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-b-2 border-green-500 sm:border-r-2 flex flex-col justify-between items-center group odd:bg-fuchsia-50">
            <div className="relative h-[80%] w-full">
              <Image src={item.img} fill className="object-contain" />
            </div>
            <div className="text-green-800 w-full flex justify-between items-center">
              <h1 className="font-bold w-2/3 text-xl p-2">{item.title}</h1>
              <p className="group-hover:hidden font-semibold text-lg">₹{item.price}</p>
              <button className="hidden group-hover:block bg-green-500 text-white text-sm lg:text-base p-2 lg:p-2 rounded-sm">Add to cart</button>
            </div>
          </Link>
        ))
      )}

      {cat === "pastas" && (
        pastas.map(item => (
          <Link href={`/product/${item.id}`} key={item.id} className="w-full h-[50vh] sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border-b-2 border-green-500 sm:border-r-2 flex flex-col justify-between items-center group even:bg-fuchsia-50">
            <div className="relative h-[80%] w-full">
              <Image src={item.img} fill className="object-contain" />
            </div>
            <div className="text-green-800 w-full flex justify-between items-center">
              <h1 className="font-bold w-2/3 text-xl p-2">{item.title}</h1>
              <p className="group-hover:hidden font-semibold text-lg">₹{item.price}</p>
              <button className="hidden group-hover:block bg-green-500 text-white text-sm lg:text-base p-2 lg:p-2 rounded-sm">Add to cart</button>
            </div>
          </Link>
        ))
      )}

    </div>
  );
}

export default Category;

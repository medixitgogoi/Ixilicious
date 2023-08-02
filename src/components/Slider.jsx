"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in India",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
]

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const interval = setInterval(
      () => setCurrentSlide(prev => prev === data.length - 1 ? 0 : prev + 1),
      4000
    );

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] lg:flex-row">

      <div className="flex flex-col justify-center items-center flex-1 gap-8 bg-fuchsia-50">
        <h1 className="uppercase text-4xl md:text-5xl leading-normal lg:leading-[1.3] p-4 md:p-10 text-center text-green-600 font-bold">
          {data[currentSlide].title}
        </h1>
        <Link className="bg-green-500 text-white py-2 px-3 rounded-sm text-lg cursor-pointer" href="/orders">Order now</Link>
      </div>

      <div className="w-full flex-1 relative">
        <Image className="object-cover" src={data[currentSlide].image} alt="slide-images" fill />
      </div>

    </div>
  );
}

export default Slider;

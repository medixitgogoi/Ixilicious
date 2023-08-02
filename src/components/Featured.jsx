import Image from "next/image";

const Featured = () => {
  return (
    <div className="w-screen">
      <div className="w-[100vw] flex bg-red-600">
        <div className="w-screen h-[50vh] flex flex-col items-center justify-around p-3">

          <div className="w-full relative flex-1">
            <Image src="/temporary/p1.png" fill className="object-contain" />
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <h1>Title</h1>
            <p>desc</p>
            <span>1250</span>
            <button>Add to cart</button>
          </div>

        </div>
      </div>
    </div>
    
  );
}

export default Featured;

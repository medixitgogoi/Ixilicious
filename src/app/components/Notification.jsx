import { MdDiscount } from "react-icons/md";

const Notification = () => {
  return (
    <div className="bg-green-600 h-8 text-black px-4 text-sm md:text-base w-full flex justify-center items-center text-center">
      <div className="hidden md:mr-1">
        <MdDiscount />
      </div>
      Free delivery on all orders above $50. Order your food now!
    </div>
  );
}

export default Notification;

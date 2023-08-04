import { pizzas, burgers, pastas } from "@/data";

const Product = ({params}) => {
  return (
    <div>
      {params.id}
    </div>
  );
}

export default Product;
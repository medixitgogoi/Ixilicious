import Link from "next/link";

const menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings and cheesy perfection.",
    img: "/temporary/m3.png",
    color: "white",
  },
];


const Menu = () => {
  return (
    <div className="p-4 lg:px-20 h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-4 md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`flex flex-col h-full justify-between text-${category.color} w-1/2 md:p-3 lg:p-4`}>
            <h1 className="uppercase font-bold text-xl">{category.title}</h1>
            <p className="text-sm leading-tight">{category.desc}</p>
            <button className={`hidden lg:block bg-black text-blue-200 py-2 px-3 w-2/3 rounded-md`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;

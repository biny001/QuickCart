import FeaturedItem from "./FeaturedItem";

const sampleData = [
  { imgUrl: "src/assets/leather-sofa.jpg", name: "sofa", price: "$220" },
  {
    imgUrl: "src/assets/dining-table.jpg",
    name: "dining table",
    price: "$180",
  },
  {
    imgUrl: "src/assets/kingsized bedroom.jpg",
    name: "king-sized bedroom",
    price: "$280",
  },
];

function Features() {
  return (
    <div className="mx-auto mt-32  max-w-6xl pb-10">
      <h2 className="mx-7 mb-7 border-b border-cyan-950 py-4 font-semibold text-cyan-900 sm:text-2xl md:text-3xl">
        Featured Products
      </h2>
      <ul className="mx-7  mb-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sampleData.map((item) => (
          <FeaturedItem key={item.price} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Features;

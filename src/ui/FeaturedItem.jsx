function FeaturedItem({ item }) {
  return (
    <li className="li-item">
      <img src={item.imgUrl} alt="Product 2" className="image" />
      <h3 className="mb-2 text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600">{item.price}</p>
    </li>
  );
}

export default FeaturedItem;

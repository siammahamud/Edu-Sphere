import { FaStar } from "react-icons/fa";

export function StarRating({ rating }) {
  const stars = new Array(rating).fill(0);
  console.log(stars);
  return (
    <div className="flex gap-0.5 text-cyan-400">
    {stars.map((star, index) => <FaStar key={index}/>)}
    </div>
  );
}

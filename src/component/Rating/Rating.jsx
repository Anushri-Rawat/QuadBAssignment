import { FaStarHalf, FaStar } from "react-icons/fa";

const Rating = ({ data }) => {
  const rating = (Number(data) / 2).toFixed(1);
  let counter = Number(rating.slice(0, 1));
  let halfcounter = Number(rating.slice(1, 3)) >= 0.5 ? 1 : 0;

  return (
    <div className="rating-div d-flex align-items-center gap-1">
      {(counter-- > 0 && <FaStar />) || (halfcounter-- > 0 && <FaStarHalf />)}
      {(counter-- > 0 && <FaStar />) || (halfcounter-- > 0 && <FaStarHalf />)}
      {(counter-- > 0 && <FaStar />) || (halfcounter-- > 0 && <FaStarHalf />)}
      {(counter-- > 0 && <FaStar />) || (halfcounter-- > 0 && <FaStarHalf />)}
      {(counter-- > 0 && <FaStar />) || (halfcounter-- > 0 && <FaStarHalf />)}
      <span className="fw-bold" style={{ color: "var(--text-color)" }}>
        {rating}
      </span>
    </div>
  );
};

export default Rating;

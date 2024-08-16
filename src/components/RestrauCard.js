import Shimmer from "./Shimmer";

const RestrauCard = ({ restraurant }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, areaName } =
    restraurant.info;

  return (
    <>
      <div className="card">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        <h3 className="name">{name}</h3>
        <h4 className="cuisines">{cuisines.join(", ")}</h4>
        <h4 className="costForTwo">{costForTwo} </h4>

        <h4>{avgRating} stars</h4>
        <h4 className="h4" style={{ marginBottom: "2px" }}>
          {areaName}
        </h4>
      </div>
    </>
  );
};
export default RestrauCard;

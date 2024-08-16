import RestrauCard from "./RestrauCard";
import { restrauList } from "../constants";
import { useEffect, useState } from "react";

function filterData(searchText, restrauList) {
  const filteringData = restrauList.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );

  return filteringData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [restaurantList, setRestaurantsList] = useState(restrauList);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=19.07480&lng=72.88560"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      setRestaurantsList(
        json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Failed to fetch restaurant data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


    
  return (
    <>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />{" "}
        <button
          className="search-btn"
          onClick={() => {
            const filteredData = filterData(searchText, restrauList);

            if (searchText == " ") {
              setRestaurantsList(restaurantList);
            } else {
              setRestaurantsList(filteredData);
            }
          }}
        >
          Search
        </button>
      </div>

      <div className="restrau-list">
        {restaurantList.map((restraurant) => {
          return (
            <RestrauCard restraurant={restraurant} key={restraurant.info.id} />
          );
        })}
        {/* <RestrauCard restraurant={restrauList[0]} />
      <RestrauCard restraurant={restrauList[1]} />
      <RestrauCard restraurant={restrauList[2]} />
      <RestrauCard restraurant={restrauList[3]} />
      <RestrauCard restraurant={restrauList[4]} />
      <RestrauCard restraurant={restrauList[5]} /> */}
      </div>
    </>
  );
};

export default Body;

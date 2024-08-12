import RestrauCard from "./RestrauCard";
import { restrauList } from "../constants";
import { useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("KFC");
  console.log(searchText);

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
        <button className="search-btn">Search</button>
        {searchText}
      </div>
      <div className="restrau-list">
        {restrauList.map((restraurant) => {
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

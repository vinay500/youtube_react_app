import React from "react";
import { Link, useSearchParams } from "react-router-dom";


const FilterBtnList = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const list = ["All", "Javascript", "ReactJS"];
  const mdList = [
    "NextJs",
    "Live",
    "Laptops",
    "Music",
    "Computer programming",
    "Jukebox",
    "Recently uploaded",
   
  ];

  const buttonList = (list, style) =>
    list.map((btn, i) => (
      <Link key={i} to={"/?filter=" + btn}>
        <button
          className={`${
            filter === btn ? "bg-gray-800 text-gray-50" : "bg-gray-100"
          } ${style} `}
        >
          {btn}
        </button>
      </Link>
    ));

  const style = "p-1 m-1 rounded-lg";
  const mdStyle = "p-1 m-3  rounded-lg hidden md:block";

  return (
    <div>
      <div className="flex items-center border-b-2 md:border-none md:justify-center">
        <Link to={"/"}>
          
        </Link>
        <span className="border-r-2 border-gray-200 h-6"></span>
        {buttonList(list, style)}
        {buttonList(mdList, mdStyle)}
      </div>
    </div>
  );
};

export default FilterBtnList;
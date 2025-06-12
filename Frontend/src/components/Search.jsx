import React from "react";

function Search({ restArr, setAllRestArr }) {
  const filterRest = function (searchedText) {
    let newRes = restArr.filter((restDetails) =>
      restDetails.info.name.toLowerCase().includes(searchedText.toLowerCase())
    );
    setAllRestArr(newRes);
  };
  return (
    <input
      type="text"
      onChange={(e) => filterRest(e.target.value)}
      placeholder="Search Restaurant"
      className="flex-1 min-w-[200px] border border-gray-300 px-4 py-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}

export default Search;

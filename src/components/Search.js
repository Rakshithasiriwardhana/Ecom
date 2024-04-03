import React, { useContext, useState } from "react";
import { UserContext } from "../contex/UserContext";

export const Search = () => {

    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
    const { user } = useContext(UserContext);
    let isShow = user.role === "admin" ? false : true;    

  return (
    <div>
      <div className="nav-container"
        style={{ display: isShow ? "flex" : "none" }}
      >
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange || null}
          value={query || undefined}
          placeholder="Enter your search shoes"
        />
      </div>
    </div>
  );
};

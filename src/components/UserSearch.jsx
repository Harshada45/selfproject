import React, { useState } from "react";

const UserSearch=()=>{
    const[search,setSearch]=useState("");

    const handlechange=(e)=>{
      setSearch(e.target.value);
    }

    return(
        <div className="d-flex">
            <input value="" placeholder="Search here..." onChange={handlechange}/><button>Search</button>
        </div>
    )
}
export default UserSearch
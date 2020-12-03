import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./Card";


const EntriesList = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        getDetails();
    }, [])

    const getDetails = async () => {
        try {
            const data = await axios.get("http://localhost:4000/getInfo");
            setList(data.data);
        } catch (e) {
            console.log("error");
        }
    };   
    return (
        <div style={{ width: "100%", height: "100%" }}>
            {list.length ? list.map((l, i) => <UserCard key={i} data={l} />) : "No data, please create a new entry"}
        </div>
    )
}

export default EntriesList;
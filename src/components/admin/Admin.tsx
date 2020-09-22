import React, { useState, FormEvent } from "react";
import Axios from "axios";
 
export default function Admin() {
    const [datafromDatabase, setdatafromDatabase] = useState([]);

    Axios({
      method: "GET",
      url: "http://localhost:5000", //Vad styr denna? pekar på server porten)
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      //console.log(res.data);
      setdatafromDatabase(res.data);
      // Database(res.data)
    });
  
    let result = datafromDatabase.map((liBooking:any) => {
      return (<li key={liBooking.id}>
        {liBooking.bookingId},
        {liBooking.date},
        {liBooking.time},
        {liBooking.guests},
        {liBooking.firstName},
        {liBooking.lastName},
        {liBooking.email},
        {liBooking.phone},
        {liBooking.guestId} </li>)
          });
  return (
    <div className="Admin">
        <h1>{result}</h1>
      <h2>Admin</h2>
      <div>Admin works</div>
    </div>
  );
}

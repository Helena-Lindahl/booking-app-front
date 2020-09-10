import React, { FormEvent, useReducer, ChangeEvent, useState } from "react";
import axios from "axios";

// interface IBookingProps {

// 	sendDataToParent(theNumber: number): void;
// }

// function Booking(props:IBookingProps) {

// 	function sendData() {

// 	// Uppdatera förälderns state

// 	props.sendDataToParent(4711);

// 	}
// 	return (
// 	<button type="button" onClick={sendData}>Skicka</button>
// 	);
// }

export interface PersonForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // guestId: number;
}

export default function FormReducer() {
  let defaultValue: PersonForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    //guestId: 0,
  };

  const [myFormValues, setMyFormValues] = useReducer(
    (state: PersonForm, newState: PersonForm) => ({ ...state, ...newState }), // får ett objekt som innehåller {firstName:'', lastName:'', color:''}
    defaultValue
  ); // får ett till objekt som innehåller värden också på objektet t.ex. {firstName:'Adam', lastName:'Kammerland', color:'red'}

  function save(e: FormEvent) {
    e.preventDefault();
    // console.log(JSON.stringify(myFormValues))

    axios.post("http://localhost:5000/guest", myFormValues).then((res) => {
      console.log(res.data);
    });

    // axios.post('url').then(theData => {
    //     console.log(theData.data);

    //     }, [])

    // axios.post('https://jsonplaceholder.typicode.com/users', {myFormValues}).then(response => {
    //     console.log(response.data);

    //     }, []).catch(error => {console.log(error)})
    //     return()

    // fetch('', JSON.stringify(myFormValues));
    // fetch('url').then(thedata => thedata.json())
  }

  function update(e: ChangeEvent<any>) {
    let name = e.target.name; // där förändringen sker i html name='', firstName stavat precis som i onChange
    let value = e.target.value; // t.ex. Adam

    // const { name, value } = e.target; // Destructuring

    setMyFormValues({ [name]: value } as any);
    // setMyFormValues({ firstName; 'Adam'} as any);
  }
  return (
    // <form onSubmit={props.save}></form>
    <form onSubmit={save}>
      {" "}
      {/* här tar utvecklaren över själva formulärskickandet */}
      <label htmlFor="firstName">| Förnamn: </label>
      <input
        type="text"
        id="firstname"
        name="firstName"
        value={myFormValues.firstName}
        onChange={update}
      />
      <label htmlFor="lastName">| Efternamn: </label>
      <input
        type="text"
        id="lastname"
        name="lastName"
        value={myFormValues.lastName}
        onChange={update}
      />
      <label htmlFor="email">| Epost: </label>
      <input
        type="text"
        id="email"
        name="email"
        value={myFormValues.email}
        onChange={update}
      >
        {/* <option>Röd</option>
        <option>Grön</option>
        <option>Lila</option> */}
      </input>
      <label htmlFor="phone">| Telefon: </label>
      <input
        type="text"
        name="phone"
        id="phone"
        value={myFormValues.phone}
        onChange={update}
      />
      {/* <label htmlFor="guestId">| Bokningsnr: </label>
      <input
        type="number"
        name="guestId"
        id="guestId"
        value={myFormValues.guestId}
        onChange={update}
      ></input> */}
      <button type="submit">Spara</button>
      <p>{JSON.stringify(myFormValues)}</p>
    </form>
  );
}

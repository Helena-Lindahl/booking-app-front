import React, { FormEvent, useReducer, ChangeEvent } from "react";
import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import {Field, ErrorMessage} from 'formik'
// import TextError from './TextError'
// import moment from 'moment';
// import Calendar from 'react-input-calendar'

// interface IIpsumProps {
// 	updateParent(): void;
// }

// function Guests(<props: IIpsumProps>) {
// 	function sendTheInfo() {
// 	const [someNumber, setSomeNumber] = useState(0);
// 	function updateSomeNumber(e:ChangeEvent<HTMLInputElement>) {
// 	setSomeNumber(<parseInt>(e:target.value));
// 	}
// 	}
// }

// interface IGuestsProps {

// 	numberFromBooking: number;
// }
// function Guests(props: IGuestsProps) {

// 	return (
//   <p>{props.numberFromBooking}</p>
//   )

// }

// function sendTheInfo() {
//   props.updateParent();
// }

// function sendTheInfo() {

// 	return (
// 	<input type="number" value={} onChange={}></input>
// 	<button type="button" onClick={sendTheInfo}>Skicka</button>
// 	);
// }

export interface DateForm {
  bookingId: string;
  date: string;
  time: string;
  guests: number;
  guestId: number;
}

export default function Guests() {
  // const state = {
  //   pickedDate: null,
  //   // endDate: null
  // };

  let defaultValue: DateForm = {
    bookingId: "",
    date: "",
    time: "",
    guests: 0,
    guestId: 0,
  };

  const [myDateValues, setmyDateValues] = useReducer(
    (state: DateForm, newState: DateForm) => ({ ...state, ...newState }),
    defaultValue
  );

  function save(e: FormEvent) {
    e.preventDefault();
    // console.log(JSON.stringify(myDateValues))

    axios.post("http://localhost:5000/booking", myDateValues).then((res) => {
      console.log(res.data);
    });
  }

  function update(e: ChangeEvent<any>) {
    let name = e.target.name; // där förändringen sker i html name='', firstName stavat precis som i onChange
    let value = e.target.value; // t.ex. Adam

    // const { date, value } = e.target; // Destructuring

    setmyDateValues({ [name]: value } as any);
    // setMyFormValues({ firstName; 'Adam'} as any);
  }

  // export interface IDateToPick {
  //   name: string;
  //   label: string;
  //   rest: string
  //   form: string;
  //   field: string;
  // }

  //   function DateToPick(props: IDateToPick) {
  //     const { label, name, ...rest} = props;
  //     return (
  //       <div className='form-control'>
  //         <label htmlFor={name}></label>
  //         <div name={name}>
  //           {
  //             ({form, field}) => {
  //               const { setFieldValue} = form
  //               const { value } = field
  //               return <DatePicker id={name} {...field} {...rest} selected={ value } onChange={val => setFieldValue(name, val)} />
  //             }
  //           }
  //         </div>
  //         {/* <ErrorMessage name={name} component={TextError} /> */}
  //       </div>
  //     )
  //   }

  // function DateToPick() => {
  //   const [startDate, setStartDate] = useState(new Date());
  //   return (
  //     <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  //   );
  // };

  return (
    <div>
      <form onSubmit={save}>
        {" "}
        {/* här tar utvecklaren över själva formulärskickandet */}
        {/* <Calendar format='DD/MM/YYYY' date='4-12-2014' /> */}
        {/* <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        /> */}
        {/* <DatePicker
        selected={this.state.date}
        onChange={this.handleChange}
        showTimeSelect
        dateFormat="Pp"
        /> */}
        {/* <DateRangePicker
        pickedDate={this.state.pickedDate} 
        pickedDateId="your_unique_start_date_id" 
        onDatesChange={({ pickedDate }) => this.setState({  startDate })} 
        focusedInput={this.state.focusedInput} 
        onFocusChange={focusedInput => this.setState({ focusedInput })}
        isDayBlocked={this.isBlocked} 
      /> */}
        {/* <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        /> */}
        <label htmlFor="bookingId">| BokningsId: </label>
        <input
          type="number"
          id="bookingId"
          name="bookingId"
          value={myDateValues.bookingId}
          onChange={update}
        />
        <label htmlFor="date">| Datum: </label>
        <input
          type="text"
          id="date"
          name="date"
          value={myDateValues.date}
          onChange={update}
        />
        <label htmlFor="time">| Tidpunkt: </label>
        <input
          type="text"
          id="time"
          name="time"
          value={myDateValues.time}
          onChange={update}
        ></input>
        <label htmlFor="guests">| Antal Gäster: </label>
        <input
          type="number"
          name="guests"
          id="guests"
          value={myDateValues.guests}
          onChange={update}
        />
        <label htmlFor="guestId">| Bokningsnr: </label>
        <input type="number"
        name="guestId"
        id="guestId"value={myDateValues.guestId} onChange={update}>          
        </input>
        <button type="submit">Spara</button>
        <p>{JSON.stringify(myDateValues)}</p>
      </form>
      {/* <h2>Guests funkar</h2>
      <div>Guests works</div> */}
    </div>
  );
}

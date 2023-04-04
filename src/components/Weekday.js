import React from "react";
import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitUnDone } from "../store/habitSlice";

const Weekday = ({day}) => {

  // get current date
  const currentDate=new Date();

  // get day from current date
  const currentDay=currentDate.getDay();

  //  dispatch hook to dispatch our actions
  const dispatch=useDispatch();

  // getting date
  const date=new Date(day.yyyy,day.mm,day.dd);

  // function for task done
  const handleTaskdone=()=>{
    if(day.id>currentDay){
      alert("You cannot change your next days status")
      return;
    }
    dispatch(habitDone(day.id));
  }

  // function for task undone
  const handleTaskUndone=()=>{
    if(day.id>currentDay){
      alert("You cannot change your next days status")
      return;
    }
    dispatch(habitUnDone(day.id))
  }

  // function for task none
  const handleTaskNone=()=>{
    if(day.id>currentDay){
      alert("You cannot change your next days status")
      return;
    }
    dispatch(habitNone(day.id));
  }

  return (
    <div className="day-container">
      <h5 className="text-center border-bottom">{day.day}</h5>
      <p className="text-center">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <i className={day.isDone===true?"fa-solid fa-circle-check circle-icon active":"fa-solid fa-circle-check circle-icon"} onClick={handleTaskdone}></i>
      <i className={day.isDone===false?"fa-solid fa-circle-xmark circle-icon active":"fa-solid fa-circle-xmark circle-icon"} onClick={handleTaskUndone}></i>
      <i className={day.isDone===""?"fa-solid fa-circle-minus circle-icon active":"fa-solid fa-circle-minus circle-icon"} onClick={handleTaskNone}></i>
    </div>
  );
};

export default Weekday;

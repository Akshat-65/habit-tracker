import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../store/habitSlice";
import { useNavigate } from "react-router-dom";

const Habit = ({ habit }) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  let countDone = 0;

  //loop for counting completed habit
  for (let i = 0; i < habit.weekLog.length; i++) {
    if (habit.weekLog[i].isDone === true) {
      countDone++;
    }
  }

  const navigate = useNavigate();

  // dispatch hook to dispatch our actions
  const dispatch = useDispatch();

  // function call after click delete button on habit list
  const handleDelete = () => {
    dispatch(deleteHabit(habit.id));
    alert("your habit deleted successfully")
  }

  // function to set current habit id to localstorage and navigate to weekview page
  const setId = () => {
    localStorage.setItem("id", habit.id)
    navigate("/week-view");
  }


  return (
    <div className="habit">
      <div className="habit-left">
        <i className="fa-solid fa-hashtag"></i>
        <div>
          <h4 style={{ textTransform: "capitalize" }}>{habit.name}</h4>
          <p className="day-complete">{countDone}/{currentDay + 1} days</p>
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week" ></i>
          Week View
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Habit;

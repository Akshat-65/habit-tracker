import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../store/habitSlice";

const Navbar = ({ name }) => {

  //  dispatch hook to dispatch our actions
  const dispatch = useDispatch();

  // changing state according to time
  const [hour, setHour] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  useEffect(() => {
    let time = new Date().toLocaleTimeString();
    setTimeout(() => {
      setTime(time);
    }, 1000);

  }, [time])


  // function to add a new habit 
  const handleNewHabit = () => {
    const habitName = document.getElementById("habitName").value;
    if (habitName.trim().length === 0) {
      alert("You must enter your habit name");
    }
    else {
      dispatch(addHabit(habitName));
      alert("Your habit added successfully");
      document.getElementById("habitName").value = "";
    }
  }

  return (
    <Fragment>
      <div className="navbar">
        <h3 className="greet-time">
          {/* Greet according to time */}
          {hour <= 12
            ? "Good Morning"
            : hour <= 17
              ? "Good Afternoon"
              : hour <= 21
                ? " Good Evening"
                : "Good Night"}
          {" " + time}
        </h3>
        <div className="right-nav">
          <h5>{name}</h5>
          <button
            className="addhabit-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus"></i> Add Habits
          </button>
        </div>
      </div>

      {/* modal to add a new habit  */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                New Habit
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  NAME
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Enter habit name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={handleNewHabit}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
  );
};

export default Navbar;

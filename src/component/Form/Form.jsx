import React, { useContext, useState } from "react";
import "./style.css";
import Rating from "../Rating/Rating";
import MovieContext from "../../store/MovieContext";

const Form = ({ data }) => {
  const {
    state: { user },
    dispatch,
  } = useContext(MovieContext);
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [mobile, setMobile] = useState(user ? user.mobile : "");

  const formHandler = () => {
    localStorage.setItem("formUser", JSON.stringify({ name, email, mobile }));
    dispatch({ type: "SET_USER", payload: { name, email, mobile } });
  };

  return (
    <div
      className="modal fade"
      id="ticketBookingModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-dialog-centered">
        <div
          className="modal-content d-flex flex-column gap-1"
          style={{ background: "var(--bg-color)" }}
        >
          <div className="modal-header">
            <span
              className="modal-title fw-bolder w-100"
              id="exampleModalLabel"
              style={{
                color: "var(--text-color)",
                lineHeight: "1.25",
              }}
            >
              Ticket Booking Form
            </span>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ color: "var(--text-color)" }}
            ></button>
          </div>
          <div className="modal-body d-flex flex-sm-row flex-column align-items-start gap-2">
            <div
              className="p-0 d-flex flex-column gap-2"
              style={{ flexBasis: "40%" }}
            >
              <img
                src={
                  data.show.image?.original ||
                  "https://img.reelgood.com/content/movie/4322d89d-3995-43e2-a1ba-eea91e298312/poster-780.jpg"
                }
                alt="movie img"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Rating data={data.show.rating?.average || "7.5"} />
            </div>
            <div
              className="form d-flex flex-column align-items-center mt-1 gap-2 justify-content-center"
              style={{ flexBasis: "60%" }}
            >
              <div className="d-flex flex-column" style={{ width: "90%" }}>
                <label className="modal-label w-100">Movie Title</label>
                <input
                  type="text"
                  className="modal-input"
                  placeholder="Movie Title"
                  value={data.show.name}
                />
              </div>
              <div className="d-flex flex-column" style={{ width: "90%" }}>
                <label className="modal-label w-100">Timings</label>
                <input
                  type="text"
                  className="modal-input"
                  placeholder="Timings"
                />
              </div>
              <div className="d-flex flex-column" style={{ width: "90%" }}>
                <label className="modal-label w-100">Seat type</label>
                <select className="modal-input">
                  <option>VIP</option>
                  <option>Premium</option>
                  <option>Middle Seat</option>
                  <option>Front Seat</option>
                  <option defaultValue> Back Seat</option>
                </select>
              </div>
              <div className="d-flex flex-column" style={{ width: "90%" }}>
                <label className="modal-label w-100">Name</label>
                <input
                  type="text"
                  className="modal-input"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column" style={{ width: "90%" }}>
                <label className="modal-label w-100">Email</label>
                <input
                  type="text"
                  className="modal-input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column" style={{ width: "90%" }}>
                <label className="modal-label w-100">Mobile Number</label>
                <input
                  type="number"
                  maxLength={10}
                  className="modal-input"
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-end border-0">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn"
              style={{ background: "#00b5db" }}
              onClick={formHandler}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

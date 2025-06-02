
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  useEffect, useReducer, useState } from "react";



function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_DOB":
      return {
        ...state,
        dob: action.payload,
      };
    case "GENDER":
      return {
        ...state,
        gender: action.payload,
      };

    case "EDUCATION":
      return {
        ...state,
        education: action.payload,
      };
    case "EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "PHONE":
      return {
        ...state,
        phone: action.payload,
      };
    case "COUNTRY":
      return {
        ...state,
        country: action.payload,
      };
    case "RESET":
      return action.payload;
    default:
      return state;
  }
}

function App() {
  const initialState = {
    name: "",
    dob: "",
    gender: "",
    education: "",
    email: "",
    phone: "",
    country: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [info, setInfo] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (info) {
      setModal(true);
    }
  }, [info]);

  function handleModal() {
    dispatch({ type: "RESET", payload: initialState });
    setModal(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (state.name.trim() === "") {
      alert("Name is required");
      return;
    }
    if (state.dob === "") {
      alert("Date of Birth is required");
      return;
    }
    if (state.gender.trim() === "") {
      alert("Gender is required");
      return;
    }

    if (state.education.trim() === "") {
      alert("Education is required");
      return;
    }
    if (state.email.trim() === "") {
      alert("Email is required");
      return;
    }
    if (state.phone.trim() === "") {
      alert("Phone is required");
      return;
    }
    if (state.country.trim() === "") {
      alert("Country is required");
      return;
    }
    setInfo(state);
  }

  return (
    <div className="container">
      {modal && (
        <div className="modal">
          {Object.entries(state).map(([key, value]) => (
            <p key={key}>{value}</p>
          ))}
          <button onClick={handleModal}>❌</button>
        </div>
      )}
      <h1 className="title">Form Validation</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          type="text"
          placeholder="Enter the name"
          className="input"
        />
        <input
          value={state.dob ?? ""}
          onChange={(e) =>
            dispatch({ type: "SET_DOB", payload: e.target.value })
          }
          type="date"
          className="input"
        />
        <select
          onChange={(e) =>
            dispatch({ type: "GENDER", payload: e.target.value })
          }
          className="input"
        >
          <option>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          onChange={(e) =>
            dispatch({ type: "EDUCATION", payload: e.target.value })
          }
          className="input"
        >
          <option>Education</option>
          <option value="High School">High School</option>
          <option value="Bachelor's">Bachelor's</option>
          <option value="Master's">Master's</option>
          <option value="phD">phD</option>
        </select>
        <input
          onChange={(e) => dispatch({ type: "EMAIL", payload: e.target.value })}
          type="email"
          placeholder="Enter the email"
          className="input"
        />
        <input
          onChange={(e) => dispatch({ type: "PHONE", payload: e.target.value })}
          type="text"
          placeholder="Enter the phone no"
          className="input"
        />
        <select
          onChange={(e) =>
            dispatch({ type: "COUNTRY", payload: e.target.value })
          }
          className="input"
        >
          <option>Country</option>
          <option value="India">India</option>
        </select>
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
}

export default App;

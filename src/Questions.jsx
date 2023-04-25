import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi2";
import { useState } from "react";

const Questions = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId;

  return (
    <div className="question">
      <header>
        <h5>{title}</h5>

        <button onClick={() => toggleQuestion(id)} className="question-btn">
          {isActive ? <HiOutlineMinus /> : <HiOutlinePlus />}
        </button>
      </header>

      {isActive && <p>{info}</p>}
    </div>
  );
};

export default Questions;

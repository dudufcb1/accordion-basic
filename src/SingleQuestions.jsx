import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import React, { useState } from 'react';
const SingleQuestions = ({ id, title, info }) => {
  console.log(title);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <div
          className="question-btn"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestions;

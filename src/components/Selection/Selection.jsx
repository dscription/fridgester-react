import React from 'react'
import './Selection.css'


const Selection = ({question, options}) => {
  return ( 
    <div className="card">
      <h1> {question} </h1>
      <div className="options">
        {options.map((option) => (
          <button>
            {option}
          </button>
        ))}
      </div>
    </div>
   );
}
 
export default Selection;

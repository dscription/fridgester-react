import React from 'react'
import Card from '../../styledComponents/Card'
import './Selection.css'


const Selection = ({question, options}) => {
  return ( 
    <Card>
      <h1> {question} </h1>
      <div className="options">
        {options.map((option) => (
          <button>
            {option}
          </button>
        ))}
      </div>
    </Card>

   );
}
 
export default Selection;

import React, { Component } from 'react';
import './Home.css'
import Selection from '../../components/Selection/Selection'


class Home extends Component {
  state = { 
    section1: {
      question: "What type of meal would you like to make?",
      options: ["Sandwich", "Soup", "Salad", "Baked", "Fried"] 
    },
    section2: {
      question: "What foods are currently in your fridge?",
      options: ["Lettuce", "Tomato", "Pickles", "Mustard", "Ketchup", "Cheese", "Butter", "Cabbage", "Salsa", "Olives", "Spinach"]
    },
    section3: {
      question: "Select your primary protein.",
      options: ["Chicken", "Fish", "Egg", "Tofu", "Beef"]
    }
  }

  render() { 
    const {section1, section2, section3} = this.state;

    return ( 
      <>
        <main className="container">
          <h1> Search for a recipe.</h1>
          <Selection question={section1.question} options={section1.options}/>
          <Selection question={section2.question} options={section2.options}/>
          <Selection question={section3.question} options={section3.options}/>
        </main>
      </>
     );
  }
}
 
export default Home;
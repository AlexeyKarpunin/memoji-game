import React from "react";
// import './memoji_css/loseMenu.css';

class LoseMenu extends React.Component {
  render () {
    return (
      <div className="lose__menu">
        <div className="lose__menu__table">
          <div className="lose__menu__result">
            <div>
               <p>You Lose</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LoseMenu
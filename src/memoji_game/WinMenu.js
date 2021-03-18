import React from "react";
// import './memoji_css/winMenu.css';

class WinMenu extends React.Component {
  render () {
    return (
      <div className="win__menu">
        <div className="win__menu__table">
          <div className="win__menu__result">
            <div>
               <p>You Win</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default WinMenu
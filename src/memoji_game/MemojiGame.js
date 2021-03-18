import React from 'react';
// import './memoji_css/memojiGame.css';
import WinMenu from './WinMenu';
import LoseMenu from './LoseMenu';
import Timer from './Timer';
// import '../../css/button.css';

const GAMESTATUSES = {
  started: "started",
  win: "win",
  lose: "lose",
  default: undefined,
}

class MemojiGame extends React.Component {
  constructor () {
    super ();
    this.memoji = ['🐷', '🐱', '🐭', '🐷', '🐱', '🐭', '🦄', '🦄', '🐯', '🐯', '🐰', '🐰'];
    this.winCounter = 0;
    this.restart = () => {
      this.winCounter = 0;
      this.setState( (state) => {
        return {gameStatus: GAMESTATUSES.started}
      });
    };
    this.lose = () => {
      this.setState( (state) => {
        return {gameStatus: GAMESTATUSES.lose}
      });
    }

    this.state = {
      gameStatus: GAMESTATUSES.default,
      choices: [],
    };

    this.CardsCreator = this.CardsCreator.bind(this);
    this.rotade = this.rotade.bind(this);
    this.checkCards = this.checkCards.bind(this);
    
  }



  CardsCreator (props) {
    const cardsArr = props.cards;
    const imgPosition = this.addPictures(this.memoji)
    const cards = cardsArr.map( (card, index) => 
      <div key={index} className="card">
        <span className="card__picture">{imgPosition[index]}</span>
      </div>
    );

    return cards
  }
  
  checkCards (click) {
    this.state.choices.push(click);
    if (this.state.choices.length > 2) {
      for (let i = 0; i < 2; i++) {
        this.state.choices[i].classList.remove("different");
        this.state.choices[i].classList.remove("rotade180");
        this.state.choices[i].querySelector(".card__picture").classList.remove("see");
      }
       this.state.choices.splice(0, this.state.choices.length - 1);
      return;
    }

    if (this.state.choices.length === 2) {
      const first = this.state.choices[0].querySelector(".card__picture").innerHTML
      const second = this.state.choices[1].querySelector(".card__picture").innerHTML
      if (first === second) {
        this.state.choices[0].classList.add("same");
        this.state.choices[1].classList.add("same");
        this.state.choices.splice(0, this.state.choices.length);
        this.winCounter++;
        if (this.winCounter === 6 ) {
          this.setState((state) => {
            return {gameStatus: GAMESTATUSES.win}
          })
        }  
      } else {
        this.state.choices[0].classList.add("different");
        this.state.choices[1].classList.add("different");
      }
    }
  }

  rotade (e) {
    if (!this.state.gameStatus) return;
    if (e.target.classList.contains("card")) {
      e.target.classList.add("rotade180");
      e.target.querySelector(".card__picture").classList.add("see");
      this.checkCards(e.target);
    }
  }

  addPictures (arr) {
  let oldArray = arr.slice();
  let randomArr = [];
    for (let i = oldArray.length; i > 0; i--) {
      const randomElement = Math.floor (
            Math.random() * (oldArray.length - 1)
          );
      randomArr.push(oldArray[randomElement]);
      oldArray.splice(randomElement, 1);
    }

  return randomArr
  }

  gameRender (status) {
    switch(status) {
      case GAMESTATUSES.started:
        return <this.CardsCreator cards={this.memoji} />
      case GAMESTATUSES.win:
        return <WinMenu/>
      case GAMESTATUSES.lose:
        return <LoseMenu/>  
      default:
        return <this.CardsCreator cards={this.memoji} />
    }
  }

  render() {
    // const {backArrow} = this.props;
    const {gameStatus} = this.state;
    const {lose} = this;
    return (
      <article>
        {/* <div onClick={backArrow} class="container__button_back button_back">
            <div></div>
        </div> */}
        <section className="game__container">
          {gameStatus === GAMESTATUSES.started ? <Timer {...{lose}}/> 
          : <div 
                className="game__container__taimer_defoult">Timer 01:00
            </div> }

          <div className="game__container__cards" onClick={this.rotade}>
            {this.gameRender(gameStatus)}
          </div>
        </section>
        {gameStatus !== GAMESTATUSES.started ? <button className="start__button" onClick={this.restart}>Start game</button> : null }
      </article>
    )
  }
}

export default MemojiGame;
import React from "react";
// import './memoji_css/memojiGame.css';

class Timer extends React.Component {
  constructor () {
    super();
    this.state = {
      seconds: 59,
    }
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState( (state) => {
      return {seconds: state.seconds - 1}
    });
  }

  loseGame () {
    const {lose} = this.props;
    clearInterval(this.timer);
    lose();
  }

  render () {
    let {seconds} = this.state;
    return (
    <div className = "game__container__taimer_defoult">
      {seconds === 0 ? this.loseGame() : null}
      Timer 00:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
    )
  }
}

export default Timer

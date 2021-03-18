import React from 'react';
import { render } from 'react-dom';
import MemojiGame from './memoji_game/MemojiGame.js'
import './memoji_game/memoji_css/loseMenu.css'
import './memoji_game/memoji_css/memojiGame.css'
import './memoji_game/memoji_css/winMenu.css'
import './memoji_game/memoji_css/button.css'

function App () {
  return (
    <>
      <MemojiGame />
    </>
  )
}


render(<App />, document.getElementById('root'))

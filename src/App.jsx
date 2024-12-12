import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [turn, setTurn] = useState("Player 1");
  const [board, setBoard] = useState([[]]);
  const [move, setMove] = useState(1);
  const [status, setStatus] = useState("");
  const [winner, setWinner] = useState("");
  

  useEffect(() => {
    if (move == 1) {
      setBoard([[]]);
      setTurn("Player 1");
      setWinner("");
      setStatus("");
    }
    setBoard([[document.getElementById("11").innerHTML, document.getElementById("12").innerHTML, document.getElementById("13").innerHTML],
              [document.getElementById("21").innerHTML, document.getElementById("22").innerHTML, document.getElementById("23").innerHTML],
              [document.getElementById("31").innerHTML, document.getElementById("32").innerHTML, document.getElementById("33").innerHTML]]);
  }, [move])

  useEffect(() => {
    if (status === "Game Over") {
      setTurn("");
    }
    else if (move%2 === 0) {
      setTurn("Player 2");
    }
    else {
      setTurn("Player 1");
    }
  }, [status, move])          //the problem was that i said [], [] instead of [8, 9]------------------------------------------

  useEffect(() => {
    let one = document.getElementById("11").innerHTML, two = document.getElementById("12").innerHTML, three = document.getElementById("13").innerHTML;
    let four = document.getElementById("21").innerHTML, five = document.getElementById("22").innerHTML, six = document.getElementById("23").innerHTML;
    let seven = document.getElementById("31").innerHTML, eight = document.getElementById("32").innerHTML, nine = document.getElementById("33").innerHTML;
    if (
      (one == two && one == three) || (four == five && four == six) || (seven == eight && seven == nine) || (one == four && one == seven)
      || (two == five && two == eight) || (three == six && three == nine) || (one == five && one == nine) || (three == five && three == seven)) {
      setStatus("Game Over");
      if (turn === "Player 1") {
        setWinner("Player 2");
        setTurn("");
      }
      else {
        setWinner("Player 1");
        setTurn("");
      }
    }
  }, [board])

  /*function click(id) {
    if (document.getElementById(id).innerHTML == 'O' || document.getElementById(id).innerHTML == 'X') {
      error
    }
    else {
      document.getElementById(id).innerHTML = (turn == "Player 1" ? 'O' : 'X');
      setMove(move + 1);
    }
  }*/
//change ternary operator to "move%2"--------maybe not
  
  return (
    <div>
      <h1>{turn}</h1>
      <p>Move: {move}</p>
      <p>{status}</p>
      <p>Winner: {winner}</p>
      <div>
        <button id="11" className="sq" onClick={() => {document.getElementById("11").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1);}}>1</button>
        <button id="12" className="sq" onClick={() => {document.getElementById("12").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1);}}>2</button>
        <button id="13" className="sq" onClick={() => {document.getElementById("13").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1);}}>3</button>
      </div>
      <div>
        <button id="21" className="sq" onClick={() => {document.getElementById("21").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1);}}>4</button>
        <button id="22" className="sq" onClick={() => {document.getElementById("22").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1);}}>5</button>
        <button id="23" className="sq" onClick={() => {document.getElementById("23").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1);}}>6</button>
      </div>
      <div>
        <button id="31" className="sq" onClick={() => {document.getElementById("31").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1);}}>7</button>
        <button id="32" className="sq" onClick={() => {document.getElementById("32").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1);}}>8</button>
        <button id="33" className="sq" onClick={() => {document.getElementById("33").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1);}}>9</button>
      </div>
      <button id="reset" onClick={() => {document.getElementsByClassName("sq").innerHTML="_"; setMove(1);}}>Reset board</button>
      <p>{board}</p>
    </div>
  )
}


export default App

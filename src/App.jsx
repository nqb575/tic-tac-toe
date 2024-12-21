import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [turn, setTurn] = useState("Player 1");
  const [board, setBoard] = useState([[]]);
  const [move, setMove] = useState(0);
  const [status, setStatus] = useState("");
  const [winner, setWinner] = useState("");
  const [gamesPlayed, setGamesPlayed] = useState(0);
  
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [clicked6, setClicked6] = useState(false);
  const [clicked7, setClicked7] = useState(false);
  const [clicked8, setClicked8] = useState(false);
  const [clicked9, setClicked9] = useState(false);
  

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
  }, [move, gamesPlayed])

  useEffect(() => {
    if (status === "Game Over") {
      setTurn("");
    }
    else if (move%2 === 0) {
      setTurn("Player 1");
    }
    else {
      setTurn("Player 2");
    }
  }, [status, move])          //the problem was that i said [], [] instead of [8, 9]------------------------------------------

  useEffect(() => {
    let one = document.getElementById("11").innerHTML, two = document.getElementById("12").innerHTML, three = document.getElementById("13").innerHTML;
    let four = document.getElementById("21").innerHTML, five = document.getElementById("22").innerHTML, six = document.getElementById("23").innerHTML;
    let seven = document.getElementById("31").innerHTML, eight = document.getElementById("32").innerHTML, nine = document.getElementById("33").innerHTML;
    if (
      (one == two && one == three) || (four == five && four == six) || (seven == eight && seven == nine) || (one == four && one == seven)
      || (two == five && two == eight) || (three == six && three == nine) || (one == five && one == nine) || (three == five && three == seven))
    {
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


  return (
    <div>
      <h1>{turn}</h1>
      <p>Moves: {move}</p>
      <h1>{status}</h1>
      <h3>Winner: {winner}</h3>
      <div className="row">
        <button id="11" className="sq" onClick={() => { if (!clicked1) {
          document.getElementById("11").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1); setClicked1(true);}
          else {alert("This button cannot be picked.")}}}> </button>
        <button id="12" className="sq" onClick={() => { if (!clicked2) {
          document.getElementById("12").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1); setClicked2(true);}
          else {alert("This button cannot be picked.")}}}>  </button>
        <button id="13" className="sq" onClick={() => { if (!clicked3) {
          document.getElementById("13").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1); setClicked3(true);}
          else {alert("This button cannot be picked.")}}}>   </button>
      </div>
      <div className="row">
      <button id="21" className="sq" onClick={() => { if (!clicked4) {
          document.getElementById("21").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1); setClicked4(true);}
          else {alert("This button cannot be picked.")}}}>    </button>
        <button id="22" className="sq" onClick={() => { if (!clicked5) {
          document.getElementById("22").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1); setClicked5(true);}
          else {alert("This button cannot be picked.")}}}>     </button>
        <button id="23" className="sq" onClick={() => { if (!clicked6) {
          document.getElementById("23").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1); setClicked6(true);}
          else {alert("This button cannot be picked.")}}}>      </button>
      </div>
      <div className="row">
      <button id="31" className="sq" onClick={() => { if (!clicked7) {
          document.getElementById("31").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1); setClicked7(true);}
          else {alert("This button cannot be picked.")}}}>       </button>
        <button id="32" className="sq" onClick={() => { if (!clicked8) {
          document.getElementById("32").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1); setClicked8(true);}
          else {alert("This button cannot be picked.")}}}>        </button>
        <button id="33" className="sq" onClick={() => { if (!clicked9) {
          document.getElementById("33").innerHTML=(turn==="Player 1"?'O':'X'); setMove(move + 1); setClicked9(true);}
          else {alert("This button cannot be picked.")}}}>         </button>
      </div>
      <button id="reset" onClick={() => {
                                          document.getElementById("11").innerHTML=" ";
                                          document.getElementById("12").innerHTML="  ";
                                          document.getElementById("13").innerHTML="   ";
                                          document.getElementById("21").innerHTML="    ";
                                          document.getElementById("22").innerHTML="     ";
                                          document.getElementById("23").innerHTML="      ";
                                          document.getElementById("31").innerHTML="       ";
                                          document.getElementById("32").innerHTML="        ";
                                          document.getElementById("33").innerHTML="         ";
                                          setMove(0); setGamesPlayed(gamesPlayed + 1);
                                          setWinner("");
                                          setStatus("");
                                          setClicked1(false);setClicked2(false);setClicked3(false);
                                          setClicked4(false);setClicked5(false);setClicked6(false);
                                          setClicked7(false);setClicked8(false);setClicked9(false);}}>Reset board</button>
    </div>
  )
}


export default App

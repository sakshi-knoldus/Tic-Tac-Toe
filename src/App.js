import './App.css';
import React,{useState,useEffect} from 'react';


function App() {
  const init_board=['','','','','','','','',''];
  const [xturn, setxturn] = useState(true);
  const [board,setBoard]=useState(init_board);
  const [gameover, setGameOver]= useState(false);
  var winner=false;
  const player=xturn?'X':'0';

  const winning_sequences=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

 
  const restart=()=>{
    setBoard(init_board);  
    console.log(board);
    setGameOver(false);
    setxturn(true);
  }
  const play=(pos)=>{
    console.log(pos);
    if(gameover) return ;
    
    if (board[pos] === ''){
      board[pos]= player;
      setBoard([...board.slice(0,pos),player,...board.slice(pos+1)]);
     
    }
  }
  
  useEffect(()=>{
    winner= check_winning_sequences(player);
    setxturn(!xturn);
    if(winner){     
      alert(`${player} Win the Game`);
      setGameOver(true);

      alert('GAME OVER'); 
      restart();
    }
  },[board]);
  
  
  const check_winning_sequences=(player)=>{
   
    for (let i in winning_sequences ) {
      console.log(i);
      if (board[ winning_sequences[i][0] ] == player  &&
          board[ winning_sequences[i][1] ] == player &&
          board[ winning_sequences[i][2] ] == player) {
          
          return true;
      }
  };
  return false;
  }
  
 

 
  return (
    <div >
      <h1 className="heading">Tic Tac Toe</h1>
      <div class="container">
        {console.log(board)}
        {board.map((value,index)=>{
        return(
            <div key={index} className={"cell"+(index+1)} onClick={()=>play(index)}>{value}</div>
           
            )
      })}
      </div>
      {winner &&   <h1>player+" Wins the games"</h1>  }
    <button className="restart" onClick={e=>restart(e)}>Restart</button>
   
    </div>
  )
  }
export default App;

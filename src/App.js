import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

//1. 박스2개(타이틀, 사진, 결과)
//2. 가위바위보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 box에 보임
//4. 컴퓨터는 랜덤하게 랜덤하게 아이템 선택이 된다
//5. 3번 4번을 가지고 승패를 가린다
//6. 승패의 결과에 따라 선의 칼라가 바뀐다(이기면-초록,지면-빨강,비기면-검은색)

const choice = {
  rock: {
    name: "Rock",
    img: "https://understanding963852.github.io/img/rock.jpg",
  },
  scissors: {
    name: "Scissor",
    img: "https://understanding963852.github.io/img/scissors.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://understanding963852.github.io/img/paper.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  //컴퓨터를 위한 state
  const [computerSelect, setComputerSelect] = useState(null);
  //승패를 가리기위한 state
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let componentChoice = randomChoice();
    setComputerSelect(componentChoice);
    const jm = judgement(choice[userChoice], componentChoice);
    setResult(jm);
  };

  const judgement = (user, computer) => {
    console.log("user : " + user, "computer : " + computer); //객체임 object
    //user === computer  : tie(비김)
    //user == rock, computer == scissors  : user이김
    //user == rock, computer == paper  : user 진것임
    //user == scissor, computer == paper  : user이김
    //user == scissor, computer == rock  : user 진것임
    //user == paper, computer == rock  : user이김
    //user == paper, computer == scissors  : user 진것임

    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock") {
      return computer == "Scissor" ? "win" : "lose";
    } else if ((user.name = "Scissor")) {
      return computer.name == "Paper" ? "win" : "lose";
    } else if ((user.name = "Paper")) {
      return computer.name == "Rock" ? "win" : "lose";
    }
  };
  const randomChoice = () => {
    //랜덤으로 초이스하는 방법
    let itemArray = Object.keys(choice);
    console.log("itemArray : " + itemArray); //itemArray : rock,scissors,paper//객체의 키값이 배열로 들어온다
    //Math.random(); //0~1사이의 값
    //Math.floor()  //소수점아래를 버린다
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log(randomItem);
    let final = itemArray[randomItem];
    console.log("final : " + final);
    return choice[final];
  };
  return (
    <>
      <div className="main">
        <Box title="Me" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="buttons">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}
export default App;

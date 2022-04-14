import React, { useState } from "react";
import {
  GameParent,
  GameWrapper,
  GameText,
  GameName,
  GameBody,
  GameBox1,
  GameBox2,
  NumBtn,
  GameTime,
} from "./Game.elements.js";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles.js";

const z = true;

const PlayNumbers = (props) => (
  <NumBtn style={{backgroundColor: colors[props.status]}} onClick={() => console.log("Nums:", props.number)}>
    {props.number}
  </NumBtn>
);

const StarDisplay = props => (
  <>
    {utils.range(1, props.count).map((starId) => 
      <Button key={starId}>{props.iconStar}</Button>
    )}
  </>
);

const Game = ({ lightBg, description, iconStar, time }) => {
  // display only five star
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);

  const candidateAreWrong = utils.sum(candidateNums) > stars;

  const NumberStatus = (number) => {
  if(!availableNums.includes(number)) {
    return 'used';
  }

  if(candidateNums.includes(number)) {
    return candidateAreWrong ? 'wrong' : 'candidate';
  }

  return 'available';
}
  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <GameParent>
          <GameWrapper lightBg={lightBg}>
            <GameText>
              <GameName>{z ? description : ""}</GameName>
            </GameText>
            <GameBody>
              <GameBox1>
                <StarDisplay count={stars} iconStar={iconStar}/>
              </GameBox1>
              <GameBox2>
                {utils.range(1, 9).map((number) => (
                  <PlayNumbers key={number} number={number} status={NumberStatus(number)} />
                ))}
              </GameBox2>
              <GameTime>{time}</GameTime>
            </GameBody>
          </GameWrapper>
        </GameParent>
      </IconContext.Provider>
    </>
  );
};

//color theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
}

//get obj
const utils = {
  //sum of each stars
  sum: (arr) => arr.reduce((acc, cur) => acc + cur, 0),
  //create an array of numbers btw min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(max * Math.random()),
};

export default Game;

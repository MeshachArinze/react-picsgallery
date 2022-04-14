import React from 'react';
import { Game } from '../../components';
import { homeObjOne } from './Data';

const Home = () => {
  return (
    <>
    <Game {...homeObjOne}/>
    </>
  )
}

export default Home;
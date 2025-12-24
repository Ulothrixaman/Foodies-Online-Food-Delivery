import React from 'react';
import Header from '../../component/Header/Header';
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay';

const Home = () => {
  return (
    <main className="container">
        <Header />
        <ExploreMenu />
        <FoodDisplay />
    </main>
  )
}

export default Home;
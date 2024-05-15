import React from "react";
import Nav from "../../components/Home/Nav";
import Exercise from "../../components/Home/Exercise";
import Workout from "../../components/Home/Workout";
import Ingredient from "../../components/Home/Ingredient";
import Meal from "../../components/Home/Meal";

const ExplorePage = () => {
  return (
    <div className="explore">
      <Nav />
      <Exercise />
      <Workout />
      <Ingredient />
      <Meal />
    </div>
  );
};

export default ExplorePage;
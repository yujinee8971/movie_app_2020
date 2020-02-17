import React from 'react';

function Food({name, picture}) {
  return (
        <div>
            <h1>I like {name}</h1>
            <img src={picture} />
        </div>
        );
}

const foodILike = [{
  name: "kimchi",
  image: "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fbloter%2F74b9579a3b584e06ad39cc706d25daee.jpg"
},{
  name: "samgyeopsal",
  image: "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fbloter%2F74b9579a3b584e06ad39cc706d25daee.jpg"
},{
  name: "bibimbap",
  image: "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fbloter%2F74b9579a3b584e06ad39cc706d25daee.jpg"
},{
  name: "doncasu",
  image: "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fbloter%2F74b9579a3b584e06ad39cc706d25daee.jpg"
},{
  name: "kimbap",
  image: "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fbloter%2F74b9579a3b584e06ad39cc706d25daee.jpg"
}];

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>
  );
}

export default App;

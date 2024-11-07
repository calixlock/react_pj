function Food({ index, name, img }) {
  return (
    <div>
      <h2>
        {index + 1}. {name}
      </h2>
      <img src={img} alt={name} />
    </div>
  );
}

const foodList = [
  {
    id: 1,
    name: "spam",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/04/31/sapm-909485_1280.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "stake",
    image:
      "https://cdn.pixabay.com/photo/2021/12/20/14/52/chicken-6883246_1280.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "apple",
    image:
      "https://cdn.pixabay.com/photo/2019/02/04/06/45/apple-3974055_1280.jpg",
    rating: 4.2,
  },
];
const renderFood = (item, idx) => (
  <Food key={idx} name={item.name} img={item.image} index={idx} />
);

function App() {
  console.log(foodList.map(renderFood));
  return (
    <div>
      <h1>Food List</h1>
      {foodList.map(renderFood)}
    </div>
  );
}

export default App;

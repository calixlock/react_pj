function Food({ idx, name, img }) {
  return (
    <div>
      <h2>
        {idx + 1}. {name}
      </h2>
      <img src={img} alt={name} />
    </div>
  );
}

const foodList = [
  {
    name: "spam",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/04/31/sapm-909485_1280.jpg",
  },
  {
    name: "stake",
    image:
      "https://cdn.pixabay.com/photo/2021/12/20/14/52/chicken-6883246_1280.jpg",
  },
  {
    name: "apple",
    image:
      "https://cdn.pixabay.com/photo/2019/02/04/06/45/apple-3974055_1280.jpg",
  },
];
function App() {
  // return <div className="App" />;
  return (
    <div>
      <h1>Food List</h1>
      {foodList.map((item, idx) => (
        <Food key={idx} name={item.name} idx={idx} img={item.image} />
      ))}
    </div>
  );
}

export default App;

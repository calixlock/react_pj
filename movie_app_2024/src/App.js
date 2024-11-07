import PropTypes from "prop-types";

function Food({ index, name, img, rating }) {
  return (
    <div>
      <h2>
        {index + 1}. {name}
      </h2>
      <h4>{rating} / 5.0</h4>
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
  },
  {
    id: 3,
    name: "apple",
    image:
      "https://cdn.pixabay.com/photo/2019/02/04/06/45/apple-3974055_1280.jpg",
    rating: 3.2,
  },
];

function App() {
  return (
    <div>
      <h1>Food List</h1>
      {foodList.map((item, idx) => (
        <Food
          key={idx}
          name={item.name}
          img={item.image}
          index={idx}
          rating={item.rating}
        />
      ))}
    </div>
  );
}
// props의 type 체크 / 불충족 시 console에 warning 발생
Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;

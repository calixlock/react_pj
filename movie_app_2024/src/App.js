function Food({ fav }) {
  // console.log({ fav });
  return <h3>{fav} is good.</h3>;
}
function App() {
  // return <div className="App" />;
  return (
    <div>
      <h1>hello react</h1>
      <div>
        {/* <Food /> */}
        <Food fav="spam" p1="true" p2={true} p3={[1, 2, 3, 4, "hello"]} />
        <Food fav="stake" />
        <Food fav="apple" />
        <Food fav="?" />
      </div>
    </div>
  );
}

export default App;

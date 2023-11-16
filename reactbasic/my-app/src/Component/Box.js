export default function Box(props) {
  return (
    <div className="box">
      BoxName : {props.name}
      <br />
      BoxNumber : {props.num}
      <br />
    </div>
  );
}

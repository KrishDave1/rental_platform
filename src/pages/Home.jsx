import {
  // Footer,
  // Offers_Discounts,
  // Products,
  // Extra_Discounts,
  Display_Slider,
} from "../components";
const Home = (props) => {
  return (
    <div className="">
      <Display_Slider />
      {props.name ? "Hi " + props.name : "You are not logged in"}
      <img className="w-full h-1/2" src="../homepage1.jpg" />
    </div>
  );
};
export default Home;

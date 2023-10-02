import {
  // Footer,
  // Offers_Discounts,
  // Products,
  // Extra_Discounts,
  Display_Slider,
} from "../components";
const Home = (props) => {
  return (
    <div>
      <Display_Slider />
      {props.name ? 'Hi ' + props.name : 'You are not logged in'}
    </div>
  );
};
export default Home;

import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "src/assets/sliderimages/Ad1.webp" },
  { url: "src/assets/sliderimages/ad3.webp" },
  { url: "src/assets/sliderimages/ad4.webp" },
  { url: "src/assets/sliderimages/ad5.webp" },
];

export const Display_Slider = () => {
  return (
    <div className="grid place-items-center my-[20px] bg-gray-400 p-5 slider-bg-image">
      <SimpleImageSlider
        width={900}
        autoPlay={true}
        autoPlayDelay={3.0}
        height={500}
        slideDuration={1.0}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

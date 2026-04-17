import backgroundImage from "../assets/images/bg-hero.jpg";
import Button from "./Button";
const Hero = () => {
    
  return (
    <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-10">
        {/* Left Content */}
        <div className="text-white max-w-xl">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Enjoy Our <br /> Delicious Meal
          </h1>

          <p className="text-gray-300 mb-6">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos.
          </p>

            <Button>BOOK A TABLE</Button>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <img src="/food.png" alt="food" className="w-[400px] md:w-[500px]" />
        </div>
      </div>
    </div>
  );
};
export default Hero;

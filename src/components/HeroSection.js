import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className=" bg-gray-primary relative">
       <img
        
        src="./icons_assets/grill.jpg"
        style={{
        display: "flex",
        marginLeft: "900px",
        marginTop: "20px",
        borderRadius: "20px",
        height: "500px",
        width: "400px"

        }}
        // src="./icons_assets/food4.webp"
        alt="Restaurant Food"
      ></img>
      <div className="lg:max-w-[1100px] mr-auto ml-auto px-[18px] md:px-[16px] py-8 lg:px-[0px] absolute top-0 left-12">
        <h1 className="text-5xl md:text-7xl 2xl:text-9xl text-yellow-primary font-markazi">
          LITTLE LEMON
        </h1>
        <h2 className="text-3xl md:text-5xl 2xl:text-7xl text-white-highlight font-markazi -mt-2">
          Chicago
        </h2>
        <p className="text-white-highlight text-left mt-4 mb-6 font-medium text-xl 2xl:text-2xl w-1/1 md:w-5/12 lg:w-1/4 ">
          Welcome to Chicago's most favourite restaurant. Your request is our command...
        </p>
        <Link
          to="/booking"
          className=" hover:shadow-md hover:bg-yellow-300 transition-all duration-200 ease-in text-black-highlight font-bold text-xl bg-yellow-primary px-6 py-3 rounded-2xl mt-3"
        >
          Reserve a Table
        </Link>
      </div>
     
     
    </section>
  );
};

 {/* <img
        className="hidden md:block w-[260px] h-[300px] lg:w-[380px] lg:h-[420px] absolute md:right-[20px] md:bottom-3 lg:right-[220px] lg:-bottom-16 object-cover rounded-xl"
        src="./icons_assets/food4.webp"
        alt="Restaurant Food"
      ></img> */}
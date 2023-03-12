export default function ChicagoSection() {
  return (
    <div className="lg:w-[1100px] mr-auto ml-auto md:mt-[90px] mt-[50px]">
      <div className="flex flex-col md:flex-row px-[16px] md:px-[0px]">
        <div className=" md:w-[1100px] mr-auto ml-auto md:px-[20px] lg:px-[0px]">
          <h1 className="text-7xl text-yellow-primary font-markazi">
            Little Lemon
          </h1>
          <h2 className="text-5xl text-black-highlight font-markazi -mt-2">
            Chicago
          </h2>
          <p className="text-black-highlight text-left mt-4 md:mb-2 mb-6 font-medium text-xl md:w-1/2 ">
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. 
          To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to
           incorporate additional cuisines from the Mediterranean region.
          </p>
        </div>
        <div className="">
          <img
            className=" rounded-md lg:w-11/12 md:w-full w-9/12 z-10 relative shadow-md translate-x-[80px] lg:translate-x-[0px] md:translate-y-[70px]
            md:-translate-x-[100px]  lg:-translate-y-[10px]"
            src="./icons_assets/mario-and-adrian-a.jpg"
            alt="Two chef cooking"
          ></img>
          <img
            className="lg:-translate-x-[180px] md:-translate-x-[200px]  lg:-translate-y-[80px] md:w-full md:translate-y-[30px] -translate-y-[20px]  rounded-md lg:w-11/12 w-9/12 relative shadow-md"
            src="./icons_assets/mario-and-adrian-b.jpg"
            alt="Two chef cooking"
          ></img>
        </div>
      </div>
    </div>
  );
}

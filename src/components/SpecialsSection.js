import SpecialFoodCard from "./SpecialFoodCard";

const SpecialsSection = () => {
  return (
    <section className="mt-[70px] lg:mt-[140px]   md:mt-[70px] lg:max-w-[1100px] md:max-w-[830px] mr-auto ml-auto px-[16px] md:px-[12px] lg:px-[0px] ">
      <div className="text-7xl font-markazi  ">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-5xl md:text-6xl">This week's specials!</h2>
          <button className="hover:shadow-md hover:bg-yellow-300 transition-all duration-200 ease-in text-black-highlight font-bold text-xl bg-yellow-primary px-9 py-3.5 rounded-2xl font-karla mr-[14px]">
            Online Menu
          </button>
        </div>
      </div>
      <div className="mt-[40px]">
        <div className="flex flex-col md:flex-row lg:gap-12  gap-6 ">
          <SpecialFoodCard
            foodName="Greek Salad"
            price="$11.00"
            description="Have you tasted the greek salad? You do not need to be in Greek to have this splendind taste of great salad. Make your order. or Book a table to enjoy this deliacy."
            imageUrl="./icons_assets/greek salad.jpg"
          />
          <SpecialFoodCard
            foodName="Bruchetta"
            price="$9.50"
            description="Finger-licking taste of bruchetta. Place an order now to devour one of the best discoveries of Chicago. You will not regret it. You can pass by for a taste as well."
            imageUrl="./icons_assets/bruchetta.jpg"
          />
          <SpecialFoodCard
            foodName="Lemon Dessert"
            price="$15.00"
            description="Have you had a taste of the lemon dessert? This is the most popular dessert specialty in the who town. COme have a taste. Book now for home delivery."
            imageUrl="./icons_assets/lemon dessert.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;

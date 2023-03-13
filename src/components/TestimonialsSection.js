import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <div className="mt-[40px] md:mt-[100px] bg-white-highlight md:pb-[50px] md:pt-[10px]">
      <div className=" md:w-[820px] lg:w-[1100px] mr-auto ml-auto md:py-[100px] pb-[40px] px-[16px] py-[16px] text-center">
        <h3 className="text-5xl md:text-center font-markazi mb-[12px]">
          Testimonials
        </h3>
        <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-center md:flex-row gap-6 md:mt-10 md:grid md:grid-cols-2 md:place-items-center md:max-w-[830px]">
          <div>
            <TestimonialCard
              name="Omondi"
              rating="5"
              text="Ever since I discovered this restaurant, I can never have enough of their dishes"
              imgUrl="./icons_assets/duman.jpg"
            />
          </div>
          <div>
            <TestimonialCard
              name="Njuguna"
              rating="4.5"
              text="I have never had this kind of experience anywhere on earth. Delicious and timely"
              imgUrl="./icons_assets/samir.jpg"
            />
          </div>
          <div>
            <TestimonialCard
              name="Anyango"
              rating="5"
              text="Wow! Just wow! I am yet to get over it. The taste is out of this world. Wow!"
              imgUrl="./icons_assets/yusron.jpg"
            />
          </div>
          <div>
            <TestimonialCard
              name="Polepole"
              rating="4"
              text="I can recommend any time to anyone I love. Lovely and delicious dishes"
              imgUrl="./icons_assets/alexander.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

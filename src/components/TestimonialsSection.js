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
              name="Veerapandi"
              rating="5"
              text="Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at 
              your establishment"
              imgUrl="./icons_assets/duman.jpg"
            />
          </div>
          <div>
            <TestimonialCard
              name="Thangadurai"
              rating="4.5"
              text="Thanks again this year for having our wedding anniversary at your fine restaurant last Monday evening. 
              The food, service, ambience were all superb!!! On behalf of us all, fight on!"
              imgUrl="./icons_assets/samir.jpg"
            />
          </div>
          <div>
            <TestimonialCard
              name="Kamila"
              rating="4"
              text="Everyone had a wonderful time at The French Gourmet last night. As expected, the food was delicious and our servers,even thought a bit slow, were so friendly and helpful"
              imgUrl="./icons_assets/yusron.jpg"
            />
          </div>
          <div>
            <TestimonialCard
              name="Varisu Vijay"
              rating="4.2"
              text="My friend and I were at Little Lemon last night for dinner. I want to thank you and the rest of the staff for the excellent food and service provided.Chicken Broth was so delicious"
              imgUrl="./icons_assets/alexander.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

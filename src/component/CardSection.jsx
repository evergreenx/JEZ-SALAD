import React from "react";

function CardSection() {
  const data = [
    {
      url: "https://res.cloudinary.com/evergreenx/image/upload/v1626600458/Group_8445_zqpojv.svg",
      heading: "Own fruit orchard",
      body: "Langsung dari Kebun Sendiri yang  tersebar di setiap provinsi yang memiliki cabang toko Jez Salad.",
    },

    {
      url: "https://res.cloudinary.com/evergreenx/image/upload/v1629147873/Group_8442_k5jjja.svg",
      heading: "#1 Healthy Fruit Salad",
      body: "The pioneer of healthy fruit salads that are delicious & suitable for all people with the best quality assurance.",
    },
    {
      url: "https://res.cloudinary.com/evergreenx/image/upload/v1626600753/Group_8444_hssr69.svg",
      heading: "100 Top Brand",
      body: "We are one of the best brands in the Food and Beverage sector in Indonesia.  suitable for all people ",
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between lg:flex-row flex-col mb-20">
        {data.map((card) => (
          <>
            <div className="p-10 w-80 mx-auto items-center lg:text-left text-center lg:block flex flex-col    rounded-3xl hover:shadow-2xl hover:bg-white ">
              <img src={card.url} alt="illustartion" className="mb-20" />
              <h1 className=" font-semibold text-2xl tracking-tighter">
                {card.heading}
              </h1>
              <p className="mt-3 font-normal text-base text-black-text">
                {card.body}
              </p>


              <button className=" py-2 px-6 mt-6  text-base font-normal text-basic-black flex items-center bg-primary text-hero-action  rounded-full">
                Learn more <span className="text-2xl ml-4">
                &#x2192;
                  </span> 
              </button>

            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default CardSection;

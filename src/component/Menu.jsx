import React from "react";

const Menu = () => {
  let menuData = [
    {
      name: "Salad Yummy Red ",
      price: "$ 3.99",
      image:
        "https://res.cloudinary.com/evergreenx/image/upload/v1634071233/top-view-fruity-salad-with-fresh-sliced-fruits_1_tfnacj.png",
    },

    {
      name: "Salad Yummy White ",
      price: "$ 2.99",
      image:
        "https://res.cloudinary.com/evergreenx/image/upload/v1634071266/front-view-vegetable-salad-from-boiled-vegetables-mixed-inside-round-plate-dark-background_1_usf4mr.png",
    },

    {
      name: "Salad Yummy Mix 2",
      price: "$ 5.49",
      image:
        "https://res.cloudinary.com/evergreenx/image/upload/v1634071206/front-view-creamy-avocados-with-sliced-peppers-bread-pieces-grey-space_1_bhq189.png",
    },
  ];

  return (
    <div className="lg:mx-16 mx-5">
      <div className=" flex flex-col items-center justify-center mt-28">
        <h2 className="text-primary font-medium text-xl mb-3 text-center ">
          MENU YANG MEMBUATMU JATUH CINTA
        </h2>

        <div className="">
          <h1 className="tracking-tighter w-4/6 text-center text-menu-color font-bold lg:text-5xl text-3xl mx-auto ">
            ENJOY THE BEST MENU AND GET
            <span className="text-primary mt-3"> DISCOUNTS </span> AVAILABLE
          </h1>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between  items-center mt-16">
        {menuData.map((i) => (
          <>
          <div class="flex items-center justify-center h-screen">
  <figure class="relative max-w-xs cursor-pointer">
    <img class="rounded-lg shadow-xl hover:shadow-2xl" src={i.image} alt="" />
    <figcaption class="absolute text-lg -mt-16 text-white px-4">
      <div>
        <h1>Title</h1>
      </div>
      <div>
        <h1>Subtitle</h1>
      </div>
      </figcaption>
  </figure>
</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Menu;

import SectionTitle from "../components/Section/SectionTitle";
import Card from "../components/Specials/Card";
import { useState, useEffect } from "react";

export default function Specials() {
  const data = [
    {
      "img": "https://cdn.yosushi.com/r/w-1000/YoSushi/files/07/0799897a-833d-453b-ade8-1a2675bac142.638173692740000000.png",
      "name ": "Dragon Roll",
      "description": "A sushi roll filled with eel, cucumber, and avocado, topped with slices of avocado and unagi sauce.",
      "price": 14.99
    },
    {
      "img": "https://jow.fr/_next/image?url=https%3A%2F%2Fstatic.jow.fr%2F880x880%2Frecipes%2FphsDckvVj0SEQA.png&w=2560&q=100",
      "name ": "Spicy Tuna Roll",
      "description": "A classic sushi roll filled with spicy tuna, cucumber, and avocado, with a kick of spicy mayo.",
      "price": 9.99
    },
    {
      "img": "https://cdn.yosushi.com/r/w-1000/YoSushi/files/e7/e7e1a83f-4f35-4ae6-aa4e-602cd7f02d9d.638173692690000000.png",
      "name ": "Rainbow Roll",
      "description": "A sushi roll filled with crab, avocado, and cucumber, topped with slices of tuna, salmon, yellowtail, and avocado.",
      "price": 16.99
    },
    {
      "img": "https://cdn.yosushi.com/r/w-1000/YoSushi/files/1e/1e81f918-1a25-4f7e-9b22-a78ddb42a2ff.638183196770000000.png",
      "name ": "California Roll",
      "description": "A sushi roll filled with crab, avocado, and cucumber, wrapped in seaweed and rice.",
      "price": 7.99
    },
    {
      "img": "https://yosushi.com/getattachment/72b05427-15be-4cf6-be81-829b9abf19f8/salmon-nigiri-(1).png?lang=en-GB&height=1480&width=1480",
      "name ": "Salmon Nigiri",
      "description": "A traditional sushi dish consisting of a slice of raw salmon on top of a small ball of rice.",
      "price": 3.99
    },
    {
      "img": "https://yosushi.com/getattachment/f6c332b7-b6c8-4c66-9415-09a7eebb9f79/New-Salmon-Dragon-Roll.png?lang=en-GB",
      "name ": "Vegetable Roll",
      "description": "A sushi roll filled with a variety of fresh vegetables such as cucumber, carrot, wrapped in seaweed and rice.",
      "price": 6.99
    }
  ]


  // const [offerFoods, setOfferFoods] = useState([]);

  // useEffect(() => {
  //   fetch("../../utils/offers.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setOfferFoods(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error retrieving JSON data: ", error);
  //     });
  // }, []);

  return (
    <div
      className="my-20 flex justify-between flex-col items-center w-[80%] sm:flex-col"
      id="specials"
    >
      <div className="mr-auto flex justify-between w-full">
        <SectionTitle title={"Our Special Sushi Deals %"} />
      </div>

      <div className="flex gap-4 justify-between items-center w-full  my-4 sm:flex-col sm:gap-14 overflow-x-scroll h-[600px] ">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <Card
              key={index}
              imgSrc={item.img}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
}

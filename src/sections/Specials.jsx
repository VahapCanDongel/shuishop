import SectionTitle from "../components/Section/SectionTitle";
import Card from "../components/Specials/Card";
import { useState, useEffect } from "react";

export default function Specials() {
  const [offerFoods, setOfferFoods] = useState([]);

  useEffect(() => {
    fetch("../../utils/offers.json")
      .then((response) => response.json())
      .then((data) => {
        setOfferFoods(data);
      })
      .catch((error) => {
        console.error("Error retrieving JSON data: ", error);
      });
  }, []);

  return (
    <div
      className="my-20 flex justify-between flex-col items-center w-[80%] sm:flex-col"
      id="specials"
    >
      <div className="mr-auto flex justify-between w-full">
        <SectionTitle title={"Our Special Food Deals %"} />
      </div>

      <div className="flex gap-24 justify-between items-center w-full  my-4 sm:flex-col sm:gap-14 overflow-x-scroll h-[600px] ">
        {Array.isArray(offerFoods) &&
          offerFoods.map((item, index) => (
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

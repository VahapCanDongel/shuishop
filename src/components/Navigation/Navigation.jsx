import { useEffect, useState } from "react";
import CartItemCard from "./CartItemCard";

export default function Navigation() {
  const [leftMenuVisibility, setLeftMenuVisibility] = useState(false);
  const [cartModalVisibility, setCartModalVisibility] = useState(false)

  const [cartItems, setCartItems] = useState([]);

  const loadFromLocalStorage = (key) => {
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        return undefined;
      }
      return JSON.parse(serializedData);
    } catch (error) {
      console.error('Error loading data from local storage:', error);
      return undefined;
    }
  };

  const deleteItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem('basketItems', JSON.stringify(newCartItems));
  };

  useEffect(() => {
    const loadedItems = loadFromLocalStorage('basketItems') || [];
    setCartItems(loadedItems);
  }, [cartModalVisibility]);

  const totalItemsInCart = cartItems.length;
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);




  return (
    <div className="flex justify-center w-full items-center p-4">
      <div className="flex justify-between w-1/2 sm:justify-between sm:w-full sm:items-center">
        <div>
          <img
            src="https://www.nicepng.com/png/full/307-3078997_some-things-on-the-horizon-for-sushi-sushi.png"
            className="w-[100px]"
          />
        </div>

        <ul className="flex gap-4 justify-center items-center cursor-pointer sm:hidden">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#specials">Discounts</a>
          </li>
          <li>
            <a href="#foods">Products</a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
          <li className="bg-gray-200 p-2 rounded-md w-[80px] flex justify-center items-center" onClick={() => setCartModalVisibility(!cartModalVisibility)}>
            <svg
              width={25}
              height={25}
              className="fill-gray-800"
              viewBox="0 0 24 24"
            >
              <path d="M10 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM3.962 5.923a.962.962 0 0 1 0-1.923h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H9.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L19.5 13.12a1.923 1.923 0 0 1-1.866 1.457h-7.512a3.846 3.846 0 0 1-3.755-3.012L5.113 5.923h-1.15Z" />
            </svg>
            Cart

            <div className="bg-green-300 w-6 h-6 rounded-full absolute mb-10 mr-20 flex justify-center items-center">
              {totalItemsInCart}
            </div>
          </li>
        </ul>

        <div
          className="hidden  sm:visible sm:flex sm:justify-center sm:items-center sm:gap-6"

        >
          <div className="p-2 rounded-md w-[60px] h-[60px] flex flex-col justify-center items-center border-[1px] border-gray-400" onClick={() => setCartModalVisibility(!cartModalVisibility)}>
            <svg
              width={25}
              height={25}
              className="fill-gray-800"
              viewBox="0 0 24 24"
            >
              <path d="M10 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM3.962 5.923a.962.962 0 0 1 0-1.923h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H9.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L19.5 13.12a1.923 1.923 0 0 1-1.866 1.457h-7.512a3.846 3.846 0 0 1-3.755-3.012L5.113 5.923h-1.15Z" />
            </svg>
            Cart
            <div className="bg-green-300 w-6 h-6 rounded-full absolute mb-14 mr-14 flex justify-center items-center">
              {totalItemsInCart}
            </div>
          </div>

          <div className=" sm:bg-green-300 sm:w-[60px] sm:h-[60px] sm:rounded-md sm:flex sm:justify-center sm:items-center" onClick={() => setLeftMenuVisibility(!leftMenuVisibility)}>
            <svg
              width={46}
              height={46}
              className="fill-gray-800"
              viewBox="0 0 24 24"
            >
              <path d="M6 7h5a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 8h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2Zm-7-4h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
        </div>


        {leftMenuVisibility && (
          <div className="hidden sm:visible sm:bg-gray-200 sm:h-[250px] sm:w-[200px] sm:z-50 sm:absolute sm:right-0 sm:top-[100px] sm:mr-4 sm:rounded-md sm:p-2 sm:flex sm:justify-center sm:items-center sm:shadow-md">
            <ul className="hidden sm:flex sm:flex-col sm:gap-4 sm:justify-center sm:items-center cursor-pointer ">
              <li>
                <a href="#home" className="text-[25px]">Home</a>
              </li>
              <li>
                <a href="#specials" className="text-[25px]">Discounts</a>
              </li>
              <li>
                <a href="#foods" className="text-[25px]">Products</a>
              </li>
              <li>
                <a href="#location" className="text-[25px]">Location</a>
              </li>
            </ul>
          </div>
        )}
      </div>


      {cartModalVisibility && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 shadow-2xl bg-gray-400 bg-opacity-40">
          <div className="bg-white rounded-md shadow-lg h-[600px] w-[600px] flex items-center flex-col">
            <div className="flex items-center justify-between w-full p-6">
              <div className="text-[20px] my-4">
                Cart
              </div>

              <div className="text-[34px] rotate-45 cursor-pointer hover:rotate-90 transition" onClick={() => setCartModalVisibility(!cartModalVisibility)}>+</div>
            </div>


            <div className="overflow-scroll w-full h-[400px] flex flex-col items-center gap-4">
              {cartItems.map((item, index) => (
                <CartItemCard
                  key={index}
                  name={item.name}
                  imgSrc={item.imgSrc}
                  description={item.description}
                  price={item.price}
                  deleteItem={deleteItem}
                />
              ))}
            </div>

            <div className="flex w-full flex-col items-center p-4">
              <div className="flex justify-between w-full p-2">
                <div className="text-[20px]">
                  Total
                </div>


                <div className="text-[20px]">
                  £{total.toFixed(2)}
                </div>
              </div>
              <div className="bg-green-300 rounded-md p-2 w-[350px] flex justify-center items-center cursor-pointer hover:bg-green-200 transition">Complete Order</div>
            </div>


          </div>
        </div>
      )}

    </div>
  );
}

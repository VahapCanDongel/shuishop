import { useState } from "react";

export default function Navigation() {
const [leftMenuVisibility , setLeftMenuVisibility] = useState(false)

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
          <li><a href="#specials">Discounts</a></li>
          <li><a href="#foods">Products</a></li>
          <li><a href="#location">Location</a></li>
          <li className="bg-gray-200 p-2 rounded-md w-[80px] flex justify-center items-center">
            <svg
              width={25}
              height={25}
              className="fill-gray-800"
              viewBox="0 0 24 24"
            >
              <path d="M10 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM3.962 5.923a.962.962 0 0 1 0-1.923h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H9.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L19.5 13.12a1.923 1.923 0 0 1-1.866 1.457h-7.512a3.846 3.846 0 0 1-3.755-3.012L5.113 5.923h-1.15Z" />
            </svg>
            Cart
          </li>
        </ul>

        <div className="hidden  sm:visible sm:flex sm:justify-center sm:items-center sm:gap-6" onClick={()=> setLeftMenuVisibility(!leftMenuVisibility)}>
          <div className="p-2 rounded-md w-[60px] h-[60px] flex flex-col justify-center items-center border-[1px] border-gray-400">
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
              2
            </div>
          </div>

          <div className=" sm:bg-green-300 sm:w-[60px] sm:h-[60px] sm:rounded-md sm:flex sm:justify-center sm:items-center">
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
      </div>


      {leftMenuVisibility && (
        <div className="bg-green-400 h-screen w-[200px] absolute top-0"></div>
      )}
    </div>
  );
}

export default function CategoryNav() {
    return (
      <ul className="overflow-auto flex gap-4 justify-between w-1/2 cursor-pointer my-4 sm:w-full sticky">
        <li className="categoryNav flex flex-col justify-center items-center">
          Noodles
          <div className="childNav w-8 h-1 bg-pink-400"></div>
        </li>
        <li className="hover:text-pink-400">Shushis</li>
        <li className="hover:text-pink-400">Drinks</li>
        <li className="hover:text-pink-400">Desserts</li>
      </ul>
    );
  }
  

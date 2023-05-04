import usePageStore from "../../store";

export default function CategoryNav() {
  const { page, changePage } = usePageStore()



  return (
    <ul className="overflow-auto flex gap-4 justify-between w-1/2 cursor-pointer my-4 sm:w-full sticky">
      <li className="categoryNav flex flex-col justify-center items-center" onClick={() => changePage("noodle")}>
        Noodles
        <div className="childNav w-8 h-1 bg-pink-400" ></div>
      </li>
      <li className="hover:text-pink-400" onClick={() => changePage("sushi")}>Shushis</li>
      <li className="hover:text-pink-400" onClick={() => changePage("drink")}>Drinks</li>
      <li className="hover:text-pink-400" onClick={() => changePage("dessert")}>Desserts</li>
    </ul>
  );
}


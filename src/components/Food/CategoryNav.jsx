import usePageStore from "../../store";

export default function CategoryNav() {
  const { page, changePage } = usePageStore()



  return (
    <ul className="overflow-auto flex gap-4 justify-between w-1/2 cursor-pointer my-4 sm:w-full sticky md:w-full">
      <li className="categoryNav flex flex-col justify-center items-center" onClick={() => changePage("noodle")}>
        Noodles
        < div className="childNav w-8 h-1 bg-pink-400" ></div >
      </li >
      <li className="categoryNav   flex flex-col justify-center items-center" onClick={() => changePage("sushi")}>Shushis <div className="childNav w-8 h-1 bg-pink-400" ></div></li>
      <li className="categoryNav   flex flex-col justify-center items-center" onClick={() => changePage("drink")}>Drinks <div className="childNav w-8 h-1 bg-pink-400" ></div></li>
      <li className="categoryNav   flex flex-col justify-center items-center" onClick={() => changePage("dessert")}>Desserts <div className="childNav w-8 h-1 bg-pink-400" ></div></li>
    </ul >
  );
}


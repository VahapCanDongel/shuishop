import Card from "../components/Food/Card";

export default function Foods() {
    return (
        <div className="my-20 flex justify-between flex-col items-center w-[80%] ">

            <div className="mr-auto flex justify-between w-full">
                <div className="mr-auto text-[35px] font-bold after:content-[' '] after:w-[100px] after:h-2 after:bg-pink-400 after:flex after:ml-1">
                    Our Special Food Deals %
                </div>

                <div className="flex gap-2">
                    <div className="w-[40px] h-[40px] bg-pink-200 flex justify-center items-center text-[40px] rounded-md rotate-180 cursor-pointer">
                        <svg width={46} height={46} className="fill-gray-800" viewBox="0 0 24 24">
                            <path d="m9.5 17 5-5-5-5v10Z" />
                        </svg>
                    </div>
                    <div className="w-[40px] h-[40px] bg-pink-400 flex justify-center items-center text-[40px] rounded-md cursor-pointer">
                        <svg width={46} height={46} className="fill-gray-800" viewBox="0 0 24 24">
                            <path d="m9.5 17 5-5-5-5v10Z" />
                        </svg>
                    </div>
                </div>

            </div>


            <div className="flex gap-4 justify-between items-center w-full  my-4">
                <Card />
                <Card />
                <Card />
            </div>



        </div>
    )
}
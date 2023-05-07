export default function Card({ name, imgSrc, description, price }) {
    return (
        <div className="bg-gray-100 w-[370px] h-[150px] rounded-md p-4 sm:w-[360px] flex-shrink-0 ">
            <div className="flex justify-evenly items-center gap-4">
                <img className="w-[90px] h-[80px] object-cover" src={imgSrc} />
                <div className="flex flex-col">
                    <div className="font-bold text-[20px]">
                        {name}
                    </div>
                    <div className="text-[12px]">{description}</div>
                </div>


            </div>
            <div className="ml-2">£{price}</div>

            <div className="rounded-full bg-black text-white w-[25px] h-[25px] flex justify-center items-center text-[17px] ml-auto hover:cursor-pointer">
                +
            </div>
        </div>
    )
}
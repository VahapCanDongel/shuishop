export default function Card({imgSrc, name, description, price}) {
    return (
        <div className="bg-gray-200 w-[300px] h-[400px] rounded-md shadow-lg relative flex flex-col items-center flex-shrink-0">
            <div className="w-60 h-60">
                <img className="object-cover" src={imgSrc} />
            </div>

            <div className="mr-auto font-bold ml-8 text-[20px]">{name}</div>

            <p className="ml-8 text-[13px] h-[50px]">{description}</p>
            <div className="mr-auto ml-8 mt-10 text-[18px] font-bold">£{price}</div>
            <div className="bg-green-400 rounded-xl p-4 w-[140px] flex justify-center items-center absolute bottom-[-25px] left-[70px] cursor-pointer hover:rotate-2 transition">Add To Cart</div>
        </div>
    )
}
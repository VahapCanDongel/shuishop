export default function Card() {
    return (
        <div className="bg-gray-200 w-[300px] h-[400px] rounded-md shadow-lg relative flex flex-col items-center">
            <div className="">
                <img className="object-cover" src="https://www.sushido.co.uk/wp-content/uploads/2022/07/sushi-removebg-preview.png" />
            </div>

            <div className="mr-auto font-bold ml-8 text-[20px]">Sushi Pack</div>

            <p className="ml-8 text-[13px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, voluptates!</p>
            <div className="mr-auto ml-8 mt-10 text-[18px] font-bold">£10.99</div>
            <div className="bg-green-400 rounded-xl p-4 w-[140px] flex justify-center items-center absolute bottom-[-25px] left-[70px] cursor-pointer hover:rotate-2 transition">Add To Cart</div>
        </div>
    )
}
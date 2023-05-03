export default function Card(){
    return(
        <div className="bg-gray-100 w-[270px] h-[150px] rounded-md p-4">
            <div className="flex justify-evenly items-center gap-4">
                <img className="w-[90px] h-[80px] object-cover" src="https://eataalborg.dk/File/1661/Bog%C3%B8_-96.png?ticks=637402117710000000"/>
                <div className="flex flex-col">
                    <div className="font-bold text-[20px]">
                        Chillie Salmon
                    </div>
                    <div className="text-[12px]">Served with dips and viniger.</div>
                </div>
                
               
            </div>
           <div className="ml-2">£10.99</div>

           <div className="rounded-full bg-black text-white w-[25px] h-[25px] flex justify-center items-center text-[17px] ml-auto hover:cursor-pointer">
            +
           </div>
        </div>
    )
}
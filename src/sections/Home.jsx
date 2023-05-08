export default function Home() {
    return (
        <div className="flex justify-evenly items-center w-[80%] my-20 gap-6 sm:w-full sm:flex-col md:w-full md:flex-col" id="home">
            <div className="relative">
                <div className="text-[120px] font-bold font-secular w-[900px] z-10 relative sm:text-[80px] sm:w-[400px] sm:ml-5 md:w-[400px] md:text-[80px]">Find our delicious food!</div>
                <div className="text-[30px] animate-bounce w-[700px] z-10 relative bottom-4 sm:w-[300px] sm:text-[20px] sm:ml-5 md:text-[20px] md:w-[240px]">Hey! Our delicious food is waiting for you, we are always near you.</div>
                <div className="w-[800px] h-[500px] bg-green-400 absolute z-0 top-0 left-0 rotate-12 ml-[-40px] sm:w-[400px] sm:ml-[-20px] md:w-[400px] "></div>
            </div>



            <img src="https://www.maisushi.com/wp-content/uploads/2019/11/NigiriRollClassicPlatter_Large_IMG_2140.png" className="w-[600px] h-[600px] rotate-45 sm:w-[300px] sm:h-[300px] md:w-[370px] md:h-[370px]" />




        </div>
    )
}
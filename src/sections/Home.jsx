export default function Home() {
    return (
        <div className="flex justify-evenly items-center w-[80%] my-20 gap-6">
            <div className="relative">
                <div className="text-[120px] font-bold font-secular w-[900px] z-10 relative">Find our delicious food!</div>
                <div className="text-[30px] animate-bounce w-[700px] z-10 relative bottom-4">Hey! Our delicious food is waiting for you, we are always near you.</div>
                <div className="w-[800px] h-[500px] bg-green-400 absolute z-0 top-0 left-0 rotate-12 ml-[-40px]"></div>
            </div>



            <img src="https://www.maisushi.com/wp-content/uploads/2019/11/NigiriRollClassicPlatter_Large_IMG_2140.png" className="w-[600px] h-[600px] rotate-45" />




        </div>
    )
}

import SectionTitle from "../components/Section/SectionTitle";
import Card from "../components/Specials/Card";

export default function Specials() {
    return (
        <div className="my-20 flex justify-between flex-col items-center w-[80%] sm:flex-col">

            <div className="mr-auto flex justify-between w-full">
                <SectionTitle title={'Our Special Food Deals %'}/>
             

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


            <div className="flex gap-4 justify-between items-center w-full  my-4 sm:flex-col sm:gap-14">
                <Card/>
                <Card/>
                <Card/>
            </div>



        </div>
    )
}
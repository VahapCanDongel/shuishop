import Card from "../components/Food/Card";

export default function Foods() {
    return (
        <div className="my-20 flex justify-between flex-col items-center w-[80%] ">

            <div className="mr-auto text-[35px] font-bold after:content-[' '] after:w-[100px] after:h-2 after:bg-pink-400 after:flex">
                Our Special Foods %
            </div>

            <div className="flex gap-4 justify-between items-center w-full  my-4">
                <Card />
                <Card />
                <Card />
            </div>



        </div>
    )
}
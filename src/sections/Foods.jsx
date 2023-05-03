import Card from "../components/Food/Card"
import CategoryNav from "../components/Food/CategoryNav";
import SectionTitle from "../components/Section/SectionTitle";

export default function Foods() {
    return (
        <div className="my-20 flex justify-between flex-col items-center w-[80%] sm:flex-col gap-4 sm:w-full">
           <SectionTitle title={'Foods'}/>
           <CategoryNav/>
            <div className='overflow-auto grid grid-cols-2 gap-8 rounded-md w-1/2 sm:grid-cols-1 sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
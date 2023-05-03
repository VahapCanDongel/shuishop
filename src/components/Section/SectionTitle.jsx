export default function SectionTitle({title}){
    return(
        <div className="mr-auto text-[35px] font-bold after:content-[' '] after:w-[100px] after:h-2 after:bg-pink-400 after:flex">
            {title}
        </div>
    )
}
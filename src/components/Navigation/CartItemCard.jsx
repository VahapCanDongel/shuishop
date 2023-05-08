export default function CartItemCard({ index, name, imgSrc, description, price, deleteItem }) {
    const handleDelete = () => {
        deleteItem(index);
    }


    return (
        <div className="bg-gray-100 w-[450px] h-[180px] rounded-md flex-shrink-0 my-4 p-2">
            <div className="flex">
                <img src={imgSrc} className="w-[100px] h-[100px]" />
                <div className="flex flex-col gap-4">
                    <div className="text-[18px] mt-2">{name}</div>
                    <div className="text-[12px] h-[60px]">{description}</div>
                    <div>£{price}</div>
                </div>
                <div>
                    <svg width={20} height={20} fill="none" stroke="#15181e" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className=" cursor-pointer" onClick={handleDelete}>
                        <path d="M3 6h18M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <path d="M14 11v6" />
                        <path d="M10 11v6" />
                    </svg>
                </div>
            </div>

        </div>
    )
}
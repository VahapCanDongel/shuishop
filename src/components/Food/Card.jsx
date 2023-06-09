export default function Card({ name, imgSrc, description, price }) {
    const loadFromLocalStorage = (key) => {
        try {
            const serializedData = localStorage.getItem(key);
            if (serializedData === null) {
                return undefined;
            }
            return JSON.parse(serializedData);
        } catch (error) {
            console.error('Error loading data from local storage:', error);
            return undefined;
        }
    };

    const saveToLocalStorage = (key, value) => {
        if (typeof window === 'undefined') {
            return;
        }

        try {
            const serializedData = JSON.stringify(value);
            localStorage.setItem(key, serializedData);
        } catch (error) {
            console.error('Error saving data to local storage:', error);
        }
    };


    const handleAddBasket = () => {
        const item = {
            name,
            imgSrc,
            description,
            price,
        };

        const storedItems = loadFromLocalStorage('basketItems') || [];
        const updatedItems = [...storedItems, item];
        saveToLocalStorage('basketItems', updatedItems);
    };

    return (
        <div className="bg-gray-100 w-[370px] h-[160px] rounded-md p-4 sm:w-[360px] flex-shrink-0 " onClick={handleAddBasket}>
            <div className="flex justify-evenly items-center gap-4">
                <img className="w-[90px] h-[80px] object-cover" src={imgSrc} />
                <div className="flex flex-col">
                    <div className="font-bold text-[20px]">
                        {name}
                    </div>
                    <div className="text-[12px]">{description}</div>
                </div>


            </div>
            <div className="ml-2">£{price}</div>

            <div className="rounded-full bg-black text-white w-[25px] h-[25px] flex justify-center items-center text-[17px] ml-auto hover:cursor-pointer">
                +
            </div>
        </div>
    )
}
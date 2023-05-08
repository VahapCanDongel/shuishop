export default function CartItemCard() {
    return (
        <div className="bg-gray-100 w-[450px] h-[150px] rounded-md flex-shrink-0 my-4 p-2">
            <div className="flex">
                <img src="https://cdn.yosushi.com/r/w-1000/YoSushi/files/1e/1e81f918-1a25-4f7e-9b22-a78ddb42a2ff.638183196770000000.png" className="w-[100px] h-[100px]" />
                <div className="flex flex-col gap-4">
                    <div className="text-[18px] mt-2">Dragon Roll</div>
                    <div className="text-[12px]">Crab, avocado, and cucumber wrapped in sushi rice and seaweed, topped with sesame seeds.</div>
                    <div>£10.99</div>
                </div>
                <div>
                    <svg width={24} height={24} fill="none" stroke="#15181e" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M3 6h18M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <path d="M14 11v6" />
                        <path d="M10 11v6" />
                    </svg>
                </div>
            </div>

        </div>
    )
}
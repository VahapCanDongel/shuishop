// Foods.js
import React, { useEffect, useState } from 'react';
import Card from "../components/Food/Card";
import CategoryNav from "../components/Food/CategoryNav";
import SectionTitle from "../components/Section/SectionTitle";
import usePageStore from "../store";



export default function Foods() {
    const noodles = [
        {
            "img": "https://static.vecteezy.com/system/resources/previews/018/128/189/original/schezwan-noodles-or-szechuan-vegetable-png.png",
            "price": 9.99,
            "name": "Pad Thai",
            "description": "A classic Thai dish made with stir-fried rice noodles, chicken or shrimp, eggs, peanuts, and a tangy sauce."
        },
        {
            "img": "https://pngimg.com/uploads/noodle/noodle_PNG15.png",
            "price": 8.99,
            "name": "Beef Chow Fun",
            "description": "A Cantonese dish made with stir-fried wide rice noodles, tender beef, scallions, and soy sauce."
        },

        {
            "img": "https://pngimg.com/d/noodle_PNG53.png",
            "price": 10.99,
            "name": "Ramen",
            "description": "A Japanese dish made with wheat noodles in a savory broth, with toppings like sliced pork, bamboo shoots, and soft-boiled eggs."
        },

        {
            "img": "https://static.vecteezy.com/system/resources/previews/018/128/189/original/schezwan-noodles-or-szechuan-vegetable-png.png",
            "price": 7.99,
            "name": "Lo Mein",
            "description": "A Chinese dish made with stir-fried egg noodles, vegetables, and a savory sauce."
        }

    ]

    const drinks = [
        {
            "img": "https://www.starbucksathome.com/gb/sites/default/files/2021-04/10032021_IcedCaramel_Work_LS-min.png",
            "price": 3.99,
            "name": "Iced Coffee",
            "description": "A refreshing and energizing drink made with cold brewed coffee and milk, served over ice."
        },
        {
            "img": "https://www.starbucks.com.au/_files/product-images/iced-bev/sbx20181127-25128-icedmatchagreentealatte-onwhite-corelib-srgb.png",
            "price": 4.99,
            "name": "Matcha Latte",
            "description": "A creamy and earthy drink made with matcha green tea powder and steamed milk."
        },

        {
            "img": "https://pnghq.com/wp-content/uploads/2023/02/mango-lassi-transparent-png-2318.png",
            "price": 5.99,
            "name": "Mango Lassi",
            "description": "A sweet and tangy drink made with mango puree, yogurt, and a touch of honey."
        },

        {
            "img": "https://assets.taste-institute.com//rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcU1LIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9b267f1d2616fdf5117251c387e079e8f8fc6c99/18182-1590674913215.png",
            "price": 3.99,
            "name": "Thai Iced Tea",
            "description": "A creamy and sweet tea made with black tea, condensed milk, and spices, served over ice."
        },

        {
            "img": "https://www.hendricksgin.com/us/assets/Uploads/59f25ad59f/cutecumber-v2__ScaleMaxWidthWzYwMF0.png",
            "price": 2.99,
            "name": "Lemonade",
            "description": "A classic and refreshing drink made with freshly squeezed lemon juice, sugar, and water."
        },

        {
            "img": "https://d3gg7p8kl1yfy0.cloudfront.net/detail_Strawberry_Banana_Sunrise_Smoothie_2.png",
            "price": 4.99,
            "name": "Strawberry Smoothie",
            "description": "A fruity and creamy drink made with fresh strawberries, yogurt, and a drizzle of honey."
        }
    ]

    const desserts = [
        {
            "img": "https://cdn.shopify.com/s/files/1/0426/7592/9237/products/17_1200x1200.png?v=1597401066",
            "price": 6.99,
            "name": "Chocolate Lava Cake",
            "description": "Warm chocolate cake with a gooey chocolate center, served with vanilla ice cream."
        },

        {
            "img": "https://cdn.shopify.com/s/files/1/1707/3333/products/1019_-_1_Square_NEW.png?v=1561739667",
            "price": 8.99,
            "name": "Tiramisu",
            "description": "Layers of ladyfingers soaked in espresso, with mascarpone cheese and cocoa powder."
        },

        {
            "img": "https://belchicken.com/wp-content/uploads/2022/01/limon-cheesecake.png",
            "price": 5.99,
            "name": "Cheesecake",
            "description": "A creamy and smooth New York-style cheesecake, with a graham cracker crust."
        },

        {
            "img": "https://royalbake.co.uk/wp-content/uploads/2020/06/Fruit-tart-9-%C2%A350_.png",
            "price": 7.99,
            "name": "Fruit Tart",
            "description": "A buttery tart crust filled with a pastry cream and topped with fresh fruits like strawberries, kiwi, and blueberries."
        },

        {
            "img": "https://images.squarespace-cdn.com/content/v1/5d37aad84b9d1f000100f413/0098db90-08c0-49b5-abb9-492cfc152c9a/Mochi+Matcha+%28w_+Matcha+ice+cream%29.png",
            "price": 4.99,
            "name": "Matcha Green Tea Ice Cream",
            "description": "A refreshing and creamy ice cream with the subtle flavor of matcha green tea."
        },

        {
            "img": "https://cdn.shopify.com/s/files/1/0623/8912/5329/products/pannacootabrush-min_1728x.png?v=1662133217",
            "price": 6.99,
            "name": "Panna Cotta",
            "description": "A silky and smooth Italian dessert made with cream, sugar, and gelatin, topped with a fruit compote."
        }
    ]

    const sushis = [

        {
            "img": "https://jow.fr/_next/image?url=https%3A%2F%2Fstatic.jow.fr%2F880x880%2Frecipes%2FphsDckvVj0SEQA.png&w=2560&q=100",
            "price": 8.99,
            "name": "Spicy Tuna Roll",
            "description": "Fresh tuna mixed with spicy mayo, wrapped in sushi rice and seaweed."
        },

        {
            "img": "https://cdn.yosushi.com/r/w-1000/YoSushi/files/1e/1e81f918-1a25-4f7e-9b22-a78ddb42a2ff.638183196770000000.png",
            "price": 10.99,
            "name": "California Roll",
            "description": "Crab, avocado, and cucumber wrapped in sushi rice and seaweed, topped with sesame seeds."
        },

        {
            "img": "https://yosushi.com/getattachment/72b05427-15be-4cf6-be81-829b9abf19f8/salmon-nigiri-(1).png?lang=en-GB&height=1480&width=1480",
            "price": 7.99,
            "name": "Salmon Roll",
            "description": "Fresh salmon wrapped in sushi rice and seaweed."
        },

        {
            "img": "https://yosushi.com/getattachment/f6c332b7-b6c8-4c66-9415-09a7eebb9f79/New-Salmon-Dragon-Roll.png?lang=en-GB",
            "price": 9.99,
            "name": "Vegetable Roll",
            "description": "A mix of cucumber, carrot, avocado, and asparagus wrapped in sushi rice and seaweed."
        }
    ]

    const { page } = usePageStore();




    return (
        <div className="my-20 flex justify-between flex-col items-center w-[80%]  sm:flex-col  md:flex-col gap-4 sm:w-full transition" id="foods">
            <SectionTitle title={'Foods'} />
            <CategoryNav />

            <div className='hide-scrollbar overflow-scroll grid grid-cols-2 gap-20 h-[400px] flex-shrink-0 rounded-md w-3/4 sm:overflow-scroll  sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center md:overflow-scroll md:w-full md:flex md:flex-col md:justify-center md:items-center
'>
                {page === "noodle" && (
                    noodles.map((item, index) => (
                        <Card key={index} name={item.name} price={item.price} description={item.description} imgSrc={item.img} />
                    ))
                )
                }
                {page === "sushi" && (
                    sushis.map((item, index) => (
                        <Card key={index} name={item.name} price={item.price} description={item.description} imgSrc={item.img} />
                    ))
                )}
                {page === "drink" && (
                    drinks.map((item, index) => (
                        <Card key={index} name={item.name} price={item.price} description={item.description} imgSrc={item.img} />
                    ))
                )}
                {page === "dessert" && (
                    desserts.map((item, index) => (
                        <Card key={index} name={item.name} price={item.price} description={item.description} imgSrc={item.img} />
                    ))
                )}


            </div>
        </div>
    );
}

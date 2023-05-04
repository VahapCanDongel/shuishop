// Foods.js
import React from 'react';
import Card from "../components/Food/Card";
import CategoryNav from "../components/Food/CategoryNav";
import SectionTitle from "../components/Section/SectionTitle";
import usePageStore from "../store";
import { CSSTransition, TransitionGroup } from 'react-transition-group';


export default function Foods() {
    const { page } = usePageStore();

    return (
        <div className="my-20 flex justify-between flex-col items-center w-[80%]  sm:flex-col gap-4 sm:w-full" id="foods">
            <SectionTitle title={'Foods'} />
            <CategoryNav />

            <TransitionGroup component={null}>
                {page === "noodle" && (
                    <CSSTransition timeout={500} classNames="slide">
                        <div className='overflow-auto grid grid-cols-2 gap-8 rounded-md w-1/2 sm:grid-cols-1 sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </CSSTransition>
                )}

                {page === "sushi" && (
                    <CSSTransition timeout={500} classNames="slide">
                        <div className='overflow-auto grid grid-cols-2 gap-8 rounded-md w-1/2 sm:grid-cols-1 sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center'>
                            Sushi
                        </div>
                    </CSSTransition>
                )}
                {page === "drink" && (
                    <CSSTransition timeout={500} classNames="slide">
                        <div className='overflow-auto grid grid-cols-2 gap-8 rounded-md w-1/2 sm:grid-cols-1 sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center'>
                            Drink
                        </div>
                    </CSSTransition>
                )}
                {page === "dessert" && (
                    <CSSTransition timeout={500} classNames="slide">
                        <div className='overflow-auto grid grid-cols-2 gap-8 rounded-md w-1/2 sm:grid-cols-1 sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center'>
                            Dessert
                        </div>
                    </CSSTransition>
                )}



            </TransitionGroup>
        </div>
    );
}

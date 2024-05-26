// import React, { useState } from 'react';
import Slider from '../Slick-Slider/Slider';
import Card from '../Card/Card';

function Home() {
    // const [cards, Setcards]=useState();
    return (
        <div >
            <Slider />

            <div className=' grid grid-flow-row grid-cols-4 gap-4 p-4'>

                <Card title='i have a find' button='See ' />


                {/* {
                cards.map(card => <Card key={card.id} card={card}></Card>)
             } */}


            </div>
        </div>
    );
};

export default Home;
// import React, { useState } from 'react'; 
import Gaming from '../Gaming/Gaming';
import Fashion from '../Shop Deals in Fashon/Fashion';

function Home() {
    // const [cards, Setcards]=useState();
    return (
        <div >
            {/* <Slider /> */}

            <div className=' grid grid-flow-row grid-cols-4 gap-4 p-4'>

                <Gaming Title="Look nich" button='See ' />
                <Fashion Title="Shop Deals in Fashion"   button="See All Deals"/>

                {/* {
                cards.map(card => <Card key={card.id} card={card}></Card>)
             } */}


            </div>
        </div>
    );
};

export default Home;
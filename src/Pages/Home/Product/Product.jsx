import React from 'react';
import "../../../index.css"

function Product() {
    return (
        < >
            <div className='container max-w-fit '>
                <div className='border-2 p-4 w-auto rounded-xl'>
                    <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti in odit eligendi saepe consectetur, quisquam, accusamus voluptates amet doloremque praesentium culpa exercitationem velit ratione architecto, tenetur deserunt illum dicta sed animi repellendus? Qui reiciendis quasi quas quos assumenda optio nihil, consequuntur quo dignissimos, nesciunt eum ullam dolorem expedita, eveniet iste!</div>
                    <price>10$</price>
                    <div>****</div>
                    {/* <img className='w-10px h-10px bg-slate-600' src="" alt="" /> */} <div className='demo'></div>
                    <button className='bg-[#f0c14b] border-2 text-[#111] mt-3 '>Add to basket</button>
                </div>
            </div>
        </>
    );
};

export default Product;
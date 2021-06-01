import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';


const GiftExpertApp = () =>{

    const [categories, setCategories] = useState([ 'DragonBall' ]);

    // const handleAdd = () => {
    //    seTcategories([...categories, 'HunterXHunter']);
    // }


    return (
        
        <>
            <div className= 'top'>       
            <h1 className = 'App animate__animated animate__fadeInDown'>GidExpertApp</h1>

            <AddCategory setCategories = {setCategories}/>
            </div> 
            <hr className='Line'/>
            


            <ol>
                {
                    categories.map(category =>
                    <GifGrid 
                        key = {category}
                        category = {category} 
                    />
                    )
                }
            </ol>

        </>

    )
}

export default GiftExpertApp;
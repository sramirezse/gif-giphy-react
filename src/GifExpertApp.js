import React from 'react'
import { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon ball'])
    // const handleAdd =  () => {
    //     setCategories( cats=> ['otra serie',...cats])
    // }
    return (
        <div>
            <h2 className='animate__animated animate__lightSpeedInRight'> GifExpertAppJS </h2>
            <CategoryAdd setCategories={setCategories} />
            <hr></hr>

            {
                categories.map(category => (
                    <GifGrid category={category} key={category} />
                ))
            }

        </div>
    )
}

import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs(category);
    // console.log(loading);
    // console.log(data);
    

    return (
        <div>
            <h3 className='animate__animated animate__lightSpeedInRight'>{category}</h3>
            {loading ? <div className="loader">Loading...</div> : ''}
            <div className="row">
            {
                // console.log('asdasdasd',data),
                images.map(img => (
                    <GifGridItem key={img.id}  {...img} />

                    
                ))
            }
            </div>



        </div>
    )
}

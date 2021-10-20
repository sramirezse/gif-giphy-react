import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);
    const { data, loading } = useFetchGifs(category);
    // console.log(loading);
    console.log(data);
    

    return (
        <div>
            <h3>{category}</h3>
            {/* {loading ? <div className="loader">Loading...</div> : ''} */}
            <div className="row">
            {
                data.map(img => (
                    console.log('asdasdasd',img.title),
                    <GifGridItem key={img.id}  {...img} />

                    
                ))
            }
            </div>



        </div>
    )
}

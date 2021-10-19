import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        getGifs();
    }, []);

    const url = 'https://api.giphy.com/v1/gifs/search?api_key=4lrQF3ryJ0lyRlm8vKohQ3QvmLbmEK3g&limit=10&q=';
    let query = 'dragon';
    const getGifs = async () => {
        const resp = await fetch(url + query);
        const { data } = await resp.json();

        // console.log(data);
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
                giphyUrl: img.url

            }
        });

        // console.log(gifs);
        setImages(gifs);
    }


    // getGifs();
    return (
        <div>
            <h3>{category}</h3>
            <div className="row">
            {
                images.map(img => (
                    // <div class="accordion-item">
                    //     <h2 class="accordion-header" id={'headding'+id}>
                    //         <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse'+id} aria-expanded="true" aria-controls="collapseOne">
                    //             {title}
                    //         </button>
                    //     </h2>
                    //     <div id={'collapse'+id} class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    //         <div class="accordion-body">
                    //             <img src={url} />
                    //         </div>
                    //     </div>
                    // </div>
                    
                    <GifGridItem key={img.id}  {...img} />

                    
                ))
            }
            </div>

            

        </div>
    )
}
 
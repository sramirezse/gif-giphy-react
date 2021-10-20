import { useState, useEffect } from "react"
import { getGifs } from "../helpers/GetGifs";

export const  useFetchGifs = (category) =>{
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(()=>{
        getGifs(category).then(imgs => {
            console.log( ['data', imgs]);
            setTimeout(()=> {
                setState({
                    data: [imgs],
                    loading: false
                }) 
            }, 3000);
        })
    }, [category]);
    return state;
}
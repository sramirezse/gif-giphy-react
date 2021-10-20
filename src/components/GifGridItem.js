import React from 'react'

export const GifGridItem = ({ id, title, url, giphyUrl }) => {
    console.log('hhhhhhh',title, id, url, giphyUrl);
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 animate__animated animate__flip">
            <div className="card card-gif" >
                <img src={url} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href={giphyUrl} className="btn btn-primary">Ver en GYPHY</a>
                    </div>
            </div>
        </div>
    )
}

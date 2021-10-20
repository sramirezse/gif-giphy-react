import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url, giphyUrl }) => {
    return (
        <div id='divprincipal' className="col-lg-3 col-md-6 col-sm-12 animate__animated animate__flip">
            <div className="card card-gif" >
                <img src={url} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href={giphyUrl} className="btn btn-primary">Ver en GYPHY</a>
                    </div>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    giphyUrl: PropTypes.string.isRequired
};

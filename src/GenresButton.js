import React from 'react';
import PropTypes from 'prop-types';

function GenresButton({ dt }) {

    return(
        <div className="card-body">
           { dt.map((item, index) => {
               return(
                <button type="button" className="btn btn-light btn-space" key={index}>
                    {item}
                </button>
                )
               
            })}
        </div>
        )
        
}

GenresButton.propTypes={
    dt:PropTypes.object.isRequired,
}


export default GenresButton;
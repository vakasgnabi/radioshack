import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import GenresButton from './GenresButton';
import {genres} from './genres';
import HeaderGenres from './headgenres';
import './index.css';


function RadioShack({genres}){
    return (
        <div className="container border 1px extra">
            <HeaderGenres />
            
            <GenresButton dt={genres}/>
        </div>
    )
}

RadioShack.propTypes={
    genres:PropTypes.object.isRequired
}


ReactDOM.render(<RadioShack genres={genres}/>,document.querySelector("#root"))
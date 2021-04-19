import React from 'react';
import { Card } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import './Character.css';

const Character = ({character}) => {
    
    //const {image, name, status, species, location, url, gender, episode } = character;
    const {image, name, status, species } = character;

    return (  
        <div className='card character'> 
                <div className={`overlay overlay-${status}`}>
                    <Card.Img src={image} className={ `image-${status}` } />
                </div>
                
                <Card.Title 
                    className={`character-name character-name-${status}`} 
                    data-tip= {`${name.length > 18 ? name : '' }`}
                > {`${name.substring(0, 18).trim()}${name.length > 18 ? '...' : '' }`}
                </Card.Title>
                <ReactTooltip className="tooltip"/>

            <div className={ `state-${status}` }></div>
            
            <Card.Text className={`character-description character-description-${status}`}>
                <span><i className="fas fa-user-circle"></i> {species}</span>
                {/* 
                <p data-tip= {`${location.name.length > 30 ? location.name : '' }`}>
                    <i className="fas fa-thumbtack"></i> 
                    {`${location.name.substring(0, 30).trim()}${location.name.length > 30 ? '...' : '' }`} 
                </p>
                <p><i className="fas fa-transgender-alt"></i> {gender}</p>
                <p><i className="fas fa-tv"></i> {`${episode.length} episodes`}</p>
                */}
            </Card.Text>

        </div>
    );
}
export default Character;
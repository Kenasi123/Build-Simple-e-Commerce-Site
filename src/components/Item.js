import React from 'react'; 
import PropTypes from 'prop-types' 

import './Item.css' 

//  adds two parameters that are accepted item state and when added to cart state 
// existing code
const Item = ({item, children}) => {
    return (
    <div className="Item">
            <div className="Item-left">
                <div className="Item-image"></div> 
                <div className="Item-title"> 
                {item.name}
            </div>
            <div className="Item-description"> 
                {item.description}
            </div>
        </div>
        <div className="Item-right"> 
            <div className="Item-price"> 
            ${item.price}
        </div> 
            {children}
        </div>
    </div> 
    );
}

// new code 
Item.propTypes = {
    item: PropTypes.object.isRequired,
};
    

// prop,item is required object, 
export default Item;
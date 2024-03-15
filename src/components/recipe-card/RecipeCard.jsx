import React from 'react';
import PropTypes from 'prop-types';

RecipeCard.propTypes = {
    recipe: PropTypes.array.isRequired
};

function RecipeCard({recipe}) {
    console.log(recipe);
    return (
        <div>
            
        </div>
    );
}

export default RecipeCard;
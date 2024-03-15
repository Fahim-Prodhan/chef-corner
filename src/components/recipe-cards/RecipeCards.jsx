import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../recipe-card/RecipeCard';

RecipeCards.propTypes = {
    
};

function RecipeCards(props) {

    const [recipes, setRecipes] = useState([])
    
    useEffect(()=>{
        fetch('recipe.json')
        .then(res=> res.json())
        .then(data=> setRecipes(data))
    },[])

    return (
        <div>
           <div className='grid grid-cols-2 gap-8'>
            {
                recipes.map(recipe=> <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)
            }
           </div>
        </div>
    );
}

export default RecipeCards;
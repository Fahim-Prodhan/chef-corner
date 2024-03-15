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
            <h1>Recipe Card</h1>
            {
                recipes.map(recipe=> <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)
            }
        </div>
    );
}

export default RecipeCards;
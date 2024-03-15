import React from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css'
import clockImg from '../../assets/images/Frame.svg'
import fireImg from '../../assets/images/Frame (1).svg'
RecipeCard.propTypes = {
    recipe: PropTypes.array.isRequired

};

function RecipeCard({ recipe }) {
    const {name,description,ingredients,preparing_time,calories,recipe_image} = recipe
    return (
            <div className='col-span-1'>
                <div className="card w-96 bg-base-100 shadow-xl border border-[#28282833]">
                    <figure className='px-6 pt-6'><img className='rounded-2xl' src={recipe_image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-semibold text-[20px] pb-4">{name}</h2>
                        <p className='text-[#150b2b99] font-fira pb-4'>{description}</p>
                        <hr />
                        <h1 className='font-medium text-[#282828] text-[18px] pt-4'>Ingredients: {ingredients.length}</h1>
                        
                        <ul className='pl-4 pb-4'  style={{ listStyleType: 'disc' }}>
                            {
                                ingredients.map((ingredient)=> <li className='text-[#150b2b99] font-fira pb-1 text-[18px]' key={recipe.id}>{ingredient}</li>)
                            }
                        </ul>
                        <hr />

                        <div className='grid grid-cols-2 py-6'>
                            <div className='flex gap-1'>
                                <img src={clockImg} alt="" />
                                <p className='font-fira text-[#282828]'>{preparing_time} minutes</p>
                            </div>
                            <div className='flex gap-1 place-self-end'>
                                <img src={fireImg} alt="" />
                                <p className='font-fira text-[#282828]'>{calories} calories</p>
                            </div>
                        </div>
                        
                        <div className="card-actions justify-start">
                            <button className="px-6 py-3 bg-green-500 rounded-full">Want to Cook</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default RecipeCard;
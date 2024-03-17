import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeTable from '../recipe-table/RecipeTable';
import CurrentCooking from '../recipe-table/CurrentCooking';

RecipeTables.propTypes = {
    recipes: PropTypes.array,
    handleCurrentCooking: PropTypes.func,
    currentRecipes: PropTypes.array,
    totalTime: PropTypes.number,
    totalCalories: PropTypes.number
};



function RecipeTables({ recipes,handleCurrentCooking,currentRecipes,totalTime,totalCalories }) {

    return (
        <div className='card bg-base-100  border border-[#28282833]'>
            <div className='px-20'>
                <h1 className='text-center pt-8 pb-4 text-[#282828] font-semibold text-[24px]'>Want to cook: {recipes.length}</h1>
                <hr />
            </div>

            <div className="overflow-x-auto mt-6  ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipes.map((recipe,index) => <RecipeTable key={index} recipe={recipe} index={index + 1} handleCurrentCooking={handleCurrentCooking}></RecipeTable>)
                        }
                    </tbody>
                </table>
            </div>

            <div className='px-20 mt-8'>
                <h1 className='text-center pb-4 text-[#282828] font-semibold text-[24px]'>Currently cooking: {currentRecipes.length}</h1>
                <hr />
            </div>

            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            currentRecipes.map((currentRecipe,index) => <CurrentCooking key={index} currentRecipe={currentRecipe} index={index + 1}></CurrentCooking>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='grid justify-end grid-cols-2 pl-6 lg:pl-[210px] my-4'>
                <h1 className='font-medium text-[#282828]'>Total Time = <br />{totalTime} minutes</h1>
                <h1 className='font-medium text-[#282828]'>Total Calories = <br />{totalCalories} calories</h1>
               
            </div>
        </div>
    );
}

export default RecipeTables;
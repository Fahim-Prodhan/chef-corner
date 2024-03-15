import React from 'react';
import PropTypes from 'prop-types';
import RecipeTable from '../recipe-table/RecipeTable';

RecipeTables.propTypes = {
    recipes: PropTypes.array
};

function RecipeTables({ recipes }) {
    return (
        <div className='card bg-base-100  border border-[#28282833]'>
            <div className='px-20'>
                <h1 className='text-center pt-8 pb-4 text-[#282828] font-semibold text-[24px]'>Want to cook: {recipes.length}</h1>
                <hr />
            </div>

            <div className="overflow-x-auto">
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
                            recipes.map((recipe,index) => <RecipeTable key={recipe.id} recipe={recipe} index={index + 1}></RecipeTable>)
                        }
                    </tbody>
                </table>
            </div>

            <div className='px-20 mt-8'>
                <h1 className='text-center pb-4 text-[#282828] font-semibold text-[24px]'>Currently cooking: 02</h1>
                <hr />
            </div>

            <div className="overflow-x-auto">
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
                </table>
            </div>
        </div>
    );
}

export default RecipeTables;
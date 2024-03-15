import React from 'react';
import PropTypes from 'prop-types';

RecipeTable.propTypes = {
    recipe: PropTypes.array,
    index: PropTypes.number,
    handleCurrentCooking: PropTypes.func,
    
};

function RecipeTable({ recipe,index,handleCurrentCooking }) {
    const {name,preparing_time,calories} = recipe
    return (
        <>
            <tr className="bg-base-200">
                <th>{index}</th>
                <td className='text-[#282828cc]'>{name}</td>
                <td className='text-[#282828cc]'>{preparing_time} minutes</td>
                <td className='text-[#282828cc]'>{calories} calories</td>
                <td><button onClick={()=>handleCurrentCooking(recipe)} className='btn bg-green-500'>Preparing</button></td>
            </tr>
        </>
    );
}

export default RecipeTable;
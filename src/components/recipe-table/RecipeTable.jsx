import React from 'react';
import PropTypes from 'prop-types';

RecipeTable.propTypes = {
    recipe: PropTypes.array,
    index: PropTypes.number
};

function RecipeTable({ recipe,index }) {
    const {name,preparing_time,calories} = recipe
    return (
        <>
            <tr className="bg-base-200">
                <th>{index}</th>
                <td>{name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td><button className='btn bg-green-500'>Preparing</button></td>
            </tr>
        </>
    );
}

export default RecipeTable;
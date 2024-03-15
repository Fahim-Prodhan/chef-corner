import React from 'react';
import PropTypes from 'prop-types';

CurrentCooking.propTypes = {
    currentRecipe: PropTypes.array,
    index: PropTypes.number
};

function CurrentCooking({currentRecipe,index}) {
    return (
        <>
            <tr className="bg-base-200">
                <th>{index}</th>
                <td>{currentRecipe.name}</td>
                <td>{currentRecipe.preparing_time} minutes</td>
                <td>{currentRecipe.calories} calories</td>

            </tr>
        </>
    );
}

export default CurrentCooking;
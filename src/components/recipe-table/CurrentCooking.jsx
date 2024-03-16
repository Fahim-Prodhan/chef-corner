import React from 'react';
import PropTypes from 'prop-types';

CurrentCooking.propTypes = {
    currentRecipe: PropTypes.array,
    index: PropTypes.number
};

function CurrentCooking({currentRecipe,index}) {
    return (
        <>
            <tr className={(index%2==0)?"bg-white":"bg-base-200"}>
                <th>{index}</th>
                <td className='text-[#282828cc]'>{currentRecipe.name}</td>
                <td className='text-[#282828cc]'>{currentRecipe.preparing_time} minutes</td>
                <td className='text-[#282828cc]'>{currentRecipe.calories} calories</td>

            </tr>
        </>
    );
}

export default CurrentCooking;
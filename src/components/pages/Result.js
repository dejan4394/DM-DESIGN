import React from 'react'

const Result = ({ labelText, valueName }) => {
    return (
        <div className='res-label'>
        <label>{labelText}</label>
        <input name="left-side" value = {valueName}/>
    </div>
    )
}

export default Result

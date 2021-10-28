import React from 'react'

const Result = ({ labelText, valueName }) => {
    return (
        <div className='results-label'>
            <label htmlFor="nameOfpart">{labelText}</label>
            <input type="text" id="nameOfpart" name="left-side" value = {valueName}/>
        </div>
    )
}

export default Result

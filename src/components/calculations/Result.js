import React from 'react'

const Result = ({ labelText, valueName, callFunction }) => {
    return (
        <div className='results-label'>
            <label htmlFor="nameOfpart">{labelText}</label>
            <input type="text" id="nameOfpart" name={labelText} value = {valueName} onChange={callFunction}/>
        </div>
    )
}

export default Result

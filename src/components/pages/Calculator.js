import React, { useState } from 'react'
import "./Calculator.css"
import Result from './Result'

const Calculator = () => {
    // const [ a, setA ] = useState('')
    // const [ b, setB ] = useState('')
    // const [ c, setC ] = useState('')
    const [ dimensions, setDimensions ] = useState({
        width: Number,
        height: Number,
        depth: Number
    })
    const [ top, setTop ] = useState('')
    const [ left, setLeft ] = useState('')
    const [ right, setRight ] = useState('')

    // var leftAndRight = c + 'x' + b;
    // var top = (a - 3.2) + 'x' + c;
    

//----------INPUT DIMENSIONS-----------

    const inputDimensions = (e)=>{
        e.preventDefault();

        const { value, name  } = e.target;

        setDimensions((prevValue)=>({
            ...prevValue,
            [name]: value
        }))
    }
//----------CALCULATE---------------
    const calculate = (e)=> {
        e.preventDefault()
        setTop('|  '+(dimensions.width - 3.2) + '  x  ' + dimensions.depth)
        setLeft(dimensions.height + '  x  ' + dimensions.depth + '  ||')
        setRight(dimensions.height + '  x  ' + dimensions.depth + '  ||')
    }

    return (
        <div className="container">
            <div className="cab-img">
                <img src="https://i.shgcdn.com/13d9f7ce-fa80-4f6e-b521-61e862bb98cb/-/format/auto/-/preview/3000x3000/-/quality/lighter/"/>
            </div>
            <form>
                <input 
                    name = "width"
                    type = "number" 
                    value = {dimensions.width} 
                    placeholder = 'Add width'
                    onChange = { inputDimensions }/>
                <input 
                    name = "height"
                    type = "number"
                    value = {dimensions.height} 
                    placeholder = 'Add height' 
                    onChange = { inputDimensions }/>
                <input 
                    name = "depth"
                    type = "number" 
                    value = {dimensions.depth} 
                    placeholder = 'Add depth' 
                    onChange = { inputDimensions }/>
                
                <button onClick={ calculate }>Calculate</button>
                
            </form>
            <div className='results'>
                <Result labelText = "Top" valueName = {top}/>
                <Result labelText = "Botom" valueName = {top}/>
                <Result labelText = "Left" valueName = {left}/>
                <Result labelText = "Right" valueName = {right}/>
            </div>
                
        </div>
    )
}

export default Calculator

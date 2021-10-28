import React, { useState, useRef } from 'react'
import "./Calculator.css"
import Cabinets from '../Cabinets';
import CalcKitchenTop from '../calculations/CalcKitchenTop';
import CalcKitchenBottom from '../calculations/CalcKitchenBottom';
import Closet from '../calculations/Closet';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import {Button} from "../Button";

const Calculator = () => {

    const childRef = useRef();
    
    const [ dimensions, setDimensions ] = useState({
        width: Number,
        height: Number,
        depth: Number
    })

    const [ selectedThikness, setSelectedThikness ] = useState("1.6")

//----------INPUT DIMENSIONS-----------

    const inputDimensions = (e)=>{
        e.preventDefault();

        const { value, name  } = e.target;

        setDimensions((prevValue)=>({
            ...prevValue,
            [name]: value
        }))
    }


//---------SELECT SPECIFIC SLIDE-------------

const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex)=>{
    setIndex( selectedIndex )
    console.log(index);
}

//-----CALCULATE------
const calculate1 = (e)=> {
    (isNaN(dimensions.width) || isNaN(dimensions.height) || isNaN(dimensions.depth))
    ? alert("VNESETE GI POTREBNITE DIMENZII !!!") 
    : childRef.current.calculate();
    
}

//----SELECT THIKNESS----------------

const selectThikness = (e)=>{

    setSelectedThikness(e.target.value)
}


    return (
        <div className="container-calculator">
            <div className="cab-img">
                <Cabinets handleSelect = { handleSelect } />
            </div>
            <div className="inputs">
            <div className = "thikness">
                <select onChange = { selectThikness } >
                    <option >-- Material thickness --</option>
                    <option value="1.6">1.6</option>
                    <option value="1.8">1.8</option>
                    <option value="3.2">3.2</option>
                </select>
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
            </form>
            
            <Button linkTo='/calculator' children = {"CALCULATE"} onClick = { calculate1 }/>
            </div>

            <div className = "results">
                {(() => {
                
                switch (index) {
                    case 0:
                        return(
                        <CalcKitchenTop thikness = { selectedThikness } ref = { childRef } dimensions = { dimensions }/>
                        )
                    case 1:
                        return (
                        <div>
                        <CalcKitchenBottom thikness = { selectedThikness } ref = { childRef } dimensions = { dimensions } />
                        </div>
                        )
                        case 2:
                        return(
                        <Closet thikness = { selectedThikness } ref = { childRef } dimensions = { dimensions }/>
                        )
                        case 3:
                        return(
                        <div>
                        ddfjhgldjkshlkjhslg                          
                        </div>
                        )
                        case 4:
                        return(
                        <div>
                        dsjkfhetlwhnbswlgjknwlsfdjkn                      
                        </div>
                        )
                    default:
                        return (
                        <div>You are a User.</div>
                        )
                }

                })()}
            </div>
            
                
            
                
        </div>
    )
}

export default Calculator

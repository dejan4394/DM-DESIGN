import React, {useState, forwardRef, useImperativeHandle} from 'react'
import Result from './Result'


const CalcKitchenTop = forwardRef(({dimensions, thikness}, ref) => {

//----------CALCULATE---------------
const [ top, setTop ] = useState('')
const [ left, setLeft ] = useState('')
const [ right, setRight ] = useState('')
const [ back, setBack ] = useState('')
const [ door, setDoor ] = useState('')
const [ shelves, setShelves ] = useState('')

useImperativeHandle(
    ref,
    () => ({
        calculate () {
    
            setTop('|  ' + (dimensions.width - (thikness * 2)) + '  x  ' + dimensions.depth)
            setLeft(dimensions.height + '  x  ' + dimensions.depth + '  ||')
            setRight(dimensions.height + '  x  ' + dimensions.depth + '  ||')
            setBack((dimensions.height - 0.5) + '  x  ' + (dimensions.width - 0.5))
            setDoor('||   ' + (dimensions.height - 0.4) + ' x ' + (dimensions.width/2 - 0.4) + '   ||')
            setShelves('|  ' + (dimensions.width - (2 * thikness + 0.3)) + '  x  ' + (dimensions.depth - 5))
        }
    }),
)


    return (
        <div className="results">
        <div>
            <h3>CUTTING LIST</h3>
        </div>
        <Result labelText = "Top" valueName = {top}/>
        <Result labelText = "Botom" valueName = {top}/> 
        <Result labelText = "Left" valueName = {left}/>
        <Result labelText = "Right" valueName = {right}/>
        <Result labelText = "Back" valueName = {back}/>
        <Result labelText = "Shelves" valueName = {shelves}/>
        <Result labelText = "Door : 2 x" valueName = {door}/>                      
        </div>
    )
})

export default CalcKitchenTop

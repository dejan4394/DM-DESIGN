import React, {useState, forwardRef, useImperativeHandle} from 'react'
import Result from './Result'


const CalcKitchenBottom = forwardRef(({dimensions, thikness}, ref) => {


const [ top, setTop ] = useState('')
const [ bottom, setBottom ] = useState('')
const [ left, setLeft ] = useState('')
const [ right, setRight ] = useState('')
const [ door, setDoor ] = useState('')
const [ shelves, setShelves ] = useState('')


//----------CALCULATE---------------
useImperativeHandle(
    ref,
    () => ({
        calculate () {
            setTop('|   '+(dimensions.width - 2 * thikness) + '  x  7' )
            setBottom('||   ' + dimensions.width + ' x ' + dimensions.depth + '   ||')
            setLeft(dimensions.height + '  x  ' + dimensions.depth + '   ||')
            setRight(dimensions.height + '  x  ' + dimensions.depth + '   ||')
            setShelves('|  ' + (dimensions.width - (2 * thikness + 0.3)) + '  x  ' + (dimensions.depth - 5))
            setDoor('||   ' + (dimensions.height - 0.5) + ' x ' + (dimensions.width/2 - 0.4) + '   ||')
        }
    }),
)




    return (
        <div>
        <div>
            <h3>CUTTING LIST</h3>
        </div>
        <Result labelText = "Top : 2x" valueName = {top}/>
        <Result labelText = "Botom" valueName = {bottom}/> 
        <Result labelText = "Left" valueName = {left}/>
        <Result labelText = "Right" valueName = {right}/>
        <Result labelText = "Shelves" valueName = {shelves}/>
        <Result labelText = "Door : 2 x" valueName = {door}/>                      
        </div>
    )
})

export default CalcKitchenBottom

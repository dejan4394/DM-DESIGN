import React, {forwardRef, useState, useImperativeHandle} from 'react'
import Result from './Result'



const Closet = forwardRef(({dimensions, thikness}, ref) => {

    const [ top, setTop ] = useState('')
    const [ left, setLeft ] = useState('')
    const [ right, setRight ] = useState('')
    const [ division, setDivision ] = useState('')
    const [ back, setBack ] = useState('')
    const [ door, setDoor ] = useState('')
    const [ shelves, setShelves ] = useState('')
    

//----------CALCULATE---------------
    useImperativeHandle(
        ref,
        () => ({
           calculate () {               
                setTop('|  ' + (dimensions.width - (2 * thikness)) + '  x  ' + dimensions.depth)
                setLeft('| ' + dimensions.height + '  x  ' + dimensions.depth + '  ||')
                setRight('| ' + dimensions.height + '  x  ' + dimensions.depth + '  ||')
                setDivision('|  ' +  (dimensions.height - (2 * thikness + 8)) + '  x  ' + (dimensions.depth - 8) )
                setBack((dimensions.height - 0.5) + '  x  ' + (dimensions.width - 0.5))
                setDoor(Math.round((dimensions.height - (8 + 3.5 + (2 * thikness)))*10)/10 + ' x ' + (dimensions.width/2 - (3 + thikness)) + '   ||')
                setShelves('|  ' + Math.round(((dimensions.width - (5 * thikness))/4)*10)/10 + '  x  ' + (dimensions.depth - 8))
            }
        }),
    )


    return (
        <div>
        <div>
            <h3>CUTTING LIST</h3>
        </div>
        <Result labelText = "1.   Top" valueName = {top}/>
        <Result labelText = "2.   Botom" valueName = {top}/> 
        <Result labelText = "3.   Left" valueName = {left}/>
        <Result labelText = "4.   Right" valueName = {right}/>
        <Result labelText = "5.   Middle Division" valueName = {division}/>
        <Result labelText = "6.   Back" valueName = {back}/>
        <Result labelText = "7.   Shelves" valueName = {shelves}/>
        <Result labelText = "11.   Door : 2 x" valueName = {door}/>                      
        </div>
    )
})

export default Closet

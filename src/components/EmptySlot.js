import { useEffect } from "react";
import moleHill from '../molehill.png'

function EmptySlot(props){
    useEffect(() => {
        let randomSecs = Math.ceil(Math.random()*5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randomSecs)
        return () => clearTimeout(timer)
    })

    return (
        <div>
        {/* image is not appearing properly */}
            <img style={{'width': '30vw'}} 
            scr={moleHill} alt='molehill'/>
        </div>
    )
}


export default EmptySlot
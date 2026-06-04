import React , {useState} from "react";

import One from "./One";

function Two (){

    let a = 100;
    let [b,c] = useState(1000)
    console.log(b)
    console.log(c)
    consolelog(useState())

    function increase () {

        a++;
        console.log(a)
    }

    let inc = ()=>{

        c(b+1)
    }

    return (

        <div>
            <Parent value = {b}/>
            <button onClick={()=>{increase(a)}}>Increase</button>
            <button onClick={inc}>Click</button>
        </div>
    )
}
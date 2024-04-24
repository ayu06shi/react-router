import React from 'react';
import {useNavigate} from 'react-router-dom';

const Labs = () =>{

    const nav = useNavigate();

    function clickHandler (){
        nav('/support')
    }
    function backHandler (){
        nav(-1)
    }
    return (
        <div>
            Labs Page
            <button onClick={clickHandler}>Move to Support Page</button>
            <button onClick={backHandler}>Go Back</button>
        </div>
    )
}

export default Labs;
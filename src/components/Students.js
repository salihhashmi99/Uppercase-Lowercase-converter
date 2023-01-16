import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';

export default function Students(){
    const [data, setData] = useState(0);
    const url="https://62789ab36ac99a9106597668.mockapi.io/students";

    useEffect(() =>{
        axios.get(url)
        .then((response) =>{
            console.log(response.data);
            setData(response.data);
        })
        .catch(err=>console.log(err));
    },[url])

    return(
        <div>
            <img src={Students.avatar}/>

            {
                
            }
        </div>
    )
}

import React from 'react'
import PropTypes from 'prop-types'

export default function Exam(props) {
    Exam.propType={
        name:PropTypes.string.isRequired,
        OrgName:PropTypes.string
    }
    Exam.defaultProp ={
        name:"Adil Hussain Mughal",
        OrgName:"OmniSoftex"
    }
    return(
        <>
        
        <h1>My name is {props.name} </h1>
        <h1>He is the owner of {props.OrgName}</h1>
        </>
    )
}
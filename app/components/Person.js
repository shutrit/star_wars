import React from 'react'
import {Link} from 'react-router'

export let Person = (props)=> {
	
	return (<div><Link  to={ 'profile/' + props.id}><h3>{props.name}</h3></Link></div>)
}
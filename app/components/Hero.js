
import React from 'react';
import ReactDOM from 'react-dom'
import {render } from 'react-dom'
import {Person} from './Person' 

const decore = {
  color:'#191970',
};

export let Hero = (props) => {

return ( <div  className="kind">
		
	<Person id={props.id} name={props.name} />
	<div className="zon">
	<p>Birthday:<font style={decore}>{props.dob}</font></p>
	<p>Gender:<font style={decore}>{props.gender}</font></p>
	<p>Height:<font style={decore}>{props.height}</font></p>
	<p>Mass:<font style={decore}>{props.mass}</font></p>
	</div>
	</div>
	)
}
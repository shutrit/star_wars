import React from 'react';
import ReactDOM from 'react-dom'
import { StarTab, StarRow} from './StarTab'
import {getPeople} from '../js/index.js'

import { Router, Route, hashHistory, Link , IndexRoute} from 'react-router'

window.React = React

export let Table_view = React.createClass ({
	
	getInitialState:function() {
		return {
			heroes: []
		}
	},	
   	componentDidMount:function() {
	
	getPeople().then((stars)=>{
		
		this.setState({
				heroes:stars.data.results
			})
		})
	},

	render :function() {
		
		return   (<div><StarTab stars={this.state.heroes}/></div>)

	}
})

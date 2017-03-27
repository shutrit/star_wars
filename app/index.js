
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, Link , IndexRoute} from 'react-router'
import { StarTab, StarRow} from './components/StarTab'
import { Hero } from './components/Hero'
import {Person} from './components/Person'
import {getPeople} from './js/index.js'
import {UserProfile} from './components/UserProfile'
import {Main} from './template/Main'
import {Table_view} from './components/Table_view'

window.React = React

let Stars = React.createClass ({
	
	getInitialState:function() {
		return {
			heroes: [],
			erros:[]
		
		}
	},	
   	componentDidMount:function() {
	
	getPeople().then((stars)=>{
		console.log(stars.data.results)
		this.setState({
				heroes:stars.data.results
			})
		})
	},
 
	render:function() {
	 
		return   (<div>
		
			<div className="parent">
		{this.state.heroes.map((hero)=>{

			return <Hero key={hero.name}   id={hero.url.split("/")[5]} name={hero.name} height={hero.height + ' cm'} 
			mass={hero.mass + ' kg'}dob={hero.birth_year} gender={hero.gender}/>
		})}
		</div></div>)

	}
})


ReactDOM.render(<Router history={hashHistory}>

<Route path="/" component={Main}>
<IndexRoute  component={Stars}/>
<Route path="/table" component={Table_view}/>
<Route path="/profile/:id" component={UserProfile}/>
</Route>
</Router>, document.getElementById('fun'));


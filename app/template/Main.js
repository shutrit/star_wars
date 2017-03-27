import React from 'react'
import { Router, Route, hashHistory, Link , IndexRoute} from 'react-router'


export const Main = function(props) {
	
  return (
		<div><header>
		<h2>STARWARS HEROES PERSONAL DETAILS</h2>
		<Nav/>
		</header>
		<main>{props.children}</main>
	</div>)

}

const Nav = function() {
 	return (<div className="nav"><Link  to={ '/table'}><h3>TABLE</h3></Link><Link  to="/"><h3>HOME</h3></Link></div>)
 }



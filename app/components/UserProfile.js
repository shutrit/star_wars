import React from 'react'
import ReactDOM from 'react-dom'
import {Component} from 'react'
import {render } from 'react-dom'
import {getPerson} from '../js/index.js'

const style = {
	background:'transparent',
	margin: '50px auto',
	position:'relative',
	width:'400px',
	height:'420px',
	color:'#fff'

}

export let UserProfile = React.createClass({
	getInitialState:function() {
		return {
			name:null,
			eyeColor:null,
			height:null
		}
	},
	componentDidMount:function() {
		getPerson(this.props.params.id).then((data)=> {

			this.setState({
				name:data.data.name,
				eyeColor:data.data.eye_color,
				height:data.data.height
			})
		})

	},
	render:function(){
		
		const  name = this.state.name

		let createIM = (name) => {
	
			for(var i =0; i < stars.length ; i ++) {
				
				if(stars[i].name === name ) {
				

				const 	myUrl = stars[i].img
				var photo = document.createElement("IMG");
				photo.setAttribute("src", myUrl);
		    	photo.setAttribute("width", "442");
		 		photo.setAttribute("alt", name);
		    	document.getElementById('tmuna').appendChild(photo)
				}
			}

		};

		return (

			<div className="parent">
			<h3>{this.state.name}</h3>
			{this.state.eyeColor}
			{this.state.height}
			<div id="tmuna" style={style}><h1>{this.state.name}</h1></div>
			{createIM(name)}
			</div>)
	}
})

var stars = [
{name: "R2-D2", img: "https://images-na.ssl-images-amazon.com/images/I/41IXITCtVwL._AC_UL320_SR214,320_.jpg"},
{name:"C-3PO", img: "https://lumiere-a.akamaihd.net/v1/images/C-3PO-See-Threepio_68fe125c.jpeg?region=0%2C45%2C1408%2C704"},{
name:"Luke Skywalker", img:"https://i2.wp.com/img.drawingmanuals.com/2016/01/luke-skywalker-star-wars.jpg"},
{name:"Darth Vader", img:"http://i4.mirror.co.uk/incoming/article7018122.ece/ALTERNATES/s615b/Original-Trilogy-Darth-Vader-05.jpg"},
{name:"Leia Organa", img:"https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F981f4b8c-89da-4358-a564-f802044644ec.jpg"},
{name:"R5-D4", img:"https://s-media-cache-ak0.pinimg.com/originals/b0/d8/16/b0d8162d46e7d30768f0ad0b8642eb09.jpg"},
{name:"Biggs Darklighter", img:"https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=768"},
{name:"Owen Lars", img:"http://vignette2.wikia.nocookie.net/starwars/images/3/36/ClieggLarsHS-SWE.jpg/revision/latest?cb=20120421063121"},
{name:"Beru Whitesun lars", img:"https://clonecorridor.files.wordpress.com/2015/09/beru-lars-6.jpg"},
{name:"Obi-Wan Kenobi", img:"https://s-media-cache-ak0.pinimg.com/originals/31/6e/32/316e327d1fe324e373bf1dc6e8b2d152.jpg"}
]
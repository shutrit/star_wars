import axios  from 'axios'

export let getPeople = function() {

 return axios.get('http://swapi.co/api/people')
}

export let getPerson = function(id) {
	return axios.get('http://swapi.co/api/people' + '/' + id )
}
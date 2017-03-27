import React from 'react';
import ReactDOM from 'react-dom'



export const  StarTab = (props) => {

	return (<div className="parent"><table className="stars"><thead>
		<tr><th>Name</th><th>Date of birth</th><th>Gender</th><th>Height</th></tr></thead>
		<tbody id="3">
		{props.stars.map((hero)=>{
		return <StarRow key={hero.name} name={hero.name} dob={hero.birth_year} gender={hero.gender}  height={hero.height}/>})}
		</tbody></table></div>)
}

export const StarRow = (props) => {

return (

<tr key={props.name}>
<td>{props.name}</td>
<td>{props.dob}</td>
<td>{props.gender}</td>
<td>{props.height}</td>
</tr>
)
}
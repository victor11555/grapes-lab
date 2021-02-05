import React from 'react';
import style from './Vote.module.css';

function Vote(props) {
	function changeHandler(e){
		e.preventDefault();
		console.log(e.target);
	}
	return (
		<form onChange={(e)=>changeHandler(e)}>
		<div className={ style.rating }>
			<input type="radio" name="rating" value="5" id="5"/>
			<label htmlFor="5">☆</label>
			<input type="radio" name="rating" value="4" id="4"/>
			<label htmlFor="4">☆</label>
			<input type="radio" name="rating" value="3" id="3"/>
			<label htmlFor="3">☆</label>
			<input type="radio" name="rating" value="2" id="2"/>
			<label htmlFor="2">☆</label>
			<input type="radio" name="rating" value="1" id="1"/>
			<label htmlFor="1">☆</label>
		</div>
		</form>
	);
}

export default Vote;

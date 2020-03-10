import React, { Component } from 'react';
import './Note.css'

class Note extends Component {
	render() {
		return (
			<div id="note-box">
				{this.props.store.notes.map(item => {
					return (
						<ul id={item.id} className="note">
							<li>{item.name}</li>
							<li>{item.content}</li>
							{/*	fix modified date its ugly */}
							<li>{item.modified}</li>
							<button type="submit" className="delete-button">Delete Note</button>
						</ul>
					)
				})}
			</div>
		)
	}
}

export default Note;

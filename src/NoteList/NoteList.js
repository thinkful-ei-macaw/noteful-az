import React, { Component } from 'react';
import './NoteList.css'

class NoteList extends Component {
	render() {
		console.log(this.props);
		return (
			<p>Note List for folder {this.props.match.params.id}</p>
		)
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

export default NoteList;

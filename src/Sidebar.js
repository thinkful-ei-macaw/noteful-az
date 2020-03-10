import React, { Component } from 'react'

class Sidebar extends Component {
    
    render() {
        return (
        <div class="folder-block">
            <ul>
            {this.props.store.folders.map( item => {
                return <li id={item.id}>{item.name}</li>})}
            </ul>
            <button type="submit" id="add-folder-button">Add note</button>
        </div>
        )
    }
}

export default Sidebar
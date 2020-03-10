import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    render() {
        return (
            <div class="folder-block">
                <ul>
                    {this.props.store.folders.map(item => {
                        return <Link to={`/folder/${item.id}`}><li id={item.id}>{item.name}</li></Link>
                    })}
                </ul>
                <button type="submit" id="add-folder-button">Add note</button>
            </div>
        )
    }
}

export default Sidebar
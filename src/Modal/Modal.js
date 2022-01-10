import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
    state = {
        isOpened: false,
    };

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpened: true})}>Open modal</button>

                {this.state.isOpened && <div className="modal">
                    <div className="modal-body">
                        <h1>Modal title</h1>
                        <p>I am awesome modal</p>
                        <button onClick={() => this.setState({isOpened: false})}>Close modal</button>
                    </div>
                </div>}
            </React.Fragment>
        );
    }
};
import React from 'react';
import {MDBJumbotron, MDBBtn, NavLink} from 'mdbreact';

export default class Event extends React.Component {
    render() {
        const img = (this.props.image === null) ? (
            <img className='rounded float-left img-thumbnail'
                 src={`https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(123).jpg`}
            />
        ) : (
            <img className='rounded float-left img-thumbnail img-fluid'
                 src={`https://s3.ap-south-1.amazonaws.com/actent-res/${this.props.image}`}
            />);
        return (
            <MDBJumbotron>
                <div className='row'>
                    <div className='col-md-3'>
                        {img}
                    </div>
                    <div className='col-md-9'>
                        <h2 className='h2 display-5'>{this.props.title}</h2>
                        <p className='lead'>{this.props.description}</p>
                        <div className='row'>
                            <div className='col-md-8'>
                                <NavLink to={`/show/${this.props.eventId}`}>
                                    <MDBBtn>Go to Event</MDBBtn>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </MDBJumbotron>
        );
    };
}


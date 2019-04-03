import React from 'react';
import axios from 'axios';
import ProfileView from './ProfileView';
import ProfileEdit from './ProfileEdit';
import {getCurrentUser} from '../../util/apiUtils'

export const apiUrl = 'http://localhost:8080/api/v1';

// export const getUserId = () => {
//     getCurrentUser()
//         .then(response => {
//             console.log(response.data['id']);
//             return response.data['id']
//         });
// };

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: undefined,
            isEdit: false,
            isReviewing: false,
            isMyProfile: true, // isMyProfile: +this.props.match.params.userId === getCurrentUser().getId(),
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            login: '',
            address: '',
            birthday: '',
            bio: '',
            interests: '',
            avatar: ''

        };
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     //TODO: check if my profile
    //     this.getProfile();
    // }

    async componentDidMount() {

        try {
            const data = (await getCurrentUser()).data;

            this.setState({
                ...this.state,
                userId: data.id
            });

            this.getProfile();
        } catch (e) {
            console.error(e);
        }
        // getCurrentUser().then( response => {
        //     this.setState({
        //         ...this.state,
        //        userId: response.data['id']
        //    });
        // }).then( () => {
        //     console.log(this.state.userId);
        //     this.getProfile();
        // });
    }

    getProfile = () => {

        const profileUrl = apiUrl + "/users/" + this.state.userId;

        axios.get(profileUrl).then(response => {

            this.setState({
                userId: response.data['id'],
                firstName: response.data['firstName'],
                lastName: response.data['lastName'],
                login: response.data['login'],
                address: response.data['location'],
                birthday: response.data['birthDate'],
                bio: response.data['bio'],
                interests: response.data['interests'],
                avatar: response.data['avatar'],
                email: response.data['email'],
                phone: response.data['phone']

            });
        }).catch(function (error) {
            console.log(error);
        });
    };

    handleEditClick = () => {
        this.setState({
            isEdit: true
        });
    };

    handleAddReview = () => {
        this.setState({
            isReviewing: true
        })
    };

    handleClose = () => {
        this.setState({
            isEdit: false
        });
    };

    render() {

        const profileData = {
            userId: this.state.userId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            login: this.state.login,
            address: this.state.address,
            birthday: this.state.birthday,
            bio: this.state.bio,
            interests: this.state.interests,
            avatar: this.state.avatar
        };

        const view = this.state.isEdit ?
            (<ProfileEdit
                profileData={profileData}
                onCloseClick={this.handleClose}
            />) :
            (<ProfileView
                profileData={profileData}
                isMyProfile={this.state.isMyProfile}
                onEditClick={this.handleEditClick}
                onAddReviewClick={this.handleAddReview}
            />);

        return (
            <div>
                {view}
            </div>
        )
    };
}

//This is practice file that I did for profile page


import React, {Component, PropTypes} from 'react';
import Tooltip from 'react-tooltip';
import {getUserData} from '../../../utils/github-api'
import ProfileStat from './ProfileStat'

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {user: {}, orgs: []}
  }

  getUser() {
    const {username} = this.props
    getUserData(username)
      .then(({user, orgs}) => {
        this.setState({user, orgs});
      });
  }

  componentWillMount() {
    this.getUser();
  }

  render() {
    const {user, orgs} = this.state;
    return (
      <div>
        <section className="user border-bottom">
          <h2>{user.name}</h2>
          <h5>{user.login}</h5>
        </section>
        <section className="stats border-bottom">
          <ProfileStat value={user.followers} label="followers" />
          <ProfileStat value={user.public_repos} label="repositories" />
          <ProfileStat value={user.following} label="following" />
        </section>
        <section className="orgs">
          <h4>Restaurants</h4>
          {orgs.map(org => (
            <img
              key={org.id}
              src={org.avatar_url}
              alt="Organization Avatar"
              data-tip={org.login}
            />
          ))}
          <Tooltip effect="solid" />
        </section>
      </div>
    );
  }
}

Profile.propTypes = {
  username: PropTypes.string.isRequired
}

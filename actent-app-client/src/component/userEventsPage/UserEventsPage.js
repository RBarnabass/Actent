import React from 'react';
import PageTitle from './components/PageTitle';
import MainFilter from './components/filters/MainFilter';
import TabContainer from './components/TabContainer';
import axios from 'axios';

export default class UserEventsPage extends React.Component {
  state = {
    filterCityName: undefined,
    filterUserType: undefined,
    filterCategory: undefined,
    events: [],
    selectTab: 0,
  };

  setSelectTab = tabId => {
    this.setState({ selectTab: tabId }, () => this.getEvents());
  };

  setCity = cityName => {
    this.setState({ filterCityName: cityName }, () => this.getEvents());
  };

  setUserType = userType => {
    console.log(userType);
    this.setState({ filterUserType: userType }, () => this.getEvents());
  };

  setCategory = categoryName => {
    this.setState({ filterCategory: categoryName }, () => this.getEvents());
  };

  getEvents() {
    let url = 'http://localhost:8080/api/v1/eventsUsers/';
    if (this.state.selectTab === 0) {
      url += 'allEvents/7';
    } else if (this.state.selectTab === 1) {
      url += 'futureEvents/7';
    } else if (this.state.selectTab === 2) {
      url += 'pastEvents/7';
    }
    if (this.state.filterCategory || this.state.filterCityName || this.state.filterUserType) {
      url += '?';
      if (this.state.filterCityName) {
        url += 'city=' + this.state.filterCityName + '&';
      }
      if (this.state.filterCategory) {
        url += 'category=' + this.state.filterCategory + '&';
      }
      if (this.state.filterUserType) {
        url += 'userType=' + this.state.filterUserType + '&';
      }
    }

    console.log(url);
    axios
      .get(url)
      .then(response => {
        const events = response.data;
        this.setState({ events: events });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getEvents();
  }

  render() {
    return (
      <div>
        <div>
          <PageTitle />
          <MainFilter setCity={this.setCity} setUserType={this.setUserType} setCategory={this.setCategory} />
          <TabContainer setSelectTab={this.setSelectTab} selectTab={this.state.selectTab} events={this.state.events} />
        </div>
      </div>
    );
  }
}

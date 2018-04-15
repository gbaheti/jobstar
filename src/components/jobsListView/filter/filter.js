import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import './filter.css';

class Filter extends Component {
  state = {
    roles: [],
    locations: [],
    recent: [],
    selectedRole: '',
    selectedLocation: ''
  }

  componentDidMount() {
    this.setState({
      roles: [{ 
        value: 'helper', 
        label: 'Cleaner / Helper', 
        type: 'role'
      }, { 
        value: 'driver', 
        label: 'Delivery / Pickup Driver', 
        type: 'role'
      }, { 
        value: 'data-entry', 
        label: 'BPO / Data Entry', 
        type: 'role' 
      }],
      locations: [{ 
        value: 'delhi', 
        label: 'Delhi', 
        type: 'location'
      }, { 
        value: 'banglore', 
        label: 'Banglore', 
        type: 'location'
      }, { 
        value: 'chennai', 
        label: 'Chennai', 
        type: 'location' 
      }]
    });
  }

  setRole = (selectedRole) => {
    this.setState({ selectedRole });
  }

  setLocation = (selectedLocation) => {
    this.setState({ selectedLocation });
  }

  render() {
    const { selectedRole, selectedLocation } = this.state;

    return (
      <div className="filter">
        <Select 
          name="role" 
          placeholder="Role"
          value={selectedRole} 
          onChange={this.setRole} 
          options={this.state.roles}
        />
        <Select 
          name="location" 
          placeholder="Location"
          value={selectedLocation} 
          onChange={this.setLocation} 
          options={this.state.locations}
        />
        <Select 
          name="recent" 
          placeholder="Recent"
          disabled={true}
        />
      </div>
    );
  }
}

export default Filter;
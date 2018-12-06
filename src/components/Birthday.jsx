import React from 'react';
import './Birthday.css';
class Birthday extends React.Component {

  render() {
    return (
      <div> 
        <img className="background1" src={this.props.background_icon1} alt="boba" />
        <img className="background2" src={this.props.background_icon2} alt="boba" />
        <div className="birthday">
          <h1> 
            {this.props.text}
          </h1>
          <img className="profile" src={this.props.profile} alt="profile" />
        </div>
        <img className="background3" src={this.props.background_icon2} alt="boba" />
        <img className="background4" src={this.props.background_icon1} alt="boba" />
      </div>
    )
  }
}

export default Birthday;
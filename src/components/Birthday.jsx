import React from 'react';
import './Birthday.css';
class Birthday extends React.Component {

  render() {
    return (
      <div> 
        <img className="background1" src={this.props.background_icon1} alt="boba" />
        <img className="background2" src={this.props.background_icon2} alt="boba" />
        <h1 className="birthday_text"> 
          {this.props.text}
        </h1>
        <img className="background3" src={this.props.background_icon2} alt="boba" />
        <img className="background4" src={this.props.background_icon1} alt="boba" />
      </div>
    )
  }
}

export default Birthday;
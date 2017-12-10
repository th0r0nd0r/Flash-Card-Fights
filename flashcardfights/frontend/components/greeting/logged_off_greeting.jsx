import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="splash">
        <img src="http://res.cloudinary.com/ddgt25kwb/image/upload/c_scale,w_2245/v1512865824/black-girls-code_tlj07k.jpg"/>
      </div>);
  }
}
export default Greeting;

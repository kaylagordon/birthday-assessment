import { Component } from 'react';
import './Form.css';
import { postBirthday } from '../../utils';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      month: "",
      day: ""
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  createBirthday(event) {
    event.preventDefault();

    const newBirthday = {
      name: this.state.name,
      month: parseInt(this.state.month),
      day: parseInt(this.state.day)
    }

    postBirthday(newBirthday)
    .then(data => this.props.addBirthday(data))
  }

  render() {
    return (
      <form className="Form">
      <div className="form-section">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />
      </div>
      <div className="form-section">
        <label htmlFor="month">Month:</label>
        <input
          id="month"
          name="month"
          value={this.state.month}
          onChange={(event) => this.handleChange(event)}
        />
      </div>
      <div className="form-section">
        <label htmlFor="day">Day:</label>
        <input
          id="day"
          name="day"
          value={this.state.day}
          onChange={(event) => this.handleChange(event)}
        />
      </div>
      <button className="add-bday-btn" onClick={(event) => this.createBirthday(event)}>Add this birthday!</button>
      </form>
    );
  }
}

export default Form;

import { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import MonthContainer from '../MonthContainer/MonthContainer';
import { getMonths, getBirthdays, deleteBirthday } from '../../utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      months: [],
      birthdays: []
    }
  }

  componentDidMount() {
    getMonths()
    .then(data => this.setState({ months: data }))
    .then(
      getBirthdays()
      .then(data => this.setState({ birthdays: data }))
    )
  }

  addBirthday = (newBirthday) => {
    this.setState({ birthdays: [...this.state.birthdays, newBirthday] })
  }

  removeBirthday = (id) => {
    deleteBirthday(id)
    .then(data => this.setState({ birthdays: data }))
  }

  render() {
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <Form addBirthday={this.addBirthday}/>
        <MonthContainer months={this.state.months} birthdays={this.state.birthdays} removeBirthday={this.removeBirthday}/>
      </div>
    );
  }
}

export default App;

import { Component } from 'react';
import Form from '../Form/Form';
import AllTheBirthdays from '../AllTheBirthdays/AllTheBirthdays';
import months from '../../months_data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bdayMonths: months
    }
  }
  



  render() {
    return (
      <div className="App">
        {console.log(this.state.bdayMonths)}
        <h1>Birthdays</h1>
        <div className='bday-form'>
          {/* <Form /> */}
        </div>
        <div className='bday-container'>
          <AllTheBirthdays bdayMonths={this.state.bdayMonths}/>
        </div>
      </div>
    );
  }
}

export default App;

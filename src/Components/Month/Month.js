import './Month.css';
import Birthday from '../Birthday/Birthday';

function Month({ name, id, birthdays, removeBirthday }) {
  const displayBirthdays = birthdays.map(birthday => {
    return <Birthday person={birthday.name} month={birthday.month} day={birthday.day} id={birthday.id} key={birthday.id} removeBirthday={removeBirthday}/>
  });

  return (
    <div className="Month">
      <h2>{name}</h2>
      {birthdays.length ? displayBirthdays : <p className="no-bday-text">No birthdays this month.</p>}
    </div>
  )
}

export default Month;

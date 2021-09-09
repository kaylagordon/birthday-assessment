import './Birthday.css';

function Birthday({ person, month, day, id, removeBirthday }) {
  return (
    <div className="Birthday">
      <p>{person}: {month}/{day}</p>
      <button className="delete-bday-btn" onClick={() => removeBirthday(id)}>x</button>
    </div>
  );
}

export default Birthday;

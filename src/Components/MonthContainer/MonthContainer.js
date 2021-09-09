import './MonthContainer.css';
import Month from '../Month/Month';

function MonthContainer({ months, birthdays, removeBirthday }) {
  const displayMonths = months.map(month => {
    return (
      <Month name={month.name} id={month.id} key={month.id} birthdays={birthdays.filter(birthday => birthday.month === month.id)} removeBirthday={removeBirthday}/>
    )
  })

  return (
    <div className="MonthContainer">
    {displayMonths}
    </div>
  );
}

export default MonthContainer;

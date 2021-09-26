import BirthdayCard from '../BirthdayCard/BirthdayCard'
import './AllTheBirthdays.css';


const AllTheBirthdays = ({ bdayMonths }) => {
  let allMonths = bdayMonths.map(month => {
    return <BirthdayCard 
              key={month.id} 
              id={month.id} 
              name={month.name}
            />
  })

  return (
    <>
    <p>I'm a birthday</p>
    <div>{allMonths}</div>
    </>
  )
}


export default AllTheBirthdays;
import './BirthdayCard.css';

const BirthdayCard = ({ id, name }) => {

  return (
    <article>
      <h2 id={id}>{name}</h2>
    </article>
  )
}


export default BirthdayCard;
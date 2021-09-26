import './BirthdayCard.css';

const BirthdayCard = ({ id, name }) => {

  return (
    <article>
      <h1 id={id}>{name}</h1>
    </article>
  )
}


export default BirthdayCard;
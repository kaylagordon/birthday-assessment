export const getMonths = () => {
  return fetch('http://localhost:3001/api/v1/months')
  .then(res => res.json())
}

export const getBirthdays = () => {
  return fetch('http://localhost:3001/api/v1/birthdays')
  .then(res => res.json())
}

export const postBirthday = (newBirthday) => {
  return fetch('http://localhost:3001/api/v1/birthdays', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBirthday),
  })
  .then(res => res.json())
}

export const deleteBirthday = (id) => {
  return fetch(`http://localhost:3001/api/v1/birthdays/${id}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
}

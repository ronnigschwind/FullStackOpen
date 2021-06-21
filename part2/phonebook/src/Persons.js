import React from 'react'

const Person = ({ name, num }) => <p>{name} {num}</p>

const Persons = ({ persons, filter }) => {

    const filtered = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            {filter.length === 0 
                ? persons.map(person =>  <Person key={person.name} name={person.name} num={person.number} />)
                : filtered.map(person => <Person key={person.name} name={person.name} num={person.number} />)}
        </div>
    )
}

export default Persons
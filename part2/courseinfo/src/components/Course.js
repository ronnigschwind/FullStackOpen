import React from 'react'

const Course = ({ course }) => {
    return(
      <div> 
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }
  
  const Header = ({ course }) => {
    return (
      <h3>{course.name}</h3>
    )
  }
  
  const Total = ({ course }) => {
    const sum = course.parts.reduce((accumulator, partEx) => accumulator + partEx.exercises, 0)
  
    return(
      <p> <b>total of {sum} exercises</b> </p>
    ) 
  }
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      course.parts.map((part) => <Part key={part.id} part={part}/>)
    )
  }

  export default Course
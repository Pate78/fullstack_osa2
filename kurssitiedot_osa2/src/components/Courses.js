import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>{props.courseName}</h1>
)


const Part = ({part}) =>  {
/*      console.log('part props names: ', part.id, ' ', part.name, ' ', part.exercises)
 */     console.log('Part props: ', part);
    
        return (
            <li key={part.key}>
                {part.name} {part.ex}
            </li>
        )
    }

const Courses = ({courses}) =>  courses.map(course => <Course course={course}/>)

const Course = ({ course }) => {
    const rows = () => course.parts.map(
        part => <Part part={part} key={part.id}/>)
    
    
    
    return (
        <div>
            <Header courseName={course.name}/>
            <ul>
                {rows()}
            </ul>
            <Total course={course} />

        </div>
    )
    
}

const Total = ({course}) => {
/*     console.log('course.parts: ', course.parts);
 */    
    const courseExercises = course.parts.map(part => part.exercises)
/*     console.log('part exercises array', courseExercises);
 */    

    const numberOfExercises = courseExercises.reduce((total,currentValue) =>{
/*         console.log('part: ', total);
 */        
        return total+currentValue
    })
/*     console.log('numberOfExercises: ', numberOfExercises);
 */    
    return (
        <p>
        Number of exercises {numberOfExercises}
        </p>
    )
}

export default Courses
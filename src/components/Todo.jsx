import React, {useEffect, useState} from 'react';

const Todo = ({ todos, removeTodo }) => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            // working with todos
        }
        console.log('execute when compoent is mounted or component was updated')
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const handleClick = (event) => {
        console.log(event);
    }

    // className instead of class
    // all attributes in camelcase
    return (
        <ul autoPlay className='todo'>
            {
                todos.map((todo, index) => (
                    <li key={index}>
                        <input value={todo} type="text"/>
                        <button onClick={() => removeTodo(index)}>delete todo</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default Todo;
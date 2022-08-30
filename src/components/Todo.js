import React from 'react'

function Todo(props) {
    const { item,
            deleteTodo,
            setIsEdit,
            setwillUpDateToDo,
            setTodotext,
            changeIsDone } =props
    return (
        <div>
            <div className={`alert alert-${item.isDone === true ? "info" : "secondary"} d-flex justify-content-between align-items-center`} role="alert">
                <p>{item.text}</p>
                <div>
                    <button
                        className="btn btn-sm btn-danger mx-1"
                        onClick={() => deleteTodo(item.id)}
                    >Delete</button>
                    <button
                        className="btn btn-sm btn-success mx-1"
                        onClick={() => {
                            setIsEdit(true)
                            setwillUpDateToDo(item.id)
                            setTodotext(item.text)
                        }}>Edit</button>
                    <button
                        onClick={() => changeIsDone(item.id)}
                        className="btn btn-sm btn-secondary mx-1" >
                        {item.isDone === false ? "Done" : "Undone"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todo

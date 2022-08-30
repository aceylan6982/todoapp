import React from 'react'

function Form (props) {
    const {
        handleSubmit,
        todotext,
        isEdit,
        setTodotext
        } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        value={todotext}
                        className="form-control"
                        placeholder="fill out your todo list"
                        onChange={(event) => setTodotext(event.target.value)} />
                    <button
                        className={`btn btn-${isEdit === true ? "success" : "primary"}`}
                        type="submit">{isEdit === true ? "Save" : "Add"}</button>
                </div>
            </form>
        </div>
    )
}

export default Form

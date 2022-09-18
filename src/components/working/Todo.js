import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = () => {

    const [addState, setAddState] = useState("");
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (!addState) {

        } else {
            setItems([...items, addState]);
            setAddState("")
        }
    }

    const deleteItem = (id) => {
        const deleteData = items.filter((elem, ind) => {
            return (
                ind !== id
            )
        })

        setItems(deleteData)
    }





    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">TO DO LIST</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>



            <div className='container my-5'>
                <h1>TO DO LIST</h1>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" value={addState} onChange={(e) => setAddState(e.target.value)} />
                </div>
                <div className="btn btn-primary" onClick={addItem}>Add Item</div>

                <h1 className="my-3">Your Items</h1>



                <table className="table">
                    <tbody>
                        {

                            items.map((elem, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td> {elem}</td>
                                        <td><button className="btn btn-danger" onClick={() => { deleteItem(ind) }}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>

            </div>


        </>
    )
}

export default Todo

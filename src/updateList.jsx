import "./style.css"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addUser } from "./redux/reducer/test.reducer"
import { updateUser } from "./redux/reducer/test.reducer"

import axios from "axios"
import { Routes, Route, Link } from "react-router-dom"




function UpDateList ()
{

    const dispatch = useDispatch()

    const [ updateName, setUpdateName ] = useState( "" )
    const [ updatePrice, setUpdatePrice ] = useState( 0 )
    const [ updateQuantily, setUpdateQuantity ] = useState( 0 )


    const handleUpDate = () =>
    {


        axios.post("http://localhost:3000/usersData")
    }

    return (
        <div className="addList">
            <div class="form-container">
                <h2>Add Product</h2>
                <div id="product-form">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text"
                            onChange={ ( e ) => setUpdateName(e.target.value) }
                        />
                    </div>
                    <div class="form-group">
                        <label for="price">Price:</label>
                        <input type="number"
                            onChange={ ( e ) => setUpdatePrice( e.target.value ) }

                        />
                    </div>
                    <div class="form-group">
                        <label for="quantity">Quantity:</label>
                        <input type="number"
                            onChange={ ( e ) => setUpdateQuantity( e.target.value ) }

                        />
                    </div>
                    <div class="form-group">
                        <label for="category">Category:</label>
                        <select id="category" name="category" required>
                            <option value="">Select Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="books">Books</option>
                        </select>
                    </div>
                    <Link to="/">
                        <button class="btn" onClick={ () => ( handleUpDate() )}>UpDate List</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpDateList
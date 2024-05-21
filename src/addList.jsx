import { Routes, Route, Link } from "react-router-dom"
import "./style.css"

import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { addUser } from "./redux/reducer/test.reducer"
import axios from "axios"


function AddList ()
{

    const users = useSelector( ( state ) => state.users.userList )

    const [ name, setName ] = useState( "" )
    const [ price, setPrice ] = useState( 0 )
    const [ quantity, setQuantity ] = useState( 0 )


    const dispatch = useDispatch()




    const handleClick = () =>
    {
        const newUser = { id: users.length + 1, name: name, price: price, quantity: quantity }

        axios.post( "http://localhost:3000/usersData", newUser )
            .then( res => ( res.data ) )
            .catch( error => ( console.log( error ) ) )
        dispatch( addUser( newUser ) )
    }

    return (
        <div className="addList">
            <div class="form-container">
                <h2>Add Product</h2>
                <div id="product-form">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text"
                            onChange={ ( e ) => setName( e.target.value ) }

                        />
                    </div>
                    <div class="form-group">
                        <label for="price">Price:</label>
                        <input type="number"
                            onChange={ ( e ) => setPrice( e.target.value ) }
                        />
                    </div>
                    <div class="form-group">
                        <label for="quantity">Quantity:</label>
                        <input type="number"
                            onChange={ ( e ) => setQuantity( e.target.value ) }
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
                        <button class="btn" onClick={ () => ( handleClick() ) }>Add Product</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AddList
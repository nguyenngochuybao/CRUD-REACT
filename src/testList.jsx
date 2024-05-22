import "./style.css"

import { Routes, Route, Link } from "react-router-dom"


import { useEffect, useState } from "react"
import axios from "axios"




function TestList ()
{


    const [ data, setData ] = useState( [] )

    useEffect( () =>
    {
        axios.get( "http://localhost:3000/usersData" )
            .then( res => ( setData( res.data ) ) )
            .catch( error => { console.log( error ) } )
    }, [] )

    return (
        <>
            <div class="product-list">
                <div className="cssTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="product-table">
                            <tr>
                                <th>123</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Category</th>
                                <th>
                                    <Link to="/updateList">
                                        <button className="btnUp">SỬA</button>
                                    </Link>
                                    <button className="btnDe">XÓA</button>
                                </th>
                            </tr>
                        </tbody>
                        {
                            data.map( ( data, index ) => (
                                <tbody id="product-table" key={ index }>
                                    <tr>
                                        <th>{ data.name }</th>
                                        <th>{ data.price }</th>
                                        <th>{ data.quantity }</th>
                                        <th>{ data.category }</th>
                                        <th>
                                            <Link to="/updateList">
                                                <button className="btnUp">SỬA</button>
                                            </Link>
                                            <button className="btnDe">XÓA</button>
                                        </th>
                                    </tr>
                                </tbody>
                            ) )
                        }
                    </table>
                </div>
            </div>
            <div className="form_btnAdd">
                <Link to={"/addList"}>
                    <button className="btnADD">
                        ADD
                    </button>
                </Link>
            </div>

        </>

    )
}

export default TestList

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/addReducer";

function Add ()
{
    const [ name, setName ] = useState( "" )
    const [ email, setEmail ] = useState( "" )

    const navigate = useNavigate()

    const users = useSelector( ( state ) => ( state.users ) )
    const dispatch = useDispatch()

    const handleCreate = async () =>
    {
        dispatch(
            addUser( {
                id: users[ users.length - 1 ].id + 1,
                name: name,
                email: email
            } )
        )
        navigate( "/" )
    }



    return (
        <div className="add">
            <div className="form_add">
                <div className="form_add_user">
                    <h1>Add a User</h1>
                    <div className="form_inp">
                        <p>Tên người dùng:</p>
                        <input type="text" placeholder="Nhập tên người dùng"
                            onChange={ ( e ) => setName( e.target.value ) }
                        />
                    </div>
                    <br />
                    <div className="form_inp">
                        <p>Tên email:</p>
                        <input type="text" placeholder="Nhập tên email"
                            onChange={ ( e ) => setEmail( e.target.value ) }
                        />
                    </div>
                    <div className="form_btn">
                        <button className="btn_submit" onClick={ () => handleCreate() }>Submit </button>
                        <Link to="/">
                            <button className="btn_back">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add;
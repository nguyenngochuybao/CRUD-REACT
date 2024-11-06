import { Link, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { updateUser } from "../redux/addReducer";

function Update ()
{
    const { id } = useParams()
    const users = useSelector( ( state ) => ( state.users ) )
    const existingUser = users.filter( f => f.id == id )
    const { name, email } = existingUser[ 0 ]
    const [ uname, setName ] = useState( name )
    const [ uemail, setEmail ] = useState( email )


    const dispatch = useDispatch()

    const handleSave = () =>
    {
        dispatch(
            updateUser(
               { id: id,
                name: uname,
                email:uemail}
            )
        )
    }

    return (
        <div className="add">
            <div className="form_add">
                <div className="form_add_user">
                    <h1>UpDate User</h1>
                    <div className="form_inp">
                        <p>Tên người dùng:</p>
                        <input type="text" placeholder="Nhập tên người dùng"
                            value={ uname }
                            onChange={ ( e ) => setName( e.target.value ) }
                        />
                    </div>
                    <br />
                    <div className="form_inp">
                        <p>Tên email:</p>
                        <input type="text" placeholder="Nhập tên email"
                            value={ uemail }
                            onChange={ ( e ) => setEmail( e.target.value ) }
                        />
                    </div>
                    <div className="form_btn">
                        <button className="btn_submit" onClick={ () => handleSave() }><Link to="/" className="editCss">Save</Link></button>
                        <button className="btn_back"><Link to="/" className="editCss">Back</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update;
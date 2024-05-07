import "./style.css"

import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { addUser } from "./redux/reducer/test.reducer"

import axios from "axios"


function TestList ()
{

    const data = axios.get( "http://localhost:3000/usersData" )
        .then( response =>
        {
            const data = response.data;
            // Xử lý dữ liệu ở đây
            console.log( data );
        } )
        .catch( error =>
        {
            // Xử lý lỗi ở đây
            console.error( 'Đã có lỗi khi lấy dữ liệu:', error );
        } );

    const [ name, SetNam ] = useState( "" )

    const dispatch = useDispatch()
    const users = useSelector( ( state ) => state.users.userList )

    const handleAddUser = ( event ) =>
    {

        dispatch( addUser( { id: users.length + 1, name: name } ) )
    }

    return (
        <>
            <div className="container">
                <div className="formAddCRUD">
                    <div className="headCRUD">
                        <div className="leftCRUD">
                            <button onClick={ () => handleAddUser() }>
                                Add new product
                            </button>
                            <input type="text"
                                placeholder="nhập tên người dùng"
                                value={ name }
                                onChange={ ( e ) => SetNam( e.target.value ) }


                            />
                        </div>
                        <div className="rightCRUD">
                            <input type="text"
                                placeholder="Tìm kiếm"
                            />
                            <button>Search</button>
                        </div>
                    </div>
                    <div className="formDataCRUD">
                        <div className="dataCRUD">
                            <div className="dataNameBtn">
                                <p>hello</p>
                                <div className="btn">
                                    <button>SỬA</button>
                                    <button>XÓA</button>
                                </div>
                            </div>
                            {
                                users.length > 0 ? users.map( ( users, index ) => (
                                    <div className="dataNameBtn" key={ index }>
                                        <p>{ users.name }</p>
                                        <div className="btn">
                                            <button>SỬA</button>
                                            <button>XÓA</button>
                                        </div>
                                    </div>
                                ) ) : ""
                            }


                        </div>
                        {
                            data.length > 0 ? data.map( ( data, index ) => (
                                <div key={ index }>
                                    { data.name }
                                </div>
                            ) ):""
                        }
                    </div>

                </div>
            </div>
        </>

    )
}

export default TestList
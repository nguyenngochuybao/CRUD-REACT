import "./style.css"
import { useDispatch, useSelector } from "react-redux"

import { useState } from "react"

import { changTestLisAction } from "./redux/action/test.action"



function TestList ()
{

    const users = useSelector( ( state ) => state.users )
    const dispatch = useDispatch()

    const [ name, setName ] = useState( '' )

    const handleClick = ( event ) =>
    {
        
       
    }

    return (
        <>
            <div className="container">
                <div className="formAddCRUD">
                    <div className="headCRUD">
                        <div className="leftCRUD">
                            <button onClick={ ()=>(console.log(name)) }>
                                Add new product
                            </button>
                            <input type="text"
                                placeholder="nhập tên người dùng"
                                value={name}
                                onChange={ e => setName( e.target.value ) }
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

                            { users && users.map( ( users, index ) =>
                            (
                                <div className="dataNameBtn" key={ index }>
                                    <p>{ users.name }</p>
                                    <div className="btn">
                                        <button>SỬA</button>
                                        <button>XÓA</button>
                                    </div>
                                </div>
                            ) ) }
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default TestList
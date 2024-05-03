import "./style.css"
import { useDispatch, useSelector } from "react-redux"

import { useState } from "react"

import { changTestLisAction } from "./redux/action/test.action"


function TestList ()
{

    return (
        <>
            <div className="container">
                <div className="formAddCRUD">
                    <div className="headCRUD">
                        <div className="leftCRUD">
                            <button>
                                Add new product
                            </button>
                            <input type="text"
                            placeholder="nhập tên người dùng"
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
                        
                    </div>
                </div>
            </div>
        </>

    )
}

export default TestList
import "./style.css"
import { useDispatch, useSelector } from "react-redux"

import { useState } from "react"

import { changTestLisAction } from "./redux/action/test.action"


function TestList ()
{


    const dispatch = useDispatch()
    const TestList = useSelector( ( state ) => state.TestList )

    const [ newTest, setNewTest ] = useState( "" )

    const handlechange = ( e ) =>
    {
        setNewTest( e.target.value )
    }
   

    const handleClick = () =>
    {
        dispatch(
            changTestLisAction(
                {
                    name: newTest
                }
            )
        )
    }



    return (
        <>
            <div className="testList">
                <div className="brg">
                    <div className="form">
                        <input
                            type="text"
                            placeholder="Tên người dùng"
                            onChange={ handlechange }
                            value={ newTest }

                        />
                        <br />
                        <input
                            type="text"
                            placeholder="Mã số"
                        />
                        <br />
                        <button className="btn" onClick={ handleClick }>
                            click
                        </button>
                    </div>
                </div>

            </div>
            <div className="testList">
                <div className="brg">
                    <div className="form">
                        { TestList && TestList.map( ( item, index ) => (
                            <div key={ index }>
                                { item.name }
                            </div>
                        ) ) }
                    </div>
                </div>

            </div>
        </>

    )
}

export default TestList
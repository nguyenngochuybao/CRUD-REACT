import { Link } from "react-router-dom";

function Add ()
{
    return (
        <div className="add">
            <div className="form_add">
                <div className="form_add_user">
                    <h1>Add a User</h1>
                    <div className="form_inp">
                        <p>Tên người dùng:</p>
                        <input type="text" placeholder="Nhập tên người dùng" />
                    </div>
                    <div className="form_inp">
                        <p>Tên email:</p>
                        <input type="text" placeholder="Nhập tên email" />
                    </div>
                    <div className="form_inp">
                        <p>Số điện thoại:</p>
                        <input type="text" placeholder="Nhập số điện thoại của bạn" />
                    </div>
                    <div className="form_btn">
                        <button className="btn_submit">Submit </button>
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
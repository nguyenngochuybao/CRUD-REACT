import './style.css'

function User ()
{
    return (
        <div className="user">
            <div className='container'>
                <ul>
                    <li className='li_id'>id</li>
                    <li className='li_name'>name</li>
                    <li className='li_email'>email</li>
                </ul>
            </div>
        </div>
    );
}

export default User;

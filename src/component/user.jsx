import axios from 'axios';
import './style.css'
import { useEffect, useState } from 'react';

function User ()
{
    const [ data, setData ] = useState( [] )

    useEffect( () =>
    {
        axios.get( "http://localhost:3000/users" )
            .then( res => setData( res.data ) )
            .catch( error => ( error ) );

    }, [] )



    return (
        <div className="user">
            <div className='container'>
                <ul className='user_ul'>
                    <li className='li1'>id</li>
                    <li className='li2'>name</li>
                    <li className='li3'>email</li>
                </ul>
                {
                    data.map( ( data, index ) =>
                    ( <ul className='user_ul' key={ index }>
                        <li className='li1'>{ data.id }</li>
                        <li className='li2'>{ data.name }</li>
                        <li className='li3'>{ data.email }</li>
                    </ul> )
                    )
                }
            </div>
        </div>
    );
}

export default User;

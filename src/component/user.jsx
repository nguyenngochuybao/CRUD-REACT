import axios from 'axios';
import './style.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                <table>
                    <tr className='thead'>
                        <td style={ { width: "100px" } }>Id</td>
                        <td>Name</td>
                        <td>Emial</td>
                        <td>Action</td>
                    </tr>
                    {
                        data.map( ( data, index ) => (
                            <tr key={ index }>

                                <td style={ { width: "100px" } } >{ data.id }</td>
                                <td>{ data.name }</td>
                                <td>{ data.email }</td>
                                <td className='td_btn'>
                                    <Link to={"/Add"}><button className='btnA'>Edit</button></Link>
                                    <button className='btnB'>Delete</button>
                                </td>
                            </tr>
                        ) )
                    }
                </table>
            </div>
        </div>
    );
}

export default User;

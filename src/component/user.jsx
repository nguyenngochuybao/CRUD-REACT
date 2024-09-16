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
                <table>
                    <tr className='thead'>
                        <td style={ { width:"100px"}}>id</td>
                        <td>name</td>
                        <td>emial</td>
                        <td>action</td>
                    </tr>
                    {
                        data.map( ( data, index ) => (
                            <tr key={index}>

                                <td style={ { width: "100px" } } >{ data.id }</td>
                                <td>{ data.name }</td>
                                <td>{ data.email }</td>
                                <td>
                                    <button className='btnA'>Edit</button>
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

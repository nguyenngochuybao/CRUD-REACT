import axios from 'axios';
import './style.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { deleteUser } from '../redux/addReducer';

function User ()
{

    const users = useSelector( ( state ) => ( state.users ) )

    const dispathch = useDispatch()

    const handleDelete = ( id ) =>
    {
        dispathch(
            deleteUser(
                { id:id }
            )
        )
    }

    return (
        <div className="user">
            <div className='container'>
                <table>
                    <tr className='thead'>
                        <td style={ { width: "100px" } }>Id</td>
                        <td>Name</td>
                        <td>Emial</td>
                        <td>
                            Action
                            <Link to={ "/Add" }>
                                <button className='btnBtn'>Add+</button>
                            </Link>
                        </td>
                    </tr>
                    {
                        users.map( ( users, index ) => (
                            <tr key={ index }>
                                <td style={ { width: "100px" } } >{ users.id }</td>
                                <td>{ users.name }</td>
                                <td>{ users.email }</td>
                                <td className='td_btn'>
                                    <button className='btnA'><Link to={ `/edit/${ users.id }` } className='editCss'>Edit</Link></button>
                                    <button className='btnB' onClick={ () => handleDelete( users.id ) }>Delete</button>
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

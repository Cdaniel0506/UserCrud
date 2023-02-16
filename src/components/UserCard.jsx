import React from 'react'
import "./styles/UserCard.css"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {
    /*Funcion para editar */
    const handleclickEdit = () => {
        setUpdatingUser(user)
        handleClickShowModal()
    }
    return (
        <article className="userCard">
            <h3 className="userCard_name" >{user.first_name} {user.last_name}</h3>
            <hr className='userCard_line' />
            <ul className="userCard_list" >
                <li className="userCard_item" ><span>Email</span> {user.email}</li>
                <li className="userCard_item" ><span>Birthday</span> <i className='bx bxs-gift' ></i>{user.birthday}</li>
            </ul>
            <hr className='userCard_line' />
            <footer className='userCard_btns'>
                <button className='userCard_btnDelete'onClick={() =>deleteUser(user.id)} ><i className='bx bxs-trash'></i></button>
                <button className='userCard_btnEdit' onClick={handleclickEdit} ><i className='bx bx-edit-alt' ></i></button>
            </footer>
        </article>
    )
}

export default UserCard
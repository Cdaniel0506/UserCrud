import React from 'react'
import UserCard from './UserCard'

const UsersList = ({users, deleteUser, setUpdatingUser, handleClickShowModal}) => {
    return (
        <section>
            {
                users.map(user => 
                <UserCard 
                key={user.id} 
                user={user} 
                deleteUser={deleteUser} 
                setUpdatingUser={setUpdatingUser} 
                handleClickShowModal={handleClickShowModal}
                />)
            }

        </section>

    )
}

export default UsersList
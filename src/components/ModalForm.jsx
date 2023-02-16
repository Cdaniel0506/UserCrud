import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import "./styles/ModalForm.css"

const defaultValue ={
    "first_name":"",
    "last_name":"",
    "email":"",
    "password":"",
    "birthday":""
};

const ModalForm = ({
    isShowModal, 
    handleClickShowModal, 
    createUser, 
    updatingUser, 
    updateUser, 
    setUpdatingUser
}) => {

    /*Instaciamos el hoock y registrat los input de los cuales tomaremos los datos */
    const {register, handleSubmit, reset} = useForm()

    const submit = (data) => {
        if(updatingUser){
            updateUser(data, updatingUser.id);
        }else{
            createUser(data);
        }
        reset(defaultValue);
    };
    /*Vaciar el modal cuando se termine deatualizar y que los datos no se vear al crear un nuevo user */
    const handleClickClose = () => {
        handleClickShowModal()
        reset(defaultValue)
        setUpdatingUser()

    }
    useEffect(() => {
        if(updatingUser){
            reset(updatingUser);
        }
    }, [updatingUser]);

    return (
        <section className={`modalForm ${isShowModal ? "activeForm" : ""}`}>
            <form onSubmit={handleSubmit(submit)} className='modalForm_form'>
                <h3 className='modalForm_title' >
                    {updatingUser ? "Edit User" : "New User"}
                    </h3>
                <i onClick={handleClickClose} className='modalForm_x bx bxs-x-circle bx-flip-horizontal bx-tada' ></i>
                <div className='modalForm_div' >
                    <label className='modalForm_label' htmlFor="">First Name </label>
                    <input className='modalForm_input' type="text"{...register("first_name")} />
                </div>
                <div className='modalForm_div' >
                    <label className='modalForm_label' htmlFor="">Last Name </label>
                    <input className='modalForm_input' type="text"{...register("last_name")} />
                </div>
                <div className='modalForm_div' >
                    <label className='modalForm_label' htmlFor="">Email </label>
                    <input className='modalForm_input' type="email"{...register("email")} />
                </div>
                <div className='modalForm_div' >
                    <label className='modalForm_label' htmlFor="">Password </label>
                    <input className='modalForm_input' type="password"{...register("password")} />
                </div>
                <div className='modalForm_div' >
                    <label className='modalForm_label' htmlFor="">Birthday </label>
                    <input className='modalForm_input' type="date"{...register("birthday")} />
                </div>
                <button className='modalForm_btn' >{updatingUser ? "Save Changes" : "Add New User"}</button>
            </form>
        </section>

    )
}

export default ModalForm
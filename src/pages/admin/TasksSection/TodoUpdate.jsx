import React, { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const TodoUpdate = ({ todo, handleUpdateTodo }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    const [updateDescription, setUpdateDescription] = useState(todo.description);
    const [disabled, setDisabled] = useState(true);
    const focusInputRef = useRef();

    const onSubmitUpdate = () => {
        const id = todo.id;
        const description = updateDescription;

        handleUpdateTodo(id, description);

        setDisabled(!disabled);
        focusInputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit(onSubmitUpdate)}>
            <input
                type='text'
                className={`input-update ${todo.done ? 'text-decoration-dashed' : ''}`}
                name='updateDescription'
                value={updateDescription}
                onChange={(e) => setUpdateDescription(e.target.value)}
                placeholder='¿Qué hay que hacer?'
                readOnly={disabled}
                ref={focusInputRef}
                {...register('updateDescription', { required: true })}
            />

            <button className='btn-edit' type='submit'>
                <FaEdit />
            </button>

            {errors.updateDescription && (
                <p className="text-red-500">Campo Obligatorio</p>
            )}
        </form>
    );
};

export default TodoUpdate;
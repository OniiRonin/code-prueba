import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TaskModal = ({ onClose, onAddTask }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onChange',
    });

    const [selectedDate, setSelectedDate] = useState(null);

    const onFormSubmit = (data) => {
        const newTask = {
            title: data.title,
            description: data.description || '',
            date: selectedDate,
        };

        onAddTask(newTask);
        onClose();
        reset();
        setSelectedDate(null);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#1a202c] p-4 rounded">
                <h2 className="text-xl font-bold mb-4 text-gray-100">Añadir tarea</h2>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <input
                        type="text"
                        placeholder="Título"
                        {...register('title', { required: true, minLength: 3 })}
                        className={`w-full mb-2 p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'
                            } rounded text-gray-100 bg-[#2d3748]`}
                    />
                    {errors.title && errors.title.type === 'required' && (
                        <p className="text-red-500">Campo Obligatorio</p>
                    )}
                    {errors.title && errors.title.type === 'minLength' && (
                        <p className="text-red-500">El campo debe tener al menos 3 caracteres</p>
                    )}

                    <textarea
                        placeholder="Descripción"
                        {...register('description')}
                        className="w-full h-24 mb-2 p-2 border border-gray-300 rounded resize-none overflow-auto text-gray-100 bg-[#2d3748]"
                    ></textarea>

                    <div className="mb-2">
                        <label htmlFor="date" className="block text-gray-100 mb-1">
                        </label>
                        <DatePicker
                            id="date"
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            placeholderText="Selecciona una fecha"
                            dateFormat="dd/MM/yyyy"
                            className={`w-full p-2 border ${errors.date ? 'border-red-500' : 'border-gray-300'
                                } rounded text-gray-100 bg-[#2d3748]`}
                        />
                        {errors.date && <p className="text-red-500">Campo Obligatorio</p>}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-cyan-500 text-gray-100 px-4 py-2 rounded mr-2 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-100 focus:ring-opacity-20"
                        >
                            Añadir Tarea
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;
import React, { useState } from 'react';
import TaskModal from '../../components/TaskModal';

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleAddTask = (newTask) => console.log(newTask);

    return (
        <div>
            <button
                onClick={handleOpenModal}
                className="bg-cyan-500 text-gray-100 px-4 py-2 rounded hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-100 focus:ring-opacity-10"
            >
                + Nueva Tarea
            </button>
            {showModal && (
                <TaskModal onClose={handleCloseModal} onAddTask={handleAddTask} />
            )}
            <div className="container mx-auto my-4">
                task
            </div>
        </div>
    );
};

export default Home;
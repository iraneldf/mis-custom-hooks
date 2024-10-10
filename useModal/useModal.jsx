import {useState} from "react";

export const useModal = (initialData = null) => {

    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(initialData);

    const handleOpenModal = (newData = null) => {
        // Si newData se proporciona, actualiza el estado data
        if (newData) {
            setData(newData);
        }
        setShowModal(true);

    }

    const handleCloseModal = () => setShowModal(false);

    return [showModal, handleOpenModal, handleCloseModal, data];
}


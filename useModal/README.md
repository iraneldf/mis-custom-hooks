# useForm

Ejemplo:

```
    # Abre, cierra y envia datos a tus modales
    
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };
    
    const [showModal, handleOpenModal, handleCloseModal, data] = useModal( initialForm );

    {showModal && <MyModal
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                onSubmit={handleAddData}
                data={data}
            />}
```
import { useState } from 'react';

function useLocalStorage(itemName, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);
            return localStorageItem ? JSON.parse(localStorageItem) : initialValue;
        } catch (error) {
            console.error('Error al obtener el valor del localStorage:', error);
            return initialValue;
        }
    });

    const saveTodos = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            localStorage.setItem(itemName, JSON.stringify(valueToStore));
        } catch (error) {
            console.error('Error al guardar el valor en el localStorage:', error);
        }
    };

    return {
        storedValue,
        saveTodos,
    };
}

export { useLocalStorage };

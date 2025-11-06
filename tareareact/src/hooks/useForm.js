import { useState } from "react";

export const useForm = (initialValue) => {
    const [form, setForm] = useState(initialValue);

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleReset = () => {
        setForm(initialValue);
    };

    return {
        form,
        handleChange,
        handleReset
    }
}
                








// ### 2. Crear un Custom Hook

// Se debe crear un custom hook llamado `useForm` que:

// - Reciba un `initialValue`.
// - Utilice `useState` para manejar los valores del formulario.
// - Devuelva:
//   - Los valores actuales del formulario.
//   - Una función `handleChange` para actualizar los valores del formulario.
//   - Una función `handleReset` para resetear el formulario.

// Ubicación sugerida:

// - `src/hooks/useForm.js`

























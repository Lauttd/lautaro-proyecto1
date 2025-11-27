import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formValue, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleReset = () => {
    setValue(initialValue);
  };

  return {
    formValue,
    handleChange,
    handleReset,
  };
};

// ### 2. Crear un Custom Hook

// Se debe crear un custom hook llamado `useForm` que:

// - Reciba un `initialValue`.
// - Utilice `useState` para manejar los valores del formulario.
// - Devuelva:
//   - Los valores actuales del formulario.
//   - Una función `handleChange` para actualizar los valores del formulario.
//   - Una función `handleReset` para resetear el formulario.

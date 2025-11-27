import { useForm } from "../hooks/useForm";

export const Register = () => {
    const {values, handleChange, handleReset} = useForm({
        username: '',
        email: '',
        password: '',
        firstname: '',
        lastname: ''     
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        handleReset();
    }

    return(
        <form onSubmit="handleSubmit">
            <h3>Registro</h3>
            <input type="text" name="username" placeholder="username" value={values.username} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
            <input type="text" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
            <input type="text" name="firstname" placeholder="iFrstname" value={values.username} onChange={handleChange} />
            <input type="text" name="lastname" placeholder="Lastname" value={values.username} onChange={handleChange} />
        </form>
    )
}




















// **Register.jsx**

// - Contendrá un formulario con los campos:
//   - username
//   - email
//   - password
//   - firstname
//   - lastname
// - También usará el custom hook useForm.
// - Al hacer submit:
//   - Mostrará los datos del formulario en consola.
//   - Reseteará el formulario.


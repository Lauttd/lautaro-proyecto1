import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { formState, handleChange } = useForm({
    username: "",
    password: "",
  });

  useForm;
  const { username, password } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    localStorage.setItem("isLogged", "true");

    navigate("/home");
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <button>Iniciar Sesion</button>
      </form>
    </div>
  );
};

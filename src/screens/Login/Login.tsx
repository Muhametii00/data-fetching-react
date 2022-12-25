import React, { useState } from "react";
import "./Login.css";

interface Props {
  onLogIn: () => void;
}

export const Login = (props: Props) => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setFormState((previousState) => {
      const target = event.target as HTMLInputElement;

      return {
        ...previousState,
        [target.name]: target.value,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    props.onLogIn();
  };
  return (
    <div className="login-screen">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>

        <input
          type="text"
          name="username"
          value={formState.username}
          onChange={handleInputChange}
          placeholder="Your username"
        />
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
          placeholder="Your password"
        />

        <button
          disabled={
            formState.username.length == 0 || formState.password.length == 0
          }
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

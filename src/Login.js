import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  function loginHandler(event) {
    event.preventDefault();

    const checkLogin = true;

    if (checkLogin) {
      navigate("/dashboard");
    }
  }
  return (
    <>
      <h1>Halaman Login</h1>
      <form onSubmit={loginHandler}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

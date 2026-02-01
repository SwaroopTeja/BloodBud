import "./LoginForm.css";

function LoginForm() {
  return (
    <form>
      <div className="rounded-5 p-2" id="login-container">
        <div className="bg-white rounded-5 m-4 p-4 pb-3 ps-5 pe-5">
          <img
            width="75"
            height="75"
            src="https://res.cloudinary.com/dm7m1b2fk/image/upload/v1769927476/logowh_zakhgr.png"
            alt="user-male-circle"
            className="mb-3 me-3"
          />
          <h1 className="d-inline" id="login-head">
            Login
          </h1>
        </div>
        <div class="m-4">
          <label for="username" class="form-label justify-content-start d-flex">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="username"
          />
          <label for="password" class="form-label justify-content-start d-flex mt-3">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
          />
          <div className="d-flex justify-content-center">
          <button type="button" className="btn" id="no-acc">Doesn't have an account?</button>
          </div>
          <button type="button" className="btn mt-4" id="Login">Login</button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;

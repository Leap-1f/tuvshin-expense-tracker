export default function Login() {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 h-screen bg-neutral-50 flex justify-center items-center">
        <div className="flex flex-col">
          {/* Below is the logo. */}
          <div className="flex flex-row items-center gap-1 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M16.1294 8.0263V0.248535H8.18225V8.0263H0.235046V15.9735H8.18225V23.7513H16.1294V15.9735H24.0766V8.0263H16.1294ZM16.1294 15.8041H8.18225V8.19694H16.1294V15.8041Z"
                fill="#0166FF"
              />
            </svg>
            <h1 className="text-2xl text-neutral font-semibold">Geld</h1>
          </div>
          {/* Below is the welcome text. */}
          <div className="flex justify-center items-center flex-col mt-12">
            <h1 className="text-2xl text-neutral font-semibold">
              Welcome Back!
            </h1>
            <h3 className="font-light text-neutral">
              Welcome back, please enter your details.
            </h3>
          </div>
          {/* Below is the inputs and buttons.   */}
          <div className="flex flex-col justify-center items-center w-[450px] gap-4 mt-12">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered rounded bg-neutral-100 w-5/6 text-black placeholder:text-neutral-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered rounded bg-neutral-100 w-5/6 text-black placeholder:text-neutral-400"
            />
            <button className="btn w-5/6 bg-primary text-neutral-50 rounded-3xl border-none text-lg font-light hover:bg-primary hover:text-black transition-all duration-200 ">
              Log In
            </button>
          </div>
          {/* Below is registration text*/}
          <div className="flex justify-center items-center flex-row gap-5 mt-12">
            <h4 className="text-neutral">Dont have an account?</h4>
            <a href="http://localhost:3000/register" className="text-primary">
              Sign Up.
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-primary"></div>
    </div>
  );
}

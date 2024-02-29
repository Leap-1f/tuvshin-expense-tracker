import { useState } from "react";
export default function register() {
  const [error, setError] = useState("Hello!");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cpassword, setCpass] = useState("");

  function registerVerify() {
    const sc = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~][0-9]/g;
    const error = document.getElementById("err");
    if (sc.test(name) === true || name === "" || name.length < 3) {
      setError("Name is invalid");
      error.classList.remove("hidden");
    } else if (email === "" || email.endsWith("@gmail.com") != true) {
      setError("Only gmail accounts are currently accepted.");
      error.classList.remove("hidden");
    } else if (password.length < 8) {
      setError("Password is not 8 characters long.");
      error.classList.remove("hidden");
    } else if (password != cpassword) {
      setError("Passwords dont match");
      error.classList.remove("hidden");
    } else {
      error.classList.add("hidden");
      return 200;
    }
  }
  function registerAccount() {
    console.log(name, email, password, cpassword);
    fetch("http://localhost:8080/user/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        pass: password,
        cpass: cpassword,
      }),
    });
  }
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
          <div className="flex justify-center items-center flex-col mt-12 gap-2">
            <h1 className="text-2xl text-neutral font-semibold">
              Create Geld account.
            </h1>
            <h3 className="font-light text-neutral">
              Sign up below to create your Wallet account.
            </h3>
          </div>
          {/* Below is the inputs and buttons.   */}
          <div className="flex flex-col justify-center items-center w-[450px] gap-4 mt-12">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered rounded bg-neutral-100 w-5/6 text-black placeholder:text-neutral-400"
              id="registerName"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered rounded bg-neutral-100 w-5/6 text-black placeholder:text-neutral-400"
              id="registerMail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered rounded bg-neutral-100 w-5/6 text-black placeholder:text-neutral-400"
              id="registerPassword"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered rounded bg-neutral-100 w-5/6 text-black placeholder:text-neutral-400"
              id="registerCPassword"
              onChange={(e) => {
                setCpass(e.target.value);
              }}
            />
            <div
              role="alert"
              className="alert bg-warning w-5/6 hidden"
              id="err"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>Warning: {error}</span>
            </div>
            <button
              className="btn w-5/6 bg-primary text-neutral-50 rounded-3xl border-none text-lg font-light hover:bg-primary hover:text-black transition-all duration-200"
              onClick={() => {
                let ok = registerVerify();
                if (ok === 200) {
                  console.log("working");
                  registerAccount();
                } else {
                  console.log("nope");
                }
              }}
            >
              Sign Up
            </button>
          </div>
          {/* Below is log in text*/}
          <div className="flex justify-center items-center flex-row gap-5 mt-12">
            <h4 className="text-neutral">Have an account?</h4>
            <a href="http://localhost:3000/" className="text-primary">
              Log In.
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-primary"></div>
    </div>
  );
}

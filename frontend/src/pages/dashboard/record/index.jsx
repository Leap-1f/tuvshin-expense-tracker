import Image from "next/image";
import { Input, Slider } from "@nextui-org/react";
import { useState, useEffect } from "react";
export default function Dashboard() {
  const [value, setValue] = useState([0, 1000]);
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [trans_cat, setTransCat] = useState("Choose category");
  function checkId() {
    if (localStorage.id != undefined) {
      console.log("all good");
    } else {
      window.location.href = "http://localhost:3000/";
    }
  }
  async function createCategory() {
    let fart = await fetch("http://localhost:8080/users/createCategory", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        uuid: localStorage.getItem("id"),
      }),
    });
  }
  async function getCategories() {
    let fart = await fetch("http://localhost:8080/users/getCategories", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: localStorage.getItem("id"),
      }),
    })
      .then((response) => response.json())
      .then((response) => setCategories(response));
  }
  useEffect(() => {
    checkId();
    getCategories();
  }, []);
  function logOut() {
    localStorage.removeItem("id");
    window.location.href = "http://localhost:3000/";
  }
  return (
    <div>
      {/* navbar below */}
      <div className="flex flex-row justify-between items-center h-16">
        <div className="flex flex-row justify-around gap-6 ml-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
          >
            <path
              d="M18.8296 9.36772V0.300781H9.56514V9.36772H0.300659V18.6322H9.56514V27.6991H18.8296V18.6322H28.0941V9.36772H18.8296ZM18.8296 18.4347H9.56514V9.56665H18.8296V18.4347Z"
              fill="#0166FF"
            />
          </svg>
          <a href="/dashboard" className="font-light">
            Dashboard
          </a>
          <h1 className="font-semibold">Record</h1>
        </div>
        <div className="flex flex-row gap-3 mr-24">
          <button className="btn btn-sm bg-primary gap-2 flex flex-row rounded-3xl justify-center items-center text-white hover:bg-primary hover:text-black modal-open">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H10.625V16.875C10.625 17.0408 10.5592 17.1997 10.4419 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83424 17.5 9.67527 17.4342 9.55806 17.3169C9.44085 17.1997 9.375 17.0408 9.375 16.875V10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H9.375V3.125C9.375 2.95924 9.44085 2.80027 9.55806 2.68306C9.67527 2.56585 9.83424 2.5 10 2.5C10.1658 2.5 10.3247 2.56585 10.4419 2.68306C10.5592 2.80027 10.625 2.95924 10.625 3.125V9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10Z"
                fill="white"
              />
            </svg>
            <h1 className="font-light">Record</h1>
          </button>
          <div className="dropdown">
            <button>
              <Image
                src={"/favicon.ico"}
                width={30}
                height={24}
                className="flex-shrink-0"
              />
              <ul
                tabindex="0"
                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a
                    onClick={() => {
                      logOut();
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F5F7] h-screen">
        <div className="w-1/6 h-5/6 bg-base-100 border-base-200 border-[1px] ml-20 rounded-lg">
          <div className="mr-4 ml-4 h-full">
            <h1 className="text-xl font-bold pt-4 mb-4">Records</h1>
            <button
              className="btn btn-sm bg-primary gap-2 w-full flex flex-row rounded-3xl justify-center items-center text-white hover:bg-primary hover:text-black"
              onClick={() => document.getElementById("record").showModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H10.625V16.875C10.625 17.0408 10.5592 17.1997 10.4419 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83424 17.5 9.67527 17.4342 9.55806 17.3169C9.44085 17.1997 9.375 17.0408 9.375 16.875V10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H9.375V3.125C9.375 2.95924 9.44085 2.80027 9.55806 2.68306C9.67527 2.56585 9.83424 2.5 10 2.5C10.1658 2.5 10.3247 2.56585 10.4419 2.68306C10.5592 2.80027 10.625 2.95924 10.625 3.125V9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10Z"
                  fill="white"
                />
              </svg>
              <h1 className="font-light">Add</h1>
            </button>
            <dialog id="record" className="modal">
              <div className="modal-box">
                <div className="border-b-1 border-base-200 pb-4">
                  <h1>Add Record</h1>
                  <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-6 top-5 border-0 font-bold">
                      ✕
                    </button>
                  </form>
                </div>
                <div className="mt-6">
                  <div className="w-1/2 flex flex-col gap-5">
                    <div class="join">
                      <input
                        aria-label="Expense"
                        type="radio"
                        name="inex"
                        className="join-item btn hover:btn-error w-24 rounded-3xl"
                        checked
                      />
                      <input
                        aria-label="Income"
                        type="radio"
                        name="inex"
                        className="join-item btn  hover:btn-success w-24 rounded-3xl"
                        selected
                      />
                    </div>
                    <input
                      type="number"
                      className="input bg-base-200 pt-6 input-lg pr-10"
                      placeholder="₮ 000.00"
                    />
                    <h4 className="relative bottom-16 text-sm font-light left-6">
                      Amount
                    </h4>
                    <h3>Category</h3>
                    <select className="select">
                      <option selected disabled>
                        Choose a category
                      </option>

                      {categories.map((items) => (
                        <option value={items.id}>{items.name}</option>
                      ))}
                    </select>
                    <div className="flex flex-row">
                      <div className="flex flex-col">
                        <h1>Date</h1>
                        <input type="date" className="input" />
                      </div>
                      <div className="flex flex-col">
                        <h1>Time</h1>
                        <input type="time" className="input" />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </div>
              <form method="dialog" class="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <input
              type="text"
              placeholder="Search"
              className="placeholder:pl-2 w-full mt-4 rounded-lg pb-1 placeholder:font-normal placeholder:text-slate-400 bg-base-100 border-base-300 border-[1px]"
            ></input>
            <div className="mt-4 w-1/5">
              <h1 className="font-semibold mb-4">Types</h1>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-black mr-3"
                    checked
                  />
                  <span className="label-text">All</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-black mr-3"
                    checked
                  />
                  <span className="label-text">Income</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-black mr-3"
                    checked
                  />
                  <span className="label-text">Expense</span>
                </label>
              </div>
            </div>
            <div className="flex justify-between flex-row w-full mt-4 mb-4">
              <h1 className="text-black font-semibold">Category</h1>
              <button>
                <h1 className="text-opacity-20 font-medium text-black">
                  Clear
                </h1>
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {categories.map((item) => (
                <div className="font-semibold text-md">{item.name}</div>
              ))}
              <button
                className="flex flex-row items-center gap-2 "
                onClick={() =>
                  document.getElementById("create_cat").showModal()
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z"
                    fill="#0166FF"
                  />
                </svg>
                <h1>Add Category</h1>
              </button>
              <dialog id="create_cat" className="modal">
                <div className="modal-box h-96">
                  <div className="border-b-1 border-slate-300 pb-5">
                    <h1 className="font-bold">Add Category</h1>
                    <form method="dialog">
                      <button class="btn btn-sm btn-circle btn-ghost absolute right-6 top-5 border-0 font-bold">
                        ✕
                      </button>
                    </form>
                  </div>
                  <div className="mt-4">
                    <details class="dropdown">
                      <summary class="m-1 btn bg-white">V</summary>
                      <ul class=" p-2 shadow menu dropdown-content z-[1] h-fit bg-base-100 rounded-box w-[360px] gap-4 flex flex-row">
                        <li className="">
                          <span>🛨</span>
                        </li>
                        <li>
                          <span>🛧</span>
                        </li>
                        <li>
                          <span>🛦</span>
                        </li>
                        <li>
                          <span>🛲</span>
                        </li>
                        <li>
                          <span>🛰</span>
                        </li>
                        <li>
                          <span>🚷</span>
                        </li>
                        <li>
                          <span>🚴</span>
                        </li>
                        <li>
                          <span>🚢</span>
                        </li>
                        <li>
                          <span>🚠</span>
                        </li>
                        <li>
                          <span>🚙</span>
                        </li>
                        <li>
                          <span>🚖</span>
                        </li>
                        <li>
                          <span>🚒</span>
                        </li>
                        <li>
                          <span>🚀</span>
                        </li>
                        <li>
                          <span>🥨</span>
                        </li>
                        <li>
                          <span>🥩</span>
                        </li>
                        <li>
                          <span>🦇</span>
                        </li>
                        <li>
                          <span>🧔</span>
                        </li>
                        <li>
                          <span>🧥</span>
                        </li>
                        <li>
                          <span>🧥</span>
                        </li>
                        <li>
                          <span>🎮</span>
                        </li>
                        <li>
                          <span>📽️</span>
                        </li>
                        <li>
                          <span>🌳</span>
                        </li>
                        <li>
                          <span>🏗️</span>
                        </li>
                        <li>
                          <span>🎪</span>
                        </li>
                        <li>
                          <span>👨‍💻</span>
                        </li>
                        <li>
                          <span>🧑‍💻</span>
                        </li>
                        <li>
                          <span>🥳</span>
                        </li>
                        <li>
                          <span>🏮</span>
                        </li>
                        <li>
                          <span>🏫</span>
                        </li>
                        <li>
                          <span>✍️</span>
                        </li>
                      </ul>
                    </details>
                    <input
                      type="text"
                      className="input ml-6 border-[1px] border-base-300"
                      placeholder="Name"
                      id="cat_name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <form method="dialog">
                    <button
                      className="btn rounded-lg w-full relative mt-12 bg-green-500 text-white hover:bg-green-600"
                      onClick={() => {
                        createCategory();
                      }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <form method="dialog" class="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
            <div className="mt-4">
              <h1 className=" font-semibold mb-4">Amount Range</h1>
              <div className="flex flex-row justify-between">
                <input
                  type="number"
                  min={0}
                  max={1000}
                  value={value[0]}
                  className="input-sm rounded border-[1px]"
                  onChange={(e) => {
                    const v = e.target.value;
                    setValue(v);
                  }}
                />
                <input
                  type="number"
                  min={0}
                  max={1000}
                  value={value[1]}
                  className="input-sm rounded border-[1px]"
                  onChange={(e) => {
                    const v = e.target.value;
                    setValue(v);
                  }}
                />
              </div>
              <Slider
                step={1}
                minValue={0}
                maxValue={1000}
                defaultValue={value}
                onChange={setValue}
                aria-label="Price-Range"
                className="max-w-md text-xs"
                marks={[
                  {
                    value: 0,
                    label: "0$",
                  },
                  {
                    value: 250,
                    label: "250$",
                  },
                  {
                    value: 500,
                    label: "500$",
                  },
                  {
                    value: 750,
                    label: "750$",
                  },
                  {
                    value: 1000,
                    label: "1000$",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

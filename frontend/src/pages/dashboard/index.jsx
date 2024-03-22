import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function Dashboard() {
  const [cash, setCash] = useState(0);
  const data = {
    labels: ["Bills", "Clothing", "Food", "Shopping", "Insurance"],
    datasets: [
      {
        label: "₮ in thousands",
        data: [300, 70, 150, 100, 30],
        backgroundColor: [
          "#1C64F2",
          "#F2901C",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: new Date().getFullYear(),
        backgroundColor: "#84CC16",
        borderColor: "#4a5568",
        data: [3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000],
        fill: false,
        barThickness: 8,
      },
      {
        label: new Date().getFullYear() - 1,
        fill: false,
        backgroundColor: "#F97316",
        borderColor: "#3182ce",
        data: [2000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000],
        barThickness: 8,
      },
    ],
  };
  async function getInfo() {
    let fart = await fetch("http://localhost:8080/users/getInfo", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: localStorage.getItem("id"),
      }),
    });
  }
  function logOut() {
    localStorage.removeItem("id");
    window.location.href = "http://localhost:3000/";
  }
  function checkId() {
    if (localStorage.id != undefined) {
      console.log("all good");
    } else {
      window.location.href = "http://localhost:3000/";
    }
  }
  useEffect(() => {
    checkId();
  }, []);
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
          <h1 className="font-semibold">Dashboard</h1>
          <a href="/dashboard/record" className="font-light">
            Record
          </a>
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
      <div className="w-screen h-screen bg-base-200">
        <div className="flex flex-col">
          {/* below is top3 section */}
          <div className="flex flex-row w-full pr-24 pl-24 pt-8 gap-6">
            <div className="h-1/3 w-1/3 rounded-2xl bg-primary">
              <div className="flex flex-col gap-16">
                <div className="flex flex-row gap-1 items-center ml-8 mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M14.5348 7.47163V0.703369H7.61915V7.47163H0.70343V14.3873H7.61915V21.1556H14.5348V14.3873H21.4506V7.47163H14.5348ZM14.5348 14.2399H7.61915V7.62013H14.5348V14.2399Z"
                      fill="white"
                    />
                  </svg>
                  <h1 className="text-white font-semibold text-xl">Geld</h1>
                </div>
                <div className="flex flex-col mb-6 ml-8">
                  <h1 className="text-base-100 opacity-50">Cash</h1>
                  <h1 className="text-white md:text-3xl sm:text-2xl lg:text-4xl">
                    {cash}
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-1/3 w-1/3 rounded-2xl bg-white">
              <div className="flex flex-row gap-2  h-1/3 items-center mt-4 pb-4 border-b-[1px]">
                <span className="border-4 border-lime-500 rounded ml-6"></span>
                <h1 className="font-semibold ml-6">Your Income</h1>
              </div>
              <div className="flex flex-col justify-center ml-6 mr-6 mb-6 mt-5">
                <h1 className="md:text-3xl sm:text-2xl lg:text-4xl font-semibold">
                  1,200,000 †
                </h1>
                <h3 className="opacity-60">Your Income Amount.</h3>
                <div className="flex flex-row gap-1 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.5306 11.7806C15.461 11.8504 15.3783 11.9057 15.2872 11.9434C15.1962 11.9812 15.0986 12.0006 15 12.0006C14.9014 12.0006 14.8038 11.9812 14.7128 11.9434C14.6218 11.9057 14.539 11.8504 14.4694 11.7806L12.75 10.0603V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V10.0603L9.53063 11.7806C9.3899 11.9214 9.19903 12.0004 9 12.0004C8.80098 12.0004 8.61011 11.9214 8.46938 11.7806C8.32865 11.6399 8.24959 11.449 8.24959 11.25C8.24959 11.051 8.32865 10.8601 8.46938 10.7194L11.4694 7.71937C11.539 7.64964 11.6218 7.59432 11.7128 7.55658C11.8038 7.51884 11.9014 7.49941 12 7.49941C12.0986 7.49941 12.1962 7.51884 12.2872 7.55658C12.3783 7.59432 12.461 7.64964 12.5306 7.71937L15.5306 10.7194C15.6004 10.789 15.6557 10.8717 15.6934 10.9628C15.7312 11.0538 15.7506 11.1514 15.7506 11.25C15.7506 11.3486 15.7312 11.4462 15.6934 11.5372C15.6557 11.6283 15.6004 11.711 15.5306 11.7806Z"
                      fill="#84CC16"
                    />
                  </svg>
                  32% from last month.
                </div>
              </div>
            </div>
            <div className="h-1/3 w-1/3 rounded-2xl bg-white">
              <div className="flex flex-row gap-2  h-1/3 items-center mt-4 pb-4 border-b-[1px]">
                <span className="border-4 border-primary rounded ml-6"></span>
                <h1 className="font-semibold ml-6">Your Expenses</h1>
              </div>
              <div className="flex flex-col justify-center ml-6 mr-6 mb-6 mt-5">
                <h1 className="md:text-3xl sm:text-2xl lg:text-4xl font-semibold">
                  -1,200,000 †
                </h1>
                <h3 className="opacity-60">Your Expense Amount.</h3>
                <div className="flex flex-row gap-1 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 21.75C10.0716 21.75 8.18657 21.1782 6.58319 20.1068C4.97981 19.0355 3.73013 17.5127 2.99218 15.7312C2.25422 13.9496 2.06114 11.9892 2.43734 10.0979C2.81355 8.20655 3.74215 6.46927 5.10571 5.10571C6.46927 3.74215 8.20656 2.81355 10.0979 2.43734C11.9892 2.06114 13.9496 2.25422 15.7312 2.99218C17.5127 3.73013 19.0355 4.97981 20.1068 6.58319C21.1782 8.18657 21.75 10.0716 21.75 12C21.7473 14.585 20.7192 17.0634 18.8913 18.8913C17.0634 20.7192 14.585 21.7473 12 21.75ZM15.5306 12.2194C15.461 12.1496 15.3783 12.0943 15.2872 12.0566C15.1962 12.0188 15.0986 11.9994 15 11.9994C14.9014 11.9994 14.8038 12.0188 14.7128 12.0566C14.6217 12.0943 14.539 12.1496 14.4694 12.2194L12.75 13.9397V8.25C12.75 8.05109 12.671 7.86032 12.5303 7.71967C12.3897 7.57902 12.1989 7.5 12 7.5C11.8011 7.5 11.6103 7.57902 11.4697 7.71967C11.329 7.86032 11.25 8.05109 11.25 8.25V13.9397L9.53063 12.2194C9.3899 12.0786 9.19902 11.9996 9 11.9996C8.80098 11.9996 8.61011 12.0786 8.46938 12.2194C8.32864 12.3601 8.24958 12.551 8.24958 12.75C8.24958 12.949 8.32864 13.1399 8.46938 13.2806L11.4694 16.2806C11.539 16.3504 11.6217 16.4057 11.7128 16.4434C11.8038 16.4812 11.9014 16.5006 12 16.5006C12.0986 16.5006 12.1962 16.4812 12.2872 16.4434C12.3783 16.4057 12.461 16.3504 12.5306 16.2806L15.5306 13.2806C15.6004 13.211 15.6557 13.1283 15.6934 13.0372C15.7312 12.9462 15.7506 12.8486 15.7506 12.75C15.7506 12.6514 15.7312 12.5538 15.6934 12.4628C15.6557 12.3717 15.6004 12.289 15.5306 12.2194Z"
                      fill="#84CC16"
                    />
                  </svg>
                  32% from last month.
                </div>
              </div>
            </div>
          </div>
          {/* the graphs */}
          <div className="w-full flex flex-row pr-24 pl-24 gap-6">
            <div className="flex flex-col h-1/4 w-1/2 bg-white rounded-2xl mt-5">
              <div className="font-semibold text-md pr-6 pl-6 flex items-center pt-4 pb-4 border-b-[1px] border-base-300">
                <h1>Income - Expense</h1>
              </div>
              <div className="h-[300px]">
                <Bar
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    title: {
                      display: false,
                      text: "Orders Chart",
                    },
                    tooltips: {
                      mode: "index",
                      intersect: false,
                    },
                    hover: {
                      mode: "nearest",
                      intersect: true,
                    },
                    legend: {
                      labels: {
                        fontColor: "rgba(0,0,0,.4)",
                      },
                      align: "end",
                      position: "bottom",
                    },
                    scales: {
                      xAxes: [
                        {
                          display: false,
                          scaleLabel: {
                            display: true,
                            labelString: "Month",
                          },
                          gridLines: {
                            borderDash: [2],
                            borderDashOffset: [2],
                            color: "#84CC16",
                            zeroLineColor: "rgba(33, 37, 41, 0.3)",
                            zeroLineBorderDash: [2],
                            zeroLineBorderDashOffset: [2],
                          },
                        },
                      ],
                      yAxes: [
                        {
                          display: true,
                          scaleLabel: {
                            display: false,
                            labelString: "Money",
                          },
                          gridLines: {
                            borderDash: [2],
                            drawBorder: false,
                            borderDashOffset: [2],
                            color: "#F97316",
                            zeroLineColor: "#F97316",
                            zeroLineBorderDash: [2],
                            zeroLineBorderDashOffset: [2],
                          },
                        },
                      ],
                    },
                  }}
                  data={barData}
                />
              </div>
            </div>
            <div className="flex flex-col h-1/4 w-1/2  bg-white rounded-2xl mt-5">
              <div className="font-semibold text-md pr-6 pl-6 flex items-center pt-4 pb-4 border-b-[1px] border-base-300">
                <h1>Income - Expense</h1>
              </div>
              <div className="flex flex-row">
                <div className="h-[300px] flex items-center pb-3">
                  <Doughnut data={data} />
                </div>
                <div className="flex flex-col gap-6 mt-6 mb-6 w-full">
                  <div className="flex flex-row justify-between w-full pr-12">
                    <div className="flex flex-row gap-2 items-center">
                      <span className="border-4 border-[#1C64F2] rounded ml-6" />
                      <h1>Bills</h1>
                    </div>
                    <h1>300,000 ₮</h1>
                    <h1>13%</h1>
                  </div>
                  <div className="flex flex-row justify-between w-full pr-12">
                    <div className="flex flex-row gap-2 items-center">
                      <span className="border-4 border-[#F2901C] rounded ml-6" />
                      <h1>Clothing</h1>
                    </div>
                    <h1>300,000 ₮</h1>
                    <h1>13%</h1>
                  </div>
                  <div className="flex flex-row justify-between w-full pr-12">
                    <div className="flex flex-row gap-2 items-center">
                      <span className="border-4 border-[#E74694] rounded ml-6" />
                      <h1>Food</h1>
                    </div>
                    <h1>300,000 ₮</h1>
                    <h1>13%</h1>
                  </div>
                  <div className="flex flex-row justify-between w-full pr-12">
                    <div className="flex flex-row gap-2 items-center">
                      <span className="border-4 border-[#FDBA8C] rounded ml-6" />
                      <h1>Shopping</h1>
                    </div>
                    <h1>300,000 ₮</h1>
                    <h1>13%</h1>
                  </div>
                  <div className="flex flex-row  justify-between w-full pr-12">
                    <div className="flex flex-row gap-2 items-center">
                      <span className="border-4 border-[#16BDCA] rounded ml-6" />
                      <h1>Insurance</h1>
                    </div>
                    <h1>300,000 ₮</h1>
                    <h1>13%</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Records */}
          <div className="flex flex-col mr-24 ml-24 bg-white rounded-2xl mt-6">
            <div className="font-semibold text-md pr-6 pl-6 flex items-center pt-4 pb-4 border-b-[1px] border-base-300 mb-3">
              <h1>Income - Expense</h1>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

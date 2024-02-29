import Image from "next/image";
import { useState, useEffect } from "react";
export default function Dashboard() {
  const [cash, setCash] = useState(0);
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
          <Image
            src={"/favicon.ico"}
            width={30}
            height={24}
            className="flex-shrink-0"
          />
        </div>
      </div>
      <div className="w-screen h-screen bg-base-200 gap-6">
        <div className="flex flex-row w-1/4 mr-24 ml-24">
          <div className="h-1/3 w-full rounded-lg bg-primary">
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
                <h1 className="text-white font-semibold">Geld</h1>
              </div>
              <div className="flex flex-row mb-6">
                <h1>Cash</h1>
                <h1>{}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

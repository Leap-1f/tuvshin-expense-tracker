export default function Loading() {
  return (
    <div
      id="loader-container"
      className="bg-white w-screen h-screen flex justify-center items-center flex-col gap-12"
    >
      <div
        className="flex flex-row justify-center items-center gap-2"
        id="loader"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="44"
          viewBox="0 0 45 44"
          fill="none"
        >
          <path
            d="M29.7273 14.5887V0.081543H14.9042V14.5887H0.0810547V29.4118H14.9042V43.9189H29.7273V29.4118H44.5505V14.5887H29.7273ZM29.7273 29.0958H14.9042V14.9069H29.7273V29.0958Z"
            fill="#0166FF"
          />
        </svg>
        <h1 className="text-neutral text-4xl font-semibold mb-1">Geld</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <span className="loading bg-primary"></span>
        <h1 className="text-neutral">Please wait...</h1>
      </div>
    </div>
  );
}

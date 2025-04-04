import chroma from 'chroma-js';

export default function LoginComponent({ color, preview, previewSelected }) {
  const isLight = (colorReceived) => {
    if (
      chroma.valid(colorReceived) &&
      colorReceived.startsWith('#') &&
      colorReceived.length !== 5 &&
      colorReceived.length <= 7
    ) {
      return chroma(colorReceived).luminance() >= 0.5;
    }
  };

  let selectColor = previewSelected ? preview : color;
  let trueColor = isLight(selectColor) ? 'text-black' : 'text-white';

  return (
    <>
      <div className="flex flex-col h-[300px] gap-6 border border-zinc-200 shadow-lg rounded-lg px-5 py-12 bg-gray-100">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="pallete@gmail.com"
          className="border-1 border-zinc-300 rounded-lg p-1 bg-white"
        />
        <input
          type="password"
          name="pw"
          id="pw"
          placeholder="palette123"
          className="border-1 border-zinc-300 rounded-lg p-1 bg-white"
        />
        <div className="flex flex-col gap-1">
          <button
            className={`rounded-lg p-1 font-semibold hover:scale-110 duration-300 cursor-pointer ${trueColor}`}
            style={{ background: selectColor || '#000000' }}
          >
            Login
          </button>
          <button
            className={`rounded-lg p-1 font-semibold hover:scale-110 duration-300 cursor-pointer ${trueColor}`}
            style={{ background: selectColor || '#000000' }}
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}

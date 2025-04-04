import chroma from 'chroma-js';
import avatar from '../assets/avatar.webp';

export default function ChatBubble({ color, preview, previewSelected }) {
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
    <div className="flex flex-row gap-2">
      <img className="w-10 h-10" src={avatar} alt="" />
      <div
        style={{ background: selectColor || '#000000' }}
        className="w-[250px] h-[100px] rounded-r-lg rounded-bl-lg p-2 mt-5 shadow-lg"
      >
        <div className="flex flex-row gap-1 items-center">
          <h1 className={`text-md font-bold ${trueColor}`}>Oscar Riera</h1>
          <span className={`text-sm ${trueColor}`}>12:50</span>
        </div>
        <p className={`text-sm font-semibold my-2 ${trueColor}`}>
          I'm happy to help!
        </p>
        <span className={`text-sm ${trueColor}`}>Delivered</span>
      </div>
    </div>
  );
}

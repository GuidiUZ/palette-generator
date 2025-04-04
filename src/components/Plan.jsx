import checkWhite from '../assets/check-white.svg';
import checkBlack from '../assets/check-black.svg';
import chroma from 'chroma-js';

export default function Plan({ color, preview, previewSelected }) {
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
  let checkBgColor = isLight(selectColor) ? 'bg-black' : 'bg-white';
  let checkColor = isLight(selectColor) ? checkWhite : checkBlack;

  return (
    <div
      style={{ background: selectColor || '#000000' }}
      className="flex flex-col border-1 border-zinc-200 lg:w-[350px] px-5 py-12 rounded-lg"
    >
      <h1 className={`mb-5 text-lg font-bold ${trueColor}`}>Premium Plan</h1>
      <h1 className={`font-bold text-2xl mb-5 ${trueColor}`}>$50</h1>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-2">
          <span className={`${checkBgColor} rounded-2xl p-[1px]`}>
            <img className="w-5 h-5" src={checkColor} alt="" />
          </span>
          <span className={`${trueColor}`}>2 team members</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className={`${checkBgColor} rounded-2xl p-[1px]`}>
            <img className="w-5 h-5" src={checkColor} alt="" />
          </span>
          <span className={`${trueColor}`}>20GB Cloud storage</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className={`${checkBgColor} rounded-2xl p-[1px]`}>
            <img className="w-5 h-5" src={checkColor} alt="" />
          </span>
          <span className={`${trueColor}`}>Integration help</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className={`${checkBgColor} rounded-2xl p-[1px]`}>
            <img className="w-5 h-5" src={checkColor} alt="" />
          </span>
          <span className={`${trueColor}`}>Sketch Files</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className={`${checkBgColor} rounded-2xl p-[1px]`}>
            <img className="w-5 h-5" src={checkColor} alt="" />
          </span>
          <span className={`${trueColor}`}>API Access</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className={`${checkBgColor} rounded-2xl p-[1px]`}>
            <img className="w-5 h-5" src={checkColor} alt="" />
          </span>
          <span className={`${trueColor}`}>Complete documentation</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className={`${checkBgColor} rounded-2xl p-[1px]`}>
            <img className="w-5 h-5" src={checkColor} alt="" />
          </span>
          <span className={`${trueColor}`}>24/7 phone & email support</span>
        </div>
      </div>
    </div>
  );
}

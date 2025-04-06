import { Tooltip } from 'radix-ui';
import ComponentsColors from './ComponentsColors';
import toast, { Toaster } from 'react-hot-toast';
import '../index.css';
import chroma from 'chroma-js';
import { useState, useEffect } from 'react';

export default function Generator() {
  const [selectedColor, setSelectedColor] = useState('#f6b73c');
  const [debouncedColor, setDebouncedColor] = useState(selectedColor);
  const [previewSelected, setPreviewSelected] = useState(false);
  const [previewColor, setPreviewColor] = useState('');
  const [palette, setPalette] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedColor(selectedColor);
    }, 300);

    return () => clearTimeout(timeout);
  }, [selectedColor]);

  useEffect(() => {
    if (
      chroma.valid(debouncedColor) &&
      debouncedColor.startsWith('#') &&
      debouncedColor.length !== 5 &&
      debouncedColor.length <= 7
    ) {
      let generatedPalette = chroma
        .scale([
          chroma(debouncedColor).brighten(3),
          debouncedColor,
          chroma(debouncedColor).darken(3),
        ])
        .mode('lab')
        .colors(9);
      setPalette(generatedPalette);
    } else if (
      chroma.valid(debouncedColor) &&
      !debouncedColor.startsWith('#') &&
      debouncedColor.length !== 4 &&
      debouncedColor.length <= 7
    ) {
      let generatedPalette = chroma
        .scale([
          chroma(debouncedColor).brighten(3),
          debouncedColor,
          chroma(debouncedColor).darken(3),
        ])
        .mode('lab')
        .colors(9);
      setPalette(generatedPalette);
      setSelectedColor('#' + debouncedColor);
    } else {
      let generatedPaletteElse = chroma
        .scale([chroma('#000').brighten(3), '#000', chroma('#000').darken(3)])
        .mode('lab')
        .colors(9);
      setPalette(generatedPaletteElse);
    }
    console.log('effect 1');
  }, [debouncedColor]);

  const handleSelectedColor = (event) => {
    let newColor = event.target.value;
    setSelectedColor(newColor);
    setPreviewSelected(false);
  };

  //input text here:

  const handleInputColor = (event) => {
    let inputColor = event.target.value;
    setSelectedColor(inputColor);
    setPreviewSelected(false);
  };

  //clipboard handle

  const handleClipboard = async (color) => {
    await navigator.clipboard.writeText(color);
    setPreviewSelected(true);
    setPreviewColor(color);
    handleToast(color);
  };

  //toast

  const handleToast = (color) => toast(`Color: ${color} copied correctly!`);

  //random color

  const handleRandomColor = () => {
    setSelectedColor(chroma.random().hex());
    setPreviewSelected(false);
  };

  //export palette

  const handleExportPalette = async () => {
    let exportPalette = JSON.stringify(palette);
    await navigator.clipboard.writeText(exportPalette);
    return toast('Palette copied correctly!');
  };

  return (
    <>
      <div className="w-full h-full items-center">
        <h1 className="text-4xl font-bold text-center my-10">
          Palette Generator
        </h1>
        <div className="flex justify-center m-auto">
          <div className="w-[250px] flex flex-row border-1 border-zinc-400 rounded-lg p-1 items-center gap-2">
            <input
              onChange={handleSelectedColor}
              type="color"
              name="colorPicker"
              id="colorPicker"
              value={selectedColor}
            />
            <input
              className="bg-white"
              onChange={handleInputColor}
              type="text"
              name="colorName"
              id="colorName"
              placeholder="#000000"
              value={selectedColor}
            />
          </div>
        </div>

        <Tooltip.Provider>
          <div className="grid grid-flow-col grid-rows-3 gap-2 lg:gap-0 lg:flex lg:flex-row justify-center mt-20">
            {palette.map((color, index) => (
              <div className="flex flex-col text-center">
                <div
                  key={index}
                  className="w-20 h-20 mt-2 aspect-square rounded-s-2xl rounded-e-2xl shadow-2xs border-1 border-zinc-200 hover:scale-110 hover:duration-150"
                  style={{ background: color }}
                >
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <button
                        onClick={() => handleClipboard(color)}
                        className="w-full h-full cursor-pointer"
                      ></button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="TooltipContent font-semibold mb-2"
                        sideOffset={1}
                      >
                        Copy
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </div>
                <p className="font-mono text-gray-600 text-sm mt-2" key={color}>
                  {color}
                </p>
              </div>
            ))}
          </div>
        </Tooltip.Provider>

        <div className="flex mt-12 items-center justify-center gap-4">
          <button
            onClick={handleRandomColor}
            className="bg-black text-white p-2 rounded-sm cursor-pointer"
          >
            Random
          </button>
          <button
            onClick={handleExportPalette}
            className="bg-black text-white p-2 rounded-sm cursor-pointer"
          >
            Copy Palette
          </button>
        </div>

        <Toaster
          position="bottom-right"
          toastOptions={{ duration: 1000, style: { fontWeight: 'bold' } }}
        />
      </div>
      <ComponentsColors
        color={selectedColor}
        preview={previewColor}
        previewSelected={previewSelected}
      />
    </>
  );
}

import ChatBubble from './ChatBubble';
import LoginComponent from './LoginComponent';
import Plan from './Plan';

export default function ComponentsColors({ color, preview, previewSelected }) {
  return (
    <div className="min-h-screen mx-16">
      <h1 className="my-20 text-2xl font-semibold">Preview</h1>
      <div className="w-full h-full flex flex-col pb-12 xl:flex-row gap-16 lg:gap-52 justify-center items-center">
        <LoginComponent
          color={color}
          preview={preview}
          previewSelected={previewSelected}
        />
        <ChatBubble
          color={color}
          preview={preview}
          previewSelected={previewSelected}
        />
        <Plan
          color={color}
          preview={preview}
          previewSelected={previewSelected}
        />
      </div>
    </div>
  );
}

export interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <h1 className='my-2 text-5xl font-bold text-center text-purple-dark'>
        {text}
      </h1>
      <div className='h-1 w-80 opacity-50 my-0 py-0 rounded-t bg-gradient-to-r from-purple to-purple-darker'></div>
    </div>
  );
}

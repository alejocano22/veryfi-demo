export default function NotFoundErrorScreen() {
  return (
    <>
      <div className='h-screen bg-black flex flex-col items-center justify-center'>
        <h1 className='text-xl text-white mb-4'>{`404 | Page don't found`}</h1>
        <div className='h-10 w-10'>
          <img src='/images/veryfi-log.png'></img>
        </div>
      </div>
    </>
  );
}

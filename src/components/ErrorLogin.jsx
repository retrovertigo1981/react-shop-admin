import { useAuth } from '@hooks/useAuth';
const ErrorLogin = () => {
  const auth = useAuth();
  return (
    <>
      <div className="p-3 m-auto text-sm w-[50vw] h-20 absolute top-0 bottom-0 right-0 left-0 z-10 text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
        <div className=" flex justify-between ml-2 mr-2">
          <span className="font-medium">Error!</span>
          <button onClick={() => auth.setOpenError(false)}>X</button>
        </div>
        <p className=" text-center">{auth.errorMsn}</p>
      </div>
    </>
  );
};

export default ErrorLogin;

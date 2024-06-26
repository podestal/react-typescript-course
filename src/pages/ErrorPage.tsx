import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError()

  return (
    <div className='w-full min-h-[100vh] flex flex-col justify-center items-center gap-8'>
        <h1 className='text-4xl font-bold'>Ooops ...</h1>
        <p className='text-2xl'>Sorry, {isRouteErrorResponse(error) ? 'this page does not exist' : 'an unexpected error has ocurred.'}</p>
    </div>
  )
}

export default ErrorPage
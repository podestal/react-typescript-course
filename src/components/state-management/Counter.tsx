import useCounterStore from './Store';
import { Button } from '@tremor/react';

const Counter = () => {
  const {counter, increment, reset} = useCounterStore()

  return (
    <div className='flex flex-col w-full justify-center items-center gap-8 mt-10'>
        <p className='text-2xl' >Counter ({counter})</p>
        <div className='flex gap-4'>
            <Button
                onClick={() => increment()}
                color='blue'
            >
                Increment
            </Button>
            <Button
                onClick={() => reset()}
                color='blue'
            >
                Reset
            </Button>
        </div>
    </div>
  );
};

export default Counter;
import React from 'react';
import { Button } from '../../components/atoms';
import useHomeViewModel from './Home.viewModel';

export default function HomeView() {
  const { counter } = useHomeViewModel();

  return (
    <div>
      <h1>Home</h1>
      <div>Count:</div>
      <div>{counter.count}</div>

      <Button type="button" onClick={counter.increment}>
        Increment
      </Button>

      <Button type="button" onClick={counter.decrement}>
        Decrement
      </Button>

      <Button.Outlined type="button" onClick={counter.reset}>
        Reset
      </Button.Outlined>
    </div>
  );
}

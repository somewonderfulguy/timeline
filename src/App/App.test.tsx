// TODO: remove this file, it is just an example for future tests

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '~tests/test-utils';

import { App } from './App';

test('renders learn react link', async () => {
  render(<App />);
  await new Promise((resolve) => setTimeout(resolve, 500));
  // screen.debug();
});

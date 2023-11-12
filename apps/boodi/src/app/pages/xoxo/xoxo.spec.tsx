import { render } from '@testing-library/react';

import Xoxo from './xoxo';

describe('Xoxo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Xoxo />);
    expect(baseElement).toBeTruthy();
  });
});

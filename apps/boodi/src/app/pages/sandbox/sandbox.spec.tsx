import { render } from '@testing-library/react';

import Sandbox from './sandbox';

describe('Sandbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Sandbox />);
    expect(baseElement).toBeTruthy();
  });
});

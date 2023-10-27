import { render } from '@testing-library/react';

import SignInOrUpPopup from './sign-in-popup';

describe('SignInOrUpPopup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignInOrUpPopup />);
    expect(baseElement).toBeTruthy();
  });
});

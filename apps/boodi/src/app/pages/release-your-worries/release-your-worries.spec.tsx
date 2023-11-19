import { render } from '@testing-library/react';

import ReleaseYourWorries from './release-your-worries';

describe('ReleaseYourWorries', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReleaseYourWorries />);
    expect(baseElement).toBeTruthy();
  });
});

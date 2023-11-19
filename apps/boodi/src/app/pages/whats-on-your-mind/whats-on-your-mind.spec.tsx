import { render } from '@testing-library/react';

import WhatsOnYourMind from './whats-on-your-mind';

describe('WhatsOnYourMind', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WhatsOnYourMind />);
    expect(baseElement).toBeTruthy();
  });
});

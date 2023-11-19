import { render } from '@testing-library/react';
import NotFound404 from './not-found-404';

describe('NotFound404', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotFound404 />);
    expect(baseElement).toBeTruthy();
  });
});

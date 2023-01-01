import { render } from '@testing-library/react';

import MaktabUi from './maktab-ui';

describe('MaktabUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MaktabUi />);
    expect(baseElement).toBeTruthy();
  });
});

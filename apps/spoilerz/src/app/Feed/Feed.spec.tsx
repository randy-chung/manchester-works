import React from 'react';
import { render } from '@testing-library/react';

import Feed from './Feed';

describe('Feed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Feed />);

    expect(baseElement).toBeTruthy();
  });
});

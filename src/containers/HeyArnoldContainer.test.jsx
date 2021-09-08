import React from 'react';
import { screen, render} from '@testing-library/react';

import HeyArnoldContainer from './HeyArnoldContainer';

describe('HeyArnoldContainer', () => {
  it('renders lists of characters', async () => {
    render(<HeyArnoldContainer />);

    screen.getByText('HHHEEYYY!');
  });
});

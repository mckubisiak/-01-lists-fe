import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HeyArnoldContainer from './HeyArnoldContainer';

describe('HeyArnoldContainer', () => {
  it('renders lists of characters', async () => {
    render(
      <MemoryRouter>
        <HeyArnoldContainer />
      </MemoryRouter>
    );

    screen.getByText('Loadin...!');

    const ul = await screen.findByRole('list', { name: 'characters' });

    console.log(ul);

    expect(ul).toMatchSnapshot();
  });
});

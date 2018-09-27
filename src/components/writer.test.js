import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Writer from './writer';

describe('<Landing />', () => {
  it('renders without crashing', () => {
    <MemoryRouter>
      <Writer />
    </MemoryRouter>
  })
})

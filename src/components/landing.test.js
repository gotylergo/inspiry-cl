import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Landing from './landing';

describe('<Landing />', () => {
  it('renders without crashing', () => {
    <MemoryRouter>
      <Landing />
    </MemoryRouter>;
  });
});

import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Dashboard from './dashboard';

describe('<Landing />', () => {
  it('renders without crashing', () => {
    <MemoryRouter>
      <Dashboard />
    </MemoryRouter>;
  });
});

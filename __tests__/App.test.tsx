import React from 'react';
import { render, fireEvent } from '@testing-library/react-native'
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

it('renders correctly', () => {
  render(<App />);
});

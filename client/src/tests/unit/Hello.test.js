import { render, screen } from '@testing-library/react';
import Hello from '../../components/Hello';
test('renders greeting', () => { render(<Hello name='Ken' />); expect(screen.getByText('Hello, Ken!')).toBeInTheDocument(); });
import { describe, expect, it } from 'vitest';
import App from '../../../presentation/App';
import { render, screen } from '@testing-library/react';

describe('Render App page', () => {
  it('Loads and displays title', async () => {
    render(<App />);

    const titleElement = await screen.getByRole('heading', { name: /Shortlify app/i });
    expect(titleElement).toBeInTheDocument();
  });
});

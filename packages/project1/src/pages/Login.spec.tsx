import {
  act,
  fireEvent,
  logRoles,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import Login from './Login';
import userEvent from '@testing-library/user-event';
import { debug } from 'jest-preview';

function flushMicrotasks(): Promise<void> {
  return act(() => Promise.resolve());
}

it('should have the submit button disabled initially', async () => {
  act(() => {
    render(<Login />);
  });

  await waitFor(() => {
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeDisabled();
  });
});

it('should have username and password in error state when nothing is typed', async () => {
  act(() => {
    render(<Login />);
  });

  const usernameError = screen.getByText('Please enter a username');
  const passwordError = screen.getByText('Enter the correct password');

  await waitFor(() => {
    expect(usernameError).toBeVisible();
    expect(passwordError).toBeVisible();
  });
});

it('should TODO', async () => {
  render(<Login />);
  await flushMicrotasks();

  const textboxes = screen.getAllByRole('textbox');
  const usernameField = textboxes[0];
  const passwordField = textboxes[1];

  fireEvent.change(usernameField, {
    target: {
      value: 'claudio',
    },
  });

  await flushMicrotasks();

  fireEvent.change(passwordField, {
    target: {
      // value: 'synthwave-1984',
      value: 'synthwave',
    },
  });

  const usernameError = screen.getByText('Please enter a username');
  const passwordError = screen.getByText('Enter the correct password');

  await waitFor(() => {
    expect(usernameError).not.toBeVisible();
    expect(passwordError).not.toBeVisible();
  });
});

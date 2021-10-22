import { render, screen } from '@testing-library/react'

import { AnswerForm } from '../AnswerForm';

describe('AnswerForm', () => {
  it('should have a textarea', async () => {
    const form = render(<AnswerForm />);
    const textArea = screen.getByTestId("answer-input");
    
    expect(form).toBeTruthy();
    expect(textArea).toBeInTheDocument();
  });
});
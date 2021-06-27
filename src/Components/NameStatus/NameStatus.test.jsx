import React from 'react';
import { render, screen } from '@testing-library/react';
import { NameStatus } from './NameStatus';


test('Renders Ready NameStatus', () => {
  render(<NameStatus 
    name = "Bob"
    ready = {true}
  />);

  const nameStatusText = screen.queryByTestId("name-status-text")
  expect(nameStatusText).toBeInTheDocument()
  // expect(nameStatusText!.textContent).toEqual("Bob")

  // const nameStatusIcon: HTMLElement | null = screen.queryByTestId("name-status-icon")
  // expect(nameStatusIcon).toBeInTheDocument()
  // const style = getComputedStyle(nameStatusIcon!)
  // console.log(style)
  // expect(getComputedStyle(nameStatusIcon)).toEqual("#C30000")
});

test('Renders Non-Ready NameStatus', () => {
  render(<NameStatus 
    name = "Hannah"
    ready = {false}
  />);

  const nameStatusText = screen.queryByTestId("name-status-text") || document.createElement('div')
  expect(nameStatusText).toBeInTheDocument()
  expect(nameStatusText.textContent).toEqual("Hannah")
  // const nameStatusIcon: HTMLElement = screen.queryByTestId("name-status-icon") || document.createElement('div')
  // expect(nameStatusIcon).toBeInTheDocument()  
  // expect(getComputedStyle(nameStatusIcon)).toEqual("#C30000")
});
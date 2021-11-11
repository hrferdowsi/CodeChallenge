import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe("App Component", () => {

    test('renders App ', () => {
        render(<App/>);
        // screen.debug()
        // const linkElement = screen.getByText(/hotels in Sydney/i);
        // expect(linkElement).toBeDefined();
    });
})

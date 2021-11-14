import React from 'react';
import {render, screen} from '@testing-library/react';
import App, {sorter} from './App';

describe("sorter function", () => {
    describe("when order is high to low", () => {
        const order: SearchOrder = "hl";

        test('should return positive when price1 < price2', () => {
            const hotels = {
                hotel1: {offer: {displayPrice: {amount: 20}}} as Accommodation,
                hotel2: {offer: {displayPrice: {amount: 40}}} as Accommodation
            }
            expect((sorter(order))(hotels.hotel1, hotels.hotel2)).toBeGreaterThan(0)
        })

        test('should return negative when price1 > price2', () => {
            const hotels = {
                hotel1: {offer: {displayPrice: {amount: 100}}} as Accommodation,
                hotel2: {offer: {displayPrice: {amount: 40}}} as Accommodation
            }
            expect((sorter(order))(hotels.hotel1, hotels.hotel2)).toBeLessThan(0)
        })

        test('should return the 0 when price1 = price2', () => {
            const hotels = {
                order: "hl" as SearchOrder,
                hotel1: {offer: {displayPrice: {amount: 300}}} as Accommodation,
                hotel2: {offer: {displayPrice: {amount: 300}}} as Accommodation
            }
            expect((sorter(order))(hotels.hotel1, hotels.hotel2)).toEqual(0)
        })
    })

    describe("when order is low to high", () => {
        const order: SearchOrder = "lh";

        test('should return the negative when price1 < price2', () => {
            const hotels = {
                hotel1: {offer: {displayPrice: {amount: 20}}} as Accommodation,
                hotel2: {offer: {displayPrice: {amount: 40}}} as Accommodation
            }
            expect((sorter(order))(hotels.hotel1, hotels.hotel2)).toBeLessThan(0)
        })

        test('should return the positive when price1 > price2', () => {
            const hotels = {
                hotel1: {offer: {displayPrice: {amount: 100}}} as Accommodation,
                hotel2: {offer: {displayPrice: {amount: 40}}} as Accommodation
            }
            expect((sorter(order))(hotels.hotel1, hotels.hotel2)).toBeGreaterThan(0)
        })

        test('should return the 0 when price1 = price2', () => {
            const hotels = {
                order: "hl" as SearchOrder,
                hotel1: {offer: {displayPrice: {amount: 100}}} as Accommodation,
                hotel2: {offer: {displayPrice: {amount: 100}}} as Accommodation
            }
            expect((sorter(order))(hotels.hotel1, hotels.hotel2)).toEqual(0)
        })
    })
})

describe("App Component", () => {
    test('renders App ', () => {
        render(<App/>);
        const linkElement = screen.getByText(/hotels in Sydney/i);
        expect(linkElement).toBeDefined();
    });
})

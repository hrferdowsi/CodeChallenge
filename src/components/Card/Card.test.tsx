import React from 'react';
import {mount} from 'enzyme';
import Card from './Card';
import {cardMockData} from './cardMockData';


import resetAllMocks = jest.resetAllMocks;

let data: Accommodation = cardMockData;

describe("Card Component", () => {
    beforeEach(() => {
        resetAllMocks()
    })
    const tree = mount(<Card {...{data}}/>)
    test('should match the snapshot without crash', () => {
        expect(tree).toMatchSnapshot();
    })

    test("should contain CircleSharpIcon", () => {
        const ratingIcon = tree.find('RatingItem')
        expect(ratingIcon.find('[data-testid="CircleSharpIcon"]').exists()).toBeTruthy()
    })

    test("should check title link is available and contains href ", () => {
        const title = tree.find('[data-testid="property_title"]').find('a')
        expect(title.prop('href')).toEqual('#')
    })


    test("should show 'Free cancellation' if cancellationType=FREE_CANCELLATION", () => {
        const cancellationText = tree.find('[data-testid="cancellation"]').find("p").text();
        expect(cancellationText).toEqual("Free cancellation")
    })

    test("should show Saving $ if offer exists", () => {
        const savings = {
            amount: 55,
            currency: "AUD"
        }

        data = {
            ...cardMockData,
            offer: {
                ...cardMockData.offer,
                savings
            }
        }
        const container = mount(<Card {...{data}}/>)
        const savingAmount = container.find("[data-testid='offer_saving']").find('h6').text()
        expect(savingAmount.includes(`${savings.amount}`)).toBeTruthy();
    })
})

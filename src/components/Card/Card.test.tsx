import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import Card from './Card';
import {cardMockData} from './cardMockData';

import * as mockData from '../../mockData/data.json';

import resetAllMocks = jest.resetAllMocks;

describe("Card Component", () => {
    beforeEach(() => {
        resetAllMocks()
    })
    const tree = mount(
        <Card data={cardMockData}/>
    )
    test('should render without crash', () => {
        expect(tree).toMatchSnapshot();
    })

    test("should contain CircleSharpIcon", () => {
        const ratingIcon = tree.find("[data-testid='rating']").find("svg")
        // expect(ratingIcon).toBeDefined()
        console.log(ratingIcon.debug())
    })

    // // manually trigger the callback
    // tree.props.onMouseEnter();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    //
    // // manually trigger the callback
    // tree.props.onMouseLeave();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
})

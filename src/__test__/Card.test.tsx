import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import Card from '../components/Card';
import {cardMockData} from '../utils/TestData/CardMockData';

import * as mockData from '../utils/data.json';

import resetAllMocks = jest.resetAllMocks;

describe("Card Component", () => {
    beforeEach(() => {
        resetAllMocks()
    })

    test('should render without crash', () => {

        const component = mountWithTheme(<Card data={cardMockData}/>)
        expect(component).toMatchSnapshot();
    })

    test("should contain rating_circle", () => {

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

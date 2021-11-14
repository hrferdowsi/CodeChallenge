import React from 'react';
import {mount} from 'enzyme';
import Header from './Header';


import resetAllMocks = jest.resetAllMocks;

let props = {
    totalResults: 5,
    order: "lh" as SearchOrder,
    onOrderChange: jest.fn()
}

describe("Header Component", () => {
    beforeEach(() => {
        resetAllMocks()
    })
    const tree = mount(<Header {...props}/>)

    test("should trigger onChange when select Price High-Low", () => {

    })

})
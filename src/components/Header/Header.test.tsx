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

    test("should match the snapshot", () => {
        expect(tree).toMatchSnapshot();
    })

    test("should contain the totalResults in the document", () => {
        const container = tree.find('[data-testid="totalResults"]').find('h6')
        expect(container.text()).toEqual(`${props.totalResults} hotels in Sydney`)
    })

    test("should check logo's link is available and contains href ", () => {
        const logoContainer = tree.find('a')
        expect(logoContainer.prop('href')).toEqual('#')
    })

    describe("sort selector", () => {
        beforeEach(() => {
            resetAllMocks()
        })

        test("should match the label", () => {
            const labelContainer = tree
                .find('[data-testid="selector"]')
                .find({role: "button"})
                .find("div");
            expect(labelContainer.text()).toEqual("Price Low-High")
        })

        test("should contain 'Price High-Low' item", async () => {
            await tree
                .find('[data-testid="selector"]')
                .find({role: "button"})
                .find('div')
                .simulate("mousedown", {button: 0});
            tree.update();
            const hlOption = tree
                .find('[data-testid="selector"]')
                .find('[data-value="hl"]')
                .find('[role="option"]')
                .find("li")
            expect(hlOption.text()).toEqual("Price High-Low")
        })

        test("should call 'onOrderChange' when selected 'Price High-Low' item", async () => {
            await tree
                .find('[data-testid="selector"]')
                .find({role: "button"})
                .first()
                .simulate("mousedown", {button: 0});
            tree.update();
            await tree
                .find('[data-testid="selector"]')
                .find('[data-value="hl"]')
                .find('[role="option"]')
                .first()
                .simulate("click",{ target: {value: "hl"} })
            expect(props.onOrderChange).toHaveBeenCalledTimes(1)
        })
    })
})

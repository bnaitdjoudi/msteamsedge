import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { TestSkilsTabRemove } from "../TestSkilsTabRemove";

describe("TestSkilsTabRemove Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<TestSkilsTabRemove />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<TestSkilsTabRemove />);
        const divResult = component.containsMatchingElement(<div>You"re about to remove your tab...</div>);

        expect(divResult).toBeTruthy();
    });
});

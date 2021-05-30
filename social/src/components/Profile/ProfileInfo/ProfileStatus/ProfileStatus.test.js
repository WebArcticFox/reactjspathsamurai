import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer"
import {act} from "@testing-library/react";

describe("ProfileStatus component", () => {
    test('status from props', () => {
        let component = create(<ProfileStatus status="Test status" />)
        let instance = component.getInstance()
        expect(instance.state.status).toBe("Test status")
    });

    test('status p in html', () => {
        let component = create(<ProfileStatus status="Test status" />)
        let root = component.root
        let element = root.findByType("p")
        expect(element.props.className.includes("status")).toBe(true)
    });

    test('status span current text', () => {
        let component = create(<ProfileStatus status="Test status" />)
        let root = component.root
        let element = root.findByType("p")
        expect(element.props.children.includes("Test status")).toBe(true)
    });

    test('status dont show input', () => {
        let component = create(<ProfileStatus status="Test status" />)
        let root = component.root

        expect(() => {
            let element = root.findByType("input")
        }).toThrow();
    });

    test('Show input in EditMode', () => {
        let component = create(<ProfileStatus status="Test status" />)
        let root = component.root
        let element = root.findByType("p")
        element.props.onDoubleClick();
        let elementInput = root.findByType("input")
        expect(elementInput.props.value).toBe("Test status")
    });

    test('Callback to be called', () => {
        const mockCallBack = jest.fn();
        let component = create(<ProfileStatus status="Test status" updateStatus={mockCallBack} />)
        let instance = component.getInstance()
        instance.deActivateEditMode()
        expect(mockCallBack.mock.calls.length).toBe(1)
    });
})
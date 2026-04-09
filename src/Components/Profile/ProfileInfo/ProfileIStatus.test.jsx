import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfileStatus from "./ProfileIStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="IT camasutra" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("IT camasutra");
    });


    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="IT camasutra" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation <input> should be displayed", () => {
        const component = create(<ProfileStatus status="IT camasutra" />);
        const root = component.root;
        let input = root.findByType("input");
        expect(input).not.toBeNull();
    });

    test("after creation <span> should contain correct status", () => {
        const component = create(<ProfileStatus status="IT camasutra" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("IT camasutra");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="IT camasutra" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("IT camasutra");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="IT camasutra" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

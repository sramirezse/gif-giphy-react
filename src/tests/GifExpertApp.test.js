import React from 'react';
import { GifExpertApp } from "../GifExpertApp";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";


describe('Pruebas en <GifExpertApp />',()=>{
    test('Snapshot', ()=>{
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();


    });
});
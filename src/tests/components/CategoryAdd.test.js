import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { CategoryAdd } from "../../components/CategoryAdd";



describe('Pruebas en <CategoryAd />', () => {
    const setCategories = jest.fn();
    let wrapper;
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<CategoryAdd setCategories={setCategories} />);

    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola';
        input.simulate('change', { target: { value: value } });
        expect(wrapper.find('p').text().trim()).toBe(value)
    });
    test('no debe de postear información con submit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });
});
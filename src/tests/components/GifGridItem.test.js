import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem></GifGridItem>', ()=>{
    const title = 'Hola soy gokú';
    const url = 'https://localhost';
    const giphyUrl = 'URL';
    const className  = 'animate_flip';
    const wrapper = shallow(<GifGridItem title={title} url={url} giphyUrl={giphyUrl} />);
    
    test('Debe de mostrar el componente correctamente', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un parrafo en title', ()=>{
        const h5 = wrapper.find('h5');
        expect( h5.text() ).toBe(title);
    });

    test('Debe tener la imagen igual al url y alt de los props', ()=>{
        const img = wrapper.find('img');
        // console.log(img.props().src);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe tener animate__flip', ()=>{
        const div = wrapper.find('#divprincipal');
        const className = div.prop('className');
        expect(className.includes('animate__flip')).toBe(true)
    });

});
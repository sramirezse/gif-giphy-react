import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', ()=>{
    const category = 'Hola';
    
    test('Crear el snapshot', ()=>{
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de mostrar items cuando se cargan images useFetchGifs', ()=>{
        const gifs = [{
            id: 1,
            title: 'img.title',
            url: 'http://url.com/img.jpg',
            giphyUrl: 'http://url.com/img.jpg'
        }];
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}  />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('#loadingDiv').exists()).toBe(true);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});
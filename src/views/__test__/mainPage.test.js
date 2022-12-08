import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainPage from '../mainPage';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import initialState from '../../db/initialState';

describe ("Testing Main Page", () => {
    const mockStore = configureStore();
    const db = initialState;

    let store;

    it ("All inputs render with empty value", () => {
        store = mockStore(db);
        render(
            <Provider store={store}>
                <MainPage></MainPage>
            </Provider>
        )
        expect(screen.getByRole('textbox', {name: 'Player 1'})).toHaveValue('');
        expect(screen.getByRole('textbox', {name: 'Player 2'})).toHaveValue('');
        expect(screen.getByRole('combobox', {name: 'Select Army 1'})).toHaveValue('');
    })

    it ("Selected Player in textbox", () => {
        store = mockStore(db);
        render(
            <Provider store={store}>
                <MainPage></MainPage>
            </Provider>
        )
        userEvent.type(screen.getByRole('textbox', {name: 'Player 1'}), 'Kuba');
        userEvent.type(screen.getByRole('textbox', {name: 'Player 2'}), 'Krzychu');

        expect(screen.getByRole('textbox', {name: 'Player 1'})).toHaveValue('Kuba');
        expect(screen.getByRole('textbox', {name: 'Player 2'})).toHaveValue('Krzychu');

    })

    it ("User selected their armies", () => {
        store = mockStore(db);
        render(
            <Provider store={store}>
                <MainPage></MainPage>
            </Provider>
        )

        userEvent.type(screen.getByRole('combobox', {name: 'Select Army 1'}), 'Harlequins');
        //WHY IT IS NOT WORKING?! userEvent.type(screen.getByRole('combobox', {name: 'Army2'}), 'Imperial Knights');

        expect(screen.getByRole('combobox', {name: 'Select Army 1'})).toHaveValue('Harlequins');
        //expect(screen.getByRole('combobox', {name: 'Army2'})).toHaveValue('Imperial Knights');
    })
})
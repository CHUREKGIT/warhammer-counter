import GameCounter from '../GameCounter';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import userEvent from "@testing-library/user-event";
import {within} from '@testing-library/dom';



describe ("Testing Main Page", () => {
    const mockStore = configureStore();
    const db = {
        player1: 'Kuba',
        player1SelectedArmy: 'Harlequins',
        player2: 'Krzychu',
        player2SelectedArmy: 'Imperial Knights',
        player1SelectedMissions: ["Assasination", "HQL: A DEADLY PERFOMANCE", "Abhor The Withch", "placeholder", "placeholder"],
        player2SelectedMissions: ["Bring it Down", "AC: MIGHT OF TERRA", "placeholder", "Behind enemy Lines", "placeholder"]
    };

    let store; 

    it ("Render proper content from the state", () => {
        store = mockStore(db);
        render(
            <Provider store={store}>
                <GameCounter></GameCounter>
            </Provider>
        )
        expect(screen.getByRole('heading', {name: 'Kuba'})).toBeDefined();
        expect(screen.getByRole('heading', {name: 'Krzychu'})).toBeDefined();
        expect(screen.getByText(/assasination/i)).toBeDefined();
        expect(screen.getByText(/abhor the withch/i)).toBeDefined();
        expect(screen.getByText(/bring it down/i)).toBeDefined();
        expect(screen.getByText(/ac: might of terra/i)).toBeDefined();
    })
    it ("Buttons increase score for proper player", () => {
        store = mockStore(db);
        render(
            <Provider store={store}>
                <GameCounter></GameCounter>
            </Provider>
        )
        const button = screen.getByTestId('button-increase-Kuba-Primary Score')
        userEvent.click(button)
        const view = screen.getByTestId('badge-counter-Kuba-Primary Score');
        expect(within(view).getByText(/1/i)).toBeDefined();
    })
    it ("WTC scorer will update", () => {
        store = mockStore(db);
        render(
            <Provider store={store}>
                <GameCounter></GameCounter>
            </Provider>
        )
        const button = screen.getByTestId('button-reduce-undefined-Behind enemy Lines')
        let i = 0;
        while (i <7){
            userEvent.click(button)
            i++;
        }
         //Why now multiple clicks are not visible?
        expect(screen.getByRole('heading', {  name: /10\-10/i})).toBeDefined();
    })


})
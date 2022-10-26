import MissionsPage from "../Missions";
import configureStore from 'redux-mock-store';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {within} from '@testing-library/dom'
import {Provider} from 'react-redux';
import userEvent from "@testing-library/user-event";
//import { purgeTheEnemyMissionsOrganizer } from './utils/purgeTheEnemyMissionsOrganizer';

describe ("Testing Missions page", () => {
    const mockStore = configureStore();
    const db = {
        player1: 'Kuba',
        player1SelectedArmy: 'Harlequins',
        player2: 'Krzychu',
        player2SelectedArmy: 'Imperial Knights'
    };

    let store;

    it ("Placeholders renders with players names", () => {
        store = mockStore(db);
        render(
            <Provider store={store}>
                <MissionsPage></MissionsPage>
            </Provider>
        )
        expect(screen.getByRole('combobox', {name: "Kuba's Purge The Enemy"})).toHaveValue('');
        expect(screen.getByRole('combobox', {name: "Krzychu's Purge The Enemy"})).toHaveValue('');
    })
    it('Autocomplete should display proper value for input', async() => {
        store = mockStore(db);
        render(
            <Provider store={store}>
                <MissionsPage></MissionsPage>
            </Provider>
        )
        const autocomplete = screen.getByTestId('autocomplete-purge');
        const input = within(autocomplete).getByRole('combobox')
        userEvent.click(input)  
        fireEvent.change(input, { target: { value: 'b' } })
        fireEvent.keyDown(autocomplete, { key: 'ArrowDown' })
        fireEvent.keyDown(autocomplete, { key: 'Enter' })
        expect(input).toHaveValue('Bring it Down')
      })
    it ('Autocomplete renders all Purge the enemy missions for Harlequins players', () => {
        store = mockStore(db);
        render(
            <Provider store={store}>
                <MissionsPage></MissionsPage>
            </Provider>
        )
        const autocomplete = screen.getByTestId('autocomplete-nomercy');
        const input = within(autocomplete).getByRole('combobox');
        userEvent.click(input)
        fireEvent.keyDown(autocomplete, { key: 'ArrowDown' })
        fireEvent.keyDown(autocomplete, { key: 'Enter' })
        expect(input.value).toBe('Grind Them Down')
        userEvent.click(input)
        fireEvent.keyDown(autocomplete, { key: 'ArrowDown' })
        fireEvent.keyDown(autocomplete, { key: 'Enter' })
        expect(input.value).toBe('No Prosioners')
        userEvent.click(input)
        fireEvent.keyDown(autocomplete, { key: 'ArrowDown' })
        fireEvent.keyDown(autocomplete, { key: 'Enter' })
        expect(input.value).toBe('HQL: A DEADLY PERFORMANCE')
    })
})

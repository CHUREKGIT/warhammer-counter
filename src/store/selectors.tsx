import { State } from './state';
import { useSelector } from 'react-redux';

export const useArmies = () => useSelector((state: State) => state.armies)
export const usePlayer = (player:string) => useSelector((state: State) => state[player]);
export const useArmyPlayer = (playerArmy:string) => useSelector((state: State) => state[playerArmy])
export const usePlayerMissions = (playerSelectedMission:string) => useSelector((state: State) => (state[playerSelectedMission]))
export const usePlayerFilteredMissions = (player: string) => (usePlayerMissions(player) as string[]).filter((word: string) => word !== 'placeholder')








import {writable} from "svelte/store";
import { persisted } from "svelte-persisted-store";

const defaults = {
    grid: true,
    fluid: true,
    col12: true,
    col14: true,
    col16: true,
    col18: true,
    full: true,
    minCardWidth: '240px'
};

export const settings = persisted('skwt.settings', defaults, {storage: 'session'});

export function reset() {
    settings.set(defaults);
}
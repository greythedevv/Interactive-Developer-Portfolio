import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

const initialTheme: Theme =
	browser && localStorage.getItem('theme') === 'dark'
		? 'dark'
		: 'light';

export const theme = writable<Theme>(initialTheme);

theme.subscribe((val: Theme) => {
	if (browser) {
		document.documentElement.dataset.theme = val;
		localStorage.setItem('theme', val);
	}
});
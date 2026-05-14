// src/lib/stores/theme.js
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const saved = browser ? localStorage.getItem('theme') : 'dark';
export const theme = writable(saved || 'dark');

theme.subscribe(val => {
  if (browser) localStorage.setItem('theme', val);
});
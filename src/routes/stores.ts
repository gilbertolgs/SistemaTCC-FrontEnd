import type DadosAlert from '$model/DadosAlert';
import User from '$model/User';
import { readable, writable, type Writable } from 'svelte/store';

export const pageName = "SGTCC";
export const apiRoute = "https://localhost:7009/api/";

export const connectionError = writable(200);

export const storeConvites = writable([]);

export const emptyUser = new User(0, 0, "", "", "", "", "", "");
let user = emptyUser;

export const storeLogin: Writable<User> = writable(user);

export const storeAlerts: Writable<DadosAlert[]> = writable([]);
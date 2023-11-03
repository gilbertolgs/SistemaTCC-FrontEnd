import User from '$model/User';
import { readable, writable, type Writable } from 'svelte/store';

export const pageName = "SGTCC";
export const apiRoute = "https://localhost:7009/api/";

export const connectionError = writable(200);

export const storeConvites = writable([]);

let user = new User(0, 0, "", "", "", "", 0, "");

export const storeLogin: Writable<User> = writable(user);
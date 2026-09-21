import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Firebase configuration for IEEE RMK 2028
const firebaseConfig = {
  databaseURL: 'https://ieee-rmk-2028-default-rtdb.firebaseio.com/'
};

// Initialize Firebase App safely without re-initializing
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Export Firebase Realtime Database instance
export const db = getDatabase(app);

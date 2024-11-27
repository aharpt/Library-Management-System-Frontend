import { create } from 'zustand';
import { persist } from 'zustand/middleware'

interface UserState {
    isLoggedIn: boolean,
    toggleIsLoggedIn: () => void
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            isLoggedIn: false,
            toggleIsLoggedIn: () => set(state => ({ isLoggedIn: !state.isLoggedIn}))
        }),
        {
            name: 'user-storage',
        }
    )
);
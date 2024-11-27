import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserState {
  isLoggedIn: boolean
  username: string | null
  id: number
  toggleIsLoggedIn: () => void
  setUsername: (username : string) => void
  setId: () => void
}

export const useUserStore = create<UserState>()(
    persist(
      (set) => ({
        isLoggedIn: false,
        username: null,
        id: 1,
        toggleIsLoggedIn: () => set((state) => ({...state, isLoggedIn: !state.isLoggedIn })),
        setUsername: (username : string) => set((state) => ({...state, username,})),
        setId: () => set((state) => ({...state, id: state.id++}))
      }),
      {
        name: 'user-storage',
      },
    ),
);
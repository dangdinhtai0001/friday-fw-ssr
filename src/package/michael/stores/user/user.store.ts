import { create } from 'zustand';
import { State, Action} from './user.types';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useUserStore = create<State & Action>()(
    persist((set) => ({
        // name: 'John Doe',
        name: 'ByeWind',
        avatarUrl: 'https://bit.ly/dan-abramov',

        updateName: (name: string) => set({ name }),
        updateAvatarUrl: (avatarUrl: string) => set({ avatarUrl }),
    }), {
        name: 'user-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    })
);
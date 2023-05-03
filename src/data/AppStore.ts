import { create } from 'zustand'
import { shallow } from 'zustand/shallow'
import { Vector2 } from 'three'

interface AppStoreState {
    cursor: Vector2,
    scrollUI: number
}

export const useAppStore = create<AppStoreState>((set) => ({
    cursor: new Vector2(0, 0),
    scrollUI: 0
}))

export function useAppStoreShallow<T>(selector: (state: AppStoreState) => T) {
    return useAppStore<T>(selector, shallow)
}
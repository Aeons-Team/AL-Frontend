import { create } from 'zustand'
import { shallow } from 'zustand/shallow'
import { Vector2, Vector3 } from 'three'

interface AppStoreState {
    cursor: Vector2,
    scrollCanvas: number,
    pull: boolean,
    pullPoint: Vector3
}

export const useAppStore = create<AppStoreState>((set) => ({
    cursor: new Vector2(0, 0),
    scrollCanvas: 0,
    pull: false,
    pullPoint: new Vector3(0, 0, 0)
}))

export function useAppStoreShallow<T>(selector: (state: AppStoreState) => T) {
    return useAppStore<T>(selector, shallow)
}
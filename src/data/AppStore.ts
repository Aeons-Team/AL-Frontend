import { create } from 'zustand'
import { shallow } from 'zustand/shallow'
import { Vector2, Vector3 } from 'three'
import LocomotiveScroll from 'locomotive-scroll'

interface AppStoreState {
    cursor: Vector2,
    scroll: LocomotiveScroll | null,
    scrollCanvas: number,
    scrollFeatures: number,
    pull: boolean,
    pullPoint: Vector3,
    navState: number
}

export const useAppStore = create<AppStoreState>(() => ({
    cursor: new Vector2(0, 0),
    scroll: null,
    scrollCanvas: 0,
    scrollFeatures: 0,
    pull: false,
    pullPoint: new Vector3(0, 0, 0),
    navState: 0
}))

export function useAppStoreShallow<T>(selector: (state: AppStoreState) => T) {
    return useAppStore<T>(selector, shallow)
}
import { create } from 'zustand'
import { shallow } from 'zustand/shallow'
import { Vector2 } from 'three'

interface AppStoreState {
    cursor: Vector2
}

export const useAppStore = create<AppStoreState>((set) => ({
    cursor: new Vector2(0, 0)
}))

export const useAppStoreShallow = (selector: (state: AppStoreState) => AppStoreState) => useAppStore(selector, shallow)
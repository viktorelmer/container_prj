import { IColorConfig } from "./types"

export const NAVIGATION_LIST: Array<string> = [
    'Active Listings',
    'Sell your Self Storage',
    'Free Evaluation',
    'Learn',
    'Contact'
]

export const COLOR_CONFIG: IColorConfig = Object.freeze({
    'Primary': {color: 'black', bg: '#FFCE31'},
    'White': {color: 'rgba(0, 1, 3, 0.7);', bg: '#FFFFFF'},
    'Blue': {color: '#FFFFFF', bg: '#1849C6'}
})


export const BUTTON_TYPE = 'Contact'
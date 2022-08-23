export interface INavList {
    [key: string]: string
}

export type IColor = 'Primary' | 'White' | 'Blue'

export interface IColorConfig {
    [key: string]: {color: string, bg: string}
}

export interface IStorageCard {
    title?: string;
    location: string;
    totalUnits: string;
    occupancy: string;
    size: string;
    id: number; 
    type?: string;
    uniq_id: number;
}

export interface INewsCard {
    title: string;
    time: string;
    label: string;
    user: string;
    id: number;
    uniq_id: number;
}
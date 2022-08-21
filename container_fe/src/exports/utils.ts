import packageJSON from '../../package.json'
import { TEXT } from './constants.text'

export const getActualVersion = (): string => {
    return packageJSON.version
}

export const getProjectVersionText = (): string => {
    return `${TEXT.PRJ_VERSION_ALERT} ${getActualVersion()}`
}
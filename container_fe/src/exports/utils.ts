import packageJSON from '../../package.json'
import { TEXT } from './constants.text'


const env = process.env.REACT_APP_ENV;

export const getActualVersion = (): string => {
    return packageJSON.version
}

export const getProjectVersionText = (): string => {
    return `%c[${env}-ENV]:[${TEXT.PRJ_VERSION_ALERT}v${getActualVersion()}]`
}
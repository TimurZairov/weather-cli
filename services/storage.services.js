import { homedir } from 'os'
import { join, basename, extname, dirname, isAbsolute, sep, relative, resolve } from 'path'

const fileParh = join(homedir(), 'weather-data.json')

const saveKeyValue = (key , value) => {
    console.log()
}

export {saveKeyValue}
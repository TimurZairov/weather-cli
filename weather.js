#!/usr/bin/env node  

import { getArgs } from './helpers/args.js'
import { printHelp } from './services/log.service.js'
import { saveKeyValue } from './services/storage.services.js'


const initCLI = () => {
    const args = getArgs(process.argv)
    if(args.h){
        printHelp()
    }
    if(args.s){
        // сохрвнить город 
    }
    if(args.t){
        //token
        saveKeyValue('token', args.t)
    }

    // Вывести погоду
}

initCLI()
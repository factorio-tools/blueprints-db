import 'reflect-metadata'
import * as sapper from '@sapper/app'

sapper.start({
    target: document.querySelector('#sapper') as Element
})

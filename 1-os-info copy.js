import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Informacion del sistema operativo: ')
console.log('-----------------------------')

console.log('Nombre del sistema operativo', platform())
console.log('Version del sistema operativo', release())
console.log('Arquitectura del sistema operativo', arch())
console.log('CPU`s', cpus())
console.log('Memoria Libre', freemem() / 1024 / 1024)
console.log('Memoria total', totalmem() /1024 / 1024)
console.log('uptime', uptime() / 60 / 60 )


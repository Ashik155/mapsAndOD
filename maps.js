const clg = new Map()
const key1 = 'key1',
    key2='key2';

    clg.set(key1,'Hello')
    clg.set(key2,"HEtham")

    for( let [k,v] of clg){
        console.log(k,v)
    }
    for ( let keyy of clg.keys()){
        console.log(keyy)
    }

    for (let val of clg.values()){
        console.log(val)
    }
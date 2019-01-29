const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const OPT = {crossDomaind: true}

const onResponse = function(luke) {
    console.log(`hola, yo soy ${luke.name}`)
}

$.get(LUKE_URL,OPT, onResponse)
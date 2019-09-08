'use stric'

class API {
    async getData() {
        // get data to Api
        const data = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')

        // return data as Json
        const responseJSON = await data.json()

        return{
            responseJSON
        }
    }
}
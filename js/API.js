'use stric'

class API {
    async getData() {
        const total = 1000

        // get data to Api
        const data = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`)

        // return data as Json
        const responseJSON = await data.json()

        return{
            responseJSON
        }
    }
}
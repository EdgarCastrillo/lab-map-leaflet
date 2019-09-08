class API {
  async getData() {
    // Obtener desde la API
    const data = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');

    // Retornar como JSON
    const responseJSON = await data.json();

    // Retornar el objeto
    return {
        responseJSON
    }
  }
}
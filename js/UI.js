class UI {
  constructor() {
    // Instanciar la API
    this.api = new API();
    
    // Crear los mapas en un grupo
    this.markers = new L.LayerGroup(); 
    
    // Iniciar el mapa
    this.mapa = this.startMap();

  }

  startMap() {
    // Inicializar y obtener la propiedad del mapa
    const map = L.map('mapa').setView([19.390519, -99.3739778], 6);

    const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

    L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; ' + enlaceMapa + ' Contributors',
      maxZoom: 18,
      }).addTo(map);

    return map;

  }

  // Mostrar Establecimientos de la api
  showShops() {
    this.api.getData()
      .then(data =>  {
          const result = data.responseJSON.results;
          // Muestra los pines en el Mapa
          this.showPins(result);
      } )
  }
  // Muestra los pines
  showPins(data) {
    this.markers.clearLayers();
  
    // Recorrer establecimientos
    data.forEach(data => {
      // Destucturing 
      const {latitude, longitude, calle, regular, premium} = data;

      const optionsPopUp = L.popup()
      .setContent(`
        <p>Calle: ${calle}</p> 
        <p></p><b>Regular:</b>$ ${regular}</p>
        <p> <b>Premium:</b>$ ${premium}</p>`);

      // Agregar el Pin
      const marker = new L.marker([
        parseFloat(latitude),
        parseFloat(longitude)
      ] )
      .bindPopup(optionsPopUp)

      this.markers.addLayer(marker); 
    });
    this.markers.addTo(this.mapa)
  }

   // Obtiene las sugerencias de la REST API
   getSuggest(search) {
    this.api.getData()
      .then(data => {
            // Obtener los resultados
            const results = data.responseJSON.results;

            // Enviar el JSON y la busqueda al Filtro
            this.filterSuggest(results, search);
      })
  }

  // Filtrar las sugerencias de busqueda
   filterSuggest(results, search) {
    const filter = results.filter( filter => filter.calle.indexOf(search) !== -1 );

    // Mostrar pines del Filtro
    this.showPins(filter);
  }
}
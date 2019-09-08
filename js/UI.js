class UI {
  constructor() {
    // Api instance
    this.api = new API()
    // Create markers with layerGroup
    this.markers = new L.LayerGroup()
    // Iniciar el mapa
    this.mapa = this.inicializarMapa();

  }

  inicializarMapa() {
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

  showShops() {
    this.api.getData()
      .then(data => {
        const result = data.responseJSON.results

        // start function to show pins
        this.showPins(result)
      })
  }
  showPins(data) {
    // Clean markers
    this.markers.clearLayers()
    //
    data.forEach(data => {
      // desturcturing
      const {latitude, longitude, calle, regular, premium} = data
      // Add pin
      const marker = new L.marker([
        parseFloat(latitude),
        parseFloat(longitude)
      ])
      this.markers.addLayer(marker)
    })
    this.markers.addTo(this.mapa)
  }
}
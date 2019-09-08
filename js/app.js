'use strict'

const ui = new UI()

document.addEventListener('DOMContentLoaded', () => {
  ui.showShops()
})

// Enable search shops
const searcher = document.querySelector('#buscar input')
searcher.addEventListener('input', () => {
  console.log(searcher.value)
  if(searcher.value.lenght > 5){
  // Find in the api
  ui.getSuggestions(searcher.value)
  } else {
    ui.showShops()
  }

})
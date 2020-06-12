import Vue from 'vue'

Vue.filter('formatDaytime', function(value) {
    let fecha = value.substr(8,2)+"/"+value.substr(5,2)+"/"+value.substr(0,4)+" "+value.substr(11,8)
    return fecha
})

Vue.filter('pasarPrimerLetraMayus', function(value) {
    return value.charAt(0).toUpperCase() + value.substr(1)
})

Vue.filter('pasarMinuscula', function(value) {
    return value.toLowerCase()
})
function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  
  // Verifica si el número es mayor que 0
  if (num > 0) {
    return "Es positivo";
  }
  // Verifica si el número es menor que 0
  else if (num < 0) {
    return "Es negativo";
  }
  // Si el número es 0, retorna false
  else {
    return false;
  }
}

module.exports = esPositivo;
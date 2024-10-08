const $year = document.getElementById('year');
const currentYear = new Date().getFullYear();

/**
 * Muestra el año actual
 */
export const yearFn = () => {
  $year.textContent = currentYear
}

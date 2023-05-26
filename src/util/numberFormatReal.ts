export function numberFormatReal(value: number) {
  const real = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

  return real
}

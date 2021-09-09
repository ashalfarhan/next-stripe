const useCurrency = (options?: Intl.NumberFormatOptions) => {
  return Intl.NumberFormat('default', {
    currency: 'USD',
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    currencySign: 'accounting',
    ...options,
  })
}

export default useCurrency

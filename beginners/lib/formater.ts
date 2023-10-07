const FORMATE_CURR = Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
})

export const formater = (num: number) => FORMATE_CURR.format(num)

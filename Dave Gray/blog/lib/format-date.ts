export function getFormatedDate(date: string): string {
   return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
   }).format(new Date(date))
}

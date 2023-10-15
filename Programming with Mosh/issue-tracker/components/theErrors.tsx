import { Callout } from "@radix-ui/themes"

export default function TheErrors({ error }: { error: string }) {
   return (
      <Callout.Root color="red">
         <Callout.Text>{error}</Callout.Text>
      </Callout.Root>
   )
}

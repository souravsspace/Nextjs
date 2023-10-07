import Image from "next/image"

type USER =
  | {
      name?: string | null | undefined
      email?: string | null | undefined
      image?: string | null | undefined
    }
  | undefined

type USER_CARD_PROPS = {
  user: USER
  pageType: string
}

export default function USER_CARD({ user, pageType }: USER_CARD_PROPS) {
  const greeting = user?.name ? (
    <h1 className="text-2xl font-bold">{`Hello, ${user.name}`}</h1>
  ) : (
    <h1 className="text-2xl font-bold">Hello, stranger</h1>
  )

  const userImage = user?.image ? (
    <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      src={user?.image}
      width={200}
      height={200}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
    />
  ) : null

  return (
    <main className="grid gap-3">
      {greeting}
      {userImage}
      <p className="text-center text-lg mt-4">{`You are on the ${pageType} page`}</p>
    </main>
  )
}

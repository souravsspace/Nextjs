type USER_POST_PROPS = {
  userPostData: Promise<USER_POST[]>
}

export default async function UserPost({ userPostData }: USER_POST_PROPS) {
  const userPost = await userPostData
  return (
    <>
      {userPost.map((post) => (
        <div key={post.id}>
          <h3 className="text-lg">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}

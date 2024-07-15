export default function Home({ children }) {
  return (
    <>
      <h1>home page</h1>
      <a
        className="text-blue-600 visited:text-purple-600"
        href="/page1"
      >
        link
      </a>
      {children}
    </>
  )
}

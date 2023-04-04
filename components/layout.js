import NavBar from './NavBar'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className='content'>{children}</main>
    </>
  )
}

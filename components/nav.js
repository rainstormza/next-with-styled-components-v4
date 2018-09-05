import Link from 'next/link'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
  }
  nav {
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
  nav > ul {
    padding: 4px 16px;
  }
  li {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: #067df7;
    text-decoration: none;
    font-size: 13px;
  }
`

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const NavConainer = styled.div`
  font-size: 32px;
  background-color: salmon;
  color: yellow;
  height: 100px;
`

const NavContent = styled.div`
  font-size: 24px;
  background-color: black;
  color: white;
  height: 50px;
`

const Nav = () => (
  <nav>
    <GlobalStyle />
    <NavConainer>
      <NavContent>test</NavContent>
    </NavConainer>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>
  </nav>
)

export default Nav

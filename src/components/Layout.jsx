// components/Layout.jsx
import Navigator from './Navigator'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navigator />
      <main>{children}</main>
    </div>
  )
}

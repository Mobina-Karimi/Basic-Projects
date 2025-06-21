import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
    <header className={styles.header} >
        <h1>Library App</h1>
        <button>Admin Login</button>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Dveloped by Mobina Karimi</p>
    </footer>
    </>
  )
}

export default Layout
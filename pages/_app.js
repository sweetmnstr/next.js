import '../styles/globals.css'
import '../styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {

  return (<>
      <AppNavbar/>
      <Component {...pageProps} />
      </>
      )
}

export default MyApp

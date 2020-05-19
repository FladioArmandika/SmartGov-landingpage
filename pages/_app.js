import Theme from "./Theme"
import Header from "./header"

function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* <Theme> */}
                <Header/>
                <Component {...pageProps} />
            {/* </Theme>  */}
        </>
    )
}
  
export default MyApp
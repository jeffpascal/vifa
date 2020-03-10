import React from "react"
import SlickAll from "../components/slickgalleryall"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
const Imagini = () => {
  return (
    <Layout>
      <SEO title="Poze peisaj Colibita"
      description="Poze peisaj"></SEO>
      <h1>Colibita in imagini</h1>
      <p>Vila Franceza va ofera posibilitatea sa admirati lacul, muntii si padurile din imprejurimi chiar din interiorul ei sau de pe terasa generoasa dinspre lac.</p>
      <p>Lacul Colibita are o frumusete aparte in fiecare moment al zilei. Va puteti face propriul album de imagini pe care sa le priviti cu placere in orice moment.</p>
      <p>In orice sezon exista atractii care va vor face sa simtiti ca timpul trece mult prea repede.</p>
      <p>Consultati <Link to="cazare-langa-lac">oferta noastra de cazare</Link> </p>
      <SlickAll></SlickAll>
    </Layout>
  )
}

export default Imagini

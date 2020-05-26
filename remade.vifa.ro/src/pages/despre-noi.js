import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import IndividualPost from "../components/individualpost"
import OurTeamDisplay from "../components/OurTeamDisplay"
const DespreNoi = () => {
  const allFile = useStaticQuery(
    graphql`
      query images {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "despre-noi" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
        staff: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "despre-noi/staff-images" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    `
  )

  const EchipaNoastra = () => (
    <div className="bg-light py-5">
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-lg-5">
            <h2 className="display-4 font-weight-light">Echipa Noastra</h2>
            <p className="font-italic text-muted">
              Echipa noastra va sta la dispozitie oricand pentru rezervari sau
              intrebari
            </p>
          </div>
        </div>

        <div className="row text-center">
          <OurTeamDisplay
            name="Gabriela Pascal"
            job="Asigurator conditii"
            imageLink={allFile.staff.edges[1].node.childImageSharp.fluid.src}
          ></OurTeamDisplay>
          <OurTeamDisplay
            name="Dorina"
            job="Zana magica"
            imageLink={allFile.staff.edges[0].node.childImageSharp.fluid.src}
          ></OurTeamDisplay>
        </div>
      </div>
    </div>
  )

  return (
    <Layout>
      <SEO
        title="Despre Vila Franceza - Dormi la Colibita"
        description="Vila Franceza este situata pe malul nordic al lacului Colibita, la
        doar cativa pasi de apa. Locatia noastra va ofera o perspectiva
        unica asupra lacului si asupra crestelor muntilor din imprejurimi."
      />

      <IndividualPost
        imageSource={allFile.allFile.edges[0].node.childImageSharp.fluid.src}
        imageSourceAlt="Image description"
        title="Lacul Colibita"
        description="Colibita este un sat al comunei Bistrita Bargaului, judetul
        Bistrita-Nasaud, Transilvania, Romania. Localitatea este asezata
        pe Valea Bistritei, intre Muntii Bargau si Muntii Calimani. "
        needButton="false"
        buttonText="Need less"
        imageLocation="right"
      ></IndividualPost>

      <div className="row">
        <div className="col-md-6">
          <h1>Bine ati venit la colibita</h1>
          <img alt="imagine cu vila franceza langa lac"></img>
          <article>
            <h2>Lacul Colibita</h2>
            <p className="font-italic text-muted mb-4">
              Colibita este un sat al comunei Bistrita Bargaului, judetul
              Bistrita-Nasaud, Transilvania, Romania. Localitatea este asezata
              pe Valea Bistritei, intre Muntii Bargau si Muntii Calimani.
            </p>
            <p>
              Satul Colibita este asociat cu lacul de acumulare cu acelasi nume
              in jurul caruia s-a dezvoltat o frumoasa zona de agrement.
            </p>
            <p>
              Lacul este situat la altitudinea de 820 m, are o suprafata de 270
              hectare si o lungime de peste 13 kilometri. Conturul sau poate fi
              parcurs cu masina in circa 2 ore.
            </p>
            <p>
              Accesul se face din Bistrita pe drumul european care leaga orasul
              Bistrita, prin Pasul Tihuta, de Vatra Dornei. In Prundul
              Bargaului, in mijlocul localitatii, exista o intersectie ce duce
              spre Bistrita Bargaului, apoi spre Colibita.
            </p>
          </article>

          <article>
            <h2>Zone Colibita</h2>
            <p>
              Pentru iubitorii muntelui exista atractii in orice anotimp:
              excursii, drumetii (Taul Zanelor, izvorul de apa minerala Borcut,
              trasee montane - traseu marcat de 3,5 ore pana in Vf. Bistricioru,
              Castel Dracula langa Pasul Tihuta - 1100 m alt), ciclism montan,
              caiac, alpinism, pescuit (pastrav, clean, cara) sau, pe timp de
              iarna, plimbari cu sania.
            </p>
            <p>
              Peisajul oferit de crestele montane este completat de fenomene
              vulcano-carstice curioase si de paduri intinse de brad. In zona
              exista peste 800 de hectare de rezervatii naturale iar fondul
              cinegetic este foarte bogat.
            </p>
          </article>

          <article>
            <h2>Cel mai ozonat aer din Romania</h2>
            <p>
              Climatul este foarte placut, lipsit de curenti puternici, cu ploi
              rare in timpul verii si cu aer puternic ozonat, comparat adesea cu
              aerul din Alpii elvetieni. <br></br>Aerul este benefic pentru cei
              cu probleme respiratorii dar are si un efect antistress si
              antidepresiv.
            </p>

            <p>
              Documentele vremii spun ca la finele secolului XIX, o domnişoară
              din Bistriţa s-a vindecat de tuberculoză graţie aerului din
              această zonă, extrem de bogat în ozon. Un anume Hans Lewi, din
              Bistriţa, şi-a trimis fata bolnavă de tuberculoză la Colibiţa,
              pentru odihnă şi refacere. După trei luni, fata s-a însănătoşit.
            </p>

            <p>
              Ulterior, aici a aparut si un sanatoriu care a functionat pana la
              finele primului razboi mondial unde erau tratati cu succes bolnavi
              pulmonar.
            </p>
          </article>
        </div>

        <div className="col-md-6">
          <article>
            <h2>Vila Franceza</h2>
            <p>
              Vila Franceza este situata pe malul nordic al lacului Colibita, la
              doar cativa pasi de apa. Locatia noastra va ofera o perspectiva
              unica asupra lacului si asupra crestelor muntilor din imprejurimi.
            </p>
            <p>În apropiere se afla mai multe restaurante si pastravarii.</p>
            <p>
              Confort, liniste si discretie sunt ceea ce va oferim pentru o
              vacanta, pentru o luna de miere sau doar pentru un weekend, in
              orice anotimp.
            </p>
            <p>Vezi oferta noastra de cazare pentru vacanta.</p>
          </article>

          <img alt="imagine soare"></img>
          <img alt="imagine zapada"></img>
          <img alt="imagine zapada"></img>
        </div>
      </div>
      <EchipaNoastra></EchipaNoastra>
    </Layout>
  )
}

export default DespreNoi

import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={"123456"}
            title={
              "the lean startup: how constant innovation creates opportunities for growth and success "
            }
            price={29.99}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51QBHKpw5dL._AC_UY327_FMwebp_QL65_.jpg"
            }
            rating={5}
          />
          <Product
            id={"123457"}
            title={
              "a car cleaning Gel Kit Universal Detailing Automative Dust Car Crevice <br/> Cleaner Slime Auto Air Vent Interior Detail.... "
            }
            price={239.0}
            image={
              "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YLxhnPUxL._AC_UL450_SR450,320_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={"123458"}
            title={"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"}
            price={199.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            }
            rating={3}
          />
          <Product
            id={"123459"}
            title={
              "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            }
            price={98.99}
            image={
              "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            }
            rating={5}
          />
          <Product
            id={"123460"}
            title={
              "Echo Show 10 (3rd Gen) | HD smart display with premium sound, motion and Alexa | Charcoal"
            }
            price={598.99}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51EVETDOOeL._AC_UY327_FMwebp_QL65_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={"123461"}
            title={"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"}
            price={199.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/I/71xox6lJb6L._AC_UL450_SR450,320_.jpg"
            }
            rating={3}
          />
          <Product
            id={"123462"}
            title={
              "#1 i Phone and i Pad Charger Super Fast Charging [MFi Certified] 20W PD USB C Wall Charger with 6FT Fast Charging Cable Compatib…"
            }
            price={10.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/I/61LJD1MH0kL._AC_UL450_SR450,320_.jpg"
            }
            rating={5}
          />
          <Product
            id={"123463"}
            title={
              "[Apple MFi Certified] Wireless Earbuds for AirPods Pro Wireless Headset with Touch Control, Noise Cancelling, IPX7 Waterproof Built-in Microphone with Charging case-White"
            }
            price={199.99}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51pYafoVssL._AC_UY218_.jpg"
            }
            rating={3}
          />
          <Product
            id="123464"
            price={12.99}
            title={
              "Mkeke for iPhone 14 Pro Max Case Clear Magnetic Version Work with MagSafe Non Yellowing Shockproof Case with Military Grade"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71M8i3jXVUL._AC_UY218_.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="123654"
            title={
              "Fleece Throw Size Blanket for Couch Sofa or Bed, Soft Fuzzy Plush Luxury Flannel Lap Blanket, Super Cozy and Comfy for All Seasons (Olive Green,"
            }
            price={12.99}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81QxP8lhZzL._AC_UL320_.jpg"
            }
            rating={3}
          />
          <Product
            id={"123466"}
            title={
              "Faux Fur Throw Blanket for Couch, Cozy Soft Plush Thick Winter Blanket for Sofa Bedroom Living Room, 50 * 60 Inches Yellow"
            }
            price={98.99}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71GnKnRpZxL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home

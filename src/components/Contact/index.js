import './index.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import ContactForm from './Contact Form'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <ContactForm />
        </div>
        <div className="info-map">
          Huy Ton,
          <br />
          Vietnam,
          <br />
          35 Nguyen Du, 53000
          <br />
          Thua Thien Hue <br />
          <span>huysmith.dev@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[16.478012777594135, 107.58822951328759]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[16.478012777594135, 107.58822951328759]}>
              <Popup>Huy lives here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

import React, { useState, useCallback, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import $ from 'jquery'; 

import Main from '../layouts/Main';
import photos from '../data/photos';


const Photography = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [album, setAlbum] = useState(0);
  let gallery = null;
  const openLightbox = useCallback((event, { photo, index }) => {
    $('#header')[0].style.zIndex = -1;
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    $('#header')[0].style.zIndex = 1;
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const switchAlbum = (e) => {
    e.target.focus();
    const name = e.target.id;

    if (name == 'Portrait'){
      setAlbum(1);
    } else if (name == 'Street'){
      setAlbum(2);
    } else {
      setAlbum(0);
    }
  }

  if (album == 2){
    gallery = 
    <Fragment>
      <Gallery photos={photos.street} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              backdropClosesModal
              currentIndex={currentImage}
              views={photos.street}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Fragment>
  } else if (album == 1){
    gallery = 
    <Fragment>
      <Gallery photos={photos.portrait} direction="column" onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              backdropClosesModal
              currentIndex={currentImage}
              views={photos.portrait}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Fragment>
  } else {
    gallery = 
    <Fragment>
      <Gallery photos={photos.city} onClick={openLightbox} autofocus />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              backdropClosesModal
              currentIndex={currentImage}
              views={photos.city}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Fragment>
  }

  return (
    <Main photography={true}>
      <Helmet title="Photography" />
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2><Link to="/projects">Photography</Link></h2>
            <p>Follow me on <a href="https://www.instagram.com/kmaophotography/" target="_blank" rel="noopener noreferrer">Instragram</a>.
            Email to book a session with me!</p>
          </div>
        </header>

        <nav className="links">
          <ul style={{paddingLeft:0}}>
            {photos.categories.map(c => (
              <li key={c} style={{display: 'inline'}}>
                <button onClick={switchAlbum} id={c}>{c}</button>
              </li>
            ))}
              <li style={{display: 'inline'}}>
                <button onClick={() => window.open("https://society6.com/kevinmao", '_blank')}>Prints</button>
              </li>
          </ul>
        </nav>
        {gallery}
      </article>
    </Main>
  );
};

export default Photography;

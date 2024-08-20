import React from 'react';
import NavBar from '../components/NavBar';
import CARDSpaquetes from '../components/cards';
import Gallery from '../components/galeriaHomePage';
import FooterPage from '../components/footer';

const Home = () => {
  const bodaHomeImg = './assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/home.jpeg';
  const decoracionCARDS = './assets/Erick WEB/decoracion textos.png';
  const aboutUSimg = './assets/Erick WEB/FOTOS MURANO/servicios adicionales/PAGES/aboutUSimg.jpeg';
  const startTodayIMG = './assets/Erick WEB/FOTOS MURANO/pilares.jpeg';
  const insta = './assets/Erick WEB/FOTOS MURANO/Instagram.png'
  const face = './assets/Erick WEB/FOTOS MURANO/facebook.png'

  return (
    <div>
      <div className='relative min-h-screen overflow-y-auto'>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <NavBar />
        </div>
        <main>
          {/* FOTO PRINCIPAL */}
          <div className='relative font-serif'>
            <img src={bodaHomeImg} className='object-cover w-full h-[80vh] md:h-screen' alt="boda" />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4'>
              <h1 className='font-bold tracking-widest text-lg md:text-xl'>LA MEJOR MANERA DE</h1>
              <h2 className='font-bold tracking-widest text-2xl md:text-4xl mt-2 md:mt-4'>Planear & Producir</h2>
              <h2 className='font-bold tracking-widest text-2xl md:text-4xl'>Eventos Excepcionales</h2>
            </div>
          </div>

          {/* CARDS */}
          <div className='w-full p-6 md:p-28'>
            <div className='text-center mb-16 font-serif'>
              <h1 className='text-xl md:text-2xl'>Nuestros servicios</h1>
              <h2 className='text-lg md:text-xl'>Tu día especial merece un lugar único</h2>
              <img className='object-cover h-8 w-auto mt-4 mb-4 mx-auto' src={decoracionCARDS} alt="DECORACION" />
              <h3 className='text-sm md:text-base mx-auto md:w-2/3'>
                En Eventos Sofi, nos especializamos en convertir cada evento en una experiencia inolvidable. Somos una empresa dedicada a la renta de mobiliario de alta calidad para todo tipo de eventos, ya sean bodas, cumpleaños, conferencias, fiestas corporativas, o cualquier celebración que imagines. Nuestro objetivo es brindar soluciones integrales y personalizadas para que cada detalle de tu evento sea perfecto.
              </h3>
            </div>
            <CARDSpaquetes />
          </div>

          {/* despues de cards */}
          <div className='bg-[#F1F1F1] w-full p-6 md:p-28'>
            <div className='text-center text-xl font-serif'>
              <p className='mb-4 text-lg md:text-xl'>Ariana Anderson & Steve Anderson</p>
              <p className='text-sm md:text-base mx-auto md:w-2/3'> "Gracias a Eventos Sofi, nuestra boda fue perfecta. Su profesionalismo y atención a cada detalle hicieron que todo saliera tal como lo soñamos. Nos sentimos tranquilos sabiendo que estábamos en las mejores manos, y el resultado fue un evento inolvidable. ¡La recomendamos al 100%!"</p>
            </div>
          </div>

          {/* ABOUT US */}
          <div className='flex flex-col md:flex-row w-full gap-4 p-6 md:p-20'>
            <div className='md:basis-1/2'>
              <h1 className='font-serif font-extralight text-xl md:text-2xl'>ABOUT US</h1>
              <h2 className='leading-6 text-2xl md:text-3xl tracking-widest mt-4 mb-4'>Sorprender a tus invitados nunca ha sido tan espectacular.</h2>
              <p className='font-serif text-sm md:text-base'>Contáctanos en nuestras redes sociales</p>
              <p className='font-serif text-sm md:text-base'>encuéntranos en...</p>
              <div className='flex flex-row justify-center gap-4 items-center p-4 mt-6 bg-zinc-800 rounded-md'>
                <a href="https://www.instagram.com/eventossofi_dgo?igsh=MWRsc2E1OHRka3p3Zw==" className='w-8 md:w-10'>
                  <img src={insta} alt="INSTAGRAM" />
                </a>
                <a href="https://www.facebook.com/share/aaaf9i4ZgNPAUQUf/?mibextid=LQQJ4d" className='w-8 md:w-12'>
                  <img src={face} alt="FACEBOOK" />
                </a>
              </div>
            </div>
            <div className='md:basis-1/2'>
              <img src={aboutUSimg} className='w-full h-auto' alt="ABOUT US" />
            </div>
          </div>

          {/* START TODAY */}
          <div className='relative font-serif'>
            <img src={startTodayIMG} className='w-full h-[40vh] md:h-[50vh] object-cover' alt="PILARES" />
            <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-4'>
              <h1 className='text-xl md:text-3xl'>Quieres vivir una hermosa experiencia?</h1>
            </div>
          </div>

          {/* GALLERY */}
          <div className="grid justify-items-center items-center text-center mt-6 md:mt-10">
            <h1 className='text-xl md:text-2xl'>NUESTRA GALERÍA</h1>
            <img className='object-cover h-8 w-auto mt-4 mb-4 mx-auto' src={decoracionCARDS} alt="DECORACION" />
            <p className="text-sm md:text-base mx-auto md:w-2/3">
              "Explora nuestra galería de imágenes y descubre la magia de los eventos que hemos creado. Desde bodas elegantes hasta celebraciones únicas, cada foto captura la dedicación y el detalle con los que transformamos tus sueños en realidad. ¡Déjate inspirar por nuestros trabajos más recientes!"
            </p>
          </div>
          <Gallery />
        </main>
        <FooterPage />
      </div>
    </div>
  );
}

export default Home;

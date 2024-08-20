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
      <div className='relative h-screen w-auto overflow-y-scroll'>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <NavBar />
        </div>
        <main>
          {/* FOTO PRINCIPAL */}
          <div className='relative font-serif'>
            <img src={bodaHomeImg} className='object-cover w-screen h-screen' alt="boda" />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white'>
              <h1 className='font-bold tracking-widest text-xl'>LA MEJOR MANERA DE</h1>
              <h2 className='font-bold tracking-widest text-4xl mt-4'>Planear & Producir</h2>
              <h2 className='font-bold tracking-widest text-4xl'>Eventos Excepcionales</h2>
            </div>
          </div>

          {/* CARDS */}
          <div className='contact w-screen p-28'>
            <div className='grid justify-items-center items-center text-center mb-24 font-serif'>
              <h1>Nuestros servicios</h1>
              <h2>Tu día especial merece un lugar único</h2>
              <img className='object-cover h-8 w-auto mt-5 mb-5' src={decoracionCARDS} alt="DECORACION" />
              <h3 className='w-1/2 text-justify'>
                En Eventos Sofi, nos especializamos en convertir cada evento en una experiencia inolvidable. Somos una empresa dedicada a la renta de mobiliario de alta calidad para todo tipo de eventos, ya sean bodas, cumpleaños, conferencias, fiestas corporativas, o cualquier celebración que imagines. Nuestro objetivo es brindar soluciones integrales y personalizadas para que cada detalle de tu evento sea perfecto.
              </h3>
            </div>
            <CARDSpaquetes />
          </div>

          {/* despues de cards */}
          <div className='bg-[#F1F1F1] w-screen h-1/2 -mt-24 p-28'>
            <div className='grid justify-items-center items-center text-center text-xl font-serif'>
              <p className='mb-5'>Ariana Anderson & Steve Anderson</p>
              <p className='w-1/2 text-center'> "Gracias a Eventos Sofi, nuestra boda fue perfecta. Su profesionalismo y atención a cada detalle hicieron que todo saliera tal como lo soñamos. Nos sentimos tranquilos sabiendo que estábamos en las mejores manos, y el resultado fue un evento inolvidable. ¡La recomendamos al 100%!"</p>
            </div>
          </div>

          {/* ABOUT US */}
          <div className='flex w-screen h-1/2 gap-10 p-20'>
            <div className='basis-1/2 grid justify-items-center items-center'>
              <div className=''>
                <h1 className='font-serif font-extralight tracking-widest text-2xl text-left'>ABOUT US</h1>
                <h2 className='leading-10 text-3xl text-left tracking-widest mt-5 mb-5'>Sorprender a tus invitados nunca ha sido tan espectacular.</h2>
                <p className='font-serif text-sm text-start'>Contáctanos en nuestras redes sociales</p>
                <p className='font-serif text-sm text-start'>encuéntranos en...</p>
                <div className='flex flex-row justify-center gap-5 items-center p-5 mt-10 bg-zinc-800 rounded-md '>
                  <a href="https://www.instagram.com/eventossofi_dgo?igsh=MWRsc2E1OHRka3p3Zw==" className='w-10'>
                    <img src={insta} alt="INSTAGRAM" />
                  </a>
                  <a href="https://www.facebook.com/share/aaaf9i4ZgNPAUQUf/?mibextid=LQQJ4d" className='w-12'>
                    <img src={face} alt="FACEBOOK" />
                  </a>
                </div>
              </div>
            </div>
            <div className='basis-2/3'>
              <img src={aboutUSimg} alt="ABOUT US" />
            </div>
          </div>

          {/* START TODAY */}
          <div className='relative font-serif'>
            <img src={startTodayIMG} alt="PILARES" className='w-[1462px] h-[388px] object-cover' />
            <div className='absolute inset-60 flex flex-col justify-center items-center text-white'>
              <h1 className='text-4xl'>Quieres vivir una hermosa experiencia?</h1>
              <div className='mt-10'>
                
              </div>
            </div>
          </div>

          {/* GALLERY */}
          <div className="grid justify-items-center items-center text-center mt-10">
            <h1 className="">NUESTRA GALERÍA</h1>
            <img className='object-cover h-8 w-auto mt-5 mb-5' src={decoracionCARDS} alt="DECORACION" />
            <p className="w-1/2">
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

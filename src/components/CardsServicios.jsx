import React from 'react';
import Card from './card';

const CardsServicios = () => {
    const cardsData = [
        {
            image: './assets/Erick WEB/FOTOS MURANO/servicios adicionales/servicios adicionales/home.jpeg',
            title: 'Bodas',
            description: 'Creamos bodas únicas y personalizadas, cuidando cada detalle para que tu día especial sea exactamente como lo soñaste, lleno de momentos inolvidables.'
        },
        {
            image: './assets/Erick WEB/FOTOS MURANO/Parties.jpg',
            title: 'Fiestas',
            description: 'Organizamos fiestas inolvidables para cualquier ocasión, con un enfoque en la diversión y los detalles que harán que cada celebración sea única y especial.'
        },
        {
            image: './assets/Erick WEB/FOTOS MURANO/eventos.jpg',
            title: 'Especiales',
            description: 'Diseñamos y coordinamos eventos especiales, desde corporativos hasta reuniones familiares, con creatividad y profesionalismo, asegurando que cada momento sea memorable y personalizado.'
        }
    ];

    return (
        <div className='w-fit p-10 mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {cardsData.map((card, index) => (
                    <Card key={index} image={card.image} title={card.title} description={card.description} />
                ))}
            </div>
        </div>
    );
};

export default CardsServicios;

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

emailjs.init('sh1Z1faOlmdWMUYGc');  // Public Key

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        fecha: '',
        presupuesto: '',
        tipo_evento: '',
        descripcion: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_ywc2o6k', 'template_m6m6hvx', formData, 'sh1Z1faOlmdWMUYGc')
            .then((response) => {
                console.log('SUCCESS!', response);
                alert('Formulario enviado con éxito!');
                // Limpiar el formulario
                setFormData({
                    nombre: '',
                    telefono: '',
                    fecha: '',
                    presupuesto: '',
                    tipo_evento: '',
                    descripcion: ''
                });
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Error al enviar el formulario.');
            });
    };

    return (
        <div className="min-h-screen flex items-start justify-center">
            <form className="bg-white p-8 rounded-lg shadow-md w-screen max-w-lg" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre Completo.</label>
                        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Número de Teléfono.</label>
                        <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha Tentativa.</label>
                        <input type="date" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="presupuesto" className="block text-sm font-medium text-gray-700">Presupuesto Ideal.</label>
                        <input type="number" id="presupuesto" name="presupuesto" value={formData.presupuesto} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="tipo-evento" className="block text-sm font-medium text-gray-700">Tipo de Evento.</label>
                    <input type="text" id="tipo-evento" name="tipo_evento" value={formData.tipo_evento} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Describe un poco más sobre tu evento.</label>
                    <textarea id="descripcion" name="descripcion" rows="4" value={formData.descripcion} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required></textarea>
                </div>
                <div className="form-group mt-6">
                    <button type="submit" className="w-full bg-gray-800 text-white p-2 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
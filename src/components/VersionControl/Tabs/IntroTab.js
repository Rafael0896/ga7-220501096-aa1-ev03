import React from 'react';

function IntroTab() {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 animate-fadeIn">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Control de Versiones: Conceptos Clave</h2>

            {/* Contenido de la pestaña de introducción */}
            <div className="mb-6">
                <h3 className="text-xl font-medium text-indigo-600 mb-2">¿Qué es el Control de Versiones?</h3>
                <p className="text-gray-700 mb-4">
                    El control de versiones es un sistema que registra los cambios realizados a un archivo o conjunto de archivos a lo largo del tiempo,
                    permitiendo recuperar versiones específicas más adelante.
                </p>
                {/* Más contenido... */}
            </div>

            {/* Resto del contenido... */}
        </div>
    );
}

export default IntroTab;
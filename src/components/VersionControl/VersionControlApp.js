import { useState } from 'react';

export default function VersionControlApp() {
    const [activeTab, setActiveTab] = useState('intro');
    const [expandedCard, setExpandedCard] = useState(null);

    // Datos de herramientas de versionamiento
    const localTools = [
        {
            id: 'git-local',
            name: 'Git (Local)',
            icon: '📁',
            description: 'Sistema de control de versiones distribuido que permite el seguimiento de cambios en archivos localmente.',
            features: [
                'Repositorio local completo en la máquina del desarrollador',
                'Historial completo disponible sin conexión a internet',
                'Operaciones rápidas por ser locales',
                'Posibilidad de hacer commits, branches y merges localmente',
                'Commits firmados criptográficamente para autenticidad'
            ]
        },
        {
            id: 'mercurial',
            name: 'Mercurial',
            icon: '🔄',
            description: 'Sistema de control de versiones distribuido con enfoque en el rendimiento y escalabilidad.',
            features: [
                'Arquitectura distribuida con repositorio local completo',
                'Interfaz sencilla y curva de aprendizaje menor que Git',
                'Manejo eficiente de archivos binarios',
                'Historial simple y lineal por defecto',
                'Extensible mediante plugins y hooks'
            ]
        },
        {
            id: 'svn-local',
            name: 'SVN (Local)',
            icon: '💾',
            description: 'Subversion puede funcionar en modo local aunque no es su caso de uso principal.',
            features: [
                'Modelo de trabajo basado en copias de trabajo locales',
                'Puede configurarse para trabajar completamente sin servidor',
                'Menor funcionalidad que en modo cliente-servidor',
                'Útil para proyectos pequeños o individuales',
                'Transición sencilla a modo centralizado cuando sea necesario'
            ]
        }
    ];

    const remoteTools = [
        {
            id: 'github',
            name: 'GitHub',
            icon: '🐙',
            description: 'Plataforma de alojamiento de código basada en Git que proporciona control de versiones distribuido y colaboración.',
            features: [
                'Alojamiento de repositorios Git remotos',
                'Funciones sociales: pull requests, issues, discusiones',
                'CI/CD integrado mediante GitHub Actions',
                'GitHub Pages para alojamiento web',
                'Amplia integración con otras herramientas y servicios'
            ]
        },
        {
            id: 'gitlab',
            name: 'GitLab',
            icon: '🦊',
            description: 'Plataforma DevOps completa que incluye control de versiones, CI/CD, monitorización y más.',
            features: [
                'Solución de DevOps todo en uno',
                'Disponible como SaaS o auto-hospedado',
                'Pipeline de CI/CD potente e integrado',
                'Gestión completa del ciclo de vida del desarrollo',
                'Funciones de seguridad y gobernanza integradas'
            ]
        },
        {
            id: 'bitbucket',
            name: 'Bitbucket',
            icon: '📘',
            description: 'Servicio de alojamiento de repositorios Git y Mercurial con integración con productos Atlassian.',
            features: [
                'Integración con Jira, Confluence y otras herramientas de Atlassian',
                'Pipelines de CI/CD integrados',
                'Revisión de código y pull requests',
                'Repositorios privados gratuitos con límite de usuarios',
                'Permisos granulares a nivel de repositorio'
            ]
        },
        {
            id: 'azure-devops',
            name: 'Azure DevOps',
            icon: '☁️',
            description: 'Suite de herramientas de Microsoft para control de versiones, CI/CD, gestión de proyectos y más.',
            features: [
                'Repositorios Git integrados en el ecosistema Microsoft',
                'Azure Pipelines para CI/CD multiplataforma',
                'Azure Boards para gestión ágil de proyectos',
                'Integración con servicios Azure y herramientas Microsoft',
                'Extensible mediante un marketplace de extensiones'
            ]
        }
    ];

    const toggleCard = (id) => {
        if (expandedCard === id) {
            setExpandedCard(null);
        } else {
            setExpandedCard(id);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            <header className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h1 className="text-3xl font-bold text-center text-indigo-800">Herramientas de Versionamiento</h1>
                <p className="text-gray-600 text-center mt-2">
                    Explora las características de diferentes sistemas de control de versiones
                </p>
            </header>

            <nav className="bg-white rounded-lg shadow-md p-2 mb-6">
                <ul className="flex justify-center space-x-4">
                    <li>
                        <button
                            className={`px-4 py-2 rounded-md transition ${activeTab === 'intro' ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-100'}`}
                            onClick={() => setActiveTab('intro')}
                        >
                            Introducción
                        </button>
                    </li>
                    <li>
                        <button
                            className={`px-4 py-2 rounded-md transition ${activeTab === 'local' ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-100'}`}
                            onClick={() => setActiveTab('local')}
                        >
                            Versionamiento Local
                        </button>
                    </li>
                    <li>
                        <button
                            className={`px-4 py-2 rounded-md transition ${activeTab === 'remote' ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-100'}`}
                            onClick={() => setActiveTab('remote')}
                        >
                            Versionamiento Remoto
                        </button>
                    </li>
                    <li>
                        <button
                            className={`px-4 py-2 rounded-md transition ${activeTab === 'comparison' ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-100'}`}
                            onClick={() => setActiveTab('comparison')}
                        >
                            Comparación
                        </button>
                    </li>
                </ul>
            </nav>

            <main className="flex-grow">
                {activeTab === 'intro' && (
                    <div className="bg-white rounded-lg shadow-md p-6 animate-fadeIn">
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Control de Versiones: Conceptos Clave</h2>

                        <div className="mb-6">
                            <h3 className="text-xl font-medium text-indigo-600 mb-2">¿Qué es el Control de Versiones?</h3>
                            <p className="text-gray-700 mb-4">
                                El control de versiones es un sistema que registra los cambios realizados a un archivo o conjunto de archivos a lo largo del tiempo,
                                permitiendo recuperar versiones específicas más adelante.
                            </p>

                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <h4 className="font-medium text-indigo-700 mb-2">Beneficios clave:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Seguimiento completo del historial de cambios</li>
                                    <li>Trabajo colaborativo sin conflictos</li>
                                    <li>Capacidad de revertir a estados anteriores</li>
                                    <li>Ramificación para desarrollo paralelo</li>
                                    <li>Documentación implícita del proceso de desarrollo</li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="text-xl font-medium text-blue-700 mb-2">Sistemas Locales</h3>
                                <p className="text-gray-700">
                                    Los sistemas de control de versiones locales mantienen el repositorio en la máquina del desarrollador,
                                    ofreciendo operaciones rápidas y trabajo sin conexión, pero con limitaciones para la colaboración.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="text-xl font-medium text-purple-700 mb-2">Sistemas Remotos</h3>
                                <p className="text-gray-700">
                                    Los sistemas de control de versiones remotos almacenan el repositorio en servidores accesibles por internet,
                                    facilitando la colaboración entre equipos y proporcionando copias de seguridad externas.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'local' && (
                    <div className="space-y-6 animate-fadeIn">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Herramientas de Versionamiento Local</h2>
                            <p className="text-gray-700 mb-6">
                                Las herramientas de versionamiento local permiten gestionar versiones principalmente en la máquina del desarrollador,
                                sin necesidad constante de un servidor central. Son ideales para trabajo personal o equipos pequeños con necesidades específicas.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {localTools.map(tool => (
                                <div
                                    key={tool.id}
                                    className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${expandedCard === tool.id ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'}`}
                                >
                                    <div
                                        className="p-4 cursor-pointer flex items-center justify-between"
                                        onClick={() => toggleCard(tool.id)}
                                    >
                                        <div className="flex items-center">
                                            <span className="text-3xl mr-3">{tool.icon}</span>
                                            <h3 className="text-xl font-medium text-blue-800">{tool.name}</h3>
                                        </div>
                                        <span className="text-gray-400">
                      {expandedCard === tool.id ? '▲' : '▼'}
                    </span>
                                    </div>

                                    <div className={`overflow-hidden transition-all duration-300 ${expandedCard === tool.id ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className="p-4 pt-0 border-t border-gray-100">
                                            <p className="text-gray-700 mb-3">{tool.description}</p>
                                            <h4 className="font-medium text-blue-700 mb-2">Características:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                {tool.features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'remote' && (
                    <div className="space-y-6 animate-fadeIn">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Herramientas de Versionamiento Remoto</h2>
                            <p className="text-gray-700 mb-6">
                                Las herramientas de versionamiento remoto facilitan la colaboración entre equipos distribuidos a través de servidores
                                centralizados accesibles por internet. Ofrecen funcionalidades adicionales como gestión de proyectos, CI/CD y revisión de código.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {remoteTools.map(tool => (
                                <div
                                    key={tool.id}
                                    className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${expandedCard === tool.id ? 'ring-2 ring-purple-500' : 'hover:shadow-lg'}`}
                                >
                                    <div
                                        className="p-4 cursor-pointer flex items-center justify-between"
                                        onClick={() => toggleCard(tool.id)}
                                    >
                                        <div className="flex items-center">
                                            <span className="text-3xl mr-3">{tool.icon}</span>
                                            <h3 className="text-xl font-medium text-purple-800">{tool.name}</h3>
                                        </div>
                                        <span className="text-gray-400">
                      {expandedCard === tool.id ? '▲' : '▼'}
                    </span>
                                    </div>

                                    <div className={`overflow-hidden transition-all duration-300 ${expandedCard === tool.id ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className="p-4 pt-0 border-t border-gray-100">
                                            <p className="text-gray-700 mb-3">{tool.description}</p>
                                            <h4 className="font-medium text-purple-700 mb-2">Características:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                {tool.features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'comparison' && (
                    <div className="bg-white rounded-lg shadow-md p-6 animate-fadeIn">
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Comparación de Sistemas de Versionamiento</h2>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                <tr>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Característica</th>
                                    <th className="px-6 py-3 bg-blue-50 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Sistemas Locales</th>
                                    <th className="px-6 py-3 bg-purple-50 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Sistemas Remotos</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Conexión a Internet</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-blue-50">No requerida</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-purple-50">Requerida para sincronización</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Colaboración</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-blue-50">Limitada</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-purple-50">Extensa</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Velocidad de operaciones</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-blue-50">Más rápida</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-purple-50">Depende de la conexión</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Respaldo</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-blue-50">Manual / Local</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-purple-50">Automático / En la nube</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Integración con CI/CD</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-blue-50">Complicada</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-purple-50">Integrada</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Revisión de código</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-blue-50">Herramientas limitadas</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-purple-50">Herramientas avanzadas</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Escala de equipo</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-blue-50">Individual o pequeño equipo</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-purple-50">Equipos grandes y distribuidos</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-lg font-medium text-gray-800 mb-3">¿Cuál elegir?</h3>
                            <p className="text-gray-700">
                                La elección entre sistemas locales y remotos depende de:
                            </p>
                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                <li>Tamaño del equipo y distribución geográfica</li>
                                <li>Necesidades de colaboración</li>
                                <li>Requisitos de seguridad y acceso</li>
                                <li>Integración con flujos de trabajo existentes</li>
                                <li>Presupuesto y recursos disponibles</li>
                            </ul>
                            <p className="mt-4 text-gray-700">
                                Muchos equipos optan por un enfoque híbrido, aprovechando las ventajas de ambos sistemas:
                                trabajo local rápido con Git y sincronización con plataformas remotas como GitHub para colaboración.
                            </p>
                        </div>
                    </div>
                )}
            </main>

            <footer className="mt-6 bg-white rounded-lg shadow-md p-4">
                <p className="text-center text-gray-600 text-sm">
                    Creado con React - Herramientas de Versionamiento © {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
}
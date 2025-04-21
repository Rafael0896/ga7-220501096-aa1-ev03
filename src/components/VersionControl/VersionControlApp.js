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
        <div className="version-control-app">
            <header className="app-header">
                <h1 className="app-title">Herramientas de Versionamiento</h1>
                <p className="app-subtitle">
                    Explora las características de diferentes sistemas de control de versiones
                </p>
            </header>

            <nav className="nav-container">
                <ul className="nav-list">
                    <li>
                        <button
                            className={`nav-button ${activeTab === 'intro' ? 'active' : ''}`}
                            onClick={() => setActiveTab('intro')}
                        >
                            Introducción
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-button ${activeTab === 'local' ? 'active' : ''}`}
                            onClick={() => setActiveTab('local')}
                        >
                            Versionamiento Local
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-button ${activeTab === 'remote' ? 'active' : ''}`}
                            onClick={() => setActiveTab('remote')}
                        >
                            Versionamiento Remoto
                        </button>
                    </li>
                    <li>
                        <button
                            className={`nav-button ${activeTab === 'comparison' ? 'active' : ''}`}
                            onClick={() => setActiveTab('comparison')}
                        >
                            Comparación
                        </button>
                    </li>
                </ul>
            </nav>

            <main className="main-content">
                {activeTab === 'intro' && (
                    <div className="content-section">
                        <h2 className="section-title">Control de Versiones: Conceptos Clave</h2>

                        <div className="mb-6">
                            <h3 className="text-xl font-medium text-indigo-600 mb-2">¿Qué es el Control de Versiones?</h3>
                            <p className="section-text">
                                El control de versiones es un sistema que registra los cambios realizados a un archivo o conjunto de archivos a lo largo del tiempo,
                                permitiendo recuperar versiones específicas más adelante.
                            </p>

                            <div className="highlight-box">
                                <h4 className="highlight-title">Beneficios clave:</h4>
                                <ul className="feature-list">
                                    <li>Seguimiento completo del historial de cambios</li>
                                    <li>Trabajo colaborativo sin conflictos</li>
                                    <li>Capacidad de revertir a estados anteriores</li>
                                    <li>Ramificación para desarrollo paralelo</li>
                                    <li>Documentación implícita del proceso de desarrollo</li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid-2col">
                            <div className="info-box blue-box">
                                <h3 className="section-title">Sistemas Locales</h3>
                                <p className="section-text">
                                    Los sistemas de control de versiones locales mantienen el repositorio en la máquina del desarrollador,
                                    ofreciendo operaciones rápidas y trabajo sin conexión, pero con limitaciones para la colaboración.
                                </p>
                            </div>

                            <div className="info-box purple-box">
                                <h3 className="section-title">Sistemas Remotos</h3>
                                <p className="section-text">
                                    Los sistemas de control de versiones remotos almacenan el repositorio en servidores accesibles por internet,
                                    facilitando la colaboración entre equipos y proporcionando copias de seguridad externas.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'local' && (
                    <div className="content-section">
                        <div className="mb-6">
                            <h2 className="section-title">Herramientas de Versionamiento Local</h2>
                            <p className="section-text">
                                Las herramientas de versionamiento local permiten gestionar versiones principalmente en la máquina del desarrollador,
                                sin necesidad constante de un servidor central. Son ideales para trabajo personal o equipos pequeños con necesidades específicas.
                            </p>
                        </div>

                        <div className="cards-grid">
                            {localTools.map(tool => (
                                <div
                                    key={tool.id}
                                    className={`card ${expandedCard === tool.id ? 'active' : ''}`}
                                >
                                    <div
                                        className="card-header"
                                        onClick={() => toggleCard(tool.id)}
                                    >
                                        <div className="flex items-center">
                                            <span className="card-icon">{tool.icon}</span>
                                            <h3 className="card-title">{tool.name}</h3>
                                        </div>
                                        <span className="text-gray-400">
                      {expandedCard === tool.id ? '▲' : '▼'}
                    </span>
                                    </div>

                                    <div className={`card-content ${expandedCard === tool.id ? 'expanded' : ''}`}>
                                        <div className="card-body">
                                            <p className="card-description">{tool.description}</p>
                                            <h4 className="highlight-title">Características:</h4>
                                            <ul className="feature-list">
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
                    <div className="content-section">
                        <div className="mb-6">
                            <h2 className="section-title">Herramientas de Versionamiento Remoto</h2>
                            <p className="section-text">
                                Las herramientas de versionamiento remoto facilitan la colaboración entre equipos distribuidos a través de servidores
                                centralizados accesibles por internet. Ofrecen funcionalidades adicionales como gestión de proyectos, CI/CD y revisión de código.
                            </p>
                        </div>

                        <div className="cards-grid">
                            {remoteTools.map(tool => (
                                <div
                                    key={tool.id}
                                    className={`card ${expandedCard === tool.id ? 'active' : ''}`}
                                >
                                    <div
                                        className="card-header"
                                        onClick={() => toggleCard(tool.id)}
                                    >
                                        <div className="flex items-center">
                                            <span className="card-icon">{tool.icon}</span>
                                            <h3 className="card-title">{tool.name}</h3>
                                        </div>
                                        <span className="text-gray-400">
                      {expandedCard === tool.id ? '▲' : '▼'}
                    </span>
                                    </div>

                                    <div className={`card-content ${expandedCard === tool.id ? 'expanded' : ''}`}>
                                        <div className="card-body">
                                            <p className="card-description">{tool.description}</p>
                                            <h4 className="highlight-title">Características:</h4>
                                            <ul className="feature-list">
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
                    <div className="content-section">
                        <h2 className="section-title">Comparación de Sistemas de Versionamiento</h2>

                        <div className="overflow-x-auto">
                            <table className="comparison-table">
                                <thead>
                                <tr>
                                    <th>Característica</th>
                                    <th className="local-header">Sistemas Locales</th>
                                    <th className="remote-header">Sistemas Remotos</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Conexión a Internet</td>
                                    <td className="local-cell">No requerida</td>
                                    <td className="remote-cell">Requerida para sincronización</td>
                                </tr>
                                <tr>
                                    <td>Colaboración</td>
                                    <td className="local-cell">Limitada</td>
                                    <td className="remote-cell">Extensa</td>
                                </tr>
                                <tr>
                                    <td>Velocidad de operaciones</td>
                                    <td className="local-cell">Más rápida</td>
                                    <td className="remote-cell">Depende de la conexión</td>
                                </tr>
                                <tr>
                                    <td>Respaldo</td>
                                    <td className="local-cell">Manual / Local</td>
                                    <td className="remote-cell">Automático / En la nube</td>
                                </tr>
                                <tr>
                                    <td>Integración con CI/CD</td>
                                    <td className="local-cell">Complicada</td>
                                    <td className="remote-cell">Integrada</td>
                                </tr>
                                <tr>
                                    <td>Gestión de proyectos</td>
                                    <td className="local-cell">Limitada</td>
                                    <td className="remote-cell">Avanzada</td>
                                </tr>
                                <tr>
                                    <td>Revisión de código</td>
                                    <td className="local-cell">Herramientas limitadas</td>
                                    <td className="remote-cell">Herramientas avanzadas</td>
                                </tr>
                                <tr>
                                    <td>Escala de equipo</td>
                                    <td className="local-cell">Individual o pequeño equipo</td>
                                    <td className="remote-cell">Equipos grandes y distribuidos</td>
                                </tr>
                                <tr>
                                    <td>Seguridad</td>
                                    <td className="local-cell">Control total</td>
                                    <td className="remote-cell">Dependencia del proveedor</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="highlight-box mt-8">
                            <h3 className="highlight-title">¿Cuál elegir?</h3>
                            <p className="section-text">
                                La elección entre sistemas locales y remotos depende de:
                            </p>
                            <ul className="feature-list">
                                <li>Tamaño del equipo y distribución geográfica</li>
                                <li>Necesidades de colaboración</li>
                                <li>Requisitos de seguridad y acceso</li>
                                <li>Integración con flujos de trabajo existentes</li>
                                <li>Presupuesto y recursos disponibles</li>
                            </ul>
                            <p className="section-text mt-4">
                                Muchos equipos optan por un enfoque híbrido, aprovechando las ventajas de ambos sistemas:
                                trabajo local rápido con Git y sincronización con plataformas remotas como GitHub para colaboración.
                            </p>
                        </div>
                    </div>
                )}
            </main>

            <footer className="app-footer">
                <p className="footer-text">
                    Creado con React - Herramientas de Versionamiento © {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
}
export const localTools = [
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
    // Añadir las otras herramientas locales aquí
];

export const remoteTools = [
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
    // Añadir las otras herramientas remotas aquí
];
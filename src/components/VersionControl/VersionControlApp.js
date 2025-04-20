import React, { useState } from 'react';
import { localTools, remoteTools } from '../../data/versionControlData';
import IntroTab from './Tabs/IntroTab';
import LocalTab from './Tabs/LocalTab';
import RemoteTab from './Tabs/RemoteTab';
import ComparisonTab from './Tabs/ComparisonTab';

function VersionControlApp() {
    const [activeTab, setActiveTab] = useState('intro');
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCard = (id) => {
        if (expandedCard === id) {
            setExpandedCard(null);
        } else {
            setExpandedCard(id);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            {/* Header */}
            <header className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h1 className="text-3xl font-bold text-center text-indigo-800">Herramientas de Versionamiento</h1>
                <p className="text-gray-600 text-center mt-2">
                    Explora las características de diferentes sistemas de control de versiones
                </p>
            </header>

            {/* Navigation */}
            <nav className="bg-white rounded-lg shadow-md p-2 mb-6">
                <ul className="flex justify-center space-x-4">
                    {/* Botones de navegación... */}
                </ul>
            </nav>

            {/* Main content */}
            <main className="flex-grow">
                {activeTab === 'intro' && <IntroTab />}
                {activeTab === 'local' && (
                    <LocalTab
                        localTools={localTools}
                        expandedCard={expandedCard}
                        toggleCard={toggleCard}
                    />
                )}
                {/* Otras pestañas... */}
            </main>

            {/* Footer */}
            <footer className="mt-6 bg-white rounded-lg shadow-md p-4">
                <p className="text-center text-gray-600 text-sm">
                    Creado con React - Herramientas de Versionamiento © {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
}

export default VersionControlApp;
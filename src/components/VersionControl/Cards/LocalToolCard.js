import React from 'react';

function LocalToolCard({ tool, isExpanded, onToggle }) {
    return (
        <div
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${isExpanded ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'}`}
        >
            <div
                className="p-4 cursor-pointer flex items-center justify-between"
                onClick={onToggle}
            >
                <div className="flex items-center">
                    <span className="text-3xl mr-3">{tool.icon}</span>
                    <h3 className="text-xl font-medium text-blue-800">{tool.name}</h3>
                </div>
                <span className="text-gray-400">
          {isExpanded ? '▲' : '▼'}
        </span>
            </div>

            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
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
    );
}

export default LocalToolCard;
import React from 'react';
import CodeSnippetDropdown from './CodeSnippetDropdown'; // Import the CodeSnippetDropdown component
import { useAppState } from '../../Context/AppContext';

export default function CodeSnippetContainer() {
    const { state } = useAppState();
    const snippetCollections = state.snippetCollections;

    return (
        <div>
            {snippetCollections && Array.isArray(snippetCollections) ? (
                snippetCollections.map((collection, index) => (
                    
                    // <div>{collection.title}</div>
                    <CodeSnippetDropdown key={index} collection={collection} />
                ))
            ) : (
                <p>No snippet collections available.</p>
            )}
        </div>
    );
}

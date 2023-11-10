import React from 'react';
import CodeSnippetDropdown from './CodeSnippetDropdown';
import { useAppState } from '../../Context/AppContext';

export default function CodeSnippetContainer() {
    const { state } = useAppState();
    const snippetCollections = state.snippetCollections;

    return (
        <div style={{
            width:"100%",
            justifyContent:"center",
            alignItems:"center",
            display:"flex",
            flexDirection:"column"
        }}>
            {Array.isArray(snippetCollections) ? (
                snippetCollections.map((collection, index) => (
                    <CodeSnippetDropdown key={index} collection={collection} />
                ))
            ) : (
                <p>No snippet collections available.</p>
            )}
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import compilerLogo from '../images/editor-logo.png';
import webeditorLogo from '../images/webeditor-logo.png'
import './DevHomePage.css'

export default function UpperCompilers({tools, description}) {
    // Use the initial value directly in useState
    const [tool, setTool] = useState(compilerLogo);
    const [title, setTitle] = useState('');

    // Update the tool state based on props
    useEffect(() => {
        if (tools === 'compiler') {
            setTool(compilerLogo);
            setTitle("Online Compiler")
        } else if (tools === 'editor') {
            setTool(webeditorLogo);
            setTitle("Web Editor");
        }
    }, [tools]); // Dependency array to watch for changes in tools

    return (
        <>
            <div class="card ToolCards upper-tool-card">
                <img src={tool} class="card-img-top cardImage" alt="..." />
                <div class="card-body cardBody">
                    <h3 className='card-title'>{title}</h3>
                    <p className='upper-card-desc'>{description}</p>
                    <a href="#" class="btn btn-primary">Open App</a>
                </div>
            </div>
        </>
    )
}
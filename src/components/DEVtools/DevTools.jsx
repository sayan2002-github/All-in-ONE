import React, { useState, useEffect } from 'react';
import noteLogo from '../images/note-logo.png';
import chatLogo from '../images/chat-logo.png'
import whiteboardLogo from '../images/whiteboard-logo.png'
import './DevHomePage.css'

function DevTools({tools, description}) {
  // Use the initial value directly in useState
  const [tool, setTool] = useState(noteLogo);
  const [title, setTitle] = useState('');

  // Update the tool state based on props
  useEffect(() => {
    if (tools === 'chat') {
      setTool(chatLogo);
      setTitle("Ask Me")
    } else if (tools === 'whiteboard') {
      setTool(whiteboardLogo);
      setTitle("Whiteboard")
    } else {
      setTool(noteLogo);
      setTitle("Keep Note's")
    }
  }, [tools]); // Dependency array to watch for changes in tools

  return (
    <>
      <div class="card ToolCards lower-tool-card">
        <img src={tool} class="card-img-top cardImage" alt="..." />
        <div class="card-body cardBody">
          <h4 className='card-title'>{title}</h4>
          <p>{description}</p>
          <a href="#" class="btn btn-primary">Open App</a>
        </div>
      </div>
    </>
  );
}

export default DevTools;

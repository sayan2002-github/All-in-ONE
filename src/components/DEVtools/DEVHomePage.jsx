import React from 'react'
import DevTools from './DevTools';
import './DevHomePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenClip, faPenFancy, faChalkboard, faCode, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import UpperCompilers from './DevCompilers';

function DEVHomePage() {
    return (
        <>
            <div className='container DevContainer'>
                <div className="row">
                    <div className="col ToolContainer">
                        <p className='card-headers upper-card-headers'><FontAwesomeIcon icon={faCode} />&nbsp; Online Compiler</p>
                        <UpperCompilers className='DevTools' tools='compiler' description="It is a tool that allows you to compile source code and run it in several different programming languages online. It converts the text-based source code into an executable representation known as object code. In this online compiler you can choose multiple language (such as - Java, Python, C and C++) as you specific coding language."/>
                    </div>
                    <div className="col ToolContainer">
                        <p className='card-headers upper-card-headers'><FontAwesomeIcon icon={faPenFancy} />&nbsp; Web Editor</p>
                        <UpperCompilers className='DevTools' tools='editor' description="This is an online platform that provide an embedded HTML, CSS and JavaScript Editor for frontend designers and web developers. Built your website and showcase it.CodePen is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. It functions as an online code editor and open-source learning environment."/>
                    </div>
                </div>

                <div className="row">
                    <div className="col ToolContainer">
                        <p className='card-headers'><FontAwesomeIcon icon={faMicrochip} />&nbsp; Ask Me</p>
                        <DevTools className='DevTools' tools='chat' description="It is a chat bot assistant that uses ChatGPT API and GPT 4 to provide quick responses to questions, recommendations, and topics. This app is embedded for your betterment, and is available in many languages."></DevTools>
                    </div>
                    <div className="col ToolContainer">
                        <p className='card-headers'><FontAwesomeIcon icon={faChalkboard} />&nbsp; White Board</p>
                        <DevTools className='DevTools' tools='whiteboard' description="Witeboard is a fast real-time online whiteboard for your team. Get hands-on right away with the Web whiteboard for instant collaboration, where you can brainstorm, share ideas and manage projects without signing-up."></DevTools>
                    </div>
                    <div className="col ToolContainer">
                        <p className='card-headers'><FontAwesomeIcon icon={faPenClip} />&nbsp; KeepNote</p>
                        <DevTools className='DevTools' tools='note' description="Keep Note is a free note-taking app that lets you create, edit, and share notes, lists. It is an online but secure ans user-specific platform to keep your note safe, organized and easily accessable from anywhere through internet."></DevTools>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DEVHomePage
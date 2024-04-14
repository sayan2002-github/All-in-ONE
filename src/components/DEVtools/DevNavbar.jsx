import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faPenClip, faPenFancy, faMicrochip, faChalkboard, faCode, faRightFromBracket, faGreaterThan, } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import './DevNavbar.css'

function DevNavbar() {

  const openProfile = (
    <Popover id="popover-basic" className='settings-body'>
      <Popover.Header as="h2"><FontAwesomeIcon icon={faCircleUser} /> &nbsp; Profile Name</Popover.Header>
      <Popover.Body>
        <div className='popoverBodyUpper'>
          <a href='#' className="popoverItems">
            <span><FontAwesomeIcon icon={faCode} /> &nbsp;Online Compiler</span>
            <span><FontAwesomeIcon icon={faGreaterThan} /></span>
          </a>
          <a href='#' className="popoverItems">
            <span><FontAwesomeIcon icon={faPenFancy} /> &nbsp;Web Editor</span>
            <span><FontAwesomeIcon icon={faGreaterThan} /></span>
          </a>
          <a href='#' className="popoverItems">
            <span><FontAwesomeIcon icon={faMicrochip} /> &nbsp;Ask Me</span>
            <span><FontAwesomeIcon icon={faGreaterThan} /></span>
          </a>
          <a href='#' className="popoverItems">
            <span><FontAwesomeIcon icon={faChalkboard} /> &nbsp;White Board</span>
            <span><FontAwesomeIcon icon={faGreaterThan} /></span>
          </a>
          <a href='#' className="popoverItems">
            <span><FontAwesomeIcon icon={faPenClip} /> &nbsp;KeepNote</span>
            <span><FontAwesomeIcon icon={faGreaterThan} /></span>
          </a>
        </div>

        <div className='popoverBodyLower'>
          <a href='#' className="popoverItems">
            <span><FontAwesomeIcon icon={faRightFromBracket} /> &nbsp;Logout</span>
          </a>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <nav className="navbar bg-dark border-body fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">All in One TECH</a>

          <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={openProfile
          }>
            <Button variant="btn btn-dark" className='mx-1 px-2 nav-btn-r'>
              <FontAwesomeIcon icon={faCircleUser} className='user-logo'/>
            </Button>
          </OverlayTrigger>
        </div>
      </nav>
    </>
  )
}

export default DevNavbar
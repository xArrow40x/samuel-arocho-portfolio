import PropTypes from 'prop-types'
import React from 'react'
import { FaReact } from "@react-icons/all-files/fa/FaReact"
import { FaJava } from "@react-icons/all-files/fa/FaJava"
import { FaMapPin } from "@react-icons/all-files/fa/FaMapPin"

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Samuel Arocho</h1>
        <p>
          A Software Developer{' '}
          with experience in <FaReact/> React, <FaJava/> Java, and more!
          <br />
          <FaMapPin/>Boston, Ma
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('photography')
            }}
          >
            Photography
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

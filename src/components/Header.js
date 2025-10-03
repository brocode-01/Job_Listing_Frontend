"use client"

import { Component } from "react"

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
    <rect width="32" height="32" rx="6" fill="#1e293b"/>
    <path d="M8 24V10C8 9.44772 8.44772 9 9 9H15V24H8Z" fill="#60A5FA"/>
    <path d="M17 24V6C17 5.44772 17.4477 5 18 5H23C23.5523 5 24 5.44772 24 6V24H17Z" fill="#60A5FA"/>
    <rect x="10" y="12" width="3" height="3" rx="0.5" fill="#1e293b"/>
    <rect x="10" y="16" width="3" height="3" rx="0.5" fill="#1e293b"/>
    <rect x="19" y="8" width="3" height="3" rx="0.5" fill="#1e293b"/>
    <rect x="19" y="12" width="3" height="3" rx="0.5" fill="#1e293b"/>
    <rect x="19" y="16" width="3" height="3" rx="0.5" fill="#1e293b"/>
    <rect x="6" y="24" width="20" height="3" rx="1" fill="#60A5FA"/>
  </svg>
)

class Header extends Component {
  render() {
    const { onPostJobClick, onScrapeJobsClick, isScrapingJobs } = this.props

    return (
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Logo />
              <span className="logo-text">JobHunt Pro</span>
            </div>
            <nav className="nav">
              <button className="btn btn-outline" onClick={onPostJobClick}>
                Post A Job
              </button>
              <button className="btn btn-primary" onClick={onScrapeJobsClick} disabled={isScrapingJobs}>
                {isScrapingJobs ? "Scraping..." : "Scrape Jobs"}
              </button>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default Header

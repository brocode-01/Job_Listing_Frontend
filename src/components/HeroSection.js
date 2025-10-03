"use client"

import { Component } from "react"

class HeroSection extends Component {
  render() {
    const { searchTerm, onSearchChange, totalJobs } = this.props

    return (
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Connect with Jobs 
              <br />
              That Align with Your Strengths
            </h1>
            <p className="hero-subtitle">
            You can scrape Linkedin Jobs by clicking Scrape Button
            <br></br>
              Explore {totalJobs > 0 ? `${totalJobs}+` : 'many'} active roles and new opportunities land every week. Your dream job is one click away!
            </p>

            <div className="search-container">
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Enter Keyword or Job Title or Location"
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="search-input"
                />
                <button className="search-btn">Search Jobs</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HeroSection

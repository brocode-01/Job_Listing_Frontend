"use client"

import { Component } from "react"

class FilterSidebar extends Component {
  render() {
    const { filters, sortBy, stats, uniqueLocations, uniqueCompanies, onFilterChange, onSortChange, onClearFilters } =
      this.props

    return (
      <aside className="filter-sidebar">
        <div className="filter-card">
          <div className="filter-header">
            <span className="filter-icon">⚙️</span>
            <h3>Filters</h3>
          </div>

          <div className="filter-group">
            <label className="filter-label">Sort By</label>
            <select value={sortBy} onChange={(e) => onSortChange(e.target.value, "desc")} className="filter-select">
              <option value="posted_date">Date Posted</option>
              <option value="title">Job Title</option>
              <option value="company">Company</option>
              <option value="location">Location</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Location</label>
            <select
              value={filters.location}
              onChange={(e) => onFilterChange("location", e.target.value)}
              className="filter-select"
            >
              <option value="">All Locations</option>
              {uniqueLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Company</label>
            <select
              value={filters.company}
              onChange={(e) => onFilterChange("company", e.target.value)}
              className="filter-select"
            >
              <option value="">All Companies</option>
              {uniqueCompanies.map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Job Type</label>
            <select
              value={filters.jobType}
              onChange={(e) => onFilterChange("jobType", e.target.value)}
              className="filter-select"
            >
              <option value="">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Experience Level</label>
            <select
              value={filters.experience}
              onChange={(e) => onFilterChange("experience", e.target.value)}
              className="filter-select"
            >
              <option value="">All Levels</option>
              <option value="Entry">Entry Level</option>
              <option value="Mid">Mid Level</option>
              <option value="Senior">Senior Level</option>
            </select>
          </div>

          <button className="btn btn-outline btn-full" onClick={onClearFilters}>
            Clear All Filters
          </button>
        </div>

        {stats && (
          <div className="stats-card">
            <h3>Job Statistics</h3>
            <div className="stats-list">
              <div className="stat-item">
                <span>Total Jobs:</span>
                <span className="stat-value">{stats.total_jobs}</span>
              </div>
              <div className="stat-item">
                <span>Scraped Jobs:</span>
                <span className="stat-value">{stats.scraped_jobs}</span>
              </div>
              <div className="stat-item">
                <span>Manual Jobs:</span>
                <span className="stat-value">{stats.manual_jobs}</span>
              </div>
            </div>
          </div>
        )}
      </aside>
    )
  }
}

export default FilterSidebar

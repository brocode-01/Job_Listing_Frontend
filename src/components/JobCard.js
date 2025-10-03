"use client"

import { Component } from "react"

class JobCard extends Component {
  formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "1 day ago"
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
    return `${Math.ceil(diffDays / 30)} months ago`
  }

  render() {
    const { job, onDelete } = this.props

    return (
      <div className="job-card">
        <div className="job-card-content">
          <div className="job-main">
            <div className="company-logo">{job.company.charAt(0)}</div>

            <div className="job-details">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">{job.company}</p>

              <div className="job-meta">
                <span className="job-meta-item">📍 {job.location}</span>
                {job.salary && <span className="job-meta-item">💰 {job.salary}</span>}
                <span className="job-meta-item">🕒 {this.formatDate(job.posted_date)}</span>
              </div>

              <div className="job-badges">
                <span className="badge badge-secondary">{job.job_type}</span>
                <span className="badge badge-outline">{job.experience_level}</span>
                {job.scraped && <span className="badge badge-success">Scraped</span>}
              </div>

              {job.description && <p className="job-description">{job.description}</p>}
            </div>
          </div>

          <div className="job-actions">
            {job.application_url ? (
              <a href={job.application_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Apply Now
              </a>
            ) : (
              <button className="btn btn-disabled" disabled>
                No URL
              </button>
            )}
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(job.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default JobCard

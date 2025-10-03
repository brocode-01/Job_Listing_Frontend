"use client"

import { Component } from "react"

class AddJobModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        title: "",
        company: "",
        location: "",
        description: "",
        salary: "",
        job_type: "Full-time",
        experience_level: "Mid",
        application_url: "",
      },
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.formData)
  }

  render() {
    const { onClose } = this.props
    const { formData } = this.state

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Add New Job</h2>
            <button className="modal-close" onClick={onClose}>
              ×
            </button>
          </div>

          <form onSubmit={this.handleSubmit} className="job-form">
            <div className="form-row">
              <div className="form-group">
                <label>Job Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={this.handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Company *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={this.handleInputChange}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={this.handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Salary</label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={this.handleInputChange}
                  placeholder="e.g., $80,000 - $120,000"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Job Type</label>
                <select
                  name="job_type"
                  value={formData.job_type}
                  onChange={this.handleInputChange}
                  className="form-select"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div className="form-group">
                <label>Experience Level</label>
                <select
                  name="experience_level"
                  value={formData.experience_level}
                  onChange={this.handleInputChange}
                  className="form-select"
                >
                  <option value="Entry">Entry Level</option>
                  <option value="Mid">Mid Level</option>
                  <option value="Senior">Senior Level</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Application URL</label>
              <input
                type="url"
                name="application_url"
                value={formData.application_url}
                onChange={this.handleInputChange}
                placeholder="https://example.com/apply"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Job Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={this.handleInputChange}
                rows="4"
                placeholder="Describe the job requirements and responsibilities..."
                className="form-textarea"
              />
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-outline" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddJobModal

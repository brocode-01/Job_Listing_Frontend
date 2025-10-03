"use client"

import { Component } from "react"
import FilterSidebar from "../components/FilterSidebar"
import JobCard from "../components/JobCard"

class JobListScreen extends Component {
  render() {
    const {
      jobs,
      filters,
      sortBy,
      sortOrder,
      stats,
      uniqueLocations,
      uniqueCompanies,
      onFilterChange,
      onSortChange,
      onDeleteJob,
      onClearFilters,
    } = this.props

    return (
      <div className="job-list-screen">
        <div className="container">
          <div className="content-layout">
            <FilterSidebar
              filters={filters}
              sortBy={sortBy}
              sortOrder={sortOrder}
              stats={stats}
              uniqueLocations={uniqueLocations}
              uniqueCompanies={uniqueCompanies}
              onFilterChange={onFilterChange}
              onSortChange={onSortChange}
              onClearFilters={onClearFilters}
            />

            <main className="main-content">
              <div className="jobs-header">
                <h2 className="jobs-title">
                  {jobs.length} Job{jobs.length !== 1 ? "s" : ""} Found
                </h2>
                <div className="sort-controls">
                  <select
                    value={sortOrder}
                    onChange={(e) => onSortChange(sortBy, e.target.value)}
                    className="sort-select"
                  >
                    <option value="desc">Newest</option>
                    <option value="asc">Oldest</option>
                  </select>
                </div>
              </div>

              <div className="jobs-list">
                {jobs.length > 0 ? (
                  jobs.map((job) => <JobCard key={job.id} job={job} onDelete={onDeleteJob} />)
                ) : (
                  <div className="no-jobs">
                    <div className="no-jobs-icon">🔍</div>
                    <h3>No jobs found</h3>
                    <p>Try adjusting your search criteria or filters</p>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default JobListScreen

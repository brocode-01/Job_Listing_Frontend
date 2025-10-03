"use client"

import { Component } from "react"
import "./App.css"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import JobListScreen from "./screens/JobListScreen"
import AddJobModal from "./components/AddJobModal"
import BackendService from "./services/BackendService"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      filteredJobs: [],
      stats: null,
      loading: true,
      searchTerm: "",
      filters: {
        location: "",
        company: "",
        jobType: "",
        experience: "",
      },
      sortBy: "posted_date",
      sortOrder: "desc",
      showAddJobModal: false,
      isScrapingJobs: false,
    }

    this.backendService = new BackendService()
  }

  componentDidMount() {
    this.fetchJobs()
    this.fetchStats()
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.jobs !== this.state.jobs ||
      prevState.searchTerm !== this.state.searchTerm ||
      prevState.filters !== this.state.filters ||
      prevState.sortBy !== this.state.sortBy ||
      prevState.sortOrder !== this.state.sortOrder
    ) {
      this.filterAndSortJobs()
    }
  }

  fetchJobs = async () => {
    try {
      const jobs = await this.backendService.getJobs()
      this.setState({ jobs, loading: false })
    } catch (error) {
      console.error("Error fetching jobs:", error)
      this.setState({ loading: false })
      alert("Error fetching jobs: " + error.message)
    }
  }

  fetchStats = async () => {
    try {
      const stats = await this.backendService.getStats()
      this.setState({ stats })
    } catch (error) {
      console.error("Error fetching stats:", error)
    }
  }

  filterAndSortJobs = () => {
    let filtered = [...this.state.jobs]
    const { searchTerm, filters, sortBy, sortOrder } = this.state

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply filters
    if (filters.location) {
      filtered = filtered.filter((job) => job.location.toLowerCase().includes(filters.location.toLowerCase()))
    }
    if (filters.company) {
      filtered = filtered.filter((job) => job.company.toLowerCase().includes(filters.company.toLowerCase()))
    }
    if (filters.jobType) {
      filtered = filtered.filter((job) => job.job_type === filters.jobType)
    }
    if (filters.experience) {
      filtered = filtered.filter((job) => job.experience_level === filters.experience)
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue, bValue

      switch (sortBy) {
        case "title":
          aValue = a.title.toLowerCase()
          bValue = b.title.toLowerCase()
          break
        case "company":
          aValue = a.company.toLowerCase()
          bValue = b.company.toLowerCase()
          break
        case "location":
          aValue = a.location.toLowerCase()
          bValue = b.location.toLowerCase()
          break
        default:
          aValue = new Date(a.posted_date).getTime()
          bValue = new Date(b.posted_date).getTime()
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    this.setState({ filteredJobs: filtered })
  }

  handleSearchChange = (searchTerm) => {
    this.setState({ searchTerm })
  }

  handleFilterChange = (filterType, value) => {
    this.setState({
      filters: {
        ...this.state.filters,
        [filterType]: value,
      },
    })
  }

  handleSortChange = (sortBy, sortOrder) => {
    this.setState({ sortBy, sortOrder })
  }

  handleAddJob = async (jobData) => {
    try {
      await this.backendService.addJob(jobData)
      this.setState({ showAddJobModal: false })
      this.fetchJobs()
      this.fetchStats()
      alert("Job added successfully!")
    } catch (error) {
      console.error("Error adding job:", error)
      alert("Error adding job: " + error.message)
    }
  }

  handleDeleteJob = async (jobId) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        await this.backendService.deleteJob(jobId)
        this.fetchJobs()
        this.fetchStats()
        alert("Job deleted successfully!")
      } catch (error) {
        console.error("Error deleting job:", error)
        alert("Error deleting job: " + error.message)
      }
    }
  }

  handleScrapeJobs = async () => {
    this.setState({ isScrapingJobs: true })
    try {
      const result = await this.backendService.scrapeJobs()
      this.fetchJobs()
      this.fetchStats()
      alert(result.message)
    } catch (error) {
      console.error("Error scraping jobs:", error)
      alert("Error scraping jobs: " + error.message)
    } finally {
      this.setState({ isScrapingJobs: false })
    }
  }

  clearFilters = () => {
    this.setState({
      searchTerm: "",
      filters: {
        location: "",
        company: "",
        jobType: "",
        experience: "",
      },
    })
  }

  getUniqueValues = (key) => {
    return [...new Set(this.state.jobs.map((job) => job[key]).filter(Boolean))]
  }

  render() {
    const { filteredJobs, stats, loading, searchTerm, filters, sortBy, sortOrder, showAddJobModal, isScrapingJobs } =
      this.state

    if (loading) {
      return (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading jobs...</p>
        </div>
      )
    }

    return (
      <div className="app">
        <Header
          onPostJobClick={() => this.setState({ showAddJobModal: true })}
          onScrapeJobsClick={this.handleScrapeJobs}
          isScrapingJobs={isScrapingJobs}
        />

        <HeroSection
          searchTerm={searchTerm}
          onSearchChange={this.handleSearchChange}
          totalJobs={stats?.total_jobs || 0}
        />

        <JobListScreen
          jobs={filteredJobs}
          filters={filters}
          sortBy={sortBy}
          sortOrder={sortOrder}
          stats={stats}
          uniqueLocations={this.getUniqueValues("location")}
          uniqueCompanies={this.getUniqueValues("company")}
          onFilterChange={this.handleFilterChange}
          onSortChange={this.handleSortChange}
          onDeleteJob={this.handleDeleteJob}
          onClearFilters={this.clearFilters}
        />

        {showAddJobModal && (
          <AddJobModal onClose={() => this.setState({ showAddJobModal: false })} onSubmit={this.handleAddJob} />
        )}
      </div>
    )
  }
}

export default App

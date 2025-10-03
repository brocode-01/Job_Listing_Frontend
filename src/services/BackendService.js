class BackendService {
  constructor() {
    this.baseURL = "http://localhost:5000/api"
  }

  async makeRequest(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("Backend request failed:", error)
      throw error
    }
  }

  // Job CRUD operations
  async getJobs(filters = {}) {
    const queryParams = new URLSearchParams()

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        queryParams.append(key, filters[key])
      }
    })

    const endpoint = queryParams.toString() ? `/jobs?${queryParams}` : "/jobs"
    return this.makeRequest(endpoint)
  }

  async addJob(jobData) {
    return this.makeRequest("/jobs", {
      method: "POST",
      body: JSON.stringify(jobData),
    })
  }

  async updateJob(jobId, jobData) {
    return this.makeRequest(`/jobs/${jobId}`, {
      method: "PUT",
      body: JSON.stringify(jobData),
    })
  }

  async deleteJob(jobId) {
    return this.makeRequest(`/jobs/${jobId}`, {
      method: "DELETE",
    })
  }

  // Statistics
  async getStats() {
    return this.makeRequest("/stats")
  }

  // Scraping
  async scrapeJobs() {
    return this.makeRequest("/scrape", {
      method: "POST",
    })
  }

  // Health check
  async healthCheck() {
    return this.makeRequest("/health")
  }
}

export default BackendService

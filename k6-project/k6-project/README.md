# K6 Load Testing Project

This project is designed to perform load testing using K6. It includes scripts, user data, and utility functions to facilitate efficient testing.

## Project Structure

```
k6-project
├── scripts
│   └── main.js          # Main script for load testing
├── data
│   └── users.csv       # User data for parameterized testing
├── utils
│   └── helpers.js      # Utility functions for K6 scripts
├── package.json         # NPM configuration file
└── README.md            # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd k6-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

To run the load tests, execute the following command:

```bash
k6 run scripts/main.js
```

## Load Test Scenarios

This project includes various load test scenarios defined in `scripts/main.js`. Modify the script as needed to adjust the test parameters and scenarios.

## Contributing

Feel free to submit issues or pull requests to improve the project.
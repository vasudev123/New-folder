// This is the main script for K6. It contains the load test logic, including the setup, execution, and teardown of the test scenarios.

import http from 'k6/http';
import { check, sleep } from 'k6';
import { getUsers } from '../utils/helpers.js';
import users from '../data/users.csv';

export const options = {
    vus: 10, // Number of virtual users
    duration: '30s', // Duration of the test
};

export default function () {
    const user = getUsers(users);
    const response = http.get(`https://example.com/api/user/${user.id}`);

    check(response, {
        'is status 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200,
    });

    sleep(1); // Sleep for 1 second between iterations
}

export function setup() {
    // Setup logic before the test starts
}

export function teardown(data) {
    // Teardown logic after the test ends
}
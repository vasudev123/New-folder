import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 50,
    iterations: 1,
};

export default function () {
    // Replace with your API login endpoint and credentials
    const url = 'https://your-api.com/login';
    const payload = JSON.stringify({
        username: 'your_username',
        password: 'your_password',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let res = http.post(url, payload, params);

    check(res, {
        'login succeeded': (r) => r.status === 200,
    });

    // Optionally, print the response body
    // console.log(res.body);
}
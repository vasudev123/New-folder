import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 50, // number of virtual users
    duration: '300s', // test duration
};

export default function () {
    const url = 'https://test.k6.io/login';
    const payload = JSON.stringify({
        username: 'testuser',
        password: 'testpass',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);
    sleep(1);
}
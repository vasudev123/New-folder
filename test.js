import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10, // number of virtual users
    duration: '30s', // test duration
};

export default function () {
    let res = http.get('https://test.k6.io');
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
    sleep(1);
}
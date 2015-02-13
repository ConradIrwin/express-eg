This is a test case for https://github.com/bugsnag/bugsnag-node/issues/16.

Run it behind an nginx with the following configuration:


```
server {
    listen 9090;
    location / {
        proxy_pass http://localhost:3333;
    }
    client_max_body_size 1G;
}
```

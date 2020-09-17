# website
The website for the Civic Tech Index

### How to Run with Docker
1) Build the image: `docker build -t [image-name] .`
2) Run the image: `docker run -p [port#]:80 [image-name]`
3) Open in browser: "localhost:[port#]"

*<ins>Example</ins>:
`docker build -t webmasterimage .`
`docker run -p 80:80 webmasterimage`
In browser go to localhost:80*
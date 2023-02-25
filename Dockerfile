# Modified from https://lipanski.com/posts/smallest-docker-image-static-website
FROM busybox:1.35

# Create a non-root user to own the files and run our server
RUN adduser -D static
USER static
WORKDIR /home/static

# Copy the static website
# Use the .dockerignore file to control what ends up inside the image!
COPY dist/listing.txt ./index.html
COPY dist/* ./

RUN tree

EXPOSE 3000

# Run BusyBox httpd
CMD ["busybox", "httpd", "-f", "-vv", "-p", "3000"]

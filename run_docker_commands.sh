echo "<begin> Building docker"
docker build -t react_acm -f Dockerfile.prod .
echo "<end> Building docker"
echo "<begin> Running docker"
docker run -d --name react_acm -p 80:80 react_acm

# NodeRestAPI - This project is a simple REST API based on Restify.

## Project can be built into a Docker container

Run the Dockerfile to build this into a docker container.  After that you can move this to a Kubernetes cluster with the following.

To save local Docker image only

1.	Go to directory with Dockerfile
2.	docker build -t api-node:v2 .
3.	Create Deployment: kubectl run api-node –image=api-node:v2 –port=3000 –image-pull-policy=Never
4.	Create Service: kubectl expose deployment api-node-2 --type=LoadBalancer
5.	Get path to service: minikube service api-node-2

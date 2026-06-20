# Zuri Market DevOps Project

## Overview

Zuri Market is a full-stack cloud-native application deployed using modern DevOps tools and workflows.

The project demonstrates:

* Frontend and backend application development
* Docker containerization
* Kubernetes orchestration with k3s
* Infrastructure provisioning using Terraform
* AWS EC2 cloud deployment
* CI/CD automation with GitHub Actions
* DockerHub image registry integration
* Security scanning in CI/CD pipelines

---

# Architecture

## Technologies Used

### Frontend

* React
* Vite

### Backend

* Node.js
* Express

### DevOps & Cloud

* Docker
* Kubernetes (k3s)
* Terraform
* AWS EC2
* GitHub Actions
* DockerHub

---

# Project Structure

```text
zuri-market/
│
├── backend/
├── frontend/
├── terraform/
├── k8s/
├── .github/workflows/
└── README.md
```

---

# Features

* Containerized frontend and backend
* Kubernetes deployments and services
* Infrastructure as Code with Terraform
* Automated CI/CD pipeline
* Docker image security scanning
* Public cloud deployment on AWS

---

# Docker Images

## Backend

nfisu/zuri-backend:latest

## Frontend

nfisu/zuri-frontend:latest

---

# Live Application

## Frontend

http://35.179.176.115:30388
## Backend

http://35.179.176.115:30050
---

# Kubernetes Deployment

## Deploy manifests

```bash
kubectl apply -f k8s/
```

## Check pods

```bash
kubectl get pods
```

## Check services

```bash
kubectl get services
```

---

# Terraform Deployment

## Initialize Terraform

```bash
terraform init
```

## Validate configuration

```bash
terraform validate
```

## Deploy infrastructure

```bash
terraform apply
```

---

# CI/CD Pipeline

The GitHub Actions workflow performs:

* npm audit security scanning
* Docker image builds
* Trivy image scanning
* DockerHub image push automation

Workflow file:

```text
.github/workflows/deploy.yml
```

---

# Security

Security measures implemented:

* Docker image scanning with Trivy
* npm dependency vulnerability scanning
* Environment variable management
* Kubernetes service isolation
* AWS security group configuration

---

# Future Improvements

* HTTPS with Ingress
* Domain name integration
* Monitoring and logging
* Horizontal pod autoscaling
* AWS Secrets Manager integration

---

# Author

nfisu

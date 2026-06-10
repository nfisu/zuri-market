# Zuri Market Frontend

## Overview

This is the frontend application for the Zuri Market DevOps project.

The frontend is built using:

* React
* Vite
* Docker
* Kubernetes

---

# Features

* React frontend interface
* Backend API integration
* Docker containerization
* Kubernetes deployment support

---

# Local Development

## Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

---

# Backend API

The frontend connects to:

```text
http://13.40.221.165:30050
```

---

# Docker

## Build image

```bash
docker build -t zuri-frontend .
```

---

# Kubernetes

## Deployment file

```text
k8s/frontend-deployment.yaml
```

## Service file

```text
k8s/frontend-service.yaml
```

---

# Live Application

```text
http://13.40.221.165:30388
```

---

# Author

nfisu
# Mern X Simulator

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Development](#development)
5. [API Routes](#api-routes)
6. [Environment Variables](#environment-variables)
7. [Testing](#testing)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

A sample prototype for a social media app, emulating the popular X platform, this app is made only for learning purposes, using a simple login system an a small dashboard, it's created using NextJS Fullstack framework, Typescript, and Tailwind, as database MongoDB was selected, and the API strategy is REST.

## Installation

Download the repository using the command line, go to the app folder and run the npm script, make sure to install mongodb

```bash
git clone https://github.com/DanielRed007/mern-x-simulator.git
cd app/
npm install
```

## Configuration

Go to the seed folder inside the project, and import the seed data using the .json files to correctly setup the initial test data.

## Development

After the project is setup, just run the nextjs script to locally run the project

```bash
cd app
npm run dev
```

## API Routes

GET /api/profiles
Description: Returns a list of profiles.

POST /api/auth action login
Description: Logs in a registered user.

POST /api/auth action register
Description: Creates a new user.

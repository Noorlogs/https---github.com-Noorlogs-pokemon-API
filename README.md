# Project Name

A RESTful API project for managing characters, types, pokemons, and users with CRUD operations.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [User APIs](#user-apis)
  - [Pokemon APIs](#pokemon-apis)
  - [Type APIs](#type-apis)
  - [Character APIs](#character-apis)
- [Contributing](#contributing)

## Introduction

This project provides a set of CRUD APIs for managing characters, types, pokemons, and users. It's built using Node.js and Express.js, with each resource having its own dedicated set of API endpoints.

## Getting Started

### Prerequisites

- Node.js (version x.x.x)
- npm (version x.x.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git

2.Navigate to the project directory:
cd your-repo

3.Install dependencies:
npm install

4.Rename .env.example to .env and update the necessary environment variables.

5.Start the server:
npm start

Usage

User APIs

POST /api/signup: Create a new user.
POST /api/login: User login.
GET /api/get-user-id: Get user details by ID.
GET /api/all-users: Get all users.
PUT /api/update-user: Update user profile.
DELETE /api/delete-user: Delete user profile.

Pokemon APIs

POST /api/add-pokemon: Add a new pokemon.
GET /api/all-pokemon: Get all pokemons.
GET /api/pokemon-id: Get pokemon by ID.
PUT /api/update-pokemon: Update pokemon details.
DELETE /api/delete-pokemon: Delete a pokemon.

Type APIs

POST /api/add-pokemon-type: Add a new pokemon type.
GET /api/all-pokemon-type: Get all pokemon types.
GET /api/pokemon-type-by-id: Get pokemon type by ID.
PUT /api/update-pokemon-type: Update pokemon type.
DELETE /api/delete-pokemon-type: Delete a pokemon type.

Character APIs

POST /api/add-character: Add a new character.
GET /api/all-character: Get all characters.
GET /api/character-by-id: Get character by ID.
PUT /api/update-character: Update character details.
DELETE /api/delete-character: Delete a character.


Contributing
Contributions are welcome! If you find any issues or want to add enhancements, feel free to create a pull request.
# [GitHub Repository](https://github.com/your-username/your-repo)

# Ledger Calculator

## Overview

React + Express application that fetches a base64 encoded HTML document from a server and presents the tables in a UI. The user can enter a formula to perform basic arithmetic operations on the item prices.

## Description

A special calculator for the accounting department.
Each week they receive an HTML document that is base64 encoded. The document
contains two tables: A and B. Each table has two columns: Item and Price.
They want you to build a calculator that will fetch the document from a server and present
the tables in a UI. This document may have inline styles, and they want those to be
preserved.
Near the tables, they want an input field that allows users to enter a formula to perform
basic arithmetic operations on the item prices.
The acceptable values are:
- A
- B
- A+B
- A+A
- A-B
- A-A
- B+A
- B+B
- B-A
- B-B
- A*B
- A*A
- B*B
- B*A
- A/B
- B/B
- B/A
- A/A

Any other inputs are considered invalid and should not be permitted.
If the user enters A, they can expect to see the sum of all the item prices in table A. If they
enter B, they will see a sum of the item prices in table B. If they enter A+B, they will see a
sum of the sums of table A and B, and so on.

## Requirements
- nodejs 21.x
- npm 10.x

## Setup

### Server

```bash
cd server
npm install
```

### Client

```bash
cd client
npm install
```

## Running

### Server

```bash
cd server
npm start
```

### Client

```bash
cd client
npm start
```

Visit: [http://localhost:5173/](http://localhost:5173/)

### Testing

```bash
cd client
npm test
```

### Development

You can use *devcontainers* to run the project in a containerized environment. The project has a devcontainer configuration that will automatically install the required dependencies and run the project. See [Devcontainers documentation](https://code.visualstudio.com/docs/remote/containers) for more information.


# Contributing to Developer Portal

Thank you for your interest in contributing to the Developer Portal! This document provides guidelines and instructions for contributing to this project.

## Getting Started

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io/) 8+

### Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/developer-portal.git`
3. Navigate to the project directory: `cd developer-portal`
4. Install dependencies: `pnpm install`
5. Start the development servers: `pnpm dev`

## Development Workflow

### Branch Naming Convention

- `feature/your-feature-name` for new features
- `fix/issue-you-are-fixing` for bug fixes
- `docs/documentation-update` for documentation updates
- `refactor/what-you-are-refactoring` for code refactoring

### Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat: add new feature`
- `fix: resolve bug`
- `docs: update documentation`
- `style: formatting changes`
- `refactor: code restructuring`
- `test: add or update tests`
- `chore: maintenance tasks`

### Pull Request Process

1. Create a new branch from `main`
2. Make your changes
3. Ensure tests pass: `pnpm test`
4. Ensure linting passes: `pnpm lint`
5. Commit your changes following the commit message guidelines
6. Push to your fork and submit a pull request to the `main` branch
7. Wait for review and address any feedback

## Project Structure

```
developer-portal/
├── apps/
│   ├── portal-backend/    # Hono API
│   └── portal-frontend/   # React UI
├── packages/
│   └── shared/            # Shared types and utilities
└── infrastructure/        # Deployment scripts and worker configs
```

## Code Style

- We use ESLint and Prettier for code formatting
- TypeScript is used for all code
- Follow existing patterns in the codebase

## Testing

- Write tests for all new features and bug fixes
- Run tests with `pnpm test`
- Ensure all tests pass before submitting a pull request

## Documentation

- Update documentation for any changes to APIs, features, or behavior
- Document new features thoroughly
- Keep the README and other documentation up to date

## License

By contributing to this project, you agree that your contributions will be licensed under the project's MIT License.
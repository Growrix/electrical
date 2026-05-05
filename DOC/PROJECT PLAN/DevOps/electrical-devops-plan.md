# Electrical DevOps Plan

## Deployment Topology
- `web/` (Next.js) and `studio/` (Sanity Studio) deployed as isolated runtimes.
- Shared integration secrets managed per environment.

## CI/CD Contracts
- Keep `.github/workflows/ci.yml` for `web/` lint/test/build/e2e gates.
- Keep `.github/workflows/studio.yml` for isolated studio build checks.
- Add required environment checks before deploy jobs.

## Environment Matrix
- Dev: rapid feedback, seeded test leads.
- Staging: production-like integrations and release candidate validation.
- Prod: locked secrets, observability and alerting enabled.

## Observability And Rollback
- Structured logs, error monitoring, and lead pipeline health checks.
- Rollback strategy: previous web deploy + integration feature flag fallback.

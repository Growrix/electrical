# Electrical Backend Plan

## Service Responsibilities
- Lead intake orchestration.
- Notification fan-out to Resend and Lark.
- Bot handoff capture to operational lead queue.
- Admin workflow transitions and event logging.

## Domain Services
- `lead-intake-service`: validation, dedupe checks, persistence handoff.
- `notification-service`: email and Lark dispatch with retry policy.
- `lead-status-service`: transition control and audit events.
- `bot-escalation-service`: bot transcript summary and conversion to lead.

## Failure And Retry Model
- Idempotency key on lead intake requests.
- Retry with capped backoff for Resend/Lark failures.
- Dead-letter table for failed notifications with operator alerting.

## Operational Guardrails
- Strict input validation and anti-spam controls.
- Rate limiting on public endpoints.
- Structured logging for each lead lifecycle transition.

## Ownership Boundaries
- Backend owns orchestration logic and integration retries.
- API/Data owns schema and transport contracts.
- Security owns policy hardening and secret-management guardrails.

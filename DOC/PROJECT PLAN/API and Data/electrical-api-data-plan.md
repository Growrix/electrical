# Electrical API And Data Plan

## API Contract Surfaces
- `POST /api/leads`: create lead request from forms.
- `POST /api/bot/escalate`: convert bot conversation to human lead.
- `POST /api/contact/callback`: callback request channel.
- `GET /api/services`: public services read model.
- `GET /api/testimonials`: public testimonials read model.

## Request/Response Standards
- JSON payloads with strict schema validation.
- Error model: `code`, `message`, `requestId`, `hint`.
- Success model includes lead reference ID and next-step guidance.

## Data Model
- `lead_requests` (id, source, customer fields, message, service_ref, status, created_at).
- `lead_events` (id, lead_id, event_type, actor, metadata, created_at).
- `chat_sessions` (id, lead_id nullable, started_at, ended_at, intent, escalation_flag).
- `chat_messages` (id, session_id, role, body, created_at).
- `operator_notes` (id, lead_id, author_id, note, created_at).

## Validation And Anti-Abuse
- Honeypot + server-side rate limits.
- Minimal required fields by source channel.
- Deduplication on phone/email + near-time window.

## Contract Gates
- Frontend consumes only documented shapes.
- Backend integration side effects are asynchronous and observable.

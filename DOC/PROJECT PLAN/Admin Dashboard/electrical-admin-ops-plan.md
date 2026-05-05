# Electrical Admin Operations Plan

## Dashboard Purpose
- Enable operators to triage, respond to, and close lead requests quickly.

## Core Views
- Lead inbox by status and urgency.
- Lead detail with timeline events and contact channel actions.
- Chat escalation queue from AI assistant handoffs.
- SLA alerts and overdue response panel.

## Workflow States
- `new` -> `contacted` -> `qualified` -> `booked` or `closed_lost`.
- Mandatory reason capture for `closed_lost`.

## Operator Actions
- Assign owner.
- Add note.
- Trigger resend of acknowledgment email.
- Trigger Lark escalation ping.
- Schedule callback marker.

## Audit And Reporting
- Every state transition generates an immutable event.
- Daily summary export for operations review.

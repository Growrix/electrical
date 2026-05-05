# Electrical Supabase Plan

## Ownership
- Supabase Postgres stores operational lead and chatbot escalation data.
- Supabase Auth controls admin/operator access.
- Supabase Storage holds private operational attachments if required.

## Policy Model
- Public role: no direct table access.
- Service role API path: controlled inserts for public lead intake.
- Authenticated operator role: read/write access to assigned lead queues.
- Audit trail writes immutable lead events for all status changes.

## Schema And Migration Approach
- SQL-first migration files under implementation repo.
- Seed scripts for non-production test data.
- Prisma deferred until schema complexity demands ORM abstraction.

## Runtime And Ops
- Environment-separated Supabase projects (dev, staging, prod).
- Scheduled retention cleanup for chat/session metadata as policy defines.

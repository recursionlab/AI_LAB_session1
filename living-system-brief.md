---
description: >-
  The context spine, invariants, tensions, and critical path. Use this to get
  “whole-system mode”.
icon: compass
---

# Living System Brief

Use this page as the **context spine**.

When you want “whole system mode”, start from here.

### Speedrun mode (how we keep continuity at 1000-hour pace)

I don’t retain durable memory between sessions.

So we treat GitBook as the memory substrate.

**Rule:** every meaningful change leaves a trail in 1–2 places.

#### Phases (how we stop doing one thing at a time)

Run work by phase.

Run 2–4 lanes in parallel.

Keep WIP low.

Execution home: [Phase board](sandbox/ops-+-triage/phase-board.md).

**Current phase:** Phase 1 — Intake + governance.

#### The state vector (keep this current)

* **Current focus:** TBD
* **Next action:** TBD
* **Primary blocker:** TBD
* **Last checkpoint:** TBD (link)

#### What gets updated on every change

* This page (**Living System Brief**) when the spine/invariants/critical path shifts.
* [Ops + Triage](sandbox/ops-+-triage/) when a tension changes status/next action.
* [Worklog](sandbox/ops-+-triage/worklog.md) for the chronological “20 steps ago” trail.

#### Resume protocol (what you tell me)

When you come back, say:

> Resume from Living System Brief. Read the latest Worklog entry. Then continue with the Next action.

That restores global context fast without re-deriving.

### Canonical spine (read these first)

#### Doctrine

* [The Last Guardian Protocol](./)
* [The Last Guardian Manifesto](manifesto_readme.md)

#### Architecture + governance

* [THIS\_WILL\_ORIENT\_YOU](THIS_WILL_ORIENT_YOU.md)
* [Roadmap for Formalizing the Ψ System (v2.0)](notebooks/ROADMAP.md)
* [Contribution Guidelines for the Ψ Formalism](notebooks/CONTRIBUTING.md)

#### Production pipeline

* [Sandbox workflow](sandbox/sandbox-workflow.md)
* [Ops + Triage](sandbox/ops-+-triage/)
* [Draft specs](sandbox/draft-specs/)
* [Inbox](sandbox/inbox/)

#### Naming / indexing

* [Glossary of Ψ Formalism - v0.1](notebooks/GLOSSARY.md)

### System scan prompt (paste this)

> **SYSTEM SCAN (canonical)**
>
> Read the spine pages above. Treat them as truth.
>
> Output exactly:
>
> 1. **System map** (2 levels deep)
> 2. **Core invariants** (10 bullets)
> 3. **Top tensions** (10 bullets, each with an “owner page”)
> 4. **Critical path** (next 5 concrete edits/pages, ordered)
>
> Don’t invent new primitives. Flag missing definitions instead.

### Core invariants (current)

1. **Trust Reality** beats narrative.
2. Keep two layers: **Workbench** vs **Canon**.
3. Never promote raw dumps.
4. Promote **extracted nodes** (Concepts, Operators, Claims, Tests, Issues).
5. Canon content must fit exactly one of the four doc types.
6. Symbols must be defined before equation use (Foundations/Rosetta/Operators).
7. SemVer discipline applies to any meaning change.
8. Equations are not canonical until they pass verification (Levels 1→5).
9. Drafts can be long and inconsistent, but must stay in Draft specs.
10. Tensions are first-class artifacts. Track them explicitly.

### Tension ledger (current 10)

1. **Roadmap status drift vs reality.**
   * Owner: [Roadmap for Formalizing the Ψ System (v2.0)](notebooks/ROADMAP.md)
   * Status: open
   * Next action: Audit which Phase 1 artifacts already exist in GitBook. Then update the roadmap checkboxes.
   * Last touched: 2026-02-16
2. **Authority ambiguity inside the orientation doc (updated vs older spec).**
   * Owner: [THIS\_WILL\_ORIENT\_YOU](THIS_WILL_ORIENT_YOU.md)
   * Status: in-progress
   * Next action: Add a one-line statement defining what “canon” means on that page (scope + doc types). Keep it blunt.
   * Last touched: 2026-02-16
3. **Glossary incompleteness blocks equations (`μ` is undefined).**
   * Owner: [Glossary of Ψ Formalism - v0.1](notebooks/GLOSSARY.md)
   * Status: resolved
   * Next action: When `OPERATORS/Lambda_Core` exists, link the glossary `μ` entry to it.
   * Last touched: 2026-02-16
4. **Verification ladder exists, but pass/fail logging has no home.**
   * Owner: [Contribution Guidelines for the Ψ Formalism](notebooks/CONTRIBUTING.md)
   * Status: open
   * Next action: Decide where verification outcomes live (new Verification Log page vs per-equation sections). Then codify that rule in the guidelines.
   * Last touched: TBD
5. **Repo structure description vs GitBook structure mismatch.**
   * Owner: [The Last Guardian Protocol](./)
   * Status: open
   * Next action: Replace the repo-tree snippet with GitBook-native structure, or add a short “GitBook vs repo layout” mapping note.
   * Last touched: TBD
6. **Doc-type purity vs mixed “meta docs” (Protocol/Manifesto/Orientation).**
   * Owner: [Contribution Guidelines for the Ψ Formalism](notebooks/CONTRIBUTING.md)
   * Status: open
   * Next action: Add an explicit exception for “Meta docs”. Define allowed contents and constraints.
   * Last touched: TBD
7. **Inbox is defined as intake, but has no pinned template/examples.**
   * Owner: [Inbox](sandbox/inbox/)
   * Status: open
   * Next action: Add the dump header + one worked example + the extraction prompt. Keep it short.
   * Last touched: TBD
8. **“Split draft into canon” trigger is fuzzy.**
   * Owner: [Draft specs](sandbox/draft-specs/)
   * Status: open
   * Next action: Define a promotion threshold checklist (definition, assumptions, failure modes/falsifier, links).
   * Last touched: TBD
9. **Ops + Triage lacks a canonical place for system-wide tensions.**
   * Owner: [Ops + Triage](sandbox/ops-+-triage/)
   * Status: resolved
   * Next action: None.
   * Last touched: 2026-02-16
10. **Sandbox labels exist, but promotion/label-change rules are not explicit.**

* Owner: [Sandbox workflow](sandbox/sandbox-workflow.md)
* Status: open
* Next action: Add label transition rules (when to switch TEMP → WORKING → CANON CANDIDATE).
* Last touched: TBD

### Critical path (recommended next 5)

1. **Freeze the spine**: keep this page updated.
2. **Lock Foundations v0.2 (minimum viable)**: Ψ, Ξ, S↔Λ, coherence primitives, invariants.
3. **Lock primitives + glossary**: define λ, μ, Y, ∂ and resolve `μ`.
4. **Establish Operator Rosetta v0.2**: one translation dictionary and allowed aliases.
5. **Canonize core equations**: definitions, assumptions, failure modes, falsifiers, then run Levels 1→5.

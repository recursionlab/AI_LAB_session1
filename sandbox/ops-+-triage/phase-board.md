---
description: Parallel lanes, WIP limits, and phase gates. This is the execution layer.
icon: diagram-project
---

# Phase board

Run the speedrun by **phases**, not single tasks.

Keep 2–4 lanes active.

Keep WIP low.

### How to use

* Pick a phase.
* Run 2–4 lanes in parallel.
* Each lane has one **next action**.
* When a lane completes, pick the next action from that phase backlog.

### Global WIP rules

* Max **1** lane touching **core semantics** at a time.
  * Foundations / Operators / Equations.
* Max **3** lanes total.
* Everything else is supporting work.

### Phase plan (gates + deliverables)

#### Phase 0 — Continuity scaffold

**Goal:** make resuming trivial.

**Done when:**

* Living System Brief exists and is current.
* Tension ledger exists and is actionable.
* Worklog exists and is used.

#### Phase 1 — Intake + governance

**Goal:** high-throughput capture without canon pollution.

**Done when:**

* Inbox has a pinned dump template + worked example.
* Drafts can be split into canon with a clear checklist.
* Verification logging location is decided.

#### Phase 2 — Foundations + operators

**Goal:** freeze primitives enough to write equations.

**Done when:**

* Ψ + Ξ + S↔Λ + coherence primitives are defined.
* λ/μ/Y/∂ are defined in OPERATORS.
* Operator Rosetta exists (allowed aliases + cross-framework mapping).

#### Phase 3 — Equations + verification

**Goal:** canon dynamics that pass your ladder.

**Done when:**

* Master equation(s) are canonical.
* Each equation has assumptions + failure modes + falsifier.
* Verification outcomes are logged in the chosen place.

#### Phase 4 — Interpretation + tests

**Goal:** mappings that don’t destabilize the core.

**Done when:**

* CTMU bridge is updated to match the frozen primitives.
* Falsifiable test protocols are written and runnable.

### Current phase

* Active phase: **Phase 1 — Intake + governance**
* Target: remove workflow bottlenecks before core math work.

### Lanes (active)

#### Lane A — Intake quality

* Next action: Add pinned dump header + worked example + extraction prompt to **Inbox**.

#### Lane B — Promotion rules

* Next action: Define a promotion threshold checklist in **Draft specs**.

#### Lane C — Verification logging

* Next action: Decide where Level 1–5 verification outcomes live. Then codify it in **Contribution Guidelines**.

### Backlog (Phase 1)

* Inbox template + example.
* Promotion threshold checklist.
* Verification logging location rule.
* Meta-doc exception policy (doc-type purity).
* Repo vs GitBook structure mapping.

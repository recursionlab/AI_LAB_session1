---
description: How to dump, extract, and promote content without losing speed.
icon: wand-magic-sparkles
---

# Sandbox workflow

This is the “no back pain” pipeline.

### Mental model

Run a two-layer system:

* **Workbench:** messy, high-throughput, allowed to contradict itself.
* **Canon:** slow, stable, referenceable, and testable.

GitBook is strongest as **Canon**, plus a window into Workbench.

Use labels to stay meta-transparent:

* **DRAFT**
* **TEMP**
* **WORKING**
* **CANON CANDIDATE**

### Artifact schema (what you extract)

These 8 objects are enough for most of your work:

1. **Concept** (term + definition + scope)
2. **Operator** (name, arity, domain/codomain, laws)
3. **Equation/Law** (symbols, assumptions, invariants touched)
4. **Protocol** (steps + expected outputs)
5. **Claim** (what you assert)
6. **Evidence** (supports/attacks a claim)
7. **Test/Falsifier** (how it can fail)
8. **Issue/Tension** (contradiction, ambiguity, missing bridge)

### Navigation

* Dump into [Inbox](inbox/)
* Run decisions in [Ops + Triage](ops-+-triage/)
* Keep integrated drafts in [Draft specs](draft-specs/)

{% stepper %}
{% step %}
### 1) Dump

Paste anything into **Inbox**.

No structure required.

Paste this header at the top of the dump:

{% include "../.gitbook/includes/inbox-dump-header.md" %}

If you don’t have time, skip the header.
{% endstep %}

{% step %}
### 2) Extract (5 minutes)

Run this prompt on the dump:

> Extract: **Concepts, Operators, Claims, Tests, Issues**. Output each as bullets. For each bullet, add: **where it belongs** (Foundations / Operators / Equations / Protocols / Interpretation / Keep in Sandbox).

Result = a “parts list”.
{% endstep %}

{% step %}
### 3) Decide (1 minute)

For each bullet, choose exactly one fate:

* **Promote:** becomes canon content (split into a proper page later)
* **Park:** keep in Sandbox (useful, but not stable)
* **Kill:** delete (rare, but allowed)
{% endstep %}

{% step %}
### 4) Promote safely

Promotion rule: you don’t move raw dumps into canon.

You promote **extracted nodes**.

Minimal canon shape:

* Definition
* Assumptions
* Failure modes / falsifiers
* Links to related pages
{% endstep %}

{% step %}
### 5) Keep meta-transparent

When something is messy on purpose, label it.

Use one of:

* **DRAFT**
* **TEMP**
* **WORKING**
* **CANON CANDIDATE**
{% endstep %}
{% endstepper %}

#### Quick prompts

**Briefing pack**

> I’m working on: _\[task]_. Pull the minimum definitions + invariants needed. List the top 5 risks/contradictions. End with a 7-step plan and a falsifier for each step.

**Canonize**

> Rewrite into canon form. Preserve meaning. Remove mythology. Add: Assumptions, Definitions, Failure modes, Open questions.

<details>

<summary>Optional: implementation sketch (storage + index + compiler + evaluator)</summary>

If you want a concrete engineering target:

* **Storage:** Markdown in Git (diffable, future-proof).
* **Index:** lexical (ripgrep) + semantic (vector DB).
* **Compiler:** task + query → pull 5–30 nodes → output a briefing pack.
* **Evaluator:** undefined-symbol audit, invariant violations, contradiction list.

</details>

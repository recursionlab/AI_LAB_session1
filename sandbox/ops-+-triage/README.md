---
icon: list-check
---

# Ops + Triage

Use this for decisions and routing.

Keep it fast. Keep it explicit.

### What belongs here

* Extraction protocols
* Open issues / contradictions
* “Should this become canon?” decisions
* Versioning notes (SemVer, etc.)

### Triage rule

Never promote raw dumps.

Promote **extracted artifacts** (Concepts, Operators, Claims, Tests, Issues).

### Tension ledger

Source of truth: [Living System Brief](../../living-system-brief.md).

Track tensions here when you’re making routing decisions.

When we take an action on a tension, we update:

* `Status`
* `Next action`
* `Last touched`

Then we drop a 3–6 line entry in [Worklog](worklog.md).

1. **Roadmap status drift vs reality.**
   * Owner: [Roadmap for Formalizing the Ψ System (v2.0)](../../notebooks/ROADMAP.md)
   * Status: open
   * Next action: Audit which Phase 1 artifacts already exist in GitBook. Then update the roadmap checkboxes.
   * Last touched: 2026-02-16
2. **Authority ambiguity inside the orientation doc (updated vs older spec).**
   * Owner: [THIS\_WILL\_ORIENT\_YOU](../../THIS_WILL_ORIENT_YOU.md)
   * Status: in-progress
   * Next action: Add a one-line statement defining what “canon” means on that page (scope + doc types). Keep it blunt.
   * Last touched: 2026-02-16
3. **Glossary incompleteness blocks equations (`μ` is undefined).**
   * Owner: [Glossary of Ψ Formalism - v0.1](../../notebooks/GLOSSARY.md)
   * Status: resolved
   * Next action: When `OPERATORS/Lambda_Core` exists, link the glossary `μ` entry to it.
   * Last touched: 2026-02-16
4. **Verification ladder exists, but pass/fail logging has no home.**
   * Owner: [Contribution Guidelines for the Ψ Formalism](../../notebooks/CONTRIBUTING.md)
   * Status: open
   * Next action: Decide where verification outcomes live (new Verification Log page vs per-equation sections). Then codify that rule in the guidelines.
   * Last touched: TBD
5. **Repo structure description vs GitBook structure mismatch.**
   * Owner: [The Last Guardian Protocol](../../)
   * Status: open
   * Next action: Replace the repo-tree snippet with GitBook-native structure, or add a short “GitBook vs repo layout” mapping note.
   * Last touched: TBD
6. **Doc-type purity vs mixed “meta docs” (Protocol/Manifesto/Orientation).**
   * Owner: [Contribution Guidelines for the Ψ Formalism](../../notebooks/CONTRIBUTING.md)
   * Status: open
   * Next action: Add an explicit exception for “Meta docs”. Define allowed contents and constraints.
   * Last touched: TBD
7. **Inbox is defined as intake, but has no pinned template/examples.**
   * Owner: [Inbox](../inbox/)
   * Status: open
   * Next action: Add the dump header + one worked example + the extraction prompt. Keep it short.
   * Last touched: TBD
8. **“Split draft into canon” trigger is fuzzy.**
   * Owner: [Draft specs](../draft-specs/)
   * Status: open
   * Next action: Define a promotion threshold checklist (definition, assumptions, failure modes/falsifier, links).
   * Last touched: TBD
9. **Ops + Triage lacks a canonical place for system-wide tensions.**
   * Owner: [Ops + Triage](./)
   * Status: resolved
   * Next action: None.
   * Last touched: 2026-02-16
10. **Sandbox labels exist, but promotion/label-change rules are not explicit.**

* Owner: [Sandbox workflow](../sandbox-workflow.md)
* Status: open
* Next action: Add label transition rules (when to switch TEMP → WORKING → CANON CANDIDATE).
* Last touched: TBD

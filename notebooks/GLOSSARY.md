# Glossary of Ψ Formalism - v0.1

**Version:** 0.1 **Date:** 2025-11-14

***

## Key Terms

### Abstraction (λ)

* **Definition:** Binds a variable in an expression, creating a function. (e.g., λx.x)
* **Context:** A fundamental operator in the Ψ formalism, enabling the creation of higher-order functions and the encapsulation of logic.

### Capture (μ)

* **Definition:** Captures the current **evaluation context** (a continuation) and makes it available as a value.
* **Context:** A core operator in the Ψ formalism, complementary to abstraction. It models **control**, **context switching**, and **non-local flow**.
* **Minimal semantics:** `μk.M` binds `k` to “the rest of the computation”, then evaluates `M` with access to `k`.
* **Canonical use-cases:**
  * Early exit / abort with a value.
  * Backtracking or “rewind to a checkpoint”.
  * Reifying “what I was doing” as an explicit object.
* **Examples (informal):**
  * `μk. k v` behaves like “return `v` immediately”.
  * `μk. M` allows `M` to invoke `k` later as a jump back to the captured context.
* **Where the full spec lives:** This is the glossary-level definition. The full formal rules (typing, reduction, and allowed compositions) belong in the `OPERATORS` canon (e.g., `Lambda_Core_v0.2` / operator grammar).

***

## Explicitly Out of Scope (Anti-Document)

This document **does not** cover:

* The full algebraic properties or commutation rules of operators (handled in "Operator Grammar").
* The foundational definitions of Ψ or its semantics (handled in "Foundations").
* The dynamic update equations of the system (handled in "Core Equations").
* Philosophical or cognitive interpretations (handled in "Interpretations").

# Ψ Operator Grammar - v0.1

**Version:** 0.1
**Date:** 2025-11-14

---

## 1. Core Concepts

This document contains the complete, versioned list of operators for the Ψ system, including their definitions, rules, and properties. This is the algebra layer of the formalism.

---

## 2. Formalism (Operator Table)

| Operator | Meaning | Arity | Domain | Commutation Rules |
| :--- | :--- | :--- | :--- | :--- |
| λ | Abstraction | 1 | Binds a variable in an expression, creating a function. (e.g., λx.x) | Generally does not commute. Order of abstraction matters. |
| μ | Control/Capture | 1 | ... | ... |
| Y | Recursion | 1 | ... | ... |
| ∂ | Differential | 1 | ... | ... |
| Telo | Goal/Telos | 1 | ... | ... |
| Meta | Self-Reference | 1 | ... | ... |
| Ana | Abstraction ↑ | 1 | ... | ... |
| Kata | Abstraction ↓ | 1 | ... | ... |
| Retro | Past State | 1 | ... | ... |
| Pro | Future State | 1 | ... | ... |

---

## 3. Explicitly Out of Scope (Anti-Document)

This document **does not** cover:

*   The foundational definitions of Ψ or its semantics (handled in "Foundations").
*   The dynamic update equations that use these operators (handled in "Core Equations").
*   The philosophical meaning of these operators (handled in "Interpretations").

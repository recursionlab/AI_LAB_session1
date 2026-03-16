# Lambda Calculus Core - v0.2

**Version:** 0.2
**Date:** 2025-11-14

---

## 1. Core Primitives

This document defines the foundational operators of the λμ-calculus within the Ψ formalism, establishing the formal semantics for abstraction, control, and recursion. These operators are fundamental for the system's self-modifying and self-referential capabilities.

### 1.1. λ (Abstraction)

*   **Formal Definition:** `λx.M` - Creates a function by binding variable `x` in term `M`.
*   **Cognitive Mapping:** The "Generalization operator." It allows for the raising of conceptual levels, abstracting specific instances into general rules or functions.
*   **HALIRA Mapping:** Corresponds to the `Ana` (abstraction/raising) operator.

### 1.2. μ (Capture/Control)

*   **Formal Definition:** `μα.M` - Captures the current continuation `α` in term `M`.
*   **Cognitive Mapping:** The "Context-switching operator." It enables the system to manage and manipulate its own computational context, allowing for backtracking, re-evaluation, or redirection of flow.
*   **HALIRA Mapping:** Corresponds to the `Retro` (backward causality) operator.

### 1.3. Y (Recursion)

*   **Formal Definition:** `Y(f) = f(Y(f))` - The fixed-point combinator, allowing a function `f` to call itself.
*   **Cognitive Mapping:** The "Self-reference operator." It provides the mechanism for the system to refer to and operate on itself, crucial for self-organization and meta-cognition.
*   **HALIRA Mapping:** Corresponds to the `Meta` (reflection) operator.

---

## 2. Composition Rules

These rules govern how the λμY operators interact, especially in the context of the Ξ-Operator.

*   **Y ○ Ξ = Ξ:** The Ξ-closure absorbs recursion, ensuring that self-referential processes terminate gracefully and consistently.
*   **λ ○ μ ≈ Retro ○ Ana:** This suggests a duality where generalizing then backtracking is analogous to abstracting and then capturing a past context.

---

## 3. Explicitly Out of Scope (Anti-Document)

This document **does not** cover:

*   The foundational definition of the Ξ-Operator or Ψ (handled in `Ψ_Foundations_v0.2.md`).
*   The full HALIRA operator set or their detailed hierarchy (handled in `Cognitive_Core_v0.2.md`).
*   Differential or torsion operators (handled in `Differential_Core_v0.2.md`).
*   The core equations or dynamics of the Ψ system (handled in the `EQUATIONS` directory).
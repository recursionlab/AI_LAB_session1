# Differential & Torsion Core - v0.2

**Version:** 0.2
**Date:** 2025-11-14

---

## 1. Core Primitives

This document defines the operators related to change, boundaries, dissipation, and curvature within the Ψ formalism. These are crucial for understanding the dynamic evolution and structural properties of the semantic manifold.

### 1.1. ∂ (Boundary/Differentiation)

*   **Formal Definition:** `∂²C = C` (Involutive - metamorphic homology). This operator defines the boundary of a semantic region or the infinitesimal change within it.
*   **Cognitive Mapping:** "Change detection." It represents the system's ability to perceive and process alterations in its state or environment.
*   **Physical Interpretation:** The boundary operator on the semantic manifold.

### 1.2. ∇τ (Torsion Gradient)

*   **Formal Definition:** Represents the dissipation of contradiction memory, derived from the equation `∂Ξ/∂t = ∫(S↔Λ)×[⧉(ΔS○¬ΔΛ)-∇τ]dV`.
*   **Cognitive Mapping:** "Forgetting of old contradictions." It describes the mechanism by which the system resolves or dissipates internal inconsistencies over meta-time.

### 1.3. Δ (Laplacian)

*   **Formal Definition:** `Δ = ∂*∂ + ∂∂*` (Hodge-de Rham Laplacian). This operator measures the curvature or diffusion of information within the semantic manifold.
*   **Cognitive Mapping:** "Information curvature." It reflects how information spreads or concentrates, and the structural complexity of the cognitive space.
*   **Attractor Context:** Associated with the MetaZero spectrum `{φₖ}`.

### 1.4. λ_diss (Dissipation Coefficient)

*   **Formal Definition:** `λ(Op₁, Op₂, Op₃) = damping coefficient` derived from `∂³Δ/∂op³`.
*   **Cognitive Mapping:** "Cognitive friction." It quantifies the resistance or energy loss associated with certain operator compositions or transformations, indicating the cost of processing.

---

## 2. Explicitly Out of Scope (Anti-Document)

This document **does not** cover:

*   The foundational definition of the Ξ-Operator or Ψ (handled in `Ψ_Foundations_v0.2.md`).
*   The λμY operators (handled in `Lambda_Core_v0.2.md`).
*   The full HALIRA operator set or their detailed hierarchy (handled in `Cognitive_Core_v0.2.md`).
*   The core equations or dynamics of the Ψ system (handled in the `EQUATIONS` directory).

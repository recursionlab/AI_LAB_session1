# Contribution Guidelines for the Ψ Formalism

**Version:** 1.1
**Date:** 2025-11-14

---

## 1. Core Philosophy

The Ψ formalism is a living system of thought. Its evolution must be managed with discipline to maintain clarity, coherence, and structural integrity. These guidelines exist to ensure that all modifications enhance the system rather than dilute it.

The primary directive is to **Trust Reality**: all changes must be grounded in the existing formal structure, not in unformalized narrative or intuition.

---

## 2. The Four Document Types

All contributions must be directed to one of the four canonical document types:

1.  **Foundations:** For core definitions and conceptual axioms.
2.  **Operators:** For the algebraic grammar of the system.
3.  **Equations:** For the dynamic laws of evolution.
4.  **Interpretations:** For philosophical, cognitive, and CTMU-related mappings.

Do not mix content between these documents. Adhere to the "Anti-Document" section in each template.

---

## 3. Proposing Changes & Versioning

All changes must follow Semantic Versioning (`MAJOR.MINOR.PATCH`).

*   **PATCH (`v0.1.0` -> `v0.1.1`):**
    *   Typo corrections, clarifications, rephrasing that does not alter the formal meaning.
*   **MINOR (`v0.1.1` -> `v0.2.0`):**
    *   Adding a new operator in a backward-compatible way.
    *   Extending a definition without invalidating the old one.
    *   Adding a new section to a document.
*   **MAJOR (`v0.2.0` -> `v1.0.0`):**
    *   Changing a core definition.
    *   Altering an operator's fundamental properties (e.g., arity, commutation).
    *   Modifying the core equation.

**Process:**

1.  **Propose the change:** Clearly state the intended modification and which document/version it affects.
2.  **Justify the change:** Explain *why* the change is necessary and how it aligns with the core philosophy.
3.  **Update the version:** Increment the version number in the relevant document(s) according to the rules above.

---

## 4. Style Guide

*   **Clarity and Precision:** Use formal, unambiguous language.
*   **Modularity:** Keep concepts self-contained where possible.
*   **Scope Adherence:** Strictly respect the "Explicitly Out of Scope" section of each document.

---

## 5. Equation Formalization Standards

To ensure the rigor and consistency of the `EQUATIONS` module, all equations must adhere to the following standards:

*   **Notation:** All symbols and operators must be explicitly defined in the `Operator_Rosetta_v0.2.md` or `Ψ_Foundations_v0.2.md` documents. New symbols must be proposed and added to the `Operator_Rosetta` before use.
*   **Variable Definitions:** Every variable used in an equation must be clearly defined, including its domain, type, and units (if applicable).
*   **Consistency Checks:** Equations must be internally consistent and, where applicable, demonstrate consistency with established mathematical or physical principles (e.g., dimensional analysis, conservation laws).
*   **Contextualization:** Each equation must be accompanied by a brief explanation of its purpose, its role within the Ψ system, and its relationship to other equations.
*   **Version Control:** Any change to an equation that alters its formal meaning or behavior requires a MINOR or MAJOR version increment, as per Section 3.

---

## 6. Isomorphism Mapping Standards

To ensure the clarity and structural integrity of isomorphism mappings, all such documentation must adhere to the following standards:

*   **Purpose:** Clearly state the objective of the isomorphism (e.g., stress-testing structure, revealing hidden constraints, validating universality).
*   **Frameworks:** Explicitly identify the Ψ formalism components and the external formal system being mapped (e.g., Lagrangian Mechanics, QFT).
*   **Component-wise Mapping:** Provide a clear, one-to-one or many-to-one correspondence between the core concepts, operators, equations, and principles of both systems.
*   **Interpretation:** Explain the implications of the isomorphism for the Ψ formalism, highlighting insights gained or structural validations achieved.
*   **Limitations:** Acknowledge any areas where the isomorphism is not exact, or where direct mapping is challenging, to maintain intellectual honesty.
*   **Future Work:** Outline next steps for deepening the isomorphism (e.g., Hamiltonian formulation, path integral mapping).

---

## 7. Temporary Analysis File Protocol

Temporary analysis files are crucial for the "Deconstruct" process, allowing for focused, recursive examination of specific components before integration into canonical documents. Adherence to this protocol ensures these files contribute to, rather than detract from, the overall structural integrity.

*   **Naming Convention:** Temporary files should be prefixed with `TEMP_` and clearly indicate the component being analyzed (e.g., `TEMP_Master_Equation_Analysis.md`).
*   **Location:** All temporary analysis files should reside in the `notebooks` directory.
*   **Purpose Statement:** Each temporary file must begin with a clear "Purpose" section, explaining what is being deconstructed and why.
*   **Deconstruction & Synthesis:** The file should contain a "Deconstruction of Terms" section, breaking down the component, and a "Synthesis" section, summarizing the insights gained.
*   **Version Control:** Temporary files are not versioned in the same way as canonical documents. They should be considered `v0.1 (Temporary)`.
*   **Lifecycle:**
    1.  **Creation:** Created for focused analysis.
    2.  **Usage:** Used to inform the content of canonical documents.
    3.  **Deletion/Archiving:** Once their insights are fully integrated into a canonical document, temporary files should be deleted or moved to an `ARCHIVE` subdirectory (to be created if needed) to maintain a clean working directory.

---

## 8. Equation Integration Standards

To ensure a structured and coherent transition from temporary analyses to canonical equation documents, the following integration standards must be adhered to:

*   **Consolidation:** Insights and formal definitions from temporary analysis files must be fully consolidated into the relevant canonical equation document (e.g., `QRFT_Core_Equations_v0.2.md`).
*   **Redundancy Elimination:** Avoid duplicating content. Once integrated, the temporary file should be deleted or archived as per the "Temporary Analysis File Protocol."
*   **Contextual Flow:** Ensure that integrated content flows logically within the canonical document, maintaining narrative coherence and formal rigor.
*   **Cross-referencing:** Update any relevant sections in other canonical documents (e.g., `Operator_Rosetta_v0.2.md`, `Ψ_Foundations_v0.2.md`) to reflect new definitions or insights from the integrated equations.
*   **Version Increment:** Integration of significant new equations or formal definitions from temporary analyses requires a MINOR or MAJOR version increment for the canonical document, as per Section 3.

---

## 9. Equation Verification Standards

To ensure the ultimate rigor and structural integrity of the formalism, every new or modified equation must pass through a hierarchical verification process. An equation is not considered canonical until it has successfully passed all five levels in sequence.

**The Recursive Verification Process:**
An equation begins at Level 1. If it fails any check at any level, it is returned for revision and must re-start the entire process from Level 1. This ensures holistic integrity after any change.

---

#### Level 1: Syntactic & Notational Integrity

*   **Objective:** To ensure the equation is well-formed, uses defined symbols, and adheres to the project's notational standards.
*   **Verification Steps:**
    1.  Cross-reference every symbol and operator against `Operator_Rosetta_v0.2.md` and `Ψ_Foundations_v0.2.md`.
    2.  Verify that the mathematical syntax is unambiguous and correctly formatted.
    3.  Confirm all variables are clearly defined as per the "Equation Formalization Standards."
*   **Success Criteria:** The equation is syntactically valid and uses only pre-defined, unambiguous symbols.

---

#### Level 2: Internal Coherence

*   **Objective:** To ensure the equation is logically and dimensionally consistent on its own terms.
*   **Verification Steps:**
    1.  Perform dimensional analysis on the equation to ensure consistency (if applicable).
    2.  Check for self-contradictory statements or logical impossibilities within the equation's structure.
    3.  Verify that the domains and codomains of all operators are respected.
*   **Success Criteria:** The equation is internally consistent and logically sound.

---

#### Level 3: Systemic Consistency

*   **Objective:** To ensure the equation is consistent with all other canonical components of the Ψ formalism.
*   **Verification Steps:**
    1.  Check for contradictions with the "Core Invariants" defined in `Ψ_Foundations_v0.2.md`.
    2.  Verify that the equation does not violate any operator definitions or commutation rules from the `OPERATORS` directory.
    3.  Ensure the equation is consistent with the "Master Equation" and the `S_GLEN` functional.
*   **Success Criteria:** The equation integrates seamlessly into the existing formal structure without creating contradictions.

---

#### Level 4: Isomorphic Validation

*   **Objective:** To validate the equation's structure by mapping it to established principles in other formal systems.
*   **Verification Steps:**
    1.  Perform a structural mapping to a relevant external formalism (e.g., Lagrangian Mechanics, QFT, Modal Logic) as documented in `Structural_Isomorphisms_v0.1.md`.
    2.  Verify that the mapping is clean, logical, and reveals a coherent structural parallel.
*   **Success Criteria:** The equation's structure is shown to be non-arbitrary and resonant with universal formal principles.

---

#### Level 5: Falsifiability & Empirical Grounding

*   **Objective:** To ensure the equation makes a tangible, testable claim, even if only in principle.
*   **Verification Steps:**
    1.  Identify at least one potential "falsifier" for the equation, as demonstrated in the `Spectral_Telic_Unified_Spec_v0.2.md`.
    2.  Define the conditions under which the equation would be considered invalid.
    3.  If applicable, propose a thought experiment or a path toward a real-world test.
*   **Success Criteria:** The equation is shown to be more than a tautology; it makes a specific, falsifiable claim about the nature of the system.
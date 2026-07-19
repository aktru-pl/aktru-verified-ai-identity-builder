# Audit methodology

## Scope

The AKTRU Verified AI Identity Builder Technical Consistency Score is an internal diagnostic method. It is not an external standard, certificate, official registry result or statement about business quality.

Registry Evidence Coverage is reported separately and never changes the Technical Consistency Score. A value marked “Supported by supplied registry document” was found in the file supplied by the user. The tool does not independently verify that file’s origin, authenticity or current validity.

## Technical Consistency Score

The score has five categories and a maximum of 100 points.

| Category | Maximum | Full points | Reduced or zero points |
| --- | ---: | --- | --- |
| Metadata and canonical | 25 | Title and description are present and exactly one canonical URL exists. | 10 points if required metadata is missing or the canonical count is not one. |
| Structured data | 20 | At least one JSON-LD block exists and no structured-data warning or error is present. | 8 points when JSON-LD exists with a structured-data issue; 0 when no JSON-LD exists. |
| Local resources | 15 | No referenced local CSS, script or image is missing. | 5 points when a local-resource warning or error exists. |
| Machine-readable bundle | 20 | All seven expected files are present. | 0 points when any expected bundle file is missing. |
| Language and domain | 20 | No language/domain consistency warning or error exists. | 6 points when a consistency issue exists. |

The seven expected machine-readable files are `llms.txt`, `llms-full.txt`, `knowledge.json`, `entities.json`, `qa.jsonld`, `verification.json` and `ai.json`.

## Rule explanation fields

Each audit result exposes:

- rule identifier and rule name;
- analyzed source;
- detected value or state;
- logical condition;
- evidence-class reason;
- possible alternatives;
- result level;
- score impact;
- proposed action.

“Why this classification?” explains why a technical signal is not promoted to a stronger evidence class. For example, a canonical URL is inferred from `link[rel="canonical"]`; it describes the preferred URL and is not treated as legal identity.

## Evidence classes

- **Supported by supplied registry document:** present in the user-supplied document; document authenticity is not established.
- **Declared by website owner:** explicitly present in website-controlled content.
- **Inferred from technical content:** derived from markup, URLs, file relationships or other technical signals.
- **Unresolved:** the supplied evidence does not support a safer conclusion.

SHA-256 is used only to identify the exact bytes analyzed. It does not authenticate a document.

# AKTRU Verified AI Identity Builder

Traceable company identity from website and registry evidence.

AKTRU audits how a company is represented across a website, structured data, machine-readable files and a registry document supplied by the user. It separates declared, inferred, unresolved and supplied-document-supported information, then prepares a human-reviewed machine-readable identity bundle without modifying source files.

## Live demo

Use the public demonstration at [aktru-pl.github.io/aktru-verified-ai-identity-builder](https://aktru-pl.github.io/aktru-verified-ai-identity-builder/). The demo runs entirely in the browser; selected files are not uploaded.

## Problem

One company can be represented differently across local domains, metadata, JSON-LD, machine-readable files and registries. People, search systems and AI tools then struggle to identify the entity and the origin of each claim.

## Solution and features

- local website snapshot and optional registry JSON analysis;
- 25 audit-rule families with provenance;
- separate Technical Consistency Score and Registry Evidence Coverage;
- exact, normalized, mismatch, missing and unresolved comparisons;
- manual field approval;
- deterministic seven-file proposals;
- safe reports, before/after manifest and ZIP export;
- three synthetic or anonymized precomputed demonstrations.

## Architecture

Static React, TypeScript and Vite application. Browser File APIs read selected evidence; `src/core.ts` performs parsing and auditing, `src/bundle.ts` prepares deterministic outputs, and `src/App.tsx` provides the interface. There is no backend, account, database, telemetry or external API.

## Install and run

```text
npm ci
npm run dev
```

## Tests and build

```text
npm run typecheck
npm test
npm run build
npm audit
```

## Demonstrations

- Hospitality Demo PL: complete seven-file bundle and strict JSON BOM issue.
- Hospitality Demo EN: multilingual consistency and complete bundle.
- Furniture Demo DE: missing machine-readable bundle without treating the site as unavailable.

The demos are synthetic or anonymized precomputed summaries and do not represent a current audit of a named business. No production pages, photographs or registry documents are embedded.

## Privacy and limitations

Files remain in the browser session and are not uploaded. A supplied registry document supports only values present in that document; the tool does not independently verify its origin, authenticity or current validity. A hash identifies the exact analyzed bytes, not authenticity. AKTRU is not a certificate, does not replace registries or human review, and does not guarantee indexing, visibility or ranking. See `PRIVACY.md`, `SECURITY.md`, `LIMITATIONS.md` and `docs/audit-methodology.md`.

## Codex and Build Week

Built with Codex during OpenAI Build Week 2026. The project owner defined goals, evidence and safeguards. Codex supported inventory, implementation, tests, accessibility, privacy controls and documentation; results were manually reviewed and requirements refined iteratively. See `CODEX-BUILD-LOG.md`.

## License

Released under the MIT License. See `LICENSE` and `docs/license-decision.md`.

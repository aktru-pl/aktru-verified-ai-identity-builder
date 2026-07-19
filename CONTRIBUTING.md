# Contributing

1. Install dependencies with `npm ci`.
2. Create a focused branch.
3. Implement a scoped change and preserve source classifications.
4. Run `npm run typecheck`, `npm test`, `npm run build` and `npm audit`.
5. Open a pull request describing behavior, tests and privacy impact.

Never place real registry documents, production website snapshots or personal data in fixtures. Synthetic fixtures must keep the distinction between values supported by a user-supplied registry document, website-declared values, technically inferred values and unresolved values. Do not weaken human-review requirements or imply that the tool authenticates supplied documents.

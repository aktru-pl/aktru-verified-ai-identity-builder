# Limitations

- AKTRU is a technical demonstrator, not a certificate or official verification service.
- The Technical Consistency Score is an internal diagnostic, not an official standard.
- Registry Evidence Coverage is separate and supports only values found in the supplied document.
- Website declarations are not automatically registry-supported.
- Registry JSON structures vary; recognition is heuristic and unsupported values remain unresolved.
- A value classified as supported by a supplied registry document was found in that user-supplied file only. The tool does not independently verify the document’s origin, authenticity or current validity.
- A SHA-256 hash identifies the exact analyzed bytes. It is not evidence that the document is authentic or current.
- Address comparison uses basic text normalization rather than a specialist address parser.
- Runtime-generated JavaScript references are not executed.
- CSS `@import` traversal is not fully recursive.
- Proposed files require human review and are never written back to inputs.
- The tool does not guarantee indexing, ranking, visibility, acceptance or business quality.
- `llms.txt` is not presented as an endorsed or universally adopted standard.

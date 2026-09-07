# Golden fixtures

Recorded intent streams and the event streams they are expected to produce. Both
`tavora-server` and `tavora-web` consume these files in their test suites, so the two sides
test against the same artifact rather than against their own reading of the schema.

That is what makes a breaking protocol change safe to coordinate across repositories: the
prerelease is only promoted once both consumers are green against these fixtures.

Format and the first recordings land with the M0 gateway.

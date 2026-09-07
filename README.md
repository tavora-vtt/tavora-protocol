# tavora-protocol

The wire contract between the Go server and the TypeScript client. One set of proto
definitions generates both sides, so they cannot drift without a build failure.

Design: [concept doc 04](https://github.com/tavora-vtt/tavora-docs/blob/main/concept/04-realtime-protocol.md)
and [ADR 0003](https://github.com/tavora-vtt/tavora-docs/blob/main/adr/0003-wire-protocol.md).

## Layout

| Path | Contents |
| --- | --- |
| `proto/tavora/v1/frame.proto` | The envelope: lanes, intents, acks, events, ephemeral frames |
| `proto/tavora/v1/rtc.proto` | Voice and video signaling. Defined now, unimplemented until after 1.0 |
| `gen/go/` | Generated Go, committed because Go modules do not run codegen |
| `fixtures/` | Golden intent and event streams, consumed by the server and web test suites |

## Working on it

```
buf lint
buf generate
go build ./...
```

Generated output is committed. CI regenerates and fails if the result differs.

## Compatibility

Additive changes need no version bump: unknown fields are preserved and ignored on both
sides, so the server and the client can adopt a new field independently. `buf breaking`
runs against `main` on every pull request, and a genuinely breaking change follows the
prerelease sequence in
[ADR 0007](https://github.com/tavora-vtt/tavora-docs/blob/main/adr/0007-repository-topology.md).

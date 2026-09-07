import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file tavora/v1/frame.proto.
 */
export declare const file_tavora_v1_frame: GenFile;
/**
 * @generated from message tavora.v1.Frame
 */
export type Frame = Message<"tavora.v1.Frame"> & {
    /**
     * @generated from field: uint32 lane = 1;
     */
    lane: number;
    /**
     * @generated from oneof tavora.v1.Frame.body
     */
    body: {
        /**
         * @generated from field: tavora.v1.Hello hello = 10;
         */
        value: Hello;
        case: "hello";
    } | {
        /**
         * @generated from field: tavora.v1.Welcome welcome = 11;
         */
        value: Welcome;
        case: "welcome";
    } | {
        /**
         * @generated from field: tavora.v1.Intent intent = 12;
         */
        value: Intent;
        case: "intent";
    } | {
        /**
         * @generated from field: tavora.v1.Ack ack = 13;
         */
        value: Ack;
        case: "ack";
    } | {
        /**
         * @generated from field: tavora.v1.Event event = 14;
         */
        value: Event;
        case: "event";
    } | {
        /**
         * @generated from field: tavora.v1.Ephemeral ephemeral = 15;
         */
        value: Ephemeral;
        case: "ephemeral";
    } | {
        /**
         * @generated from field: tavora.v1.Error error = 16;
         */
        value: Error;
        case: "error";
    } | {
        /**
         * @generated from field: tavora.v1.Ping ping = 17;
         */
        value: Ping;
        case: "ping";
    } | {
        /**
         * @generated from field: tavora.v1.Pong pong = 18;
         */
        value: Pong;
        case: "pong";
    } | {
        /**
         * @generated from field: tavora.v1.Resync resync = 19;
         */
        value: Resync;
        case: "resync";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message tavora.v1.Frame.
 * Use `create(FrameSchema)` to create a new message.
 */
export declare const FrameSchema: GenMessage<Frame>;
/**
 * @generated from message tavora.v1.Hello
 */
export type Hello = Message<"tavora.v1.Hello"> & {
    /**
     * @generated from field: string ticket = 1;
     */
    ticket: string;
    /**
     * @generated from field: string world_id = 2;
     */
    worldId: string;
    /**
     * @generated from field: uint32 protocol_version = 3;
     */
    protocolVersion: number;
    /**
     * @generated from field: int64 last_seq = 4;
     */
    lastSeq: bigint;
    /**
     * @generated from field: string locale = 5;
     */
    locale: string;
    /**
     * @generated from field: repeated string capabilities = 6;
     */
    capabilities: string[];
};
/**
 * Describes the message tavora.v1.Hello.
 * Use `create(HelloSchema)` to create a new message.
 */
export declare const HelloSchema: GenMessage<Hello>;
/**
 * @generated from message tavora.v1.Welcome
 */
export type Welcome = Message<"tavora.v1.Welcome"> & {
    /**
     * @generated from field: string session_id = 1;
     */
    sessionId: string;
    /**
     * @generated from field: string user_id = 2;
     */
    userId: string;
    /**
     * @generated from field: string role = 3;
     */
    role: string;
    /**
     * @generated from field: int64 seq = 4;
     */
    seq: bigint;
    /**
     * @generated from field: string snapshot_ref = 5;
     */
    snapshotRef: string;
    /**
     * @generated from field: int64 delta_from = 6;
     */
    deltaFrom: bigint;
};
/**
 * Describes the message tavora.v1.Welcome.
 * Use `create(WelcomeSchema)` to create a new message.
 */
export declare const WelcomeSchema: GenMessage<Welcome>;
/**
 * @generated from message tavora.v1.Intent
 */
export type Intent = Message<"tavora.v1.Intent"> & {
    /**
     * @generated from field: uint32 request_id = 1;
     */
    requestId: number;
    /**
     * @generated from field: string kind = 2;
     */
    kind: string;
    /**
     * @generated from field: string world_id = 3;
     */
    worldId: string;
    /**
     * @generated from field: bytes payload = 4;
     */
    payload: Uint8Array;
};
/**
 * Describes the message tavora.v1.Intent.
 * Use `create(IntentSchema)` to create a new message.
 */
export declare const IntentSchema: GenMessage<Intent>;
/**
 * @generated from message tavora.v1.Ack
 */
export type Ack = Message<"tavora.v1.Ack"> & {
    /**
     * @generated from field: uint32 request_id = 1;
     */
    requestId: number;
    /**
     * @generated from field: int64 seq = 2;
     */
    seq: bigint;
    /**
     * @generated from field: bytes result = 3;
     */
    result: Uint8Array;
};
/**
 * Describes the message tavora.v1.Ack.
 * Use `create(AckSchema)` to create a new message.
 */
export declare const AckSchema: GenMessage<Ack>;
/**
 * @generated from message tavora.v1.Event
 */
export type Event = Message<"tavora.v1.Event"> & {
    /**
     * @generated from field: int64 seq = 1;
     */
    seq: bigint;
    /**
     * @generated from field: string kind = 2;
     */
    kind: string;
    /**
     * @generated from field: string world_id = 3;
     */
    worldId: string;
    /**
     * @generated from field: string scene_id = 4;
     */
    sceneId: string;
    /**
     * @generated from field: bytes payload = 5;
     */
    payload: Uint8Array;
};
/**
 * Describes the message tavora.v1.Event.
 * Use `create(EventSchema)` to create a new message.
 */
export declare const EventSchema: GenMessage<Event>;
/**
 * @generated from message tavora.v1.Ephemeral
 */
export type Ephemeral = Message<"tavora.v1.Ephemeral"> & {
    /**
     * @generated from field: string kind = 1;
     */
    kind: string;
    /**
     * @generated from field: string key = 2;
     */
    key: string;
    /**
     * @generated from field: string world_id = 3;
     */
    worldId: string;
    /**
     * @generated from field: string scene_id = 4;
     */
    sceneId: string;
    /**
     * @generated from field: bytes payload = 5;
     */
    payload: Uint8Array;
};
/**
 * Describes the message tavora.v1.Ephemeral.
 * Use `create(EphemeralSchema)` to create a new message.
 */
export declare const EphemeralSchema: GenMessage<Ephemeral>;
/**
 * @generated from message tavora.v1.Error
 */
export type Error = Message<"tavora.v1.Error"> & {
    /**
     * @generated from field: uint32 request_id = 1;
     */
    requestId: number;
    /**
     * @generated from field: string code = 2;
     */
    code: string;
    /**
     * @generated from field: string message_key = 3;
     */
    messageKey: string;
    /**
     * @generated from field: map<string, string> params = 4;
     */
    params: {
        [key: string]: string;
    };
};
/**
 * Describes the message tavora.v1.Error.
 * Use `create(ErrorSchema)` to create a new message.
 */
export declare const ErrorSchema: GenMessage<Error>;
/**
 * @generated from message tavora.v1.Ping
 */
export type Ping = Message<"tavora.v1.Ping"> & {
    /**
     * @generated from field: int64 sent_at_unix_ms = 1;
     */
    sentAtUnixMs: bigint;
};
/**
 * Describes the message tavora.v1.Ping.
 * Use `create(PingSchema)` to create a new message.
 */
export declare const PingSchema: GenMessage<Ping>;
/**
 * @generated from message tavora.v1.Pong
 */
export type Pong = Message<"tavora.v1.Pong"> & {
    /**
     * @generated from field: int64 sent_at_unix_ms = 1;
     */
    sentAtUnixMs: bigint;
};
/**
 * Describes the message tavora.v1.Pong.
 * Use `create(PongSchema)` to create a new message.
 */
export declare const PongSchema: GenMessage<Pong>;
/**
 * @generated from message tavora.v1.Resync
 */
export type Resync = Message<"tavora.v1.Resync"> & {
    /**
     * @generated from field: string reason = 1;
     */
    reason: string;
    /**
     * @generated from field: int64 from_seq = 2;
     */
    fromSeq: bigint;
};
/**
 * Describes the message tavora.v1.Resync.
 * Use `create(ResyncSchema)` to create a new message.
 */
export declare const ResyncSchema: GenMessage<Resync>;
//# sourceMappingURL=frame_pb.d.ts.map
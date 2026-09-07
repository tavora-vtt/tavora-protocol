import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file tavora/v1/rtc.proto.
 */
export declare const file_tavora_v1_rtc: GenFile;
/**
 * @generated from message tavora.v1.RtcJoin
 */
export type RtcJoin = Message<"tavora.v1.RtcJoin"> & {
    /**
     * @generated from field: string room = 1;
     */
    room: string;
    /**
     * @generated from field: bool publish_audio = 2;
     */
    publishAudio: boolean;
    /**
     * @generated from field: bool publish_video = 3;
     */
    publishVideo: boolean;
};
/**
 * Describes the message tavora.v1.RtcJoin.
 * Use `create(RtcJoinSchema)` to create a new message.
 */
export declare const RtcJoinSchema: GenMessage<RtcJoin>;
/**
 * @generated from message tavora.v1.RtcSignal
 */
export type RtcSignal = Message<"tavora.v1.RtcSignal"> & {
    /**
     * @generated from field: string sdp_type = 1;
     */
    sdpType: string;
    /**
     * @generated from field: string sdp = 2;
     */
    sdp: string;
    /**
     * @generated from field: repeated string ice_candidates = 3;
     */
    iceCandidates: string[];
};
/**
 * Describes the message tavora.v1.RtcSignal.
 * Use `create(RtcSignalSchema)` to create a new message.
 */
export declare const RtcSignalSchema: GenMessage<RtcSignal>;
/**
 * @generated from message tavora.v1.RtcPublish
 */
export type RtcPublish = Message<"tavora.v1.RtcPublish"> & {
    /**
     * @generated from field: string track_kind = 1;
     */
    trackKind: string;
    /**
     * @generated from field: bool enabled = 2;
     */
    enabled: boolean;
};
/**
 * Describes the message tavora.v1.RtcPublish.
 * Use `create(RtcPublishSchema)` to create a new message.
 */
export declare const RtcPublishSchema: GenMessage<RtcPublish>;
/**
 * @generated from message tavora.v1.RtcSubscribe
 */
export type RtcSubscribe = Message<"tavora.v1.RtcSubscribe"> & {
    /**
     * @generated from field: repeated string participant_ids = 1;
     */
    participantIds: string[];
};
/**
 * Describes the message tavora.v1.RtcSubscribe.
 * Use `create(RtcSubscribeSchema)` to create a new message.
 */
export declare const RtcSubscribeSchema: GenMessage<RtcSubscribe>;
/**
 * @generated from message tavora.v1.RtcControl
 */
export type RtcControl = Message<"tavora.v1.RtcControl"> & {
    /**
     * @generated from field: string action = 1;
     */
    action: string;
    /**
     * @generated from field: string participant_id = 2;
     */
    participantId: string;
    /**
     * @generated from field: string room = 3;
     */
    room: string;
};
/**
 * Describes the message tavora.v1.RtcControl.
 * Use `create(RtcControlSchema)` to create a new message.
 */
export declare const RtcControlSchema: GenMessage<RtcControl>;
/**
 * @generated from message tavora.v1.RtcGain
 */
export type RtcGain = Message<"tavora.v1.RtcGain"> & {
    /**
     * @generated from field: string speaker_id = 1;
     */
    speakerId: string;
    /**
     * @generated from field: float gain = 2;
     */
    gain: number;
};
/**
 * Describes the message tavora.v1.RtcGain.
 * Use `create(RtcGainSchema)` to create a new message.
 */
export declare const RtcGainSchema: GenMessage<RtcGain>;
/**
 * @generated from message tavora.v1.RtcGainMatrix
 */
export type RtcGainMatrix = Message<"tavora.v1.RtcGainMatrix"> & {
    /**
     * @generated from field: string scene_id = 1;
     */
    sceneId: string;
    /**
     * @generated from field: repeated tavora.v1.RtcGain gains = 2;
     */
    gains: RtcGain[];
};
/**
 * Describes the message tavora.v1.RtcGainMatrix.
 * Use `create(RtcGainMatrixSchema)` to create a new message.
 */
export declare const RtcGainMatrixSchema: GenMessage<RtcGainMatrix>;
//# sourceMappingURL=rtc_pb.d.ts.map
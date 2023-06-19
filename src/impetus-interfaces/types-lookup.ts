// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup'

import type {
  Bytes,
  Compact,
  Enum,
  Null,
  Option,
  Result,
  Struct,
  Text,
  U256,
  U8aFixed,
  Vec,
  bool,
  u128,
  u32,
  u64,
  u8,
} from '@polkadot/types-codec'
import type { ITuple } from '@polkadot/types-codec/types'
import type {
  AccountId32,
  Call,
  H160,
  H256,
  MultiAddress,
  Permill,
} from '@polkadot/types/interfaces/runtime'
import type { Event } from '@polkadot/types/interfaces/system'

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32
    readonly consumers: u32
    readonly providers: u32
    readonly sufficients: u32
    readonly data: PalletBalancesAccountData
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128
    readonly reserved: u128
    readonly miscFrozen: u128
    readonly feeFrozen: u128
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (7) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight
    readonly operational: SpWeightsWeightV2Weight
    readonly mandatory: SpWeightsWeightV2Weight
  }

  /** @name SpWeightsWeightV2Weight (8) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>
    readonly proofSize: Compact<u64>
  }

  /** @name SpRuntimeDigest (13) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>
  }

  /** @name SpRuntimeDigestDigestItem (15) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean
    readonly asOther: Bytes
    readonly isConsensus: boolean
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>
    readonly isSeal: boolean
    readonly asSeal: ITuple<[U8aFixed, Bytes]>
    readonly isPreRuntime: boolean
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>
    readonly isRuntimeEnvironmentUpdated: boolean
    readonly type:
      | 'Other'
      | 'Consensus'
      | 'Seal'
      | 'PreRuntime'
      | 'RuntimeEnvironmentUpdated'
  }

  /** @name FrameSystemEventRecord (18) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase
    readonly event: Event
    readonly topics: Vec<H256>
  }

  /** @name FrameSystemEvent (20) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo
    } & Struct
    readonly isExtrinsicFailed: boolean
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo
    } & Struct
    readonly isCodeUpdated: boolean
    readonly isNewAccount: boolean
    readonly asNewAccount: {
      readonly account: AccountId32
    } & Struct
    readonly isKilledAccount: boolean
    readonly asKilledAccount: {
      readonly account: AccountId32
    } & Struct
    readonly isRemarked: boolean
    readonly asRemarked: {
      readonly sender: AccountId32
      readonly hash_: H256
    } & Struct
    readonly type:
      | 'ExtrinsicSuccess'
      | 'ExtrinsicFailed'
      | 'CodeUpdated'
      | 'NewAccount'
      | 'KilledAccount'
      | 'Remarked'
  }

  /** @name FrameSupportDispatchDispatchInfo (21) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight
    readonly class: FrameSupportDispatchDispatchClass
    readonly paysFee: FrameSupportDispatchPays
  }

  /** @name FrameSupportDispatchDispatchClass (22) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean
    readonly isOperational: boolean
    readonly isMandatory: boolean
    readonly type: 'Normal' | 'Operational' | 'Mandatory'
  }

  /** @name FrameSupportDispatchPays (23) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean
    readonly isNo: boolean
    readonly type: 'Yes' | 'No'
  }

  /** @name SpRuntimeDispatchError (24) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean
    readonly isCannotLookup: boolean
    readonly isBadOrigin: boolean
    readonly isModule: boolean
    readonly asModule: SpRuntimeModuleError
    readonly isConsumerRemaining: boolean
    readonly isNoProviders: boolean
    readonly isTooManyConsumers: boolean
    readonly isToken: boolean
    readonly asToken: SpRuntimeTokenError
    readonly isArithmetic: boolean
    readonly asArithmetic: SpArithmeticArithmeticError
    readonly isTransactional: boolean
    readonly asTransactional: SpRuntimeTransactionalError
    readonly isExhausted: boolean
    readonly isCorruption: boolean
    readonly isUnavailable: boolean
    readonly type:
      | 'Other'
      | 'CannotLookup'
      | 'BadOrigin'
      | 'Module'
      | 'ConsumerRemaining'
      | 'NoProviders'
      | 'TooManyConsumers'
      | 'Token'
      | 'Arithmetic'
      | 'Transactional'
      | 'Exhausted'
      | 'Corruption'
      | 'Unavailable'
  }

  /** @name SpRuntimeModuleError (25) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8
    readonly error: U8aFixed
  }

  /** @name SpRuntimeTokenError (26) */
  interface SpRuntimeTokenError extends Enum {
    readonly isNoFunds: boolean
    readonly isWouldDie: boolean
    readonly isBelowMinimum: boolean
    readonly isCannotCreate: boolean
    readonly isUnknownAsset: boolean
    readonly isFrozen: boolean
    readonly isUnsupported: boolean
    readonly type:
      | 'NoFunds'
      | 'WouldDie'
      | 'BelowMinimum'
      | 'CannotCreate'
      | 'UnknownAsset'
      | 'Frozen'
      | 'Unsupported'
  }

  /** @name SpArithmeticArithmeticError (27) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean
    readonly isOverflow: boolean
    readonly isDivisionByZero: boolean
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero'
  }

  /** @name SpRuntimeTransactionalError (28) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean
    readonly isNoLayer: boolean
    readonly type: 'LimitReached' | 'NoLayer'
  }

  /** @name PalletGrandpaEvent (29) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>
    } & Struct
    readonly isPaused: boolean
    readonly isResumed: boolean
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed'
  }

  /** @name SpConsensusGrandpaAppPublic (32) */
  interface SpConsensusGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (33) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletBalancesEvent (34) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean
    readonly asEndowed: {
      readonly account: AccountId32
      readonly freeBalance: u128
    } & Struct
    readonly isDustLost: boolean
    readonly asDustLost: {
      readonly account: AccountId32
      readonly amount: u128
    } & Struct
    readonly isTransfer: boolean
    readonly asTransfer: {
      readonly from: AccountId32
      readonly to: AccountId32
      readonly amount: u128
    } & Struct
    readonly isBalanceSet: boolean
    readonly asBalanceSet: {
      readonly who: AccountId32
      readonly free: u128
      readonly reserved: u128
    } & Struct
    readonly isReserved: boolean
    readonly asReserved: {
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isUnreserved: boolean
    readonly asUnreserved: {
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isReserveRepatriated: boolean
    readonly asReserveRepatriated: {
      readonly from: AccountId32
      readonly to: AccountId32
      readonly amount: u128
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus
    } & Struct
    readonly isDeposit: boolean
    readonly asDeposit: {
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isWithdraw: boolean
    readonly asWithdraw: {
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isSlashed: boolean
    readonly asSlashed: {
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly type:
      | 'Endowed'
      | 'DustLost'
      | 'Transfer'
      | 'BalanceSet'
      | 'Reserved'
      | 'Unreserved'
      | 'ReserveRepatriated'
      | 'Deposit'
      | 'Withdraw'
      | 'Slashed'
  }

  /** @name FrameSupportTokensMiscBalanceStatus (35) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean
    readonly isReserved: boolean
    readonly type: 'Free' | 'Reserved'
  }

  /** @name PalletTransactionPaymentEvent (36) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean
    readonly asTransactionFeePaid: {
      readonly who: AccountId32
      readonly actualFee: u128
      readonly tip: u128
    } & Struct
    readonly type: 'TransactionFeePaid'
  }

  /** @name PalletSudoEvent (37) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>
    } & Struct
    readonly isKeyChanged: boolean
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>
    } & Struct
    readonly isSudoAsDone: boolean
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>
    } & Struct
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone'
  }

  /** @name PalletEthereumEvent (41) */
  interface PalletEthereumEvent extends Enum {
    readonly isExecuted: boolean
    readonly asExecuted: {
      readonly from: H160
      readonly to: H160
      readonly transactionHash: H256
      readonly exitReason: EvmCoreErrorExitReason
      readonly extraData: Bytes
    } & Struct
    readonly type: 'Executed'
  }

  /** @name EvmCoreErrorExitReason (44) */
  interface EvmCoreErrorExitReason extends Enum {
    readonly isSucceed: boolean
    readonly asSucceed: EvmCoreErrorExitSucceed
    readonly isError: boolean
    readonly asError: EvmCoreErrorExitError
    readonly isRevert: boolean
    readonly asRevert: EvmCoreErrorExitRevert
    readonly isFatal: boolean
    readonly asFatal: EvmCoreErrorExitFatal
    readonly type: 'Succeed' | 'Error' | 'Revert' | 'Fatal'
  }

  /** @name EvmCoreErrorExitSucceed (45) */
  interface EvmCoreErrorExitSucceed extends Enum {
    readonly isStopped: boolean
    readonly isReturned: boolean
    readonly isSuicided: boolean
    readonly type: 'Stopped' | 'Returned' | 'Suicided'
  }

  /** @name EvmCoreErrorExitError (46) */
  interface EvmCoreErrorExitError extends Enum {
    readonly isStackUnderflow: boolean
    readonly isStackOverflow: boolean
    readonly isInvalidJump: boolean
    readonly isInvalidRange: boolean
    readonly isDesignatedInvalid: boolean
    readonly isCallTooDeep: boolean
    readonly isCreateCollision: boolean
    readonly isCreateContractLimit: boolean
    readonly isOutOfOffset: boolean
    readonly isOutOfGas: boolean
    readonly isOutOfFund: boolean
    readonly isPcUnderflow: boolean
    readonly isCreateEmpty: boolean
    readonly isOther: boolean
    readonly asOther: Text
    readonly isInvalidCode: boolean
    readonly asInvalidCode: u8
    readonly type:
      | 'StackUnderflow'
      | 'StackOverflow'
      | 'InvalidJump'
      | 'InvalidRange'
      | 'DesignatedInvalid'
      | 'CallTooDeep'
      | 'CreateCollision'
      | 'CreateContractLimit'
      | 'OutOfOffset'
      | 'OutOfGas'
      | 'OutOfFund'
      | 'PcUnderflow'
      | 'CreateEmpty'
      | 'Other'
      | 'InvalidCode'
  }

  /** @name EvmCoreErrorExitRevert (50) */
  interface EvmCoreErrorExitRevert extends Enum {
    readonly isReverted: boolean
    readonly type: 'Reverted'
  }

  /** @name EvmCoreErrorExitFatal (51) */
  interface EvmCoreErrorExitFatal extends Enum {
    readonly isNotSupported: boolean
    readonly isUnhandledInterrupt: boolean
    readonly isCallErrorAsFatal: boolean
    readonly asCallErrorAsFatal: EvmCoreErrorExitError
    readonly isOther: boolean
    readonly asOther: Text
    readonly type:
      | 'NotSupported'
      | 'UnhandledInterrupt'
      | 'CallErrorAsFatal'
      | 'Other'
  }

  /** @name PalletEvmEvent (52) */
  interface PalletEvmEvent extends Enum {
    readonly isLog: boolean
    readonly asLog: {
      readonly log: EthereumLog
    } & Struct
    readonly isCreated: boolean
    readonly asCreated: {
      readonly address: H160
    } & Struct
    readonly isCreatedFailed: boolean
    readonly asCreatedFailed: {
      readonly address: H160
    } & Struct
    readonly isExecuted: boolean
    readonly asExecuted: {
      readonly address: H160
    } & Struct
    readonly isExecutedFailed: boolean
    readonly asExecutedFailed: {
      readonly address: H160
    } & Struct
    readonly type:
      | 'Log'
      | 'Created'
      | 'CreatedFailed'
      | 'Executed'
      | 'ExecutedFailed'
  }

  /** @name EthereumLog (53) */
  interface EthereumLog extends Struct {
    readonly address: H160
    readonly topics: Vec<H256>
    readonly data: Bytes
  }

  /** @name PalletBaseFeeEvent (55) */
  interface PalletBaseFeeEvent extends Enum {
    readonly isNewBaseFeePerGas: boolean
    readonly asNewBaseFeePerGas: {
      readonly fee: U256
    } & Struct
    readonly isBaseFeeOverflow: boolean
    readonly isNewElasticity: boolean
    readonly asNewElasticity: {
      readonly elasticity: Permill
    } & Struct
    readonly type: 'NewBaseFeePerGas' | 'BaseFeeOverflow' | 'NewElasticity'
  }

  /** @name PalletLuckyNumberEvent (59) */
  interface PalletLuckyNumberEvent extends Enum {
    readonly isRoundStarted: boolean
    readonly asRoundStarted: {
      readonly round: u32
    } & Struct
    readonly isTicketBought: boolean
    readonly asTicketBought: {
      readonly round: u32
      readonly who: AccountId32
      readonly amount: u128
      readonly number: u8
    } & Struct
    readonly isRandomNumberGenerated: boolean
    readonly asRandomNumberGenerated: {
      readonly round: u32
      readonly number: u8
    } & Struct
    readonly isRewardClaimed: boolean
    readonly asRewardClaimed: {
      readonly round: u32
      readonly who: AccountId32
      readonly amount: u128
    } & Struct
    readonly isRewardClaimedFailed: boolean
    readonly asRewardClaimedFailed: {
      readonly round: u32
      readonly who: AccountId32
      readonly amount: u128
      readonly error: SpRuntimeDispatchError
    } & Struct
    readonly type:
      | 'RoundStarted'
      | 'TicketBought'
      | 'RandomNumberGenerated'
      | 'RewardClaimed'
      | 'RewardClaimedFailed'
  }

  /** @name PalletCollectiveEvent (60) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean
    readonly asProposed: {
      readonly account: AccountId32
      readonly proposalIndex: u32
      readonly proposalHash: H256
      readonly threshold: u32
    } & Struct
    readonly isVoted: boolean
    readonly asVoted: {
      readonly account: AccountId32
      readonly proposalHash: H256
      readonly voted: bool
      readonly yes: u32
      readonly no: u32
    } & Struct
    readonly isApproved: boolean
    readonly asApproved: {
      readonly proposalHash: H256
    } & Struct
    readonly isDisapproved: boolean
    readonly asDisapproved: {
      readonly proposalHash: H256
    } & Struct
    readonly isExecuted: boolean
    readonly asExecuted: {
      readonly proposalHash: H256
      readonly result: Result<Null, SpRuntimeDispatchError>
    } & Struct
    readonly isMemberExecuted: boolean
    readonly asMemberExecuted: {
      readonly proposalHash: H256
      readonly result: Result<Null, SpRuntimeDispatchError>
    } & Struct
    readonly isClosed: boolean
    readonly asClosed: {
      readonly proposalHash: H256
      readonly yes: u32
      readonly no: u32
    } & Struct
    readonly type:
      | 'Proposed'
      | 'Voted'
      | 'Approved'
      | 'Disapproved'
      | 'Executed'
      | 'MemberExecuted'
      | 'Closed'
  }

  /** @name FrameSystemPhase (62) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean
    readonly asApplyExtrinsic: u32
    readonly isFinalization: boolean
    readonly isInitialization: boolean
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization'
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (65) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>
    readonly specName: Text
  }

  /** @name FrameSystemCall (67) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean
    readonly asRemark: {
      readonly remark: Bytes
    } & Struct
    readonly isSetHeapPages: boolean
    readonly asSetHeapPages: {
      readonly pages: u64
    } & Struct
    readonly isSetCode: boolean
    readonly asSetCode: {
      readonly code: Bytes
    } & Struct
    readonly isSetCodeWithoutChecks: boolean
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes
    } & Struct
    readonly isSetStorage: boolean
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>
    } & Struct
    readonly isKillStorage: boolean
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>
    } & Struct
    readonly isKillPrefix: boolean
    readonly asKillPrefix: {
      readonly prefix: Bytes
      readonly subkeys: u32
    } & Struct
    readonly isRemarkWithEvent: boolean
    readonly asRemarkWithEvent: {
      readonly remark: Bytes
    } & Struct
    readonly type:
      | 'Remark'
      | 'SetHeapPages'
      | 'SetCode'
      | 'SetCodeWithoutChecks'
      | 'SetStorage'
      | 'KillStorage'
      | 'KillPrefix'
      | 'RemarkWithEvent'
  }

  /** @name FrameSystemLimitsBlockWeights (71) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight
    readonly maxBlock: SpWeightsWeightV2Weight
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (72) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass
    readonly operational: FrameSystemLimitsWeightsPerClass
    readonly mandatory: FrameSystemLimitsWeightsPerClass
  }

  /** @name FrameSystemLimitsWeightsPerClass (73) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>
    readonly maxTotal: Option<SpWeightsWeightV2Weight>
    readonly reserved: Option<SpWeightsWeightV2Weight>
  }

  /** @name FrameSystemLimitsBlockLength (75) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (76) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32
    readonly operational: u32
    readonly mandatory: u32
  }

  /** @name SpWeightsRuntimeDbWeight (77) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64
    readonly write: u64
  }

  /** @name SpVersionRuntimeVersion (78) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text
    readonly implName: Text
    readonly authoringVersion: u32
    readonly specVersion: u32
    readonly implVersion: u32
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>
    readonly transactionVersion: u32
    readonly stateVersion: u8
  }

  /** @name FrameSystemError (84) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean
    readonly isSpecVersionNeedsToIncrease: boolean
    readonly isFailedToExtractRuntimeVersion: boolean
    readonly isNonDefaultComposite: boolean
    readonly isNonZeroRefCount: boolean
    readonly isCallFiltered: boolean
    readonly type:
      | 'InvalidSpecName'
      | 'SpecVersionNeedsToIncrease'
      | 'FailedToExtractRuntimeVersion'
      | 'NonDefaultComposite'
      | 'NonZeroRefCount'
      | 'CallFiltered'
  }

  /** @name PalletTimestampCall (85) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean
    readonly asSet: {
      readonly now: Compact<u64>
    } & Struct
    readonly type: 'Set'
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (87) */
  interface SpConsensusAuraSr25519AppSr25519Public
    extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (88) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PalletGrandpaStoredState (91) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean
    readonly isPendingPause: boolean
    readonly asPendingPause: {
      readonly scheduledAt: u32
      readonly delay: u32
    } & Struct
    readonly isPaused: boolean
    readonly isPendingResume: boolean
    readonly asPendingResume: {
      readonly scheduledAt: u32
      readonly delay: u32
    } & Struct
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume'
  }

  /** @name PalletGrandpaStoredPendingChange (92) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32
    readonly delay: u32
    readonly nextAuthorities: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>
    readonly forced: Option<u32>
  }

  /** @name PalletGrandpaCall (95) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof
      readonly keyOwnerProof: SpCoreVoid
    } & Struct
    readonly isReportEquivocationUnsigned: boolean
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof
      readonly keyOwnerProof: SpCoreVoid
    } & Struct
    readonly isNoteStalled: boolean
    readonly asNoteStalled: {
      readonly delay: u32
      readonly bestFinalizedBlockNumber: u32
    } & Struct
    readonly type:
      | 'ReportEquivocation'
      | 'ReportEquivocationUnsigned'
      | 'NoteStalled'
  }

  /** @name SpConsensusGrandpaEquivocationProof (96) */
  interface SpConsensusGrandpaEquivocationProof extends Struct {
    readonly setId: u64
    readonly equivocation: SpConsensusGrandpaEquivocation
  }

  /** @name SpConsensusGrandpaEquivocation (97) */
  interface SpConsensusGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean
    readonly asPrevote: FinalityGrandpaEquivocationPrevote
    readonly isPrecommit: boolean
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit
    readonly type: 'Prevote' | 'Precommit'
  }

  /** @name FinalityGrandpaEquivocationPrevote (98) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64
    readonly identity: SpConsensusGrandpaAppPublic
    readonly first: ITuple<
      [FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]
    >
    readonly second: ITuple<
      [FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]
    >
  }

  /** @name FinalityGrandpaPrevote (99) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256
    readonly targetNumber: u32
  }

  /** @name SpConsensusGrandpaAppSignature (100) */
  interface SpConsensusGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (101) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (104) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64
    readonly identity: SpConsensusGrandpaAppPublic
    readonly first: ITuple<
      [FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]
    >
    readonly second: ITuple<
      [FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]
    >
  }

  /** @name FinalityGrandpaPrecommit (105) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256
    readonly targetNumber: u32
  }

  /** @name SpCoreVoid (107) */
  type SpCoreVoid = Null

  /** @name PalletGrandpaError (108) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean
    readonly isResumeFailed: boolean
    readonly isChangePending: boolean
    readonly isTooSoon: boolean
    readonly isInvalidKeyOwnershipProof: boolean
    readonly isInvalidEquivocationProof: boolean
    readonly isDuplicateOffenceReport: boolean
    readonly type:
      | 'PauseFailed'
      | 'ResumeFailed'
      | 'ChangePending'
      | 'TooSoon'
      | 'InvalidKeyOwnershipProof'
      | 'InvalidEquivocationProof'
      | 'DuplicateOffenceReport'
  }

  /** @name PalletBalancesBalanceLock (110) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed
    readonly amount: u128
    readonly reasons: PalletBalancesReasons
  }

  /** @name PalletBalancesReasons (111) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean
    readonly isMisc: boolean
    readonly isAll: boolean
    readonly type: 'Fee' | 'Misc' | 'All'
  }

  /** @name PalletBalancesReserveData (114) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed
    readonly amount: u128
  }

  /** @name PalletBalancesCall (116) */
  interface PalletBalancesCall extends Enum {
    readonly isTransfer: boolean
    readonly asTransfer: {
      readonly dest: MultiAddress
      readonly value: Compact<u128>
    } & Struct
    readonly isSetBalance: boolean
    readonly asSetBalance: {
      readonly who: MultiAddress
      readonly newFree: Compact<u128>
      readonly newReserved: Compact<u128>
    } & Struct
    readonly isForceTransfer: boolean
    readonly asForceTransfer: {
      readonly source: MultiAddress
      readonly dest: MultiAddress
      readonly value: Compact<u128>
    } & Struct
    readonly isTransferKeepAlive: boolean
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress
      readonly value: Compact<u128>
    } & Struct
    readonly isTransferAll: boolean
    readonly asTransferAll: {
      readonly dest: MultiAddress
      readonly keepAlive: bool
    } & Struct
    readonly isForceUnreserve: boolean
    readonly asForceUnreserve: {
      readonly who: MultiAddress
      readonly amount: u128
    } & Struct
    readonly type:
      | 'Transfer'
      | 'SetBalance'
      | 'ForceTransfer'
      | 'TransferKeepAlive'
      | 'TransferAll'
      | 'ForceUnreserve'
  }

  /** @name PalletBalancesError (120) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean
    readonly isLiquidityRestrictions: boolean
    readonly isInsufficientBalance: boolean
    readonly isExistentialDeposit: boolean
    readonly isKeepAlive: boolean
    readonly isExistingVestingSchedule: boolean
    readonly isDeadAccount: boolean
    readonly isTooManyReserves: boolean
    readonly type:
      | 'VestingBalance'
      | 'LiquidityRestrictions'
      | 'InsufficientBalance'
      | 'ExistentialDeposit'
      | 'KeepAlive'
      | 'ExistingVestingSchedule'
      | 'DeadAccount'
      | 'TooManyReserves'
  }

  /** @name PalletTransactionPaymentReleases (122) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean
    readonly isV2: boolean
    readonly type: 'V1Ancient' | 'V2'
  }

  /** @name PalletSudoCall (123) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean
    readonly asSudo: {
      readonly call: Call
    } & Struct
    readonly isSudoUncheckedWeight: boolean
    readonly asSudoUncheckedWeight: {
      readonly call: Call
      readonly weight: SpWeightsWeightV2Weight
    } & Struct
    readonly isSetKey: boolean
    readonly asSetKey: {
      readonly new_: MultiAddress
    } & Struct
    readonly isSudoAs: boolean
    readonly asSudoAs: {
      readonly who: MultiAddress
      readonly call: Call
    } & Struct
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs'
  }

  /** @name PalletEthereumCall (125) */
  interface PalletEthereumCall extends Enum {
    readonly isTransact: boolean
    readonly asTransact: {
      readonly transaction: EthereumTransactionTransactionV2
    } & Struct
    readonly type: 'Transact'
  }

  /** @name EthereumTransactionTransactionV2 (126) */
  interface EthereumTransactionTransactionV2 extends Enum {
    readonly isLegacy: boolean
    readonly asLegacy: EthereumTransactionLegacyTransaction
    readonly isEip2930: boolean
    readonly asEip2930: EthereumTransactionEip2930Transaction
    readonly isEip1559: boolean
    readonly asEip1559: EthereumTransactionEip1559Transaction
    readonly type: 'Legacy' | 'Eip2930' | 'Eip1559'
  }

  /** @name EthereumTransactionLegacyTransaction (127) */
  interface EthereumTransactionLegacyTransaction extends Struct {
    readonly nonce: U256
    readonly gasPrice: U256
    readonly gasLimit: U256
    readonly action: EthereumTransactionTransactionAction
    readonly value: U256
    readonly input: Bytes
    readonly signature: EthereumTransactionTransactionSignature
  }

  /** @name EthereumTransactionTransactionAction (128) */
  interface EthereumTransactionTransactionAction extends Enum {
    readonly isCall: boolean
    readonly asCall: H160
    readonly isCreate: boolean
    readonly type: 'Call' | 'Create'
  }

  /** @name EthereumTransactionTransactionSignature (129) */
  interface EthereumTransactionTransactionSignature extends Struct {
    readonly v: u64
    readonly r: H256
    readonly s: H256
  }

  /** @name EthereumTransactionEip2930Transaction (131) */
  interface EthereumTransactionEip2930Transaction extends Struct {
    readonly chainId: u64
    readonly nonce: U256
    readonly gasPrice: U256
    readonly gasLimit: U256
    readonly action: EthereumTransactionTransactionAction
    readonly value: U256
    readonly input: Bytes
    readonly accessList: Vec<EthereumTransactionAccessListItem>
    readonly oddYParity: bool
    readonly r: H256
    readonly s: H256
  }

  /** @name EthereumTransactionAccessListItem (133) */
  interface EthereumTransactionAccessListItem extends Struct {
    readonly address: H160
    readonly storageKeys: Vec<H256>
  }

  /** @name EthereumTransactionEip1559Transaction (134) */
  interface EthereumTransactionEip1559Transaction extends Struct {
    readonly chainId: u64
    readonly nonce: U256
    readonly maxPriorityFeePerGas: U256
    readonly maxFeePerGas: U256
    readonly gasLimit: U256
    readonly action: EthereumTransactionTransactionAction
    readonly value: U256
    readonly input: Bytes
    readonly accessList: Vec<EthereumTransactionAccessListItem>
    readonly oddYParity: bool
    readonly r: H256
    readonly s: H256
  }

  /** @name PalletEvmCall (135) */
  interface PalletEvmCall extends Enum {
    readonly isWithdraw: boolean
    readonly asWithdraw: {
      readonly address: H160
      readonly value: u128
    } & Struct
    readonly isCall: boolean
    readonly asCall: {
      readonly source: H160
      readonly target: H160
      readonly input: Bytes
      readonly value: U256
      readonly gasLimit: u64
      readonly maxFeePerGas: U256
      readonly maxPriorityFeePerGas: Option<U256>
      readonly nonce: Option<U256>
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>
    } & Struct
    readonly isCreate: boolean
    readonly asCreate: {
      readonly source: H160
      readonly init: Bytes
      readonly value: U256
      readonly gasLimit: u64
      readonly maxFeePerGas: U256
      readonly maxPriorityFeePerGas: Option<U256>
      readonly nonce: Option<U256>
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>
    } & Struct
    readonly isCreate2: boolean
    readonly asCreate2: {
      readonly source: H160
      readonly init: Bytes
      readonly salt: H256
      readonly value: U256
      readonly gasLimit: u64
      readonly maxFeePerGas: U256
      readonly maxPriorityFeePerGas: Option<U256>
      readonly nonce: Option<U256>
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>
    } & Struct
    readonly type: 'Withdraw' | 'Call' | 'Create' | 'Create2'
  }

  /** @name PalletDynamicFeeCall (139) */
  interface PalletDynamicFeeCall extends Enum {
    readonly isNoteMinGasPriceTarget: boolean
    readonly asNoteMinGasPriceTarget: {
      readonly target: U256
    } & Struct
    readonly type: 'NoteMinGasPriceTarget'
  }

  /** @name PalletBaseFeeCall (140) */
  interface PalletBaseFeeCall extends Enum {
    readonly isSetBaseFeePerGas: boolean
    readonly asSetBaseFeePerGas: {
      readonly fee: U256
    } & Struct
    readonly isSetElasticity: boolean
    readonly asSetElasticity: {
      readonly elasticity: Permill
    } & Struct
    readonly type: 'SetBaseFeePerGas' | 'SetElasticity'
  }

  /** @name PalletHotfixSufficientsCall (141) */
  interface PalletHotfixSufficientsCall extends Enum {
    readonly isHotfixIncAccountSufficients: boolean
    readonly asHotfixIncAccountSufficients: {
      readonly addresses: Vec<H160>
    } & Struct
    readonly type: 'HotfixIncAccountSufficients'
  }

  /** @name PalletLuckyNumberCall (143) */
  interface PalletLuckyNumberCall extends Enum {
    readonly isBuyTicket: boolean
    readonly asBuyTicket: {
      readonly number: u8
      readonly amount: u128
    } & Struct
    readonly isStartLottery: boolean
    readonly asStartLottery: {
      readonly minPrice: u128
      readonly length: u32
      readonly delay: u32
      readonly rate: u8
      readonly repeat: bool
    } & Struct
    readonly isClaimReward: boolean
    readonly asClaimReward: {
      readonly who: AccountId32
      readonly round: u32
      readonly number: u8
    } & Struct
    readonly type: 'BuyTicket' | 'StartLottery' | 'ClaimReward'
  }

  /** @name PalletCollectiveCall (144) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>
      readonly prime: Option<AccountId32>
      readonly oldCount: u32
    } & Struct
    readonly isExecute: boolean
    readonly asExecute: {
      readonly proposal: Call
      readonly lengthBound: Compact<u32>
    } & Struct
    readonly isPropose: boolean
    readonly asPropose: {
      readonly threshold: Compact<u32>
      readonly proposal: Call
      readonly lengthBound: Compact<u32>
    } & Struct
    readonly isVote: boolean
    readonly asVote: {
      readonly proposal: H256
      readonly index: Compact<u32>
      readonly approve: bool
    } & Struct
    readonly isCloseOldWeight: boolean
    readonly asCloseOldWeight: {
      readonly proposalHash: H256
      readonly index: Compact<u32>
      readonly proposalWeightBound: Compact<u64>
      readonly lengthBound: Compact<u32>
    } & Struct
    readonly isDisapproveProposal: boolean
    readonly asDisapproveProposal: {
      readonly proposalHash: H256
    } & Struct
    readonly isClose: boolean
    readonly asClose: {
      readonly proposalHash: H256
      readonly index: Compact<u32>
      readonly proposalWeightBound: SpWeightsWeightV2Weight
      readonly lengthBound: Compact<u32>
    } & Struct
    readonly type:
      | 'SetMembers'
      | 'Execute'
      | 'Propose'
      | 'Vote'
      | 'CloseOldWeight'
      | 'DisapproveProposal'
      | 'Close'
  }

  /** @name PalletSudoError (148) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean
    readonly type: 'RequireSudo'
  }

  /** @name FpRpcTransactionStatus (151) */
  interface FpRpcTransactionStatus extends Struct {
    readonly transactionHash: H256
    readonly transactionIndex: u32
    readonly from: H160
    readonly to: Option<H160>
    readonly contractAddress: Option<H160>
    readonly logs: Vec<EthereumLog>
    readonly logsBloom: EthbloomBloom
  }

  /** @name EthbloomBloom (154) */
  interface EthbloomBloom extends U8aFixed {}

  /** @name EthereumReceiptReceiptV3 (156) */
  interface EthereumReceiptReceiptV3 extends Enum {
    readonly isLegacy: boolean
    readonly asLegacy: EthereumReceiptEip658ReceiptData
    readonly isEip2930: boolean
    readonly asEip2930: EthereumReceiptEip658ReceiptData
    readonly isEip1559: boolean
    readonly asEip1559: EthereumReceiptEip658ReceiptData
    readonly type: 'Legacy' | 'Eip2930' | 'Eip1559'
  }

  /** @name EthereumReceiptEip658ReceiptData (157) */
  interface EthereumReceiptEip658ReceiptData extends Struct {
    readonly statusCode: u8
    readonly usedGas: U256
    readonly logsBloom: EthbloomBloom
    readonly logs: Vec<EthereumLog>
  }

  /** @name EthereumBlock (158) */
  interface EthereumBlock extends Struct {
    readonly header: EthereumHeader
    readonly transactions: Vec<EthereumTransactionTransactionV2>
    readonly ommers: Vec<EthereumHeader>
  }

  /** @name EthereumHeader (159) */
  interface EthereumHeader extends Struct {
    readonly parentHash: H256
    readonly ommersHash: H256
    readonly beneficiary: H160
    readonly stateRoot: H256
    readonly transactionsRoot: H256
    readonly receiptsRoot: H256
    readonly logsBloom: EthbloomBloom
    readonly difficulty: U256
    readonly number: U256
    readonly gasLimit: U256
    readonly gasUsed: U256
    readonly timestamp: u64
    readonly extraData: Bytes
    readonly mixHash: H256
    readonly nonce: EthereumTypesHashH64
  }

  /** @name EthereumTypesHashH64 (160) */
  interface EthereumTypesHashH64 extends U8aFixed {}

  /** @name PalletEthereumError (165) */
  interface PalletEthereumError extends Enum {
    readonly isInvalidSignature: boolean
    readonly isPreLogExists: boolean
    readonly type: 'InvalidSignature' | 'PreLogExists'
  }

  /** @name PalletEvmError (167) */
  interface PalletEvmError extends Enum {
    readonly isBalanceLow: boolean
    readonly isFeeOverflow: boolean
    readonly isPaymentOverflow: boolean
    readonly isWithdrawFailed: boolean
    readonly isGasPriceTooLow: boolean
    readonly isInvalidNonce: boolean
    readonly isGasLimitTooLow: boolean
    readonly isGasLimitTooHigh: boolean
    readonly isUndefined: boolean
    readonly isReentrancy: boolean
    readonly isTransactionMustComeFromEOA: boolean
    readonly type:
      | 'BalanceLow'
      | 'FeeOverflow'
      | 'PaymentOverflow'
      | 'WithdrawFailed'
      | 'GasPriceTooLow'
      | 'InvalidNonce'
      | 'GasLimitTooLow'
      | 'GasLimitTooHigh'
      | 'Undefined'
      | 'Reentrancy'
      | 'TransactionMustComeFromEOA'
  }

  /** @name PalletHotfixSufficientsError (168) */
  interface PalletHotfixSufficientsError extends Enum {
    readonly isMaxAddressCountExceeded: boolean
    readonly type: 'MaxAddressCountExceeded'
  }

  /** @name PalletLuckyNumberLotteryConfig (170) */
  interface PalletLuckyNumberLotteryConfig extends Struct {
    readonly minPrice: u128
    readonly start: u32
    readonly length: u32
    readonly delay: u32
    readonly rate: u8
    readonly repeat: bool
  }

  /** @name FrameSupportPalletId (176) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletLuckyNumberError (177) */
  interface PalletLuckyNumberError extends Enum {
    readonly isNotConfigured: boolean
    readonly isInProgress: boolean
    readonly isCannotSetRate: boolean
    readonly isAlreadyEnded: boolean
    readonly isInvalidCall: boolean
    readonly isInvalidNumber: boolean
    readonly isTooManyParticipants: boolean
    readonly type:
      | 'NotConfigured'
      | 'InProgress'
      | 'CannotSetRate'
      | 'AlreadyEnded'
      | 'InvalidCall'
      | 'InvalidNumber'
      | 'TooManyParticipants'
  }

  /** @name PalletCollectiveVotes (179) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32
    readonly threshold: u32
    readonly ayes: Vec<AccountId32>
    readonly nays: Vec<AccountId32>
    readonly end: u32
  }

  /** @name PalletCollectiveError (180) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean
    readonly isDuplicateProposal: boolean
    readonly isProposalMissing: boolean
    readonly isWrongIndex: boolean
    readonly isDuplicateVote: boolean
    readonly isAlreadyInitialized: boolean
    readonly isTooEarly: boolean
    readonly isTooManyProposals: boolean
    readonly isWrongProposalWeight: boolean
    readonly isWrongProposalLength: boolean
    readonly type:
      | 'NotMember'
      | 'DuplicateProposal'
      | 'ProposalMissing'
      | 'WrongIndex'
      | 'DuplicateVote'
      | 'AlreadyInitialized'
      | 'TooEarly'
      | 'TooManyProposals'
      | 'WrongProposalWeight'
      | 'WrongProposalLength'
  }

  /** @name SpRuntimeMultiSignature (182) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean
    readonly asEd25519: SpCoreEd25519Signature
    readonly isSr25519: boolean
    readonly asSr25519: SpCoreSr25519Signature
    readonly isEcdsa: boolean
    readonly asEcdsa: SpCoreEcdsaSignature
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa'
  }

  /** @name SpCoreSr25519Signature (183) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (184) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (187) */
  type FrameSystemExtensionsCheckNonZeroSender = Null

  /** @name FrameSystemExtensionsCheckSpecVersion (188) */
  type FrameSystemExtensionsCheckSpecVersion = Null

  /** @name FrameSystemExtensionsCheckTxVersion (189) */
  type FrameSystemExtensionsCheckTxVersion = Null

  /** @name FrameSystemExtensionsCheckGenesis (190) */
  type FrameSystemExtensionsCheckGenesis = Null

  /** @name FrameSystemExtensionsCheckNonce (193) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (194) */
  type FrameSystemExtensionsCheckWeight = Null

  /** @name PalletTransactionPaymentChargeTransactionPayment (195) */
  interface PalletTransactionPaymentChargeTransactionPayment
    extends Compact<u128> {}

  /** @name FrontierTemplateRuntimeRuntime (197) */
  type FrontierTemplateRuntimeRuntime = Null
} // declare module

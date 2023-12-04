import { SignMessagePayload, SignMessageResponse } from '@aptos-labs/wallet-adapter-core'
/** The latest API version of the signmessageBlock API. */
export type AptosSignMessage = '1.0.0'

/**
 * A Wallet Standard feature for signing a message, and returning the
 * serialized message and message signature.
 */
export type AptosSignMessageFeature = {
  /** Namespace for the feature. */
  'aptos:signMessage': {
    /** Version of the feature API. */
    version: AptosSignMessage
    signMessage: AptosSignMessageMethod
  }
}

export type AptosSignMessageMethod = (
  input: AptosSignMessageInput
) => Promise<AptosSignMessageOutput>

/** Input for signing messages. */
export type AptosSignMessageInput = SignMessagePayload

/** Output of signing messages. */
export interface AptosSignMessageOutput extends SignMessageResponse {}

import { Types } from 'aptos'
/** The latest API version of the signTransactionBlock API. */
export type AptosSignAndSubmitTransaction = '1.0.0'

/**
 * A Wallet Standard feature for signing a transaction, and returning the
 * serialized transaction and transaction signature.
 */
export type AptosSignAndSubmitTransactionFeature = {
  /** Namespace for the feature. */
  'sui:signAndSubmitTransaction': {
    /** Version of the feature API. */
    version: AptosSignAndSubmitTransaction
    signAndSubmitTransaction: AptosSignAndSubmitTransactionMethod
  }
}

export type AptosSignAndSubmitTransactionMethod = (
  input: AptosSignAndSubmitTransactionInput
) => Promise<AptosSignAndSubmitTransactionOutput>

/** Input for signing transactions. */
export interface AptosSignAndSubmitTransactionInput {
  transaction: Types.TransactionPayload
  options?: any
}

/** Output of signing transactions. */
export interface AptosSignAndSubmitTransactionOutput extends TransactionHash {}

export interface TransactionHash {
  hash: Types.HexEncodedBytes
}

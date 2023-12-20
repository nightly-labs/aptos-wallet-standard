import { AnyRawTransaction, AccountAuthenticator } from '@aptos-labs/ts-sdk'

/** Version of the feature. */
export type AptosSignTransactionVersion = '1.0.0'
/** Name of the feature. */
export const AptosSignTransactionNamespace = 'aptos:signTransaction'
/**
 * A Wallet Standard feature for signing a Aptos transaction, and returning the
 * account authenticator.
 */
export type AptosSignTransactionFeature = {
  /** Namespace for the feature. */
  [AptosSignTransactionNamespace]: {
    /** Version of the feature API. */
    version: AptosSignTransactionVersion
    signTransaction: AptosSignTransactionMethod
  }
}
/** TODO: docs */
export type AptosSignTransactionMethod = (
  transaction: AnyRawTransaction
) => Promise<AptosSignTransactionOutput>

/** Output of signing transactions. */
export type AptosSignTransactionOutput = AccountAuthenticator

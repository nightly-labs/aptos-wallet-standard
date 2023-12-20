import { AccountInfo } from '../misc'

/** Version of the feature. */
export type AptosAccountVersion = '1.0.0'
/** Name of the feature. */
export const AptosAccountNamespace = 'aptos:account'

/** TODO: docs */
export type AptosAccountFeature = {
  /** Namespace for the feature. */
  [AptosAccountNamespace]: {
    /** Version of the feature API. */
    version: AptosAccountVersion
    account: AptosAccountMethod
  }
}
/** TODO: docs */
export type AptosAccountMethod = () => Promise<AptosAccountOutput>
/** TODO: docs */
export type AptosAccountOutput = AccountInfo

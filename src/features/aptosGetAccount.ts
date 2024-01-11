import { AccountInfo, Response } from '../misc'

/** Version of the feature. */
export type AptosGetAccountVersion = '1.0.0'
/** Name of the feature. */
export const AptosGetAccountNamespace = 'aptos:account'

/** TODO: docs */
export type AptosGetAccountFeature = {
  /** Namespace for the feature. */
  [AptosGetAccountNamespace]: {
    /** Version of the feature API. */
    version: AptosGetAccountVersion
    account: AptosGetAccountMethod
  }
}
/** TODO: docs */
export type AptosGetAccountMethod = () => Promise<Response<AptoGetsAccountOutput>>
/** TODO: docs */
export type AptoGetsAccountOutput = AccountInfo

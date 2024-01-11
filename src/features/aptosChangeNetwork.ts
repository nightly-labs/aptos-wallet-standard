import { NetworkInfo, Response } from '../misc'

/** Version of the feature. */
export type AptosChangeNetworkVersion = '1.0.0'
/** Name of the feature. */
export const AptosChangeNetworkNamespace = 'aptos:changeNetwork'
/** TODO: docs */
export type AptosChangeNetworkFeature = {
  /** Namespace for the feature. */
  [AptosChangeNetworkNamespace]: {
    /** Version of the feature API. */
    version: AptosChangeNetworkVersion
    changeNetwork: AptosChangeNetworkMethod
  }
}

/** TODO: docs */
export type AptosChangeNetworkMethod = (
  input: AptosChangeNetworkInput
) => Promise<Response<AptosChangeNetworkOutput>>
/** TODO: docs */
export type AptosChangeNetworkInput = NetworkInfo

/** TODO: docs */
export interface AptosChangeNetworkOutput {
  success: boolean
  reason?: string
}

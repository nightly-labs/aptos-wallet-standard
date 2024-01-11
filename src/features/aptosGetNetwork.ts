import { NetworkInfo, Response } from '../misc'

/** Version of the feature. */
export type AptosGetNetworkVersion = '1.0.0'
/** Name of the feature. */
export const AptosGetNetworkNamespace = 'aptos:network'
/** TODO: docs */
export type AptosGetNetworkFeature = {
  /** Namespace for the feature. */
  [AptosGetNetworkNamespace]: {
    /** Version of the feature API. */
    version: AptosGetNetworkVersion
    network: AptosGetNetworkMethod
  }
}
/** TODO: docs */
export type AptosGetNetworkMethod = () => Promise<Response<AptosGetNetworkOutput>>
/** TODO: docs */
export type AptosGetNetworkOutput = NetworkInfo

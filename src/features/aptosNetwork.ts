import { NetworkInfo } from '../misc'

/** Version of the feature. */
export type AptosNetworkVersion = '1.0.0'
/** Name of the feature. */
export const AptosNetworkNamespace = 'aptos:network'
/** TODO: docs */
export type AptosNetworkFeature = {
  /** Namespace for the feature. */
  [AptosNetworkNamespace]: {
    /** Version of the feature API. */
    version: AptosNetworkVersion
    network: AptosNetworkMethod
  }
}
/** TODO: docs */
export type AptosNetworkMethod = () => Promise<AptosNetworkOutput>
/** TODO: docs */
export type AptosNetworkOutput = NetworkInfo

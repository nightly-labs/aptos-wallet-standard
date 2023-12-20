import { AccountInfo, NetworkInfo } from '../misc'

/** Version of the feature. */
export type AptosConnectVersion = '1.0.0'
/** Name of the feature. */
export const AptosConnectNamespace = 'aptos:connect'
/** TODO: docs */
export type AptosConnectFeature = {
  /** Namespace for the feature. */
  [AptosConnectNamespace]: {
    /** Version of the feature API. */
    version: AptosConnectVersion
    connect: AptosConnectMethod
  }
}
/** TODO: docs */
export type AptosConnectMethod = (
  silent?: boolean,
  networkInfo?: NetworkInfo
) => Promise<AptosConnectOutput>
/** TODO: docs */
export type AptosConnectOutput = AccountInfo

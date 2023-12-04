import { NetworkInfo } from '@aptos-labs/wallet-adapter-core'
export type AptosNetwork = '1.0.0'

export type AptosNetworkFeature = {
  'aptos:network': {
    version: AptosNetwork
    network: AptosNetworkMethod
  }
}

export type AptosNetworkMethod = () => Promise<AptosNetworkOutput>
export interface AptosNetworkOutput extends NetworkInfo {}

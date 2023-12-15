import { Network } from 'aptos'

export type AptosNetwork = '1.0.0'

export type AptosNetworkFeature = {
  'aptos:network': {
    version: AptosNetwork
    network: AptosNetworkMethod
  }
}

export type AptosNetworkMethod = () => Promise<AptosNetworkOutput>
export interface AptosNetworkOutput {
  name: string | Network
  chainId?: string
  url?: string
}

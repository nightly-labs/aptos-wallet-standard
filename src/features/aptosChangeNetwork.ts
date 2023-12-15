import { Network } from 'aptos'

export type AptosChangeNetwork = '1.0.0'

export type AptosChangeNetworkFeature = {
  'aptos:changeNetwork': {
    version: AptosChangeNetwork
    changeNetwork: AptosChangeNetworkMethod
  }
}

export type AptosChangeNetworkMethod = (input: AptosChangeNetworkInput) => Promise<void>
export type AptosChangeNetworkInput = {
  name: string | Network
  chainId?: string
  url?: string
}

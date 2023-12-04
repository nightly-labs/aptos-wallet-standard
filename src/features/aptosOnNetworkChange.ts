import { OnNetworkChange } from '@aptos-labs/wallet-adapter-core'
export type AptosOnNetworkChange = '1.0.0'

export type AptosOnNetworkChangeFeature = {
  'aptos:onNetworkChange': {
    version: AptosOnNetworkChange
    onNetworkChange: AptosOnNetworkChangeMethod
  }
}

export type AptosOnNetworkChangeMethod = (input: AptosOnNetworkChangeInput) => Promise<void>

export type AptosOnNetworkChangeInput = Parameters<OnNetworkChange>[0]

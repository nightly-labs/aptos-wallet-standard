import { OnAccountChange } from '@aptos-labs/wallet-adapter-core'
export type AptosOnAccountChange = '1.0.0'

export type AptosOnAccountChangeFeature = {
  'aptos:onAccountChange': {
    version: AptosOnAccountChange
    onAccountChange: AptosOnAccountChangeMethod
  }
}

export type AptosOnAccountChangeMethod = (input: AptosOnAccountChangeInput) => Promise<void>

export type AptosOnAccountChangeInput = Parameters<OnAccountChange>[0]

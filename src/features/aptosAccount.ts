import { AccountInfo } from '@aptos-labs/wallet-adapter-core'
export type AptosAccount = '1.0.0'

export type AptosAccountFeature = {
  'aptos:account': {
    version: AptosAccount
    account: AptosAccountMethod
  }
}

export type AptosAccountMethod = () => Promise<AptosAccountOutput>
export interface AptosAccountOutput extends AccountInfo {}

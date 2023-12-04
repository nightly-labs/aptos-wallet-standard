import { AccountInfo } from '@aptos-labs/wallet-adapter-core'
export type AptosConnect = '1.0.0'

export type AptosConnectFeature = {
  'aptos:connect': {
    version: AptosConnect
    connect: AptosConnectMethod
  }
}

export type AptosConnectMethod = () => Promise<AptosConnectOutput>
export interface AptosConnectOutput extends AccountInfo {}

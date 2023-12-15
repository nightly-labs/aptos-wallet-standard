import { AccountInfo } from '@aptos-labs/wallet-adapter-core'
import { Network } from 'aptos'
export type AptosConnect = '1.0.0'

export type AptosConnectFeature = {
  'aptos:connect': {
    version: AptosConnect
    connect: AptosConnectMethod
  }
}

export type AptosConnectMethod = (networkInfo?: AptosConnectInput) => Promise<AptosConnectOutput>
export type AptosConnectInput = {
  name: string | Network
  chainId?: string
  url?: string
}
export interface AptosConnectOutput extends AccountInfo {}

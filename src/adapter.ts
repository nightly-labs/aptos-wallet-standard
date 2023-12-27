import { StandardDisconnectMethod } from '@wallet-standard/core'
import {
  AptosAccountMethod,
  AptosChangeNetworkMethod,
  AptosConnectMethod,
  AptosNetworkMethod,
  AptosOnAccountChangeMethod,
  AptosOnNetworkChangeMethod,
  AptosSignAndSubmitTransactionMethod,
  AptosSignMessageMethod,
  FullAptosFeatures
} from './features'
import { ChainsId } from './chains'

export interface AptosAdapter {
  name: string
  chains: ChainsId[]
  features: FullAptosFeatures
  url: string
  icon: `data:image/${'svg+xml' | 'webp' | 'png' | 'gif'};base64,${string}`
  account: AptosAccountMethod
  connect: AptosConnectMethod
  disconnect: StandardDisconnectMethod
  network: AptosNetworkMethod
  changeNetwork: AptosChangeNetworkMethod
  signAndSubmitTransaction: AptosSignAndSubmitTransactionMethod
  signMessage: AptosSignMessageMethod
  onAccountChange: AptosOnAccountChangeMethod
  onNetworkChange: AptosOnNetworkChangeMethod
}

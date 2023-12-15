import { WalletName } from '@aptos-labs/wallet-adapter-core'
import {
  AptosAccountMethod,
  AptosChangeNetworkMethod,
  AptosConnectMethod,
  AptosFeatures,
  AptosNetworkMethod,
  AptosOnAccountChangeMethod,
  AptosOnNetworkChangeMethod,
  AptosSignAndSubmitTransactionMethod,
  AptosSignMessageMethod
} from './features'

export interface AptosAdapter<Name extends string = string> {
  name: WalletName<Name>
  chains: string[]
  features: AptosFeatures
  url: string
  icon: `data:image/${'svg+xml' | 'webp' | 'png' | 'gif'};base64,${string}`
  account: AptosAccountMethod
  connect: AptosConnectMethod
  network: AptosNetworkMethod
  changeNetwork: AptosChangeNetworkMethod
  signAndSubmitTransaction: AptosSignAndSubmitTransactionMethod
  signMessage: AptosSignMessageMethod
  onAccountChange: AptosOnAccountChangeMethod
  onNetworkChange: AptosOnNetworkChangeMethod
}

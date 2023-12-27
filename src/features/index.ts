import type {
  IdentifierRecord,
  StandardDisconnectFeature,
  WalletWithFeatures
} from '@wallet-standard/core'

import type { AptosSignAndSubmitTransactionFeature } from './aptosSignAndSubmitTransaction'
import { AptosSignMessageFeature } from './aptosSignMessage'
import { AptosAccountFeature } from './aptosAccount'
import { AptosConnectFeature } from './aptosConnect'
import { AptosNetworkFeature } from './aptosNetwork'
import { AptosOnAccountChangeFeature } from './aptosOnAccountChange'
import { AptosOnNetworkChangeFeature } from './aptosOnNetworkChange'
import { AptosChangeNetworkFeature } from './aptosChangeNetwork'
import { AptosSignTransactionFeature } from './aptosSignTransaction'

/**
 * Wallet Standard features that are unique to Aptos, and that all Aptos wallets are expected to implement.
 */
export type AptosFeatures = AptosSignAndSubmitTransactionFeature &
  AptosSignTransactionFeature &
  AptosSignMessageFeature &
  AptosConnectFeature
/**
 * Wallet Standard features that are unique to Aptos, and that all Aptos wallets are expected to implement.
 */
export type AdditionalAptosFeatures = AptosOnAccountChangeFeature &
  AptosOnNetworkChangeFeature &
  AptosNetworkFeature &
  AptosChangeNetworkFeature &
  AptosAccountFeature
/**
 * Represents a wallet with all Aptos features.
 */
export type FullAptosFeatures = AptosFeatures & AdditionalAptosFeatures & StandardDisconnectFeature
/**
 * Represents a wallet with all Aptos features.
 */
export type WalletWithAptosFeatures = WalletWithFeatures<FullAptosFeatures>
/**
 * Represents a wallet with the absolute minimum feature set required to function in the Aptos ecosystem.
 */
export type WalletWithRequiredFeatures = WalletWithFeatures<
  MinimallyRequiredFeatures &
    Partial<AdditionalAptosFeatures> &
    Partial<StandardDisconnectFeature> &
    IdentifierRecord<unknown>
>
/**
 * Represents the absolute minimum feature set required to function in the Aptos ecosystem.
 */
export type MinimallyRequiredFeatures = AptosFeatures

export * from './aptosSignAndSubmitTransaction'
export * from './aptosSignMessage'
export * from './aptosAccount'
export * from './aptosConnect'
export * from './aptosNetwork'
export * from './aptosOnAccountChange'
export * from './aptosOnNetworkChange'
export * from './aptosChangeNetwork'

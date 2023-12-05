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

/**
 * Wallet Standard features that are unique to Aptos, and that all Aptos wallets are expected to implement.
 */
export type AptosFeatures = AptosSignAndSubmitTransactionFeature &
  AptosSignMessageFeature &
  AptosConnectFeature

export type WalletWithAptosFeatures = WalletWithFeatures<
  AptosFeatures &
    // Disconnect is an optional feature:
    Partial<StandardDisconnectFeature> &
    Partial<AptosOnAccountChangeFeature> &
    Partial<AptosOnNetworkChangeFeature> &
    Partial<AptosNetworkFeature> &
    Partial<AptosAccountFeature>
>

/**
 * Represents a wallet with the absolute minimum feature set required to function in the Aptos ecosystem.
 */
export type WalletWithRequiredFeatures = WalletWithFeatures<
  MinimallyRequiredFeatures &
    Partial<AptosFeatures> &
    Partial<StandardDisconnectFeature> &
    IdentifierRecord<unknown>
>

export type MinimallyRequiredFeatures = AptosFeatures

export * from './aptosSignAndSubmitTransaction'
export * from './aptosSignMessage'
export * from './aptosAccount'
export * from './aptosConnect'
export * from './aptosNetwork'
export * from './aptosOnAccountChange'
export * from './aptosOnNetworkChange'

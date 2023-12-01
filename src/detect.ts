import { Wallet, WalletWithFeatures } from '@wallet-standard/core'

import { MinimallyRequiredFeatures } from './features'

// These features are absolutely required for wallets to function in the Aptos ecosystem.
// Eventually, as wallets have more consistent support of features, we may want to extend this list.
const REQUIRED_FEATURES: (keyof MinimallyRequiredFeatures)[] = [
  'standard:connect',
  'standard:events'
]

export function isWalletWithRequiredFeatureSet<AdditionalFeatures extends Wallet['features']>(
  wallet: Wallet,
  additionalFeatures: (keyof AdditionalFeatures)[] = []
): wallet is WalletWithFeatures<MinimallyRequiredFeatures & AdditionalFeatures> {
  return [...REQUIRED_FEATURES, ...additionalFeatures].every(
    (feature) => feature in wallet.features
  )
}
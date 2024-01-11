import { Account } from '@aptos-labs/ts-sdk'

/** TODO: docs */
export type TransactionHash = `0x${string}`
/** TODO: docs */
export type AccountInfo = {
  account: Account
  ansName?: string
}
/** TODO: docs */
export interface NetworkInfo {
  name: string // Name of the network.
  chainId: string // Chain ID of the network.
  url?: string // RPC URL of the network.
}

export interface Rejected {
  status: 'rejected'
  reason?: string
}

export interface Approved<TArgs> {
  status: 'approved'
  args: TArgs
}
export type Response<TArgs> = Approved<TArgs> | Rejected

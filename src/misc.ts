/** TODO: docs */
export type TransactionHash = `0x${string}`
/** TODO: docs */
export type AccountInfo = {
  address: string
  publicKey: string | string[]
  minKeysRequired?: number
  ansName?: string
}
/** TODO: docs */
export interface NetworkInfo {
  name: string // Name of the network.
  chainId: string // Chain ID of the network.
  url?: string // RPC URL of the network.
}

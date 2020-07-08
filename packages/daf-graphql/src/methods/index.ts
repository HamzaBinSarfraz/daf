import { IAgentGraphQLMethod } from '../types'
import identityManager from './identity-manager'
import resolver from './resolver'
import messageHandler from './message-handler'
import w3c from './w3c'
import sdr from './sdr'
import dataStoreORM from './data-store-orm'

export const supportedMethods: Record<string, IAgentGraphQLMethod> = {
  ...identityManager,
  ...resolver,
  ...messageHandler,
  ...w3c,
  ...sdr,
  ...dataStoreORM,
}

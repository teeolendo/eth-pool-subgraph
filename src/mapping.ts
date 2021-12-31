import { BigInt } from "@graphprotocol/graph-ts"
import {
  EthPool,
  DepositReceived,
  FundsWithdrawn,
  OwnershipTransferred,
  RewardsReceived,
  UniqueMaxUpdated,
  WeekAdvanced
} from "../generated/EthPool/EthPool"
import {
  DepositReceivedEntity,
  RewardsReceivedEntity,
  FundsWithdrawnEntity,
  OwnershipTransferredEntity,
  WeekAdvancedEntity,
  UniqueMaxUpdatedEntity
} from "../generated/schema"

export function handleDepositReceived(event: DepositReceived): void {
  let entity = DepositReceivedEntity.load(event.transaction.from.toHex())

  if (!entity) {
    entity = new DepositReceivedEntity(event.transaction.from.toHex())
  }

  entity.depositor = event.params.depositor
  entity.amount = event.params.amount
  entity.currentWeek = event.params.currentWeek

  entity.save()
}

export function handleFundsWithdrawn(event: FundsWithdrawn): void {

  let entity = FundsWithdrawnEntity.load(event.transaction.from.toHex())

  if (!entity) {
    entity = new FundsWithdrawnEntity(event.transaction.from.toHex())
  }

  entity.rewarder = event.params.rewarder
  entity.amount = event.params.amount
  entity.currentWeek = event.params.currentWeek

  entity.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  
  let entity = OwnershipTransferredEntity.load(event.transaction.from.toHex())
  
  if (!entity) {
    entity = new OwnershipTransferredEntity(event.transaction.from.toHex())
  }

  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.save()
}

export function handleRewardsReceived(event: RewardsReceived): void {
  let entity = RewardsReceivedEntity.load(event.transaction.from.toHex())
  
  if (!entity) {
    entity = new RewardsReceivedEntity(event.transaction.from.toHex())
  }

  entity.rewarder = event.params.rewarder
  entity.amount = event.params.amount

  entity.save()
}

export function handleUniqueMaxUpdated(event: UniqueMaxUpdated): void {
  let entity = UniqueMaxUpdatedEntity.load(event.transaction.from.toHex())
  
  if (!entity) {
    entity = new UniqueMaxUpdatedEntity(event.transaction.from.toHex())
  }

  entity.newMax = event.params.newMax

  entity.save()
}

export function handleWeekAdvanced(event: WeekAdvanced): void {
  let entity = WeekAdvancedEntity.load(event.transaction.from.toHex())
  
  if (!entity) {
    entity = new WeekAdvancedEntity(event.transaction.from.toHex())
  }

  entity.newWeek = event.params.newWeek

  entity.save()
}

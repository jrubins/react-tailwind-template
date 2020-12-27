import { GenericObject } from './types'
import { isDevelopment, isProduction, isTest } from './environment'

const logger = console

export function error(message: string, context?: GenericObject): void {
  if (isTest()) {
    return
  }

  if (context) {
    logger.error(message, context)
  } else {
    logger.error(message)
  }
}

export function group(
  message: string,
  context: GenericObject | undefined,
  {
    isCollapsed = false,
  }: {
    isCollapsed?: boolean
  }
): void {
  if (isDevelopment() && !isTest()) {
    if (isCollapsed) {
      logger.groupCollapsed(message)
    } else {
      logger.group(message)
    }

    if (context) {
      logger.info(message, context)
    } else {
      logger.info(message)
    }
    logger.groupEnd()
  }
}

export function info(message: string, context?: GenericObject): void {
  if (!isTest() && !isProduction()) {
    if (context) {
      logger.info(message, context)
    } else {
      logger.info(message)
    }
  }
}

export function warn(message: string, context?: GenericObject): void {
  if (!isTest() && !isProduction()) {
    if (context) {
      logger.warn(message, context)
    } else {
      logger.warn(message)
    }
  }
}

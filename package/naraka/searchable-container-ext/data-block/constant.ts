import { TextOperator } from './types.d'

export const reverseTextOperation: Record<TextOperator, TextOperator> = {
  EQUALS: "NOT_EQUALS",
  NOT_EQUALS: "EQUALS",
  CONTAINS: "NOT_CONTAINS",
  NOT_CONTAINS: "CONTAINS",
  STARTS_WITH: "NOT_STARTS_WITH",
  NOT_STARTS_WITH: "STARTS_WITH",
  ENDS_WITH: "NOT_ENDS_WITH",
  NOT_ENDS_WITH: "ENDS_WITH",
}

export const textOperationSymbol: Record<TextOperator, string> = {
  EQUALS: "==",
  NOT_EQUALS: "!=",
  CONTAINS: "∋",
  NOT_CONTAINS: "∌",
  STARTS_WITH: "∀",
  NOT_STARTS_WITH: "∄",
  ENDS_WITH: "∃",
  NOT_ENDS_WITH: "∄",
};
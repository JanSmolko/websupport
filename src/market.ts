export type MarketIdentifier = "sk" | "cz" | "hu" | "at";

export type MarketGetOneResponse = {
  name: string;
  identifier: MarketIdentifier;
  currency: string;
};

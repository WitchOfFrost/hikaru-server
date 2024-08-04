import { DatabaseModel } from "../models/model.js";

export class RankHighest extends DatabaseModel {
  public rank: number = 0;
  public updated_at: Date = new Date();

  constructor() {
    super();
  }

  getRank(): number {
    return this.rank;
  }

  getUpdatedAt(): Date {
    return this.updated_at;
  }

  setRank(rank: number): void {
    this.rank = rank;
  }

  setUpdatedAt(updated_at: Date): void {
    this.updated_at = updated_at;
  }
}

import { IFact } from '../interface';
import { MySQL } from './database';
import { FactStatement } from './statements';

export class FactHandler {
  public static async save({ id, text }: IFact) {
    const newFact = [id, text];
    await MySQL.symply.query(FactStatement.insertFact(), [newFact]);

    return;
  }

  public static async findFact(id: string): Promise<IFact> {
    const [fact] = ((await MySQL.symply.query(FactStatement.findUser(), [
      id,
    ])) as any) as IFact[];

    return fact;
  }

  public static async getFacts(): Promise<IFact[]> {
    return ((await MySQL.symply.query(
      FactStatement.getFacts(),
    )) as any) as IFact[];
  }

  public static async deleteFact(id: string): Promise<void> {
    await MySQL.symply.query(FactStatement.deleteFact(), [id]);
    return;
  }
}

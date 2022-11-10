// Generated by Xata Codegen 0.18.0. Please do not edit.
import fetch from "node-fetch";
import {
  BaseClientOptions,
  buildClient,
  FetchImpl,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  { name: "Accounts", columns: [{ name: "name", type: "string" }] },
  {
    name: "Transactions",
    columns: [
      { name: "account_id", type: "link", link: { table: "Accounts" } },
      { name: "amount", type: "int" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Accounts = InferredTypes["Accounts"];
export type AccountsRecord = Accounts & XataRecord;

export type Transactions = InferredTypes["Transactions"];
export type TransactionsRecord = Transactions & XataRecord;

export type DatabaseSchema = {
  Accounts: AccountsRecord;
  Transactions: TransactionsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Dylan-Koei-Chavez-s-workspace-apgms2.us-east-1.xata.sh/db/example-db",
  fetch: fetch as FetchImpl,
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
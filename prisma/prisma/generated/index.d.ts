
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ShareUploadHistory
 * 
 */
export type ShareUploadHistory = $Result.DefaultSelection<Prisma.$ShareUploadHistoryPayload>
/**
 * Model DividendUploadHistory
 * 
 */
export type DividendUploadHistory = $Result.DefaultSelection<Prisma.$DividendUploadHistoryPayload>
/**
 * Model Dividend
 * 
 */
export type Dividend = $Result.DefaultSelection<Prisma.$DividendPayload>
/**
 * Model ShareHistory
 * 
 */
export type ShareHistory = $Result.DefaultSelection<Prisma.$ShareHistoryPayload>
/**
 * Model Share
 * 
 */
export type Share = $Result.DefaultSelection<Prisma.$SharePayload>
/**
 * Model ShareTransferHistory
 * 
 */
export type ShareTransferHistory = $Result.DefaultSelection<Prisma.$ShareTransferHistoryPayload>
/**
 * Model WaccHistory
 * 
 */
export type WaccHistory = $Result.DefaultSelection<Prisma.$WaccHistoryPayload>
/**
 * Model Shareholder
 * 
 */
export type Shareholder = $Result.DefaultSelection<Prisma.$ShareholderPayload>
/**
 * Model Security
 * 
 */
export type Security = $Result.DefaultSelection<Prisma.$SecurityPayload>
/**
 * Model SecurityTransaction
 * 
 */
export type SecurityTransaction = $Result.DefaultSelection<Prisma.$SecurityTransactionPayload>
/**
 * Model SecurityTransactionDetail
 * 
 */
export type SecurityTransactionDetail = $Result.DefaultSelection<Prisma.$SecurityTransactionDetailPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const DividenUploadType: {
  Dividend_Allocation: 'Dividend_Allocation',
  Dividend_Payment: 'Dividend_Payment'
};

export type DividenUploadType = (typeof DividenUploadType)[keyof typeof DividenUploadType]


export const OwnershipType: {
  Promoter_Share_Purchase: 'Promoter_Share_Purchase',
  Ipo_Purchase: 'Ipo_Purchase',
  Purchase_Sale: 'Purchase_Sale',
  Bonus_Share: 'Bonus_Share',
  Right_Share: 'Right_Share',
  Other: 'Other'
};

export type OwnershipType = (typeof OwnershipType)[keyof typeof OwnershipType]


export const TransferType: {
  Purchase_Sale: 'Purchase_Sale',
  Other: 'Other'
};

export type TransferType = (typeof TransferType)[keyof typeof TransferType]


export const ShareholderType: {
  Individual: 'Individual',
  Institution: 'Institution'
};

export type ShareholderType = (typeof ShareholderType)[keyof typeof ShareholderType]


export const SecurityClassification: {
  Equity: 'Equity',
  Bond: 'Bond',
  Mutual_Fund: 'Mutual_Fund',
  Other: 'Other'
};

export type SecurityClassification = (typeof SecurityClassification)[keyof typeof SecurityClassification]


export const SecurityClassificationAsPerNFRS: {
  FVTPL: 'FVTPL',
  FVTOCI: 'FVTOCI',
  Amortized_Cost: 'Amortized_Cost',
  Other: 'Other'
};

export type SecurityClassificationAsPerNFRS = (typeof SecurityClassificationAsPerNFRS)[keyof typeof SecurityClassificationAsPerNFRS]


export const SecurityAdditionNature: {
  Purchase: 'Purchase',
  Right_Share: 'Right_Share',
  Bonus_Share: 'Bonus_Share',
  Other: 'Other'
};

export type SecurityAdditionNature = (typeof SecurityAdditionNature)[keyof typeof SecurityAdditionNature]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type DividenUploadType = $Enums.DividenUploadType

export const DividenUploadType: typeof $Enums.DividenUploadType

export type OwnershipType = $Enums.OwnershipType

export const OwnershipType: typeof $Enums.OwnershipType

export type TransferType = $Enums.TransferType

export const TransferType: typeof $Enums.TransferType

export type ShareholderType = $Enums.ShareholderType

export const ShareholderType: typeof $Enums.ShareholderType

export type SecurityClassification = $Enums.SecurityClassification

export const SecurityClassification: typeof $Enums.SecurityClassification

export type SecurityClassificationAsPerNFRS = $Enums.SecurityClassificationAsPerNFRS

export const SecurityClassificationAsPerNFRS: typeof $Enums.SecurityClassificationAsPerNFRS

export type SecurityAdditionNature = $Enums.SecurityAdditionNature

export const SecurityAdditionNature: typeof $Enums.SecurityAdditionNature

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shareUploadHistory`: Exposes CRUD operations for the **ShareUploadHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShareUploadHistories
    * const shareUploadHistories = await prisma.shareUploadHistory.findMany()
    * ```
    */
  get shareUploadHistory(): Prisma.ShareUploadHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dividendUploadHistory`: Exposes CRUD operations for the **DividendUploadHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DividendUploadHistories
    * const dividendUploadHistories = await prisma.dividendUploadHistory.findMany()
    * ```
    */
  get dividendUploadHistory(): Prisma.DividendUploadHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dividend`: Exposes CRUD operations for the **Dividend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dividends
    * const dividends = await prisma.dividend.findMany()
    * ```
    */
  get dividend(): Prisma.DividendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shareHistory`: Exposes CRUD operations for the **ShareHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShareHistories
    * const shareHistories = await prisma.shareHistory.findMany()
    * ```
    */
  get shareHistory(): Prisma.ShareHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.share`: Exposes CRUD operations for the **Share** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shares
    * const shares = await prisma.share.findMany()
    * ```
    */
  get share(): Prisma.ShareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shareTransferHistory`: Exposes CRUD operations for the **ShareTransferHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShareTransferHistories
    * const shareTransferHistories = await prisma.shareTransferHistory.findMany()
    * ```
    */
  get shareTransferHistory(): Prisma.ShareTransferHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waccHistory`: Exposes CRUD operations for the **WaccHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaccHistories
    * const waccHistories = await prisma.waccHistory.findMany()
    * ```
    */
  get waccHistory(): Prisma.WaccHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shareholder`: Exposes CRUD operations for the **Shareholder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shareholders
    * const shareholders = await prisma.shareholder.findMany()
    * ```
    */
  get shareholder(): Prisma.ShareholderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.security`: Exposes CRUD operations for the **Security** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Securities
    * const securities = await prisma.security.findMany()
    * ```
    */
  get security(): Prisma.SecurityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.securityTransaction`: Exposes CRUD operations for the **SecurityTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityTransactions
    * const securityTransactions = await prisma.securityTransaction.findMany()
    * ```
    */
  get securityTransaction(): Prisma.SecurityTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.securityTransactionDetail`: Exposes CRUD operations for the **SecurityTransactionDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityTransactionDetails
    * const securityTransactionDetails = await prisma.securityTransactionDetail.findMany()
    * ```
    */
  get securityTransactionDetail(): Prisma.SecurityTransactionDetailDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ShareUploadHistory: 'ShareUploadHistory',
    DividendUploadHistory: 'DividendUploadHistory',
    Dividend: 'Dividend',
    ShareHistory: 'ShareHistory',
    Share: 'Share',
    ShareTransferHistory: 'ShareTransferHistory',
    WaccHistory: 'WaccHistory',
    Shareholder: 'Shareholder',
    Security: 'Security',
    SecurityTransaction: 'SecurityTransaction',
    SecurityTransactionDetail: 'SecurityTransactionDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "shareUploadHistory" | "dividendUploadHistory" | "dividend" | "shareHistory" | "share" | "shareTransferHistory" | "waccHistory" | "shareholder" | "security" | "securityTransaction" | "securityTransactionDetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ShareUploadHistory: {
        payload: Prisma.$ShareUploadHistoryPayload<ExtArgs>
        fields: Prisma.ShareUploadHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareUploadHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareUploadHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareUploadHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareUploadHistoryPayload>
          }
          findFirst: {
            args: Prisma.ShareUploadHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareUploadHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareUploadHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareUploadHistoryPayload>
          }
          findMany: {
            args: Prisma.ShareUploadHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareUploadHistoryPayload>[]
          }
          create: {
            args: Prisma.ShareUploadHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareUploadHistoryPayload>
          }
          createMany: {
            args: Prisma.ShareUploadHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareUploadHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareUploadHistoryPayload>[]
          }
          delete: {
            args: Prisma.ShareUploadHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareUploadHistoryPayload>
          }
          update: {
            args: Prisma.ShareUploadHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareUploadHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ShareUploadHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareUploadHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareUploadHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareUploadHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ShareUploadHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareUploadHistoryPayload>
          }
          aggregate: {
            args: Prisma.ShareUploadHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareUploadHistory>
          }
          groupBy: {
            args: Prisma.ShareUploadHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareUploadHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareUploadHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ShareUploadHistoryCountAggregateOutputType> | number
          }
        }
      }
      DividendUploadHistory: {
        payload: Prisma.$DividendUploadHistoryPayload<ExtArgs>
        fields: Prisma.DividendUploadHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DividendUploadHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendUploadHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DividendUploadHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendUploadHistoryPayload>
          }
          findFirst: {
            args: Prisma.DividendUploadHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendUploadHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DividendUploadHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendUploadHistoryPayload>
          }
          findMany: {
            args: Prisma.DividendUploadHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendUploadHistoryPayload>[]
          }
          create: {
            args: Prisma.DividendUploadHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendUploadHistoryPayload>
          }
          createMany: {
            args: Prisma.DividendUploadHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DividendUploadHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendUploadHistoryPayload>[]
          }
          delete: {
            args: Prisma.DividendUploadHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendUploadHistoryPayload>
          }
          update: {
            args: Prisma.DividendUploadHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendUploadHistoryPayload>
          }
          deleteMany: {
            args: Prisma.DividendUploadHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DividendUploadHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DividendUploadHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendUploadHistoryPayload>[]
          }
          upsert: {
            args: Prisma.DividendUploadHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendUploadHistoryPayload>
          }
          aggregate: {
            args: Prisma.DividendUploadHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDividendUploadHistory>
          }
          groupBy: {
            args: Prisma.DividendUploadHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DividendUploadHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DividendUploadHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<DividendUploadHistoryCountAggregateOutputType> | number
          }
        }
      }
      Dividend: {
        payload: Prisma.$DividendPayload<ExtArgs>
        fields: Prisma.DividendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DividendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DividendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendPayload>
          }
          findFirst: {
            args: Prisma.DividendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DividendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendPayload>
          }
          findMany: {
            args: Prisma.DividendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendPayload>[]
          }
          create: {
            args: Prisma.DividendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendPayload>
          }
          createMany: {
            args: Prisma.DividendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DividendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendPayload>[]
          }
          delete: {
            args: Prisma.DividendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendPayload>
          }
          update: {
            args: Prisma.DividendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendPayload>
          }
          deleteMany: {
            args: Prisma.DividendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DividendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DividendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendPayload>[]
          }
          upsert: {
            args: Prisma.DividendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DividendPayload>
          }
          aggregate: {
            args: Prisma.DividendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDividend>
          }
          groupBy: {
            args: Prisma.DividendGroupByArgs<ExtArgs>
            result: $Utils.Optional<DividendGroupByOutputType>[]
          }
          count: {
            args: Prisma.DividendCountArgs<ExtArgs>
            result: $Utils.Optional<DividendCountAggregateOutputType> | number
          }
        }
      }
      ShareHistory: {
        payload: Prisma.$ShareHistoryPayload<ExtArgs>
        fields: Prisma.ShareHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareHistoryPayload>
          }
          findFirst: {
            args: Prisma.ShareHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareHistoryPayload>
          }
          findMany: {
            args: Prisma.ShareHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareHistoryPayload>[]
          }
          create: {
            args: Prisma.ShareHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareHistoryPayload>
          }
          createMany: {
            args: Prisma.ShareHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareHistoryPayload>[]
          }
          delete: {
            args: Prisma.ShareHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareHistoryPayload>
          }
          update: {
            args: Prisma.ShareHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ShareHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ShareHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareHistoryPayload>
          }
          aggregate: {
            args: Prisma.ShareHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareHistory>
          }
          groupBy: {
            args: Prisma.ShareHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ShareHistoryCountAggregateOutputType> | number
          }
        }
      }
      Share: {
        payload: Prisma.$SharePayload<ExtArgs>
        fields: Prisma.ShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          findFirst: {
            args: Prisma.ShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          findMany: {
            args: Prisma.ShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>[]
          }
          create: {
            args: Prisma.ShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          createMany: {
            args: Prisma.ShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>[]
          }
          delete: {
            args: Prisma.ShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          update: {
            args: Prisma.ShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          deleteMany: {
            args: Prisma.ShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>[]
          }
          upsert: {
            args: Prisma.ShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          aggregate: {
            args: Prisma.ShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShare>
          }
          groupBy: {
            args: Prisma.ShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareCountArgs<ExtArgs>
            result: $Utils.Optional<ShareCountAggregateOutputType> | number
          }
        }
      }
      ShareTransferHistory: {
        payload: Prisma.$ShareTransferHistoryPayload<ExtArgs>
        fields: Prisma.ShareTransferHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareTransferHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTransferHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareTransferHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTransferHistoryPayload>
          }
          findFirst: {
            args: Prisma.ShareTransferHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTransferHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareTransferHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTransferHistoryPayload>
          }
          findMany: {
            args: Prisma.ShareTransferHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTransferHistoryPayload>[]
          }
          create: {
            args: Prisma.ShareTransferHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTransferHistoryPayload>
          }
          createMany: {
            args: Prisma.ShareTransferHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareTransferHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTransferHistoryPayload>[]
          }
          delete: {
            args: Prisma.ShareTransferHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTransferHistoryPayload>
          }
          update: {
            args: Prisma.ShareTransferHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTransferHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ShareTransferHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareTransferHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareTransferHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTransferHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ShareTransferHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTransferHistoryPayload>
          }
          aggregate: {
            args: Prisma.ShareTransferHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareTransferHistory>
          }
          groupBy: {
            args: Prisma.ShareTransferHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareTransferHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareTransferHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ShareTransferHistoryCountAggregateOutputType> | number
          }
        }
      }
      WaccHistory: {
        payload: Prisma.$WaccHistoryPayload<ExtArgs>
        fields: Prisma.WaccHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaccHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaccHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaccHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaccHistoryPayload>
          }
          findFirst: {
            args: Prisma.WaccHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaccHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaccHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaccHistoryPayload>
          }
          findMany: {
            args: Prisma.WaccHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaccHistoryPayload>[]
          }
          create: {
            args: Prisma.WaccHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaccHistoryPayload>
          }
          createMany: {
            args: Prisma.WaccHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaccHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaccHistoryPayload>[]
          }
          delete: {
            args: Prisma.WaccHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaccHistoryPayload>
          }
          update: {
            args: Prisma.WaccHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaccHistoryPayload>
          }
          deleteMany: {
            args: Prisma.WaccHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaccHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaccHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaccHistoryPayload>[]
          }
          upsert: {
            args: Prisma.WaccHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaccHistoryPayload>
          }
          aggregate: {
            args: Prisma.WaccHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaccHistory>
          }
          groupBy: {
            args: Prisma.WaccHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaccHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaccHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<WaccHistoryCountAggregateOutputType> | number
          }
        }
      }
      Shareholder: {
        payload: Prisma.$ShareholderPayload<ExtArgs>
        fields: Prisma.ShareholderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareholderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareholderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareholderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareholderPayload>
          }
          findFirst: {
            args: Prisma.ShareholderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareholderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareholderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareholderPayload>
          }
          findMany: {
            args: Prisma.ShareholderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareholderPayload>[]
          }
          create: {
            args: Prisma.ShareholderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareholderPayload>
          }
          createMany: {
            args: Prisma.ShareholderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareholderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareholderPayload>[]
          }
          delete: {
            args: Prisma.ShareholderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareholderPayload>
          }
          update: {
            args: Prisma.ShareholderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareholderPayload>
          }
          deleteMany: {
            args: Prisma.ShareholderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareholderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareholderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareholderPayload>[]
          }
          upsert: {
            args: Prisma.ShareholderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareholderPayload>
          }
          aggregate: {
            args: Prisma.ShareholderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareholder>
          }
          groupBy: {
            args: Prisma.ShareholderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareholderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareholderCountArgs<ExtArgs>
            result: $Utils.Optional<ShareholderCountAggregateOutputType> | number
          }
        }
      }
      Security: {
        payload: Prisma.$SecurityPayload<ExtArgs>
        fields: Prisma.SecurityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityPayload>
          }
          findFirst: {
            args: Prisma.SecurityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityPayload>
          }
          findMany: {
            args: Prisma.SecurityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityPayload>[]
          }
          create: {
            args: Prisma.SecurityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityPayload>
          }
          createMany: {
            args: Prisma.SecurityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityPayload>[]
          }
          delete: {
            args: Prisma.SecurityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityPayload>
          }
          update: {
            args: Prisma.SecurityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityPayload>
          }
          deleteMany: {
            args: Prisma.SecurityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecurityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityPayload>[]
          }
          upsert: {
            args: Prisma.SecurityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityPayload>
          }
          aggregate: {
            args: Prisma.SecurityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurity>
          }
          groupBy: {
            args: Prisma.SecurityGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityCountAggregateOutputType> | number
          }
        }
      }
      SecurityTransaction: {
        payload: Prisma.$SecurityTransactionPayload<ExtArgs>
        fields: Prisma.SecurityTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionPayload>
          }
          findFirst: {
            args: Prisma.SecurityTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionPayload>
          }
          findMany: {
            args: Prisma.SecurityTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionPayload>[]
          }
          create: {
            args: Prisma.SecurityTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionPayload>
          }
          createMany: {
            args: Prisma.SecurityTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionPayload>[]
          }
          delete: {
            args: Prisma.SecurityTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionPayload>
          }
          update: {
            args: Prisma.SecurityTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionPayload>
          }
          deleteMany: {
            args: Prisma.SecurityTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecurityTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionPayload>[]
          }
          upsert: {
            args: Prisma.SecurityTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionPayload>
          }
          aggregate: {
            args: Prisma.SecurityTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityTransaction>
          }
          groupBy: {
            args: Prisma.SecurityTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityTransactionCountAggregateOutputType> | number
          }
        }
      }
      SecurityTransactionDetail: {
        payload: Prisma.$SecurityTransactionDetailPayload<ExtArgs>
        fields: Prisma.SecurityTransactionDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityTransactionDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityTransactionDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionDetailPayload>
          }
          findFirst: {
            args: Prisma.SecurityTransactionDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityTransactionDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionDetailPayload>
          }
          findMany: {
            args: Prisma.SecurityTransactionDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionDetailPayload>[]
          }
          create: {
            args: Prisma.SecurityTransactionDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionDetailPayload>
          }
          createMany: {
            args: Prisma.SecurityTransactionDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityTransactionDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionDetailPayload>[]
          }
          delete: {
            args: Prisma.SecurityTransactionDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionDetailPayload>
          }
          update: {
            args: Prisma.SecurityTransactionDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionDetailPayload>
          }
          deleteMany: {
            args: Prisma.SecurityTransactionDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityTransactionDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecurityTransactionDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionDetailPayload>[]
          }
          upsert: {
            args: Prisma.SecurityTransactionDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityTransactionDetailPayload>
          }
          aggregate: {
            args: Prisma.SecurityTransactionDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityTransactionDetail>
          }
          groupBy: {
            args: Prisma.SecurityTransactionDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityTransactionDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityTransactionDetailCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityTransactionDetailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    shareUploadHistory?: ShareUploadHistoryOmit
    dividendUploadHistory?: DividendUploadHistoryOmit
    dividend?: DividendOmit
    shareHistory?: ShareHistoryOmit
    share?: ShareOmit
    shareTransferHistory?: ShareTransferHistoryOmit
    waccHistory?: WaccHistoryOmit
    shareholder?: ShareholderOmit
    security?: SecurityOmit
    securityTransaction?: SecurityTransactionOmit
    securityTransactionDetail?: SecurityTransactionDetailOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ShareUploadHistoryCountOutputType
   */

  export type ShareUploadHistoryCountOutputType = {
    shareHistory: number
  }

  export type ShareUploadHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareHistory?: boolean | ShareUploadHistoryCountOutputTypeCountShareHistoryArgs
  }

  // Custom InputTypes
  /**
   * ShareUploadHistoryCountOutputType without action
   */
  export type ShareUploadHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareUploadHistoryCountOutputType
     */
    select?: ShareUploadHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShareUploadHistoryCountOutputType without action
   */
  export type ShareUploadHistoryCountOutputTypeCountShareHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareHistoryWhereInput
  }


  /**
   * Count Type DividendUploadHistoryCountOutputType
   */

  export type DividendUploadHistoryCountOutputType = {
    dividend: number
  }

  export type DividendUploadHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dividend?: boolean | DividendUploadHistoryCountOutputTypeCountDividendArgs
  }

  // Custom InputTypes
  /**
   * DividendUploadHistoryCountOutputType without action
   */
  export type DividendUploadHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendUploadHistoryCountOutputType
     */
    select?: DividendUploadHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DividendUploadHistoryCountOutputType without action
   */
  export type DividendUploadHistoryCountOutputTypeCountDividendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DividendWhereInput
  }


  /**
   * Count Type ShareTransferHistoryCountOutputType
   */

  export type ShareTransferHistoryCountOutputType = {
    shareHistory: number
  }

  export type ShareTransferHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareHistory?: boolean | ShareTransferHistoryCountOutputTypeCountShareHistoryArgs
  }

  // Custom InputTypes
  /**
   * ShareTransferHistoryCountOutputType without action
   */
  export type ShareTransferHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistoryCountOutputType
     */
    select?: ShareTransferHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShareTransferHistoryCountOutputType without action
   */
  export type ShareTransferHistoryCountOutputTypeCountShareHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareHistoryWhereInput
  }


  /**
   * Count Type ShareholderCountOutputType
   */

  export type ShareholderCountOutputType = {
    dividend: number
    share: number
    shareHistory: number
    transferredShareHistory: number
    receivedShareHistory: number
    waccHistory: number
  }

  export type ShareholderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dividend?: boolean | ShareholderCountOutputTypeCountDividendArgs
    share?: boolean | ShareholderCountOutputTypeCountShareArgs
    shareHistory?: boolean | ShareholderCountOutputTypeCountShareHistoryArgs
    transferredShareHistory?: boolean | ShareholderCountOutputTypeCountTransferredShareHistoryArgs
    receivedShareHistory?: boolean | ShareholderCountOutputTypeCountReceivedShareHistoryArgs
    waccHistory?: boolean | ShareholderCountOutputTypeCountWaccHistoryArgs
  }

  // Custom InputTypes
  /**
   * ShareholderCountOutputType without action
   */
  export type ShareholderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareholderCountOutputType
     */
    select?: ShareholderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShareholderCountOutputType without action
   */
  export type ShareholderCountOutputTypeCountDividendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DividendWhereInput
  }

  /**
   * ShareholderCountOutputType without action
   */
  export type ShareholderCountOutputTypeCountShareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareWhereInput
  }

  /**
   * ShareholderCountOutputType without action
   */
  export type ShareholderCountOutputTypeCountShareHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareHistoryWhereInput
  }

  /**
   * ShareholderCountOutputType without action
   */
  export type ShareholderCountOutputTypeCountTransferredShareHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareTransferHistoryWhereInput
  }

  /**
   * ShareholderCountOutputType without action
   */
  export type ShareholderCountOutputTypeCountReceivedShareHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareTransferHistoryWhereInput
  }

  /**
   * ShareholderCountOutputType without action
   */
  export type ShareholderCountOutputTypeCountWaccHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaccHistoryWhereInput
  }


  /**
   * Count Type SecurityCountOutputType
   */

  export type SecurityCountOutputType = {
    securityTransactionDetail: number
  }

  export type SecurityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    securityTransactionDetail?: boolean | SecurityCountOutputTypeCountSecurityTransactionDetailArgs
  }

  // Custom InputTypes
  /**
   * SecurityCountOutputType without action
   */
  export type SecurityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityCountOutputType
     */
    select?: SecurityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SecurityCountOutputType without action
   */
  export type SecurityCountOutputTypeCountSecurityTransactionDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityTransactionDetailWhereInput
  }


  /**
   * Count Type SecurityTransactionCountOutputType
   */

  export type SecurityTransactionCountOutputType = {
    securityTransactionDetail: number
  }

  export type SecurityTransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    securityTransactionDetail?: boolean | SecurityTransactionCountOutputTypeCountSecurityTransactionDetailArgs
  }

  // Custom InputTypes
  /**
   * SecurityTransactionCountOutputType without action
   */
  export type SecurityTransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionCountOutputType
     */
    select?: SecurityTransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SecurityTransactionCountOutputType without action
   */
  export type SecurityTransactionCountOutputTypeCountSecurityTransactionDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityTransactionDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    email: string | null
    requirePasswordChange: boolean | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    email: string | null
    requirePasswordChange: boolean | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    email: number
    requirePasswordChange: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    email?: true
    requirePasswordChange?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    email?: true
    requirePasswordChange?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    email?: true
    requirePasswordChange?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    username: string
    password: string
    email: string
    requirePasswordChange: boolean
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    requirePasswordChange?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    requirePasswordChange?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    requirePasswordChange?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    requirePasswordChange?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "email" | "requirePasswordChange" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      username: string
      password: string
      email: string
      requirePasswordChange: boolean
      role: $Enums.UserRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly requirePasswordChange: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model ShareUploadHistory
   */

  export type AggregateShareUploadHistory = {
    _count: ShareUploadHistoryCountAggregateOutputType | null
    _avg: ShareUploadHistoryAvgAggregateOutputType | null
    _sum: ShareUploadHistorySumAggregateOutputType | null
    _min: ShareUploadHistoryMinAggregateOutputType | null
    _max: ShareUploadHistoryMaxAggregateOutputType | null
  }

  export type ShareUploadHistoryAvgAggregateOutputType = {
    id: number | null
  }

  export type ShareUploadHistorySumAggregateOutputType = {
    id: number | null
  }

  export type ShareUploadHistoryMinAggregateOutputType = {
    id: number | null
    ownershipType: $Enums.OwnershipType | null
    ownershipDate: string | null
    remarks: string | null
  }

  export type ShareUploadHistoryMaxAggregateOutputType = {
    id: number | null
    ownershipType: $Enums.OwnershipType | null
    ownershipDate: string | null
    remarks: string | null
  }

  export type ShareUploadHistoryCountAggregateOutputType = {
    id: number
    ownershipType: number
    ownershipDate: number
    remarks: number
    _all: number
  }


  export type ShareUploadHistoryAvgAggregateInputType = {
    id?: true
  }

  export type ShareUploadHistorySumAggregateInputType = {
    id?: true
  }

  export type ShareUploadHistoryMinAggregateInputType = {
    id?: true
    ownershipType?: true
    ownershipDate?: true
    remarks?: true
  }

  export type ShareUploadHistoryMaxAggregateInputType = {
    id?: true
    ownershipType?: true
    ownershipDate?: true
    remarks?: true
  }

  export type ShareUploadHistoryCountAggregateInputType = {
    id?: true
    ownershipType?: true
    ownershipDate?: true
    remarks?: true
    _all?: true
  }

  export type ShareUploadHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareUploadHistory to aggregate.
     */
    where?: ShareUploadHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareUploadHistories to fetch.
     */
    orderBy?: ShareUploadHistoryOrderByWithRelationInput | ShareUploadHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareUploadHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareUploadHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareUploadHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShareUploadHistories
    **/
    _count?: true | ShareUploadHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShareUploadHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShareUploadHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareUploadHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareUploadHistoryMaxAggregateInputType
  }

  export type GetShareUploadHistoryAggregateType<T extends ShareUploadHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateShareUploadHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareUploadHistory[P]>
      : GetScalarType<T[P], AggregateShareUploadHistory[P]>
  }




  export type ShareUploadHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareUploadHistoryWhereInput
    orderBy?: ShareUploadHistoryOrderByWithAggregationInput | ShareUploadHistoryOrderByWithAggregationInput[]
    by: ShareUploadHistoryScalarFieldEnum[] | ShareUploadHistoryScalarFieldEnum
    having?: ShareUploadHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareUploadHistoryCountAggregateInputType | true
    _avg?: ShareUploadHistoryAvgAggregateInputType
    _sum?: ShareUploadHistorySumAggregateInputType
    _min?: ShareUploadHistoryMinAggregateInputType
    _max?: ShareUploadHistoryMaxAggregateInputType
  }

  export type ShareUploadHistoryGroupByOutputType = {
    id: number
    ownershipType: $Enums.OwnershipType
    ownershipDate: string
    remarks: string
    _count: ShareUploadHistoryCountAggregateOutputType | null
    _avg: ShareUploadHistoryAvgAggregateOutputType | null
    _sum: ShareUploadHistorySumAggregateOutputType | null
    _min: ShareUploadHistoryMinAggregateOutputType | null
    _max: ShareUploadHistoryMaxAggregateOutputType | null
  }

  type GetShareUploadHistoryGroupByPayload<T extends ShareUploadHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareUploadHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareUploadHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareUploadHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ShareUploadHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ShareUploadHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownershipType?: boolean
    ownershipDate?: boolean
    remarks?: boolean
    shareHistory?: boolean | ShareUploadHistory$shareHistoryArgs<ExtArgs>
    _count?: boolean | ShareUploadHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareUploadHistory"]>

  export type ShareUploadHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownershipType?: boolean
    ownershipDate?: boolean
    remarks?: boolean
  }, ExtArgs["result"]["shareUploadHistory"]>

  export type ShareUploadHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownershipType?: boolean
    ownershipDate?: boolean
    remarks?: boolean
  }, ExtArgs["result"]["shareUploadHistory"]>

  export type ShareUploadHistorySelectScalar = {
    id?: boolean
    ownershipType?: boolean
    ownershipDate?: boolean
    remarks?: boolean
  }

  export type ShareUploadHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownershipType" | "ownershipDate" | "remarks", ExtArgs["result"]["shareUploadHistory"]>
  export type ShareUploadHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareHistory?: boolean | ShareUploadHistory$shareHistoryArgs<ExtArgs>
    _count?: boolean | ShareUploadHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShareUploadHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShareUploadHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShareUploadHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShareUploadHistory"
    objects: {
      shareHistory: Prisma.$ShareHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ownershipType: $Enums.OwnershipType
      ownershipDate: string
      remarks: string
    }, ExtArgs["result"]["shareUploadHistory"]>
    composites: {}
  }

  type ShareUploadHistoryGetPayload<S extends boolean | null | undefined | ShareUploadHistoryDefaultArgs> = $Result.GetResult<Prisma.$ShareUploadHistoryPayload, S>

  type ShareUploadHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareUploadHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareUploadHistoryCountAggregateInputType | true
    }

  export interface ShareUploadHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShareUploadHistory'], meta: { name: 'ShareUploadHistory' } }
    /**
     * Find zero or one ShareUploadHistory that matches the filter.
     * @param {ShareUploadHistoryFindUniqueArgs} args - Arguments to find a ShareUploadHistory
     * @example
     * // Get one ShareUploadHistory
     * const shareUploadHistory = await prisma.shareUploadHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareUploadHistoryFindUniqueArgs>(args: SelectSubset<T, ShareUploadHistoryFindUniqueArgs<ExtArgs>>): Prisma__ShareUploadHistoryClient<$Result.GetResult<Prisma.$ShareUploadHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShareUploadHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareUploadHistoryFindUniqueOrThrowArgs} args - Arguments to find a ShareUploadHistory
     * @example
     * // Get one ShareUploadHistory
     * const shareUploadHistory = await prisma.shareUploadHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareUploadHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareUploadHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareUploadHistoryClient<$Result.GetResult<Prisma.$ShareUploadHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareUploadHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareUploadHistoryFindFirstArgs} args - Arguments to find a ShareUploadHistory
     * @example
     * // Get one ShareUploadHistory
     * const shareUploadHistory = await prisma.shareUploadHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareUploadHistoryFindFirstArgs>(args?: SelectSubset<T, ShareUploadHistoryFindFirstArgs<ExtArgs>>): Prisma__ShareUploadHistoryClient<$Result.GetResult<Prisma.$ShareUploadHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareUploadHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareUploadHistoryFindFirstOrThrowArgs} args - Arguments to find a ShareUploadHistory
     * @example
     * // Get one ShareUploadHistory
     * const shareUploadHistory = await prisma.shareUploadHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareUploadHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareUploadHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareUploadHistoryClient<$Result.GetResult<Prisma.$ShareUploadHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShareUploadHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareUploadHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShareUploadHistories
     * const shareUploadHistories = await prisma.shareUploadHistory.findMany()
     * 
     * // Get first 10 ShareUploadHistories
     * const shareUploadHistories = await prisma.shareUploadHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareUploadHistoryWithIdOnly = await prisma.shareUploadHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareUploadHistoryFindManyArgs>(args?: SelectSubset<T, ShareUploadHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareUploadHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShareUploadHistory.
     * @param {ShareUploadHistoryCreateArgs} args - Arguments to create a ShareUploadHistory.
     * @example
     * // Create one ShareUploadHistory
     * const ShareUploadHistory = await prisma.shareUploadHistory.create({
     *   data: {
     *     // ... data to create a ShareUploadHistory
     *   }
     * })
     * 
     */
    create<T extends ShareUploadHistoryCreateArgs>(args: SelectSubset<T, ShareUploadHistoryCreateArgs<ExtArgs>>): Prisma__ShareUploadHistoryClient<$Result.GetResult<Prisma.$ShareUploadHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShareUploadHistories.
     * @param {ShareUploadHistoryCreateManyArgs} args - Arguments to create many ShareUploadHistories.
     * @example
     * // Create many ShareUploadHistories
     * const shareUploadHistory = await prisma.shareUploadHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareUploadHistoryCreateManyArgs>(args?: SelectSubset<T, ShareUploadHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShareUploadHistories and returns the data saved in the database.
     * @param {ShareUploadHistoryCreateManyAndReturnArgs} args - Arguments to create many ShareUploadHistories.
     * @example
     * // Create many ShareUploadHistories
     * const shareUploadHistory = await prisma.shareUploadHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShareUploadHistories and only return the `id`
     * const shareUploadHistoryWithIdOnly = await prisma.shareUploadHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareUploadHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareUploadHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareUploadHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShareUploadHistory.
     * @param {ShareUploadHistoryDeleteArgs} args - Arguments to delete one ShareUploadHistory.
     * @example
     * // Delete one ShareUploadHistory
     * const ShareUploadHistory = await prisma.shareUploadHistory.delete({
     *   where: {
     *     // ... filter to delete one ShareUploadHistory
     *   }
     * })
     * 
     */
    delete<T extends ShareUploadHistoryDeleteArgs>(args: SelectSubset<T, ShareUploadHistoryDeleteArgs<ExtArgs>>): Prisma__ShareUploadHistoryClient<$Result.GetResult<Prisma.$ShareUploadHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShareUploadHistory.
     * @param {ShareUploadHistoryUpdateArgs} args - Arguments to update one ShareUploadHistory.
     * @example
     * // Update one ShareUploadHistory
     * const shareUploadHistory = await prisma.shareUploadHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareUploadHistoryUpdateArgs>(args: SelectSubset<T, ShareUploadHistoryUpdateArgs<ExtArgs>>): Prisma__ShareUploadHistoryClient<$Result.GetResult<Prisma.$ShareUploadHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShareUploadHistories.
     * @param {ShareUploadHistoryDeleteManyArgs} args - Arguments to filter ShareUploadHistories to delete.
     * @example
     * // Delete a few ShareUploadHistories
     * const { count } = await prisma.shareUploadHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareUploadHistoryDeleteManyArgs>(args?: SelectSubset<T, ShareUploadHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareUploadHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareUploadHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShareUploadHistories
     * const shareUploadHistory = await prisma.shareUploadHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareUploadHistoryUpdateManyArgs>(args: SelectSubset<T, ShareUploadHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareUploadHistories and returns the data updated in the database.
     * @param {ShareUploadHistoryUpdateManyAndReturnArgs} args - Arguments to update many ShareUploadHistories.
     * @example
     * // Update many ShareUploadHistories
     * const shareUploadHistory = await prisma.shareUploadHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShareUploadHistories and only return the `id`
     * const shareUploadHistoryWithIdOnly = await prisma.shareUploadHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareUploadHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareUploadHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareUploadHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShareUploadHistory.
     * @param {ShareUploadHistoryUpsertArgs} args - Arguments to update or create a ShareUploadHistory.
     * @example
     * // Update or create a ShareUploadHistory
     * const shareUploadHistory = await prisma.shareUploadHistory.upsert({
     *   create: {
     *     // ... data to create a ShareUploadHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShareUploadHistory we want to update
     *   }
     * })
     */
    upsert<T extends ShareUploadHistoryUpsertArgs>(args: SelectSubset<T, ShareUploadHistoryUpsertArgs<ExtArgs>>): Prisma__ShareUploadHistoryClient<$Result.GetResult<Prisma.$ShareUploadHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShareUploadHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareUploadHistoryCountArgs} args - Arguments to filter ShareUploadHistories to count.
     * @example
     * // Count the number of ShareUploadHistories
     * const count = await prisma.shareUploadHistory.count({
     *   where: {
     *     // ... the filter for the ShareUploadHistories we want to count
     *   }
     * })
    **/
    count<T extends ShareUploadHistoryCountArgs>(
      args?: Subset<T, ShareUploadHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareUploadHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShareUploadHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareUploadHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShareUploadHistoryAggregateArgs>(args: Subset<T, ShareUploadHistoryAggregateArgs>): Prisma.PrismaPromise<GetShareUploadHistoryAggregateType<T>>

    /**
     * Group by ShareUploadHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareUploadHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShareUploadHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareUploadHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ShareUploadHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShareUploadHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareUploadHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShareUploadHistory model
   */
  readonly fields: ShareUploadHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShareUploadHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareUploadHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shareHistory<T extends ShareUploadHistory$shareHistoryArgs<ExtArgs> = {}>(args?: Subset<T, ShareUploadHistory$shareHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShareUploadHistory model
   */
  interface ShareUploadHistoryFieldRefs {
    readonly id: FieldRef<"ShareUploadHistory", 'Int'>
    readonly ownershipType: FieldRef<"ShareUploadHistory", 'OwnershipType'>
    readonly ownershipDate: FieldRef<"ShareUploadHistory", 'String'>
    readonly remarks: FieldRef<"ShareUploadHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShareUploadHistory findUnique
   */
  export type ShareUploadHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareUploadHistory
     */
    select?: ShareUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareUploadHistory
     */
    omit?: ShareUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareUploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareUploadHistory to fetch.
     */
    where: ShareUploadHistoryWhereUniqueInput
  }

  /**
   * ShareUploadHistory findUniqueOrThrow
   */
  export type ShareUploadHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareUploadHistory
     */
    select?: ShareUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareUploadHistory
     */
    omit?: ShareUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareUploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareUploadHistory to fetch.
     */
    where: ShareUploadHistoryWhereUniqueInput
  }

  /**
   * ShareUploadHistory findFirst
   */
  export type ShareUploadHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareUploadHistory
     */
    select?: ShareUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareUploadHistory
     */
    omit?: ShareUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareUploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareUploadHistory to fetch.
     */
    where?: ShareUploadHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareUploadHistories to fetch.
     */
    orderBy?: ShareUploadHistoryOrderByWithRelationInput | ShareUploadHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareUploadHistories.
     */
    cursor?: ShareUploadHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareUploadHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareUploadHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareUploadHistories.
     */
    distinct?: ShareUploadHistoryScalarFieldEnum | ShareUploadHistoryScalarFieldEnum[]
  }

  /**
   * ShareUploadHistory findFirstOrThrow
   */
  export type ShareUploadHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareUploadHistory
     */
    select?: ShareUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareUploadHistory
     */
    omit?: ShareUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareUploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareUploadHistory to fetch.
     */
    where?: ShareUploadHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareUploadHistories to fetch.
     */
    orderBy?: ShareUploadHistoryOrderByWithRelationInput | ShareUploadHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareUploadHistories.
     */
    cursor?: ShareUploadHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareUploadHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareUploadHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareUploadHistories.
     */
    distinct?: ShareUploadHistoryScalarFieldEnum | ShareUploadHistoryScalarFieldEnum[]
  }

  /**
   * ShareUploadHistory findMany
   */
  export type ShareUploadHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareUploadHistory
     */
    select?: ShareUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareUploadHistory
     */
    omit?: ShareUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareUploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareUploadHistories to fetch.
     */
    where?: ShareUploadHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareUploadHistories to fetch.
     */
    orderBy?: ShareUploadHistoryOrderByWithRelationInput | ShareUploadHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShareUploadHistories.
     */
    cursor?: ShareUploadHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareUploadHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareUploadHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareUploadHistories.
     */
    distinct?: ShareUploadHistoryScalarFieldEnum | ShareUploadHistoryScalarFieldEnum[]
  }

  /**
   * ShareUploadHistory create
   */
  export type ShareUploadHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareUploadHistory
     */
    select?: ShareUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareUploadHistory
     */
    omit?: ShareUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareUploadHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ShareUploadHistory.
     */
    data: XOR<ShareUploadHistoryCreateInput, ShareUploadHistoryUncheckedCreateInput>
  }

  /**
   * ShareUploadHistory createMany
   */
  export type ShareUploadHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShareUploadHistories.
     */
    data: ShareUploadHistoryCreateManyInput | ShareUploadHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShareUploadHistory createManyAndReturn
   */
  export type ShareUploadHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareUploadHistory
     */
    select?: ShareUploadHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareUploadHistory
     */
    omit?: ShareUploadHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ShareUploadHistories.
     */
    data: ShareUploadHistoryCreateManyInput | ShareUploadHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShareUploadHistory update
   */
  export type ShareUploadHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareUploadHistory
     */
    select?: ShareUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareUploadHistory
     */
    omit?: ShareUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareUploadHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ShareUploadHistory.
     */
    data: XOR<ShareUploadHistoryUpdateInput, ShareUploadHistoryUncheckedUpdateInput>
    /**
     * Choose, which ShareUploadHistory to update.
     */
    where: ShareUploadHistoryWhereUniqueInput
  }

  /**
   * ShareUploadHistory updateMany
   */
  export type ShareUploadHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShareUploadHistories.
     */
    data: XOR<ShareUploadHistoryUpdateManyMutationInput, ShareUploadHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ShareUploadHistories to update
     */
    where?: ShareUploadHistoryWhereInput
    /**
     * Limit how many ShareUploadHistories to update.
     */
    limit?: number
  }

  /**
   * ShareUploadHistory updateManyAndReturn
   */
  export type ShareUploadHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareUploadHistory
     */
    select?: ShareUploadHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareUploadHistory
     */
    omit?: ShareUploadHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ShareUploadHistories.
     */
    data: XOR<ShareUploadHistoryUpdateManyMutationInput, ShareUploadHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ShareUploadHistories to update
     */
    where?: ShareUploadHistoryWhereInput
    /**
     * Limit how many ShareUploadHistories to update.
     */
    limit?: number
  }

  /**
   * ShareUploadHistory upsert
   */
  export type ShareUploadHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareUploadHistory
     */
    select?: ShareUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareUploadHistory
     */
    omit?: ShareUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareUploadHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ShareUploadHistory to update in case it exists.
     */
    where: ShareUploadHistoryWhereUniqueInput
    /**
     * In case the ShareUploadHistory found by the `where` argument doesn't exist, create a new ShareUploadHistory with this data.
     */
    create: XOR<ShareUploadHistoryCreateInput, ShareUploadHistoryUncheckedCreateInput>
    /**
     * In case the ShareUploadHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareUploadHistoryUpdateInput, ShareUploadHistoryUncheckedUpdateInput>
  }

  /**
   * ShareUploadHistory delete
   */
  export type ShareUploadHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareUploadHistory
     */
    select?: ShareUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareUploadHistory
     */
    omit?: ShareUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareUploadHistoryInclude<ExtArgs> | null
    /**
     * Filter which ShareUploadHistory to delete.
     */
    where: ShareUploadHistoryWhereUniqueInput
  }

  /**
   * ShareUploadHistory deleteMany
   */
  export type ShareUploadHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareUploadHistories to delete
     */
    where?: ShareUploadHistoryWhereInput
    /**
     * Limit how many ShareUploadHistories to delete.
     */
    limit?: number
  }

  /**
   * ShareUploadHistory.shareHistory
   */
  export type ShareUploadHistory$shareHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryInclude<ExtArgs> | null
    where?: ShareHistoryWhereInput
    orderBy?: ShareHistoryOrderByWithRelationInput | ShareHistoryOrderByWithRelationInput[]
    cursor?: ShareHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareHistoryScalarFieldEnum | ShareHistoryScalarFieldEnum[]
  }

  /**
   * ShareUploadHistory without action
   */
  export type ShareUploadHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareUploadHistory
     */
    select?: ShareUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareUploadHistory
     */
    omit?: ShareUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareUploadHistoryInclude<ExtArgs> | null
  }


  /**
   * Model DividendUploadHistory
   */

  export type AggregateDividendUploadHistory = {
    _count: DividendUploadHistoryCountAggregateOutputType | null
    _avg: DividendUploadHistoryAvgAggregateOutputType | null
    _sum: DividendUploadHistorySumAggregateOutputType | null
    _min: DividendUploadHistoryMinAggregateOutputType | null
    _max: DividendUploadHistoryMaxAggregateOutputType | null
  }

  export type DividendUploadHistoryAvgAggregateOutputType = {
    id: number | null
  }

  export type DividendUploadHistorySumAggregateOutputType = {
    id: number | null
  }

  export type DividendUploadHistoryMinAggregateOutputType = {
    id: number | null
    dividendUploadType: $Enums.DividenUploadType | null
    transactionDateRange: string | null
    remarks: string | null
  }

  export type DividendUploadHistoryMaxAggregateOutputType = {
    id: number | null
    dividendUploadType: $Enums.DividenUploadType | null
    transactionDateRange: string | null
    remarks: string | null
  }

  export type DividendUploadHistoryCountAggregateOutputType = {
    id: number
    dividendUploadType: number
    transactionDateRange: number
    remarks: number
    _all: number
  }


  export type DividendUploadHistoryAvgAggregateInputType = {
    id?: true
  }

  export type DividendUploadHistorySumAggregateInputType = {
    id?: true
  }

  export type DividendUploadHistoryMinAggregateInputType = {
    id?: true
    dividendUploadType?: true
    transactionDateRange?: true
    remarks?: true
  }

  export type DividendUploadHistoryMaxAggregateInputType = {
    id?: true
    dividendUploadType?: true
    transactionDateRange?: true
    remarks?: true
  }

  export type DividendUploadHistoryCountAggregateInputType = {
    id?: true
    dividendUploadType?: true
    transactionDateRange?: true
    remarks?: true
    _all?: true
  }

  export type DividendUploadHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DividendUploadHistory to aggregate.
     */
    where?: DividendUploadHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DividendUploadHistories to fetch.
     */
    orderBy?: DividendUploadHistoryOrderByWithRelationInput | DividendUploadHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DividendUploadHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DividendUploadHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DividendUploadHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DividendUploadHistories
    **/
    _count?: true | DividendUploadHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DividendUploadHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DividendUploadHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DividendUploadHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DividendUploadHistoryMaxAggregateInputType
  }

  export type GetDividendUploadHistoryAggregateType<T extends DividendUploadHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDividendUploadHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDividendUploadHistory[P]>
      : GetScalarType<T[P], AggregateDividendUploadHistory[P]>
  }




  export type DividendUploadHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DividendUploadHistoryWhereInput
    orderBy?: DividendUploadHistoryOrderByWithAggregationInput | DividendUploadHistoryOrderByWithAggregationInput[]
    by: DividendUploadHistoryScalarFieldEnum[] | DividendUploadHistoryScalarFieldEnum
    having?: DividendUploadHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DividendUploadHistoryCountAggregateInputType | true
    _avg?: DividendUploadHistoryAvgAggregateInputType
    _sum?: DividendUploadHistorySumAggregateInputType
    _min?: DividendUploadHistoryMinAggregateInputType
    _max?: DividendUploadHistoryMaxAggregateInputType
  }

  export type DividendUploadHistoryGroupByOutputType = {
    id: number
    dividendUploadType: $Enums.DividenUploadType
    transactionDateRange: string
    remarks: string
    _count: DividendUploadHistoryCountAggregateOutputType | null
    _avg: DividendUploadHistoryAvgAggregateOutputType | null
    _sum: DividendUploadHistorySumAggregateOutputType | null
    _min: DividendUploadHistoryMinAggregateOutputType | null
    _max: DividendUploadHistoryMaxAggregateOutputType | null
  }

  type GetDividendUploadHistoryGroupByPayload<T extends DividendUploadHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DividendUploadHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DividendUploadHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DividendUploadHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], DividendUploadHistoryGroupByOutputType[P]>
        }
      >
    >


  export type DividendUploadHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dividendUploadType?: boolean
    transactionDateRange?: boolean
    remarks?: boolean
    dividend?: boolean | DividendUploadHistory$dividendArgs<ExtArgs>
    _count?: boolean | DividendUploadHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dividendUploadHistory"]>

  export type DividendUploadHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dividendUploadType?: boolean
    transactionDateRange?: boolean
    remarks?: boolean
  }, ExtArgs["result"]["dividendUploadHistory"]>

  export type DividendUploadHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dividendUploadType?: boolean
    transactionDateRange?: boolean
    remarks?: boolean
  }, ExtArgs["result"]["dividendUploadHistory"]>

  export type DividendUploadHistorySelectScalar = {
    id?: boolean
    dividendUploadType?: boolean
    transactionDateRange?: boolean
    remarks?: boolean
  }

  export type DividendUploadHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dividendUploadType" | "transactionDateRange" | "remarks", ExtArgs["result"]["dividendUploadHistory"]>
  export type DividendUploadHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dividend?: boolean | DividendUploadHistory$dividendArgs<ExtArgs>
    _count?: boolean | DividendUploadHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DividendUploadHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DividendUploadHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DividendUploadHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DividendUploadHistory"
    objects: {
      dividend: Prisma.$DividendPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dividendUploadType: $Enums.DividenUploadType
      transactionDateRange: string
      remarks: string
    }, ExtArgs["result"]["dividendUploadHistory"]>
    composites: {}
  }

  type DividendUploadHistoryGetPayload<S extends boolean | null | undefined | DividendUploadHistoryDefaultArgs> = $Result.GetResult<Prisma.$DividendUploadHistoryPayload, S>

  type DividendUploadHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DividendUploadHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DividendUploadHistoryCountAggregateInputType | true
    }

  export interface DividendUploadHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DividendUploadHistory'], meta: { name: 'DividendUploadHistory' } }
    /**
     * Find zero or one DividendUploadHistory that matches the filter.
     * @param {DividendUploadHistoryFindUniqueArgs} args - Arguments to find a DividendUploadHistory
     * @example
     * // Get one DividendUploadHistory
     * const dividendUploadHistory = await prisma.dividendUploadHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DividendUploadHistoryFindUniqueArgs>(args: SelectSubset<T, DividendUploadHistoryFindUniqueArgs<ExtArgs>>): Prisma__DividendUploadHistoryClient<$Result.GetResult<Prisma.$DividendUploadHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DividendUploadHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DividendUploadHistoryFindUniqueOrThrowArgs} args - Arguments to find a DividendUploadHistory
     * @example
     * // Get one DividendUploadHistory
     * const dividendUploadHistory = await prisma.dividendUploadHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DividendUploadHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DividendUploadHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DividendUploadHistoryClient<$Result.GetResult<Prisma.$DividendUploadHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DividendUploadHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DividendUploadHistoryFindFirstArgs} args - Arguments to find a DividendUploadHistory
     * @example
     * // Get one DividendUploadHistory
     * const dividendUploadHistory = await prisma.dividendUploadHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DividendUploadHistoryFindFirstArgs>(args?: SelectSubset<T, DividendUploadHistoryFindFirstArgs<ExtArgs>>): Prisma__DividendUploadHistoryClient<$Result.GetResult<Prisma.$DividendUploadHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DividendUploadHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DividendUploadHistoryFindFirstOrThrowArgs} args - Arguments to find a DividendUploadHistory
     * @example
     * // Get one DividendUploadHistory
     * const dividendUploadHistory = await prisma.dividendUploadHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DividendUploadHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DividendUploadHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DividendUploadHistoryClient<$Result.GetResult<Prisma.$DividendUploadHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DividendUploadHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DividendUploadHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DividendUploadHistories
     * const dividendUploadHistories = await prisma.dividendUploadHistory.findMany()
     * 
     * // Get first 10 DividendUploadHistories
     * const dividendUploadHistories = await prisma.dividendUploadHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dividendUploadHistoryWithIdOnly = await prisma.dividendUploadHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DividendUploadHistoryFindManyArgs>(args?: SelectSubset<T, DividendUploadHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DividendUploadHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DividendUploadHistory.
     * @param {DividendUploadHistoryCreateArgs} args - Arguments to create a DividendUploadHistory.
     * @example
     * // Create one DividendUploadHistory
     * const DividendUploadHistory = await prisma.dividendUploadHistory.create({
     *   data: {
     *     // ... data to create a DividendUploadHistory
     *   }
     * })
     * 
     */
    create<T extends DividendUploadHistoryCreateArgs>(args: SelectSubset<T, DividendUploadHistoryCreateArgs<ExtArgs>>): Prisma__DividendUploadHistoryClient<$Result.GetResult<Prisma.$DividendUploadHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DividendUploadHistories.
     * @param {DividendUploadHistoryCreateManyArgs} args - Arguments to create many DividendUploadHistories.
     * @example
     * // Create many DividendUploadHistories
     * const dividendUploadHistory = await prisma.dividendUploadHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DividendUploadHistoryCreateManyArgs>(args?: SelectSubset<T, DividendUploadHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DividendUploadHistories and returns the data saved in the database.
     * @param {DividendUploadHistoryCreateManyAndReturnArgs} args - Arguments to create many DividendUploadHistories.
     * @example
     * // Create many DividendUploadHistories
     * const dividendUploadHistory = await prisma.dividendUploadHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DividendUploadHistories and only return the `id`
     * const dividendUploadHistoryWithIdOnly = await prisma.dividendUploadHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DividendUploadHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, DividendUploadHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DividendUploadHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DividendUploadHistory.
     * @param {DividendUploadHistoryDeleteArgs} args - Arguments to delete one DividendUploadHistory.
     * @example
     * // Delete one DividendUploadHistory
     * const DividendUploadHistory = await prisma.dividendUploadHistory.delete({
     *   where: {
     *     // ... filter to delete one DividendUploadHistory
     *   }
     * })
     * 
     */
    delete<T extends DividendUploadHistoryDeleteArgs>(args: SelectSubset<T, DividendUploadHistoryDeleteArgs<ExtArgs>>): Prisma__DividendUploadHistoryClient<$Result.GetResult<Prisma.$DividendUploadHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DividendUploadHistory.
     * @param {DividendUploadHistoryUpdateArgs} args - Arguments to update one DividendUploadHistory.
     * @example
     * // Update one DividendUploadHistory
     * const dividendUploadHistory = await prisma.dividendUploadHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DividendUploadHistoryUpdateArgs>(args: SelectSubset<T, DividendUploadHistoryUpdateArgs<ExtArgs>>): Prisma__DividendUploadHistoryClient<$Result.GetResult<Prisma.$DividendUploadHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DividendUploadHistories.
     * @param {DividendUploadHistoryDeleteManyArgs} args - Arguments to filter DividendUploadHistories to delete.
     * @example
     * // Delete a few DividendUploadHistories
     * const { count } = await prisma.dividendUploadHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DividendUploadHistoryDeleteManyArgs>(args?: SelectSubset<T, DividendUploadHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DividendUploadHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DividendUploadHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DividendUploadHistories
     * const dividendUploadHistory = await prisma.dividendUploadHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DividendUploadHistoryUpdateManyArgs>(args: SelectSubset<T, DividendUploadHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DividendUploadHistories and returns the data updated in the database.
     * @param {DividendUploadHistoryUpdateManyAndReturnArgs} args - Arguments to update many DividendUploadHistories.
     * @example
     * // Update many DividendUploadHistories
     * const dividendUploadHistory = await prisma.dividendUploadHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DividendUploadHistories and only return the `id`
     * const dividendUploadHistoryWithIdOnly = await prisma.dividendUploadHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DividendUploadHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, DividendUploadHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DividendUploadHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DividendUploadHistory.
     * @param {DividendUploadHistoryUpsertArgs} args - Arguments to update or create a DividendUploadHistory.
     * @example
     * // Update or create a DividendUploadHistory
     * const dividendUploadHistory = await prisma.dividendUploadHistory.upsert({
     *   create: {
     *     // ... data to create a DividendUploadHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DividendUploadHistory we want to update
     *   }
     * })
     */
    upsert<T extends DividendUploadHistoryUpsertArgs>(args: SelectSubset<T, DividendUploadHistoryUpsertArgs<ExtArgs>>): Prisma__DividendUploadHistoryClient<$Result.GetResult<Prisma.$DividendUploadHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DividendUploadHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DividendUploadHistoryCountArgs} args - Arguments to filter DividendUploadHistories to count.
     * @example
     * // Count the number of DividendUploadHistories
     * const count = await prisma.dividendUploadHistory.count({
     *   where: {
     *     // ... the filter for the DividendUploadHistories we want to count
     *   }
     * })
    **/
    count<T extends DividendUploadHistoryCountArgs>(
      args?: Subset<T, DividendUploadHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DividendUploadHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DividendUploadHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DividendUploadHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DividendUploadHistoryAggregateArgs>(args: Subset<T, DividendUploadHistoryAggregateArgs>): Prisma.PrismaPromise<GetDividendUploadHistoryAggregateType<T>>

    /**
     * Group by DividendUploadHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DividendUploadHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DividendUploadHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DividendUploadHistoryGroupByArgs['orderBy'] }
        : { orderBy?: DividendUploadHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DividendUploadHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDividendUploadHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DividendUploadHistory model
   */
  readonly fields: DividendUploadHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DividendUploadHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DividendUploadHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dividend<T extends DividendUploadHistory$dividendArgs<ExtArgs> = {}>(args?: Subset<T, DividendUploadHistory$dividendArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DividendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DividendUploadHistory model
   */
  interface DividendUploadHistoryFieldRefs {
    readonly id: FieldRef<"DividendUploadHistory", 'Int'>
    readonly dividendUploadType: FieldRef<"DividendUploadHistory", 'DividenUploadType'>
    readonly transactionDateRange: FieldRef<"DividendUploadHistory", 'String'>
    readonly remarks: FieldRef<"DividendUploadHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DividendUploadHistory findUnique
   */
  export type DividendUploadHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendUploadHistory
     */
    select?: DividendUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DividendUploadHistory
     */
    omit?: DividendUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendUploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DividendUploadHistory to fetch.
     */
    where: DividendUploadHistoryWhereUniqueInput
  }

  /**
   * DividendUploadHistory findUniqueOrThrow
   */
  export type DividendUploadHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendUploadHistory
     */
    select?: DividendUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DividendUploadHistory
     */
    omit?: DividendUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendUploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DividendUploadHistory to fetch.
     */
    where: DividendUploadHistoryWhereUniqueInput
  }

  /**
   * DividendUploadHistory findFirst
   */
  export type DividendUploadHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendUploadHistory
     */
    select?: DividendUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DividendUploadHistory
     */
    omit?: DividendUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendUploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DividendUploadHistory to fetch.
     */
    where?: DividendUploadHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DividendUploadHistories to fetch.
     */
    orderBy?: DividendUploadHistoryOrderByWithRelationInput | DividendUploadHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DividendUploadHistories.
     */
    cursor?: DividendUploadHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DividendUploadHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DividendUploadHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DividendUploadHistories.
     */
    distinct?: DividendUploadHistoryScalarFieldEnum | DividendUploadHistoryScalarFieldEnum[]
  }

  /**
   * DividendUploadHistory findFirstOrThrow
   */
  export type DividendUploadHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendUploadHistory
     */
    select?: DividendUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DividendUploadHistory
     */
    omit?: DividendUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendUploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DividendUploadHistory to fetch.
     */
    where?: DividendUploadHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DividendUploadHistories to fetch.
     */
    orderBy?: DividendUploadHistoryOrderByWithRelationInput | DividendUploadHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DividendUploadHistories.
     */
    cursor?: DividendUploadHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DividendUploadHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DividendUploadHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DividendUploadHistories.
     */
    distinct?: DividendUploadHistoryScalarFieldEnum | DividendUploadHistoryScalarFieldEnum[]
  }

  /**
   * DividendUploadHistory findMany
   */
  export type DividendUploadHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendUploadHistory
     */
    select?: DividendUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DividendUploadHistory
     */
    omit?: DividendUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendUploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DividendUploadHistories to fetch.
     */
    where?: DividendUploadHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DividendUploadHistories to fetch.
     */
    orderBy?: DividendUploadHistoryOrderByWithRelationInput | DividendUploadHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DividendUploadHistories.
     */
    cursor?: DividendUploadHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DividendUploadHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DividendUploadHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DividendUploadHistories.
     */
    distinct?: DividendUploadHistoryScalarFieldEnum | DividendUploadHistoryScalarFieldEnum[]
  }

  /**
   * DividendUploadHistory create
   */
  export type DividendUploadHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendUploadHistory
     */
    select?: DividendUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DividendUploadHistory
     */
    omit?: DividendUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendUploadHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a DividendUploadHistory.
     */
    data: XOR<DividendUploadHistoryCreateInput, DividendUploadHistoryUncheckedCreateInput>
  }

  /**
   * DividendUploadHistory createMany
   */
  export type DividendUploadHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DividendUploadHistories.
     */
    data: DividendUploadHistoryCreateManyInput | DividendUploadHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DividendUploadHistory createManyAndReturn
   */
  export type DividendUploadHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendUploadHistory
     */
    select?: DividendUploadHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DividendUploadHistory
     */
    omit?: DividendUploadHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many DividendUploadHistories.
     */
    data: DividendUploadHistoryCreateManyInput | DividendUploadHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DividendUploadHistory update
   */
  export type DividendUploadHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendUploadHistory
     */
    select?: DividendUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DividendUploadHistory
     */
    omit?: DividendUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendUploadHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a DividendUploadHistory.
     */
    data: XOR<DividendUploadHistoryUpdateInput, DividendUploadHistoryUncheckedUpdateInput>
    /**
     * Choose, which DividendUploadHistory to update.
     */
    where: DividendUploadHistoryWhereUniqueInput
  }

  /**
   * DividendUploadHistory updateMany
   */
  export type DividendUploadHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DividendUploadHistories.
     */
    data: XOR<DividendUploadHistoryUpdateManyMutationInput, DividendUploadHistoryUncheckedUpdateManyInput>
    /**
     * Filter which DividendUploadHistories to update
     */
    where?: DividendUploadHistoryWhereInput
    /**
     * Limit how many DividendUploadHistories to update.
     */
    limit?: number
  }

  /**
   * DividendUploadHistory updateManyAndReturn
   */
  export type DividendUploadHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendUploadHistory
     */
    select?: DividendUploadHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DividendUploadHistory
     */
    omit?: DividendUploadHistoryOmit<ExtArgs> | null
    /**
     * The data used to update DividendUploadHistories.
     */
    data: XOR<DividendUploadHistoryUpdateManyMutationInput, DividendUploadHistoryUncheckedUpdateManyInput>
    /**
     * Filter which DividendUploadHistories to update
     */
    where?: DividendUploadHistoryWhereInput
    /**
     * Limit how many DividendUploadHistories to update.
     */
    limit?: number
  }

  /**
   * DividendUploadHistory upsert
   */
  export type DividendUploadHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendUploadHistory
     */
    select?: DividendUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DividendUploadHistory
     */
    omit?: DividendUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendUploadHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the DividendUploadHistory to update in case it exists.
     */
    where: DividendUploadHistoryWhereUniqueInput
    /**
     * In case the DividendUploadHistory found by the `where` argument doesn't exist, create a new DividendUploadHistory with this data.
     */
    create: XOR<DividendUploadHistoryCreateInput, DividendUploadHistoryUncheckedCreateInput>
    /**
     * In case the DividendUploadHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DividendUploadHistoryUpdateInput, DividendUploadHistoryUncheckedUpdateInput>
  }

  /**
   * DividendUploadHistory delete
   */
  export type DividendUploadHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendUploadHistory
     */
    select?: DividendUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DividendUploadHistory
     */
    omit?: DividendUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendUploadHistoryInclude<ExtArgs> | null
    /**
     * Filter which DividendUploadHistory to delete.
     */
    where: DividendUploadHistoryWhereUniqueInput
  }

  /**
   * DividendUploadHistory deleteMany
   */
  export type DividendUploadHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DividendUploadHistories to delete
     */
    where?: DividendUploadHistoryWhereInput
    /**
     * Limit how many DividendUploadHistories to delete.
     */
    limit?: number
  }

  /**
   * DividendUploadHistory.dividend
   */
  export type DividendUploadHistory$dividendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dividend
     */
    select?: DividendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dividend
     */
    omit?: DividendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendInclude<ExtArgs> | null
    where?: DividendWhereInput
    orderBy?: DividendOrderByWithRelationInput | DividendOrderByWithRelationInput[]
    cursor?: DividendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DividendScalarFieldEnum | DividendScalarFieldEnum[]
  }

  /**
   * DividendUploadHistory without action
   */
  export type DividendUploadHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendUploadHistory
     */
    select?: DividendUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DividendUploadHistory
     */
    omit?: DividendUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendUploadHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Dividend
   */

  export type AggregateDividend = {
    _count: DividendCountAggregateOutputType | null
    _avg: DividendAvgAggregateOutputType | null
    _sum: DividendSumAggregateOutputType | null
    _min: DividendMinAggregateOutputType | null
    _max: DividendMaxAggregateOutputType | null
  }

  export type DividendAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    shareholderId: number | null
    dividendUploadHistoryId: number | null
  }

  export type DividendSumAggregateOutputType = {
    id: number | null
    amount: number | null
    shareholderId: number | null
    dividendUploadHistoryId: number | null
  }

  export type DividendMinAggregateOutputType = {
    id: number | null
    amount: number | null
    transactionDate: string | null
    shareholderId: number | null
    sendingBankName: string | null
    sendingBankAccount: string | null
    receivingBankName: string | null
    receivingBankAccount: string | null
    dividendUploadHistoryId: number | null
    remarks: string | null
    entryDate: Date | null
  }

  export type DividendMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    transactionDate: string | null
    shareholderId: number | null
    sendingBankName: string | null
    sendingBankAccount: string | null
    receivingBankName: string | null
    receivingBankAccount: string | null
    dividendUploadHistoryId: number | null
    remarks: string | null
    entryDate: Date | null
  }

  export type DividendCountAggregateOutputType = {
    id: number
    amount: number
    transactionDate: number
    shareholderId: number
    sendingBankName: number
    sendingBankAccount: number
    receivingBankName: number
    receivingBankAccount: number
    dividendUploadHistoryId: number
    remarks: number
    entryDate: number
    _all: number
  }


  export type DividendAvgAggregateInputType = {
    id?: true
    amount?: true
    shareholderId?: true
    dividendUploadHistoryId?: true
  }

  export type DividendSumAggregateInputType = {
    id?: true
    amount?: true
    shareholderId?: true
    dividendUploadHistoryId?: true
  }

  export type DividendMinAggregateInputType = {
    id?: true
    amount?: true
    transactionDate?: true
    shareholderId?: true
    sendingBankName?: true
    sendingBankAccount?: true
    receivingBankName?: true
    receivingBankAccount?: true
    dividendUploadHistoryId?: true
    remarks?: true
    entryDate?: true
  }

  export type DividendMaxAggregateInputType = {
    id?: true
    amount?: true
    transactionDate?: true
    shareholderId?: true
    sendingBankName?: true
    sendingBankAccount?: true
    receivingBankName?: true
    receivingBankAccount?: true
    dividendUploadHistoryId?: true
    remarks?: true
    entryDate?: true
  }

  export type DividendCountAggregateInputType = {
    id?: true
    amount?: true
    transactionDate?: true
    shareholderId?: true
    sendingBankName?: true
    sendingBankAccount?: true
    receivingBankName?: true
    receivingBankAccount?: true
    dividendUploadHistoryId?: true
    remarks?: true
    entryDate?: true
    _all?: true
  }

  export type DividendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dividend to aggregate.
     */
    where?: DividendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dividends to fetch.
     */
    orderBy?: DividendOrderByWithRelationInput | DividendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DividendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dividends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dividends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dividends
    **/
    _count?: true | DividendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DividendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DividendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DividendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DividendMaxAggregateInputType
  }

  export type GetDividendAggregateType<T extends DividendAggregateArgs> = {
        [P in keyof T & keyof AggregateDividend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDividend[P]>
      : GetScalarType<T[P], AggregateDividend[P]>
  }




  export type DividendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DividendWhereInput
    orderBy?: DividendOrderByWithAggregationInput | DividendOrderByWithAggregationInput[]
    by: DividendScalarFieldEnum[] | DividendScalarFieldEnum
    having?: DividendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DividendCountAggregateInputType | true
    _avg?: DividendAvgAggregateInputType
    _sum?: DividendSumAggregateInputType
    _min?: DividendMinAggregateInputType
    _max?: DividendMaxAggregateInputType
  }

  export type DividendGroupByOutputType = {
    id: number
    amount: number
    transactionDate: string
    shareholderId: number
    sendingBankName: string | null
    sendingBankAccount: string | null
    receivingBankName: string | null
    receivingBankAccount: string | null
    dividendUploadHistoryId: number | null
    remarks: string
    entryDate: Date
    _count: DividendCountAggregateOutputType | null
    _avg: DividendAvgAggregateOutputType | null
    _sum: DividendSumAggregateOutputType | null
    _min: DividendMinAggregateOutputType | null
    _max: DividendMaxAggregateOutputType | null
  }

  type GetDividendGroupByPayload<T extends DividendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DividendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DividendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DividendGroupByOutputType[P]>
            : GetScalarType<T[P], DividendGroupByOutputType[P]>
        }
      >
    >


  export type DividendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    transactionDate?: boolean
    shareholderId?: boolean
    sendingBankName?: boolean
    sendingBankAccount?: boolean
    receivingBankName?: boolean
    receivingBankAccount?: boolean
    dividendUploadHistoryId?: boolean
    remarks?: boolean
    entryDate?: boolean
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    dividendUploadHistory?: boolean | Dividend$dividendUploadHistoryArgs<ExtArgs>
  }, ExtArgs["result"]["dividend"]>

  export type DividendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    transactionDate?: boolean
    shareholderId?: boolean
    sendingBankName?: boolean
    sendingBankAccount?: boolean
    receivingBankName?: boolean
    receivingBankAccount?: boolean
    dividendUploadHistoryId?: boolean
    remarks?: boolean
    entryDate?: boolean
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    dividendUploadHistory?: boolean | Dividend$dividendUploadHistoryArgs<ExtArgs>
  }, ExtArgs["result"]["dividend"]>

  export type DividendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    transactionDate?: boolean
    shareholderId?: boolean
    sendingBankName?: boolean
    sendingBankAccount?: boolean
    receivingBankName?: boolean
    receivingBankAccount?: boolean
    dividendUploadHistoryId?: boolean
    remarks?: boolean
    entryDate?: boolean
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    dividendUploadHistory?: boolean | Dividend$dividendUploadHistoryArgs<ExtArgs>
  }, ExtArgs["result"]["dividend"]>

  export type DividendSelectScalar = {
    id?: boolean
    amount?: boolean
    transactionDate?: boolean
    shareholderId?: boolean
    sendingBankName?: boolean
    sendingBankAccount?: boolean
    receivingBankName?: boolean
    receivingBankAccount?: boolean
    dividendUploadHistoryId?: boolean
    remarks?: boolean
    entryDate?: boolean
  }

  export type DividendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "transactionDate" | "shareholderId" | "sendingBankName" | "sendingBankAccount" | "receivingBankName" | "receivingBankAccount" | "dividendUploadHistoryId" | "remarks" | "entryDate", ExtArgs["result"]["dividend"]>
  export type DividendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    dividendUploadHistory?: boolean | Dividend$dividendUploadHistoryArgs<ExtArgs>
  }
  export type DividendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    dividendUploadHistory?: boolean | Dividend$dividendUploadHistoryArgs<ExtArgs>
  }
  export type DividendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    dividendUploadHistory?: boolean | Dividend$dividendUploadHistoryArgs<ExtArgs>
  }

  export type $DividendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dividend"
    objects: {
      shareholder: Prisma.$ShareholderPayload<ExtArgs>
      dividendUploadHistory: Prisma.$DividendUploadHistoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      transactionDate: string
      shareholderId: number
      sendingBankName: string | null
      sendingBankAccount: string | null
      receivingBankName: string | null
      receivingBankAccount: string | null
      dividendUploadHistoryId: number | null
      remarks: string
      entryDate: Date
    }, ExtArgs["result"]["dividend"]>
    composites: {}
  }

  type DividendGetPayload<S extends boolean | null | undefined | DividendDefaultArgs> = $Result.GetResult<Prisma.$DividendPayload, S>

  type DividendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DividendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DividendCountAggregateInputType | true
    }

  export interface DividendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dividend'], meta: { name: 'Dividend' } }
    /**
     * Find zero or one Dividend that matches the filter.
     * @param {DividendFindUniqueArgs} args - Arguments to find a Dividend
     * @example
     * // Get one Dividend
     * const dividend = await prisma.dividend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DividendFindUniqueArgs>(args: SelectSubset<T, DividendFindUniqueArgs<ExtArgs>>): Prisma__DividendClient<$Result.GetResult<Prisma.$DividendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dividend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DividendFindUniqueOrThrowArgs} args - Arguments to find a Dividend
     * @example
     * // Get one Dividend
     * const dividend = await prisma.dividend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DividendFindUniqueOrThrowArgs>(args: SelectSubset<T, DividendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DividendClient<$Result.GetResult<Prisma.$DividendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dividend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DividendFindFirstArgs} args - Arguments to find a Dividend
     * @example
     * // Get one Dividend
     * const dividend = await prisma.dividend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DividendFindFirstArgs>(args?: SelectSubset<T, DividendFindFirstArgs<ExtArgs>>): Prisma__DividendClient<$Result.GetResult<Prisma.$DividendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dividend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DividendFindFirstOrThrowArgs} args - Arguments to find a Dividend
     * @example
     * // Get one Dividend
     * const dividend = await prisma.dividend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DividendFindFirstOrThrowArgs>(args?: SelectSubset<T, DividendFindFirstOrThrowArgs<ExtArgs>>): Prisma__DividendClient<$Result.GetResult<Prisma.$DividendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dividends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DividendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dividends
     * const dividends = await prisma.dividend.findMany()
     * 
     * // Get first 10 Dividends
     * const dividends = await prisma.dividend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dividendWithIdOnly = await prisma.dividend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DividendFindManyArgs>(args?: SelectSubset<T, DividendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DividendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dividend.
     * @param {DividendCreateArgs} args - Arguments to create a Dividend.
     * @example
     * // Create one Dividend
     * const Dividend = await prisma.dividend.create({
     *   data: {
     *     // ... data to create a Dividend
     *   }
     * })
     * 
     */
    create<T extends DividendCreateArgs>(args: SelectSubset<T, DividendCreateArgs<ExtArgs>>): Prisma__DividendClient<$Result.GetResult<Prisma.$DividendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dividends.
     * @param {DividendCreateManyArgs} args - Arguments to create many Dividends.
     * @example
     * // Create many Dividends
     * const dividend = await prisma.dividend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DividendCreateManyArgs>(args?: SelectSubset<T, DividendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dividends and returns the data saved in the database.
     * @param {DividendCreateManyAndReturnArgs} args - Arguments to create many Dividends.
     * @example
     * // Create many Dividends
     * const dividend = await prisma.dividend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dividends and only return the `id`
     * const dividendWithIdOnly = await prisma.dividend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DividendCreateManyAndReturnArgs>(args?: SelectSubset<T, DividendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DividendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dividend.
     * @param {DividendDeleteArgs} args - Arguments to delete one Dividend.
     * @example
     * // Delete one Dividend
     * const Dividend = await prisma.dividend.delete({
     *   where: {
     *     // ... filter to delete one Dividend
     *   }
     * })
     * 
     */
    delete<T extends DividendDeleteArgs>(args: SelectSubset<T, DividendDeleteArgs<ExtArgs>>): Prisma__DividendClient<$Result.GetResult<Prisma.$DividendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dividend.
     * @param {DividendUpdateArgs} args - Arguments to update one Dividend.
     * @example
     * // Update one Dividend
     * const dividend = await prisma.dividend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DividendUpdateArgs>(args: SelectSubset<T, DividendUpdateArgs<ExtArgs>>): Prisma__DividendClient<$Result.GetResult<Prisma.$DividendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dividends.
     * @param {DividendDeleteManyArgs} args - Arguments to filter Dividends to delete.
     * @example
     * // Delete a few Dividends
     * const { count } = await prisma.dividend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DividendDeleteManyArgs>(args?: SelectSubset<T, DividendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dividends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DividendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dividends
     * const dividend = await prisma.dividend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DividendUpdateManyArgs>(args: SelectSubset<T, DividendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dividends and returns the data updated in the database.
     * @param {DividendUpdateManyAndReturnArgs} args - Arguments to update many Dividends.
     * @example
     * // Update many Dividends
     * const dividend = await prisma.dividend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dividends and only return the `id`
     * const dividendWithIdOnly = await prisma.dividend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DividendUpdateManyAndReturnArgs>(args: SelectSubset<T, DividendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DividendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dividend.
     * @param {DividendUpsertArgs} args - Arguments to update or create a Dividend.
     * @example
     * // Update or create a Dividend
     * const dividend = await prisma.dividend.upsert({
     *   create: {
     *     // ... data to create a Dividend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dividend we want to update
     *   }
     * })
     */
    upsert<T extends DividendUpsertArgs>(args: SelectSubset<T, DividendUpsertArgs<ExtArgs>>): Prisma__DividendClient<$Result.GetResult<Prisma.$DividendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dividends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DividendCountArgs} args - Arguments to filter Dividends to count.
     * @example
     * // Count the number of Dividends
     * const count = await prisma.dividend.count({
     *   where: {
     *     // ... the filter for the Dividends we want to count
     *   }
     * })
    **/
    count<T extends DividendCountArgs>(
      args?: Subset<T, DividendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DividendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dividend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DividendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DividendAggregateArgs>(args: Subset<T, DividendAggregateArgs>): Prisma.PrismaPromise<GetDividendAggregateType<T>>

    /**
     * Group by Dividend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DividendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DividendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DividendGroupByArgs['orderBy'] }
        : { orderBy?: DividendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DividendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDividendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dividend model
   */
  readonly fields: DividendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dividend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DividendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shareholder<T extends ShareholderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShareholderDefaultArgs<ExtArgs>>): Prisma__ShareholderClient<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dividendUploadHistory<T extends Dividend$dividendUploadHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Dividend$dividendUploadHistoryArgs<ExtArgs>>): Prisma__DividendUploadHistoryClient<$Result.GetResult<Prisma.$DividendUploadHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dividend model
   */
  interface DividendFieldRefs {
    readonly id: FieldRef<"Dividend", 'Int'>
    readonly amount: FieldRef<"Dividend", 'Float'>
    readonly transactionDate: FieldRef<"Dividend", 'String'>
    readonly shareholderId: FieldRef<"Dividend", 'Int'>
    readonly sendingBankName: FieldRef<"Dividend", 'String'>
    readonly sendingBankAccount: FieldRef<"Dividend", 'String'>
    readonly receivingBankName: FieldRef<"Dividend", 'String'>
    readonly receivingBankAccount: FieldRef<"Dividend", 'String'>
    readonly dividendUploadHistoryId: FieldRef<"Dividend", 'Int'>
    readonly remarks: FieldRef<"Dividend", 'String'>
    readonly entryDate: FieldRef<"Dividend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dividend findUnique
   */
  export type DividendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dividend
     */
    select?: DividendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dividend
     */
    omit?: DividendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendInclude<ExtArgs> | null
    /**
     * Filter, which Dividend to fetch.
     */
    where: DividendWhereUniqueInput
  }

  /**
   * Dividend findUniqueOrThrow
   */
  export type DividendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dividend
     */
    select?: DividendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dividend
     */
    omit?: DividendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendInclude<ExtArgs> | null
    /**
     * Filter, which Dividend to fetch.
     */
    where: DividendWhereUniqueInput
  }

  /**
   * Dividend findFirst
   */
  export type DividendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dividend
     */
    select?: DividendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dividend
     */
    omit?: DividendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendInclude<ExtArgs> | null
    /**
     * Filter, which Dividend to fetch.
     */
    where?: DividendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dividends to fetch.
     */
    orderBy?: DividendOrderByWithRelationInput | DividendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dividends.
     */
    cursor?: DividendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dividends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dividends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dividends.
     */
    distinct?: DividendScalarFieldEnum | DividendScalarFieldEnum[]
  }

  /**
   * Dividend findFirstOrThrow
   */
  export type DividendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dividend
     */
    select?: DividendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dividend
     */
    omit?: DividendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendInclude<ExtArgs> | null
    /**
     * Filter, which Dividend to fetch.
     */
    where?: DividendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dividends to fetch.
     */
    orderBy?: DividendOrderByWithRelationInput | DividendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dividends.
     */
    cursor?: DividendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dividends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dividends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dividends.
     */
    distinct?: DividendScalarFieldEnum | DividendScalarFieldEnum[]
  }

  /**
   * Dividend findMany
   */
  export type DividendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dividend
     */
    select?: DividendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dividend
     */
    omit?: DividendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendInclude<ExtArgs> | null
    /**
     * Filter, which Dividends to fetch.
     */
    where?: DividendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dividends to fetch.
     */
    orderBy?: DividendOrderByWithRelationInput | DividendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dividends.
     */
    cursor?: DividendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dividends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dividends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dividends.
     */
    distinct?: DividendScalarFieldEnum | DividendScalarFieldEnum[]
  }

  /**
   * Dividend create
   */
  export type DividendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dividend
     */
    select?: DividendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dividend
     */
    omit?: DividendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendInclude<ExtArgs> | null
    /**
     * The data needed to create a Dividend.
     */
    data: XOR<DividendCreateInput, DividendUncheckedCreateInput>
  }

  /**
   * Dividend createMany
   */
  export type DividendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dividends.
     */
    data: DividendCreateManyInput | DividendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dividend createManyAndReturn
   */
  export type DividendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dividend
     */
    select?: DividendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dividend
     */
    omit?: DividendOmit<ExtArgs> | null
    /**
     * The data used to create many Dividends.
     */
    data: DividendCreateManyInput | DividendCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dividend update
   */
  export type DividendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dividend
     */
    select?: DividendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dividend
     */
    omit?: DividendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendInclude<ExtArgs> | null
    /**
     * The data needed to update a Dividend.
     */
    data: XOR<DividendUpdateInput, DividendUncheckedUpdateInput>
    /**
     * Choose, which Dividend to update.
     */
    where: DividendWhereUniqueInput
  }

  /**
   * Dividend updateMany
   */
  export type DividendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dividends.
     */
    data: XOR<DividendUpdateManyMutationInput, DividendUncheckedUpdateManyInput>
    /**
     * Filter which Dividends to update
     */
    where?: DividendWhereInput
    /**
     * Limit how many Dividends to update.
     */
    limit?: number
  }

  /**
   * Dividend updateManyAndReturn
   */
  export type DividendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dividend
     */
    select?: DividendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dividend
     */
    omit?: DividendOmit<ExtArgs> | null
    /**
     * The data used to update Dividends.
     */
    data: XOR<DividendUpdateManyMutationInput, DividendUncheckedUpdateManyInput>
    /**
     * Filter which Dividends to update
     */
    where?: DividendWhereInput
    /**
     * Limit how many Dividends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dividend upsert
   */
  export type DividendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dividend
     */
    select?: DividendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dividend
     */
    omit?: DividendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendInclude<ExtArgs> | null
    /**
     * The filter to search for the Dividend to update in case it exists.
     */
    where: DividendWhereUniqueInput
    /**
     * In case the Dividend found by the `where` argument doesn't exist, create a new Dividend with this data.
     */
    create: XOR<DividendCreateInput, DividendUncheckedCreateInput>
    /**
     * In case the Dividend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DividendUpdateInput, DividendUncheckedUpdateInput>
  }

  /**
   * Dividend delete
   */
  export type DividendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dividend
     */
    select?: DividendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dividend
     */
    omit?: DividendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendInclude<ExtArgs> | null
    /**
     * Filter which Dividend to delete.
     */
    where: DividendWhereUniqueInput
  }

  /**
   * Dividend deleteMany
   */
  export type DividendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dividends to delete
     */
    where?: DividendWhereInput
    /**
     * Limit how many Dividends to delete.
     */
    limit?: number
  }

  /**
   * Dividend.dividendUploadHistory
   */
  export type Dividend$dividendUploadHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendUploadHistory
     */
    select?: DividendUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DividendUploadHistory
     */
    omit?: DividendUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendUploadHistoryInclude<ExtArgs> | null
    where?: DividendUploadHistoryWhereInput
  }

  /**
   * Dividend without action
   */
  export type DividendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dividend
     */
    select?: DividendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dividend
     */
    omit?: DividendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendInclude<ExtArgs> | null
  }


  /**
   * Model ShareHistory
   */

  export type AggregateShareHistory = {
    _count: ShareHistoryCountAggregateOutputType | null
    _avg: ShareHistoryAvgAggregateOutputType | null
    _sum: ShareHistorySumAggregateOutputType | null
    _min: ShareHistoryMinAggregateOutputType | null
    _max: ShareHistoryMaxAggregateOutputType | null
  }

  export type ShareHistoryAvgAggregateOutputType = {
    id: number | null
    unitsOfShareChanged: number | null
    balanceUnitsOfShare: number | null
    shareholderId: number | null
    ratePerShare: number | null
    shareTransferHistoryId: number | null
    shareUploadHistoryId: number | null
  }

  export type ShareHistorySumAggregateOutputType = {
    id: number | null
    unitsOfShareChanged: number | null
    balanceUnitsOfShare: number | null
    shareholderId: number | null
    ratePerShare: number | null
    shareTransferHistoryId: number | null
    shareUploadHistoryId: number | null
  }

  export type ShareHistoryMinAggregateOutputType = {
    id: number | null
    ownershipType: $Enums.OwnershipType | null
    unitsOfShareChanged: number | null
    balanceUnitsOfShare: number | null
    transactionDate: string | null
    shareholderId: number | null
    ratePerShare: number | null
    shareTransferHistoryId: number | null
    shareUploadHistoryId: number | null
    remarks: string | null
    entryDateTime: Date | null
  }

  export type ShareHistoryMaxAggregateOutputType = {
    id: number | null
    ownershipType: $Enums.OwnershipType | null
    unitsOfShareChanged: number | null
    balanceUnitsOfShare: number | null
    transactionDate: string | null
    shareholderId: number | null
    ratePerShare: number | null
    shareTransferHistoryId: number | null
    shareUploadHistoryId: number | null
    remarks: string | null
    entryDateTime: Date | null
  }

  export type ShareHistoryCountAggregateOutputType = {
    id: number
    ownershipType: number
    unitsOfShareChanged: number
    balanceUnitsOfShare: number
    transactionDate: number
    shareholderId: number
    ratePerShare: number
    shareTransferHistoryId: number
    shareUploadHistoryId: number
    remarks: number
    entryDateTime: number
    _all: number
  }


  export type ShareHistoryAvgAggregateInputType = {
    id?: true
    unitsOfShareChanged?: true
    balanceUnitsOfShare?: true
    shareholderId?: true
    ratePerShare?: true
    shareTransferHistoryId?: true
    shareUploadHistoryId?: true
  }

  export type ShareHistorySumAggregateInputType = {
    id?: true
    unitsOfShareChanged?: true
    balanceUnitsOfShare?: true
    shareholderId?: true
    ratePerShare?: true
    shareTransferHistoryId?: true
    shareUploadHistoryId?: true
  }

  export type ShareHistoryMinAggregateInputType = {
    id?: true
    ownershipType?: true
    unitsOfShareChanged?: true
    balanceUnitsOfShare?: true
    transactionDate?: true
    shareholderId?: true
    ratePerShare?: true
    shareTransferHistoryId?: true
    shareUploadHistoryId?: true
    remarks?: true
    entryDateTime?: true
  }

  export type ShareHistoryMaxAggregateInputType = {
    id?: true
    ownershipType?: true
    unitsOfShareChanged?: true
    balanceUnitsOfShare?: true
    transactionDate?: true
    shareholderId?: true
    ratePerShare?: true
    shareTransferHistoryId?: true
    shareUploadHistoryId?: true
    remarks?: true
    entryDateTime?: true
  }

  export type ShareHistoryCountAggregateInputType = {
    id?: true
    ownershipType?: true
    unitsOfShareChanged?: true
    balanceUnitsOfShare?: true
    transactionDate?: true
    shareholderId?: true
    ratePerShare?: true
    shareTransferHistoryId?: true
    shareUploadHistoryId?: true
    remarks?: true
    entryDateTime?: true
    _all?: true
  }

  export type ShareHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareHistory to aggregate.
     */
    where?: ShareHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareHistories to fetch.
     */
    orderBy?: ShareHistoryOrderByWithRelationInput | ShareHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShareHistories
    **/
    _count?: true | ShareHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShareHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShareHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareHistoryMaxAggregateInputType
  }

  export type GetShareHistoryAggregateType<T extends ShareHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateShareHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareHistory[P]>
      : GetScalarType<T[P], AggregateShareHistory[P]>
  }




  export type ShareHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareHistoryWhereInput
    orderBy?: ShareHistoryOrderByWithAggregationInput | ShareHistoryOrderByWithAggregationInput[]
    by: ShareHistoryScalarFieldEnum[] | ShareHistoryScalarFieldEnum
    having?: ShareHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareHistoryCountAggregateInputType | true
    _avg?: ShareHistoryAvgAggregateInputType
    _sum?: ShareHistorySumAggregateInputType
    _min?: ShareHistoryMinAggregateInputType
    _max?: ShareHistoryMaxAggregateInputType
  }

  export type ShareHistoryGroupByOutputType = {
    id: number
    ownershipType: $Enums.OwnershipType
    unitsOfShareChanged: number
    balanceUnitsOfShare: number
    transactionDate: string
    shareholderId: number
    ratePerShare: number
    shareTransferHistoryId: number | null
    shareUploadHistoryId: number | null
    remarks: string | null
    entryDateTime: Date
    _count: ShareHistoryCountAggregateOutputType | null
    _avg: ShareHistoryAvgAggregateOutputType | null
    _sum: ShareHistorySumAggregateOutputType | null
    _min: ShareHistoryMinAggregateOutputType | null
    _max: ShareHistoryMaxAggregateOutputType | null
  }

  type GetShareHistoryGroupByPayload<T extends ShareHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ShareHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ShareHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownershipType?: boolean
    unitsOfShareChanged?: boolean
    balanceUnitsOfShare?: boolean
    transactionDate?: boolean
    shareholderId?: boolean
    ratePerShare?: boolean
    shareTransferHistoryId?: boolean
    shareUploadHistoryId?: boolean
    remarks?: boolean
    entryDateTime?: boolean
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    shareTransferHistory?: boolean | ShareHistory$shareTransferHistoryArgs<ExtArgs>
    shareUploadHistory?: boolean | ShareHistory$shareUploadHistoryArgs<ExtArgs>
  }, ExtArgs["result"]["shareHistory"]>

  export type ShareHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownershipType?: boolean
    unitsOfShareChanged?: boolean
    balanceUnitsOfShare?: boolean
    transactionDate?: boolean
    shareholderId?: boolean
    ratePerShare?: boolean
    shareTransferHistoryId?: boolean
    shareUploadHistoryId?: boolean
    remarks?: boolean
    entryDateTime?: boolean
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    shareTransferHistory?: boolean | ShareHistory$shareTransferHistoryArgs<ExtArgs>
    shareUploadHistory?: boolean | ShareHistory$shareUploadHistoryArgs<ExtArgs>
  }, ExtArgs["result"]["shareHistory"]>

  export type ShareHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownershipType?: boolean
    unitsOfShareChanged?: boolean
    balanceUnitsOfShare?: boolean
    transactionDate?: boolean
    shareholderId?: boolean
    ratePerShare?: boolean
    shareTransferHistoryId?: boolean
    shareUploadHistoryId?: boolean
    remarks?: boolean
    entryDateTime?: boolean
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    shareTransferHistory?: boolean | ShareHistory$shareTransferHistoryArgs<ExtArgs>
    shareUploadHistory?: boolean | ShareHistory$shareUploadHistoryArgs<ExtArgs>
  }, ExtArgs["result"]["shareHistory"]>

  export type ShareHistorySelectScalar = {
    id?: boolean
    ownershipType?: boolean
    unitsOfShareChanged?: boolean
    balanceUnitsOfShare?: boolean
    transactionDate?: boolean
    shareholderId?: boolean
    ratePerShare?: boolean
    shareTransferHistoryId?: boolean
    shareUploadHistoryId?: boolean
    remarks?: boolean
    entryDateTime?: boolean
  }

  export type ShareHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownershipType" | "unitsOfShareChanged" | "balanceUnitsOfShare" | "transactionDate" | "shareholderId" | "ratePerShare" | "shareTransferHistoryId" | "shareUploadHistoryId" | "remarks" | "entryDateTime", ExtArgs["result"]["shareHistory"]>
  export type ShareHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    shareTransferHistory?: boolean | ShareHistory$shareTransferHistoryArgs<ExtArgs>
    shareUploadHistory?: boolean | ShareHistory$shareUploadHistoryArgs<ExtArgs>
  }
  export type ShareHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    shareTransferHistory?: boolean | ShareHistory$shareTransferHistoryArgs<ExtArgs>
    shareUploadHistory?: boolean | ShareHistory$shareUploadHistoryArgs<ExtArgs>
  }
  export type ShareHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    shareTransferHistory?: boolean | ShareHistory$shareTransferHistoryArgs<ExtArgs>
    shareUploadHistory?: boolean | ShareHistory$shareUploadHistoryArgs<ExtArgs>
  }

  export type $ShareHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShareHistory"
    objects: {
      shareholder: Prisma.$ShareholderPayload<ExtArgs>
      shareTransferHistory: Prisma.$ShareTransferHistoryPayload<ExtArgs> | null
      shareUploadHistory: Prisma.$ShareUploadHistoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ownershipType: $Enums.OwnershipType
      unitsOfShareChanged: number
      balanceUnitsOfShare: number
      transactionDate: string
      shareholderId: number
      ratePerShare: number
      shareTransferHistoryId: number | null
      shareUploadHistoryId: number | null
      remarks: string | null
      entryDateTime: Date
    }, ExtArgs["result"]["shareHistory"]>
    composites: {}
  }

  type ShareHistoryGetPayload<S extends boolean | null | undefined | ShareHistoryDefaultArgs> = $Result.GetResult<Prisma.$ShareHistoryPayload, S>

  type ShareHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareHistoryCountAggregateInputType | true
    }

  export interface ShareHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShareHistory'], meta: { name: 'ShareHistory' } }
    /**
     * Find zero or one ShareHistory that matches the filter.
     * @param {ShareHistoryFindUniqueArgs} args - Arguments to find a ShareHistory
     * @example
     * // Get one ShareHistory
     * const shareHistory = await prisma.shareHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareHistoryFindUniqueArgs>(args: SelectSubset<T, ShareHistoryFindUniqueArgs<ExtArgs>>): Prisma__ShareHistoryClient<$Result.GetResult<Prisma.$ShareHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShareHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareHistoryFindUniqueOrThrowArgs} args - Arguments to find a ShareHistory
     * @example
     * // Get one ShareHistory
     * const shareHistory = await prisma.shareHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareHistoryClient<$Result.GetResult<Prisma.$ShareHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareHistoryFindFirstArgs} args - Arguments to find a ShareHistory
     * @example
     * // Get one ShareHistory
     * const shareHistory = await prisma.shareHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareHistoryFindFirstArgs>(args?: SelectSubset<T, ShareHistoryFindFirstArgs<ExtArgs>>): Prisma__ShareHistoryClient<$Result.GetResult<Prisma.$ShareHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareHistoryFindFirstOrThrowArgs} args - Arguments to find a ShareHistory
     * @example
     * // Get one ShareHistory
     * const shareHistory = await prisma.shareHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareHistoryClient<$Result.GetResult<Prisma.$ShareHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShareHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShareHistories
     * const shareHistories = await prisma.shareHistory.findMany()
     * 
     * // Get first 10 ShareHistories
     * const shareHistories = await prisma.shareHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareHistoryWithIdOnly = await prisma.shareHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareHistoryFindManyArgs>(args?: SelectSubset<T, ShareHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShareHistory.
     * @param {ShareHistoryCreateArgs} args - Arguments to create a ShareHistory.
     * @example
     * // Create one ShareHistory
     * const ShareHistory = await prisma.shareHistory.create({
     *   data: {
     *     // ... data to create a ShareHistory
     *   }
     * })
     * 
     */
    create<T extends ShareHistoryCreateArgs>(args: SelectSubset<T, ShareHistoryCreateArgs<ExtArgs>>): Prisma__ShareHistoryClient<$Result.GetResult<Prisma.$ShareHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShareHistories.
     * @param {ShareHistoryCreateManyArgs} args - Arguments to create many ShareHistories.
     * @example
     * // Create many ShareHistories
     * const shareHistory = await prisma.shareHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareHistoryCreateManyArgs>(args?: SelectSubset<T, ShareHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShareHistories and returns the data saved in the database.
     * @param {ShareHistoryCreateManyAndReturnArgs} args - Arguments to create many ShareHistories.
     * @example
     * // Create many ShareHistories
     * const shareHistory = await prisma.shareHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShareHistories and only return the `id`
     * const shareHistoryWithIdOnly = await prisma.shareHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShareHistory.
     * @param {ShareHistoryDeleteArgs} args - Arguments to delete one ShareHistory.
     * @example
     * // Delete one ShareHistory
     * const ShareHistory = await prisma.shareHistory.delete({
     *   where: {
     *     // ... filter to delete one ShareHistory
     *   }
     * })
     * 
     */
    delete<T extends ShareHistoryDeleteArgs>(args: SelectSubset<T, ShareHistoryDeleteArgs<ExtArgs>>): Prisma__ShareHistoryClient<$Result.GetResult<Prisma.$ShareHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShareHistory.
     * @param {ShareHistoryUpdateArgs} args - Arguments to update one ShareHistory.
     * @example
     * // Update one ShareHistory
     * const shareHistory = await prisma.shareHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareHistoryUpdateArgs>(args: SelectSubset<T, ShareHistoryUpdateArgs<ExtArgs>>): Prisma__ShareHistoryClient<$Result.GetResult<Prisma.$ShareHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShareHistories.
     * @param {ShareHistoryDeleteManyArgs} args - Arguments to filter ShareHistories to delete.
     * @example
     * // Delete a few ShareHistories
     * const { count } = await prisma.shareHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareHistoryDeleteManyArgs>(args?: SelectSubset<T, ShareHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShareHistories
     * const shareHistory = await prisma.shareHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareHistoryUpdateManyArgs>(args: SelectSubset<T, ShareHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareHistories and returns the data updated in the database.
     * @param {ShareHistoryUpdateManyAndReturnArgs} args - Arguments to update many ShareHistories.
     * @example
     * // Update many ShareHistories
     * const shareHistory = await prisma.shareHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShareHistories and only return the `id`
     * const shareHistoryWithIdOnly = await prisma.shareHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShareHistory.
     * @param {ShareHistoryUpsertArgs} args - Arguments to update or create a ShareHistory.
     * @example
     * // Update or create a ShareHistory
     * const shareHistory = await prisma.shareHistory.upsert({
     *   create: {
     *     // ... data to create a ShareHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShareHistory we want to update
     *   }
     * })
     */
    upsert<T extends ShareHistoryUpsertArgs>(args: SelectSubset<T, ShareHistoryUpsertArgs<ExtArgs>>): Prisma__ShareHistoryClient<$Result.GetResult<Prisma.$ShareHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShareHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareHistoryCountArgs} args - Arguments to filter ShareHistories to count.
     * @example
     * // Count the number of ShareHistories
     * const count = await prisma.shareHistory.count({
     *   where: {
     *     // ... the filter for the ShareHistories we want to count
     *   }
     * })
    **/
    count<T extends ShareHistoryCountArgs>(
      args?: Subset<T, ShareHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShareHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShareHistoryAggregateArgs>(args: Subset<T, ShareHistoryAggregateArgs>): Prisma.PrismaPromise<GetShareHistoryAggregateType<T>>

    /**
     * Group by ShareHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShareHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ShareHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShareHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShareHistory model
   */
  readonly fields: ShareHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShareHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shareholder<T extends ShareholderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShareholderDefaultArgs<ExtArgs>>): Prisma__ShareholderClient<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shareTransferHistory<T extends ShareHistory$shareTransferHistoryArgs<ExtArgs> = {}>(args?: Subset<T, ShareHistory$shareTransferHistoryArgs<ExtArgs>>): Prisma__ShareTransferHistoryClient<$Result.GetResult<Prisma.$ShareTransferHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shareUploadHistory<T extends ShareHistory$shareUploadHistoryArgs<ExtArgs> = {}>(args?: Subset<T, ShareHistory$shareUploadHistoryArgs<ExtArgs>>): Prisma__ShareUploadHistoryClient<$Result.GetResult<Prisma.$ShareUploadHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShareHistory model
   */
  interface ShareHistoryFieldRefs {
    readonly id: FieldRef<"ShareHistory", 'Int'>
    readonly ownershipType: FieldRef<"ShareHistory", 'OwnershipType'>
    readonly unitsOfShareChanged: FieldRef<"ShareHistory", 'Float'>
    readonly balanceUnitsOfShare: FieldRef<"ShareHistory", 'Float'>
    readonly transactionDate: FieldRef<"ShareHistory", 'String'>
    readonly shareholderId: FieldRef<"ShareHistory", 'Int'>
    readonly ratePerShare: FieldRef<"ShareHistory", 'Float'>
    readonly shareTransferHistoryId: FieldRef<"ShareHistory", 'Int'>
    readonly shareUploadHistoryId: FieldRef<"ShareHistory", 'Int'>
    readonly remarks: FieldRef<"ShareHistory", 'String'>
    readonly entryDateTime: FieldRef<"ShareHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShareHistory findUnique
   */
  export type ShareHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareHistory to fetch.
     */
    where: ShareHistoryWhereUniqueInput
  }

  /**
   * ShareHistory findUniqueOrThrow
   */
  export type ShareHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareHistory to fetch.
     */
    where: ShareHistoryWhereUniqueInput
  }

  /**
   * ShareHistory findFirst
   */
  export type ShareHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareHistory to fetch.
     */
    where?: ShareHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareHistories to fetch.
     */
    orderBy?: ShareHistoryOrderByWithRelationInput | ShareHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareHistories.
     */
    cursor?: ShareHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareHistories.
     */
    distinct?: ShareHistoryScalarFieldEnum | ShareHistoryScalarFieldEnum[]
  }

  /**
   * ShareHistory findFirstOrThrow
   */
  export type ShareHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareHistory to fetch.
     */
    where?: ShareHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareHistories to fetch.
     */
    orderBy?: ShareHistoryOrderByWithRelationInput | ShareHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareHistories.
     */
    cursor?: ShareHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareHistories.
     */
    distinct?: ShareHistoryScalarFieldEnum | ShareHistoryScalarFieldEnum[]
  }

  /**
   * ShareHistory findMany
   */
  export type ShareHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareHistories to fetch.
     */
    where?: ShareHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareHistories to fetch.
     */
    orderBy?: ShareHistoryOrderByWithRelationInput | ShareHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShareHistories.
     */
    cursor?: ShareHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareHistories.
     */
    distinct?: ShareHistoryScalarFieldEnum | ShareHistoryScalarFieldEnum[]
  }

  /**
   * ShareHistory create
   */
  export type ShareHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ShareHistory.
     */
    data: XOR<ShareHistoryCreateInput, ShareHistoryUncheckedCreateInput>
  }

  /**
   * ShareHistory createMany
   */
  export type ShareHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShareHistories.
     */
    data: ShareHistoryCreateManyInput | ShareHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShareHistory createManyAndReturn
   */
  export type ShareHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ShareHistories.
     */
    data: ShareHistoryCreateManyInput | ShareHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareHistory update
   */
  export type ShareHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ShareHistory.
     */
    data: XOR<ShareHistoryUpdateInput, ShareHistoryUncheckedUpdateInput>
    /**
     * Choose, which ShareHistory to update.
     */
    where: ShareHistoryWhereUniqueInput
  }

  /**
   * ShareHistory updateMany
   */
  export type ShareHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShareHistories.
     */
    data: XOR<ShareHistoryUpdateManyMutationInput, ShareHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ShareHistories to update
     */
    where?: ShareHistoryWhereInput
    /**
     * Limit how many ShareHistories to update.
     */
    limit?: number
  }

  /**
   * ShareHistory updateManyAndReturn
   */
  export type ShareHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ShareHistories.
     */
    data: XOR<ShareHistoryUpdateManyMutationInput, ShareHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ShareHistories to update
     */
    where?: ShareHistoryWhereInput
    /**
     * Limit how many ShareHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareHistory upsert
   */
  export type ShareHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ShareHistory to update in case it exists.
     */
    where: ShareHistoryWhereUniqueInput
    /**
     * In case the ShareHistory found by the `where` argument doesn't exist, create a new ShareHistory with this data.
     */
    create: XOR<ShareHistoryCreateInput, ShareHistoryUncheckedCreateInput>
    /**
     * In case the ShareHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareHistoryUpdateInput, ShareHistoryUncheckedUpdateInput>
  }

  /**
   * ShareHistory delete
   */
  export type ShareHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryInclude<ExtArgs> | null
    /**
     * Filter which ShareHistory to delete.
     */
    where: ShareHistoryWhereUniqueInput
  }

  /**
   * ShareHistory deleteMany
   */
  export type ShareHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareHistories to delete
     */
    where?: ShareHistoryWhereInput
    /**
     * Limit how many ShareHistories to delete.
     */
    limit?: number
  }

  /**
   * ShareHistory.shareTransferHistory
   */
  export type ShareHistory$shareTransferHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryInclude<ExtArgs> | null
    where?: ShareTransferHistoryWhereInput
  }

  /**
   * ShareHistory.shareUploadHistory
   */
  export type ShareHistory$shareUploadHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareUploadHistory
     */
    select?: ShareUploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareUploadHistory
     */
    omit?: ShareUploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareUploadHistoryInclude<ExtArgs> | null
    where?: ShareUploadHistoryWhereInput
  }

  /**
   * ShareHistory without action
   */
  export type ShareHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Share
   */

  export type AggregateShare = {
    _count: ShareCountAggregateOutputType | null
    _avg: ShareAvgAggregateOutputType | null
    _sum: ShareSumAggregateOutputType | null
    _min: ShareMinAggregateOutputType | null
    _max: ShareMaxAggregateOutputType | null
  }

  export type ShareAvgAggregateOutputType = {
    id: number | null
    unitsOfShare: number | null
    cost: number | null
    shareholderId: number | null
  }

  export type ShareSumAggregateOutputType = {
    id: number | null
    unitsOfShare: number | null
    cost: number | null
    shareholderId: number | null
  }

  export type ShareMinAggregateOutputType = {
    id: number | null
    unitsOfShare: number | null
    ownershipType: $Enums.OwnershipType | null
    ownershipDate: string | null
    cost: number | null
    shareholderId: number | null
    remarks: string | null
  }

  export type ShareMaxAggregateOutputType = {
    id: number | null
    unitsOfShare: number | null
    ownershipType: $Enums.OwnershipType | null
    ownershipDate: string | null
    cost: number | null
    shareholderId: number | null
    remarks: string | null
  }

  export type ShareCountAggregateOutputType = {
    id: number
    unitsOfShare: number
    ownershipType: number
    ownershipDate: number
    cost: number
    shareholderId: number
    remarks: number
    _all: number
  }


  export type ShareAvgAggregateInputType = {
    id?: true
    unitsOfShare?: true
    cost?: true
    shareholderId?: true
  }

  export type ShareSumAggregateInputType = {
    id?: true
    unitsOfShare?: true
    cost?: true
    shareholderId?: true
  }

  export type ShareMinAggregateInputType = {
    id?: true
    unitsOfShare?: true
    ownershipType?: true
    ownershipDate?: true
    cost?: true
    shareholderId?: true
    remarks?: true
  }

  export type ShareMaxAggregateInputType = {
    id?: true
    unitsOfShare?: true
    ownershipType?: true
    ownershipDate?: true
    cost?: true
    shareholderId?: true
    remarks?: true
  }

  export type ShareCountAggregateInputType = {
    id?: true
    unitsOfShare?: true
    ownershipType?: true
    ownershipDate?: true
    cost?: true
    shareholderId?: true
    remarks?: true
    _all?: true
  }

  export type ShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Share to aggregate.
     */
    where?: ShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shares
    **/
    _count?: true | ShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareMaxAggregateInputType
  }

  export type GetShareAggregateType<T extends ShareAggregateArgs> = {
        [P in keyof T & keyof AggregateShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShare[P]>
      : GetScalarType<T[P], AggregateShare[P]>
  }




  export type ShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareWhereInput
    orderBy?: ShareOrderByWithAggregationInput | ShareOrderByWithAggregationInput[]
    by: ShareScalarFieldEnum[] | ShareScalarFieldEnum
    having?: ShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareCountAggregateInputType | true
    _avg?: ShareAvgAggregateInputType
    _sum?: ShareSumAggregateInputType
    _min?: ShareMinAggregateInputType
    _max?: ShareMaxAggregateInputType
  }

  export type ShareGroupByOutputType = {
    id: number
    unitsOfShare: number
    ownershipType: $Enums.OwnershipType
    ownershipDate: string
    cost: number
    shareholderId: number
    remarks: string | null
    _count: ShareCountAggregateOutputType | null
    _avg: ShareAvgAggregateOutputType | null
    _sum: ShareSumAggregateOutputType | null
    _min: ShareMinAggregateOutputType | null
    _max: ShareMaxAggregateOutputType | null
  }

  type GetShareGroupByPayload<T extends ShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareGroupByOutputType[P]>
            : GetScalarType<T[P], ShareGroupByOutputType[P]>
        }
      >
    >


  export type ShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitsOfShare?: boolean
    ownershipType?: boolean
    ownershipDate?: boolean
    cost?: boolean
    shareholderId?: boolean
    remarks?: boolean
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["share"]>

  export type ShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitsOfShare?: boolean
    ownershipType?: boolean
    ownershipDate?: boolean
    cost?: boolean
    shareholderId?: boolean
    remarks?: boolean
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["share"]>

  export type ShareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitsOfShare?: boolean
    ownershipType?: boolean
    ownershipDate?: boolean
    cost?: boolean
    shareholderId?: boolean
    remarks?: boolean
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["share"]>

  export type ShareSelectScalar = {
    id?: boolean
    unitsOfShare?: boolean
    ownershipType?: boolean
    ownershipDate?: boolean
    cost?: boolean
    shareholderId?: boolean
    remarks?: boolean
  }

  export type ShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unitsOfShare" | "ownershipType" | "ownershipDate" | "cost" | "shareholderId" | "remarks", ExtArgs["result"]["share"]>
  export type ShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }
  export type ShareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }
  export type ShareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }

  export type $SharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Share"
    objects: {
      shareholder: Prisma.$ShareholderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      unitsOfShare: number
      ownershipType: $Enums.OwnershipType
      ownershipDate: string
      cost: number
      shareholderId: number
      remarks: string | null
    }, ExtArgs["result"]["share"]>
    composites: {}
  }

  type ShareGetPayload<S extends boolean | null | undefined | ShareDefaultArgs> = $Result.GetResult<Prisma.$SharePayload, S>

  type ShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareCountAggregateInputType | true
    }

  export interface ShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Share'], meta: { name: 'Share' } }
    /**
     * Find zero or one Share that matches the filter.
     * @param {ShareFindUniqueArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareFindUniqueArgs>(args: SelectSubset<T, ShareFindUniqueArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Share that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareFindUniqueOrThrowArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Share that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFindFirstArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareFindFirstArgs>(args?: SelectSubset<T, ShareFindFirstArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Share that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFindFirstOrThrowArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shares
     * const shares = await prisma.share.findMany()
     * 
     * // Get first 10 Shares
     * const shares = await prisma.share.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareWithIdOnly = await prisma.share.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareFindManyArgs>(args?: SelectSubset<T, ShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Share.
     * @param {ShareCreateArgs} args - Arguments to create a Share.
     * @example
     * // Create one Share
     * const Share = await prisma.share.create({
     *   data: {
     *     // ... data to create a Share
     *   }
     * })
     * 
     */
    create<T extends ShareCreateArgs>(args: SelectSubset<T, ShareCreateArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shares.
     * @param {ShareCreateManyArgs} args - Arguments to create many Shares.
     * @example
     * // Create many Shares
     * const share = await prisma.share.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareCreateManyArgs>(args?: SelectSubset<T, ShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shares and returns the data saved in the database.
     * @param {ShareCreateManyAndReturnArgs} args - Arguments to create many Shares.
     * @example
     * // Create many Shares
     * const share = await prisma.share.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shares and only return the `id`
     * const shareWithIdOnly = await prisma.share.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Share.
     * @param {ShareDeleteArgs} args - Arguments to delete one Share.
     * @example
     * // Delete one Share
     * const Share = await prisma.share.delete({
     *   where: {
     *     // ... filter to delete one Share
     *   }
     * })
     * 
     */
    delete<T extends ShareDeleteArgs>(args: SelectSubset<T, ShareDeleteArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Share.
     * @param {ShareUpdateArgs} args - Arguments to update one Share.
     * @example
     * // Update one Share
     * const share = await prisma.share.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareUpdateArgs>(args: SelectSubset<T, ShareUpdateArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shares.
     * @param {ShareDeleteManyArgs} args - Arguments to filter Shares to delete.
     * @example
     * // Delete a few Shares
     * const { count } = await prisma.share.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareDeleteManyArgs>(args?: SelectSubset<T, ShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shares
     * const share = await prisma.share.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareUpdateManyArgs>(args: SelectSubset<T, ShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shares and returns the data updated in the database.
     * @param {ShareUpdateManyAndReturnArgs} args - Arguments to update many Shares.
     * @example
     * // Update many Shares
     * const share = await prisma.share.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shares and only return the `id`
     * const shareWithIdOnly = await prisma.share.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Share.
     * @param {ShareUpsertArgs} args - Arguments to update or create a Share.
     * @example
     * // Update or create a Share
     * const share = await prisma.share.upsert({
     *   create: {
     *     // ... data to create a Share
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Share we want to update
     *   }
     * })
     */
    upsert<T extends ShareUpsertArgs>(args: SelectSubset<T, ShareUpsertArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareCountArgs} args - Arguments to filter Shares to count.
     * @example
     * // Count the number of Shares
     * const count = await prisma.share.count({
     *   where: {
     *     // ... the filter for the Shares we want to count
     *   }
     * })
    **/
    count<T extends ShareCountArgs>(
      args?: Subset<T, ShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Share.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShareAggregateArgs>(args: Subset<T, ShareAggregateArgs>): Prisma.PrismaPromise<GetShareAggregateType<T>>

    /**
     * Group by Share.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareGroupByArgs['orderBy'] }
        : { orderBy?: ShareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Share model
   */
  readonly fields: ShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Share.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shareholder<T extends ShareholderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShareholderDefaultArgs<ExtArgs>>): Prisma__ShareholderClient<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Share model
   */
  interface ShareFieldRefs {
    readonly id: FieldRef<"Share", 'Int'>
    readonly unitsOfShare: FieldRef<"Share", 'Float'>
    readonly ownershipType: FieldRef<"Share", 'OwnershipType'>
    readonly ownershipDate: FieldRef<"Share", 'String'>
    readonly cost: FieldRef<"Share", 'Float'>
    readonly shareholderId: FieldRef<"Share", 'Int'>
    readonly remarks: FieldRef<"Share", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Share findUnique
   */
  export type ShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Share to fetch.
     */
    where: ShareWhereUniqueInput
  }

  /**
   * Share findUniqueOrThrow
   */
  export type ShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Share to fetch.
     */
    where: ShareWhereUniqueInput
  }

  /**
   * Share findFirst
   */
  export type ShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Share to fetch.
     */
    where?: ShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shares.
     */
    cursor?: ShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shares.
     */
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * Share findFirstOrThrow
   */
  export type ShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Share to fetch.
     */
    where?: ShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shares.
     */
    cursor?: ShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shares.
     */
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * Share findMany
   */
  export type ShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Shares to fetch.
     */
    where?: ShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shares.
     */
    cursor?: ShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shares.
     */
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * Share create
   */
  export type ShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * The data needed to create a Share.
     */
    data: XOR<ShareCreateInput, ShareUncheckedCreateInput>
  }

  /**
   * Share createMany
   */
  export type ShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shares.
     */
    data: ShareCreateManyInput | ShareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Share createManyAndReturn
   */
  export type ShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * The data used to create many Shares.
     */
    data: ShareCreateManyInput | ShareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Share update
   */
  export type ShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * The data needed to update a Share.
     */
    data: XOR<ShareUpdateInput, ShareUncheckedUpdateInput>
    /**
     * Choose, which Share to update.
     */
    where: ShareWhereUniqueInput
  }

  /**
   * Share updateMany
   */
  export type ShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shares.
     */
    data: XOR<ShareUpdateManyMutationInput, ShareUncheckedUpdateManyInput>
    /**
     * Filter which Shares to update
     */
    where?: ShareWhereInput
    /**
     * Limit how many Shares to update.
     */
    limit?: number
  }

  /**
   * Share updateManyAndReturn
   */
  export type ShareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * The data used to update Shares.
     */
    data: XOR<ShareUpdateManyMutationInput, ShareUncheckedUpdateManyInput>
    /**
     * Filter which Shares to update
     */
    where?: ShareWhereInput
    /**
     * Limit how many Shares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Share upsert
   */
  export type ShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * The filter to search for the Share to update in case it exists.
     */
    where: ShareWhereUniqueInput
    /**
     * In case the Share found by the `where` argument doesn't exist, create a new Share with this data.
     */
    create: XOR<ShareCreateInput, ShareUncheckedCreateInput>
    /**
     * In case the Share was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareUpdateInput, ShareUncheckedUpdateInput>
  }

  /**
   * Share delete
   */
  export type ShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter which Share to delete.
     */
    where: ShareWhereUniqueInput
  }

  /**
   * Share deleteMany
   */
  export type ShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shares to delete
     */
    where?: ShareWhereInput
    /**
     * Limit how many Shares to delete.
     */
    limit?: number
  }

  /**
   * Share without action
   */
  export type ShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
  }


  /**
   * Model ShareTransferHistory
   */

  export type AggregateShareTransferHistory = {
    _count: ShareTransferHistoryCountAggregateOutputType | null
    _avg: ShareTransferHistoryAvgAggregateOutputType | null
    _sum: ShareTransferHistorySumAggregateOutputType | null
    _min: ShareTransferHistoryMinAggregateOutputType | null
    _max: ShareTransferHistoryMaxAggregateOutputType | null
  }

  export type ShareTransferHistoryAvgAggregateOutputType = {
    id: number | null
    transferingShareholderId: number | null
    receivingShareholderId: number | null
    transferRate: number | null
    wacc: number | null
    transferredUnitsOfShare: number | null
    totalGain: number | null
  }

  export type ShareTransferHistorySumAggregateOutputType = {
    id: number | null
    transferingShareholderId: number | null
    receivingShareholderId: number | null
    transferRate: number | null
    wacc: number | null
    transferredUnitsOfShare: number | null
    totalGain: number | null
  }

  export type ShareTransferHistoryMinAggregateOutputType = {
    id: number | null
    transferingShareholderId: number | null
    receivingShareholderId: number | null
    transferType: $Enums.TransferType | null
    remarks: string | null
    transferRate: number | null
    wacc: number | null
    transferredUnitsOfShare: number | null
    totalGain: number | null
    transferDate: string | null
    entryDate: Date | null
  }

  export type ShareTransferHistoryMaxAggregateOutputType = {
    id: number | null
    transferingShareholderId: number | null
    receivingShareholderId: number | null
    transferType: $Enums.TransferType | null
    remarks: string | null
    transferRate: number | null
    wacc: number | null
    transferredUnitsOfShare: number | null
    totalGain: number | null
    transferDate: string | null
    entryDate: Date | null
  }

  export type ShareTransferHistoryCountAggregateOutputType = {
    id: number
    transferingShareholderId: number
    receivingShareholderId: number
    transferType: number
    remarks: number
    transferRate: number
    wacc: number
    transferredUnitsOfShare: number
    totalGain: number
    transferDate: number
    entryDate: number
    _all: number
  }


  export type ShareTransferHistoryAvgAggregateInputType = {
    id?: true
    transferingShareholderId?: true
    receivingShareholderId?: true
    transferRate?: true
    wacc?: true
    transferredUnitsOfShare?: true
    totalGain?: true
  }

  export type ShareTransferHistorySumAggregateInputType = {
    id?: true
    transferingShareholderId?: true
    receivingShareholderId?: true
    transferRate?: true
    wacc?: true
    transferredUnitsOfShare?: true
    totalGain?: true
  }

  export type ShareTransferHistoryMinAggregateInputType = {
    id?: true
    transferingShareholderId?: true
    receivingShareholderId?: true
    transferType?: true
    remarks?: true
    transferRate?: true
    wacc?: true
    transferredUnitsOfShare?: true
    totalGain?: true
    transferDate?: true
    entryDate?: true
  }

  export type ShareTransferHistoryMaxAggregateInputType = {
    id?: true
    transferingShareholderId?: true
    receivingShareholderId?: true
    transferType?: true
    remarks?: true
    transferRate?: true
    wacc?: true
    transferredUnitsOfShare?: true
    totalGain?: true
    transferDate?: true
    entryDate?: true
  }

  export type ShareTransferHistoryCountAggregateInputType = {
    id?: true
    transferingShareholderId?: true
    receivingShareholderId?: true
    transferType?: true
    remarks?: true
    transferRate?: true
    wacc?: true
    transferredUnitsOfShare?: true
    totalGain?: true
    transferDate?: true
    entryDate?: true
    _all?: true
  }

  export type ShareTransferHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareTransferHistory to aggregate.
     */
    where?: ShareTransferHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareTransferHistories to fetch.
     */
    orderBy?: ShareTransferHistoryOrderByWithRelationInput | ShareTransferHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareTransferHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareTransferHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareTransferHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShareTransferHistories
    **/
    _count?: true | ShareTransferHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShareTransferHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShareTransferHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareTransferHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareTransferHistoryMaxAggregateInputType
  }

  export type GetShareTransferHistoryAggregateType<T extends ShareTransferHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateShareTransferHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareTransferHistory[P]>
      : GetScalarType<T[P], AggregateShareTransferHistory[P]>
  }




  export type ShareTransferHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareTransferHistoryWhereInput
    orderBy?: ShareTransferHistoryOrderByWithAggregationInput | ShareTransferHistoryOrderByWithAggregationInput[]
    by: ShareTransferHistoryScalarFieldEnum[] | ShareTransferHistoryScalarFieldEnum
    having?: ShareTransferHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareTransferHistoryCountAggregateInputType | true
    _avg?: ShareTransferHistoryAvgAggregateInputType
    _sum?: ShareTransferHistorySumAggregateInputType
    _min?: ShareTransferHistoryMinAggregateInputType
    _max?: ShareTransferHistoryMaxAggregateInputType
  }

  export type ShareTransferHistoryGroupByOutputType = {
    id: number
    transferingShareholderId: number
    receivingShareholderId: number
    transferType: $Enums.TransferType
    remarks: string
    transferRate: number
    wacc: number
    transferredUnitsOfShare: number
    totalGain: number
    transferDate: string
    entryDate: Date
    _count: ShareTransferHistoryCountAggregateOutputType | null
    _avg: ShareTransferHistoryAvgAggregateOutputType | null
    _sum: ShareTransferHistorySumAggregateOutputType | null
    _min: ShareTransferHistoryMinAggregateOutputType | null
    _max: ShareTransferHistoryMaxAggregateOutputType | null
  }

  type GetShareTransferHistoryGroupByPayload<T extends ShareTransferHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareTransferHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareTransferHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareTransferHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ShareTransferHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ShareTransferHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transferingShareholderId?: boolean
    receivingShareholderId?: boolean
    transferType?: boolean
    remarks?: boolean
    transferRate?: boolean
    wacc?: boolean
    transferredUnitsOfShare?: boolean
    totalGain?: boolean
    transferDate?: boolean
    entryDate?: boolean
    transferingShareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    receivingShareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    shareHistory?: boolean | ShareTransferHistory$shareHistoryArgs<ExtArgs>
    _count?: boolean | ShareTransferHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareTransferHistory"]>

  export type ShareTransferHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transferingShareholderId?: boolean
    receivingShareholderId?: boolean
    transferType?: boolean
    remarks?: boolean
    transferRate?: boolean
    wacc?: boolean
    transferredUnitsOfShare?: boolean
    totalGain?: boolean
    transferDate?: boolean
    entryDate?: boolean
    transferingShareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    receivingShareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareTransferHistory"]>

  export type ShareTransferHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transferingShareholderId?: boolean
    receivingShareholderId?: boolean
    transferType?: boolean
    remarks?: boolean
    transferRate?: boolean
    wacc?: boolean
    transferredUnitsOfShare?: boolean
    totalGain?: boolean
    transferDate?: boolean
    entryDate?: boolean
    transferingShareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    receivingShareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareTransferHistory"]>

  export type ShareTransferHistorySelectScalar = {
    id?: boolean
    transferingShareholderId?: boolean
    receivingShareholderId?: boolean
    transferType?: boolean
    remarks?: boolean
    transferRate?: boolean
    wacc?: boolean
    transferredUnitsOfShare?: boolean
    totalGain?: boolean
    transferDate?: boolean
    entryDate?: boolean
  }

  export type ShareTransferHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transferingShareholderId" | "receivingShareholderId" | "transferType" | "remarks" | "transferRate" | "wacc" | "transferredUnitsOfShare" | "totalGain" | "transferDate" | "entryDate", ExtArgs["result"]["shareTransferHistory"]>
  export type ShareTransferHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transferingShareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    receivingShareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    shareHistory?: boolean | ShareTransferHistory$shareHistoryArgs<ExtArgs>
    _count?: boolean | ShareTransferHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShareTransferHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transferingShareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    receivingShareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }
  export type ShareTransferHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transferingShareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
    receivingShareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }

  export type $ShareTransferHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShareTransferHistory"
    objects: {
      transferingShareholder: Prisma.$ShareholderPayload<ExtArgs>
      receivingShareholder: Prisma.$ShareholderPayload<ExtArgs>
      shareHistory: Prisma.$ShareHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transferingShareholderId: number
      receivingShareholderId: number
      transferType: $Enums.TransferType
      remarks: string
      transferRate: number
      wacc: number
      transferredUnitsOfShare: number
      totalGain: number
      transferDate: string
      entryDate: Date
    }, ExtArgs["result"]["shareTransferHistory"]>
    composites: {}
  }

  type ShareTransferHistoryGetPayload<S extends boolean | null | undefined | ShareTransferHistoryDefaultArgs> = $Result.GetResult<Prisma.$ShareTransferHistoryPayload, S>

  type ShareTransferHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareTransferHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareTransferHistoryCountAggregateInputType | true
    }

  export interface ShareTransferHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShareTransferHistory'], meta: { name: 'ShareTransferHistory' } }
    /**
     * Find zero or one ShareTransferHistory that matches the filter.
     * @param {ShareTransferHistoryFindUniqueArgs} args - Arguments to find a ShareTransferHistory
     * @example
     * // Get one ShareTransferHistory
     * const shareTransferHistory = await prisma.shareTransferHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareTransferHistoryFindUniqueArgs>(args: SelectSubset<T, ShareTransferHistoryFindUniqueArgs<ExtArgs>>): Prisma__ShareTransferHistoryClient<$Result.GetResult<Prisma.$ShareTransferHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShareTransferHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareTransferHistoryFindUniqueOrThrowArgs} args - Arguments to find a ShareTransferHistory
     * @example
     * // Get one ShareTransferHistory
     * const shareTransferHistory = await prisma.shareTransferHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareTransferHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareTransferHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareTransferHistoryClient<$Result.GetResult<Prisma.$ShareTransferHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareTransferHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareTransferHistoryFindFirstArgs} args - Arguments to find a ShareTransferHistory
     * @example
     * // Get one ShareTransferHistory
     * const shareTransferHistory = await prisma.shareTransferHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareTransferHistoryFindFirstArgs>(args?: SelectSubset<T, ShareTransferHistoryFindFirstArgs<ExtArgs>>): Prisma__ShareTransferHistoryClient<$Result.GetResult<Prisma.$ShareTransferHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareTransferHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareTransferHistoryFindFirstOrThrowArgs} args - Arguments to find a ShareTransferHistory
     * @example
     * // Get one ShareTransferHistory
     * const shareTransferHistory = await prisma.shareTransferHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareTransferHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareTransferHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareTransferHistoryClient<$Result.GetResult<Prisma.$ShareTransferHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShareTransferHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareTransferHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShareTransferHistories
     * const shareTransferHistories = await prisma.shareTransferHistory.findMany()
     * 
     * // Get first 10 ShareTransferHistories
     * const shareTransferHistories = await prisma.shareTransferHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareTransferHistoryWithIdOnly = await prisma.shareTransferHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareTransferHistoryFindManyArgs>(args?: SelectSubset<T, ShareTransferHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareTransferHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShareTransferHistory.
     * @param {ShareTransferHistoryCreateArgs} args - Arguments to create a ShareTransferHistory.
     * @example
     * // Create one ShareTransferHistory
     * const ShareTransferHistory = await prisma.shareTransferHistory.create({
     *   data: {
     *     // ... data to create a ShareTransferHistory
     *   }
     * })
     * 
     */
    create<T extends ShareTransferHistoryCreateArgs>(args: SelectSubset<T, ShareTransferHistoryCreateArgs<ExtArgs>>): Prisma__ShareTransferHistoryClient<$Result.GetResult<Prisma.$ShareTransferHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShareTransferHistories.
     * @param {ShareTransferHistoryCreateManyArgs} args - Arguments to create many ShareTransferHistories.
     * @example
     * // Create many ShareTransferHistories
     * const shareTransferHistory = await prisma.shareTransferHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareTransferHistoryCreateManyArgs>(args?: SelectSubset<T, ShareTransferHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShareTransferHistories and returns the data saved in the database.
     * @param {ShareTransferHistoryCreateManyAndReturnArgs} args - Arguments to create many ShareTransferHistories.
     * @example
     * // Create many ShareTransferHistories
     * const shareTransferHistory = await prisma.shareTransferHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShareTransferHistories and only return the `id`
     * const shareTransferHistoryWithIdOnly = await prisma.shareTransferHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareTransferHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareTransferHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareTransferHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShareTransferHistory.
     * @param {ShareTransferHistoryDeleteArgs} args - Arguments to delete one ShareTransferHistory.
     * @example
     * // Delete one ShareTransferHistory
     * const ShareTransferHistory = await prisma.shareTransferHistory.delete({
     *   where: {
     *     // ... filter to delete one ShareTransferHistory
     *   }
     * })
     * 
     */
    delete<T extends ShareTransferHistoryDeleteArgs>(args: SelectSubset<T, ShareTransferHistoryDeleteArgs<ExtArgs>>): Prisma__ShareTransferHistoryClient<$Result.GetResult<Prisma.$ShareTransferHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShareTransferHistory.
     * @param {ShareTransferHistoryUpdateArgs} args - Arguments to update one ShareTransferHistory.
     * @example
     * // Update one ShareTransferHistory
     * const shareTransferHistory = await prisma.shareTransferHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareTransferHistoryUpdateArgs>(args: SelectSubset<T, ShareTransferHistoryUpdateArgs<ExtArgs>>): Prisma__ShareTransferHistoryClient<$Result.GetResult<Prisma.$ShareTransferHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShareTransferHistories.
     * @param {ShareTransferHistoryDeleteManyArgs} args - Arguments to filter ShareTransferHistories to delete.
     * @example
     * // Delete a few ShareTransferHistories
     * const { count } = await prisma.shareTransferHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareTransferHistoryDeleteManyArgs>(args?: SelectSubset<T, ShareTransferHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareTransferHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareTransferHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShareTransferHistories
     * const shareTransferHistory = await prisma.shareTransferHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareTransferHistoryUpdateManyArgs>(args: SelectSubset<T, ShareTransferHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareTransferHistories and returns the data updated in the database.
     * @param {ShareTransferHistoryUpdateManyAndReturnArgs} args - Arguments to update many ShareTransferHistories.
     * @example
     * // Update many ShareTransferHistories
     * const shareTransferHistory = await prisma.shareTransferHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShareTransferHistories and only return the `id`
     * const shareTransferHistoryWithIdOnly = await prisma.shareTransferHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareTransferHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareTransferHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareTransferHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShareTransferHistory.
     * @param {ShareTransferHistoryUpsertArgs} args - Arguments to update or create a ShareTransferHistory.
     * @example
     * // Update or create a ShareTransferHistory
     * const shareTransferHistory = await prisma.shareTransferHistory.upsert({
     *   create: {
     *     // ... data to create a ShareTransferHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShareTransferHistory we want to update
     *   }
     * })
     */
    upsert<T extends ShareTransferHistoryUpsertArgs>(args: SelectSubset<T, ShareTransferHistoryUpsertArgs<ExtArgs>>): Prisma__ShareTransferHistoryClient<$Result.GetResult<Prisma.$ShareTransferHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShareTransferHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareTransferHistoryCountArgs} args - Arguments to filter ShareTransferHistories to count.
     * @example
     * // Count the number of ShareTransferHistories
     * const count = await prisma.shareTransferHistory.count({
     *   where: {
     *     // ... the filter for the ShareTransferHistories we want to count
     *   }
     * })
    **/
    count<T extends ShareTransferHistoryCountArgs>(
      args?: Subset<T, ShareTransferHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareTransferHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShareTransferHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareTransferHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShareTransferHistoryAggregateArgs>(args: Subset<T, ShareTransferHistoryAggregateArgs>): Prisma.PrismaPromise<GetShareTransferHistoryAggregateType<T>>

    /**
     * Group by ShareTransferHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareTransferHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShareTransferHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareTransferHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ShareTransferHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShareTransferHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareTransferHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShareTransferHistory model
   */
  readonly fields: ShareTransferHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShareTransferHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareTransferHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transferingShareholder<T extends ShareholderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShareholderDefaultArgs<ExtArgs>>): Prisma__ShareholderClient<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receivingShareholder<T extends ShareholderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShareholderDefaultArgs<ExtArgs>>): Prisma__ShareholderClient<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shareHistory<T extends ShareTransferHistory$shareHistoryArgs<ExtArgs> = {}>(args?: Subset<T, ShareTransferHistory$shareHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShareTransferHistory model
   */
  interface ShareTransferHistoryFieldRefs {
    readonly id: FieldRef<"ShareTransferHistory", 'Int'>
    readonly transferingShareholderId: FieldRef<"ShareTransferHistory", 'Int'>
    readonly receivingShareholderId: FieldRef<"ShareTransferHistory", 'Int'>
    readonly transferType: FieldRef<"ShareTransferHistory", 'TransferType'>
    readonly remarks: FieldRef<"ShareTransferHistory", 'String'>
    readonly transferRate: FieldRef<"ShareTransferHistory", 'Float'>
    readonly wacc: FieldRef<"ShareTransferHistory", 'Float'>
    readonly transferredUnitsOfShare: FieldRef<"ShareTransferHistory", 'Float'>
    readonly totalGain: FieldRef<"ShareTransferHistory", 'Float'>
    readonly transferDate: FieldRef<"ShareTransferHistory", 'String'>
    readonly entryDate: FieldRef<"ShareTransferHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShareTransferHistory findUnique
   */
  export type ShareTransferHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareTransferHistory to fetch.
     */
    where: ShareTransferHistoryWhereUniqueInput
  }

  /**
   * ShareTransferHistory findUniqueOrThrow
   */
  export type ShareTransferHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareTransferHistory to fetch.
     */
    where: ShareTransferHistoryWhereUniqueInput
  }

  /**
   * ShareTransferHistory findFirst
   */
  export type ShareTransferHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareTransferHistory to fetch.
     */
    where?: ShareTransferHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareTransferHistories to fetch.
     */
    orderBy?: ShareTransferHistoryOrderByWithRelationInput | ShareTransferHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareTransferHistories.
     */
    cursor?: ShareTransferHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareTransferHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareTransferHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareTransferHistories.
     */
    distinct?: ShareTransferHistoryScalarFieldEnum | ShareTransferHistoryScalarFieldEnum[]
  }

  /**
   * ShareTransferHistory findFirstOrThrow
   */
  export type ShareTransferHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareTransferHistory to fetch.
     */
    where?: ShareTransferHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareTransferHistories to fetch.
     */
    orderBy?: ShareTransferHistoryOrderByWithRelationInput | ShareTransferHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareTransferHistories.
     */
    cursor?: ShareTransferHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareTransferHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareTransferHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareTransferHistories.
     */
    distinct?: ShareTransferHistoryScalarFieldEnum | ShareTransferHistoryScalarFieldEnum[]
  }

  /**
   * ShareTransferHistory findMany
   */
  export type ShareTransferHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ShareTransferHistories to fetch.
     */
    where?: ShareTransferHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareTransferHistories to fetch.
     */
    orderBy?: ShareTransferHistoryOrderByWithRelationInput | ShareTransferHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShareTransferHistories.
     */
    cursor?: ShareTransferHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareTransferHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareTransferHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareTransferHistories.
     */
    distinct?: ShareTransferHistoryScalarFieldEnum | ShareTransferHistoryScalarFieldEnum[]
  }

  /**
   * ShareTransferHistory create
   */
  export type ShareTransferHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ShareTransferHistory.
     */
    data: XOR<ShareTransferHistoryCreateInput, ShareTransferHistoryUncheckedCreateInput>
  }

  /**
   * ShareTransferHistory createMany
   */
  export type ShareTransferHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShareTransferHistories.
     */
    data: ShareTransferHistoryCreateManyInput | ShareTransferHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShareTransferHistory createManyAndReturn
   */
  export type ShareTransferHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ShareTransferHistories.
     */
    data: ShareTransferHistoryCreateManyInput | ShareTransferHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareTransferHistory update
   */
  export type ShareTransferHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ShareTransferHistory.
     */
    data: XOR<ShareTransferHistoryUpdateInput, ShareTransferHistoryUncheckedUpdateInput>
    /**
     * Choose, which ShareTransferHistory to update.
     */
    where: ShareTransferHistoryWhereUniqueInput
  }

  /**
   * ShareTransferHistory updateMany
   */
  export type ShareTransferHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShareTransferHistories.
     */
    data: XOR<ShareTransferHistoryUpdateManyMutationInput, ShareTransferHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ShareTransferHistories to update
     */
    where?: ShareTransferHistoryWhereInput
    /**
     * Limit how many ShareTransferHistories to update.
     */
    limit?: number
  }

  /**
   * ShareTransferHistory updateManyAndReturn
   */
  export type ShareTransferHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ShareTransferHistories.
     */
    data: XOR<ShareTransferHistoryUpdateManyMutationInput, ShareTransferHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ShareTransferHistories to update
     */
    where?: ShareTransferHistoryWhereInput
    /**
     * Limit how many ShareTransferHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareTransferHistory upsert
   */
  export type ShareTransferHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ShareTransferHistory to update in case it exists.
     */
    where: ShareTransferHistoryWhereUniqueInput
    /**
     * In case the ShareTransferHistory found by the `where` argument doesn't exist, create a new ShareTransferHistory with this data.
     */
    create: XOR<ShareTransferHistoryCreateInput, ShareTransferHistoryUncheckedCreateInput>
    /**
     * In case the ShareTransferHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareTransferHistoryUpdateInput, ShareTransferHistoryUncheckedUpdateInput>
  }

  /**
   * ShareTransferHistory delete
   */
  export type ShareTransferHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryInclude<ExtArgs> | null
    /**
     * Filter which ShareTransferHistory to delete.
     */
    where: ShareTransferHistoryWhereUniqueInput
  }

  /**
   * ShareTransferHistory deleteMany
   */
  export type ShareTransferHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareTransferHistories to delete
     */
    where?: ShareTransferHistoryWhereInput
    /**
     * Limit how many ShareTransferHistories to delete.
     */
    limit?: number
  }

  /**
   * ShareTransferHistory.shareHistory
   */
  export type ShareTransferHistory$shareHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryInclude<ExtArgs> | null
    where?: ShareHistoryWhereInput
    orderBy?: ShareHistoryOrderByWithRelationInput | ShareHistoryOrderByWithRelationInput[]
    cursor?: ShareHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareHistoryScalarFieldEnum | ShareHistoryScalarFieldEnum[]
  }

  /**
   * ShareTransferHistory without action
   */
  export type ShareTransferHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryInclude<ExtArgs> | null
  }


  /**
   * Model WaccHistory
   */

  export type AggregateWaccHistory = {
    _count: WaccHistoryCountAggregateOutputType | null
    _avg: WaccHistoryAvgAggregateOutputType | null
    _sum: WaccHistorySumAggregateOutputType | null
    _min: WaccHistoryMinAggregateOutputType | null
    _max: WaccHistoryMaxAggregateOutputType | null
  }

  export type WaccHistoryAvgAggregateOutputType = {
    id: number | null
    shareholderId: number | null
    totalCost: number | null
    totalUnitsOfShare: number | null
    wacc: number | null
  }

  export type WaccHistorySumAggregateOutputType = {
    id: number | null
    shareholderId: number | null
    totalCost: number | null
    totalUnitsOfShare: number | null
    wacc: number | null
  }

  export type WaccHistoryMinAggregateOutputType = {
    id: number | null
    shareholderId: number | null
    totalCost: number | null
    totalUnitsOfShare: number | null
    wacc: number | null
    calculationDate: string | null
  }

  export type WaccHistoryMaxAggregateOutputType = {
    id: number | null
    shareholderId: number | null
    totalCost: number | null
    totalUnitsOfShare: number | null
    wacc: number | null
    calculationDate: string | null
  }

  export type WaccHistoryCountAggregateOutputType = {
    id: number
    shareholderId: number
    totalCost: number
    totalUnitsOfShare: number
    wacc: number
    calculationDate: number
    _all: number
  }


  export type WaccHistoryAvgAggregateInputType = {
    id?: true
    shareholderId?: true
    totalCost?: true
    totalUnitsOfShare?: true
    wacc?: true
  }

  export type WaccHistorySumAggregateInputType = {
    id?: true
    shareholderId?: true
    totalCost?: true
    totalUnitsOfShare?: true
    wacc?: true
  }

  export type WaccHistoryMinAggregateInputType = {
    id?: true
    shareholderId?: true
    totalCost?: true
    totalUnitsOfShare?: true
    wacc?: true
    calculationDate?: true
  }

  export type WaccHistoryMaxAggregateInputType = {
    id?: true
    shareholderId?: true
    totalCost?: true
    totalUnitsOfShare?: true
    wacc?: true
    calculationDate?: true
  }

  export type WaccHistoryCountAggregateInputType = {
    id?: true
    shareholderId?: true
    totalCost?: true
    totalUnitsOfShare?: true
    wacc?: true
    calculationDate?: true
    _all?: true
  }

  export type WaccHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaccHistory to aggregate.
     */
    where?: WaccHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaccHistories to fetch.
     */
    orderBy?: WaccHistoryOrderByWithRelationInput | WaccHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaccHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaccHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaccHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaccHistories
    **/
    _count?: true | WaccHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaccHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaccHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaccHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaccHistoryMaxAggregateInputType
  }

  export type GetWaccHistoryAggregateType<T extends WaccHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateWaccHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaccHistory[P]>
      : GetScalarType<T[P], AggregateWaccHistory[P]>
  }




  export type WaccHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaccHistoryWhereInput
    orderBy?: WaccHistoryOrderByWithAggregationInput | WaccHistoryOrderByWithAggregationInput[]
    by: WaccHistoryScalarFieldEnum[] | WaccHistoryScalarFieldEnum
    having?: WaccHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaccHistoryCountAggregateInputType | true
    _avg?: WaccHistoryAvgAggregateInputType
    _sum?: WaccHistorySumAggregateInputType
    _min?: WaccHistoryMinAggregateInputType
    _max?: WaccHistoryMaxAggregateInputType
  }

  export type WaccHistoryGroupByOutputType = {
    id: number
    shareholderId: number
    totalCost: number
    totalUnitsOfShare: number
    wacc: number
    calculationDate: string
    _count: WaccHistoryCountAggregateOutputType | null
    _avg: WaccHistoryAvgAggregateOutputType | null
    _sum: WaccHistorySumAggregateOutputType | null
    _min: WaccHistoryMinAggregateOutputType | null
    _max: WaccHistoryMaxAggregateOutputType | null
  }

  type GetWaccHistoryGroupByPayload<T extends WaccHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaccHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaccHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaccHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], WaccHistoryGroupByOutputType[P]>
        }
      >
    >


  export type WaccHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareholderId?: boolean
    totalCost?: boolean
    totalUnitsOfShare?: boolean
    wacc?: boolean
    calculationDate?: boolean
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waccHistory"]>

  export type WaccHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareholderId?: boolean
    totalCost?: boolean
    totalUnitsOfShare?: boolean
    wacc?: boolean
    calculationDate?: boolean
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waccHistory"]>

  export type WaccHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shareholderId?: boolean
    totalCost?: boolean
    totalUnitsOfShare?: boolean
    wacc?: boolean
    calculationDate?: boolean
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waccHistory"]>

  export type WaccHistorySelectScalar = {
    id?: boolean
    shareholderId?: boolean
    totalCost?: boolean
    totalUnitsOfShare?: boolean
    wacc?: boolean
    calculationDate?: boolean
  }

  export type WaccHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shareholderId" | "totalCost" | "totalUnitsOfShare" | "wacc" | "calculationDate", ExtArgs["result"]["waccHistory"]>
  export type WaccHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }
  export type WaccHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }
  export type WaccHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shareholder?: boolean | ShareholderDefaultArgs<ExtArgs>
  }

  export type $WaccHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaccHistory"
    objects: {
      shareholder: Prisma.$ShareholderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shareholderId: number
      totalCost: number
      totalUnitsOfShare: number
      wacc: number
      calculationDate: string
    }, ExtArgs["result"]["waccHistory"]>
    composites: {}
  }

  type WaccHistoryGetPayload<S extends boolean | null | undefined | WaccHistoryDefaultArgs> = $Result.GetResult<Prisma.$WaccHistoryPayload, S>

  type WaccHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaccHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaccHistoryCountAggregateInputType | true
    }

  export interface WaccHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaccHistory'], meta: { name: 'WaccHistory' } }
    /**
     * Find zero or one WaccHistory that matches the filter.
     * @param {WaccHistoryFindUniqueArgs} args - Arguments to find a WaccHistory
     * @example
     * // Get one WaccHistory
     * const waccHistory = await prisma.waccHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaccHistoryFindUniqueArgs>(args: SelectSubset<T, WaccHistoryFindUniqueArgs<ExtArgs>>): Prisma__WaccHistoryClient<$Result.GetResult<Prisma.$WaccHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaccHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaccHistoryFindUniqueOrThrowArgs} args - Arguments to find a WaccHistory
     * @example
     * // Get one WaccHistory
     * const waccHistory = await prisma.waccHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaccHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, WaccHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaccHistoryClient<$Result.GetResult<Prisma.$WaccHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaccHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaccHistoryFindFirstArgs} args - Arguments to find a WaccHistory
     * @example
     * // Get one WaccHistory
     * const waccHistory = await prisma.waccHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaccHistoryFindFirstArgs>(args?: SelectSubset<T, WaccHistoryFindFirstArgs<ExtArgs>>): Prisma__WaccHistoryClient<$Result.GetResult<Prisma.$WaccHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaccHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaccHistoryFindFirstOrThrowArgs} args - Arguments to find a WaccHistory
     * @example
     * // Get one WaccHistory
     * const waccHistory = await prisma.waccHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaccHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, WaccHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaccHistoryClient<$Result.GetResult<Prisma.$WaccHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaccHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaccHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaccHistories
     * const waccHistories = await prisma.waccHistory.findMany()
     * 
     * // Get first 10 WaccHistories
     * const waccHistories = await prisma.waccHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waccHistoryWithIdOnly = await prisma.waccHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaccHistoryFindManyArgs>(args?: SelectSubset<T, WaccHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaccHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaccHistory.
     * @param {WaccHistoryCreateArgs} args - Arguments to create a WaccHistory.
     * @example
     * // Create one WaccHistory
     * const WaccHistory = await prisma.waccHistory.create({
     *   data: {
     *     // ... data to create a WaccHistory
     *   }
     * })
     * 
     */
    create<T extends WaccHistoryCreateArgs>(args: SelectSubset<T, WaccHistoryCreateArgs<ExtArgs>>): Prisma__WaccHistoryClient<$Result.GetResult<Prisma.$WaccHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaccHistories.
     * @param {WaccHistoryCreateManyArgs} args - Arguments to create many WaccHistories.
     * @example
     * // Create many WaccHistories
     * const waccHistory = await prisma.waccHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaccHistoryCreateManyArgs>(args?: SelectSubset<T, WaccHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaccHistories and returns the data saved in the database.
     * @param {WaccHistoryCreateManyAndReturnArgs} args - Arguments to create many WaccHistories.
     * @example
     * // Create many WaccHistories
     * const waccHistory = await prisma.waccHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaccHistories and only return the `id`
     * const waccHistoryWithIdOnly = await prisma.waccHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaccHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, WaccHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaccHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaccHistory.
     * @param {WaccHistoryDeleteArgs} args - Arguments to delete one WaccHistory.
     * @example
     * // Delete one WaccHistory
     * const WaccHistory = await prisma.waccHistory.delete({
     *   where: {
     *     // ... filter to delete one WaccHistory
     *   }
     * })
     * 
     */
    delete<T extends WaccHistoryDeleteArgs>(args: SelectSubset<T, WaccHistoryDeleteArgs<ExtArgs>>): Prisma__WaccHistoryClient<$Result.GetResult<Prisma.$WaccHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaccHistory.
     * @param {WaccHistoryUpdateArgs} args - Arguments to update one WaccHistory.
     * @example
     * // Update one WaccHistory
     * const waccHistory = await prisma.waccHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaccHistoryUpdateArgs>(args: SelectSubset<T, WaccHistoryUpdateArgs<ExtArgs>>): Prisma__WaccHistoryClient<$Result.GetResult<Prisma.$WaccHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaccHistories.
     * @param {WaccHistoryDeleteManyArgs} args - Arguments to filter WaccHistories to delete.
     * @example
     * // Delete a few WaccHistories
     * const { count } = await prisma.waccHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaccHistoryDeleteManyArgs>(args?: SelectSubset<T, WaccHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaccHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaccHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaccHistories
     * const waccHistory = await prisma.waccHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaccHistoryUpdateManyArgs>(args: SelectSubset<T, WaccHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaccHistories and returns the data updated in the database.
     * @param {WaccHistoryUpdateManyAndReturnArgs} args - Arguments to update many WaccHistories.
     * @example
     * // Update many WaccHistories
     * const waccHistory = await prisma.waccHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaccHistories and only return the `id`
     * const waccHistoryWithIdOnly = await prisma.waccHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WaccHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, WaccHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaccHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaccHistory.
     * @param {WaccHistoryUpsertArgs} args - Arguments to update or create a WaccHistory.
     * @example
     * // Update or create a WaccHistory
     * const waccHistory = await prisma.waccHistory.upsert({
     *   create: {
     *     // ... data to create a WaccHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaccHistory we want to update
     *   }
     * })
     */
    upsert<T extends WaccHistoryUpsertArgs>(args: SelectSubset<T, WaccHistoryUpsertArgs<ExtArgs>>): Prisma__WaccHistoryClient<$Result.GetResult<Prisma.$WaccHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaccHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaccHistoryCountArgs} args - Arguments to filter WaccHistories to count.
     * @example
     * // Count the number of WaccHistories
     * const count = await prisma.waccHistory.count({
     *   where: {
     *     // ... the filter for the WaccHistories we want to count
     *   }
     * })
    **/
    count<T extends WaccHistoryCountArgs>(
      args?: Subset<T, WaccHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaccHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaccHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaccHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaccHistoryAggregateArgs>(args: Subset<T, WaccHistoryAggregateArgs>): Prisma.PrismaPromise<GetWaccHistoryAggregateType<T>>

    /**
     * Group by WaccHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaccHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaccHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaccHistoryGroupByArgs['orderBy'] }
        : { orderBy?: WaccHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaccHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaccHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaccHistory model
   */
  readonly fields: WaccHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaccHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaccHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shareholder<T extends ShareholderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShareholderDefaultArgs<ExtArgs>>): Prisma__ShareholderClient<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WaccHistory model
   */
  interface WaccHistoryFieldRefs {
    readonly id: FieldRef<"WaccHistory", 'Int'>
    readonly shareholderId: FieldRef<"WaccHistory", 'Int'>
    readonly totalCost: FieldRef<"WaccHistory", 'Float'>
    readonly totalUnitsOfShare: FieldRef<"WaccHistory", 'Float'>
    readonly wacc: FieldRef<"WaccHistory", 'Float'>
    readonly calculationDate: FieldRef<"WaccHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WaccHistory findUnique
   */
  export type WaccHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaccHistory
     */
    select?: WaccHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaccHistory
     */
    omit?: WaccHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaccHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WaccHistory to fetch.
     */
    where: WaccHistoryWhereUniqueInput
  }

  /**
   * WaccHistory findUniqueOrThrow
   */
  export type WaccHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaccHistory
     */
    select?: WaccHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaccHistory
     */
    omit?: WaccHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaccHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WaccHistory to fetch.
     */
    where: WaccHistoryWhereUniqueInput
  }

  /**
   * WaccHistory findFirst
   */
  export type WaccHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaccHistory
     */
    select?: WaccHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaccHistory
     */
    omit?: WaccHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaccHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WaccHistory to fetch.
     */
    where?: WaccHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaccHistories to fetch.
     */
    orderBy?: WaccHistoryOrderByWithRelationInput | WaccHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaccHistories.
     */
    cursor?: WaccHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaccHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaccHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaccHistories.
     */
    distinct?: WaccHistoryScalarFieldEnum | WaccHistoryScalarFieldEnum[]
  }

  /**
   * WaccHistory findFirstOrThrow
   */
  export type WaccHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaccHistory
     */
    select?: WaccHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaccHistory
     */
    omit?: WaccHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaccHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WaccHistory to fetch.
     */
    where?: WaccHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaccHistories to fetch.
     */
    orderBy?: WaccHistoryOrderByWithRelationInput | WaccHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaccHistories.
     */
    cursor?: WaccHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaccHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaccHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaccHistories.
     */
    distinct?: WaccHistoryScalarFieldEnum | WaccHistoryScalarFieldEnum[]
  }

  /**
   * WaccHistory findMany
   */
  export type WaccHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaccHistory
     */
    select?: WaccHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaccHistory
     */
    omit?: WaccHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaccHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WaccHistories to fetch.
     */
    where?: WaccHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaccHistories to fetch.
     */
    orderBy?: WaccHistoryOrderByWithRelationInput | WaccHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaccHistories.
     */
    cursor?: WaccHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaccHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaccHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaccHistories.
     */
    distinct?: WaccHistoryScalarFieldEnum | WaccHistoryScalarFieldEnum[]
  }

  /**
   * WaccHistory create
   */
  export type WaccHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaccHistory
     */
    select?: WaccHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaccHistory
     */
    omit?: WaccHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaccHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a WaccHistory.
     */
    data: XOR<WaccHistoryCreateInput, WaccHistoryUncheckedCreateInput>
  }

  /**
   * WaccHistory createMany
   */
  export type WaccHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaccHistories.
     */
    data: WaccHistoryCreateManyInput | WaccHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaccHistory createManyAndReturn
   */
  export type WaccHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaccHistory
     */
    select?: WaccHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaccHistory
     */
    omit?: WaccHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many WaccHistories.
     */
    data: WaccHistoryCreateManyInput | WaccHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaccHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaccHistory update
   */
  export type WaccHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaccHistory
     */
    select?: WaccHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaccHistory
     */
    omit?: WaccHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaccHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a WaccHistory.
     */
    data: XOR<WaccHistoryUpdateInput, WaccHistoryUncheckedUpdateInput>
    /**
     * Choose, which WaccHistory to update.
     */
    where: WaccHistoryWhereUniqueInput
  }

  /**
   * WaccHistory updateMany
   */
  export type WaccHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaccHistories.
     */
    data: XOR<WaccHistoryUpdateManyMutationInput, WaccHistoryUncheckedUpdateManyInput>
    /**
     * Filter which WaccHistories to update
     */
    where?: WaccHistoryWhereInput
    /**
     * Limit how many WaccHistories to update.
     */
    limit?: number
  }

  /**
   * WaccHistory updateManyAndReturn
   */
  export type WaccHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaccHistory
     */
    select?: WaccHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaccHistory
     */
    omit?: WaccHistoryOmit<ExtArgs> | null
    /**
     * The data used to update WaccHistories.
     */
    data: XOR<WaccHistoryUpdateManyMutationInput, WaccHistoryUncheckedUpdateManyInput>
    /**
     * Filter which WaccHistories to update
     */
    where?: WaccHistoryWhereInput
    /**
     * Limit how many WaccHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaccHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaccHistory upsert
   */
  export type WaccHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaccHistory
     */
    select?: WaccHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaccHistory
     */
    omit?: WaccHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaccHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the WaccHistory to update in case it exists.
     */
    where: WaccHistoryWhereUniqueInput
    /**
     * In case the WaccHistory found by the `where` argument doesn't exist, create a new WaccHistory with this data.
     */
    create: XOR<WaccHistoryCreateInput, WaccHistoryUncheckedCreateInput>
    /**
     * In case the WaccHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaccHistoryUpdateInput, WaccHistoryUncheckedUpdateInput>
  }

  /**
   * WaccHistory delete
   */
  export type WaccHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaccHistory
     */
    select?: WaccHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaccHistory
     */
    omit?: WaccHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaccHistoryInclude<ExtArgs> | null
    /**
     * Filter which WaccHistory to delete.
     */
    where: WaccHistoryWhereUniqueInput
  }

  /**
   * WaccHistory deleteMany
   */
  export type WaccHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaccHistories to delete
     */
    where?: WaccHistoryWhereInput
    /**
     * Limit how many WaccHistories to delete.
     */
    limit?: number
  }

  /**
   * WaccHistory without action
   */
  export type WaccHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaccHistory
     */
    select?: WaccHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaccHistory
     */
    omit?: WaccHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaccHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Shareholder
   */

  export type AggregateShareholder = {
    _count: ShareholderCountAggregateOutputType | null
    _avg: ShareholderAvgAggregateOutputType | null
    _sum: ShareholderSumAggregateOutputType | null
    _min: ShareholderMinAggregateOutputType | null
    _max: ShareholderMaxAggregateOutputType | null
  }

  export type ShareholderAvgAggregateOutputType = {
    id: number | null
    number: number | null
    dividendBalance: number | null
    ownedUnitsOfShare: number | null
    wacc: number | null
  }

  export type ShareholderSumAggregateOutputType = {
    id: number | null
    number: number | null
    dividendBalance: number | null
    ownedUnitsOfShare: number | null
    wacc: number | null
  }

  export type ShareholderMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ShareholderType | null
    number: number | null
    ctzOrRegNumber: string | null
    ctzIssueDateOrRegDate: string | null
    fatherName: string | null
    grandfatherName: string | null
    contact: string | null
    address: string | null
    remarks: string | null
    dividendBalance: number | null
    ownedUnitsOfShare: number | null
    wacc: number | null
    bankName: string | null
    bankAccount: string | null
  }

  export type ShareholderMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ShareholderType | null
    number: number | null
    ctzOrRegNumber: string | null
    ctzIssueDateOrRegDate: string | null
    fatherName: string | null
    grandfatherName: string | null
    contact: string | null
    address: string | null
    remarks: string | null
    dividendBalance: number | null
    ownedUnitsOfShare: number | null
    wacc: number | null
    bankName: string | null
    bankAccount: string | null
  }

  export type ShareholderCountAggregateOutputType = {
    id: number
    name: number
    type: number
    number: number
    ctzOrRegNumber: number
    ctzIssueDateOrRegDate: number
    fatherName: number
    grandfatherName: number
    contact: number
    address: number
    remarks: number
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName: number
    bankAccount: number
    _all: number
  }


  export type ShareholderAvgAggregateInputType = {
    id?: true
    number?: true
    dividendBalance?: true
    ownedUnitsOfShare?: true
    wacc?: true
  }

  export type ShareholderSumAggregateInputType = {
    id?: true
    number?: true
    dividendBalance?: true
    ownedUnitsOfShare?: true
    wacc?: true
  }

  export type ShareholderMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    number?: true
    ctzOrRegNumber?: true
    ctzIssueDateOrRegDate?: true
    fatherName?: true
    grandfatherName?: true
    contact?: true
    address?: true
    remarks?: true
    dividendBalance?: true
    ownedUnitsOfShare?: true
    wacc?: true
    bankName?: true
    bankAccount?: true
  }

  export type ShareholderMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    number?: true
    ctzOrRegNumber?: true
    ctzIssueDateOrRegDate?: true
    fatherName?: true
    grandfatherName?: true
    contact?: true
    address?: true
    remarks?: true
    dividendBalance?: true
    ownedUnitsOfShare?: true
    wacc?: true
    bankName?: true
    bankAccount?: true
  }

  export type ShareholderCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    number?: true
    ctzOrRegNumber?: true
    ctzIssueDateOrRegDate?: true
    fatherName?: true
    grandfatherName?: true
    contact?: true
    address?: true
    remarks?: true
    dividendBalance?: true
    ownedUnitsOfShare?: true
    wacc?: true
    bankName?: true
    bankAccount?: true
    _all?: true
  }

  export type ShareholderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shareholder to aggregate.
     */
    where?: ShareholderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shareholders to fetch.
     */
    orderBy?: ShareholderOrderByWithRelationInput | ShareholderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareholderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shareholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shareholders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shareholders
    **/
    _count?: true | ShareholderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShareholderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShareholderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareholderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareholderMaxAggregateInputType
  }

  export type GetShareholderAggregateType<T extends ShareholderAggregateArgs> = {
        [P in keyof T & keyof AggregateShareholder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareholder[P]>
      : GetScalarType<T[P], AggregateShareholder[P]>
  }




  export type ShareholderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareholderWhereInput
    orderBy?: ShareholderOrderByWithAggregationInput | ShareholderOrderByWithAggregationInput[]
    by: ShareholderScalarFieldEnum[] | ShareholderScalarFieldEnum
    having?: ShareholderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareholderCountAggregateInputType | true
    _avg?: ShareholderAvgAggregateInputType
    _sum?: ShareholderSumAggregateInputType
    _min?: ShareholderMinAggregateInputType
    _max?: ShareholderMaxAggregateInputType
  }

  export type ShareholderGroupByOutputType = {
    id: number
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber: string | null
    ctzIssueDateOrRegDate: string | null
    fatherName: string | null
    grandfatherName: string | null
    contact: string | null
    address: string | null
    remarks: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName: string | null
    bankAccount: string | null
    _count: ShareholderCountAggregateOutputType | null
    _avg: ShareholderAvgAggregateOutputType | null
    _sum: ShareholderSumAggregateOutputType | null
    _min: ShareholderMinAggregateOutputType | null
    _max: ShareholderMaxAggregateOutputType | null
  }

  type GetShareholderGroupByPayload<T extends ShareholderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareholderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareholderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareholderGroupByOutputType[P]>
            : GetScalarType<T[P], ShareholderGroupByOutputType[P]>
        }
      >
    >


  export type ShareholderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    number?: boolean
    ctzOrRegNumber?: boolean
    ctzIssueDateOrRegDate?: boolean
    fatherName?: boolean
    grandfatherName?: boolean
    contact?: boolean
    address?: boolean
    remarks?: boolean
    dividendBalance?: boolean
    ownedUnitsOfShare?: boolean
    wacc?: boolean
    bankName?: boolean
    bankAccount?: boolean
    dividend?: boolean | Shareholder$dividendArgs<ExtArgs>
    share?: boolean | Shareholder$shareArgs<ExtArgs>
    shareHistory?: boolean | Shareholder$shareHistoryArgs<ExtArgs>
    transferredShareHistory?: boolean | Shareholder$transferredShareHistoryArgs<ExtArgs>
    receivedShareHistory?: boolean | Shareholder$receivedShareHistoryArgs<ExtArgs>
    waccHistory?: boolean | Shareholder$waccHistoryArgs<ExtArgs>
    _count?: boolean | ShareholderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareholder"]>

  export type ShareholderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    number?: boolean
    ctzOrRegNumber?: boolean
    ctzIssueDateOrRegDate?: boolean
    fatherName?: boolean
    grandfatherName?: boolean
    contact?: boolean
    address?: boolean
    remarks?: boolean
    dividendBalance?: boolean
    ownedUnitsOfShare?: boolean
    wacc?: boolean
    bankName?: boolean
    bankAccount?: boolean
  }, ExtArgs["result"]["shareholder"]>

  export type ShareholderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    number?: boolean
    ctzOrRegNumber?: boolean
    ctzIssueDateOrRegDate?: boolean
    fatherName?: boolean
    grandfatherName?: boolean
    contact?: boolean
    address?: boolean
    remarks?: boolean
    dividendBalance?: boolean
    ownedUnitsOfShare?: boolean
    wacc?: boolean
    bankName?: boolean
    bankAccount?: boolean
  }, ExtArgs["result"]["shareholder"]>

  export type ShareholderSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    number?: boolean
    ctzOrRegNumber?: boolean
    ctzIssueDateOrRegDate?: boolean
    fatherName?: boolean
    grandfatherName?: boolean
    contact?: boolean
    address?: boolean
    remarks?: boolean
    dividendBalance?: boolean
    ownedUnitsOfShare?: boolean
    wacc?: boolean
    bankName?: boolean
    bankAccount?: boolean
  }

  export type ShareholderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "number" | "ctzOrRegNumber" | "ctzIssueDateOrRegDate" | "fatherName" | "grandfatherName" | "contact" | "address" | "remarks" | "dividendBalance" | "ownedUnitsOfShare" | "wacc" | "bankName" | "bankAccount", ExtArgs["result"]["shareholder"]>
  export type ShareholderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dividend?: boolean | Shareholder$dividendArgs<ExtArgs>
    share?: boolean | Shareholder$shareArgs<ExtArgs>
    shareHistory?: boolean | Shareholder$shareHistoryArgs<ExtArgs>
    transferredShareHistory?: boolean | Shareholder$transferredShareHistoryArgs<ExtArgs>
    receivedShareHistory?: boolean | Shareholder$receivedShareHistoryArgs<ExtArgs>
    waccHistory?: boolean | Shareholder$waccHistoryArgs<ExtArgs>
    _count?: boolean | ShareholderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShareholderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShareholderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShareholderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shareholder"
    objects: {
      dividend: Prisma.$DividendPayload<ExtArgs>[]
      share: Prisma.$SharePayload<ExtArgs>[]
      shareHistory: Prisma.$ShareHistoryPayload<ExtArgs>[]
      transferredShareHistory: Prisma.$ShareTransferHistoryPayload<ExtArgs>[]
      receivedShareHistory: Prisma.$ShareTransferHistoryPayload<ExtArgs>[]
      waccHistory: Prisma.$WaccHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.ShareholderType
      number: number
      ctzOrRegNumber: string | null
      ctzIssueDateOrRegDate: string | null
      fatherName: string | null
      grandfatherName: string | null
      contact: string | null
      address: string | null
      remarks: string | null
      dividendBalance: number
      ownedUnitsOfShare: number
      wacc: number
      bankName: string | null
      bankAccount: string | null
    }, ExtArgs["result"]["shareholder"]>
    composites: {}
  }

  type ShareholderGetPayload<S extends boolean | null | undefined | ShareholderDefaultArgs> = $Result.GetResult<Prisma.$ShareholderPayload, S>

  type ShareholderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareholderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareholderCountAggregateInputType | true
    }

  export interface ShareholderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shareholder'], meta: { name: 'Shareholder' } }
    /**
     * Find zero or one Shareholder that matches the filter.
     * @param {ShareholderFindUniqueArgs} args - Arguments to find a Shareholder
     * @example
     * // Get one Shareholder
     * const shareholder = await prisma.shareholder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareholderFindUniqueArgs>(args: SelectSubset<T, ShareholderFindUniqueArgs<ExtArgs>>): Prisma__ShareholderClient<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shareholder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareholderFindUniqueOrThrowArgs} args - Arguments to find a Shareholder
     * @example
     * // Get one Shareholder
     * const shareholder = await prisma.shareholder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareholderFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareholderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareholderClient<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shareholder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareholderFindFirstArgs} args - Arguments to find a Shareholder
     * @example
     * // Get one Shareholder
     * const shareholder = await prisma.shareholder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareholderFindFirstArgs>(args?: SelectSubset<T, ShareholderFindFirstArgs<ExtArgs>>): Prisma__ShareholderClient<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shareholder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareholderFindFirstOrThrowArgs} args - Arguments to find a Shareholder
     * @example
     * // Get one Shareholder
     * const shareholder = await prisma.shareholder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareholderFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareholderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareholderClient<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shareholders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareholderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shareholders
     * const shareholders = await prisma.shareholder.findMany()
     * 
     * // Get first 10 Shareholders
     * const shareholders = await prisma.shareholder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareholderWithIdOnly = await prisma.shareholder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareholderFindManyArgs>(args?: SelectSubset<T, ShareholderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shareholder.
     * @param {ShareholderCreateArgs} args - Arguments to create a Shareholder.
     * @example
     * // Create one Shareholder
     * const Shareholder = await prisma.shareholder.create({
     *   data: {
     *     // ... data to create a Shareholder
     *   }
     * })
     * 
     */
    create<T extends ShareholderCreateArgs>(args: SelectSubset<T, ShareholderCreateArgs<ExtArgs>>): Prisma__ShareholderClient<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shareholders.
     * @param {ShareholderCreateManyArgs} args - Arguments to create many Shareholders.
     * @example
     * // Create many Shareholders
     * const shareholder = await prisma.shareholder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareholderCreateManyArgs>(args?: SelectSubset<T, ShareholderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shareholders and returns the data saved in the database.
     * @param {ShareholderCreateManyAndReturnArgs} args - Arguments to create many Shareholders.
     * @example
     * // Create many Shareholders
     * const shareholder = await prisma.shareholder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shareholders and only return the `id`
     * const shareholderWithIdOnly = await prisma.shareholder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareholderCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareholderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shareholder.
     * @param {ShareholderDeleteArgs} args - Arguments to delete one Shareholder.
     * @example
     * // Delete one Shareholder
     * const Shareholder = await prisma.shareholder.delete({
     *   where: {
     *     // ... filter to delete one Shareholder
     *   }
     * })
     * 
     */
    delete<T extends ShareholderDeleteArgs>(args: SelectSubset<T, ShareholderDeleteArgs<ExtArgs>>): Prisma__ShareholderClient<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shareholder.
     * @param {ShareholderUpdateArgs} args - Arguments to update one Shareholder.
     * @example
     * // Update one Shareholder
     * const shareholder = await prisma.shareholder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareholderUpdateArgs>(args: SelectSubset<T, ShareholderUpdateArgs<ExtArgs>>): Prisma__ShareholderClient<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shareholders.
     * @param {ShareholderDeleteManyArgs} args - Arguments to filter Shareholders to delete.
     * @example
     * // Delete a few Shareholders
     * const { count } = await prisma.shareholder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareholderDeleteManyArgs>(args?: SelectSubset<T, ShareholderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shareholders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareholderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shareholders
     * const shareholder = await prisma.shareholder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareholderUpdateManyArgs>(args: SelectSubset<T, ShareholderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shareholders and returns the data updated in the database.
     * @param {ShareholderUpdateManyAndReturnArgs} args - Arguments to update many Shareholders.
     * @example
     * // Update many Shareholders
     * const shareholder = await prisma.shareholder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shareholders and only return the `id`
     * const shareholderWithIdOnly = await prisma.shareholder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareholderUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareholderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shareholder.
     * @param {ShareholderUpsertArgs} args - Arguments to update or create a Shareholder.
     * @example
     * // Update or create a Shareholder
     * const shareholder = await prisma.shareholder.upsert({
     *   create: {
     *     // ... data to create a Shareholder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shareholder we want to update
     *   }
     * })
     */
    upsert<T extends ShareholderUpsertArgs>(args: SelectSubset<T, ShareholderUpsertArgs<ExtArgs>>): Prisma__ShareholderClient<$Result.GetResult<Prisma.$ShareholderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shareholders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareholderCountArgs} args - Arguments to filter Shareholders to count.
     * @example
     * // Count the number of Shareholders
     * const count = await prisma.shareholder.count({
     *   where: {
     *     // ... the filter for the Shareholders we want to count
     *   }
     * })
    **/
    count<T extends ShareholderCountArgs>(
      args?: Subset<T, ShareholderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareholderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shareholder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareholderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShareholderAggregateArgs>(args: Subset<T, ShareholderAggregateArgs>): Prisma.PrismaPromise<GetShareholderAggregateType<T>>

    /**
     * Group by Shareholder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareholderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShareholderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareholderGroupByArgs['orderBy'] }
        : { orderBy?: ShareholderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShareholderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareholderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shareholder model
   */
  readonly fields: ShareholderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shareholder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareholderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dividend<T extends Shareholder$dividendArgs<ExtArgs> = {}>(args?: Subset<T, Shareholder$dividendArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DividendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    share<T extends Shareholder$shareArgs<ExtArgs> = {}>(args?: Subset<T, Shareholder$shareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shareHistory<T extends Shareholder$shareHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Shareholder$shareHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transferredShareHistory<T extends Shareholder$transferredShareHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Shareholder$transferredShareHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareTransferHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedShareHistory<T extends Shareholder$receivedShareHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Shareholder$receivedShareHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareTransferHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waccHistory<T extends Shareholder$waccHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Shareholder$waccHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaccHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shareholder model
   */
  interface ShareholderFieldRefs {
    readonly id: FieldRef<"Shareholder", 'Int'>
    readonly name: FieldRef<"Shareholder", 'String'>
    readonly type: FieldRef<"Shareholder", 'ShareholderType'>
    readonly number: FieldRef<"Shareholder", 'Int'>
    readonly ctzOrRegNumber: FieldRef<"Shareholder", 'String'>
    readonly ctzIssueDateOrRegDate: FieldRef<"Shareholder", 'String'>
    readonly fatherName: FieldRef<"Shareholder", 'String'>
    readonly grandfatherName: FieldRef<"Shareholder", 'String'>
    readonly contact: FieldRef<"Shareholder", 'String'>
    readonly address: FieldRef<"Shareholder", 'String'>
    readonly remarks: FieldRef<"Shareholder", 'String'>
    readonly dividendBalance: FieldRef<"Shareholder", 'Float'>
    readonly ownedUnitsOfShare: FieldRef<"Shareholder", 'Float'>
    readonly wacc: FieldRef<"Shareholder", 'Float'>
    readonly bankName: FieldRef<"Shareholder", 'String'>
    readonly bankAccount: FieldRef<"Shareholder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shareholder findUnique
   */
  export type ShareholderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shareholder
     */
    select?: ShareholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shareholder
     */
    omit?: ShareholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareholderInclude<ExtArgs> | null
    /**
     * Filter, which Shareholder to fetch.
     */
    where: ShareholderWhereUniqueInput
  }

  /**
   * Shareholder findUniqueOrThrow
   */
  export type ShareholderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shareholder
     */
    select?: ShareholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shareholder
     */
    omit?: ShareholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareholderInclude<ExtArgs> | null
    /**
     * Filter, which Shareholder to fetch.
     */
    where: ShareholderWhereUniqueInput
  }

  /**
   * Shareholder findFirst
   */
  export type ShareholderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shareholder
     */
    select?: ShareholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shareholder
     */
    omit?: ShareholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareholderInclude<ExtArgs> | null
    /**
     * Filter, which Shareholder to fetch.
     */
    where?: ShareholderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shareholders to fetch.
     */
    orderBy?: ShareholderOrderByWithRelationInput | ShareholderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shareholders.
     */
    cursor?: ShareholderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shareholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shareholders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shareholders.
     */
    distinct?: ShareholderScalarFieldEnum | ShareholderScalarFieldEnum[]
  }

  /**
   * Shareholder findFirstOrThrow
   */
  export type ShareholderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shareholder
     */
    select?: ShareholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shareholder
     */
    omit?: ShareholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareholderInclude<ExtArgs> | null
    /**
     * Filter, which Shareholder to fetch.
     */
    where?: ShareholderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shareholders to fetch.
     */
    orderBy?: ShareholderOrderByWithRelationInput | ShareholderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shareholders.
     */
    cursor?: ShareholderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shareholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shareholders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shareholders.
     */
    distinct?: ShareholderScalarFieldEnum | ShareholderScalarFieldEnum[]
  }

  /**
   * Shareholder findMany
   */
  export type ShareholderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shareholder
     */
    select?: ShareholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shareholder
     */
    omit?: ShareholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareholderInclude<ExtArgs> | null
    /**
     * Filter, which Shareholders to fetch.
     */
    where?: ShareholderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shareholders to fetch.
     */
    orderBy?: ShareholderOrderByWithRelationInput | ShareholderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shareholders.
     */
    cursor?: ShareholderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shareholders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shareholders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shareholders.
     */
    distinct?: ShareholderScalarFieldEnum | ShareholderScalarFieldEnum[]
  }

  /**
   * Shareholder create
   */
  export type ShareholderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shareholder
     */
    select?: ShareholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shareholder
     */
    omit?: ShareholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareholderInclude<ExtArgs> | null
    /**
     * The data needed to create a Shareholder.
     */
    data: XOR<ShareholderCreateInput, ShareholderUncheckedCreateInput>
  }

  /**
   * Shareholder createMany
   */
  export type ShareholderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shareholders.
     */
    data: ShareholderCreateManyInput | ShareholderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shareholder createManyAndReturn
   */
  export type ShareholderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shareholder
     */
    select?: ShareholderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shareholder
     */
    omit?: ShareholderOmit<ExtArgs> | null
    /**
     * The data used to create many Shareholders.
     */
    data: ShareholderCreateManyInput | ShareholderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shareholder update
   */
  export type ShareholderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shareholder
     */
    select?: ShareholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shareholder
     */
    omit?: ShareholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareholderInclude<ExtArgs> | null
    /**
     * The data needed to update a Shareholder.
     */
    data: XOR<ShareholderUpdateInput, ShareholderUncheckedUpdateInput>
    /**
     * Choose, which Shareholder to update.
     */
    where: ShareholderWhereUniqueInput
  }

  /**
   * Shareholder updateMany
   */
  export type ShareholderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shareholders.
     */
    data: XOR<ShareholderUpdateManyMutationInput, ShareholderUncheckedUpdateManyInput>
    /**
     * Filter which Shareholders to update
     */
    where?: ShareholderWhereInput
    /**
     * Limit how many Shareholders to update.
     */
    limit?: number
  }

  /**
   * Shareholder updateManyAndReturn
   */
  export type ShareholderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shareholder
     */
    select?: ShareholderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shareholder
     */
    omit?: ShareholderOmit<ExtArgs> | null
    /**
     * The data used to update Shareholders.
     */
    data: XOR<ShareholderUpdateManyMutationInput, ShareholderUncheckedUpdateManyInput>
    /**
     * Filter which Shareholders to update
     */
    where?: ShareholderWhereInput
    /**
     * Limit how many Shareholders to update.
     */
    limit?: number
  }

  /**
   * Shareholder upsert
   */
  export type ShareholderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shareholder
     */
    select?: ShareholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shareholder
     */
    omit?: ShareholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareholderInclude<ExtArgs> | null
    /**
     * The filter to search for the Shareholder to update in case it exists.
     */
    where: ShareholderWhereUniqueInput
    /**
     * In case the Shareholder found by the `where` argument doesn't exist, create a new Shareholder with this data.
     */
    create: XOR<ShareholderCreateInput, ShareholderUncheckedCreateInput>
    /**
     * In case the Shareholder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareholderUpdateInput, ShareholderUncheckedUpdateInput>
  }

  /**
   * Shareholder delete
   */
  export type ShareholderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shareholder
     */
    select?: ShareholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shareholder
     */
    omit?: ShareholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareholderInclude<ExtArgs> | null
    /**
     * Filter which Shareholder to delete.
     */
    where: ShareholderWhereUniqueInput
  }

  /**
   * Shareholder deleteMany
   */
  export type ShareholderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shareholders to delete
     */
    where?: ShareholderWhereInput
    /**
     * Limit how many Shareholders to delete.
     */
    limit?: number
  }

  /**
   * Shareholder.dividend
   */
  export type Shareholder$dividendArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dividend
     */
    select?: DividendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dividend
     */
    omit?: DividendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DividendInclude<ExtArgs> | null
    where?: DividendWhereInput
    orderBy?: DividendOrderByWithRelationInput | DividendOrderByWithRelationInput[]
    cursor?: DividendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DividendScalarFieldEnum | DividendScalarFieldEnum[]
  }

  /**
   * Shareholder.share
   */
  export type Shareholder$shareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    where?: ShareWhereInput
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    cursor?: ShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * Shareholder.shareHistory
   */
  export type Shareholder$shareHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareHistory
     */
    select?: ShareHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareHistory
     */
    omit?: ShareHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareHistoryInclude<ExtArgs> | null
    where?: ShareHistoryWhereInput
    orderBy?: ShareHistoryOrderByWithRelationInput | ShareHistoryOrderByWithRelationInput[]
    cursor?: ShareHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareHistoryScalarFieldEnum | ShareHistoryScalarFieldEnum[]
  }

  /**
   * Shareholder.transferredShareHistory
   */
  export type Shareholder$transferredShareHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryInclude<ExtArgs> | null
    where?: ShareTransferHistoryWhereInput
    orderBy?: ShareTransferHistoryOrderByWithRelationInput | ShareTransferHistoryOrderByWithRelationInput[]
    cursor?: ShareTransferHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareTransferHistoryScalarFieldEnum | ShareTransferHistoryScalarFieldEnum[]
  }

  /**
   * Shareholder.receivedShareHistory
   */
  export type Shareholder$receivedShareHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareTransferHistory
     */
    select?: ShareTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareTransferHistory
     */
    omit?: ShareTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTransferHistoryInclude<ExtArgs> | null
    where?: ShareTransferHistoryWhereInput
    orderBy?: ShareTransferHistoryOrderByWithRelationInput | ShareTransferHistoryOrderByWithRelationInput[]
    cursor?: ShareTransferHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareTransferHistoryScalarFieldEnum | ShareTransferHistoryScalarFieldEnum[]
  }

  /**
   * Shareholder.waccHistory
   */
  export type Shareholder$waccHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaccHistory
     */
    select?: WaccHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaccHistory
     */
    omit?: WaccHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaccHistoryInclude<ExtArgs> | null
    where?: WaccHistoryWhereInput
    orderBy?: WaccHistoryOrderByWithRelationInput | WaccHistoryOrderByWithRelationInput[]
    cursor?: WaccHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaccHistoryScalarFieldEnum | WaccHistoryScalarFieldEnum[]
  }

  /**
   * Shareholder without action
   */
  export type ShareholderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shareholder
     */
    select?: ShareholderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shareholder
     */
    omit?: ShareholderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareholderInclude<ExtArgs> | null
  }


  /**
   * Model Security
   */

  export type AggregateSecurity = {
    _count: SecurityCountAggregateOutputType | null
    _avg: SecurityAvgAggregateOutputType | null
    _sum: SecuritySumAggregateOutputType | null
    _min: SecurityMinAggregateOutputType | null
    _max: SecurityMaxAggregateOutputType | null
  }

  export type SecurityAvgAggregateOutputType = {
    id: number | null
  }

  export type SecuritySumAggregateOutputType = {
    id: number | null
  }

  export type SecurityMinAggregateOutputType = {
    id: number | null
    name: string | null
    shortName: string | null
    securityClassification: $Enums.SecurityClassification | null
  }

  export type SecurityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    shortName: string | null
    securityClassification: $Enums.SecurityClassification | null
  }

  export type SecurityCountAggregateOutputType = {
    id: number
    name: number
    shortName: number
    securityClassification: number
    _all: number
  }


  export type SecurityAvgAggregateInputType = {
    id?: true
  }

  export type SecuritySumAggregateInputType = {
    id?: true
  }

  export type SecurityMinAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    securityClassification?: true
  }

  export type SecurityMaxAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    securityClassification?: true
  }

  export type SecurityCountAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    securityClassification?: true
    _all?: true
  }

  export type SecurityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Security to aggregate.
     */
    where?: SecurityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Securities to fetch.
     */
    orderBy?: SecurityOrderByWithRelationInput | SecurityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Securities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Securities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Securities
    **/
    _count?: true | SecurityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecurityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecuritySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityMaxAggregateInputType
  }

  export type GetSecurityAggregateType<T extends SecurityAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurity[P]>
      : GetScalarType<T[P], AggregateSecurity[P]>
  }




  export type SecurityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityWhereInput
    orderBy?: SecurityOrderByWithAggregationInput | SecurityOrderByWithAggregationInput[]
    by: SecurityScalarFieldEnum[] | SecurityScalarFieldEnum
    having?: SecurityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityCountAggregateInputType | true
    _avg?: SecurityAvgAggregateInputType
    _sum?: SecuritySumAggregateInputType
    _min?: SecurityMinAggregateInputType
    _max?: SecurityMaxAggregateInputType
  }

  export type SecurityGroupByOutputType = {
    id: number
    name: string
    shortName: string
    securityClassification: $Enums.SecurityClassification
    _count: SecurityCountAggregateOutputType | null
    _avg: SecurityAvgAggregateOutputType | null
    _sum: SecuritySumAggregateOutputType | null
    _min: SecurityMinAggregateOutputType | null
    _max: SecurityMaxAggregateOutputType | null
  }

  type GetSecurityGroupByPayload<T extends SecurityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityGroupByOutputType[P]>
        }
      >
    >


  export type SecuritySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    securityClassification?: boolean
    securityTransactionDetail?: boolean | Security$securityTransactionDetailArgs<ExtArgs>
    _count?: boolean | SecurityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["security"]>

  export type SecuritySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    securityClassification?: boolean
  }, ExtArgs["result"]["security"]>

  export type SecuritySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    securityClassification?: boolean
  }, ExtArgs["result"]["security"]>

  export type SecuritySelectScalar = {
    id?: boolean
    name?: boolean
    shortName?: boolean
    securityClassification?: boolean
  }

  export type SecurityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "shortName" | "securityClassification", ExtArgs["result"]["security"]>
  export type SecurityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    securityTransactionDetail?: boolean | Security$securityTransactionDetailArgs<ExtArgs>
    _count?: boolean | SecurityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SecurityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SecurityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SecurityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Security"
    objects: {
      securityTransactionDetail: Prisma.$SecurityTransactionDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      shortName: string
      securityClassification: $Enums.SecurityClassification
    }, ExtArgs["result"]["security"]>
    composites: {}
  }

  type SecurityGetPayload<S extends boolean | null | undefined | SecurityDefaultArgs> = $Result.GetResult<Prisma.$SecurityPayload, S>

  type SecurityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityCountAggregateInputType | true
    }

  export interface SecurityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Security'], meta: { name: 'Security' } }
    /**
     * Find zero or one Security that matches the filter.
     * @param {SecurityFindUniqueArgs} args - Arguments to find a Security
     * @example
     * // Get one Security
     * const security = await prisma.security.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityFindUniqueArgs>(args: SelectSubset<T, SecurityFindUniqueArgs<ExtArgs>>): Prisma__SecurityClient<$Result.GetResult<Prisma.$SecurityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Security that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityFindUniqueOrThrowArgs} args - Arguments to find a Security
     * @example
     * // Get one Security
     * const security = await prisma.security.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityClient<$Result.GetResult<Prisma.$SecurityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Security that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityFindFirstArgs} args - Arguments to find a Security
     * @example
     * // Get one Security
     * const security = await prisma.security.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityFindFirstArgs>(args?: SelectSubset<T, SecurityFindFirstArgs<ExtArgs>>): Prisma__SecurityClient<$Result.GetResult<Prisma.$SecurityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Security that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityFindFirstOrThrowArgs} args - Arguments to find a Security
     * @example
     * // Get one Security
     * const security = await prisma.security.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityClient<$Result.GetResult<Prisma.$SecurityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Securities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Securities
     * const securities = await prisma.security.findMany()
     * 
     * // Get first 10 Securities
     * const securities = await prisma.security.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityWithIdOnly = await prisma.security.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityFindManyArgs>(args?: SelectSubset<T, SecurityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Security.
     * @param {SecurityCreateArgs} args - Arguments to create a Security.
     * @example
     * // Create one Security
     * const Security = await prisma.security.create({
     *   data: {
     *     // ... data to create a Security
     *   }
     * })
     * 
     */
    create<T extends SecurityCreateArgs>(args: SelectSubset<T, SecurityCreateArgs<ExtArgs>>): Prisma__SecurityClient<$Result.GetResult<Prisma.$SecurityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Securities.
     * @param {SecurityCreateManyArgs} args - Arguments to create many Securities.
     * @example
     * // Create many Securities
     * const security = await prisma.security.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityCreateManyArgs>(args?: SelectSubset<T, SecurityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Securities and returns the data saved in the database.
     * @param {SecurityCreateManyAndReturnArgs} args - Arguments to create many Securities.
     * @example
     * // Create many Securities
     * const security = await prisma.security.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Securities and only return the `id`
     * const securityWithIdOnly = await prisma.security.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Security.
     * @param {SecurityDeleteArgs} args - Arguments to delete one Security.
     * @example
     * // Delete one Security
     * const Security = await prisma.security.delete({
     *   where: {
     *     // ... filter to delete one Security
     *   }
     * })
     * 
     */
    delete<T extends SecurityDeleteArgs>(args: SelectSubset<T, SecurityDeleteArgs<ExtArgs>>): Prisma__SecurityClient<$Result.GetResult<Prisma.$SecurityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Security.
     * @param {SecurityUpdateArgs} args - Arguments to update one Security.
     * @example
     * // Update one Security
     * const security = await prisma.security.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityUpdateArgs>(args: SelectSubset<T, SecurityUpdateArgs<ExtArgs>>): Prisma__SecurityClient<$Result.GetResult<Prisma.$SecurityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Securities.
     * @param {SecurityDeleteManyArgs} args - Arguments to filter Securities to delete.
     * @example
     * // Delete a few Securities
     * const { count } = await prisma.security.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityDeleteManyArgs>(args?: SelectSubset<T, SecurityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Securities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Securities
     * const security = await prisma.security.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityUpdateManyArgs>(args: SelectSubset<T, SecurityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Securities and returns the data updated in the database.
     * @param {SecurityUpdateManyAndReturnArgs} args - Arguments to update many Securities.
     * @example
     * // Update many Securities
     * const security = await prisma.security.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Securities and only return the `id`
     * const securityWithIdOnly = await prisma.security.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecurityUpdateManyAndReturnArgs>(args: SelectSubset<T, SecurityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Security.
     * @param {SecurityUpsertArgs} args - Arguments to update or create a Security.
     * @example
     * // Update or create a Security
     * const security = await prisma.security.upsert({
     *   create: {
     *     // ... data to create a Security
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Security we want to update
     *   }
     * })
     */
    upsert<T extends SecurityUpsertArgs>(args: SelectSubset<T, SecurityUpsertArgs<ExtArgs>>): Prisma__SecurityClient<$Result.GetResult<Prisma.$SecurityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Securities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityCountArgs} args - Arguments to filter Securities to count.
     * @example
     * // Count the number of Securities
     * const count = await prisma.security.count({
     *   where: {
     *     // ... the filter for the Securities we want to count
     *   }
     * })
    **/
    count<T extends SecurityCountArgs>(
      args?: Subset<T, SecurityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Security.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecurityAggregateArgs>(args: Subset<T, SecurityAggregateArgs>): Prisma.PrismaPromise<GetSecurityAggregateType<T>>

    /**
     * Group by Security.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecurityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityGroupByArgs['orderBy'] }
        : { orderBy?: SecurityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecurityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Security model
   */
  readonly fields: SecurityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Security.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    securityTransactionDetail<T extends Security$securityTransactionDetailArgs<ExtArgs> = {}>(args?: Subset<T, Security$securityTransactionDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityTransactionDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Security model
   */
  interface SecurityFieldRefs {
    readonly id: FieldRef<"Security", 'Int'>
    readonly name: FieldRef<"Security", 'String'>
    readonly shortName: FieldRef<"Security", 'String'>
    readonly securityClassification: FieldRef<"Security", 'SecurityClassification'>
  }
    

  // Custom InputTypes
  /**
   * Security findUnique
   */
  export type SecurityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Security
     */
    select?: SecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Security
     */
    omit?: SecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityInclude<ExtArgs> | null
    /**
     * Filter, which Security to fetch.
     */
    where: SecurityWhereUniqueInput
  }

  /**
   * Security findUniqueOrThrow
   */
  export type SecurityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Security
     */
    select?: SecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Security
     */
    omit?: SecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityInclude<ExtArgs> | null
    /**
     * Filter, which Security to fetch.
     */
    where: SecurityWhereUniqueInput
  }

  /**
   * Security findFirst
   */
  export type SecurityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Security
     */
    select?: SecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Security
     */
    omit?: SecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityInclude<ExtArgs> | null
    /**
     * Filter, which Security to fetch.
     */
    where?: SecurityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Securities to fetch.
     */
    orderBy?: SecurityOrderByWithRelationInput | SecurityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Securities.
     */
    cursor?: SecurityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Securities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Securities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Securities.
     */
    distinct?: SecurityScalarFieldEnum | SecurityScalarFieldEnum[]
  }

  /**
   * Security findFirstOrThrow
   */
  export type SecurityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Security
     */
    select?: SecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Security
     */
    omit?: SecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityInclude<ExtArgs> | null
    /**
     * Filter, which Security to fetch.
     */
    where?: SecurityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Securities to fetch.
     */
    orderBy?: SecurityOrderByWithRelationInput | SecurityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Securities.
     */
    cursor?: SecurityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Securities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Securities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Securities.
     */
    distinct?: SecurityScalarFieldEnum | SecurityScalarFieldEnum[]
  }

  /**
   * Security findMany
   */
  export type SecurityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Security
     */
    select?: SecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Security
     */
    omit?: SecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityInclude<ExtArgs> | null
    /**
     * Filter, which Securities to fetch.
     */
    where?: SecurityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Securities to fetch.
     */
    orderBy?: SecurityOrderByWithRelationInput | SecurityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Securities.
     */
    cursor?: SecurityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Securities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Securities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Securities.
     */
    distinct?: SecurityScalarFieldEnum | SecurityScalarFieldEnum[]
  }

  /**
   * Security create
   */
  export type SecurityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Security
     */
    select?: SecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Security
     */
    omit?: SecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityInclude<ExtArgs> | null
    /**
     * The data needed to create a Security.
     */
    data: XOR<SecurityCreateInput, SecurityUncheckedCreateInput>
  }

  /**
   * Security createMany
   */
  export type SecurityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Securities.
     */
    data: SecurityCreateManyInput | SecurityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Security createManyAndReturn
   */
  export type SecurityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Security
     */
    select?: SecuritySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Security
     */
    omit?: SecurityOmit<ExtArgs> | null
    /**
     * The data used to create many Securities.
     */
    data: SecurityCreateManyInput | SecurityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Security update
   */
  export type SecurityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Security
     */
    select?: SecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Security
     */
    omit?: SecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityInclude<ExtArgs> | null
    /**
     * The data needed to update a Security.
     */
    data: XOR<SecurityUpdateInput, SecurityUncheckedUpdateInput>
    /**
     * Choose, which Security to update.
     */
    where: SecurityWhereUniqueInput
  }

  /**
   * Security updateMany
   */
  export type SecurityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Securities.
     */
    data: XOR<SecurityUpdateManyMutationInput, SecurityUncheckedUpdateManyInput>
    /**
     * Filter which Securities to update
     */
    where?: SecurityWhereInput
    /**
     * Limit how many Securities to update.
     */
    limit?: number
  }

  /**
   * Security updateManyAndReturn
   */
  export type SecurityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Security
     */
    select?: SecuritySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Security
     */
    omit?: SecurityOmit<ExtArgs> | null
    /**
     * The data used to update Securities.
     */
    data: XOR<SecurityUpdateManyMutationInput, SecurityUncheckedUpdateManyInput>
    /**
     * Filter which Securities to update
     */
    where?: SecurityWhereInput
    /**
     * Limit how many Securities to update.
     */
    limit?: number
  }

  /**
   * Security upsert
   */
  export type SecurityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Security
     */
    select?: SecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Security
     */
    omit?: SecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityInclude<ExtArgs> | null
    /**
     * The filter to search for the Security to update in case it exists.
     */
    where: SecurityWhereUniqueInput
    /**
     * In case the Security found by the `where` argument doesn't exist, create a new Security with this data.
     */
    create: XOR<SecurityCreateInput, SecurityUncheckedCreateInput>
    /**
     * In case the Security was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityUpdateInput, SecurityUncheckedUpdateInput>
  }

  /**
   * Security delete
   */
  export type SecurityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Security
     */
    select?: SecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Security
     */
    omit?: SecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityInclude<ExtArgs> | null
    /**
     * Filter which Security to delete.
     */
    where: SecurityWhereUniqueInput
  }

  /**
   * Security deleteMany
   */
  export type SecurityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Securities to delete
     */
    where?: SecurityWhereInput
    /**
     * Limit how many Securities to delete.
     */
    limit?: number
  }

  /**
   * Security.securityTransactionDetail
   */
  export type Security$securityTransactionDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionDetail
     */
    select?: SecurityTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransactionDetail
     */
    omit?: SecurityTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionDetailInclude<ExtArgs> | null
    where?: SecurityTransactionDetailWhereInput
    orderBy?: SecurityTransactionDetailOrderByWithRelationInput | SecurityTransactionDetailOrderByWithRelationInput[]
    cursor?: SecurityTransactionDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SecurityTransactionDetailScalarFieldEnum | SecurityTransactionDetailScalarFieldEnum[]
  }

  /**
   * Security without action
   */
  export type SecurityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Security
     */
    select?: SecuritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Security
     */
    omit?: SecurityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityInclude<ExtArgs> | null
  }


  /**
   * Model SecurityTransaction
   */

  export type AggregateSecurityTransaction = {
    _count: SecurityTransactionCountAggregateOutputType | null
    _avg: SecurityTransactionAvgAggregateOutputType | null
    _sum: SecurityTransactionSumAggregateOutputType | null
    _min: SecurityTransactionMinAggregateOutputType | null
    _max: SecurityTransactionMaxAggregateOutputType | null
  }

  export type SecurityTransactionAvgAggregateOutputType = {
    id: number | null
  }

  export type SecurityTransactionSumAggregateOutputType = {
    id: number | null
  }

  export type SecurityTransactionMinAggregateOutputType = {
    id: number | null
    transactionDate: string | null
    entryDate: Date | null
  }

  export type SecurityTransactionMaxAggregateOutputType = {
    id: number | null
    transactionDate: string | null
    entryDate: Date | null
  }

  export type SecurityTransactionCountAggregateOutputType = {
    id: number
    transactionDate: number
    entryDate: number
    _all: number
  }


  export type SecurityTransactionAvgAggregateInputType = {
    id?: true
  }

  export type SecurityTransactionSumAggregateInputType = {
    id?: true
  }

  export type SecurityTransactionMinAggregateInputType = {
    id?: true
    transactionDate?: true
    entryDate?: true
  }

  export type SecurityTransactionMaxAggregateInputType = {
    id?: true
    transactionDate?: true
    entryDate?: true
  }

  export type SecurityTransactionCountAggregateInputType = {
    id?: true
    transactionDate?: true
    entryDate?: true
    _all?: true
  }

  export type SecurityTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityTransaction to aggregate.
     */
    where?: SecurityTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityTransactions to fetch.
     */
    orderBy?: SecurityTransactionOrderByWithRelationInput | SecurityTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityTransactions
    **/
    _count?: true | SecurityTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecurityTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecurityTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityTransactionMaxAggregateInputType
  }

  export type GetSecurityTransactionAggregateType<T extends SecurityTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityTransaction[P]>
      : GetScalarType<T[P], AggregateSecurityTransaction[P]>
  }




  export type SecurityTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityTransactionWhereInput
    orderBy?: SecurityTransactionOrderByWithAggregationInput | SecurityTransactionOrderByWithAggregationInput[]
    by: SecurityTransactionScalarFieldEnum[] | SecurityTransactionScalarFieldEnum
    having?: SecurityTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityTransactionCountAggregateInputType | true
    _avg?: SecurityTransactionAvgAggregateInputType
    _sum?: SecurityTransactionSumAggregateInputType
    _min?: SecurityTransactionMinAggregateInputType
    _max?: SecurityTransactionMaxAggregateInputType
  }

  export type SecurityTransactionGroupByOutputType = {
    id: number
    transactionDate: string
    entryDate: Date
    _count: SecurityTransactionCountAggregateOutputType | null
    _avg: SecurityTransactionAvgAggregateOutputType | null
    _sum: SecurityTransactionSumAggregateOutputType | null
    _min: SecurityTransactionMinAggregateOutputType | null
    _max: SecurityTransactionMaxAggregateOutputType | null
  }

  type GetSecurityTransactionGroupByPayload<T extends SecurityTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityTransactionGroupByOutputType[P]>
        }
      >
    >


  export type SecurityTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionDate?: boolean
    entryDate?: boolean
    securityTransactionDetail?: boolean | SecurityTransaction$securityTransactionDetailArgs<ExtArgs>
    _count?: boolean | SecurityTransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityTransaction"]>

  export type SecurityTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionDate?: boolean
    entryDate?: boolean
  }, ExtArgs["result"]["securityTransaction"]>

  export type SecurityTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionDate?: boolean
    entryDate?: boolean
  }, ExtArgs["result"]["securityTransaction"]>

  export type SecurityTransactionSelectScalar = {
    id?: boolean
    transactionDate?: boolean
    entryDate?: boolean
  }

  export type SecurityTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionDate" | "entryDate", ExtArgs["result"]["securityTransaction"]>
  export type SecurityTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    securityTransactionDetail?: boolean | SecurityTransaction$securityTransactionDetailArgs<ExtArgs>
    _count?: boolean | SecurityTransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SecurityTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SecurityTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SecurityTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityTransaction"
    objects: {
      securityTransactionDetail: Prisma.$SecurityTransactionDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transactionDate: string
      entryDate: Date
    }, ExtArgs["result"]["securityTransaction"]>
    composites: {}
  }

  type SecurityTransactionGetPayload<S extends boolean | null | undefined | SecurityTransactionDefaultArgs> = $Result.GetResult<Prisma.$SecurityTransactionPayload, S>

  type SecurityTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityTransactionCountAggregateInputType | true
    }

  export interface SecurityTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityTransaction'], meta: { name: 'SecurityTransaction' } }
    /**
     * Find zero or one SecurityTransaction that matches the filter.
     * @param {SecurityTransactionFindUniqueArgs} args - Arguments to find a SecurityTransaction
     * @example
     * // Get one SecurityTransaction
     * const securityTransaction = await prisma.securityTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityTransactionFindUniqueArgs>(args: SelectSubset<T, SecurityTransactionFindUniqueArgs<ExtArgs>>): Prisma__SecurityTransactionClient<$Result.GetResult<Prisma.$SecurityTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecurityTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityTransactionFindUniqueOrThrowArgs} args - Arguments to find a SecurityTransaction
     * @example
     * // Get one SecurityTransaction
     * const securityTransaction = await prisma.securityTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityTransactionClient<$Result.GetResult<Prisma.$SecurityTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityTransactionFindFirstArgs} args - Arguments to find a SecurityTransaction
     * @example
     * // Get one SecurityTransaction
     * const securityTransaction = await prisma.securityTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityTransactionFindFirstArgs>(args?: SelectSubset<T, SecurityTransactionFindFirstArgs<ExtArgs>>): Prisma__SecurityTransactionClient<$Result.GetResult<Prisma.$SecurityTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityTransactionFindFirstOrThrowArgs} args - Arguments to find a SecurityTransaction
     * @example
     * // Get one SecurityTransaction
     * const securityTransaction = await prisma.securityTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityTransactionClient<$Result.GetResult<Prisma.$SecurityTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecurityTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityTransactions
     * const securityTransactions = await prisma.securityTransaction.findMany()
     * 
     * // Get first 10 SecurityTransactions
     * const securityTransactions = await prisma.securityTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityTransactionWithIdOnly = await prisma.securityTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityTransactionFindManyArgs>(args?: SelectSubset<T, SecurityTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecurityTransaction.
     * @param {SecurityTransactionCreateArgs} args - Arguments to create a SecurityTransaction.
     * @example
     * // Create one SecurityTransaction
     * const SecurityTransaction = await prisma.securityTransaction.create({
     *   data: {
     *     // ... data to create a SecurityTransaction
     *   }
     * })
     * 
     */
    create<T extends SecurityTransactionCreateArgs>(args: SelectSubset<T, SecurityTransactionCreateArgs<ExtArgs>>): Prisma__SecurityTransactionClient<$Result.GetResult<Prisma.$SecurityTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecurityTransactions.
     * @param {SecurityTransactionCreateManyArgs} args - Arguments to create many SecurityTransactions.
     * @example
     * // Create many SecurityTransactions
     * const securityTransaction = await prisma.securityTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityTransactionCreateManyArgs>(args?: SelectSubset<T, SecurityTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecurityTransactions and returns the data saved in the database.
     * @param {SecurityTransactionCreateManyAndReturnArgs} args - Arguments to create many SecurityTransactions.
     * @example
     * // Create many SecurityTransactions
     * const securityTransaction = await prisma.securityTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecurityTransactions and only return the `id`
     * const securityTransactionWithIdOnly = await prisma.securityTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecurityTransaction.
     * @param {SecurityTransactionDeleteArgs} args - Arguments to delete one SecurityTransaction.
     * @example
     * // Delete one SecurityTransaction
     * const SecurityTransaction = await prisma.securityTransaction.delete({
     *   where: {
     *     // ... filter to delete one SecurityTransaction
     *   }
     * })
     * 
     */
    delete<T extends SecurityTransactionDeleteArgs>(args: SelectSubset<T, SecurityTransactionDeleteArgs<ExtArgs>>): Prisma__SecurityTransactionClient<$Result.GetResult<Prisma.$SecurityTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecurityTransaction.
     * @param {SecurityTransactionUpdateArgs} args - Arguments to update one SecurityTransaction.
     * @example
     * // Update one SecurityTransaction
     * const securityTransaction = await prisma.securityTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityTransactionUpdateArgs>(args: SelectSubset<T, SecurityTransactionUpdateArgs<ExtArgs>>): Prisma__SecurityTransactionClient<$Result.GetResult<Prisma.$SecurityTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecurityTransactions.
     * @param {SecurityTransactionDeleteManyArgs} args - Arguments to filter SecurityTransactions to delete.
     * @example
     * // Delete a few SecurityTransactions
     * const { count } = await prisma.securityTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityTransactionDeleteManyArgs>(args?: SelectSubset<T, SecurityTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityTransactions
     * const securityTransaction = await prisma.securityTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityTransactionUpdateManyArgs>(args: SelectSubset<T, SecurityTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityTransactions and returns the data updated in the database.
     * @param {SecurityTransactionUpdateManyAndReturnArgs} args - Arguments to update many SecurityTransactions.
     * @example
     * // Update many SecurityTransactions
     * const securityTransaction = await prisma.securityTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecurityTransactions and only return the `id`
     * const securityTransactionWithIdOnly = await prisma.securityTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecurityTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, SecurityTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecurityTransaction.
     * @param {SecurityTransactionUpsertArgs} args - Arguments to update or create a SecurityTransaction.
     * @example
     * // Update or create a SecurityTransaction
     * const securityTransaction = await prisma.securityTransaction.upsert({
     *   create: {
     *     // ... data to create a SecurityTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityTransaction we want to update
     *   }
     * })
     */
    upsert<T extends SecurityTransactionUpsertArgs>(args: SelectSubset<T, SecurityTransactionUpsertArgs<ExtArgs>>): Prisma__SecurityTransactionClient<$Result.GetResult<Prisma.$SecurityTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecurityTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityTransactionCountArgs} args - Arguments to filter SecurityTransactions to count.
     * @example
     * // Count the number of SecurityTransactions
     * const count = await prisma.securityTransaction.count({
     *   where: {
     *     // ... the filter for the SecurityTransactions we want to count
     *   }
     * })
    **/
    count<T extends SecurityTransactionCountArgs>(
      args?: Subset<T, SecurityTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecurityTransactionAggregateArgs>(args: Subset<T, SecurityTransactionAggregateArgs>): Prisma.PrismaPromise<GetSecurityTransactionAggregateType<T>>

    /**
     * Group by SecurityTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecurityTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityTransactionGroupByArgs['orderBy'] }
        : { orderBy?: SecurityTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecurityTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityTransaction model
   */
  readonly fields: SecurityTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    securityTransactionDetail<T extends SecurityTransaction$securityTransactionDetailArgs<ExtArgs> = {}>(args?: Subset<T, SecurityTransaction$securityTransactionDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityTransactionDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecurityTransaction model
   */
  interface SecurityTransactionFieldRefs {
    readonly id: FieldRef<"SecurityTransaction", 'Int'>
    readonly transactionDate: FieldRef<"SecurityTransaction", 'String'>
    readonly entryDate: FieldRef<"SecurityTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecurityTransaction findUnique
   */
  export type SecurityTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransaction
     */
    select?: SecurityTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransaction
     */
    omit?: SecurityTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SecurityTransaction to fetch.
     */
    where: SecurityTransactionWhereUniqueInput
  }

  /**
   * SecurityTransaction findUniqueOrThrow
   */
  export type SecurityTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransaction
     */
    select?: SecurityTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransaction
     */
    omit?: SecurityTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SecurityTransaction to fetch.
     */
    where: SecurityTransactionWhereUniqueInput
  }

  /**
   * SecurityTransaction findFirst
   */
  export type SecurityTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransaction
     */
    select?: SecurityTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransaction
     */
    omit?: SecurityTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SecurityTransaction to fetch.
     */
    where?: SecurityTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityTransactions to fetch.
     */
    orderBy?: SecurityTransactionOrderByWithRelationInput | SecurityTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityTransactions.
     */
    cursor?: SecurityTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityTransactions.
     */
    distinct?: SecurityTransactionScalarFieldEnum | SecurityTransactionScalarFieldEnum[]
  }

  /**
   * SecurityTransaction findFirstOrThrow
   */
  export type SecurityTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransaction
     */
    select?: SecurityTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransaction
     */
    omit?: SecurityTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SecurityTransaction to fetch.
     */
    where?: SecurityTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityTransactions to fetch.
     */
    orderBy?: SecurityTransactionOrderByWithRelationInput | SecurityTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityTransactions.
     */
    cursor?: SecurityTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityTransactions.
     */
    distinct?: SecurityTransactionScalarFieldEnum | SecurityTransactionScalarFieldEnum[]
  }

  /**
   * SecurityTransaction findMany
   */
  export type SecurityTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransaction
     */
    select?: SecurityTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransaction
     */
    omit?: SecurityTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SecurityTransactions to fetch.
     */
    where?: SecurityTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityTransactions to fetch.
     */
    orderBy?: SecurityTransactionOrderByWithRelationInput | SecurityTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityTransactions.
     */
    cursor?: SecurityTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityTransactions.
     */
    distinct?: SecurityTransactionScalarFieldEnum | SecurityTransactionScalarFieldEnum[]
  }

  /**
   * SecurityTransaction create
   */
  export type SecurityTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransaction
     */
    select?: SecurityTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransaction
     */
    omit?: SecurityTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a SecurityTransaction.
     */
    data: XOR<SecurityTransactionCreateInput, SecurityTransactionUncheckedCreateInput>
  }

  /**
   * SecurityTransaction createMany
   */
  export type SecurityTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityTransactions.
     */
    data: SecurityTransactionCreateManyInput | SecurityTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityTransaction createManyAndReturn
   */
  export type SecurityTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransaction
     */
    select?: SecurityTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransaction
     */
    omit?: SecurityTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many SecurityTransactions.
     */
    data: SecurityTransactionCreateManyInput | SecurityTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityTransaction update
   */
  export type SecurityTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransaction
     */
    select?: SecurityTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransaction
     */
    omit?: SecurityTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a SecurityTransaction.
     */
    data: XOR<SecurityTransactionUpdateInput, SecurityTransactionUncheckedUpdateInput>
    /**
     * Choose, which SecurityTransaction to update.
     */
    where: SecurityTransactionWhereUniqueInput
  }

  /**
   * SecurityTransaction updateMany
   */
  export type SecurityTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityTransactions.
     */
    data: XOR<SecurityTransactionUpdateManyMutationInput, SecurityTransactionUncheckedUpdateManyInput>
    /**
     * Filter which SecurityTransactions to update
     */
    where?: SecurityTransactionWhereInput
    /**
     * Limit how many SecurityTransactions to update.
     */
    limit?: number
  }

  /**
   * SecurityTransaction updateManyAndReturn
   */
  export type SecurityTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransaction
     */
    select?: SecurityTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransaction
     */
    omit?: SecurityTransactionOmit<ExtArgs> | null
    /**
     * The data used to update SecurityTransactions.
     */
    data: XOR<SecurityTransactionUpdateManyMutationInput, SecurityTransactionUncheckedUpdateManyInput>
    /**
     * Filter which SecurityTransactions to update
     */
    where?: SecurityTransactionWhereInput
    /**
     * Limit how many SecurityTransactions to update.
     */
    limit?: number
  }

  /**
   * SecurityTransaction upsert
   */
  export type SecurityTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransaction
     */
    select?: SecurityTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransaction
     */
    omit?: SecurityTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the SecurityTransaction to update in case it exists.
     */
    where: SecurityTransactionWhereUniqueInput
    /**
     * In case the SecurityTransaction found by the `where` argument doesn't exist, create a new SecurityTransaction with this data.
     */
    create: XOR<SecurityTransactionCreateInput, SecurityTransactionUncheckedCreateInput>
    /**
     * In case the SecurityTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityTransactionUpdateInput, SecurityTransactionUncheckedUpdateInput>
  }

  /**
   * SecurityTransaction delete
   */
  export type SecurityTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransaction
     */
    select?: SecurityTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransaction
     */
    omit?: SecurityTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionInclude<ExtArgs> | null
    /**
     * Filter which SecurityTransaction to delete.
     */
    where: SecurityTransactionWhereUniqueInput
  }

  /**
   * SecurityTransaction deleteMany
   */
  export type SecurityTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityTransactions to delete
     */
    where?: SecurityTransactionWhereInput
    /**
     * Limit how many SecurityTransactions to delete.
     */
    limit?: number
  }

  /**
   * SecurityTransaction.securityTransactionDetail
   */
  export type SecurityTransaction$securityTransactionDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionDetail
     */
    select?: SecurityTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransactionDetail
     */
    omit?: SecurityTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionDetailInclude<ExtArgs> | null
    where?: SecurityTransactionDetailWhereInput
    orderBy?: SecurityTransactionDetailOrderByWithRelationInput | SecurityTransactionDetailOrderByWithRelationInput[]
    cursor?: SecurityTransactionDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SecurityTransactionDetailScalarFieldEnum | SecurityTransactionDetailScalarFieldEnum[]
  }

  /**
   * SecurityTransaction without action
   */
  export type SecurityTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransaction
     */
    select?: SecurityTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransaction
     */
    omit?: SecurityTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionInclude<ExtArgs> | null
  }


  /**
   * Model SecurityTransactionDetail
   */

  export type AggregateSecurityTransactionDetail = {
    _count: SecurityTransactionDetailCountAggregateOutputType | null
    _avg: SecurityTransactionDetailAvgAggregateOutputType | null
    _sum: SecurityTransactionDetailSumAggregateOutputType | null
    _min: SecurityTransactionDetailMinAggregateOutputType | null
    _max: SecurityTransactionDetailMaxAggregateOutputType | null
  }

  export type SecurityTransactionDetailAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    amount: number | null
    securityId: number | null
    securityTransactionId: number | null
  }

  export type SecurityTransactionDetailSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    amount: number | null
    securityId: number | null
    securityTransactionId: number | null
  }

  export type SecurityTransactionDetailMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    amount: number | null
    securityAdditionNature: $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS: $Enums.SecurityClassificationAsPerNFRS | null
    securityId: number | null
    securityTransactionId: number | null
    remarks: string | null
  }

  export type SecurityTransactionDetailMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    amount: number | null
    securityAdditionNature: $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS: $Enums.SecurityClassificationAsPerNFRS | null
    securityId: number | null
    securityTransactionId: number | null
    remarks: string | null
  }

  export type SecurityTransactionDetailCountAggregateOutputType = {
    id: number
    quantity: number
    price: number
    amount: number
    securityAdditionNature: number
    securityClassificationAsPerNFRS: number
    securityId: number
    securityTransactionId: number
    remarks: number
    _all: number
  }


  export type SecurityTransactionDetailAvgAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    amount?: true
    securityId?: true
    securityTransactionId?: true
  }

  export type SecurityTransactionDetailSumAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    amount?: true
    securityId?: true
    securityTransactionId?: true
  }

  export type SecurityTransactionDetailMinAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    amount?: true
    securityAdditionNature?: true
    securityClassificationAsPerNFRS?: true
    securityId?: true
    securityTransactionId?: true
    remarks?: true
  }

  export type SecurityTransactionDetailMaxAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    amount?: true
    securityAdditionNature?: true
    securityClassificationAsPerNFRS?: true
    securityId?: true
    securityTransactionId?: true
    remarks?: true
  }

  export type SecurityTransactionDetailCountAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    amount?: true
    securityAdditionNature?: true
    securityClassificationAsPerNFRS?: true
    securityId?: true
    securityTransactionId?: true
    remarks?: true
    _all?: true
  }

  export type SecurityTransactionDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityTransactionDetail to aggregate.
     */
    where?: SecurityTransactionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityTransactionDetails to fetch.
     */
    orderBy?: SecurityTransactionDetailOrderByWithRelationInput | SecurityTransactionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityTransactionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityTransactionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityTransactionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityTransactionDetails
    **/
    _count?: true | SecurityTransactionDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecurityTransactionDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecurityTransactionDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityTransactionDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityTransactionDetailMaxAggregateInputType
  }

  export type GetSecurityTransactionDetailAggregateType<T extends SecurityTransactionDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityTransactionDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityTransactionDetail[P]>
      : GetScalarType<T[P], AggregateSecurityTransactionDetail[P]>
  }




  export type SecurityTransactionDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityTransactionDetailWhereInput
    orderBy?: SecurityTransactionDetailOrderByWithAggregationInput | SecurityTransactionDetailOrderByWithAggregationInput[]
    by: SecurityTransactionDetailScalarFieldEnum[] | SecurityTransactionDetailScalarFieldEnum
    having?: SecurityTransactionDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityTransactionDetailCountAggregateInputType | true
    _avg?: SecurityTransactionDetailAvgAggregateInputType
    _sum?: SecurityTransactionDetailSumAggregateInputType
    _min?: SecurityTransactionDetailMinAggregateInputType
    _max?: SecurityTransactionDetailMaxAggregateInputType
  }

  export type SecurityTransactionDetailGroupByOutputType = {
    id: number
    quantity: number
    price: number
    amount: number
    securityAdditionNature: $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS: $Enums.SecurityClassificationAsPerNFRS
    securityId: number
    securityTransactionId: number
    remarks: string | null
    _count: SecurityTransactionDetailCountAggregateOutputType | null
    _avg: SecurityTransactionDetailAvgAggregateOutputType | null
    _sum: SecurityTransactionDetailSumAggregateOutputType | null
    _min: SecurityTransactionDetailMinAggregateOutputType | null
    _max: SecurityTransactionDetailMaxAggregateOutputType | null
  }

  type GetSecurityTransactionDetailGroupByPayload<T extends SecurityTransactionDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityTransactionDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityTransactionDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityTransactionDetailGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityTransactionDetailGroupByOutputType[P]>
        }
      >
    >


  export type SecurityTransactionDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    amount?: boolean
    securityAdditionNature?: boolean
    securityClassificationAsPerNFRS?: boolean
    securityId?: boolean
    securityTransactionId?: boolean
    remarks?: boolean
    security?: boolean | SecurityDefaultArgs<ExtArgs>
    securityTransaction?: boolean | SecurityTransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityTransactionDetail"]>

  export type SecurityTransactionDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    amount?: boolean
    securityAdditionNature?: boolean
    securityClassificationAsPerNFRS?: boolean
    securityId?: boolean
    securityTransactionId?: boolean
    remarks?: boolean
    security?: boolean | SecurityDefaultArgs<ExtArgs>
    securityTransaction?: boolean | SecurityTransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityTransactionDetail"]>

  export type SecurityTransactionDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    amount?: boolean
    securityAdditionNature?: boolean
    securityClassificationAsPerNFRS?: boolean
    securityId?: boolean
    securityTransactionId?: boolean
    remarks?: boolean
    security?: boolean | SecurityDefaultArgs<ExtArgs>
    securityTransaction?: boolean | SecurityTransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityTransactionDetail"]>

  export type SecurityTransactionDetailSelectScalar = {
    id?: boolean
    quantity?: boolean
    price?: boolean
    amount?: boolean
    securityAdditionNature?: boolean
    securityClassificationAsPerNFRS?: boolean
    securityId?: boolean
    securityTransactionId?: boolean
    remarks?: boolean
  }

  export type SecurityTransactionDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "price" | "amount" | "securityAdditionNature" | "securityClassificationAsPerNFRS" | "securityId" | "securityTransactionId" | "remarks", ExtArgs["result"]["securityTransactionDetail"]>
  export type SecurityTransactionDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    security?: boolean | SecurityDefaultArgs<ExtArgs>
    securityTransaction?: boolean | SecurityTransactionDefaultArgs<ExtArgs>
  }
  export type SecurityTransactionDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    security?: boolean | SecurityDefaultArgs<ExtArgs>
    securityTransaction?: boolean | SecurityTransactionDefaultArgs<ExtArgs>
  }
  export type SecurityTransactionDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    security?: boolean | SecurityDefaultArgs<ExtArgs>
    securityTransaction?: boolean | SecurityTransactionDefaultArgs<ExtArgs>
  }

  export type $SecurityTransactionDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityTransactionDetail"
    objects: {
      security: Prisma.$SecurityPayload<ExtArgs>
      securityTransaction: Prisma.$SecurityTransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      price: number
      amount: number
      securityAdditionNature: $Enums.SecurityAdditionNature | null
      securityClassificationAsPerNFRS: $Enums.SecurityClassificationAsPerNFRS
      securityId: number
      securityTransactionId: number
      remarks: string | null
    }, ExtArgs["result"]["securityTransactionDetail"]>
    composites: {}
  }

  type SecurityTransactionDetailGetPayload<S extends boolean | null | undefined | SecurityTransactionDetailDefaultArgs> = $Result.GetResult<Prisma.$SecurityTransactionDetailPayload, S>

  type SecurityTransactionDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityTransactionDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityTransactionDetailCountAggregateInputType | true
    }

  export interface SecurityTransactionDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityTransactionDetail'], meta: { name: 'SecurityTransactionDetail' } }
    /**
     * Find zero or one SecurityTransactionDetail that matches the filter.
     * @param {SecurityTransactionDetailFindUniqueArgs} args - Arguments to find a SecurityTransactionDetail
     * @example
     * // Get one SecurityTransactionDetail
     * const securityTransactionDetail = await prisma.securityTransactionDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityTransactionDetailFindUniqueArgs>(args: SelectSubset<T, SecurityTransactionDetailFindUniqueArgs<ExtArgs>>): Prisma__SecurityTransactionDetailClient<$Result.GetResult<Prisma.$SecurityTransactionDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecurityTransactionDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityTransactionDetailFindUniqueOrThrowArgs} args - Arguments to find a SecurityTransactionDetail
     * @example
     * // Get one SecurityTransactionDetail
     * const securityTransactionDetail = await prisma.securityTransactionDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityTransactionDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityTransactionDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityTransactionDetailClient<$Result.GetResult<Prisma.$SecurityTransactionDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityTransactionDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityTransactionDetailFindFirstArgs} args - Arguments to find a SecurityTransactionDetail
     * @example
     * // Get one SecurityTransactionDetail
     * const securityTransactionDetail = await prisma.securityTransactionDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityTransactionDetailFindFirstArgs>(args?: SelectSubset<T, SecurityTransactionDetailFindFirstArgs<ExtArgs>>): Prisma__SecurityTransactionDetailClient<$Result.GetResult<Prisma.$SecurityTransactionDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityTransactionDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityTransactionDetailFindFirstOrThrowArgs} args - Arguments to find a SecurityTransactionDetail
     * @example
     * // Get one SecurityTransactionDetail
     * const securityTransactionDetail = await prisma.securityTransactionDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityTransactionDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityTransactionDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityTransactionDetailClient<$Result.GetResult<Prisma.$SecurityTransactionDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecurityTransactionDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityTransactionDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityTransactionDetails
     * const securityTransactionDetails = await prisma.securityTransactionDetail.findMany()
     * 
     * // Get first 10 SecurityTransactionDetails
     * const securityTransactionDetails = await prisma.securityTransactionDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityTransactionDetailWithIdOnly = await prisma.securityTransactionDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityTransactionDetailFindManyArgs>(args?: SelectSubset<T, SecurityTransactionDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityTransactionDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecurityTransactionDetail.
     * @param {SecurityTransactionDetailCreateArgs} args - Arguments to create a SecurityTransactionDetail.
     * @example
     * // Create one SecurityTransactionDetail
     * const SecurityTransactionDetail = await prisma.securityTransactionDetail.create({
     *   data: {
     *     // ... data to create a SecurityTransactionDetail
     *   }
     * })
     * 
     */
    create<T extends SecurityTransactionDetailCreateArgs>(args: SelectSubset<T, SecurityTransactionDetailCreateArgs<ExtArgs>>): Prisma__SecurityTransactionDetailClient<$Result.GetResult<Prisma.$SecurityTransactionDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecurityTransactionDetails.
     * @param {SecurityTransactionDetailCreateManyArgs} args - Arguments to create many SecurityTransactionDetails.
     * @example
     * // Create many SecurityTransactionDetails
     * const securityTransactionDetail = await prisma.securityTransactionDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityTransactionDetailCreateManyArgs>(args?: SelectSubset<T, SecurityTransactionDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecurityTransactionDetails and returns the data saved in the database.
     * @param {SecurityTransactionDetailCreateManyAndReturnArgs} args - Arguments to create many SecurityTransactionDetails.
     * @example
     * // Create many SecurityTransactionDetails
     * const securityTransactionDetail = await prisma.securityTransactionDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecurityTransactionDetails and only return the `id`
     * const securityTransactionDetailWithIdOnly = await prisma.securityTransactionDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityTransactionDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityTransactionDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityTransactionDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecurityTransactionDetail.
     * @param {SecurityTransactionDetailDeleteArgs} args - Arguments to delete one SecurityTransactionDetail.
     * @example
     * // Delete one SecurityTransactionDetail
     * const SecurityTransactionDetail = await prisma.securityTransactionDetail.delete({
     *   where: {
     *     // ... filter to delete one SecurityTransactionDetail
     *   }
     * })
     * 
     */
    delete<T extends SecurityTransactionDetailDeleteArgs>(args: SelectSubset<T, SecurityTransactionDetailDeleteArgs<ExtArgs>>): Prisma__SecurityTransactionDetailClient<$Result.GetResult<Prisma.$SecurityTransactionDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecurityTransactionDetail.
     * @param {SecurityTransactionDetailUpdateArgs} args - Arguments to update one SecurityTransactionDetail.
     * @example
     * // Update one SecurityTransactionDetail
     * const securityTransactionDetail = await prisma.securityTransactionDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityTransactionDetailUpdateArgs>(args: SelectSubset<T, SecurityTransactionDetailUpdateArgs<ExtArgs>>): Prisma__SecurityTransactionDetailClient<$Result.GetResult<Prisma.$SecurityTransactionDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecurityTransactionDetails.
     * @param {SecurityTransactionDetailDeleteManyArgs} args - Arguments to filter SecurityTransactionDetails to delete.
     * @example
     * // Delete a few SecurityTransactionDetails
     * const { count } = await prisma.securityTransactionDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityTransactionDetailDeleteManyArgs>(args?: SelectSubset<T, SecurityTransactionDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityTransactionDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityTransactionDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityTransactionDetails
     * const securityTransactionDetail = await prisma.securityTransactionDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityTransactionDetailUpdateManyArgs>(args: SelectSubset<T, SecurityTransactionDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityTransactionDetails and returns the data updated in the database.
     * @param {SecurityTransactionDetailUpdateManyAndReturnArgs} args - Arguments to update many SecurityTransactionDetails.
     * @example
     * // Update many SecurityTransactionDetails
     * const securityTransactionDetail = await prisma.securityTransactionDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecurityTransactionDetails and only return the `id`
     * const securityTransactionDetailWithIdOnly = await prisma.securityTransactionDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecurityTransactionDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, SecurityTransactionDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityTransactionDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecurityTransactionDetail.
     * @param {SecurityTransactionDetailUpsertArgs} args - Arguments to update or create a SecurityTransactionDetail.
     * @example
     * // Update or create a SecurityTransactionDetail
     * const securityTransactionDetail = await prisma.securityTransactionDetail.upsert({
     *   create: {
     *     // ... data to create a SecurityTransactionDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityTransactionDetail we want to update
     *   }
     * })
     */
    upsert<T extends SecurityTransactionDetailUpsertArgs>(args: SelectSubset<T, SecurityTransactionDetailUpsertArgs<ExtArgs>>): Prisma__SecurityTransactionDetailClient<$Result.GetResult<Prisma.$SecurityTransactionDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecurityTransactionDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityTransactionDetailCountArgs} args - Arguments to filter SecurityTransactionDetails to count.
     * @example
     * // Count the number of SecurityTransactionDetails
     * const count = await prisma.securityTransactionDetail.count({
     *   where: {
     *     // ... the filter for the SecurityTransactionDetails we want to count
     *   }
     * })
    **/
    count<T extends SecurityTransactionDetailCountArgs>(
      args?: Subset<T, SecurityTransactionDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityTransactionDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityTransactionDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityTransactionDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecurityTransactionDetailAggregateArgs>(args: Subset<T, SecurityTransactionDetailAggregateArgs>): Prisma.PrismaPromise<GetSecurityTransactionDetailAggregateType<T>>

    /**
     * Group by SecurityTransactionDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityTransactionDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecurityTransactionDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityTransactionDetailGroupByArgs['orderBy'] }
        : { orderBy?: SecurityTransactionDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecurityTransactionDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityTransactionDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityTransactionDetail model
   */
  readonly fields: SecurityTransactionDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityTransactionDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityTransactionDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    security<T extends SecurityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SecurityDefaultArgs<ExtArgs>>): Prisma__SecurityClient<$Result.GetResult<Prisma.$SecurityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    securityTransaction<T extends SecurityTransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SecurityTransactionDefaultArgs<ExtArgs>>): Prisma__SecurityTransactionClient<$Result.GetResult<Prisma.$SecurityTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecurityTransactionDetail model
   */
  interface SecurityTransactionDetailFieldRefs {
    readonly id: FieldRef<"SecurityTransactionDetail", 'Int'>
    readonly quantity: FieldRef<"SecurityTransactionDetail", 'Float'>
    readonly price: FieldRef<"SecurityTransactionDetail", 'Float'>
    readonly amount: FieldRef<"SecurityTransactionDetail", 'Float'>
    readonly securityAdditionNature: FieldRef<"SecurityTransactionDetail", 'SecurityAdditionNature'>
    readonly securityClassificationAsPerNFRS: FieldRef<"SecurityTransactionDetail", 'SecurityClassificationAsPerNFRS'>
    readonly securityId: FieldRef<"SecurityTransactionDetail", 'Int'>
    readonly securityTransactionId: FieldRef<"SecurityTransactionDetail", 'Int'>
    readonly remarks: FieldRef<"SecurityTransactionDetail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SecurityTransactionDetail findUnique
   */
  export type SecurityTransactionDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionDetail
     */
    select?: SecurityTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransactionDetail
     */
    omit?: SecurityTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which SecurityTransactionDetail to fetch.
     */
    where: SecurityTransactionDetailWhereUniqueInput
  }

  /**
   * SecurityTransactionDetail findUniqueOrThrow
   */
  export type SecurityTransactionDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionDetail
     */
    select?: SecurityTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransactionDetail
     */
    omit?: SecurityTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which SecurityTransactionDetail to fetch.
     */
    where: SecurityTransactionDetailWhereUniqueInput
  }

  /**
   * SecurityTransactionDetail findFirst
   */
  export type SecurityTransactionDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionDetail
     */
    select?: SecurityTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransactionDetail
     */
    omit?: SecurityTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which SecurityTransactionDetail to fetch.
     */
    where?: SecurityTransactionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityTransactionDetails to fetch.
     */
    orderBy?: SecurityTransactionDetailOrderByWithRelationInput | SecurityTransactionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityTransactionDetails.
     */
    cursor?: SecurityTransactionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityTransactionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityTransactionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityTransactionDetails.
     */
    distinct?: SecurityTransactionDetailScalarFieldEnum | SecurityTransactionDetailScalarFieldEnum[]
  }

  /**
   * SecurityTransactionDetail findFirstOrThrow
   */
  export type SecurityTransactionDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionDetail
     */
    select?: SecurityTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransactionDetail
     */
    omit?: SecurityTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which SecurityTransactionDetail to fetch.
     */
    where?: SecurityTransactionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityTransactionDetails to fetch.
     */
    orderBy?: SecurityTransactionDetailOrderByWithRelationInput | SecurityTransactionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityTransactionDetails.
     */
    cursor?: SecurityTransactionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityTransactionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityTransactionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityTransactionDetails.
     */
    distinct?: SecurityTransactionDetailScalarFieldEnum | SecurityTransactionDetailScalarFieldEnum[]
  }

  /**
   * SecurityTransactionDetail findMany
   */
  export type SecurityTransactionDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionDetail
     */
    select?: SecurityTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransactionDetail
     */
    omit?: SecurityTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which SecurityTransactionDetails to fetch.
     */
    where?: SecurityTransactionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityTransactionDetails to fetch.
     */
    orderBy?: SecurityTransactionDetailOrderByWithRelationInput | SecurityTransactionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityTransactionDetails.
     */
    cursor?: SecurityTransactionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityTransactionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityTransactionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityTransactionDetails.
     */
    distinct?: SecurityTransactionDetailScalarFieldEnum | SecurityTransactionDetailScalarFieldEnum[]
  }

  /**
   * SecurityTransactionDetail create
   */
  export type SecurityTransactionDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionDetail
     */
    select?: SecurityTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransactionDetail
     */
    omit?: SecurityTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a SecurityTransactionDetail.
     */
    data: XOR<SecurityTransactionDetailCreateInput, SecurityTransactionDetailUncheckedCreateInput>
  }

  /**
   * SecurityTransactionDetail createMany
   */
  export type SecurityTransactionDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityTransactionDetails.
     */
    data: SecurityTransactionDetailCreateManyInput | SecurityTransactionDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityTransactionDetail createManyAndReturn
   */
  export type SecurityTransactionDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionDetail
     */
    select?: SecurityTransactionDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransactionDetail
     */
    omit?: SecurityTransactionDetailOmit<ExtArgs> | null
    /**
     * The data used to create many SecurityTransactionDetails.
     */
    data: SecurityTransactionDetailCreateManyInput | SecurityTransactionDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityTransactionDetail update
   */
  export type SecurityTransactionDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionDetail
     */
    select?: SecurityTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransactionDetail
     */
    omit?: SecurityTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a SecurityTransactionDetail.
     */
    data: XOR<SecurityTransactionDetailUpdateInput, SecurityTransactionDetailUncheckedUpdateInput>
    /**
     * Choose, which SecurityTransactionDetail to update.
     */
    where: SecurityTransactionDetailWhereUniqueInput
  }

  /**
   * SecurityTransactionDetail updateMany
   */
  export type SecurityTransactionDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityTransactionDetails.
     */
    data: XOR<SecurityTransactionDetailUpdateManyMutationInput, SecurityTransactionDetailUncheckedUpdateManyInput>
    /**
     * Filter which SecurityTransactionDetails to update
     */
    where?: SecurityTransactionDetailWhereInput
    /**
     * Limit how many SecurityTransactionDetails to update.
     */
    limit?: number
  }

  /**
   * SecurityTransactionDetail updateManyAndReturn
   */
  export type SecurityTransactionDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionDetail
     */
    select?: SecurityTransactionDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransactionDetail
     */
    omit?: SecurityTransactionDetailOmit<ExtArgs> | null
    /**
     * The data used to update SecurityTransactionDetails.
     */
    data: XOR<SecurityTransactionDetailUpdateManyMutationInput, SecurityTransactionDetailUncheckedUpdateManyInput>
    /**
     * Filter which SecurityTransactionDetails to update
     */
    where?: SecurityTransactionDetailWhereInput
    /**
     * Limit how many SecurityTransactionDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityTransactionDetail upsert
   */
  export type SecurityTransactionDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionDetail
     */
    select?: SecurityTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransactionDetail
     */
    omit?: SecurityTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the SecurityTransactionDetail to update in case it exists.
     */
    where: SecurityTransactionDetailWhereUniqueInput
    /**
     * In case the SecurityTransactionDetail found by the `where` argument doesn't exist, create a new SecurityTransactionDetail with this data.
     */
    create: XOR<SecurityTransactionDetailCreateInput, SecurityTransactionDetailUncheckedCreateInput>
    /**
     * In case the SecurityTransactionDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityTransactionDetailUpdateInput, SecurityTransactionDetailUncheckedUpdateInput>
  }

  /**
   * SecurityTransactionDetail delete
   */
  export type SecurityTransactionDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionDetail
     */
    select?: SecurityTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransactionDetail
     */
    omit?: SecurityTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionDetailInclude<ExtArgs> | null
    /**
     * Filter which SecurityTransactionDetail to delete.
     */
    where: SecurityTransactionDetailWhereUniqueInput
  }

  /**
   * SecurityTransactionDetail deleteMany
   */
  export type SecurityTransactionDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityTransactionDetails to delete
     */
    where?: SecurityTransactionDetailWhereInput
    /**
     * Limit how many SecurityTransactionDetails to delete.
     */
    limit?: number
  }

  /**
   * SecurityTransactionDetail without action
   */
  export type SecurityTransactionDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityTransactionDetail
     */
    select?: SecurityTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityTransactionDetail
     */
    omit?: SecurityTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityTransactionDetailInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    email: 'email',
    requirePasswordChange: 'requirePasswordChange',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShareUploadHistoryScalarFieldEnum: {
    id: 'id',
    ownershipType: 'ownershipType',
    ownershipDate: 'ownershipDate',
    remarks: 'remarks'
  };

  export type ShareUploadHistoryScalarFieldEnum = (typeof ShareUploadHistoryScalarFieldEnum)[keyof typeof ShareUploadHistoryScalarFieldEnum]


  export const DividendUploadHistoryScalarFieldEnum: {
    id: 'id',
    dividendUploadType: 'dividendUploadType',
    transactionDateRange: 'transactionDateRange',
    remarks: 'remarks'
  };

  export type DividendUploadHistoryScalarFieldEnum = (typeof DividendUploadHistoryScalarFieldEnum)[keyof typeof DividendUploadHistoryScalarFieldEnum]


  export const DividendScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    transactionDate: 'transactionDate',
    shareholderId: 'shareholderId',
    sendingBankName: 'sendingBankName',
    sendingBankAccount: 'sendingBankAccount',
    receivingBankName: 'receivingBankName',
    receivingBankAccount: 'receivingBankAccount',
    dividendUploadHistoryId: 'dividendUploadHistoryId',
    remarks: 'remarks',
    entryDate: 'entryDate'
  };

  export type DividendScalarFieldEnum = (typeof DividendScalarFieldEnum)[keyof typeof DividendScalarFieldEnum]


  export const ShareHistoryScalarFieldEnum: {
    id: 'id',
    ownershipType: 'ownershipType',
    unitsOfShareChanged: 'unitsOfShareChanged',
    balanceUnitsOfShare: 'balanceUnitsOfShare',
    transactionDate: 'transactionDate',
    shareholderId: 'shareholderId',
    ratePerShare: 'ratePerShare',
    shareTransferHistoryId: 'shareTransferHistoryId',
    shareUploadHistoryId: 'shareUploadHistoryId',
    remarks: 'remarks',
    entryDateTime: 'entryDateTime'
  };

  export type ShareHistoryScalarFieldEnum = (typeof ShareHistoryScalarFieldEnum)[keyof typeof ShareHistoryScalarFieldEnum]


  export const ShareScalarFieldEnum: {
    id: 'id',
    unitsOfShare: 'unitsOfShare',
    ownershipType: 'ownershipType',
    ownershipDate: 'ownershipDate',
    cost: 'cost',
    shareholderId: 'shareholderId',
    remarks: 'remarks'
  };

  export type ShareScalarFieldEnum = (typeof ShareScalarFieldEnum)[keyof typeof ShareScalarFieldEnum]


  export const ShareTransferHistoryScalarFieldEnum: {
    id: 'id',
    transferingShareholderId: 'transferingShareholderId',
    receivingShareholderId: 'receivingShareholderId',
    transferType: 'transferType',
    remarks: 'remarks',
    transferRate: 'transferRate',
    wacc: 'wacc',
    transferredUnitsOfShare: 'transferredUnitsOfShare',
    totalGain: 'totalGain',
    transferDate: 'transferDate',
    entryDate: 'entryDate'
  };

  export type ShareTransferHistoryScalarFieldEnum = (typeof ShareTransferHistoryScalarFieldEnum)[keyof typeof ShareTransferHistoryScalarFieldEnum]


  export const WaccHistoryScalarFieldEnum: {
    id: 'id',
    shareholderId: 'shareholderId',
    totalCost: 'totalCost',
    totalUnitsOfShare: 'totalUnitsOfShare',
    wacc: 'wacc',
    calculationDate: 'calculationDate'
  };

  export type WaccHistoryScalarFieldEnum = (typeof WaccHistoryScalarFieldEnum)[keyof typeof WaccHistoryScalarFieldEnum]


  export const ShareholderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    number: 'number',
    ctzOrRegNumber: 'ctzOrRegNumber',
    ctzIssueDateOrRegDate: 'ctzIssueDateOrRegDate',
    fatherName: 'fatherName',
    grandfatherName: 'grandfatherName',
    contact: 'contact',
    address: 'address',
    remarks: 'remarks',
    dividendBalance: 'dividendBalance',
    ownedUnitsOfShare: 'ownedUnitsOfShare',
    wacc: 'wacc',
    bankName: 'bankName',
    bankAccount: 'bankAccount'
  };

  export type ShareholderScalarFieldEnum = (typeof ShareholderScalarFieldEnum)[keyof typeof ShareholderScalarFieldEnum]


  export const SecurityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shortName: 'shortName',
    securityClassification: 'securityClassification'
  };

  export type SecurityScalarFieldEnum = (typeof SecurityScalarFieldEnum)[keyof typeof SecurityScalarFieldEnum]


  export const SecurityTransactionScalarFieldEnum: {
    id: 'id',
    transactionDate: 'transactionDate',
    entryDate: 'entryDate'
  };

  export type SecurityTransactionScalarFieldEnum = (typeof SecurityTransactionScalarFieldEnum)[keyof typeof SecurityTransactionScalarFieldEnum]


  export const SecurityTransactionDetailScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    price: 'price',
    amount: 'amount',
    securityAdditionNature: 'securityAdditionNature',
    securityClassificationAsPerNFRS: 'securityClassificationAsPerNFRS',
    securityId: 'securityId',
    securityTransactionId: 'securityTransactionId',
    remarks: 'remarks'
  };

  export type SecurityTransactionDetailScalarFieldEnum = (typeof SecurityTransactionDetailScalarFieldEnum)[keyof typeof SecurityTransactionDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'OwnershipType'
   */
  export type EnumOwnershipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnershipType'>
    


  /**
   * Reference to a field of type 'OwnershipType[]'
   */
  export type ListEnumOwnershipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnershipType[]'>
    


  /**
   * Reference to a field of type 'DividenUploadType'
   */
  export type EnumDividenUploadTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DividenUploadType'>
    


  /**
   * Reference to a field of type 'DividenUploadType[]'
   */
  export type ListEnumDividenUploadTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DividenUploadType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TransferType'
   */
  export type EnumTransferTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransferType'>
    


  /**
   * Reference to a field of type 'TransferType[]'
   */
  export type ListEnumTransferTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransferType[]'>
    


  /**
   * Reference to a field of type 'ShareholderType'
   */
  export type EnumShareholderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShareholderType'>
    


  /**
   * Reference to a field of type 'ShareholderType[]'
   */
  export type ListEnumShareholderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShareholderType[]'>
    


  /**
   * Reference to a field of type 'SecurityClassification'
   */
  export type EnumSecurityClassificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SecurityClassification'>
    


  /**
   * Reference to a field of type 'SecurityClassification[]'
   */
  export type ListEnumSecurityClassificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SecurityClassification[]'>
    


  /**
   * Reference to a field of type 'SecurityAdditionNature'
   */
  export type EnumSecurityAdditionNatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SecurityAdditionNature'>
    


  /**
   * Reference to a field of type 'SecurityAdditionNature[]'
   */
  export type ListEnumSecurityAdditionNatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SecurityAdditionNature[]'>
    


  /**
   * Reference to a field of type 'SecurityClassificationAsPerNFRS'
   */
  export type EnumSecurityClassificationAsPerNFRSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SecurityClassificationAsPerNFRS'>
    


  /**
   * Reference to a field of type 'SecurityClassificationAsPerNFRS[]'
   */
  export type ListEnumSecurityClassificationAsPerNFRSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SecurityClassificationAsPerNFRS[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    requirePasswordChange?: BoolFilter<"User"> | boolean
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    requirePasswordChange?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    requirePasswordChange?: BoolFilter<"User"> | boolean
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    requirePasswordChange?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    requirePasswordChange?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type ShareUploadHistoryWhereInput = {
    AND?: ShareUploadHistoryWhereInput | ShareUploadHistoryWhereInput[]
    OR?: ShareUploadHistoryWhereInput[]
    NOT?: ShareUploadHistoryWhereInput | ShareUploadHistoryWhereInput[]
    id?: IntFilter<"ShareUploadHistory"> | number
    ownershipType?: EnumOwnershipTypeFilter<"ShareUploadHistory"> | $Enums.OwnershipType
    ownershipDate?: StringFilter<"ShareUploadHistory"> | string
    remarks?: StringFilter<"ShareUploadHistory"> | string
    shareHistory?: ShareHistoryListRelationFilter
  }

  export type ShareUploadHistoryOrderByWithRelationInput = {
    id?: SortOrder
    ownershipType?: SortOrder
    ownershipDate?: SortOrder
    remarks?: SortOrder
    shareHistory?: ShareHistoryOrderByRelationAggregateInput
  }

  export type ShareUploadHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShareUploadHistoryWhereInput | ShareUploadHistoryWhereInput[]
    OR?: ShareUploadHistoryWhereInput[]
    NOT?: ShareUploadHistoryWhereInput | ShareUploadHistoryWhereInput[]
    ownershipType?: EnumOwnershipTypeFilter<"ShareUploadHistory"> | $Enums.OwnershipType
    ownershipDate?: StringFilter<"ShareUploadHistory"> | string
    remarks?: StringFilter<"ShareUploadHistory"> | string
    shareHistory?: ShareHistoryListRelationFilter
  }, "id">

  export type ShareUploadHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    ownershipType?: SortOrder
    ownershipDate?: SortOrder
    remarks?: SortOrder
    _count?: ShareUploadHistoryCountOrderByAggregateInput
    _avg?: ShareUploadHistoryAvgOrderByAggregateInput
    _max?: ShareUploadHistoryMaxOrderByAggregateInput
    _min?: ShareUploadHistoryMinOrderByAggregateInput
    _sum?: ShareUploadHistorySumOrderByAggregateInput
  }

  export type ShareUploadHistoryScalarWhereWithAggregatesInput = {
    AND?: ShareUploadHistoryScalarWhereWithAggregatesInput | ShareUploadHistoryScalarWhereWithAggregatesInput[]
    OR?: ShareUploadHistoryScalarWhereWithAggregatesInput[]
    NOT?: ShareUploadHistoryScalarWhereWithAggregatesInput | ShareUploadHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShareUploadHistory"> | number
    ownershipType?: EnumOwnershipTypeWithAggregatesFilter<"ShareUploadHistory"> | $Enums.OwnershipType
    ownershipDate?: StringWithAggregatesFilter<"ShareUploadHistory"> | string
    remarks?: StringWithAggregatesFilter<"ShareUploadHistory"> | string
  }

  export type DividendUploadHistoryWhereInput = {
    AND?: DividendUploadHistoryWhereInput | DividendUploadHistoryWhereInput[]
    OR?: DividendUploadHistoryWhereInput[]
    NOT?: DividendUploadHistoryWhereInput | DividendUploadHistoryWhereInput[]
    id?: IntFilter<"DividendUploadHistory"> | number
    dividendUploadType?: EnumDividenUploadTypeFilter<"DividendUploadHistory"> | $Enums.DividenUploadType
    transactionDateRange?: StringFilter<"DividendUploadHistory"> | string
    remarks?: StringFilter<"DividendUploadHistory"> | string
    dividend?: DividendListRelationFilter
  }

  export type DividendUploadHistoryOrderByWithRelationInput = {
    id?: SortOrder
    dividendUploadType?: SortOrder
    transactionDateRange?: SortOrder
    remarks?: SortOrder
    dividend?: DividendOrderByRelationAggregateInput
  }

  export type DividendUploadHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DividendUploadHistoryWhereInput | DividendUploadHistoryWhereInput[]
    OR?: DividendUploadHistoryWhereInput[]
    NOT?: DividendUploadHistoryWhereInput | DividendUploadHistoryWhereInput[]
    dividendUploadType?: EnumDividenUploadTypeFilter<"DividendUploadHistory"> | $Enums.DividenUploadType
    transactionDateRange?: StringFilter<"DividendUploadHistory"> | string
    remarks?: StringFilter<"DividendUploadHistory"> | string
    dividend?: DividendListRelationFilter
  }, "id">

  export type DividendUploadHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    dividendUploadType?: SortOrder
    transactionDateRange?: SortOrder
    remarks?: SortOrder
    _count?: DividendUploadHistoryCountOrderByAggregateInput
    _avg?: DividendUploadHistoryAvgOrderByAggregateInput
    _max?: DividendUploadHistoryMaxOrderByAggregateInput
    _min?: DividendUploadHistoryMinOrderByAggregateInput
    _sum?: DividendUploadHistorySumOrderByAggregateInput
  }

  export type DividendUploadHistoryScalarWhereWithAggregatesInput = {
    AND?: DividendUploadHistoryScalarWhereWithAggregatesInput | DividendUploadHistoryScalarWhereWithAggregatesInput[]
    OR?: DividendUploadHistoryScalarWhereWithAggregatesInput[]
    NOT?: DividendUploadHistoryScalarWhereWithAggregatesInput | DividendUploadHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DividendUploadHistory"> | number
    dividendUploadType?: EnumDividenUploadTypeWithAggregatesFilter<"DividendUploadHistory"> | $Enums.DividenUploadType
    transactionDateRange?: StringWithAggregatesFilter<"DividendUploadHistory"> | string
    remarks?: StringWithAggregatesFilter<"DividendUploadHistory"> | string
  }

  export type DividendWhereInput = {
    AND?: DividendWhereInput | DividendWhereInput[]
    OR?: DividendWhereInput[]
    NOT?: DividendWhereInput | DividendWhereInput[]
    id?: IntFilter<"Dividend"> | number
    amount?: FloatFilter<"Dividend"> | number
    transactionDate?: StringFilter<"Dividend"> | string
    shareholderId?: IntFilter<"Dividend"> | number
    sendingBankName?: StringNullableFilter<"Dividend"> | string | null
    sendingBankAccount?: StringNullableFilter<"Dividend"> | string | null
    receivingBankName?: StringNullableFilter<"Dividend"> | string | null
    receivingBankAccount?: StringNullableFilter<"Dividend"> | string | null
    dividendUploadHistoryId?: IntNullableFilter<"Dividend"> | number | null
    remarks?: StringFilter<"Dividend"> | string
    entryDate?: DateTimeFilter<"Dividend"> | Date | string
    shareholder?: XOR<ShareholderScalarRelationFilter, ShareholderWhereInput>
    dividendUploadHistory?: XOR<DividendUploadHistoryNullableScalarRelationFilter, DividendUploadHistoryWhereInput> | null
  }

  export type DividendOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    transactionDate?: SortOrder
    shareholderId?: SortOrder
    sendingBankName?: SortOrderInput | SortOrder
    sendingBankAccount?: SortOrderInput | SortOrder
    receivingBankName?: SortOrderInput | SortOrder
    receivingBankAccount?: SortOrderInput | SortOrder
    dividendUploadHistoryId?: SortOrderInput | SortOrder
    remarks?: SortOrder
    entryDate?: SortOrder
    shareholder?: ShareholderOrderByWithRelationInput
    dividendUploadHistory?: DividendUploadHistoryOrderByWithRelationInput
  }

  export type DividendWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DividendWhereInput | DividendWhereInput[]
    OR?: DividendWhereInput[]
    NOT?: DividendWhereInput | DividendWhereInput[]
    amount?: FloatFilter<"Dividend"> | number
    transactionDate?: StringFilter<"Dividend"> | string
    shareholderId?: IntFilter<"Dividend"> | number
    sendingBankName?: StringNullableFilter<"Dividend"> | string | null
    sendingBankAccount?: StringNullableFilter<"Dividend"> | string | null
    receivingBankName?: StringNullableFilter<"Dividend"> | string | null
    receivingBankAccount?: StringNullableFilter<"Dividend"> | string | null
    dividendUploadHistoryId?: IntNullableFilter<"Dividend"> | number | null
    remarks?: StringFilter<"Dividend"> | string
    entryDate?: DateTimeFilter<"Dividend"> | Date | string
    shareholder?: XOR<ShareholderScalarRelationFilter, ShareholderWhereInput>
    dividendUploadHistory?: XOR<DividendUploadHistoryNullableScalarRelationFilter, DividendUploadHistoryWhereInput> | null
  }, "id">

  export type DividendOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    transactionDate?: SortOrder
    shareholderId?: SortOrder
    sendingBankName?: SortOrderInput | SortOrder
    sendingBankAccount?: SortOrderInput | SortOrder
    receivingBankName?: SortOrderInput | SortOrder
    receivingBankAccount?: SortOrderInput | SortOrder
    dividendUploadHistoryId?: SortOrderInput | SortOrder
    remarks?: SortOrder
    entryDate?: SortOrder
    _count?: DividendCountOrderByAggregateInput
    _avg?: DividendAvgOrderByAggregateInput
    _max?: DividendMaxOrderByAggregateInput
    _min?: DividendMinOrderByAggregateInput
    _sum?: DividendSumOrderByAggregateInput
  }

  export type DividendScalarWhereWithAggregatesInput = {
    AND?: DividendScalarWhereWithAggregatesInput | DividendScalarWhereWithAggregatesInput[]
    OR?: DividendScalarWhereWithAggregatesInput[]
    NOT?: DividendScalarWhereWithAggregatesInput | DividendScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dividend"> | number
    amount?: FloatWithAggregatesFilter<"Dividend"> | number
    transactionDate?: StringWithAggregatesFilter<"Dividend"> | string
    shareholderId?: IntWithAggregatesFilter<"Dividend"> | number
    sendingBankName?: StringNullableWithAggregatesFilter<"Dividend"> | string | null
    sendingBankAccount?: StringNullableWithAggregatesFilter<"Dividend"> | string | null
    receivingBankName?: StringNullableWithAggregatesFilter<"Dividend"> | string | null
    receivingBankAccount?: StringNullableWithAggregatesFilter<"Dividend"> | string | null
    dividendUploadHistoryId?: IntNullableWithAggregatesFilter<"Dividend"> | number | null
    remarks?: StringWithAggregatesFilter<"Dividend"> | string
    entryDate?: DateTimeWithAggregatesFilter<"Dividend"> | Date | string
  }

  export type ShareHistoryWhereInput = {
    AND?: ShareHistoryWhereInput | ShareHistoryWhereInput[]
    OR?: ShareHistoryWhereInput[]
    NOT?: ShareHistoryWhereInput | ShareHistoryWhereInput[]
    id?: IntFilter<"ShareHistory"> | number
    ownershipType?: EnumOwnershipTypeFilter<"ShareHistory"> | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFilter<"ShareHistory"> | number
    balanceUnitsOfShare?: FloatFilter<"ShareHistory"> | number
    transactionDate?: StringFilter<"ShareHistory"> | string
    shareholderId?: IntFilter<"ShareHistory"> | number
    ratePerShare?: FloatFilter<"ShareHistory"> | number
    shareTransferHistoryId?: IntNullableFilter<"ShareHistory"> | number | null
    shareUploadHistoryId?: IntNullableFilter<"ShareHistory"> | number | null
    remarks?: StringNullableFilter<"ShareHistory"> | string | null
    entryDateTime?: DateTimeFilter<"ShareHistory"> | Date | string
    shareholder?: XOR<ShareholderScalarRelationFilter, ShareholderWhereInput>
    shareTransferHistory?: XOR<ShareTransferHistoryNullableScalarRelationFilter, ShareTransferHistoryWhereInput> | null
    shareUploadHistory?: XOR<ShareUploadHistoryNullableScalarRelationFilter, ShareUploadHistoryWhereInput> | null
  }

  export type ShareHistoryOrderByWithRelationInput = {
    id?: SortOrder
    ownershipType?: SortOrder
    unitsOfShareChanged?: SortOrder
    balanceUnitsOfShare?: SortOrder
    transactionDate?: SortOrder
    shareholderId?: SortOrder
    ratePerShare?: SortOrder
    shareTransferHistoryId?: SortOrderInput | SortOrder
    shareUploadHistoryId?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    entryDateTime?: SortOrder
    shareholder?: ShareholderOrderByWithRelationInput
    shareTransferHistory?: ShareTransferHistoryOrderByWithRelationInput
    shareUploadHistory?: ShareUploadHistoryOrderByWithRelationInput
  }

  export type ShareHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShareHistoryWhereInput | ShareHistoryWhereInput[]
    OR?: ShareHistoryWhereInput[]
    NOT?: ShareHistoryWhereInput | ShareHistoryWhereInput[]
    ownershipType?: EnumOwnershipTypeFilter<"ShareHistory"> | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFilter<"ShareHistory"> | number
    balanceUnitsOfShare?: FloatFilter<"ShareHistory"> | number
    transactionDate?: StringFilter<"ShareHistory"> | string
    shareholderId?: IntFilter<"ShareHistory"> | number
    ratePerShare?: FloatFilter<"ShareHistory"> | number
    shareTransferHistoryId?: IntNullableFilter<"ShareHistory"> | number | null
    shareUploadHistoryId?: IntNullableFilter<"ShareHistory"> | number | null
    remarks?: StringNullableFilter<"ShareHistory"> | string | null
    entryDateTime?: DateTimeFilter<"ShareHistory"> | Date | string
    shareholder?: XOR<ShareholderScalarRelationFilter, ShareholderWhereInput>
    shareTransferHistory?: XOR<ShareTransferHistoryNullableScalarRelationFilter, ShareTransferHistoryWhereInput> | null
    shareUploadHistory?: XOR<ShareUploadHistoryNullableScalarRelationFilter, ShareUploadHistoryWhereInput> | null
  }, "id">

  export type ShareHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    ownershipType?: SortOrder
    unitsOfShareChanged?: SortOrder
    balanceUnitsOfShare?: SortOrder
    transactionDate?: SortOrder
    shareholderId?: SortOrder
    ratePerShare?: SortOrder
    shareTransferHistoryId?: SortOrderInput | SortOrder
    shareUploadHistoryId?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    entryDateTime?: SortOrder
    _count?: ShareHistoryCountOrderByAggregateInput
    _avg?: ShareHistoryAvgOrderByAggregateInput
    _max?: ShareHistoryMaxOrderByAggregateInput
    _min?: ShareHistoryMinOrderByAggregateInput
    _sum?: ShareHistorySumOrderByAggregateInput
  }

  export type ShareHistoryScalarWhereWithAggregatesInput = {
    AND?: ShareHistoryScalarWhereWithAggregatesInput | ShareHistoryScalarWhereWithAggregatesInput[]
    OR?: ShareHistoryScalarWhereWithAggregatesInput[]
    NOT?: ShareHistoryScalarWhereWithAggregatesInput | ShareHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShareHistory"> | number
    ownershipType?: EnumOwnershipTypeWithAggregatesFilter<"ShareHistory"> | $Enums.OwnershipType
    unitsOfShareChanged?: FloatWithAggregatesFilter<"ShareHistory"> | number
    balanceUnitsOfShare?: FloatWithAggregatesFilter<"ShareHistory"> | number
    transactionDate?: StringWithAggregatesFilter<"ShareHistory"> | string
    shareholderId?: IntWithAggregatesFilter<"ShareHistory"> | number
    ratePerShare?: FloatWithAggregatesFilter<"ShareHistory"> | number
    shareTransferHistoryId?: IntNullableWithAggregatesFilter<"ShareHistory"> | number | null
    shareUploadHistoryId?: IntNullableWithAggregatesFilter<"ShareHistory"> | number | null
    remarks?: StringNullableWithAggregatesFilter<"ShareHistory"> | string | null
    entryDateTime?: DateTimeWithAggregatesFilter<"ShareHistory"> | Date | string
  }

  export type ShareWhereInput = {
    AND?: ShareWhereInput | ShareWhereInput[]
    OR?: ShareWhereInput[]
    NOT?: ShareWhereInput | ShareWhereInput[]
    id?: IntFilter<"Share"> | number
    unitsOfShare?: FloatFilter<"Share"> | number
    ownershipType?: EnumOwnershipTypeFilter<"Share"> | $Enums.OwnershipType
    ownershipDate?: StringFilter<"Share"> | string
    cost?: FloatFilter<"Share"> | number
    shareholderId?: IntFilter<"Share"> | number
    remarks?: StringNullableFilter<"Share"> | string | null
    shareholder?: XOR<ShareholderScalarRelationFilter, ShareholderWhereInput>
  }

  export type ShareOrderByWithRelationInput = {
    id?: SortOrder
    unitsOfShare?: SortOrder
    ownershipType?: SortOrder
    ownershipDate?: SortOrder
    cost?: SortOrder
    shareholderId?: SortOrder
    remarks?: SortOrderInput | SortOrder
    shareholder?: ShareholderOrderByWithRelationInput
  }

  export type ShareWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShareWhereInput | ShareWhereInput[]
    OR?: ShareWhereInput[]
    NOT?: ShareWhereInput | ShareWhereInput[]
    unitsOfShare?: FloatFilter<"Share"> | number
    ownershipType?: EnumOwnershipTypeFilter<"Share"> | $Enums.OwnershipType
    ownershipDate?: StringFilter<"Share"> | string
    cost?: FloatFilter<"Share"> | number
    shareholderId?: IntFilter<"Share"> | number
    remarks?: StringNullableFilter<"Share"> | string | null
    shareholder?: XOR<ShareholderScalarRelationFilter, ShareholderWhereInput>
  }, "id">

  export type ShareOrderByWithAggregationInput = {
    id?: SortOrder
    unitsOfShare?: SortOrder
    ownershipType?: SortOrder
    ownershipDate?: SortOrder
    cost?: SortOrder
    shareholderId?: SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: ShareCountOrderByAggregateInput
    _avg?: ShareAvgOrderByAggregateInput
    _max?: ShareMaxOrderByAggregateInput
    _min?: ShareMinOrderByAggregateInput
    _sum?: ShareSumOrderByAggregateInput
  }

  export type ShareScalarWhereWithAggregatesInput = {
    AND?: ShareScalarWhereWithAggregatesInput | ShareScalarWhereWithAggregatesInput[]
    OR?: ShareScalarWhereWithAggregatesInput[]
    NOT?: ShareScalarWhereWithAggregatesInput | ShareScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Share"> | number
    unitsOfShare?: FloatWithAggregatesFilter<"Share"> | number
    ownershipType?: EnumOwnershipTypeWithAggregatesFilter<"Share"> | $Enums.OwnershipType
    ownershipDate?: StringWithAggregatesFilter<"Share"> | string
    cost?: FloatWithAggregatesFilter<"Share"> | number
    shareholderId?: IntWithAggregatesFilter<"Share"> | number
    remarks?: StringNullableWithAggregatesFilter<"Share"> | string | null
  }

  export type ShareTransferHistoryWhereInput = {
    AND?: ShareTransferHistoryWhereInput | ShareTransferHistoryWhereInput[]
    OR?: ShareTransferHistoryWhereInput[]
    NOT?: ShareTransferHistoryWhereInput | ShareTransferHistoryWhereInput[]
    id?: IntFilter<"ShareTransferHistory"> | number
    transferingShareholderId?: IntFilter<"ShareTransferHistory"> | number
    receivingShareholderId?: IntFilter<"ShareTransferHistory"> | number
    transferType?: EnumTransferTypeFilter<"ShareTransferHistory"> | $Enums.TransferType
    remarks?: StringFilter<"ShareTransferHistory"> | string
    transferRate?: FloatFilter<"ShareTransferHistory"> | number
    wacc?: FloatFilter<"ShareTransferHistory"> | number
    transferredUnitsOfShare?: FloatFilter<"ShareTransferHistory"> | number
    totalGain?: FloatFilter<"ShareTransferHistory"> | number
    transferDate?: StringFilter<"ShareTransferHistory"> | string
    entryDate?: DateTimeFilter<"ShareTransferHistory"> | Date | string
    transferingShareholder?: XOR<ShareholderScalarRelationFilter, ShareholderWhereInput>
    receivingShareholder?: XOR<ShareholderScalarRelationFilter, ShareholderWhereInput>
    shareHistory?: ShareHistoryListRelationFilter
  }

  export type ShareTransferHistoryOrderByWithRelationInput = {
    id?: SortOrder
    transferingShareholderId?: SortOrder
    receivingShareholderId?: SortOrder
    transferType?: SortOrder
    remarks?: SortOrder
    transferRate?: SortOrder
    wacc?: SortOrder
    transferredUnitsOfShare?: SortOrder
    totalGain?: SortOrder
    transferDate?: SortOrder
    entryDate?: SortOrder
    transferingShareholder?: ShareholderOrderByWithRelationInput
    receivingShareholder?: ShareholderOrderByWithRelationInput
    shareHistory?: ShareHistoryOrderByRelationAggregateInput
  }

  export type ShareTransferHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShareTransferHistoryWhereInput | ShareTransferHistoryWhereInput[]
    OR?: ShareTransferHistoryWhereInput[]
    NOT?: ShareTransferHistoryWhereInput | ShareTransferHistoryWhereInput[]
    transferingShareholderId?: IntFilter<"ShareTransferHistory"> | number
    receivingShareholderId?: IntFilter<"ShareTransferHistory"> | number
    transferType?: EnumTransferTypeFilter<"ShareTransferHistory"> | $Enums.TransferType
    remarks?: StringFilter<"ShareTransferHistory"> | string
    transferRate?: FloatFilter<"ShareTransferHistory"> | number
    wacc?: FloatFilter<"ShareTransferHistory"> | number
    transferredUnitsOfShare?: FloatFilter<"ShareTransferHistory"> | number
    totalGain?: FloatFilter<"ShareTransferHistory"> | number
    transferDate?: StringFilter<"ShareTransferHistory"> | string
    entryDate?: DateTimeFilter<"ShareTransferHistory"> | Date | string
    transferingShareholder?: XOR<ShareholderScalarRelationFilter, ShareholderWhereInput>
    receivingShareholder?: XOR<ShareholderScalarRelationFilter, ShareholderWhereInput>
    shareHistory?: ShareHistoryListRelationFilter
  }, "id">

  export type ShareTransferHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    transferingShareholderId?: SortOrder
    receivingShareholderId?: SortOrder
    transferType?: SortOrder
    remarks?: SortOrder
    transferRate?: SortOrder
    wacc?: SortOrder
    transferredUnitsOfShare?: SortOrder
    totalGain?: SortOrder
    transferDate?: SortOrder
    entryDate?: SortOrder
    _count?: ShareTransferHistoryCountOrderByAggregateInput
    _avg?: ShareTransferHistoryAvgOrderByAggregateInput
    _max?: ShareTransferHistoryMaxOrderByAggregateInput
    _min?: ShareTransferHistoryMinOrderByAggregateInput
    _sum?: ShareTransferHistorySumOrderByAggregateInput
  }

  export type ShareTransferHistoryScalarWhereWithAggregatesInput = {
    AND?: ShareTransferHistoryScalarWhereWithAggregatesInput | ShareTransferHistoryScalarWhereWithAggregatesInput[]
    OR?: ShareTransferHistoryScalarWhereWithAggregatesInput[]
    NOT?: ShareTransferHistoryScalarWhereWithAggregatesInput | ShareTransferHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShareTransferHistory"> | number
    transferingShareholderId?: IntWithAggregatesFilter<"ShareTransferHistory"> | number
    receivingShareholderId?: IntWithAggregatesFilter<"ShareTransferHistory"> | number
    transferType?: EnumTransferTypeWithAggregatesFilter<"ShareTransferHistory"> | $Enums.TransferType
    remarks?: StringWithAggregatesFilter<"ShareTransferHistory"> | string
    transferRate?: FloatWithAggregatesFilter<"ShareTransferHistory"> | number
    wacc?: FloatWithAggregatesFilter<"ShareTransferHistory"> | number
    transferredUnitsOfShare?: FloatWithAggregatesFilter<"ShareTransferHistory"> | number
    totalGain?: FloatWithAggregatesFilter<"ShareTransferHistory"> | number
    transferDate?: StringWithAggregatesFilter<"ShareTransferHistory"> | string
    entryDate?: DateTimeWithAggregatesFilter<"ShareTransferHistory"> | Date | string
  }

  export type WaccHistoryWhereInput = {
    AND?: WaccHistoryWhereInput | WaccHistoryWhereInput[]
    OR?: WaccHistoryWhereInput[]
    NOT?: WaccHistoryWhereInput | WaccHistoryWhereInput[]
    id?: IntFilter<"WaccHistory"> | number
    shareholderId?: IntFilter<"WaccHistory"> | number
    totalCost?: FloatFilter<"WaccHistory"> | number
    totalUnitsOfShare?: FloatFilter<"WaccHistory"> | number
    wacc?: FloatFilter<"WaccHistory"> | number
    calculationDate?: StringFilter<"WaccHistory"> | string
    shareholder?: XOR<ShareholderScalarRelationFilter, ShareholderWhereInput>
  }

  export type WaccHistoryOrderByWithRelationInput = {
    id?: SortOrder
    shareholderId?: SortOrder
    totalCost?: SortOrder
    totalUnitsOfShare?: SortOrder
    wacc?: SortOrder
    calculationDate?: SortOrder
    shareholder?: ShareholderOrderByWithRelationInput
  }

  export type WaccHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WaccHistoryWhereInput | WaccHistoryWhereInput[]
    OR?: WaccHistoryWhereInput[]
    NOT?: WaccHistoryWhereInput | WaccHistoryWhereInput[]
    shareholderId?: IntFilter<"WaccHistory"> | number
    totalCost?: FloatFilter<"WaccHistory"> | number
    totalUnitsOfShare?: FloatFilter<"WaccHistory"> | number
    wacc?: FloatFilter<"WaccHistory"> | number
    calculationDate?: StringFilter<"WaccHistory"> | string
    shareholder?: XOR<ShareholderScalarRelationFilter, ShareholderWhereInput>
  }, "id">

  export type WaccHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    shareholderId?: SortOrder
    totalCost?: SortOrder
    totalUnitsOfShare?: SortOrder
    wacc?: SortOrder
    calculationDate?: SortOrder
    _count?: WaccHistoryCountOrderByAggregateInput
    _avg?: WaccHistoryAvgOrderByAggregateInput
    _max?: WaccHistoryMaxOrderByAggregateInput
    _min?: WaccHistoryMinOrderByAggregateInput
    _sum?: WaccHistorySumOrderByAggregateInput
  }

  export type WaccHistoryScalarWhereWithAggregatesInput = {
    AND?: WaccHistoryScalarWhereWithAggregatesInput | WaccHistoryScalarWhereWithAggregatesInput[]
    OR?: WaccHistoryScalarWhereWithAggregatesInput[]
    NOT?: WaccHistoryScalarWhereWithAggregatesInput | WaccHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WaccHistory"> | number
    shareholderId?: IntWithAggregatesFilter<"WaccHistory"> | number
    totalCost?: FloatWithAggregatesFilter<"WaccHistory"> | number
    totalUnitsOfShare?: FloatWithAggregatesFilter<"WaccHistory"> | number
    wacc?: FloatWithAggregatesFilter<"WaccHistory"> | number
    calculationDate?: StringWithAggregatesFilter<"WaccHistory"> | string
  }

  export type ShareholderWhereInput = {
    AND?: ShareholderWhereInput | ShareholderWhereInput[]
    OR?: ShareholderWhereInput[]
    NOT?: ShareholderWhereInput | ShareholderWhereInput[]
    id?: IntFilter<"Shareholder"> | number
    name?: StringFilter<"Shareholder"> | string
    type?: EnumShareholderTypeFilter<"Shareholder"> | $Enums.ShareholderType
    number?: IntFilter<"Shareholder"> | number
    ctzOrRegNumber?: StringNullableFilter<"Shareholder"> | string | null
    ctzIssueDateOrRegDate?: StringNullableFilter<"Shareholder"> | string | null
    fatherName?: StringNullableFilter<"Shareholder"> | string | null
    grandfatherName?: StringNullableFilter<"Shareholder"> | string | null
    contact?: StringNullableFilter<"Shareholder"> | string | null
    address?: StringNullableFilter<"Shareholder"> | string | null
    remarks?: StringNullableFilter<"Shareholder"> | string | null
    dividendBalance?: FloatFilter<"Shareholder"> | number
    ownedUnitsOfShare?: FloatFilter<"Shareholder"> | number
    wacc?: FloatFilter<"Shareholder"> | number
    bankName?: StringNullableFilter<"Shareholder"> | string | null
    bankAccount?: StringNullableFilter<"Shareholder"> | string | null
    dividend?: DividendListRelationFilter
    share?: ShareListRelationFilter
    shareHistory?: ShareHistoryListRelationFilter
    transferredShareHistory?: ShareTransferHistoryListRelationFilter
    receivedShareHistory?: ShareTransferHistoryListRelationFilter
    waccHistory?: WaccHistoryListRelationFilter
  }

  export type ShareholderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    number?: SortOrder
    ctzOrRegNumber?: SortOrderInput | SortOrder
    ctzIssueDateOrRegDate?: SortOrderInput | SortOrder
    fatherName?: SortOrderInput | SortOrder
    grandfatherName?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    dividendBalance?: SortOrder
    ownedUnitsOfShare?: SortOrder
    wacc?: SortOrder
    bankName?: SortOrderInput | SortOrder
    bankAccount?: SortOrderInput | SortOrder
    dividend?: DividendOrderByRelationAggregateInput
    share?: ShareOrderByRelationAggregateInput
    shareHistory?: ShareHistoryOrderByRelationAggregateInput
    transferredShareHistory?: ShareTransferHistoryOrderByRelationAggregateInput
    receivedShareHistory?: ShareTransferHistoryOrderByRelationAggregateInput
    waccHistory?: WaccHistoryOrderByRelationAggregateInput
  }

  export type ShareholderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    number?: number
    AND?: ShareholderWhereInput | ShareholderWhereInput[]
    OR?: ShareholderWhereInput[]
    NOT?: ShareholderWhereInput | ShareholderWhereInput[]
    name?: StringFilter<"Shareholder"> | string
    type?: EnumShareholderTypeFilter<"Shareholder"> | $Enums.ShareholderType
    ctzOrRegNumber?: StringNullableFilter<"Shareholder"> | string | null
    ctzIssueDateOrRegDate?: StringNullableFilter<"Shareholder"> | string | null
    fatherName?: StringNullableFilter<"Shareholder"> | string | null
    grandfatherName?: StringNullableFilter<"Shareholder"> | string | null
    contact?: StringNullableFilter<"Shareholder"> | string | null
    address?: StringNullableFilter<"Shareholder"> | string | null
    remarks?: StringNullableFilter<"Shareholder"> | string | null
    dividendBalance?: FloatFilter<"Shareholder"> | number
    ownedUnitsOfShare?: FloatFilter<"Shareholder"> | number
    wacc?: FloatFilter<"Shareholder"> | number
    bankName?: StringNullableFilter<"Shareholder"> | string | null
    bankAccount?: StringNullableFilter<"Shareholder"> | string | null
    dividend?: DividendListRelationFilter
    share?: ShareListRelationFilter
    shareHistory?: ShareHistoryListRelationFilter
    transferredShareHistory?: ShareTransferHistoryListRelationFilter
    receivedShareHistory?: ShareTransferHistoryListRelationFilter
    waccHistory?: WaccHistoryListRelationFilter
  }, "id" | "number">

  export type ShareholderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    number?: SortOrder
    ctzOrRegNumber?: SortOrderInput | SortOrder
    ctzIssueDateOrRegDate?: SortOrderInput | SortOrder
    fatherName?: SortOrderInput | SortOrder
    grandfatherName?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    dividendBalance?: SortOrder
    ownedUnitsOfShare?: SortOrder
    wacc?: SortOrder
    bankName?: SortOrderInput | SortOrder
    bankAccount?: SortOrderInput | SortOrder
    _count?: ShareholderCountOrderByAggregateInput
    _avg?: ShareholderAvgOrderByAggregateInput
    _max?: ShareholderMaxOrderByAggregateInput
    _min?: ShareholderMinOrderByAggregateInput
    _sum?: ShareholderSumOrderByAggregateInput
  }

  export type ShareholderScalarWhereWithAggregatesInput = {
    AND?: ShareholderScalarWhereWithAggregatesInput | ShareholderScalarWhereWithAggregatesInput[]
    OR?: ShareholderScalarWhereWithAggregatesInput[]
    NOT?: ShareholderScalarWhereWithAggregatesInput | ShareholderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shareholder"> | number
    name?: StringWithAggregatesFilter<"Shareholder"> | string
    type?: EnumShareholderTypeWithAggregatesFilter<"Shareholder"> | $Enums.ShareholderType
    number?: IntWithAggregatesFilter<"Shareholder"> | number
    ctzOrRegNumber?: StringNullableWithAggregatesFilter<"Shareholder"> | string | null
    ctzIssueDateOrRegDate?: StringNullableWithAggregatesFilter<"Shareholder"> | string | null
    fatherName?: StringNullableWithAggregatesFilter<"Shareholder"> | string | null
    grandfatherName?: StringNullableWithAggregatesFilter<"Shareholder"> | string | null
    contact?: StringNullableWithAggregatesFilter<"Shareholder"> | string | null
    address?: StringNullableWithAggregatesFilter<"Shareholder"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Shareholder"> | string | null
    dividendBalance?: FloatWithAggregatesFilter<"Shareholder"> | number
    ownedUnitsOfShare?: FloatWithAggregatesFilter<"Shareholder"> | number
    wacc?: FloatWithAggregatesFilter<"Shareholder"> | number
    bankName?: StringNullableWithAggregatesFilter<"Shareholder"> | string | null
    bankAccount?: StringNullableWithAggregatesFilter<"Shareholder"> | string | null
  }

  export type SecurityWhereInput = {
    AND?: SecurityWhereInput | SecurityWhereInput[]
    OR?: SecurityWhereInput[]
    NOT?: SecurityWhereInput | SecurityWhereInput[]
    id?: IntFilter<"Security"> | number
    name?: StringFilter<"Security"> | string
    shortName?: StringFilter<"Security"> | string
    securityClassification?: EnumSecurityClassificationFilter<"Security"> | $Enums.SecurityClassification
    securityTransactionDetail?: SecurityTransactionDetailListRelationFilter
  }

  export type SecurityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    securityClassification?: SortOrder
    securityTransactionDetail?: SecurityTransactionDetailOrderByRelationAggregateInput
  }

  export type SecurityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    shortName?: string
    AND?: SecurityWhereInput | SecurityWhereInput[]
    OR?: SecurityWhereInput[]
    NOT?: SecurityWhereInput | SecurityWhereInput[]
    name?: StringFilter<"Security"> | string
    securityClassification?: EnumSecurityClassificationFilter<"Security"> | $Enums.SecurityClassification
    securityTransactionDetail?: SecurityTransactionDetailListRelationFilter
  }, "id" | "shortName">

  export type SecurityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    securityClassification?: SortOrder
    _count?: SecurityCountOrderByAggregateInput
    _avg?: SecurityAvgOrderByAggregateInput
    _max?: SecurityMaxOrderByAggregateInput
    _min?: SecurityMinOrderByAggregateInput
    _sum?: SecuritySumOrderByAggregateInput
  }

  export type SecurityScalarWhereWithAggregatesInput = {
    AND?: SecurityScalarWhereWithAggregatesInput | SecurityScalarWhereWithAggregatesInput[]
    OR?: SecurityScalarWhereWithAggregatesInput[]
    NOT?: SecurityScalarWhereWithAggregatesInput | SecurityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Security"> | number
    name?: StringWithAggregatesFilter<"Security"> | string
    shortName?: StringWithAggregatesFilter<"Security"> | string
    securityClassification?: EnumSecurityClassificationWithAggregatesFilter<"Security"> | $Enums.SecurityClassification
  }

  export type SecurityTransactionWhereInput = {
    AND?: SecurityTransactionWhereInput | SecurityTransactionWhereInput[]
    OR?: SecurityTransactionWhereInput[]
    NOT?: SecurityTransactionWhereInput | SecurityTransactionWhereInput[]
    id?: IntFilter<"SecurityTransaction"> | number
    transactionDate?: StringFilter<"SecurityTransaction"> | string
    entryDate?: DateTimeFilter<"SecurityTransaction"> | Date | string
    securityTransactionDetail?: SecurityTransactionDetailListRelationFilter
  }

  export type SecurityTransactionOrderByWithRelationInput = {
    id?: SortOrder
    transactionDate?: SortOrder
    entryDate?: SortOrder
    securityTransactionDetail?: SecurityTransactionDetailOrderByRelationAggregateInput
  }

  export type SecurityTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SecurityTransactionWhereInput | SecurityTransactionWhereInput[]
    OR?: SecurityTransactionWhereInput[]
    NOT?: SecurityTransactionWhereInput | SecurityTransactionWhereInput[]
    transactionDate?: StringFilter<"SecurityTransaction"> | string
    entryDate?: DateTimeFilter<"SecurityTransaction"> | Date | string
    securityTransactionDetail?: SecurityTransactionDetailListRelationFilter
  }, "id">

  export type SecurityTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    transactionDate?: SortOrder
    entryDate?: SortOrder
    _count?: SecurityTransactionCountOrderByAggregateInput
    _avg?: SecurityTransactionAvgOrderByAggregateInput
    _max?: SecurityTransactionMaxOrderByAggregateInput
    _min?: SecurityTransactionMinOrderByAggregateInput
    _sum?: SecurityTransactionSumOrderByAggregateInput
  }

  export type SecurityTransactionScalarWhereWithAggregatesInput = {
    AND?: SecurityTransactionScalarWhereWithAggregatesInput | SecurityTransactionScalarWhereWithAggregatesInput[]
    OR?: SecurityTransactionScalarWhereWithAggregatesInput[]
    NOT?: SecurityTransactionScalarWhereWithAggregatesInput | SecurityTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SecurityTransaction"> | number
    transactionDate?: StringWithAggregatesFilter<"SecurityTransaction"> | string
    entryDate?: DateTimeWithAggregatesFilter<"SecurityTransaction"> | Date | string
  }

  export type SecurityTransactionDetailWhereInput = {
    AND?: SecurityTransactionDetailWhereInput | SecurityTransactionDetailWhereInput[]
    OR?: SecurityTransactionDetailWhereInput[]
    NOT?: SecurityTransactionDetailWhereInput | SecurityTransactionDetailWhereInput[]
    id?: IntFilter<"SecurityTransactionDetail"> | number
    quantity?: FloatFilter<"SecurityTransactionDetail"> | number
    price?: FloatFilter<"SecurityTransactionDetail"> | number
    amount?: FloatFilter<"SecurityTransactionDetail"> | number
    securityAdditionNature?: EnumSecurityAdditionNatureNullableFilter<"SecurityTransactionDetail"> | $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS?: EnumSecurityClassificationAsPerNFRSFilter<"SecurityTransactionDetail"> | $Enums.SecurityClassificationAsPerNFRS
    securityId?: IntFilter<"SecurityTransactionDetail"> | number
    securityTransactionId?: IntFilter<"SecurityTransactionDetail"> | number
    remarks?: StringNullableFilter<"SecurityTransactionDetail"> | string | null
    security?: XOR<SecurityScalarRelationFilter, SecurityWhereInput>
    securityTransaction?: XOR<SecurityTransactionScalarRelationFilter, SecurityTransactionWhereInput>
  }

  export type SecurityTransactionDetailOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    amount?: SortOrder
    securityAdditionNature?: SortOrderInput | SortOrder
    securityClassificationAsPerNFRS?: SortOrder
    securityId?: SortOrder
    securityTransactionId?: SortOrder
    remarks?: SortOrderInput | SortOrder
    security?: SecurityOrderByWithRelationInput
    securityTransaction?: SecurityTransactionOrderByWithRelationInput
  }

  export type SecurityTransactionDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SecurityTransactionDetailWhereInput | SecurityTransactionDetailWhereInput[]
    OR?: SecurityTransactionDetailWhereInput[]
    NOT?: SecurityTransactionDetailWhereInput | SecurityTransactionDetailWhereInput[]
    quantity?: FloatFilter<"SecurityTransactionDetail"> | number
    price?: FloatFilter<"SecurityTransactionDetail"> | number
    amount?: FloatFilter<"SecurityTransactionDetail"> | number
    securityAdditionNature?: EnumSecurityAdditionNatureNullableFilter<"SecurityTransactionDetail"> | $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS?: EnumSecurityClassificationAsPerNFRSFilter<"SecurityTransactionDetail"> | $Enums.SecurityClassificationAsPerNFRS
    securityId?: IntFilter<"SecurityTransactionDetail"> | number
    securityTransactionId?: IntFilter<"SecurityTransactionDetail"> | number
    remarks?: StringNullableFilter<"SecurityTransactionDetail"> | string | null
    security?: XOR<SecurityScalarRelationFilter, SecurityWhereInput>
    securityTransaction?: XOR<SecurityTransactionScalarRelationFilter, SecurityTransactionWhereInput>
  }, "id">

  export type SecurityTransactionDetailOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    amount?: SortOrder
    securityAdditionNature?: SortOrderInput | SortOrder
    securityClassificationAsPerNFRS?: SortOrder
    securityId?: SortOrder
    securityTransactionId?: SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: SecurityTransactionDetailCountOrderByAggregateInput
    _avg?: SecurityTransactionDetailAvgOrderByAggregateInput
    _max?: SecurityTransactionDetailMaxOrderByAggregateInput
    _min?: SecurityTransactionDetailMinOrderByAggregateInput
    _sum?: SecurityTransactionDetailSumOrderByAggregateInput
  }

  export type SecurityTransactionDetailScalarWhereWithAggregatesInput = {
    AND?: SecurityTransactionDetailScalarWhereWithAggregatesInput | SecurityTransactionDetailScalarWhereWithAggregatesInput[]
    OR?: SecurityTransactionDetailScalarWhereWithAggregatesInput[]
    NOT?: SecurityTransactionDetailScalarWhereWithAggregatesInput | SecurityTransactionDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SecurityTransactionDetail"> | number
    quantity?: FloatWithAggregatesFilter<"SecurityTransactionDetail"> | number
    price?: FloatWithAggregatesFilter<"SecurityTransactionDetail"> | number
    amount?: FloatWithAggregatesFilter<"SecurityTransactionDetail"> | number
    securityAdditionNature?: EnumSecurityAdditionNatureNullableWithAggregatesFilter<"SecurityTransactionDetail"> | $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS?: EnumSecurityClassificationAsPerNFRSWithAggregatesFilter<"SecurityTransactionDetail"> | $Enums.SecurityClassificationAsPerNFRS
    securityId?: IntWithAggregatesFilter<"SecurityTransactionDetail"> | number
    securityTransactionId?: IntWithAggregatesFilter<"SecurityTransactionDetail"> | number
    remarks?: StringNullableWithAggregatesFilter<"SecurityTransactionDetail"> | string | null
  }

  export type UserCreateInput = {
    name: string
    username: string
    password: string
    email: string
    requirePasswordChange?: boolean
    role?: $Enums.UserRole
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    password: string
    email: string
    requirePasswordChange?: boolean
    role?: $Enums.UserRole
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    requirePasswordChange?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    requirePasswordChange?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    username: string
    password: string
    email: string
    requirePasswordChange?: boolean
    role?: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    requirePasswordChange?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    requirePasswordChange?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type ShareUploadHistoryCreateInput = {
    ownershipType: $Enums.OwnershipType
    ownershipDate: string
    remarks: string
    shareHistory?: ShareHistoryCreateNestedManyWithoutShareUploadHistoryInput
  }

  export type ShareUploadHistoryUncheckedCreateInput = {
    id?: number
    ownershipType: $Enums.OwnershipType
    ownershipDate: string
    remarks: string
    shareHistory?: ShareHistoryUncheckedCreateNestedManyWithoutShareUploadHistoryInput
  }

  export type ShareUploadHistoryUpdateInput = {
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    ownershipDate?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    shareHistory?: ShareHistoryUpdateManyWithoutShareUploadHistoryNestedInput
  }

  export type ShareUploadHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    ownershipDate?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    shareHistory?: ShareHistoryUncheckedUpdateManyWithoutShareUploadHistoryNestedInput
  }

  export type ShareUploadHistoryCreateManyInput = {
    id?: number
    ownershipType: $Enums.OwnershipType
    ownershipDate: string
    remarks: string
  }

  export type ShareUploadHistoryUpdateManyMutationInput = {
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    ownershipDate?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
  }

  export type ShareUploadHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    ownershipDate?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
  }

  export type DividendUploadHistoryCreateInput = {
    dividendUploadType: $Enums.DividenUploadType
    transactionDateRange: string
    remarks: string
    dividend?: DividendCreateNestedManyWithoutDividendUploadHistoryInput
  }

  export type DividendUploadHistoryUncheckedCreateInput = {
    id?: number
    dividendUploadType: $Enums.DividenUploadType
    transactionDateRange: string
    remarks: string
    dividend?: DividendUncheckedCreateNestedManyWithoutDividendUploadHistoryInput
  }

  export type DividendUploadHistoryUpdateInput = {
    dividendUploadType?: EnumDividenUploadTypeFieldUpdateOperationsInput | $Enums.DividenUploadType
    transactionDateRange?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    dividend?: DividendUpdateManyWithoutDividendUploadHistoryNestedInput
  }

  export type DividendUploadHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dividendUploadType?: EnumDividenUploadTypeFieldUpdateOperationsInput | $Enums.DividenUploadType
    transactionDateRange?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
    dividend?: DividendUncheckedUpdateManyWithoutDividendUploadHistoryNestedInput
  }

  export type DividendUploadHistoryCreateManyInput = {
    id?: number
    dividendUploadType: $Enums.DividenUploadType
    transactionDateRange: string
    remarks: string
  }

  export type DividendUploadHistoryUpdateManyMutationInput = {
    dividendUploadType?: EnumDividenUploadTypeFieldUpdateOperationsInput | $Enums.DividenUploadType
    transactionDateRange?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
  }

  export type DividendUploadHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dividendUploadType?: EnumDividenUploadTypeFieldUpdateOperationsInput | $Enums.DividenUploadType
    transactionDateRange?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
  }

  export type DividendCreateInput = {
    amount: number
    transactionDate: string
    sendingBankName?: string | null
    sendingBankAccount?: string | null
    receivingBankName?: string | null
    receivingBankAccount?: string | null
    remarks: string
    entryDate?: Date | string
    shareholder: ShareholderCreateNestedOneWithoutDividendInput
    dividendUploadHistory?: DividendUploadHistoryCreateNestedOneWithoutDividendInput
  }

  export type DividendUncheckedCreateInput = {
    id?: number
    amount: number
    transactionDate: string
    shareholderId: number
    sendingBankName?: string | null
    sendingBankAccount?: string | null
    receivingBankName?: string | null
    receivingBankAccount?: string | null
    dividendUploadHistoryId?: number | null
    remarks: string
    entryDate?: Date | string
  }

  export type DividendUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    sendingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    sendingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shareholder?: ShareholderUpdateOneRequiredWithoutDividendNestedInput
    dividendUploadHistory?: DividendUploadHistoryUpdateOneWithoutDividendNestedInput
  }

  export type DividendUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    shareholderId?: IntFieldUpdateOperationsInput | number
    sendingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    sendingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividendUploadHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DividendCreateManyInput = {
    id?: number
    amount: number
    transactionDate: string
    shareholderId: number
    sendingBankName?: string | null
    sendingBankAccount?: string | null
    receivingBankName?: string | null
    receivingBankAccount?: string | null
    dividendUploadHistoryId?: number | null
    remarks: string
    entryDate?: Date | string
  }

  export type DividendUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    sendingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    sendingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DividendUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    shareholderId?: IntFieldUpdateOperationsInput | number
    sendingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    sendingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividendUploadHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareHistoryCreateInput = {
    ownershipType: $Enums.OwnershipType
    unitsOfShareChanged: number
    balanceUnitsOfShare: number
    transactionDate: string
    ratePerShare: number
    remarks?: string | null
    entryDateTime?: Date | string
    shareholder: ShareholderCreateNestedOneWithoutShareHistoryInput
    shareTransferHistory?: ShareTransferHistoryCreateNestedOneWithoutShareHistoryInput
    shareUploadHistory?: ShareUploadHistoryCreateNestedOneWithoutShareHistoryInput
  }

  export type ShareHistoryUncheckedCreateInput = {
    id?: number
    ownershipType: $Enums.OwnershipType
    unitsOfShareChanged: number
    balanceUnitsOfShare: number
    transactionDate: string
    shareholderId: number
    ratePerShare: number
    shareTransferHistoryId?: number | null
    shareUploadHistoryId?: number | null
    remarks?: string | null
    entryDateTime?: Date | string
  }

  export type ShareHistoryUpdateInput = {
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFieldUpdateOperationsInput | number
    balanceUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    ratePerShare?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    shareholder?: ShareholderUpdateOneRequiredWithoutShareHistoryNestedInput
    shareTransferHistory?: ShareTransferHistoryUpdateOneWithoutShareHistoryNestedInput
    shareUploadHistory?: ShareUploadHistoryUpdateOneWithoutShareHistoryNestedInput
  }

  export type ShareHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFieldUpdateOperationsInput | number
    balanceUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    shareholderId?: IntFieldUpdateOperationsInput | number
    ratePerShare?: FloatFieldUpdateOperationsInput | number
    shareTransferHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    shareUploadHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareHistoryCreateManyInput = {
    id?: number
    ownershipType: $Enums.OwnershipType
    unitsOfShareChanged: number
    balanceUnitsOfShare: number
    transactionDate: string
    shareholderId: number
    ratePerShare: number
    shareTransferHistoryId?: number | null
    shareUploadHistoryId?: number | null
    remarks?: string | null
    entryDateTime?: Date | string
  }

  export type ShareHistoryUpdateManyMutationInput = {
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFieldUpdateOperationsInput | number
    balanceUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    ratePerShare?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFieldUpdateOperationsInput | number
    balanceUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    shareholderId?: IntFieldUpdateOperationsInput | number
    ratePerShare?: FloatFieldUpdateOperationsInput | number
    shareTransferHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    shareUploadHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareCreateInput = {
    unitsOfShare: number
    ownershipType: $Enums.OwnershipType
    ownershipDate: string
    cost: number
    remarks?: string | null
    shareholder: ShareholderCreateNestedOneWithoutShareInput
  }

  export type ShareUncheckedCreateInput = {
    id?: number
    unitsOfShare: number
    ownershipType: $Enums.OwnershipType
    ownershipDate: string
    cost: number
    shareholderId: number
    remarks?: string | null
  }

  export type ShareUpdateInput = {
    unitsOfShare?: FloatFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    ownershipDate?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    shareholder?: ShareholderUpdateOneRequiredWithoutShareNestedInput
  }

  export type ShareUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    unitsOfShare?: FloatFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    ownershipDate?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    shareholderId?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShareCreateManyInput = {
    id?: number
    unitsOfShare: number
    ownershipType: $Enums.OwnershipType
    ownershipDate: string
    cost: number
    shareholderId: number
    remarks?: string | null
  }

  export type ShareUpdateManyMutationInput = {
    unitsOfShare?: FloatFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    ownershipDate?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShareUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    unitsOfShare?: FloatFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    ownershipDate?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    shareholderId?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShareTransferHistoryCreateInput = {
    transferType: $Enums.TransferType
    remarks: string
    transferRate: number
    wacc: number
    transferredUnitsOfShare: number
    totalGain: number
    transferDate: string
    entryDate?: Date | string
    transferingShareholder: ShareholderCreateNestedOneWithoutTransferredShareHistoryInput
    receivingShareholder: ShareholderCreateNestedOneWithoutReceivedShareHistoryInput
    shareHistory?: ShareHistoryCreateNestedManyWithoutShareTransferHistoryInput
  }

  export type ShareTransferHistoryUncheckedCreateInput = {
    id?: number
    transferingShareholderId: number
    receivingShareholderId: number
    transferType: $Enums.TransferType
    remarks: string
    transferRate: number
    wacc: number
    transferredUnitsOfShare: number
    totalGain: number
    transferDate: string
    entryDate?: Date | string
    shareHistory?: ShareHistoryUncheckedCreateNestedManyWithoutShareTransferHistoryInput
  }

  export type ShareTransferHistoryUpdateInput = {
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    remarks?: StringFieldUpdateOperationsInput | string
    transferRate?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    transferredUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    totalGain?: FloatFieldUpdateOperationsInput | number
    transferDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transferingShareholder?: ShareholderUpdateOneRequiredWithoutTransferredShareHistoryNestedInput
    receivingShareholder?: ShareholderUpdateOneRequiredWithoutReceivedShareHistoryNestedInput
    shareHistory?: ShareHistoryUpdateManyWithoutShareTransferHistoryNestedInput
  }

  export type ShareTransferHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transferingShareholderId?: IntFieldUpdateOperationsInput | number
    receivingShareholderId?: IntFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    remarks?: StringFieldUpdateOperationsInput | string
    transferRate?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    transferredUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    totalGain?: FloatFieldUpdateOperationsInput | number
    transferDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shareHistory?: ShareHistoryUncheckedUpdateManyWithoutShareTransferHistoryNestedInput
  }

  export type ShareTransferHistoryCreateManyInput = {
    id?: number
    transferingShareholderId: number
    receivingShareholderId: number
    transferType: $Enums.TransferType
    remarks: string
    transferRate: number
    wacc: number
    transferredUnitsOfShare: number
    totalGain: number
    transferDate: string
    entryDate?: Date | string
  }

  export type ShareTransferHistoryUpdateManyMutationInput = {
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    remarks?: StringFieldUpdateOperationsInput | string
    transferRate?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    transferredUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    totalGain?: FloatFieldUpdateOperationsInput | number
    transferDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareTransferHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transferingShareholderId?: IntFieldUpdateOperationsInput | number
    receivingShareholderId?: IntFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    remarks?: StringFieldUpdateOperationsInput | string
    transferRate?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    transferredUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    totalGain?: FloatFieldUpdateOperationsInput | number
    transferDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaccHistoryCreateInput = {
    totalCost: number
    totalUnitsOfShare: number
    wacc: number
    calculationDate: string
    shareholder: ShareholderCreateNestedOneWithoutWaccHistoryInput
  }

  export type WaccHistoryUncheckedCreateInput = {
    id?: number
    shareholderId: number
    totalCost: number
    totalUnitsOfShare: number
    wacc: number
    calculationDate: string
  }

  export type WaccHistoryUpdateInput = {
    totalCost?: FloatFieldUpdateOperationsInput | number
    totalUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    calculationDate?: StringFieldUpdateOperationsInput | string
    shareholder?: ShareholderUpdateOneRequiredWithoutWaccHistoryNestedInput
  }

  export type WaccHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shareholderId?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    totalUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    calculationDate?: StringFieldUpdateOperationsInput | string
  }

  export type WaccHistoryCreateManyInput = {
    id?: number
    shareholderId: number
    totalCost: number
    totalUnitsOfShare: number
    wacc: number
    calculationDate: string
  }

  export type WaccHistoryUpdateManyMutationInput = {
    totalCost?: FloatFieldUpdateOperationsInput | number
    totalUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    calculationDate?: StringFieldUpdateOperationsInput | string
  }

  export type WaccHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shareholderId?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    totalUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    calculationDate?: StringFieldUpdateOperationsInput | string
  }

  export type ShareholderCreateInput = {
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
    dividend?: DividendCreateNestedManyWithoutShareholderInput
    share?: ShareCreateNestedManyWithoutShareholderInput
    shareHistory?: ShareHistoryCreateNestedManyWithoutShareholderInput
    transferredShareHistory?: ShareTransferHistoryCreateNestedManyWithoutTransferingShareholderInput
    receivedShareHistory?: ShareTransferHistoryCreateNestedManyWithoutReceivingShareholderInput
    waccHistory?: WaccHistoryCreateNestedManyWithoutShareholderInput
  }

  export type ShareholderUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
    dividend?: DividendUncheckedCreateNestedManyWithoutShareholderInput
    share?: ShareUncheckedCreateNestedManyWithoutShareholderInput
    shareHistory?: ShareHistoryUncheckedCreateNestedManyWithoutShareholderInput
    transferredShareHistory?: ShareTransferHistoryUncheckedCreateNestedManyWithoutTransferingShareholderInput
    receivedShareHistory?: ShareTransferHistoryUncheckedCreateNestedManyWithoutReceivingShareholderInput
    waccHistory?: WaccHistoryUncheckedCreateNestedManyWithoutShareholderInput
  }

  export type ShareholderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividend?: DividendUpdateManyWithoutShareholderNestedInput
    share?: ShareUpdateManyWithoutShareholderNestedInput
    shareHistory?: ShareHistoryUpdateManyWithoutShareholderNestedInput
    transferredShareHistory?: ShareTransferHistoryUpdateManyWithoutTransferingShareholderNestedInput
    receivedShareHistory?: ShareTransferHistoryUpdateManyWithoutReceivingShareholderNestedInput
    waccHistory?: WaccHistoryUpdateManyWithoutShareholderNestedInput
  }

  export type ShareholderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividend?: DividendUncheckedUpdateManyWithoutShareholderNestedInput
    share?: ShareUncheckedUpdateManyWithoutShareholderNestedInput
    shareHistory?: ShareHistoryUncheckedUpdateManyWithoutShareholderNestedInput
    transferredShareHistory?: ShareTransferHistoryUncheckedUpdateManyWithoutTransferingShareholderNestedInput
    receivedShareHistory?: ShareTransferHistoryUncheckedUpdateManyWithoutReceivingShareholderNestedInput
    waccHistory?: WaccHistoryUncheckedUpdateManyWithoutShareholderNestedInput
  }

  export type ShareholderCreateManyInput = {
    id?: number
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
  }

  export type ShareholderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShareholderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecurityCreateInput = {
    name: string
    shortName: string
    securityClassification: $Enums.SecurityClassification
    securityTransactionDetail?: SecurityTransactionDetailCreateNestedManyWithoutSecurityInput
  }

  export type SecurityUncheckedCreateInput = {
    id?: number
    name: string
    shortName: string
    securityClassification: $Enums.SecurityClassification
    securityTransactionDetail?: SecurityTransactionDetailUncheckedCreateNestedManyWithoutSecurityInput
  }

  export type SecurityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    securityClassification?: EnumSecurityClassificationFieldUpdateOperationsInput | $Enums.SecurityClassification
    securityTransactionDetail?: SecurityTransactionDetailUpdateManyWithoutSecurityNestedInput
  }

  export type SecurityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    securityClassification?: EnumSecurityClassificationFieldUpdateOperationsInput | $Enums.SecurityClassification
    securityTransactionDetail?: SecurityTransactionDetailUncheckedUpdateManyWithoutSecurityNestedInput
  }

  export type SecurityCreateManyInput = {
    id?: number
    name: string
    shortName: string
    securityClassification: $Enums.SecurityClassification
  }

  export type SecurityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    securityClassification?: EnumSecurityClassificationFieldUpdateOperationsInput | $Enums.SecurityClassification
  }

  export type SecurityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    securityClassification?: EnumSecurityClassificationFieldUpdateOperationsInput | $Enums.SecurityClassification
  }

  export type SecurityTransactionCreateInput = {
    transactionDate: string
    entryDate?: Date | string
    securityTransactionDetail?: SecurityTransactionDetailCreateNestedManyWithoutSecurityTransactionInput
  }

  export type SecurityTransactionUncheckedCreateInput = {
    id?: number
    transactionDate: string
    entryDate?: Date | string
    securityTransactionDetail?: SecurityTransactionDetailUncheckedCreateNestedManyWithoutSecurityTransactionInput
  }

  export type SecurityTransactionUpdateInput = {
    transactionDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    securityTransactionDetail?: SecurityTransactionDetailUpdateManyWithoutSecurityTransactionNestedInput
  }

  export type SecurityTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    securityTransactionDetail?: SecurityTransactionDetailUncheckedUpdateManyWithoutSecurityTransactionNestedInput
  }

  export type SecurityTransactionCreateManyInput = {
    id?: number
    transactionDate: string
    entryDate?: Date | string
  }

  export type SecurityTransactionUpdateManyMutationInput = {
    transactionDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityTransactionDetailCreateInput = {
    quantity: number
    price: number
    amount: number
    securityAdditionNature?: $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS: $Enums.SecurityClassificationAsPerNFRS
    remarks?: string | null
    security: SecurityCreateNestedOneWithoutSecurityTransactionDetailInput
    securityTransaction: SecurityTransactionCreateNestedOneWithoutSecurityTransactionDetailInput
  }

  export type SecurityTransactionDetailUncheckedCreateInput = {
    id?: number
    quantity: number
    price: number
    amount: number
    securityAdditionNature?: $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS: $Enums.SecurityClassificationAsPerNFRS
    securityId: number
    securityTransactionId: number
    remarks?: string | null
  }

  export type SecurityTransactionDetailUpdateInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    securityAdditionNature?: NullableEnumSecurityAdditionNatureFieldUpdateOperationsInput | $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS?: EnumSecurityClassificationAsPerNFRSFieldUpdateOperationsInput | $Enums.SecurityClassificationAsPerNFRS
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    security?: SecurityUpdateOneRequiredWithoutSecurityTransactionDetailNestedInput
    securityTransaction?: SecurityTransactionUpdateOneRequiredWithoutSecurityTransactionDetailNestedInput
  }

  export type SecurityTransactionDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    securityAdditionNature?: NullableEnumSecurityAdditionNatureFieldUpdateOperationsInput | $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS?: EnumSecurityClassificationAsPerNFRSFieldUpdateOperationsInput | $Enums.SecurityClassificationAsPerNFRS
    securityId?: IntFieldUpdateOperationsInput | number
    securityTransactionId?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecurityTransactionDetailCreateManyInput = {
    id?: number
    quantity: number
    price: number
    amount: number
    securityAdditionNature?: $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS: $Enums.SecurityClassificationAsPerNFRS
    securityId: number
    securityTransactionId: number
    remarks?: string | null
  }

  export type SecurityTransactionDetailUpdateManyMutationInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    securityAdditionNature?: NullableEnumSecurityAdditionNatureFieldUpdateOperationsInput | $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS?: EnumSecurityClassificationAsPerNFRSFieldUpdateOperationsInput | $Enums.SecurityClassificationAsPerNFRS
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecurityTransactionDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    securityAdditionNature?: NullableEnumSecurityAdditionNatureFieldUpdateOperationsInput | $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS?: EnumSecurityClassificationAsPerNFRSFieldUpdateOperationsInput | $Enums.SecurityClassificationAsPerNFRS
    securityId?: IntFieldUpdateOperationsInput | number
    securityTransactionId?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    requirePasswordChange?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    requirePasswordChange?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    requirePasswordChange?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumOwnershipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipType | EnumOwnershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnershipTypeFilter<$PrismaModel> | $Enums.OwnershipType
  }

  export type ShareHistoryListRelationFilter = {
    every?: ShareHistoryWhereInput
    some?: ShareHistoryWhereInput
    none?: ShareHistoryWhereInput
  }

  export type ShareHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShareUploadHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    ownershipType?: SortOrder
    ownershipDate?: SortOrder
    remarks?: SortOrder
  }

  export type ShareUploadHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShareUploadHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    ownershipType?: SortOrder
    ownershipDate?: SortOrder
    remarks?: SortOrder
  }

  export type ShareUploadHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    ownershipType?: SortOrder
    ownershipDate?: SortOrder
    remarks?: SortOrder
  }

  export type ShareUploadHistorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumOwnershipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipType | EnumOwnershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnershipTypeWithAggregatesFilter<$PrismaModel> | $Enums.OwnershipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnershipTypeFilter<$PrismaModel>
    _max?: NestedEnumOwnershipTypeFilter<$PrismaModel>
  }

  export type EnumDividenUploadTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DividenUploadType | EnumDividenUploadTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DividenUploadType[] | ListEnumDividenUploadTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DividenUploadType[] | ListEnumDividenUploadTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDividenUploadTypeFilter<$PrismaModel> | $Enums.DividenUploadType
  }

  export type DividendListRelationFilter = {
    every?: DividendWhereInput
    some?: DividendWhereInput
    none?: DividendWhereInput
  }

  export type DividendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DividendUploadHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    dividendUploadType?: SortOrder
    transactionDateRange?: SortOrder
    remarks?: SortOrder
  }

  export type DividendUploadHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DividendUploadHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    dividendUploadType?: SortOrder
    transactionDateRange?: SortOrder
    remarks?: SortOrder
  }

  export type DividendUploadHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    dividendUploadType?: SortOrder
    transactionDateRange?: SortOrder
    remarks?: SortOrder
  }

  export type DividendUploadHistorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumDividenUploadTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DividenUploadType | EnumDividenUploadTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DividenUploadType[] | ListEnumDividenUploadTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DividenUploadType[] | ListEnumDividenUploadTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDividenUploadTypeWithAggregatesFilter<$PrismaModel> | $Enums.DividenUploadType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDividenUploadTypeFilter<$PrismaModel>
    _max?: NestedEnumDividenUploadTypeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ShareholderScalarRelationFilter = {
    is?: ShareholderWhereInput
    isNot?: ShareholderWhereInput
  }

  export type DividendUploadHistoryNullableScalarRelationFilter = {
    is?: DividendUploadHistoryWhereInput | null
    isNot?: DividendUploadHistoryWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DividendCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    transactionDate?: SortOrder
    shareholderId?: SortOrder
    sendingBankName?: SortOrder
    sendingBankAccount?: SortOrder
    receivingBankName?: SortOrder
    receivingBankAccount?: SortOrder
    dividendUploadHistoryId?: SortOrder
    remarks?: SortOrder
    entryDate?: SortOrder
  }

  export type DividendAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    shareholderId?: SortOrder
    dividendUploadHistoryId?: SortOrder
  }

  export type DividendMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    transactionDate?: SortOrder
    shareholderId?: SortOrder
    sendingBankName?: SortOrder
    sendingBankAccount?: SortOrder
    receivingBankName?: SortOrder
    receivingBankAccount?: SortOrder
    dividendUploadHistoryId?: SortOrder
    remarks?: SortOrder
    entryDate?: SortOrder
  }

  export type DividendMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    transactionDate?: SortOrder
    shareholderId?: SortOrder
    sendingBankName?: SortOrder
    sendingBankAccount?: SortOrder
    receivingBankName?: SortOrder
    receivingBankAccount?: SortOrder
    dividendUploadHistoryId?: SortOrder
    remarks?: SortOrder
    entryDate?: SortOrder
  }

  export type DividendSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    shareholderId?: SortOrder
    dividendUploadHistoryId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ShareTransferHistoryNullableScalarRelationFilter = {
    is?: ShareTransferHistoryWhereInput | null
    isNot?: ShareTransferHistoryWhereInput | null
  }

  export type ShareUploadHistoryNullableScalarRelationFilter = {
    is?: ShareUploadHistoryWhereInput | null
    isNot?: ShareUploadHistoryWhereInput | null
  }

  export type ShareHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    ownershipType?: SortOrder
    unitsOfShareChanged?: SortOrder
    balanceUnitsOfShare?: SortOrder
    transactionDate?: SortOrder
    shareholderId?: SortOrder
    ratePerShare?: SortOrder
    shareTransferHistoryId?: SortOrder
    shareUploadHistoryId?: SortOrder
    remarks?: SortOrder
    entryDateTime?: SortOrder
  }

  export type ShareHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    unitsOfShareChanged?: SortOrder
    balanceUnitsOfShare?: SortOrder
    shareholderId?: SortOrder
    ratePerShare?: SortOrder
    shareTransferHistoryId?: SortOrder
    shareUploadHistoryId?: SortOrder
  }

  export type ShareHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    ownershipType?: SortOrder
    unitsOfShareChanged?: SortOrder
    balanceUnitsOfShare?: SortOrder
    transactionDate?: SortOrder
    shareholderId?: SortOrder
    ratePerShare?: SortOrder
    shareTransferHistoryId?: SortOrder
    shareUploadHistoryId?: SortOrder
    remarks?: SortOrder
    entryDateTime?: SortOrder
  }

  export type ShareHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    ownershipType?: SortOrder
    unitsOfShareChanged?: SortOrder
    balanceUnitsOfShare?: SortOrder
    transactionDate?: SortOrder
    shareholderId?: SortOrder
    ratePerShare?: SortOrder
    shareTransferHistoryId?: SortOrder
    shareUploadHistoryId?: SortOrder
    remarks?: SortOrder
    entryDateTime?: SortOrder
  }

  export type ShareHistorySumOrderByAggregateInput = {
    id?: SortOrder
    unitsOfShareChanged?: SortOrder
    balanceUnitsOfShare?: SortOrder
    shareholderId?: SortOrder
    ratePerShare?: SortOrder
    shareTransferHistoryId?: SortOrder
    shareUploadHistoryId?: SortOrder
  }

  export type ShareCountOrderByAggregateInput = {
    id?: SortOrder
    unitsOfShare?: SortOrder
    ownershipType?: SortOrder
    ownershipDate?: SortOrder
    cost?: SortOrder
    shareholderId?: SortOrder
    remarks?: SortOrder
  }

  export type ShareAvgOrderByAggregateInput = {
    id?: SortOrder
    unitsOfShare?: SortOrder
    cost?: SortOrder
    shareholderId?: SortOrder
  }

  export type ShareMaxOrderByAggregateInput = {
    id?: SortOrder
    unitsOfShare?: SortOrder
    ownershipType?: SortOrder
    ownershipDate?: SortOrder
    cost?: SortOrder
    shareholderId?: SortOrder
    remarks?: SortOrder
  }

  export type ShareMinOrderByAggregateInput = {
    id?: SortOrder
    unitsOfShare?: SortOrder
    ownershipType?: SortOrder
    ownershipDate?: SortOrder
    cost?: SortOrder
    shareholderId?: SortOrder
    remarks?: SortOrder
  }

  export type ShareSumOrderByAggregateInput = {
    id?: SortOrder
    unitsOfShare?: SortOrder
    cost?: SortOrder
    shareholderId?: SortOrder
  }

  export type EnumTransferTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferType | EnumTransferTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransferType[] | ListEnumTransferTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransferType[] | ListEnumTransferTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransferTypeFilter<$PrismaModel> | $Enums.TransferType
  }

  export type ShareTransferHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    transferingShareholderId?: SortOrder
    receivingShareholderId?: SortOrder
    transferType?: SortOrder
    remarks?: SortOrder
    transferRate?: SortOrder
    wacc?: SortOrder
    transferredUnitsOfShare?: SortOrder
    totalGain?: SortOrder
    transferDate?: SortOrder
    entryDate?: SortOrder
  }

  export type ShareTransferHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    transferingShareholderId?: SortOrder
    receivingShareholderId?: SortOrder
    transferRate?: SortOrder
    wacc?: SortOrder
    transferredUnitsOfShare?: SortOrder
    totalGain?: SortOrder
  }

  export type ShareTransferHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    transferingShareholderId?: SortOrder
    receivingShareholderId?: SortOrder
    transferType?: SortOrder
    remarks?: SortOrder
    transferRate?: SortOrder
    wacc?: SortOrder
    transferredUnitsOfShare?: SortOrder
    totalGain?: SortOrder
    transferDate?: SortOrder
    entryDate?: SortOrder
  }

  export type ShareTransferHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    transferingShareholderId?: SortOrder
    receivingShareholderId?: SortOrder
    transferType?: SortOrder
    remarks?: SortOrder
    transferRate?: SortOrder
    wacc?: SortOrder
    transferredUnitsOfShare?: SortOrder
    totalGain?: SortOrder
    transferDate?: SortOrder
    entryDate?: SortOrder
  }

  export type ShareTransferHistorySumOrderByAggregateInput = {
    id?: SortOrder
    transferingShareholderId?: SortOrder
    receivingShareholderId?: SortOrder
    transferRate?: SortOrder
    wacc?: SortOrder
    transferredUnitsOfShare?: SortOrder
    totalGain?: SortOrder
  }

  export type EnumTransferTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferType | EnumTransferTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransferType[] | ListEnumTransferTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransferType[] | ListEnumTransferTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransferTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransferType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransferTypeFilter<$PrismaModel>
    _max?: NestedEnumTransferTypeFilter<$PrismaModel>
  }

  export type WaccHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    shareholderId?: SortOrder
    totalCost?: SortOrder
    totalUnitsOfShare?: SortOrder
    wacc?: SortOrder
    calculationDate?: SortOrder
  }

  export type WaccHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    shareholderId?: SortOrder
    totalCost?: SortOrder
    totalUnitsOfShare?: SortOrder
    wacc?: SortOrder
  }

  export type WaccHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    shareholderId?: SortOrder
    totalCost?: SortOrder
    totalUnitsOfShare?: SortOrder
    wacc?: SortOrder
    calculationDate?: SortOrder
  }

  export type WaccHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    shareholderId?: SortOrder
    totalCost?: SortOrder
    totalUnitsOfShare?: SortOrder
    wacc?: SortOrder
    calculationDate?: SortOrder
  }

  export type WaccHistorySumOrderByAggregateInput = {
    id?: SortOrder
    shareholderId?: SortOrder
    totalCost?: SortOrder
    totalUnitsOfShare?: SortOrder
    wacc?: SortOrder
  }

  export type EnumShareholderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShareholderType | EnumShareholderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShareholderType[] | ListEnumShareholderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShareholderType[] | ListEnumShareholderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShareholderTypeFilter<$PrismaModel> | $Enums.ShareholderType
  }

  export type ShareListRelationFilter = {
    every?: ShareWhereInput
    some?: ShareWhereInput
    none?: ShareWhereInput
  }

  export type ShareTransferHistoryListRelationFilter = {
    every?: ShareTransferHistoryWhereInput
    some?: ShareTransferHistoryWhereInput
    none?: ShareTransferHistoryWhereInput
  }

  export type WaccHistoryListRelationFilter = {
    every?: WaccHistoryWhereInput
    some?: WaccHistoryWhereInput
    none?: WaccHistoryWhereInput
  }

  export type ShareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShareTransferHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaccHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShareholderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    number?: SortOrder
    ctzOrRegNumber?: SortOrder
    ctzIssueDateOrRegDate?: SortOrder
    fatherName?: SortOrder
    grandfatherName?: SortOrder
    contact?: SortOrder
    address?: SortOrder
    remarks?: SortOrder
    dividendBalance?: SortOrder
    ownedUnitsOfShare?: SortOrder
    wacc?: SortOrder
    bankName?: SortOrder
    bankAccount?: SortOrder
  }

  export type ShareholderAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    dividendBalance?: SortOrder
    ownedUnitsOfShare?: SortOrder
    wacc?: SortOrder
  }

  export type ShareholderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    number?: SortOrder
    ctzOrRegNumber?: SortOrder
    ctzIssueDateOrRegDate?: SortOrder
    fatherName?: SortOrder
    grandfatherName?: SortOrder
    contact?: SortOrder
    address?: SortOrder
    remarks?: SortOrder
    dividendBalance?: SortOrder
    ownedUnitsOfShare?: SortOrder
    wacc?: SortOrder
    bankName?: SortOrder
    bankAccount?: SortOrder
  }

  export type ShareholderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    number?: SortOrder
    ctzOrRegNumber?: SortOrder
    ctzIssueDateOrRegDate?: SortOrder
    fatherName?: SortOrder
    grandfatherName?: SortOrder
    contact?: SortOrder
    address?: SortOrder
    remarks?: SortOrder
    dividendBalance?: SortOrder
    ownedUnitsOfShare?: SortOrder
    wacc?: SortOrder
    bankName?: SortOrder
    bankAccount?: SortOrder
  }

  export type ShareholderSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    dividendBalance?: SortOrder
    ownedUnitsOfShare?: SortOrder
    wacc?: SortOrder
  }

  export type EnumShareholderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShareholderType | EnumShareholderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShareholderType[] | ListEnumShareholderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShareholderType[] | ListEnumShareholderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShareholderTypeWithAggregatesFilter<$PrismaModel> | $Enums.ShareholderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShareholderTypeFilter<$PrismaModel>
    _max?: NestedEnumShareholderTypeFilter<$PrismaModel>
  }

  export type EnumSecurityClassificationFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityClassification | EnumSecurityClassificationFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityClassification[] | ListEnumSecurityClassificationFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityClassification[] | ListEnumSecurityClassificationFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityClassificationFilter<$PrismaModel> | $Enums.SecurityClassification
  }

  export type SecurityTransactionDetailListRelationFilter = {
    every?: SecurityTransactionDetailWhereInput
    some?: SecurityTransactionDetailWhereInput
    none?: SecurityTransactionDetailWhereInput
  }

  export type SecurityTransactionDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SecurityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    securityClassification?: SortOrder
  }

  export type SecurityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SecurityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    securityClassification?: SortOrder
  }

  export type SecurityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    securityClassification?: SortOrder
  }

  export type SecuritySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSecurityClassificationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityClassification | EnumSecurityClassificationFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityClassification[] | ListEnumSecurityClassificationFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityClassification[] | ListEnumSecurityClassificationFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityClassificationWithAggregatesFilter<$PrismaModel> | $Enums.SecurityClassification
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSecurityClassificationFilter<$PrismaModel>
    _max?: NestedEnumSecurityClassificationFilter<$PrismaModel>
  }

  export type SecurityTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    transactionDate?: SortOrder
    entryDate?: SortOrder
  }

  export type SecurityTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SecurityTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionDate?: SortOrder
    entryDate?: SortOrder
  }

  export type SecurityTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    transactionDate?: SortOrder
    entryDate?: SortOrder
  }

  export type SecurityTransactionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSecurityAdditionNatureNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityAdditionNature | EnumSecurityAdditionNatureFieldRefInput<$PrismaModel> | null
    in?: $Enums.SecurityAdditionNature[] | ListEnumSecurityAdditionNatureFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SecurityAdditionNature[] | ListEnumSecurityAdditionNatureFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSecurityAdditionNatureNullableFilter<$PrismaModel> | $Enums.SecurityAdditionNature | null
  }

  export type EnumSecurityClassificationAsPerNFRSFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityClassificationAsPerNFRS | EnumSecurityClassificationAsPerNFRSFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityClassificationAsPerNFRS[] | ListEnumSecurityClassificationAsPerNFRSFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityClassificationAsPerNFRS[] | ListEnumSecurityClassificationAsPerNFRSFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityClassificationAsPerNFRSFilter<$PrismaModel> | $Enums.SecurityClassificationAsPerNFRS
  }

  export type SecurityScalarRelationFilter = {
    is?: SecurityWhereInput
    isNot?: SecurityWhereInput
  }

  export type SecurityTransactionScalarRelationFilter = {
    is?: SecurityTransactionWhereInput
    isNot?: SecurityTransactionWhereInput
  }

  export type SecurityTransactionDetailCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    amount?: SortOrder
    securityAdditionNature?: SortOrder
    securityClassificationAsPerNFRS?: SortOrder
    securityId?: SortOrder
    securityTransactionId?: SortOrder
    remarks?: SortOrder
  }

  export type SecurityTransactionDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    amount?: SortOrder
    securityId?: SortOrder
    securityTransactionId?: SortOrder
  }

  export type SecurityTransactionDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    amount?: SortOrder
    securityAdditionNature?: SortOrder
    securityClassificationAsPerNFRS?: SortOrder
    securityId?: SortOrder
    securityTransactionId?: SortOrder
    remarks?: SortOrder
  }

  export type SecurityTransactionDetailMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    amount?: SortOrder
    securityAdditionNature?: SortOrder
    securityClassificationAsPerNFRS?: SortOrder
    securityId?: SortOrder
    securityTransactionId?: SortOrder
    remarks?: SortOrder
  }

  export type SecurityTransactionDetailSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    amount?: SortOrder
    securityId?: SortOrder
    securityTransactionId?: SortOrder
  }

  export type EnumSecurityAdditionNatureNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityAdditionNature | EnumSecurityAdditionNatureFieldRefInput<$PrismaModel> | null
    in?: $Enums.SecurityAdditionNature[] | ListEnumSecurityAdditionNatureFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SecurityAdditionNature[] | ListEnumSecurityAdditionNatureFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSecurityAdditionNatureNullableWithAggregatesFilter<$PrismaModel> | $Enums.SecurityAdditionNature | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSecurityAdditionNatureNullableFilter<$PrismaModel>
    _max?: NestedEnumSecurityAdditionNatureNullableFilter<$PrismaModel>
  }

  export type EnumSecurityClassificationAsPerNFRSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityClassificationAsPerNFRS | EnumSecurityClassificationAsPerNFRSFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityClassificationAsPerNFRS[] | ListEnumSecurityClassificationAsPerNFRSFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityClassificationAsPerNFRS[] | ListEnumSecurityClassificationAsPerNFRSFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityClassificationAsPerNFRSWithAggregatesFilter<$PrismaModel> | $Enums.SecurityClassificationAsPerNFRS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSecurityClassificationAsPerNFRSFilter<$PrismaModel>
    _max?: NestedEnumSecurityClassificationAsPerNFRSFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShareHistoryCreateNestedManyWithoutShareUploadHistoryInput = {
    create?: XOR<ShareHistoryCreateWithoutShareUploadHistoryInput, ShareHistoryUncheckedCreateWithoutShareUploadHistoryInput> | ShareHistoryCreateWithoutShareUploadHistoryInput[] | ShareHistoryUncheckedCreateWithoutShareUploadHistoryInput[]
    connectOrCreate?: ShareHistoryCreateOrConnectWithoutShareUploadHistoryInput | ShareHistoryCreateOrConnectWithoutShareUploadHistoryInput[]
    createMany?: ShareHistoryCreateManyShareUploadHistoryInputEnvelope
    connect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
  }

  export type ShareHistoryUncheckedCreateNestedManyWithoutShareUploadHistoryInput = {
    create?: XOR<ShareHistoryCreateWithoutShareUploadHistoryInput, ShareHistoryUncheckedCreateWithoutShareUploadHistoryInput> | ShareHistoryCreateWithoutShareUploadHistoryInput[] | ShareHistoryUncheckedCreateWithoutShareUploadHistoryInput[]
    connectOrCreate?: ShareHistoryCreateOrConnectWithoutShareUploadHistoryInput | ShareHistoryCreateOrConnectWithoutShareUploadHistoryInput[]
    createMany?: ShareHistoryCreateManyShareUploadHistoryInputEnvelope
    connect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
  }

  export type EnumOwnershipTypeFieldUpdateOperationsInput = {
    set?: $Enums.OwnershipType
  }

  export type ShareHistoryUpdateManyWithoutShareUploadHistoryNestedInput = {
    create?: XOR<ShareHistoryCreateWithoutShareUploadHistoryInput, ShareHistoryUncheckedCreateWithoutShareUploadHistoryInput> | ShareHistoryCreateWithoutShareUploadHistoryInput[] | ShareHistoryUncheckedCreateWithoutShareUploadHistoryInput[]
    connectOrCreate?: ShareHistoryCreateOrConnectWithoutShareUploadHistoryInput | ShareHistoryCreateOrConnectWithoutShareUploadHistoryInput[]
    upsert?: ShareHistoryUpsertWithWhereUniqueWithoutShareUploadHistoryInput | ShareHistoryUpsertWithWhereUniqueWithoutShareUploadHistoryInput[]
    createMany?: ShareHistoryCreateManyShareUploadHistoryInputEnvelope
    set?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    disconnect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    delete?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    connect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    update?: ShareHistoryUpdateWithWhereUniqueWithoutShareUploadHistoryInput | ShareHistoryUpdateWithWhereUniqueWithoutShareUploadHistoryInput[]
    updateMany?: ShareHistoryUpdateManyWithWhereWithoutShareUploadHistoryInput | ShareHistoryUpdateManyWithWhereWithoutShareUploadHistoryInput[]
    deleteMany?: ShareHistoryScalarWhereInput | ShareHistoryScalarWhereInput[]
  }

  export type ShareHistoryUncheckedUpdateManyWithoutShareUploadHistoryNestedInput = {
    create?: XOR<ShareHistoryCreateWithoutShareUploadHistoryInput, ShareHistoryUncheckedCreateWithoutShareUploadHistoryInput> | ShareHistoryCreateWithoutShareUploadHistoryInput[] | ShareHistoryUncheckedCreateWithoutShareUploadHistoryInput[]
    connectOrCreate?: ShareHistoryCreateOrConnectWithoutShareUploadHistoryInput | ShareHistoryCreateOrConnectWithoutShareUploadHistoryInput[]
    upsert?: ShareHistoryUpsertWithWhereUniqueWithoutShareUploadHistoryInput | ShareHistoryUpsertWithWhereUniqueWithoutShareUploadHistoryInput[]
    createMany?: ShareHistoryCreateManyShareUploadHistoryInputEnvelope
    set?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    disconnect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    delete?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    connect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    update?: ShareHistoryUpdateWithWhereUniqueWithoutShareUploadHistoryInput | ShareHistoryUpdateWithWhereUniqueWithoutShareUploadHistoryInput[]
    updateMany?: ShareHistoryUpdateManyWithWhereWithoutShareUploadHistoryInput | ShareHistoryUpdateManyWithWhereWithoutShareUploadHistoryInput[]
    deleteMany?: ShareHistoryScalarWhereInput | ShareHistoryScalarWhereInput[]
  }

  export type DividendCreateNestedManyWithoutDividendUploadHistoryInput = {
    create?: XOR<DividendCreateWithoutDividendUploadHistoryInput, DividendUncheckedCreateWithoutDividendUploadHistoryInput> | DividendCreateWithoutDividendUploadHistoryInput[] | DividendUncheckedCreateWithoutDividendUploadHistoryInput[]
    connectOrCreate?: DividendCreateOrConnectWithoutDividendUploadHistoryInput | DividendCreateOrConnectWithoutDividendUploadHistoryInput[]
    createMany?: DividendCreateManyDividendUploadHistoryInputEnvelope
    connect?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
  }

  export type DividendUncheckedCreateNestedManyWithoutDividendUploadHistoryInput = {
    create?: XOR<DividendCreateWithoutDividendUploadHistoryInput, DividendUncheckedCreateWithoutDividendUploadHistoryInput> | DividendCreateWithoutDividendUploadHistoryInput[] | DividendUncheckedCreateWithoutDividendUploadHistoryInput[]
    connectOrCreate?: DividendCreateOrConnectWithoutDividendUploadHistoryInput | DividendCreateOrConnectWithoutDividendUploadHistoryInput[]
    createMany?: DividendCreateManyDividendUploadHistoryInputEnvelope
    connect?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
  }

  export type EnumDividenUploadTypeFieldUpdateOperationsInput = {
    set?: $Enums.DividenUploadType
  }

  export type DividendUpdateManyWithoutDividendUploadHistoryNestedInput = {
    create?: XOR<DividendCreateWithoutDividendUploadHistoryInput, DividendUncheckedCreateWithoutDividendUploadHistoryInput> | DividendCreateWithoutDividendUploadHistoryInput[] | DividendUncheckedCreateWithoutDividendUploadHistoryInput[]
    connectOrCreate?: DividendCreateOrConnectWithoutDividendUploadHistoryInput | DividendCreateOrConnectWithoutDividendUploadHistoryInput[]
    upsert?: DividendUpsertWithWhereUniqueWithoutDividendUploadHistoryInput | DividendUpsertWithWhereUniqueWithoutDividendUploadHistoryInput[]
    createMany?: DividendCreateManyDividendUploadHistoryInputEnvelope
    set?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    disconnect?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    delete?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    connect?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    update?: DividendUpdateWithWhereUniqueWithoutDividendUploadHistoryInput | DividendUpdateWithWhereUniqueWithoutDividendUploadHistoryInput[]
    updateMany?: DividendUpdateManyWithWhereWithoutDividendUploadHistoryInput | DividendUpdateManyWithWhereWithoutDividendUploadHistoryInput[]
    deleteMany?: DividendScalarWhereInput | DividendScalarWhereInput[]
  }

  export type DividendUncheckedUpdateManyWithoutDividendUploadHistoryNestedInput = {
    create?: XOR<DividendCreateWithoutDividendUploadHistoryInput, DividendUncheckedCreateWithoutDividendUploadHistoryInput> | DividendCreateWithoutDividendUploadHistoryInput[] | DividendUncheckedCreateWithoutDividendUploadHistoryInput[]
    connectOrCreate?: DividendCreateOrConnectWithoutDividendUploadHistoryInput | DividendCreateOrConnectWithoutDividendUploadHistoryInput[]
    upsert?: DividendUpsertWithWhereUniqueWithoutDividendUploadHistoryInput | DividendUpsertWithWhereUniqueWithoutDividendUploadHistoryInput[]
    createMany?: DividendCreateManyDividendUploadHistoryInputEnvelope
    set?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    disconnect?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    delete?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    connect?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    update?: DividendUpdateWithWhereUniqueWithoutDividendUploadHistoryInput | DividendUpdateWithWhereUniqueWithoutDividendUploadHistoryInput[]
    updateMany?: DividendUpdateManyWithWhereWithoutDividendUploadHistoryInput | DividendUpdateManyWithWhereWithoutDividendUploadHistoryInput[]
    deleteMany?: DividendScalarWhereInput | DividendScalarWhereInput[]
  }

  export type ShareholderCreateNestedOneWithoutDividendInput = {
    create?: XOR<ShareholderCreateWithoutDividendInput, ShareholderUncheckedCreateWithoutDividendInput>
    connectOrCreate?: ShareholderCreateOrConnectWithoutDividendInput
    connect?: ShareholderWhereUniqueInput
  }

  export type DividendUploadHistoryCreateNestedOneWithoutDividendInput = {
    create?: XOR<DividendUploadHistoryCreateWithoutDividendInput, DividendUploadHistoryUncheckedCreateWithoutDividendInput>
    connectOrCreate?: DividendUploadHistoryCreateOrConnectWithoutDividendInput
    connect?: DividendUploadHistoryWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShareholderUpdateOneRequiredWithoutDividendNestedInput = {
    create?: XOR<ShareholderCreateWithoutDividendInput, ShareholderUncheckedCreateWithoutDividendInput>
    connectOrCreate?: ShareholderCreateOrConnectWithoutDividendInput
    upsert?: ShareholderUpsertWithoutDividendInput
    connect?: ShareholderWhereUniqueInput
    update?: XOR<XOR<ShareholderUpdateToOneWithWhereWithoutDividendInput, ShareholderUpdateWithoutDividendInput>, ShareholderUncheckedUpdateWithoutDividendInput>
  }

  export type DividendUploadHistoryUpdateOneWithoutDividendNestedInput = {
    create?: XOR<DividendUploadHistoryCreateWithoutDividendInput, DividendUploadHistoryUncheckedCreateWithoutDividendInput>
    connectOrCreate?: DividendUploadHistoryCreateOrConnectWithoutDividendInput
    upsert?: DividendUploadHistoryUpsertWithoutDividendInput
    disconnect?: DividendUploadHistoryWhereInput | boolean
    delete?: DividendUploadHistoryWhereInput | boolean
    connect?: DividendUploadHistoryWhereUniqueInput
    update?: XOR<XOR<DividendUploadHistoryUpdateToOneWithWhereWithoutDividendInput, DividendUploadHistoryUpdateWithoutDividendInput>, DividendUploadHistoryUncheckedUpdateWithoutDividendInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShareholderCreateNestedOneWithoutShareHistoryInput = {
    create?: XOR<ShareholderCreateWithoutShareHistoryInput, ShareholderUncheckedCreateWithoutShareHistoryInput>
    connectOrCreate?: ShareholderCreateOrConnectWithoutShareHistoryInput
    connect?: ShareholderWhereUniqueInput
  }

  export type ShareTransferHistoryCreateNestedOneWithoutShareHistoryInput = {
    create?: XOR<ShareTransferHistoryCreateWithoutShareHistoryInput, ShareTransferHistoryUncheckedCreateWithoutShareHistoryInput>
    connectOrCreate?: ShareTransferHistoryCreateOrConnectWithoutShareHistoryInput
    connect?: ShareTransferHistoryWhereUniqueInput
  }

  export type ShareUploadHistoryCreateNestedOneWithoutShareHistoryInput = {
    create?: XOR<ShareUploadHistoryCreateWithoutShareHistoryInput, ShareUploadHistoryUncheckedCreateWithoutShareHistoryInput>
    connectOrCreate?: ShareUploadHistoryCreateOrConnectWithoutShareHistoryInput
    connect?: ShareUploadHistoryWhereUniqueInput
  }

  export type ShareholderUpdateOneRequiredWithoutShareHistoryNestedInput = {
    create?: XOR<ShareholderCreateWithoutShareHistoryInput, ShareholderUncheckedCreateWithoutShareHistoryInput>
    connectOrCreate?: ShareholderCreateOrConnectWithoutShareHistoryInput
    upsert?: ShareholderUpsertWithoutShareHistoryInput
    connect?: ShareholderWhereUniqueInput
    update?: XOR<XOR<ShareholderUpdateToOneWithWhereWithoutShareHistoryInput, ShareholderUpdateWithoutShareHistoryInput>, ShareholderUncheckedUpdateWithoutShareHistoryInput>
  }

  export type ShareTransferHistoryUpdateOneWithoutShareHistoryNestedInput = {
    create?: XOR<ShareTransferHistoryCreateWithoutShareHistoryInput, ShareTransferHistoryUncheckedCreateWithoutShareHistoryInput>
    connectOrCreate?: ShareTransferHistoryCreateOrConnectWithoutShareHistoryInput
    upsert?: ShareTransferHistoryUpsertWithoutShareHistoryInput
    disconnect?: ShareTransferHistoryWhereInput | boolean
    delete?: ShareTransferHistoryWhereInput | boolean
    connect?: ShareTransferHistoryWhereUniqueInput
    update?: XOR<XOR<ShareTransferHistoryUpdateToOneWithWhereWithoutShareHistoryInput, ShareTransferHistoryUpdateWithoutShareHistoryInput>, ShareTransferHistoryUncheckedUpdateWithoutShareHistoryInput>
  }

  export type ShareUploadHistoryUpdateOneWithoutShareHistoryNestedInput = {
    create?: XOR<ShareUploadHistoryCreateWithoutShareHistoryInput, ShareUploadHistoryUncheckedCreateWithoutShareHistoryInput>
    connectOrCreate?: ShareUploadHistoryCreateOrConnectWithoutShareHistoryInput
    upsert?: ShareUploadHistoryUpsertWithoutShareHistoryInput
    disconnect?: ShareUploadHistoryWhereInput | boolean
    delete?: ShareUploadHistoryWhereInput | boolean
    connect?: ShareUploadHistoryWhereUniqueInput
    update?: XOR<XOR<ShareUploadHistoryUpdateToOneWithWhereWithoutShareHistoryInput, ShareUploadHistoryUpdateWithoutShareHistoryInput>, ShareUploadHistoryUncheckedUpdateWithoutShareHistoryInput>
  }

  export type ShareholderCreateNestedOneWithoutShareInput = {
    create?: XOR<ShareholderCreateWithoutShareInput, ShareholderUncheckedCreateWithoutShareInput>
    connectOrCreate?: ShareholderCreateOrConnectWithoutShareInput
    connect?: ShareholderWhereUniqueInput
  }

  export type ShareholderUpdateOneRequiredWithoutShareNestedInput = {
    create?: XOR<ShareholderCreateWithoutShareInput, ShareholderUncheckedCreateWithoutShareInput>
    connectOrCreate?: ShareholderCreateOrConnectWithoutShareInput
    upsert?: ShareholderUpsertWithoutShareInput
    connect?: ShareholderWhereUniqueInput
    update?: XOR<XOR<ShareholderUpdateToOneWithWhereWithoutShareInput, ShareholderUpdateWithoutShareInput>, ShareholderUncheckedUpdateWithoutShareInput>
  }

  export type ShareholderCreateNestedOneWithoutTransferredShareHistoryInput = {
    create?: XOR<ShareholderCreateWithoutTransferredShareHistoryInput, ShareholderUncheckedCreateWithoutTransferredShareHistoryInput>
    connectOrCreate?: ShareholderCreateOrConnectWithoutTransferredShareHistoryInput
    connect?: ShareholderWhereUniqueInput
  }

  export type ShareholderCreateNestedOneWithoutReceivedShareHistoryInput = {
    create?: XOR<ShareholderCreateWithoutReceivedShareHistoryInput, ShareholderUncheckedCreateWithoutReceivedShareHistoryInput>
    connectOrCreate?: ShareholderCreateOrConnectWithoutReceivedShareHistoryInput
    connect?: ShareholderWhereUniqueInput
  }

  export type ShareHistoryCreateNestedManyWithoutShareTransferHistoryInput = {
    create?: XOR<ShareHistoryCreateWithoutShareTransferHistoryInput, ShareHistoryUncheckedCreateWithoutShareTransferHistoryInput> | ShareHistoryCreateWithoutShareTransferHistoryInput[] | ShareHistoryUncheckedCreateWithoutShareTransferHistoryInput[]
    connectOrCreate?: ShareHistoryCreateOrConnectWithoutShareTransferHistoryInput | ShareHistoryCreateOrConnectWithoutShareTransferHistoryInput[]
    createMany?: ShareHistoryCreateManyShareTransferHistoryInputEnvelope
    connect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
  }

  export type ShareHistoryUncheckedCreateNestedManyWithoutShareTransferHistoryInput = {
    create?: XOR<ShareHistoryCreateWithoutShareTransferHistoryInput, ShareHistoryUncheckedCreateWithoutShareTransferHistoryInput> | ShareHistoryCreateWithoutShareTransferHistoryInput[] | ShareHistoryUncheckedCreateWithoutShareTransferHistoryInput[]
    connectOrCreate?: ShareHistoryCreateOrConnectWithoutShareTransferHistoryInput | ShareHistoryCreateOrConnectWithoutShareTransferHistoryInput[]
    createMany?: ShareHistoryCreateManyShareTransferHistoryInputEnvelope
    connect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
  }

  export type EnumTransferTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransferType
  }

  export type ShareholderUpdateOneRequiredWithoutTransferredShareHistoryNestedInput = {
    create?: XOR<ShareholderCreateWithoutTransferredShareHistoryInput, ShareholderUncheckedCreateWithoutTransferredShareHistoryInput>
    connectOrCreate?: ShareholderCreateOrConnectWithoutTransferredShareHistoryInput
    upsert?: ShareholderUpsertWithoutTransferredShareHistoryInput
    connect?: ShareholderWhereUniqueInput
    update?: XOR<XOR<ShareholderUpdateToOneWithWhereWithoutTransferredShareHistoryInput, ShareholderUpdateWithoutTransferredShareHistoryInput>, ShareholderUncheckedUpdateWithoutTransferredShareHistoryInput>
  }

  export type ShareholderUpdateOneRequiredWithoutReceivedShareHistoryNestedInput = {
    create?: XOR<ShareholderCreateWithoutReceivedShareHistoryInput, ShareholderUncheckedCreateWithoutReceivedShareHistoryInput>
    connectOrCreate?: ShareholderCreateOrConnectWithoutReceivedShareHistoryInput
    upsert?: ShareholderUpsertWithoutReceivedShareHistoryInput
    connect?: ShareholderWhereUniqueInput
    update?: XOR<XOR<ShareholderUpdateToOneWithWhereWithoutReceivedShareHistoryInput, ShareholderUpdateWithoutReceivedShareHistoryInput>, ShareholderUncheckedUpdateWithoutReceivedShareHistoryInput>
  }

  export type ShareHistoryUpdateManyWithoutShareTransferHistoryNestedInput = {
    create?: XOR<ShareHistoryCreateWithoutShareTransferHistoryInput, ShareHistoryUncheckedCreateWithoutShareTransferHistoryInput> | ShareHistoryCreateWithoutShareTransferHistoryInput[] | ShareHistoryUncheckedCreateWithoutShareTransferHistoryInput[]
    connectOrCreate?: ShareHistoryCreateOrConnectWithoutShareTransferHistoryInput | ShareHistoryCreateOrConnectWithoutShareTransferHistoryInput[]
    upsert?: ShareHistoryUpsertWithWhereUniqueWithoutShareTransferHistoryInput | ShareHistoryUpsertWithWhereUniqueWithoutShareTransferHistoryInput[]
    createMany?: ShareHistoryCreateManyShareTransferHistoryInputEnvelope
    set?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    disconnect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    delete?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    connect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    update?: ShareHistoryUpdateWithWhereUniqueWithoutShareTransferHistoryInput | ShareHistoryUpdateWithWhereUniqueWithoutShareTransferHistoryInput[]
    updateMany?: ShareHistoryUpdateManyWithWhereWithoutShareTransferHistoryInput | ShareHistoryUpdateManyWithWhereWithoutShareTransferHistoryInput[]
    deleteMany?: ShareHistoryScalarWhereInput | ShareHistoryScalarWhereInput[]
  }

  export type ShareHistoryUncheckedUpdateManyWithoutShareTransferHistoryNestedInput = {
    create?: XOR<ShareHistoryCreateWithoutShareTransferHistoryInput, ShareHistoryUncheckedCreateWithoutShareTransferHistoryInput> | ShareHistoryCreateWithoutShareTransferHistoryInput[] | ShareHistoryUncheckedCreateWithoutShareTransferHistoryInput[]
    connectOrCreate?: ShareHistoryCreateOrConnectWithoutShareTransferHistoryInput | ShareHistoryCreateOrConnectWithoutShareTransferHistoryInput[]
    upsert?: ShareHistoryUpsertWithWhereUniqueWithoutShareTransferHistoryInput | ShareHistoryUpsertWithWhereUniqueWithoutShareTransferHistoryInput[]
    createMany?: ShareHistoryCreateManyShareTransferHistoryInputEnvelope
    set?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    disconnect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    delete?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    connect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    update?: ShareHistoryUpdateWithWhereUniqueWithoutShareTransferHistoryInput | ShareHistoryUpdateWithWhereUniqueWithoutShareTransferHistoryInput[]
    updateMany?: ShareHistoryUpdateManyWithWhereWithoutShareTransferHistoryInput | ShareHistoryUpdateManyWithWhereWithoutShareTransferHistoryInput[]
    deleteMany?: ShareHistoryScalarWhereInput | ShareHistoryScalarWhereInput[]
  }

  export type ShareholderCreateNestedOneWithoutWaccHistoryInput = {
    create?: XOR<ShareholderCreateWithoutWaccHistoryInput, ShareholderUncheckedCreateWithoutWaccHistoryInput>
    connectOrCreate?: ShareholderCreateOrConnectWithoutWaccHistoryInput
    connect?: ShareholderWhereUniqueInput
  }

  export type ShareholderUpdateOneRequiredWithoutWaccHistoryNestedInput = {
    create?: XOR<ShareholderCreateWithoutWaccHistoryInput, ShareholderUncheckedCreateWithoutWaccHistoryInput>
    connectOrCreate?: ShareholderCreateOrConnectWithoutWaccHistoryInput
    upsert?: ShareholderUpsertWithoutWaccHistoryInput
    connect?: ShareholderWhereUniqueInput
    update?: XOR<XOR<ShareholderUpdateToOneWithWhereWithoutWaccHistoryInput, ShareholderUpdateWithoutWaccHistoryInput>, ShareholderUncheckedUpdateWithoutWaccHistoryInput>
  }

  export type DividendCreateNestedManyWithoutShareholderInput = {
    create?: XOR<DividendCreateWithoutShareholderInput, DividendUncheckedCreateWithoutShareholderInput> | DividendCreateWithoutShareholderInput[] | DividendUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: DividendCreateOrConnectWithoutShareholderInput | DividendCreateOrConnectWithoutShareholderInput[]
    createMany?: DividendCreateManyShareholderInputEnvelope
    connect?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
  }

  export type ShareCreateNestedManyWithoutShareholderInput = {
    create?: XOR<ShareCreateWithoutShareholderInput, ShareUncheckedCreateWithoutShareholderInput> | ShareCreateWithoutShareholderInput[] | ShareUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutShareholderInput | ShareCreateOrConnectWithoutShareholderInput[]
    createMany?: ShareCreateManyShareholderInputEnvelope
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
  }

  export type ShareHistoryCreateNestedManyWithoutShareholderInput = {
    create?: XOR<ShareHistoryCreateWithoutShareholderInput, ShareHistoryUncheckedCreateWithoutShareholderInput> | ShareHistoryCreateWithoutShareholderInput[] | ShareHistoryUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: ShareHistoryCreateOrConnectWithoutShareholderInput | ShareHistoryCreateOrConnectWithoutShareholderInput[]
    createMany?: ShareHistoryCreateManyShareholderInputEnvelope
    connect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
  }

  export type ShareTransferHistoryCreateNestedManyWithoutTransferingShareholderInput = {
    create?: XOR<ShareTransferHistoryCreateWithoutTransferingShareholderInput, ShareTransferHistoryUncheckedCreateWithoutTransferingShareholderInput> | ShareTransferHistoryCreateWithoutTransferingShareholderInput[] | ShareTransferHistoryUncheckedCreateWithoutTransferingShareholderInput[]
    connectOrCreate?: ShareTransferHistoryCreateOrConnectWithoutTransferingShareholderInput | ShareTransferHistoryCreateOrConnectWithoutTransferingShareholderInput[]
    createMany?: ShareTransferHistoryCreateManyTransferingShareholderInputEnvelope
    connect?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
  }

  export type ShareTransferHistoryCreateNestedManyWithoutReceivingShareholderInput = {
    create?: XOR<ShareTransferHistoryCreateWithoutReceivingShareholderInput, ShareTransferHistoryUncheckedCreateWithoutReceivingShareholderInput> | ShareTransferHistoryCreateWithoutReceivingShareholderInput[] | ShareTransferHistoryUncheckedCreateWithoutReceivingShareholderInput[]
    connectOrCreate?: ShareTransferHistoryCreateOrConnectWithoutReceivingShareholderInput | ShareTransferHistoryCreateOrConnectWithoutReceivingShareholderInput[]
    createMany?: ShareTransferHistoryCreateManyReceivingShareholderInputEnvelope
    connect?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
  }

  export type WaccHistoryCreateNestedManyWithoutShareholderInput = {
    create?: XOR<WaccHistoryCreateWithoutShareholderInput, WaccHistoryUncheckedCreateWithoutShareholderInput> | WaccHistoryCreateWithoutShareholderInput[] | WaccHistoryUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: WaccHistoryCreateOrConnectWithoutShareholderInput | WaccHistoryCreateOrConnectWithoutShareholderInput[]
    createMany?: WaccHistoryCreateManyShareholderInputEnvelope
    connect?: WaccHistoryWhereUniqueInput | WaccHistoryWhereUniqueInput[]
  }

  export type DividendUncheckedCreateNestedManyWithoutShareholderInput = {
    create?: XOR<DividendCreateWithoutShareholderInput, DividendUncheckedCreateWithoutShareholderInput> | DividendCreateWithoutShareholderInput[] | DividendUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: DividendCreateOrConnectWithoutShareholderInput | DividendCreateOrConnectWithoutShareholderInput[]
    createMany?: DividendCreateManyShareholderInputEnvelope
    connect?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
  }

  export type ShareUncheckedCreateNestedManyWithoutShareholderInput = {
    create?: XOR<ShareCreateWithoutShareholderInput, ShareUncheckedCreateWithoutShareholderInput> | ShareCreateWithoutShareholderInput[] | ShareUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutShareholderInput | ShareCreateOrConnectWithoutShareholderInput[]
    createMany?: ShareCreateManyShareholderInputEnvelope
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
  }

  export type ShareHistoryUncheckedCreateNestedManyWithoutShareholderInput = {
    create?: XOR<ShareHistoryCreateWithoutShareholderInput, ShareHistoryUncheckedCreateWithoutShareholderInput> | ShareHistoryCreateWithoutShareholderInput[] | ShareHistoryUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: ShareHistoryCreateOrConnectWithoutShareholderInput | ShareHistoryCreateOrConnectWithoutShareholderInput[]
    createMany?: ShareHistoryCreateManyShareholderInputEnvelope
    connect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
  }

  export type ShareTransferHistoryUncheckedCreateNestedManyWithoutTransferingShareholderInput = {
    create?: XOR<ShareTransferHistoryCreateWithoutTransferingShareholderInput, ShareTransferHistoryUncheckedCreateWithoutTransferingShareholderInput> | ShareTransferHistoryCreateWithoutTransferingShareholderInput[] | ShareTransferHistoryUncheckedCreateWithoutTransferingShareholderInput[]
    connectOrCreate?: ShareTransferHistoryCreateOrConnectWithoutTransferingShareholderInput | ShareTransferHistoryCreateOrConnectWithoutTransferingShareholderInput[]
    createMany?: ShareTransferHistoryCreateManyTransferingShareholderInputEnvelope
    connect?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
  }

  export type ShareTransferHistoryUncheckedCreateNestedManyWithoutReceivingShareholderInput = {
    create?: XOR<ShareTransferHistoryCreateWithoutReceivingShareholderInput, ShareTransferHistoryUncheckedCreateWithoutReceivingShareholderInput> | ShareTransferHistoryCreateWithoutReceivingShareholderInput[] | ShareTransferHistoryUncheckedCreateWithoutReceivingShareholderInput[]
    connectOrCreate?: ShareTransferHistoryCreateOrConnectWithoutReceivingShareholderInput | ShareTransferHistoryCreateOrConnectWithoutReceivingShareholderInput[]
    createMany?: ShareTransferHistoryCreateManyReceivingShareholderInputEnvelope
    connect?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
  }

  export type WaccHistoryUncheckedCreateNestedManyWithoutShareholderInput = {
    create?: XOR<WaccHistoryCreateWithoutShareholderInput, WaccHistoryUncheckedCreateWithoutShareholderInput> | WaccHistoryCreateWithoutShareholderInput[] | WaccHistoryUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: WaccHistoryCreateOrConnectWithoutShareholderInput | WaccHistoryCreateOrConnectWithoutShareholderInput[]
    createMany?: WaccHistoryCreateManyShareholderInputEnvelope
    connect?: WaccHistoryWhereUniqueInput | WaccHistoryWhereUniqueInput[]
  }

  export type EnumShareholderTypeFieldUpdateOperationsInput = {
    set?: $Enums.ShareholderType
  }

  export type DividendUpdateManyWithoutShareholderNestedInput = {
    create?: XOR<DividendCreateWithoutShareholderInput, DividendUncheckedCreateWithoutShareholderInput> | DividendCreateWithoutShareholderInput[] | DividendUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: DividendCreateOrConnectWithoutShareholderInput | DividendCreateOrConnectWithoutShareholderInput[]
    upsert?: DividendUpsertWithWhereUniqueWithoutShareholderInput | DividendUpsertWithWhereUniqueWithoutShareholderInput[]
    createMany?: DividendCreateManyShareholderInputEnvelope
    set?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    disconnect?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    delete?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    connect?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    update?: DividendUpdateWithWhereUniqueWithoutShareholderInput | DividendUpdateWithWhereUniqueWithoutShareholderInput[]
    updateMany?: DividendUpdateManyWithWhereWithoutShareholderInput | DividendUpdateManyWithWhereWithoutShareholderInput[]
    deleteMany?: DividendScalarWhereInput | DividendScalarWhereInput[]
  }

  export type ShareUpdateManyWithoutShareholderNestedInput = {
    create?: XOR<ShareCreateWithoutShareholderInput, ShareUncheckedCreateWithoutShareholderInput> | ShareCreateWithoutShareholderInput[] | ShareUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutShareholderInput | ShareCreateOrConnectWithoutShareholderInput[]
    upsert?: ShareUpsertWithWhereUniqueWithoutShareholderInput | ShareUpsertWithWhereUniqueWithoutShareholderInput[]
    createMany?: ShareCreateManyShareholderInputEnvelope
    set?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    disconnect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    delete?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    update?: ShareUpdateWithWhereUniqueWithoutShareholderInput | ShareUpdateWithWhereUniqueWithoutShareholderInput[]
    updateMany?: ShareUpdateManyWithWhereWithoutShareholderInput | ShareUpdateManyWithWhereWithoutShareholderInput[]
    deleteMany?: ShareScalarWhereInput | ShareScalarWhereInput[]
  }

  export type ShareHistoryUpdateManyWithoutShareholderNestedInput = {
    create?: XOR<ShareHistoryCreateWithoutShareholderInput, ShareHistoryUncheckedCreateWithoutShareholderInput> | ShareHistoryCreateWithoutShareholderInput[] | ShareHistoryUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: ShareHistoryCreateOrConnectWithoutShareholderInput | ShareHistoryCreateOrConnectWithoutShareholderInput[]
    upsert?: ShareHistoryUpsertWithWhereUniqueWithoutShareholderInput | ShareHistoryUpsertWithWhereUniqueWithoutShareholderInput[]
    createMany?: ShareHistoryCreateManyShareholderInputEnvelope
    set?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    disconnect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    delete?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    connect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    update?: ShareHistoryUpdateWithWhereUniqueWithoutShareholderInput | ShareHistoryUpdateWithWhereUniqueWithoutShareholderInput[]
    updateMany?: ShareHistoryUpdateManyWithWhereWithoutShareholderInput | ShareHistoryUpdateManyWithWhereWithoutShareholderInput[]
    deleteMany?: ShareHistoryScalarWhereInput | ShareHistoryScalarWhereInput[]
  }

  export type ShareTransferHistoryUpdateManyWithoutTransferingShareholderNestedInput = {
    create?: XOR<ShareTransferHistoryCreateWithoutTransferingShareholderInput, ShareTransferHistoryUncheckedCreateWithoutTransferingShareholderInput> | ShareTransferHistoryCreateWithoutTransferingShareholderInput[] | ShareTransferHistoryUncheckedCreateWithoutTransferingShareholderInput[]
    connectOrCreate?: ShareTransferHistoryCreateOrConnectWithoutTransferingShareholderInput | ShareTransferHistoryCreateOrConnectWithoutTransferingShareholderInput[]
    upsert?: ShareTransferHistoryUpsertWithWhereUniqueWithoutTransferingShareholderInput | ShareTransferHistoryUpsertWithWhereUniqueWithoutTransferingShareholderInput[]
    createMany?: ShareTransferHistoryCreateManyTransferingShareholderInputEnvelope
    set?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    disconnect?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    delete?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    connect?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    update?: ShareTransferHistoryUpdateWithWhereUniqueWithoutTransferingShareholderInput | ShareTransferHistoryUpdateWithWhereUniqueWithoutTransferingShareholderInput[]
    updateMany?: ShareTransferHistoryUpdateManyWithWhereWithoutTransferingShareholderInput | ShareTransferHistoryUpdateManyWithWhereWithoutTransferingShareholderInput[]
    deleteMany?: ShareTransferHistoryScalarWhereInput | ShareTransferHistoryScalarWhereInput[]
  }

  export type ShareTransferHistoryUpdateManyWithoutReceivingShareholderNestedInput = {
    create?: XOR<ShareTransferHistoryCreateWithoutReceivingShareholderInput, ShareTransferHistoryUncheckedCreateWithoutReceivingShareholderInput> | ShareTransferHistoryCreateWithoutReceivingShareholderInput[] | ShareTransferHistoryUncheckedCreateWithoutReceivingShareholderInput[]
    connectOrCreate?: ShareTransferHistoryCreateOrConnectWithoutReceivingShareholderInput | ShareTransferHistoryCreateOrConnectWithoutReceivingShareholderInput[]
    upsert?: ShareTransferHistoryUpsertWithWhereUniqueWithoutReceivingShareholderInput | ShareTransferHistoryUpsertWithWhereUniqueWithoutReceivingShareholderInput[]
    createMany?: ShareTransferHistoryCreateManyReceivingShareholderInputEnvelope
    set?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    disconnect?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    delete?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    connect?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    update?: ShareTransferHistoryUpdateWithWhereUniqueWithoutReceivingShareholderInput | ShareTransferHistoryUpdateWithWhereUniqueWithoutReceivingShareholderInput[]
    updateMany?: ShareTransferHistoryUpdateManyWithWhereWithoutReceivingShareholderInput | ShareTransferHistoryUpdateManyWithWhereWithoutReceivingShareholderInput[]
    deleteMany?: ShareTransferHistoryScalarWhereInput | ShareTransferHistoryScalarWhereInput[]
  }

  export type WaccHistoryUpdateManyWithoutShareholderNestedInput = {
    create?: XOR<WaccHistoryCreateWithoutShareholderInput, WaccHistoryUncheckedCreateWithoutShareholderInput> | WaccHistoryCreateWithoutShareholderInput[] | WaccHistoryUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: WaccHistoryCreateOrConnectWithoutShareholderInput | WaccHistoryCreateOrConnectWithoutShareholderInput[]
    upsert?: WaccHistoryUpsertWithWhereUniqueWithoutShareholderInput | WaccHistoryUpsertWithWhereUniqueWithoutShareholderInput[]
    createMany?: WaccHistoryCreateManyShareholderInputEnvelope
    set?: WaccHistoryWhereUniqueInput | WaccHistoryWhereUniqueInput[]
    disconnect?: WaccHistoryWhereUniqueInput | WaccHistoryWhereUniqueInput[]
    delete?: WaccHistoryWhereUniqueInput | WaccHistoryWhereUniqueInput[]
    connect?: WaccHistoryWhereUniqueInput | WaccHistoryWhereUniqueInput[]
    update?: WaccHistoryUpdateWithWhereUniqueWithoutShareholderInput | WaccHistoryUpdateWithWhereUniqueWithoutShareholderInput[]
    updateMany?: WaccHistoryUpdateManyWithWhereWithoutShareholderInput | WaccHistoryUpdateManyWithWhereWithoutShareholderInput[]
    deleteMany?: WaccHistoryScalarWhereInput | WaccHistoryScalarWhereInput[]
  }

  export type DividendUncheckedUpdateManyWithoutShareholderNestedInput = {
    create?: XOR<DividendCreateWithoutShareholderInput, DividendUncheckedCreateWithoutShareholderInput> | DividendCreateWithoutShareholderInput[] | DividendUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: DividendCreateOrConnectWithoutShareholderInput | DividendCreateOrConnectWithoutShareholderInput[]
    upsert?: DividendUpsertWithWhereUniqueWithoutShareholderInput | DividendUpsertWithWhereUniqueWithoutShareholderInput[]
    createMany?: DividendCreateManyShareholderInputEnvelope
    set?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    disconnect?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    delete?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    connect?: DividendWhereUniqueInput | DividendWhereUniqueInput[]
    update?: DividendUpdateWithWhereUniqueWithoutShareholderInput | DividendUpdateWithWhereUniqueWithoutShareholderInput[]
    updateMany?: DividendUpdateManyWithWhereWithoutShareholderInput | DividendUpdateManyWithWhereWithoutShareholderInput[]
    deleteMany?: DividendScalarWhereInput | DividendScalarWhereInput[]
  }

  export type ShareUncheckedUpdateManyWithoutShareholderNestedInput = {
    create?: XOR<ShareCreateWithoutShareholderInput, ShareUncheckedCreateWithoutShareholderInput> | ShareCreateWithoutShareholderInput[] | ShareUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutShareholderInput | ShareCreateOrConnectWithoutShareholderInput[]
    upsert?: ShareUpsertWithWhereUniqueWithoutShareholderInput | ShareUpsertWithWhereUniqueWithoutShareholderInput[]
    createMany?: ShareCreateManyShareholderInputEnvelope
    set?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    disconnect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    delete?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    update?: ShareUpdateWithWhereUniqueWithoutShareholderInput | ShareUpdateWithWhereUniqueWithoutShareholderInput[]
    updateMany?: ShareUpdateManyWithWhereWithoutShareholderInput | ShareUpdateManyWithWhereWithoutShareholderInput[]
    deleteMany?: ShareScalarWhereInput | ShareScalarWhereInput[]
  }

  export type ShareHistoryUncheckedUpdateManyWithoutShareholderNestedInput = {
    create?: XOR<ShareHistoryCreateWithoutShareholderInput, ShareHistoryUncheckedCreateWithoutShareholderInput> | ShareHistoryCreateWithoutShareholderInput[] | ShareHistoryUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: ShareHistoryCreateOrConnectWithoutShareholderInput | ShareHistoryCreateOrConnectWithoutShareholderInput[]
    upsert?: ShareHistoryUpsertWithWhereUniqueWithoutShareholderInput | ShareHistoryUpsertWithWhereUniqueWithoutShareholderInput[]
    createMany?: ShareHistoryCreateManyShareholderInputEnvelope
    set?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    disconnect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    delete?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    connect?: ShareHistoryWhereUniqueInput | ShareHistoryWhereUniqueInput[]
    update?: ShareHistoryUpdateWithWhereUniqueWithoutShareholderInput | ShareHistoryUpdateWithWhereUniqueWithoutShareholderInput[]
    updateMany?: ShareHistoryUpdateManyWithWhereWithoutShareholderInput | ShareHistoryUpdateManyWithWhereWithoutShareholderInput[]
    deleteMany?: ShareHistoryScalarWhereInput | ShareHistoryScalarWhereInput[]
  }

  export type ShareTransferHistoryUncheckedUpdateManyWithoutTransferingShareholderNestedInput = {
    create?: XOR<ShareTransferHistoryCreateWithoutTransferingShareholderInput, ShareTransferHistoryUncheckedCreateWithoutTransferingShareholderInput> | ShareTransferHistoryCreateWithoutTransferingShareholderInput[] | ShareTransferHistoryUncheckedCreateWithoutTransferingShareholderInput[]
    connectOrCreate?: ShareTransferHistoryCreateOrConnectWithoutTransferingShareholderInput | ShareTransferHistoryCreateOrConnectWithoutTransferingShareholderInput[]
    upsert?: ShareTransferHistoryUpsertWithWhereUniqueWithoutTransferingShareholderInput | ShareTransferHistoryUpsertWithWhereUniqueWithoutTransferingShareholderInput[]
    createMany?: ShareTransferHistoryCreateManyTransferingShareholderInputEnvelope
    set?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    disconnect?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    delete?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    connect?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    update?: ShareTransferHistoryUpdateWithWhereUniqueWithoutTransferingShareholderInput | ShareTransferHistoryUpdateWithWhereUniqueWithoutTransferingShareholderInput[]
    updateMany?: ShareTransferHistoryUpdateManyWithWhereWithoutTransferingShareholderInput | ShareTransferHistoryUpdateManyWithWhereWithoutTransferingShareholderInput[]
    deleteMany?: ShareTransferHistoryScalarWhereInput | ShareTransferHistoryScalarWhereInput[]
  }

  export type ShareTransferHistoryUncheckedUpdateManyWithoutReceivingShareholderNestedInput = {
    create?: XOR<ShareTransferHistoryCreateWithoutReceivingShareholderInput, ShareTransferHistoryUncheckedCreateWithoutReceivingShareholderInput> | ShareTransferHistoryCreateWithoutReceivingShareholderInput[] | ShareTransferHistoryUncheckedCreateWithoutReceivingShareholderInput[]
    connectOrCreate?: ShareTransferHistoryCreateOrConnectWithoutReceivingShareholderInput | ShareTransferHistoryCreateOrConnectWithoutReceivingShareholderInput[]
    upsert?: ShareTransferHistoryUpsertWithWhereUniqueWithoutReceivingShareholderInput | ShareTransferHistoryUpsertWithWhereUniqueWithoutReceivingShareholderInput[]
    createMany?: ShareTransferHistoryCreateManyReceivingShareholderInputEnvelope
    set?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    disconnect?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    delete?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    connect?: ShareTransferHistoryWhereUniqueInput | ShareTransferHistoryWhereUniqueInput[]
    update?: ShareTransferHistoryUpdateWithWhereUniqueWithoutReceivingShareholderInput | ShareTransferHistoryUpdateWithWhereUniqueWithoutReceivingShareholderInput[]
    updateMany?: ShareTransferHistoryUpdateManyWithWhereWithoutReceivingShareholderInput | ShareTransferHistoryUpdateManyWithWhereWithoutReceivingShareholderInput[]
    deleteMany?: ShareTransferHistoryScalarWhereInput | ShareTransferHistoryScalarWhereInput[]
  }

  export type WaccHistoryUncheckedUpdateManyWithoutShareholderNestedInput = {
    create?: XOR<WaccHistoryCreateWithoutShareholderInput, WaccHistoryUncheckedCreateWithoutShareholderInput> | WaccHistoryCreateWithoutShareholderInput[] | WaccHistoryUncheckedCreateWithoutShareholderInput[]
    connectOrCreate?: WaccHistoryCreateOrConnectWithoutShareholderInput | WaccHistoryCreateOrConnectWithoutShareholderInput[]
    upsert?: WaccHistoryUpsertWithWhereUniqueWithoutShareholderInput | WaccHistoryUpsertWithWhereUniqueWithoutShareholderInput[]
    createMany?: WaccHistoryCreateManyShareholderInputEnvelope
    set?: WaccHistoryWhereUniqueInput | WaccHistoryWhereUniqueInput[]
    disconnect?: WaccHistoryWhereUniqueInput | WaccHistoryWhereUniqueInput[]
    delete?: WaccHistoryWhereUniqueInput | WaccHistoryWhereUniqueInput[]
    connect?: WaccHistoryWhereUniqueInput | WaccHistoryWhereUniqueInput[]
    update?: WaccHistoryUpdateWithWhereUniqueWithoutShareholderInput | WaccHistoryUpdateWithWhereUniqueWithoutShareholderInput[]
    updateMany?: WaccHistoryUpdateManyWithWhereWithoutShareholderInput | WaccHistoryUpdateManyWithWhereWithoutShareholderInput[]
    deleteMany?: WaccHistoryScalarWhereInput | WaccHistoryScalarWhereInput[]
  }

  export type SecurityTransactionDetailCreateNestedManyWithoutSecurityInput = {
    create?: XOR<SecurityTransactionDetailCreateWithoutSecurityInput, SecurityTransactionDetailUncheckedCreateWithoutSecurityInput> | SecurityTransactionDetailCreateWithoutSecurityInput[] | SecurityTransactionDetailUncheckedCreateWithoutSecurityInput[]
    connectOrCreate?: SecurityTransactionDetailCreateOrConnectWithoutSecurityInput | SecurityTransactionDetailCreateOrConnectWithoutSecurityInput[]
    createMany?: SecurityTransactionDetailCreateManySecurityInputEnvelope
    connect?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
  }

  export type SecurityTransactionDetailUncheckedCreateNestedManyWithoutSecurityInput = {
    create?: XOR<SecurityTransactionDetailCreateWithoutSecurityInput, SecurityTransactionDetailUncheckedCreateWithoutSecurityInput> | SecurityTransactionDetailCreateWithoutSecurityInput[] | SecurityTransactionDetailUncheckedCreateWithoutSecurityInput[]
    connectOrCreate?: SecurityTransactionDetailCreateOrConnectWithoutSecurityInput | SecurityTransactionDetailCreateOrConnectWithoutSecurityInput[]
    createMany?: SecurityTransactionDetailCreateManySecurityInputEnvelope
    connect?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
  }

  export type EnumSecurityClassificationFieldUpdateOperationsInput = {
    set?: $Enums.SecurityClassification
  }

  export type SecurityTransactionDetailUpdateManyWithoutSecurityNestedInput = {
    create?: XOR<SecurityTransactionDetailCreateWithoutSecurityInput, SecurityTransactionDetailUncheckedCreateWithoutSecurityInput> | SecurityTransactionDetailCreateWithoutSecurityInput[] | SecurityTransactionDetailUncheckedCreateWithoutSecurityInput[]
    connectOrCreate?: SecurityTransactionDetailCreateOrConnectWithoutSecurityInput | SecurityTransactionDetailCreateOrConnectWithoutSecurityInput[]
    upsert?: SecurityTransactionDetailUpsertWithWhereUniqueWithoutSecurityInput | SecurityTransactionDetailUpsertWithWhereUniqueWithoutSecurityInput[]
    createMany?: SecurityTransactionDetailCreateManySecurityInputEnvelope
    set?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    disconnect?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    delete?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    connect?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    update?: SecurityTransactionDetailUpdateWithWhereUniqueWithoutSecurityInput | SecurityTransactionDetailUpdateWithWhereUniqueWithoutSecurityInput[]
    updateMany?: SecurityTransactionDetailUpdateManyWithWhereWithoutSecurityInput | SecurityTransactionDetailUpdateManyWithWhereWithoutSecurityInput[]
    deleteMany?: SecurityTransactionDetailScalarWhereInput | SecurityTransactionDetailScalarWhereInput[]
  }

  export type SecurityTransactionDetailUncheckedUpdateManyWithoutSecurityNestedInput = {
    create?: XOR<SecurityTransactionDetailCreateWithoutSecurityInput, SecurityTransactionDetailUncheckedCreateWithoutSecurityInput> | SecurityTransactionDetailCreateWithoutSecurityInput[] | SecurityTransactionDetailUncheckedCreateWithoutSecurityInput[]
    connectOrCreate?: SecurityTransactionDetailCreateOrConnectWithoutSecurityInput | SecurityTransactionDetailCreateOrConnectWithoutSecurityInput[]
    upsert?: SecurityTransactionDetailUpsertWithWhereUniqueWithoutSecurityInput | SecurityTransactionDetailUpsertWithWhereUniqueWithoutSecurityInput[]
    createMany?: SecurityTransactionDetailCreateManySecurityInputEnvelope
    set?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    disconnect?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    delete?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    connect?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    update?: SecurityTransactionDetailUpdateWithWhereUniqueWithoutSecurityInput | SecurityTransactionDetailUpdateWithWhereUniqueWithoutSecurityInput[]
    updateMany?: SecurityTransactionDetailUpdateManyWithWhereWithoutSecurityInput | SecurityTransactionDetailUpdateManyWithWhereWithoutSecurityInput[]
    deleteMany?: SecurityTransactionDetailScalarWhereInput | SecurityTransactionDetailScalarWhereInput[]
  }

  export type SecurityTransactionDetailCreateNestedManyWithoutSecurityTransactionInput = {
    create?: XOR<SecurityTransactionDetailCreateWithoutSecurityTransactionInput, SecurityTransactionDetailUncheckedCreateWithoutSecurityTransactionInput> | SecurityTransactionDetailCreateWithoutSecurityTransactionInput[] | SecurityTransactionDetailUncheckedCreateWithoutSecurityTransactionInput[]
    connectOrCreate?: SecurityTransactionDetailCreateOrConnectWithoutSecurityTransactionInput | SecurityTransactionDetailCreateOrConnectWithoutSecurityTransactionInput[]
    createMany?: SecurityTransactionDetailCreateManySecurityTransactionInputEnvelope
    connect?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
  }

  export type SecurityTransactionDetailUncheckedCreateNestedManyWithoutSecurityTransactionInput = {
    create?: XOR<SecurityTransactionDetailCreateWithoutSecurityTransactionInput, SecurityTransactionDetailUncheckedCreateWithoutSecurityTransactionInput> | SecurityTransactionDetailCreateWithoutSecurityTransactionInput[] | SecurityTransactionDetailUncheckedCreateWithoutSecurityTransactionInput[]
    connectOrCreate?: SecurityTransactionDetailCreateOrConnectWithoutSecurityTransactionInput | SecurityTransactionDetailCreateOrConnectWithoutSecurityTransactionInput[]
    createMany?: SecurityTransactionDetailCreateManySecurityTransactionInputEnvelope
    connect?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
  }

  export type SecurityTransactionDetailUpdateManyWithoutSecurityTransactionNestedInput = {
    create?: XOR<SecurityTransactionDetailCreateWithoutSecurityTransactionInput, SecurityTransactionDetailUncheckedCreateWithoutSecurityTransactionInput> | SecurityTransactionDetailCreateWithoutSecurityTransactionInput[] | SecurityTransactionDetailUncheckedCreateWithoutSecurityTransactionInput[]
    connectOrCreate?: SecurityTransactionDetailCreateOrConnectWithoutSecurityTransactionInput | SecurityTransactionDetailCreateOrConnectWithoutSecurityTransactionInput[]
    upsert?: SecurityTransactionDetailUpsertWithWhereUniqueWithoutSecurityTransactionInput | SecurityTransactionDetailUpsertWithWhereUniqueWithoutSecurityTransactionInput[]
    createMany?: SecurityTransactionDetailCreateManySecurityTransactionInputEnvelope
    set?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    disconnect?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    delete?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    connect?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    update?: SecurityTransactionDetailUpdateWithWhereUniqueWithoutSecurityTransactionInput | SecurityTransactionDetailUpdateWithWhereUniqueWithoutSecurityTransactionInput[]
    updateMany?: SecurityTransactionDetailUpdateManyWithWhereWithoutSecurityTransactionInput | SecurityTransactionDetailUpdateManyWithWhereWithoutSecurityTransactionInput[]
    deleteMany?: SecurityTransactionDetailScalarWhereInput | SecurityTransactionDetailScalarWhereInput[]
  }

  export type SecurityTransactionDetailUncheckedUpdateManyWithoutSecurityTransactionNestedInput = {
    create?: XOR<SecurityTransactionDetailCreateWithoutSecurityTransactionInput, SecurityTransactionDetailUncheckedCreateWithoutSecurityTransactionInput> | SecurityTransactionDetailCreateWithoutSecurityTransactionInput[] | SecurityTransactionDetailUncheckedCreateWithoutSecurityTransactionInput[]
    connectOrCreate?: SecurityTransactionDetailCreateOrConnectWithoutSecurityTransactionInput | SecurityTransactionDetailCreateOrConnectWithoutSecurityTransactionInput[]
    upsert?: SecurityTransactionDetailUpsertWithWhereUniqueWithoutSecurityTransactionInput | SecurityTransactionDetailUpsertWithWhereUniqueWithoutSecurityTransactionInput[]
    createMany?: SecurityTransactionDetailCreateManySecurityTransactionInputEnvelope
    set?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    disconnect?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    delete?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    connect?: SecurityTransactionDetailWhereUniqueInput | SecurityTransactionDetailWhereUniqueInput[]
    update?: SecurityTransactionDetailUpdateWithWhereUniqueWithoutSecurityTransactionInput | SecurityTransactionDetailUpdateWithWhereUniqueWithoutSecurityTransactionInput[]
    updateMany?: SecurityTransactionDetailUpdateManyWithWhereWithoutSecurityTransactionInput | SecurityTransactionDetailUpdateManyWithWhereWithoutSecurityTransactionInput[]
    deleteMany?: SecurityTransactionDetailScalarWhereInput | SecurityTransactionDetailScalarWhereInput[]
  }

  export type SecurityCreateNestedOneWithoutSecurityTransactionDetailInput = {
    create?: XOR<SecurityCreateWithoutSecurityTransactionDetailInput, SecurityUncheckedCreateWithoutSecurityTransactionDetailInput>
    connectOrCreate?: SecurityCreateOrConnectWithoutSecurityTransactionDetailInput
    connect?: SecurityWhereUniqueInput
  }

  export type SecurityTransactionCreateNestedOneWithoutSecurityTransactionDetailInput = {
    create?: XOR<SecurityTransactionCreateWithoutSecurityTransactionDetailInput, SecurityTransactionUncheckedCreateWithoutSecurityTransactionDetailInput>
    connectOrCreate?: SecurityTransactionCreateOrConnectWithoutSecurityTransactionDetailInput
    connect?: SecurityTransactionWhereUniqueInput
  }

  export type NullableEnumSecurityAdditionNatureFieldUpdateOperationsInput = {
    set?: $Enums.SecurityAdditionNature | null
  }

  export type EnumSecurityClassificationAsPerNFRSFieldUpdateOperationsInput = {
    set?: $Enums.SecurityClassificationAsPerNFRS
  }

  export type SecurityUpdateOneRequiredWithoutSecurityTransactionDetailNestedInput = {
    create?: XOR<SecurityCreateWithoutSecurityTransactionDetailInput, SecurityUncheckedCreateWithoutSecurityTransactionDetailInput>
    connectOrCreate?: SecurityCreateOrConnectWithoutSecurityTransactionDetailInput
    upsert?: SecurityUpsertWithoutSecurityTransactionDetailInput
    connect?: SecurityWhereUniqueInput
    update?: XOR<XOR<SecurityUpdateToOneWithWhereWithoutSecurityTransactionDetailInput, SecurityUpdateWithoutSecurityTransactionDetailInput>, SecurityUncheckedUpdateWithoutSecurityTransactionDetailInput>
  }

  export type SecurityTransactionUpdateOneRequiredWithoutSecurityTransactionDetailNestedInput = {
    create?: XOR<SecurityTransactionCreateWithoutSecurityTransactionDetailInput, SecurityTransactionUncheckedCreateWithoutSecurityTransactionDetailInput>
    connectOrCreate?: SecurityTransactionCreateOrConnectWithoutSecurityTransactionDetailInput
    upsert?: SecurityTransactionUpsertWithoutSecurityTransactionDetailInput
    connect?: SecurityTransactionWhereUniqueInput
    update?: XOR<XOR<SecurityTransactionUpdateToOneWithWhereWithoutSecurityTransactionDetailInput, SecurityTransactionUpdateWithoutSecurityTransactionDetailInput>, SecurityTransactionUncheckedUpdateWithoutSecurityTransactionDetailInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumOwnershipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipType | EnumOwnershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnershipTypeFilter<$PrismaModel> | $Enums.OwnershipType
  }

  export type NestedEnumOwnershipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnershipType | EnumOwnershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnershipType[] | ListEnumOwnershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnershipTypeWithAggregatesFilter<$PrismaModel> | $Enums.OwnershipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnershipTypeFilter<$PrismaModel>
    _max?: NestedEnumOwnershipTypeFilter<$PrismaModel>
  }

  export type NestedEnumDividenUploadTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DividenUploadType | EnumDividenUploadTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DividenUploadType[] | ListEnumDividenUploadTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DividenUploadType[] | ListEnumDividenUploadTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDividenUploadTypeFilter<$PrismaModel> | $Enums.DividenUploadType
  }

  export type NestedEnumDividenUploadTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DividenUploadType | EnumDividenUploadTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DividenUploadType[] | ListEnumDividenUploadTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DividenUploadType[] | ListEnumDividenUploadTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDividenUploadTypeWithAggregatesFilter<$PrismaModel> | $Enums.DividenUploadType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDividenUploadTypeFilter<$PrismaModel>
    _max?: NestedEnumDividenUploadTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTransferTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferType | EnumTransferTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransferType[] | ListEnumTransferTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransferType[] | ListEnumTransferTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransferTypeFilter<$PrismaModel> | $Enums.TransferType
  }

  export type NestedEnumTransferTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferType | EnumTransferTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransferType[] | ListEnumTransferTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransferType[] | ListEnumTransferTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransferTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransferType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransferTypeFilter<$PrismaModel>
    _max?: NestedEnumTransferTypeFilter<$PrismaModel>
  }

  export type NestedEnumShareholderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShareholderType | EnumShareholderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShareholderType[] | ListEnumShareholderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShareholderType[] | ListEnumShareholderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShareholderTypeFilter<$PrismaModel> | $Enums.ShareholderType
  }

  export type NestedEnumShareholderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShareholderType | EnumShareholderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShareholderType[] | ListEnumShareholderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShareholderType[] | ListEnumShareholderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShareholderTypeWithAggregatesFilter<$PrismaModel> | $Enums.ShareholderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShareholderTypeFilter<$PrismaModel>
    _max?: NestedEnumShareholderTypeFilter<$PrismaModel>
  }

  export type NestedEnumSecurityClassificationFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityClassification | EnumSecurityClassificationFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityClassification[] | ListEnumSecurityClassificationFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityClassification[] | ListEnumSecurityClassificationFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityClassificationFilter<$PrismaModel> | $Enums.SecurityClassification
  }

  export type NestedEnumSecurityClassificationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityClassification | EnumSecurityClassificationFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityClassification[] | ListEnumSecurityClassificationFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityClassification[] | ListEnumSecurityClassificationFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityClassificationWithAggregatesFilter<$PrismaModel> | $Enums.SecurityClassification
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSecurityClassificationFilter<$PrismaModel>
    _max?: NestedEnumSecurityClassificationFilter<$PrismaModel>
  }

  export type NestedEnumSecurityAdditionNatureNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityAdditionNature | EnumSecurityAdditionNatureFieldRefInput<$PrismaModel> | null
    in?: $Enums.SecurityAdditionNature[] | ListEnumSecurityAdditionNatureFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SecurityAdditionNature[] | ListEnumSecurityAdditionNatureFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSecurityAdditionNatureNullableFilter<$PrismaModel> | $Enums.SecurityAdditionNature | null
  }

  export type NestedEnumSecurityClassificationAsPerNFRSFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityClassificationAsPerNFRS | EnumSecurityClassificationAsPerNFRSFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityClassificationAsPerNFRS[] | ListEnumSecurityClassificationAsPerNFRSFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityClassificationAsPerNFRS[] | ListEnumSecurityClassificationAsPerNFRSFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityClassificationAsPerNFRSFilter<$PrismaModel> | $Enums.SecurityClassificationAsPerNFRS
  }

  export type NestedEnumSecurityAdditionNatureNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityAdditionNature | EnumSecurityAdditionNatureFieldRefInput<$PrismaModel> | null
    in?: $Enums.SecurityAdditionNature[] | ListEnumSecurityAdditionNatureFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SecurityAdditionNature[] | ListEnumSecurityAdditionNatureFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSecurityAdditionNatureNullableWithAggregatesFilter<$PrismaModel> | $Enums.SecurityAdditionNature | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSecurityAdditionNatureNullableFilter<$PrismaModel>
    _max?: NestedEnumSecurityAdditionNatureNullableFilter<$PrismaModel>
  }

  export type NestedEnumSecurityClassificationAsPerNFRSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityClassificationAsPerNFRS | EnumSecurityClassificationAsPerNFRSFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityClassificationAsPerNFRS[] | ListEnumSecurityClassificationAsPerNFRSFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityClassificationAsPerNFRS[] | ListEnumSecurityClassificationAsPerNFRSFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityClassificationAsPerNFRSWithAggregatesFilter<$PrismaModel> | $Enums.SecurityClassificationAsPerNFRS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSecurityClassificationAsPerNFRSFilter<$PrismaModel>
    _max?: NestedEnumSecurityClassificationAsPerNFRSFilter<$PrismaModel>
  }

  export type ShareHistoryCreateWithoutShareUploadHistoryInput = {
    ownershipType: $Enums.OwnershipType
    unitsOfShareChanged: number
    balanceUnitsOfShare: number
    transactionDate: string
    ratePerShare: number
    remarks?: string | null
    entryDateTime?: Date | string
    shareholder: ShareholderCreateNestedOneWithoutShareHistoryInput
    shareTransferHistory?: ShareTransferHistoryCreateNestedOneWithoutShareHistoryInput
  }

  export type ShareHistoryUncheckedCreateWithoutShareUploadHistoryInput = {
    id?: number
    ownershipType: $Enums.OwnershipType
    unitsOfShareChanged: number
    balanceUnitsOfShare: number
    transactionDate: string
    shareholderId: number
    ratePerShare: number
    shareTransferHistoryId?: number | null
    remarks?: string | null
    entryDateTime?: Date | string
  }

  export type ShareHistoryCreateOrConnectWithoutShareUploadHistoryInput = {
    where: ShareHistoryWhereUniqueInput
    create: XOR<ShareHistoryCreateWithoutShareUploadHistoryInput, ShareHistoryUncheckedCreateWithoutShareUploadHistoryInput>
  }

  export type ShareHistoryCreateManyShareUploadHistoryInputEnvelope = {
    data: ShareHistoryCreateManyShareUploadHistoryInput | ShareHistoryCreateManyShareUploadHistoryInput[]
    skipDuplicates?: boolean
  }

  export type ShareHistoryUpsertWithWhereUniqueWithoutShareUploadHistoryInput = {
    where: ShareHistoryWhereUniqueInput
    update: XOR<ShareHistoryUpdateWithoutShareUploadHistoryInput, ShareHistoryUncheckedUpdateWithoutShareUploadHistoryInput>
    create: XOR<ShareHistoryCreateWithoutShareUploadHistoryInput, ShareHistoryUncheckedCreateWithoutShareUploadHistoryInput>
  }

  export type ShareHistoryUpdateWithWhereUniqueWithoutShareUploadHistoryInput = {
    where: ShareHistoryWhereUniqueInput
    data: XOR<ShareHistoryUpdateWithoutShareUploadHistoryInput, ShareHistoryUncheckedUpdateWithoutShareUploadHistoryInput>
  }

  export type ShareHistoryUpdateManyWithWhereWithoutShareUploadHistoryInput = {
    where: ShareHistoryScalarWhereInput
    data: XOR<ShareHistoryUpdateManyMutationInput, ShareHistoryUncheckedUpdateManyWithoutShareUploadHistoryInput>
  }

  export type ShareHistoryScalarWhereInput = {
    AND?: ShareHistoryScalarWhereInput | ShareHistoryScalarWhereInput[]
    OR?: ShareHistoryScalarWhereInput[]
    NOT?: ShareHistoryScalarWhereInput | ShareHistoryScalarWhereInput[]
    id?: IntFilter<"ShareHistory"> | number
    ownershipType?: EnumOwnershipTypeFilter<"ShareHistory"> | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFilter<"ShareHistory"> | number
    balanceUnitsOfShare?: FloatFilter<"ShareHistory"> | number
    transactionDate?: StringFilter<"ShareHistory"> | string
    shareholderId?: IntFilter<"ShareHistory"> | number
    ratePerShare?: FloatFilter<"ShareHistory"> | number
    shareTransferHistoryId?: IntNullableFilter<"ShareHistory"> | number | null
    shareUploadHistoryId?: IntNullableFilter<"ShareHistory"> | number | null
    remarks?: StringNullableFilter<"ShareHistory"> | string | null
    entryDateTime?: DateTimeFilter<"ShareHistory"> | Date | string
  }

  export type DividendCreateWithoutDividendUploadHistoryInput = {
    amount: number
    transactionDate: string
    sendingBankName?: string | null
    sendingBankAccount?: string | null
    receivingBankName?: string | null
    receivingBankAccount?: string | null
    remarks: string
    entryDate?: Date | string
    shareholder: ShareholderCreateNestedOneWithoutDividendInput
  }

  export type DividendUncheckedCreateWithoutDividendUploadHistoryInput = {
    id?: number
    amount: number
    transactionDate: string
    shareholderId: number
    sendingBankName?: string | null
    sendingBankAccount?: string | null
    receivingBankName?: string | null
    receivingBankAccount?: string | null
    remarks: string
    entryDate?: Date | string
  }

  export type DividendCreateOrConnectWithoutDividendUploadHistoryInput = {
    where: DividendWhereUniqueInput
    create: XOR<DividendCreateWithoutDividendUploadHistoryInput, DividendUncheckedCreateWithoutDividendUploadHistoryInput>
  }

  export type DividendCreateManyDividendUploadHistoryInputEnvelope = {
    data: DividendCreateManyDividendUploadHistoryInput | DividendCreateManyDividendUploadHistoryInput[]
    skipDuplicates?: boolean
  }

  export type DividendUpsertWithWhereUniqueWithoutDividendUploadHistoryInput = {
    where: DividendWhereUniqueInput
    update: XOR<DividendUpdateWithoutDividendUploadHistoryInput, DividendUncheckedUpdateWithoutDividendUploadHistoryInput>
    create: XOR<DividendCreateWithoutDividendUploadHistoryInput, DividendUncheckedCreateWithoutDividendUploadHistoryInput>
  }

  export type DividendUpdateWithWhereUniqueWithoutDividendUploadHistoryInput = {
    where: DividendWhereUniqueInput
    data: XOR<DividendUpdateWithoutDividendUploadHistoryInput, DividendUncheckedUpdateWithoutDividendUploadHistoryInput>
  }

  export type DividendUpdateManyWithWhereWithoutDividendUploadHistoryInput = {
    where: DividendScalarWhereInput
    data: XOR<DividendUpdateManyMutationInput, DividendUncheckedUpdateManyWithoutDividendUploadHistoryInput>
  }

  export type DividendScalarWhereInput = {
    AND?: DividendScalarWhereInput | DividendScalarWhereInput[]
    OR?: DividendScalarWhereInput[]
    NOT?: DividendScalarWhereInput | DividendScalarWhereInput[]
    id?: IntFilter<"Dividend"> | number
    amount?: FloatFilter<"Dividend"> | number
    transactionDate?: StringFilter<"Dividend"> | string
    shareholderId?: IntFilter<"Dividend"> | number
    sendingBankName?: StringNullableFilter<"Dividend"> | string | null
    sendingBankAccount?: StringNullableFilter<"Dividend"> | string | null
    receivingBankName?: StringNullableFilter<"Dividend"> | string | null
    receivingBankAccount?: StringNullableFilter<"Dividend"> | string | null
    dividendUploadHistoryId?: IntNullableFilter<"Dividend"> | number | null
    remarks?: StringFilter<"Dividend"> | string
    entryDate?: DateTimeFilter<"Dividend"> | Date | string
  }

  export type ShareholderCreateWithoutDividendInput = {
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
    share?: ShareCreateNestedManyWithoutShareholderInput
    shareHistory?: ShareHistoryCreateNestedManyWithoutShareholderInput
    transferredShareHistory?: ShareTransferHistoryCreateNestedManyWithoutTransferingShareholderInput
    receivedShareHistory?: ShareTransferHistoryCreateNestedManyWithoutReceivingShareholderInput
    waccHistory?: WaccHistoryCreateNestedManyWithoutShareholderInput
  }

  export type ShareholderUncheckedCreateWithoutDividendInput = {
    id?: number
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
    share?: ShareUncheckedCreateNestedManyWithoutShareholderInput
    shareHistory?: ShareHistoryUncheckedCreateNestedManyWithoutShareholderInput
    transferredShareHistory?: ShareTransferHistoryUncheckedCreateNestedManyWithoutTransferingShareholderInput
    receivedShareHistory?: ShareTransferHistoryUncheckedCreateNestedManyWithoutReceivingShareholderInput
    waccHistory?: WaccHistoryUncheckedCreateNestedManyWithoutShareholderInput
  }

  export type ShareholderCreateOrConnectWithoutDividendInput = {
    where: ShareholderWhereUniqueInput
    create: XOR<ShareholderCreateWithoutDividendInput, ShareholderUncheckedCreateWithoutDividendInput>
  }

  export type DividendUploadHistoryCreateWithoutDividendInput = {
    dividendUploadType: $Enums.DividenUploadType
    transactionDateRange: string
    remarks: string
  }

  export type DividendUploadHistoryUncheckedCreateWithoutDividendInput = {
    id?: number
    dividendUploadType: $Enums.DividenUploadType
    transactionDateRange: string
    remarks: string
  }

  export type DividendUploadHistoryCreateOrConnectWithoutDividendInput = {
    where: DividendUploadHistoryWhereUniqueInput
    create: XOR<DividendUploadHistoryCreateWithoutDividendInput, DividendUploadHistoryUncheckedCreateWithoutDividendInput>
  }

  export type ShareholderUpsertWithoutDividendInput = {
    update: XOR<ShareholderUpdateWithoutDividendInput, ShareholderUncheckedUpdateWithoutDividendInput>
    create: XOR<ShareholderCreateWithoutDividendInput, ShareholderUncheckedCreateWithoutDividendInput>
    where?: ShareholderWhereInput
  }

  export type ShareholderUpdateToOneWithWhereWithoutDividendInput = {
    where?: ShareholderWhereInput
    data: XOR<ShareholderUpdateWithoutDividendInput, ShareholderUncheckedUpdateWithoutDividendInput>
  }

  export type ShareholderUpdateWithoutDividendInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    share?: ShareUpdateManyWithoutShareholderNestedInput
    shareHistory?: ShareHistoryUpdateManyWithoutShareholderNestedInput
    transferredShareHistory?: ShareTransferHistoryUpdateManyWithoutTransferingShareholderNestedInput
    receivedShareHistory?: ShareTransferHistoryUpdateManyWithoutReceivingShareholderNestedInput
    waccHistory?: WaccHistoryUpdateManyWithoutShareholderNestedInput
  }

  export type ShareholderUncheckedUpdateWithoutDividendInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    share?: ShareUncheckedUpdateManyWithoutShareholderNestedInput
    shareHistory?: ShareHistoryUncheckedUpdateManyWithoutShareholderNestedInput
    transferredShareHistory?: ShareTransferHistoryUncheckedUpdateManyWithoutTransferingShareholderNestedInput
    receivedShareHistory?: ShareTransferHistoryUncheckedUpdateManyWithoutReceivingShareholderNestedInput
    waccHistory?: WaccHistoryUncheckedUpdateManyWithoutShareholderNestedInput
  }

  export type DividendUploadHistoryUpsertWithoutDividendInput = {
    update: XOR<DividendUploadHistoryUpdateWithoutDividendInput, DividendUploadHistoryUncheckedUpdateWithoutDividendInput>
    create: XOR<DividendUploadHistoryCreateWithoutDividendInput, DividendUploadHistoryUncheckedCreateWithoutDividendInput>
    where?: DividendUploadHistoryWhereInput
  }

  export type DividendUploadHistoryUpdateToOneWithWhereWithoutDividendInput = {
    where?: DividendUploadHistoryWhereInput
    data: XOR<DividendUploadHistoryUpdateWithoutDividendInput, DividendUploadHistoryUncheckedUpdateWithoutDividendInput>
  }

  export type DividendUploadHistoryUpdateWithoutDividendInput = {
    dividendUploadType?: EnumDividenUploadTypeFieldUpdateOperationsInput | $Enums.DividenUploadType
    transactionDateRange?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
  }

  export type DividendUploadHistoryUncheckedUpdateWithoutDividendInput = {
    id?: IntFieldUpdateOperationsInput | number
    dividendUploadType?: EnumDividenUploadTypeFieldUpdateOperationsInput | $Enums.DividenUploadType
    transactionDateRange?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
  }

  export type ShareholderCreateWithoutShareHistoryInput = {
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
    dividend?: DividendCreateNestedManyWithoutShareholderInput
    share?: ShareCreateNestedManyWithoutShareholderInput
    transferredShareHistory?: ShareTransferHistoryCreateNestedManyWithoutTransferingShareholderInput
    receivedShareHistory?: ShareTransferHistoryCreateNestedManyWithoutReceivingShareholderInput
    waccHistory?: WaccHistoryCreateNestedManyWithoutShareholderInput
  }

  export type ShareholderUncheckedCreateWithoutShareHistoryInput = {
    id?: number
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
    dividend?: DividendUncheckedCreateNestedManyWithoutShareholderInput
    share?: ShareUncheckedCreateNestedManyWithoutShareholderInput
    transferredShareHistory?: ShareTransferHistoryUncheckedCreateNestedManyWithoutTransferingShareholderInput
    receivedShareHistory?: ShareTransferHistoryUncheckedCreateNestedManyWithoutReceivingShareholderInput
    waccHistory?: WaccHistoryUncheckedCreateNestedManyWithoutShareholderInput
  }

  export type ShareholderCreateOrConnectWithoutShareHistoryInput = {
    where: ShareholderWhereUniqueInput
    create: XOR<ShareholderCreateWithoutShareHistoryInput, ShareholderUncheckedCreateWithoutShareHistoryInput>
  }

  export type ShareTransferHistoryCreateWithoutShareHistoryInput = {
    transferType: $Enums.TransferType
    remarks: string
    transferRate: number
    wacc: number
    transferredUnitsOfShare: number
    totalGain: number
    transferDate: string
    entryDate?: Date | string
    transferingShareholder: ShareholderCreateNestedOneWithoutTransferredShareHistoryInput
    receivingShareholder: ShareholderCreateNestedOneWithoutReceivedShareHistoryInput
  }

  export type ShareTransferHistoryUncheckedCreateWithoutShareHistoryInput = {
    id?: number
    transferingShareholderId: number
    receivingShareholderId: number
    transferType: $Enums.TransferType
    remarks: string
    transferRate: number
    wacc: number
    transferredUnitsOfShare: number
    totalGain: number
    transferDate: string
    entryDate?: Date | string
  }

  export type ShareTransferHistoryCreateOrConnectWithoutShareHistoryInput = {
    where: ShareTransferHistoryWhereUniqueInput
    create: XOR<ShareTransferHistoryCreateWithoutShareHistoryInput, ShareTransferHistoryUncheckedCreateWithoutShareHistoryInput>
  }

  export type ShareUploadHistoryCreateWithoutShareHistoryInput = {
    ownershipType: $Enums.OwnershipType
    ownershipDate: string
    remarks: string
  }

  export type ShareUploadHistoryUncheckedCreateWithoutShareHistoryInput = {
    id?: number
    ownershipType: $Enums.OwnershipType
    ownershipDate: string
    remarks: string
  }

  export type ShareUploadHistoryCreateOrConnectWithoutShareHistoryInput = {
    where: ShareUploadHistoryWhereUniqueInput
    create: XOR<ShareUploadHistoryCreateWithoutShareHistoryInput, ShareUploadHistoryUncheckedCreateWithoutShareHistoryInput>
  }

  export type ShareholderUpsertWithoutShareHistoryInput = {
    update: XOR<ShareholderUpdateWithoutShareHistoryInput, ShareholderUncheckedUpdateWithoutShareHistoryInput>
    create: XOR<ShareholderCreateWithoutShareHistoryInput, ShareholderUncheckedCreateWithoutShareHistoryInput>
    where?: ShareholderWhereInput
  }

  export type ShareholderUpdateToOneWithWhereWithoutShareHistoryInput = {
    where?: ShareholderWhereInput
    data: XOR<ShareholderUpdateWithoutShareHistoryInput, ShareholderUncheckedUpdateWithoutShareHistoryInput>
  }

  export type ShareholderUpdateWithoutShareHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividend?: DividendUpdateManyWithoutShareholderNestedInput
    share?: ShareUpdateManyWithoutShareholderNestedInput
    transferredShareHistory?: ShareTransferHistoryUpdateManyWithoutTransferingShareholderNestedInput
    receivedShareHistory?: ShareTransferHistoryUpdateManyWithoutReceivingShareholderNestedInput
    waccHistory?: WaccHistoryUpdateManyWithoutShareholderNestedInput
  }

  export type ShareholderUncheckedUpdateWithoutShareHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividend?: DividendUncheckedUpdateManyWithoutShareholderNestedInput
    share?: ShareUncheckedUpdateManyWithoutShareholderNestedInput
    transferredShareHistory?: ShareTransferHistoryUncheckedUpdateManyWithoutTransferingShareholderNestedInput
    receivedShareHistory?: ShareTransferHistoryUncheckedUpdateManyWithoutReceivingShareholderNestedInput
    waccHistory?: WaccHistoryUncheckedUpdateManyWithoutShareholderNestedInput
  }

  export type ShareTransferHistoryUpsertWithoutShareHistoryInput = {
    update: XOR<ShareTransferHistoryUpdateWithoutShareHistoryInput, ShareTransferHistoryUncheckedUpdateWithoutShareHistoryInput>
    create: XOR<ShareTransferHistoryCreateWithoutShareHistoryInput, ShareTransferHistoryUncheckedCreateWithoutShareHistoryInput>
    where?: ShareTransferHistoryWhereInput
  }

  export type ShareTransferHistoryUpdateToOneWithWhereWithoutShareHistoryInput = {
    where?: ShareTransferHistoryWhereInput
    data: XOR<ShareTransferHistoryUpdateWithoutShareHistoryInput, ShareTransferHistoryUncheckedUpdateWithoutShareHistoryInput>
  }

  export type ShareTransferHistoryUpdateWithoutShareHistoryInput = {
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    remarks?: StringFieldUpdateOperationsInput | string
    transferRate?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    transferredUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    totalGain?: FloatFieldUpdateOperationsInput | number
    transferDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transferingShareholder?: ShareholderUpdateOneRequiredWithoutTransferredShareHistoryNestedInput
    receivingShareholder?: ShareholderUpdateOneRequiredWithoutReceivedShareHistoryNestedInput
  }

  export type ShareTransferHistoryUncheckedUpdateWithoutShareHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    transferingShareholderId?: IntFieldUpdateOperationsInput | number
    receivingShareholderId?: IntFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    remarks?: StringFieldUpdateOperationsInput | string
    transferRate?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    transferredUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    totalGain?: FloatFieldUpdateOperationsInput | number
    transferDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareUploadHistoryUpsertWithoutShareHistoryInput = {
    update: XOR<ShareUploadHistoryUpdateWithoutShareHistoryInput, ShareUploadHistoryUncheckedUpdateWithoutShareHistoryInput>
    create: XOR<ShareUploadHistoryCreateWithoutShareHistoryInput, ShareUploadHistoryUncheckedCreateWithoutShareHistoryInput>
    where?: ShareUploadHistoryWhereInput
  }

  export type ShareUploadHistoryUpdateToOneWithWhereWithoutShareHistoryInput = {
    where?: ShareUploadHistoryWhereInput
    data: XOR<ShareUploadHistoryUpdateWithoutShareHistoryInput, ShareUploadHistoryUncheckedUpdateWithoutShareHistoryInput>
  }

  export type ShareUploadHistoryUpdateWithoutShareHistoryInput = {
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    ownershipDate?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
  }

  export type ShareUploadHistoryUncheckedUpdateWithoutShareHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    ownershipDate?: StringFieldUpdateOperationsInput | string
    remarks?: StringFieldUpdateOperationsInput | string
  }

  export type ShareholderCreateWithoutShareInput = {
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
    dividend?: DividendCreateNestedManyWithoutShareholderInput
    shareHistory?: ShareHistoryCreateNestedManyWithoutShareholderInput
    transferredShareHistory?: ShareTransferHistoryCreateNestedManyWithoutTransferingShareholderInput
    receivedShareHistory?: ShareTransferHistoryCreateNestedManyWithoutReceivingShareholderInput
    waccHistory?: WaccHistoryCreateNestedManyWithoutShareholderInput
  }

  export type ShareholderUncheckedCreateWithoutShareInput = {
    id?: number
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
    dividend?: DividendUncheckedCreateNestedManyWithoutShareholderInput
    shareHistory?: ShareHistoryUncheckedCreateNestedManyWithoutShareholderInput
    transferredShareHistory?: ShareTransferHistoryUncheckedCreateNestedManyWithoutTransferingShareholderInput
    receivedShareHistory?: ShareTransferHistoryUncheckedCreateNestedManyWithoutReceivingShareholderInput
    waccHistory?: WaccHistoryUncheckedCreateNestedManyWithoutShareholderInput
  }

  export type ShareholderCreateOrConnectWithoutShareInput = {
    where: ShareholderWhereUniqueInput
    create: XOR<ShareholderCreateWithoutShareInput, ShareholderUncheckedCreateWithoutShareInput>
  }

  export type ShareholderUpsertWithoutShareInput = {
    update: XOR<ShareholderUpdateWithoutShareInput, ShareholderUncheckedUpdateWithoutShareInput>
    create: XOR<ShareholderCreateWithoutShareInput, ShareholderUncheckedCreateWithoutShareInput>
    where?: ShareholderWhereInput
  }

  export type ShareholderUpdateToOneWithWhereWithoutShareInput = {
    where?: ShareholderWhereInput
    data: XOR<ShareholderUpdateWithoutShareInput, ShareholderUncheckedUpdateWithoutShareInput>
  }

  export type ShareholderUpdateWithoutShareInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividend?: DividendUpdateManyWithoutShareholderNestedInput
    shareHistory?: ShareHistoryUpdateManyWithoutShareholderNestedInput
    transferredShareHistory?: ShareTransferHistoryUpdateManyWithoutTransferingShareholderNestedInput
    receivedShareHistory?: ShareTransferHistoryUpdateManyWithoutReceivingShareholderNestedInput
    waccHistory?: WaccHistoryUpdateManyWithoutShareholderNestedInput
  }

  export type ShareholderUncheckedUpdateWithoutShareInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividend?: DividendUncheckedUpdateManyWithoutShareholderNestedInput
    shareHistory?: ShareHistoryUncheckedUpdateManyWithoutShareholderNestedInput
    transferredShareHistory?: ShareTransferHistoryUncheckedUpdateManyWithoutTransferingShareholderNestedInput
    receivedShareHistory?: ShareTransferHistoryUncheckedUpdateManyWithoutReceivingShareholderNestedInput
    waccHistory?: WaccHistoryUncheckedUpdateManyWithoutShareholderNestedInput
  }

  export type ShareholderCreateWithoutTransferredShareHistoryInput = {
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
    dividend?: DividendCreateNestedManyWithoutShareholderInput
    share?: ShareCreateNestedManyWithoutShareholderInput
    shareHistory?: ShareHistoryCreateNestedManyWithoutShareholderInput
    receivedShareHistory?: ShareTransferHistoryCreateNestedManyWithoutReceivingShareholderInput
    waccHistory?: WaccHistoryCreateNestedManyWithoutShareholderInput
  }

  export type ShareholderUncheckedCreateWithoutTransferredShareHistoryInput = {
    id?: number
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
    dividend?: DividendUncheckedCreateNestedManyWithoutShareholderInput
    share?: ShareUncheckedCreateNestedManyWithoutShareholderInput
    shareHistory?: ShareHistoryUncheckedCreateNestedManyWithoutShareholderInput
    receivedShareHistory?: ShareTransferHistoryUncheckedCreateNestedManyWithoutReceivingShareholderInput
    waccHistory?: WaccHistoryUncheckedCreateNestedManyWithoutShareholderInput
  }

  export type ShareholderCreateOrConnectWithoutTransferredShareHistoryInput = {
    where: ShareholderWhereUniqueInput
    create: XOR<ShareholderCreateWithoutTransferredShareHistoryInput, ShareholderUncheckedCreateWithoutTransferredShareHistoryInput>
  }

  export type ShareholderCreateWithoutReceivedShareHistoryInput = {
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
    dividend?: DividendCreateNestedManyWithoutShareholderInput
    share?: ShareCreateNestedManyWithoutShareholderInput
    shareHistory?: ShareHistoryCreateNestedManyWithoutShareholderInput
    transferredShareHistory?: ShareTransferHistoryCreateNestedManyWithoutTransferingShareholderInput
    waccHistory?: WaccHistoryCreateNestedManyWithoutShareholderInput
  }

  export type ShareholderUncheckedCreateWithoutReceivedShareHistoryInput = {
    id?: number
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
    dividend?: DividendUncheckedCreateNestedManyWithoutShareholderInput
    share?: ShareUncheckedCreateNestedManyWithoutShareholderInput
    shareHistory?: ShareHistoryUncheckedCreateNestedManyWithoutShareholderInput
    transferredShareHistory?: ShareTransferHistoryUncheckedCreateNestedManyWithoutTransferingShareholderInput
    waccHistory?: WaccHistoryUncheckedCreateNestedManyWithoutShareholderInput
  }

  export type ShareholderCreateOrConnectWithoutReceivedShareHistoryInput = {
    where: ShareholderWhereUniqueInput
    create: XOR<ShareholderCreateWithoutReceivedShareHistoryInput, ShareholderUncheckedCreateWithoutReceivedShareHistoryInput>
  }

  export type ShareHistoryCreateWithoutShareTransferHistoryInput = {
    ownershipType: $Enums.OwnershipType
    unitsOfShareChanged: number
    balanceUnitsOfShare: number
    transactionDate: string
    ratePerShare: number
    remarks?: string | null
    entryDateTime?: Date | string
    shareholder: ShareholderCreateNestedOneWithoutShareHistoryInput
    shareUploadHistory?: ShareUploadHistoryCreateNestedOneWithoutShareHistoryInput
  }

  export type ShareHistoryUncheckedCreateWithoutShareTransferHistoryInput = {
    id?: number
    ownershipType: $Enums.OwnershipType
    unitsOfShareChanged: number
    balanceUnitsOfShare: number
    transactionDate: string
    shareholderId: number
    ratePerShare: number
    shareUploadHistoryId?: number | null
    remarks?: string | null
    entryDateTime?: Date | string
  }

  export type ShareHistoryCreateOrConnectWithoutShareTransferHistoryInput = {
    where: ShareHistoryWhereUniqueInput
    create: XOR<ShareHistoryCreateWithoutShareTransferHistoryInput, ShareHistoryUncheckedCreateWithoutShareTransferHistoryInput>
  }

  export type ShareHistoryCreateManyShareTransferHistoryInputEnvelope = {
    data: ShareHistoryCreateManyShareTransferHistoryInput | ShareHistoryCreateManyShareTransferHistoryInput[]
    skipDuplicates?: boolean
  }

  export type ShareholderUpsertWithoutTransferredShareHistoryInput = {
    update: XOR<ShareholderUpdateWithoutTransferredShareHistoryInput, ShareholderUncheckedUpdateWithoutTransferredShareHistoryInput>
    create: XOR<ShareholderCreateWithoutTransferredShareHistoryInput, ShareholderUncheckedCreateWithoutTransferredShareHistoryInput>
    where?: ShareholderWhereInput
  }

  export type ShareholderUpdateToOneWithWhereWithoutTransferredShareHistoryInput = {
    where?: ShareholderWhereInput
    data: XOR<ShareholderUpdateWithoutTransferredShareHistoryInput, ShareholderUncheckedUpdateWithoutTransferredShareHistoryInput>
  }

  export type ShareholderUpdateWithoutTransferredShareHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividend?: DividendUpdateManyWithoutShareholderNestedInput
    share?: ShareUpdateManyWithoutShareholderNestedInput
    shareHistory?: ShareHistoryUpdateManyWithoutShareholderNestedInput
    receivedShareHistory?: ShareTransferHistoryUpdateManyWithoutReceivingShareholderNestedInput
    waccHistory?: WaccHistoryUpdateManyWithoutShareholderNestedInput
  }

  export type ShareholderUncheckedUpdateWithoutTransferredShareHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividend?: DividendUncheckedUpdateManyWithoutShareholderNestedInput
    share?: ShareUncheckedUpdateManyWithoutShareholderNestedInput
    shareHistory?: ShareHistoryUncheckedUpdateManyWithoutShareholderNestedInput
    receivedShareHistory?: ShareTransferHistoryUncheckedUpdateManyWithoutReceivingShareholderNestedInput
    waccHistory?: WaccHistoryUncheckedUpdateManyWithoutShareholderNestedInput
  }

  export type ShareholderUpsertWithoutReceivedShareHistoryInput = {
    update: XOR<ShareholderUpdateWithoutReceivedShareHistoryInput, ShareholderUncheckedUpdateWithoutReceivedShareHistoryInput>
    create: XOR<ShareholderCreateWithoutReceivedShareHistoryInput, ShareholderUncheckedCreateWithoutReceivedShareHistoryInput>
    where?: ShareholderWhereInput
  }

  export type ShareholderUpdateToOneWithWhereWithoutReceivedShareHistoryInput = {
    where?: ShareholderWhereInput
    data: XOR<ShareholderUpdateWithoutReceivedShareHistoryInput, ShareholderUncheckedUpdateWithoutReceivedShareHistoryInput>
  }

  export type ShareholderUpdateWithoutReceivedShareHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividend?: DividendUpdateManyWithoutShareholderNestedInput
    share?: ShareUpdateManyWithoutShareholderNestedInput
    shareHistory?: ShareHistoryUpdateManyWithoutShareholderNestedInput
    transferredShareHistory?: ShareTransferHistoryUpdateManyWithoutTransferingShareholderNestedInput
    waccHistory?: WaccHistoryUpdateManyWithoutShareholderNestedInput
  }

  export type ShareholderUncheckedUpdateWithoutReceivedShareHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividend?: DividendUncheckedUpdateManyWithoutShareholderNestedInput
    share?: ShareUncheckedUpdateManyWithoutShareholderNestedInput
    shareHistory?: ShareHistoryUncheckedUpdateManyWithoutShareholderNestedInput
    transferredShareHistory?: ShareTransferHistoryUncheckedUpdateManyWithoutTransferingShareholderNestedInput
    waccHistory?: WaccHistoryUncheckedUpdateManyWithoutShareholderNestedInput
  }

  export type ShareHistoryUpsertWithWhereUniqueWithoutShareTransferHistoryInput = {
    where: ShareHistoryWhereUniqueInput
    update: XOR<ShareHistoryUpdateWithoutShareTransferHistoryInput, ShareHistoryUncheckedUpdateWithoutShareTransferHistoryInput>
    create: XOR<ShareHistoryCreateWithoutShareTransferHistoryInput, ShareHistoryUncheckedCreateWithoutShareTransferHistoryInput>
  }

  export type ShareHistoryUpdateWithWhereUniqueWithoutShareTransferHistoryInput = {
    where: ShareHistoryWhereUniqueInput
    data: XOR<ShareHistoryUpdateWithoutShareTransferHistoryInput, ShareHistoryUncheckedUpdateWithoutShareTransferHistoryInput>
  }

  export type ShareHistoryUpdateManyWithWhereWithoutShareTransferHistoryInput = {
    where: ShareHistoryScalarWhereInput
    data: XOR<ShareHistoryUpdateManyMutationInput, ShareHistoryUncheckedUpdateManyWithoutShareTransferHistoryInput>
  }

  export type ShareholderCreateWithoutWaccHistoryInput = {
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
    dividend?: DividendCreateNestedManyWithoutShareholderInput
    share?: ShareCreateNestedManyWithoutShareholderInput
    shareHistory?: ShareHistoryCreateNestedManyWithoutShareholderInput
    transferredShareHistory?: ShareTransferHistoryCreateNestedManyWithoutTransferingShareholderInput
    receivedShareHistory?: ShareTransferHistoryCreateNestedManyWithoutReceivingShareholderInput
  }

  export type ShareholderUncheckedCreateWithoutWaccHistoryInput = {
    id?: number
    name: string
    type: $Enums.ShareholderType
    number: number
    ctzOrRegNumber?: string | null
    ctzIssueDateOrRegDate?: string | null
    fatherName?: string | null
    grandfatherName?: string | null
    contact?: string | null
    address?: string | null
    remarks?: string | null
    dividendBalance: number
    ownedUnitsOfShare: number
    wacc: number
    bankName?: string | null
    bankAccount?: string | null
    dividend?: DividendUncheckedCreateNestedManyWithoutShareholderInput
    share?: ShareUncheckedCreateNestedManyWithoutShareholderInput
    shareHistory?: ShareHistoryUncheckedCreateNestedManyWithoutShareholderInput
    transferredShareHistory?: ShareTransferHistoryUncheckedCreateNestedManyWithoutTransferingShareholderInput
    receivedShareHistory?: ShareTransferHistoryUncheckedCreateNestedManyWithoutReceivingShareholderInput
  }

  export type ShareholderCreateOrConnectWithoutWaccHistoryInput = {
    where: ShareholderWhereUniqueInput
    create: XOR<ShareholderCreateWithoutWaccHistoryInput, ShareholderUncheckedCreateWithoutWaccHistoryInput>
  }

  export type ShareholderUpsertWithoutWaccHistoryInput = {
    update: XOR<ShareholderUpdateWithoutWaccHistoryInput, ShareholderUncheckedUpdateWithoutWaccHistoryInput>
    create: XOR<ShareholderCreateWithoutWaccHistoryInput, ShareholderUncheckedCreateWithoutWaccHistoryInput>
    where?: ShareholderWhereInput
  }

  export type ShareholderUpdateToOneWithWhereWithoutWaccHistoryInput = {
    where?: ShareholderWhereInput
    data: XOR<ShareholderUpdateWithoutWaccHistoryInput, ShareholderUncheckedUpdateWithoutWaccHistoryInput>
  }

  export type ShareholderUpdateWithoutWaccHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividend?: DividendUpdateManyWithoutShareholderNestedInput
    share?: ShareUpdateManyWithoutShareholderNestedInput
    shareHistory?: ShareHistoryUpdateManyWithoutShareholderNestedInput
    transferredShareHistory?: ShareTransferHistoryUpdateManyWithoutTransferingShareholderNestedInput
    receivedShareHistory?: ShareTransferHistoryUpdateManyWithoutReceivingShareholderNestedInput
  }

  export type ShareholderUncheckedUpdateWithoutWaccHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumShareholderTypeFieldUpdateOperationsInput | $Enums.ShareholderType
    number?: IntFieldUpdateOperationsInput | number
    ctzOrRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ctzIssueDateOrRegDate?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    grandfatherName?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    dividendBalance?: FloatFieldUpdateOperationsInput | number
    ownedUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividend?: DividendUncheckedUpdateManyWithoutShareholderNestedInput
    share?: ShareUncheckedUpdateManyWithoutShareholderNestedInput
    shareHistory?: ShareHistoryUncheckedUpdateManyWithoutShareholderNestedInput
    transferredShareHistory?: ShareTransferHistoryUncheckedUpdateManyWithoutTransferingShareholderNestedInput
    receivedShareHistory?: ShareTransferHistoryUncheckedUpdateManyWithoutReceivingShareholderNestedInput
  }

  export type DividendCreateWithoutShareholderInput = {
    amount: number
    transactionDate: string
    sendingBankName?: string | null
    sendingBankAccount?: string | null
    receivingBankName?: string | null
    receivingBankAccount?: string | null
    remarks: string
    entryDate?: Date | string
    dividendUploadHistory?: DividendUploadHistoryCreateNestedOneWithoutDividendInput
  }

  export type DividendUncheckedCreateWithoutShareholderInput = {
    id?: number
    amount: number
    transactionDate: string
    sendingBankName?: string | null
    sendingBankAccount?: string | null
    receivingBankName?: string | null
    receivingBankAccount?: string | null
    dividendUploadHistoryId?: number | null
    remarks: string
    entryDate?: Date | string
  }

  export type DividendCreateOrConnectWithoutShareholderInput = {
    where: DividendWhereUniqueInput
    create: XOR<DividendCreateWithoutShareholderInput, DividendUncheckedCreateWithoutShareholderInput>
  }

  export type DividendCreateManyShareholderInputEnvelope = {
    data: DividendCreateManyShareholderInput | DividendCreateManyShareholderInput[]
    skipDuplicates?: boolean
  }

  export type ShareCreateWithoutShareholderInput = {
    unitsOfShare: number
    ownershipType: $Enums.OwnershipType
    ownershipDate: string
    cost: number
    remarks?: string | null
  }

  export type ShareUncheckedCreateWithoutShareholderInput = {
    id?: number
    unitsOfShare: number
    ownershipType: $Enums.OwnershipType
    ownershipDate: string
    cost: number
    remarks?: string | null
  }

  export type ShareCreateOrConnectWithoutShareholderInput = {
    where: ShareWhereUniqueInput
    create: XOR<ShareCreateWithoutShareholderInput, ShareUncheckedCreateWithoutShareholderInput>
  }

  export type ShareCreateManyShareholderInputEnvelope = {
    data: ShareCreateManyShareholderInput | ShareCreateManyShareholderInput[]
    skipDuplicates?: boolean
  }

  export type ShareHistoryCreateWithoutShareholderInput = {
    ownershipType: $Enums.OwnershipType
    unitsOfShareChanged: number
    balanceUnitsOfShare: number
    transactionDate: string
    ratePerShare: number
    remarks?: string | null
    entryDateTime?: Date | string
    shareTransferHistory?: ShareTransferHistoryCreateNestedOneWithoutShareHistoryInput
    shareUploadHistory?: ShareUploadHistoryCreateNestedOneWithoutShareHistoryInput
  }

  export type ShareHistoryUncheckedCreateWithoutShareholderInput = {
    id?: number
    ownershipType: $Enums.OwnershipType
    unitsOfShareChanged: number
    balanceUnitsOfShare: number
    transactionDate: string
    ratePerShare: number
    shareTransferHistoryId?: number | null
    shareUploadHistoryId?: number | null
    remarks?: string | null
    entryDateTime?: Date | string
  }

  export type ShareHistoryCreateOrConnectWithoutShareholderInput = {
    where: ShareHistoryWhereUniqueInput
    create: XOR<ShareHistoryCreateWithoutShareholderInput, ShareHistoryUncheckedCreateWithoutShareholderInput>
  }

  export type ShareHistoryCreateManyShareholderInputEnvelope = {
    data: ShareHistoryCreateManyShareholderInput | ShareHistoryCreateManyShareholderInput[]
    skipDuplicates?: boolean
  }

  export type ShareTransferHistoryCreateWithoutTransferingShareholderInput = {
    transferType: $Enums.TransferType
    remarks: string
    transferRate: number
    wacc: number
    transferredUnitsOfShare: number
    totalGain: number
    transferDate: string
    entryDate?: Date | string
    receivingShareholder: ShareholderCreateNestedOneWithoutReceivedShareHistoryInput
    shareHistory?: ShareHistoryCreateNestedManyWithoutShareTransferHistoryInput
  }

  export type ShareTransferHistoryUncheckedCreateWithoutTransferingShareholderInput = {
    id?: number
    receivingShareholderId: number
    transferType: $Enums.TransferType
    remarks: string
    transferRate: number
    wacc: number
    transferredUnitsOfShare: number
    totalGain: number
    transferDate: string
    entryDate?: Date | string
    shareHistory?: ShareHistoryUncheckedCreateNestedManyWithoutShareTransferHistoryInput
  }

  export type ShareTransferHistoryCreateOrConnectWithoutTransferingShareholderInput = {
    where: ShareTransferHistoryWhereUniqueInput
    create: XOR<ShareTransferHistoryCreateWithoutTransferingShareholderInput, ShareTransferHistoryUncheckedCreateWithoutTransferingShareholderInput>
  }

  export type ShareTransferHistoryCreateManyTransferingShareholderInputEnvelope = {
    data: ShareTransferHistoryCreateManyTransferingShareholderInput | ShareTransferHistoryCreateManyTransferingShareholderInput[]
    skipDuplicates?: boolean
  }

  export type ShareTransferHistoryCreateWithoutReceivingShareholderInput = {
    transferType: $Enums.TransferType
    remarks: string
    transferRate: number
    wacc: number
    transferredUnitsOfShare: number
    totalGain: number
    transferDate: string
    entryDate?: Date | string
    transferingShareholder: ShareholderCreateNestedOneWithoutTransferredShareHistoryInput
    shareHistory?: ShareHistoryCreateNestedManyWithoutShareTransferHistoryInput
  }

  export type ShareTransferHistoryUncheckedCreateWithoutReceivingShareholderInput = {
    id?: number
    transferingShareholderId: number
    transferType: $Enums.TransferType
    remarks: string
    transferRate: number
    wacc: number
    transferredUnitsOfShare: number
    totalGain: number
    transferDate: string
    entryDate?: Date | string
    shareHistory?: ShareHistoryUncheckedCreateNestedManyWithoutShareTransferHistoryInput
  }

  export type ShareTransferHistoryCreateOrConnectWithoutReceivingShareholderInput = {
    where: ShareTransferHistoryWhereUniqueInput
    create: XOR<ShareTransferHistoryCreateWithoutReceivingShareholderInput, ShareTransferHistoryUncheckedCreateWithoutReceivingShareholderInput>
  }

  export type ShareTransferHistoryCreateManyReceivingShareholderInputEnvelope = {
    data: ShareTransferHistoryCreateManyReceivingShareholderInput | ShareTransferHistoryCreateManyReceivingShareholderInput[]
    skipDuplicates?: boolean
  }

  export type WaccHistoryCreateWithoutShareholderInput = {
    totalCost: number
    totalUnitsOfShare: number
    wacc: number
    calculationDate: string
  }

  export type WaccHistoryUncheckedCreateWithoutShareholderInput = {
    id?: number
    totalCost: number
    totalUnitsOfShare: number
    wacc: number
    calculationDate: string
  }

  export type WaccHistoryCreateOrConnectWithoutShareholderInput = {
    where: WaccHistoryWhereUniqueInput
    create: XOR<WaccHistoryCreateWithoutShareholderInput, WaccHistoryUncheckedCreateWithoutShareholderInput>
  }

  export type WaccHistoryCreateManyShareholderInputEnvelope = {
    data: WaccHistoryCreateManyShareholderInput | WaccHistoryCreateManyShareholderInput[]
    skipDuplicates?: boolean
  }

  export type DividendUpsertWithWhereUniqueWithoutShareholderInput = {
    where: DividendWhereUniqueInput
    update: XOR<DividendUpdateWithoutShareholderInput, DividendUncheckedUpdateWithoutShareholderInput>
    create: XOR<DividendCreateWithoutShareholderInput, DividendUncheckedCreateWithoutShareholderInput>
  }

  export type DividendUpdateWithWhereUniqueWithoutShareholderInput = {
    where: DividendWhereUniqueInput
    data: XOR<DividendUpdateWithoutShareholderInput, DividendUncheckedUpdateWithoutShareholderInput>
  }

  export type DividendUpdateManyWithWhereWithoutShareholderInput = {
    where: DividendScalarWhereInput
    data: XOR<DividendUpdateManyMutationInput, DividendUncheckedUpdateManyWithoutShareholderInput>
  }

  export type ShareUpsertWithWhereUniqueWithoutShareholderInput = {
    where: ShareWhereUniqueInput
    update: XOR<ShareUpdateWithoutShareholderInput, ShareUncheckedUpdateWithoutShareholderInput>
    create: XOR<ShareCreateWithoutShareholderInput, ShareUncheckedCreateWithoutShareholderInput>
  }

  export type ShareUpdateWithWhereUniqueWithoutShareholderInput = {
    where: ShareWhereUniqueInput
    data: XOR<ShareUpdateWithoutShareholderInput, ShareUncheckedUpdateWithoutShareholderInput>
  }

  export type ShareUpdateManyWithWhereWithoutShareholderInput = {
    where: ShareScalarWhereInput
    data: XOR<ShareUpdateManyMutationInput, ShareUncheckedUpdateManyWithoutShareholderInput>
  }

  export type ShareScalarWhereInput = {
    AND?: ShareScalarWhereInput | ShareScalarWhereInput[]
    OR?: ShareScalarWhereInput[]
    NOT?: ShareScalarWhereInput | ShareScalarWhereInput[]
    id?: IntFilter<"Share"> | number
    unitsOfShare?: FloatFilter<"Share"> | number
    ownershipType?: EnumOwnershipTypeFilter<"Share"> | $Enums.OwnershipType
    ownershipDate?: StringFilter<"Share"> | string
    cost?: FloatFilter<"Share"> | number
    shareholderId?: IntFilter<"Share"> | number
    remarks?: StringNullableFilter<"Share"> | string | null
  }

  export type ShareHistoryUpsertWithWhereUniqueWithoutShareholderInput = {
    where: ShareHistoryWhereUniqueInput
    update: XOR<ShareHistoryUpdateWithoutShareholderInput, ShareHistoryUncheckedUpdateWithoutShareholderInput>
    create: XOR<ShareHistoryCreateWithoutShareholderInput, ShareHistoryUncheckedCreateWithoutShareholderInput>
  }

  export type ShareHistoryUpdateWithWhereUniqueWithoutShareholderInput = {
    where: ShareHistoryWhereUniqueInput
    data: XOR<ShareHistoryUpdateWithoutShareholderInput, ShareHistoryUncheckedUpdateWithoutShareholderInput>
  }

  export type ShareHistoryUpdateManyWithWhereWithoutShareholderInput = {
    where: ShareHistoryScalarWhereInput
    data: XOR<ShareHistoryUpdateManyMutationInput, ShareHistoryUncheckedUpdateManyWithoutShareholderInput>
  }

  export type ShareTransferHistoryUpsertWithWhereUniqueWithoutTransferingShareholderInput = {
    where: ShareTransferHistoryWhereUniqueInput
    update: XOR<ShareTransferHistoryUpdateWithoutTransferingShareholderInput, ShareTransferHistoryUncheckedUpdateWithoutTransferingShareholderInput>
    create: XOR<ShareTransferHistoryCreateWithoutTransferingShareholderInput, ShareTransferHistoryUncheckedCreateWithoutTransferingShareholderInput>
  }

  export type ShareTransferHistoryUpdateWithWhereUniqueWithoutTransferingShareholderInput = {
    where: ShareTransferHistoryWhereUniqueInput
    data: XOR<ShareTransferHistoryUpdateWithoutTransferingShareholderInput, ShareTransferHistoryUncheckedUpdateWithoutTransferingShareholderInput>
  }

  export type ShareTransferHistoryUpdateManyWithWhereWithoutTransferingShareholderInput = {
    where: ShareTransferHistoryScalarWhereInput
    data: XOR<ShareTransferHistoryUpdateManyMutationInput, ShareTransferHistoryUncheckedUpdateManyWithoutTransferingShareholderInput>
  }

  export type ShareTransferHistoryScalarWhereInput = {
    AND?: ShareTransferHistoryScalarWhereInput | ShareTransferHistoryScalarWhereInput[]
    OR?: ShareTransferHistoryScalarWhereInput[]
    NOT?: ShareTransferHistoryScalarWhereInput | ShareTransferHistoryScalarWhereInput[]
    id?: IntFilter<"ShareTransferHistory"> | number
    transferingShareholderId?: IntFilter<"ShareTransferHistory"> | number
    receivingShareholderId?: IntFilter<"ShareTransferHistory"> | number
    transferType?: EnumTransferTypeFilter<"ShareTransferHistory"> | $Enums.TransferType
    remarks?: StringFilter<"ShareTransferHistory"> | string
    transferRate?: FloatFilter<"ShareTransferHistory"> | number
    wacc?: FloatFilter<"ShareTransferHistory"> | number
    transferredUnitsOfShare?: FloatFilter<"ShareTransferHistory"> | number
    totalGain?: FloatFilter<"ShareTransferHistory"> | number
    transferDate?: StringFilter<"ShareTransferHistory"> | string
    entryDate?: DateTimeFilter<"ShareTransferHistory"> | Date | string
  }

  export type ShareTransferHistoryUpsertWithWhereUniqueWithoutReceivingShareholderInput = {
    where: ShareTransferHistoryWhereUniqueInput
    update: XOR<ShareTransferHistoryUpdateWithoutReceivingShareholderInput, ShareTransferHistoryUncheckedUpdateWithoutReceivingShareholderInput>
    create: XOR<ShareTransferHistoryCreateWithoutReceivingShareholderInput, ShareTransferHistoryUncheckedCreateWithoutReceivingShareholderInput>
  }

  export type ShareTransferHistoryUpdateWithWhereUniqueWithoutReceivingShareholderInput = {
    where: ShareTransferHistoryWhereUniqueInput
    data: XOR<ShareTransferHistoryUpdateWithoutReceivingShareholderInput, ShareTransferHistoryUncheckedUpdateWithoutReceivingShareholderInput>
  }

  export type ShareTransferHistoryUpdateManyWithWhereWithoutReceivingShareholderInput = {
    where: ShareTransferHistoryScalarWhereInput
    data: XOR<ShareTransferHistoryUpdateManyMutationInput, ShareTransferHistoryUncheckedUpdateManyWithoutReceivingShareholderInput>
  }

  export type WaccHistoryUpsertWithWhereUniqueWithoutShareholderInput = {
    where: WaccHistoryWhereUniqueInput
    update: XOR<WaccHistoryUpdateWithoutShareholderInput, WaccHistoryUncheckedUpdateWithoutShareholderInput>
    create: XOR<WaccHistoryCreateWithoutShareholderInput, WaccHistoryUncheckedCreateWithoutShareholderInput>
  }

  export type WaccHistoryUpdateWithWhereUniqueWithoutShareholderInput = {
    where: WaccHistoryWhereUniqueInput
    data: XOR<WaccHistoryUpdateWithoutShareholderInput, WaccHistoryUncheckedUpdateWithoutShareholderInput>
  }

  export type WaccHistoryUpdateManyWithWhereWithoutShareholderInput = {
    where: WaccHistoryScalarWhereInput
    data: XOR<WaccHistoryUpdateManyMutationInput, WaccHistoryUncheckedUpdateManyWithoutShareholderInput>
  }

  export type WaccHistoryScalarWhereInput = {
    AND?: WaccHistoryScalarWhereInput | WaccHistoryScalarWhereInput[]
    OR?: WaccHistoryScalarWhereInput[]
    NOT?: WaccHistoryScalarWhereInput | WaccHistoryScalarWhereInput[]
    id?: IntFilter<"WaccHistory"> | number
    shareholderId?: IntFilter<"WaccHistory"> | number
    totalCost?: FloatFilter<"WaccHistory"> | number
    totalUnitsOfShare?: FloatFilter<"WaccHistory"> | number
    wacc?: FloatFilter<"WaccHistory"> | number
    calculationDate?: StringFilter<"WaccHistory"> | string
  }

  export type SecurityTransactionDetailCreateWithoutSecurityInput = {
    quantity: number
    price: number
    amount: number
    securityAdditionNature?: $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS: $Enums.SecurityClassificationAsPerNFRS
    remarks?: string | null
    securityTransaction: SecurityTransactionCreateNestedOneWithoutSecurityTransactionDetailInput
  }

  export type SecurityTransactionDetailUncheckedCreateWithoutSecurityInput = {
    id?: number
    quantity: number
    price: number
    amount: number
    securityAdditionNature?: $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS: $Enums.SecurityClassificationAsPerNFRS
    securityTransactionId: number
    remarks?: string | null
  }

  export type SecurityTransactionDetailCreateOrConnectWithoutSecurityInput = {
    where: SecurityTransactionDetailWhereUniqueInput
    create: XOR<SecurityTransactionDetailCreateWithoutSecurityInput, SecurityTransactionDetailUncheckedCreateWithoutSecurityInput>
  }

  export type SecurityTransactionDetailCreateManySecurityInputEnvelope = {
    data: SecurityTransactionDetailCreateManySecurityInput | SecurityTransactionDetailCreateManySecurityInput[]
    skipDuplicates?: boolean
  }

  export type SecurityTransactionDetailUpsertWithWhereUniqueWithoutSecurityInput = {
    where: SecurityTransactionDetailWhereUniqueInput
    update: XOR<SecurityTransactionDetailUpdateWithoutSecurityInput, SecurityTransactionDetailUncheckedUpdateWithoutSecurityInput>
    create: XOR<SecurityTransactionDetailCreateWithoutSecurityInput, SecurityTransactionDetailUncheckedCreateWithoutSecurityInput>
  }

  export type SecurityTransactionDetailUpdateWithWhereUniqueWithoutSecurityInput = {
    where: SecurityTransactionDetailWhereUniqueInput
    data: XOR<SecurityTransactionDetailUpdateWithoutSecurityInput, SecurityTransactionDetailUncheckedUpdateWithoutSecurityInput>
  }

  export type SecurityTransactionDetailUpdateManyWithWhereWithoutSecurityInput = {
    where: SecurityTransactionDetailScalarWhereInput
    data: XOR<SecurityTransactionDetailUpdateManyMutationInput, SecurityTransactionDetailUncheckedUpdateManyWithoutSecurityInput>
  }

  export type SecurityTransactionDetailScalarWhereInput = {
    AND?: SecurityTransactionDetailScalarWhereInput | SecurityTransactionDetailScalarWhereInput[]
    OR?: SecurityTransactionDetailScalarWhereInput[]
    NOT?: SecurityTransactionDetailScalarWhereInput | SecurityTransactionDetailScalarWhereInput[]
    id?: IntFilter<"SecurityTransactionDetail"> | number
    quantity?: FloatFilter<"SecurityTransactionDetail"> | number
    price?: FloatFilter<"SecurityTransactionDetail"> | number
    amount?: FloatFilter<"SecurityTransactionDetail"> | number
    securityAdditionNature?: EnumSecurityAdditionNatureNullableFilter<"SecurityTransactionDetail"> | $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS?: EnumSecurityClassificationAsPerNFRSFilter<"SecurityTransactionDetail"> | $Enums.SecurityClassificationAsPerNFRS
    securityId?: IntFilter<"SecurityTransactionDetail"> | number
    securityTransactionId?: IntFilter<"SecurityTransactionDetail"> | number
    remarks?: StringNullableFilter<"SecurityTransactionDetail"> | string | null
  }

  export type SecurityTransactionDetailCreateWithoutSecurityTransactionInput = {
    quantity: number
    price: number
    amount: number
    securityAdditionNature?: $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS: $Enums.SecurityClassificationAsPerNFRS
    remarks?: string | null
    security: SecurityCreateNestedOneWithoutSecurityTransactionDetailInput
  }

  export type SecurityTransactionDetailUncheckedCreateWithoutSecurityTransactionInput = {
    id?: number
    quantity: number
    price: number
    amount: number
    securityAdditionNature?: $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS: $Enums.SecurityClassificationAsPerNFRS
    securityId: number
    remarks?: string | null
  }

  export type SecurityTransactionDetailCreateOrConnectWithoutSecurityTransactionInput = {
    where: SecurityTransactionDetailWhereUniqueInput
    create: XOR<SecurityTransactionDetailCreateWithoutSecurityTransactionInput, SecurityTransactionDetailUncheckedCreateWithoutSecurityTransactionInput>
  }

  export type SecurityTransactionDetailCreateManySecurityTransactionInputEnvelope = {
    data: SecurityTransactionDetailCreateManySecurityTransactionInput | SecurityTransactionDetailCreateManySecurityTransactionInput[]
    skipDuplicates?: boolean
  }

  export type SecurityTransactionDetailUpsertWithWhereUniqueWithoutSecurityTransactionInput = {
    where: SecurityTransactionDetailWhereUniqueInput
    update: XOR<SecurityTransactionDetailUpdateWithoutSecurityTransactionInput, SecurityTransactionDetailUncheckedUpdateWithoutSecurityTransactionInput>
    create: XOR<SecurityTransactionDetailCreateWithoutSecurityTransactionInput, SecurityTransactionDetailUncheckedCreateWithoutSecurityTransactionInput>
  }

  export type SecurityTransactionDetailUpdateWithWhereUniqueWithoutSecurityTransactionInput = {
    where: SecurityTransactionDetailWhereUniqueInput
    data: XOR<SecurityTransactionDetailUpdateWithoutSecurityTransactionInput, SecurityTransactionDetailUncheckedUpdateWithoutSecurityTransactionInput>
  }

  export type SecurityTransactionDetailUpdateManyWithWhereWithoutSecurityTransactionInput = {
    where: SecurityTransactionDetailScalarWhereInput
    data: XOR<SecurityTransactionDetailUpdateManyMutationInput, SecurityTransactionDetailUncheckedUpdateManyWithoutSecurityTransactionInput>
  }

  export type SecurityCreateWithoutSecurityTransactionDetailInput = {
    name: string
    shortName: string
    securityClassification: $Enums.SecurityClassification
  }

  export type SecurityUncheckedCreateWithoutSecurityTransactionDetailInput = {
    id?: number
    name: string
    shortName: string
    securityClassification: $Enums.SecurityClassification
  }

  export type SecurityCreateOrConnectWithoutSecurityTransactionDetailInput = {
    where: SecurityWhereUniqueInput
    create: XOR<SecurityCreateWithoutSecurityTransactionDetailInput, SecurityUncheckedCreateWithoutSecurityTransactionDetailInput>
  }

  export type SecurityTransactionCreateWithoutSecurityTransactionDetailInput = {
    transactionDate: string
    entryDate?: Date | string
  }

  export type SecurityTransactionUncheckedCreateWithoutSecurityTransactionDetailInput = {
    id?: number
    transactionDate: string
    entryDate?: Date | string
  }

  export type SecurityTransactionCreateOrConnectWithoutSecurityTransactionDetailInput = {
    where: SecurityTransactionWhereUniqueInput
    create: XOR<SecurityTransactionCreateWithoutSecurityTransactionDetailInput, SecurityTransactionUncheckedCreateWithoutSecurityTransactionDetailInput>
  }

  export type SecurityUpsertWithoutSecurityTransactionDetailInput = {
    update: XOR<SecurityUpdateWithoutSecurityTransactionDetailInput, SecurityUncheckedUpdateWithoutSecurityTransactionDetailInput>
    create: XOR<SecurityCreateWithoutSecurityTransactionDetailInput, SecurityUncheckedCreateWithoutSecurityTransactionDetailInput>
    where?: SecurityWhereInput
  }

  export type SecurityUpdateToOneWithWhereWithoutSecurityTransactionDetailInput = {
    where?: SecurityWhereInput
    data: XOR<SecurityUpdateWithoutSecurityTransactionDetailInput, SecurityUncheckedUpdateWithoutSecurityTransactionDetailInput>
  }

  export type SecurityUpdateWithoutSecurityTransactionDetailInput = {
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    securityClassification?: EnumSecurityClassificationFieldUpdateOperationsInput | $Enums.SecurityClassification
  }

  export type SecurityUncheckedUpdateWithoutSecurityTransactionDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shortName?: StringFieldUpdateOperationsInput | string
    securityClassification?: EnumSecurityClassificationFieldUpdateOperationsInput | $Enums.SecurityClassification
  }

  export type SecurityTransactionUpsertWithoutSecurityTransactionDetailInput = {
    update: XOR<SecurityTransactionUpdateWithoutSecurityTransactionDetailInput, SecurityTransactionUncheckedUpdateWithoutSecurityTransactionDetailInput>
    create: XOR<SecurityTransactionCreateWithoutSecurityTransactionDetailInput, SecurityTransactionUncheckedCreateWithoutSecurityTransactionDetailInput>
    where?: SecurityTransactionWhereInput
  }

  export type SecurityTransactionUpdateToOneWithWhereWithoutSecurityTransactionDetailInput = {
    where?: SecurityTransactionWhereInput
    data: XOR<SecurityTransactionUpdateWithoutSecurityTransactionDetailInput, SecurityTransactionUncheckedUpdateWithoutSecurityTransactionDetailInput>
  }

  export type SecurityTransactionUpdateWithoutSecurityTransactionDetailInput = {
    transactionDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityTransactionUncheckedUpdateWithoutSecurityTransactionDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareHistoryCreateManyShareUploadHistoryInput = {
    id?: number
    ownershipType: $Enums.OwnershipType
    unitsOfShareChanged: number
    balanceUnitsOfShare: number
    transactionDate: string
    shareholderId: number
    ratePerShare: number
    shareTransferHistoryId?: number | null
    remarks?: string | null
    entryDateTime?: Date | string
  }

  export type ShareHistoryUpdateWithoutShareUploadHistoryInput = {
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFieldUpdateOperationsInput | number
    balanceUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    ratePerShare?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    shareholder?: ShareholderUpdateOneRequiredWithoutShareHistoryNestedInput
    shareTransferHistory?: ShareTransferHistoryUpdateOneWithoutShareHistoryNestedInput
  }

  export type ShareHistoryUncheckedUpdateWithoutShareUploadHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFieldUpdateOperationsInput | number
    balanceUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    shareholderId?: IntFieldUpdateOperationsInput | number
    ratePerShare?: FloatFieldUpdateOperationsInput | number
    shareTransferHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareHistoryUncheckedUpdateManyWithoutShareUploadHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFieldUpdateOperationsInput | number
    balanceUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    shareholderId?: IntFieldUpdateOperationsInput | number
    ratePerShare?: FloatFieldUpdateOperationsInput | number
    shareTransferHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DividendCreateManyDividendUploadHistoryInput = {
    id?: number
    amount: number
    transactionDate: string
    shareholderId: number
    sendingBankName?: string | null
    sendingBankAccount?: string | null
    receivingBankName?: string | null
    receivingBankAccount?: string | null
    remarks: string
    entryDate?: Date | string
  }

  export type DividendUpdateWithoutDividendUploadHistoryInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    sendingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    sendingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shareholder?: ShareholderUpdateOneRequiredWithoutDividendNestedInput
  }

  export type DividendUncheckedUpdateWithoutDividendUploadHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    shareholderId?: IntFieldUpdateOperationsInput | number
    sendingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    sendingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DividendUncheckedUpdateManyWithoutDividendUploadHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    shareholderId?: IntFieldUpdateOperationsInput | number
    sendingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    sendingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareHistoryCreateManyShareTransferHistoryInput = {
    id?: number
    ownershipType: $Enums.OwnershipType
    unitsOfShareChanged: number
    balanceUnitsOfShare: number
    transactionDate: string
    shareholderId: number
    ratePerShare: number
    shareUploadHistoryId?: number | null
    remarks?: string | null
    entryDateTime?: Date | string
  }

  export type ShareHistoryUpdateWithoutShareTransferHistoryInput = {
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFieldUpdateOperationsInput | number
    balanceUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    ratePerShare?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    shareholder?: ShareholderUpdateOneRequiredWithoutShareHistoryNestedInput
    shareUploadHistory?: ShareUploadHistoryUpdateOneWithoutShareHistoryNestedInput
  }

  export type ShareHistoryUncheckedUpdateWithoutShareTransferHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFieldUpdateOperationsInput | number
    balanceUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    shareholderId?: IntFieldUpdateOperationsInput | number
    ratePerShare?: FloatFieldUpdateOperationsInput | number
    shareUploadHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareHistoryUncheckedUpdateManyWithoutShareTransferHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFieldUpdateOperationsInput | number
    balanceUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    shareholderId?: IntFieldUpdateOperationsInput | number
    ratePerShare?: FloatFieldUpdateOperationsInput | number
    shareUploadHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DividendCreateManyShareholderInput = {
    id?: number
    amount: number
    transactionDate: string
    sendingBankName?: string | null
    sendingBankAccount?: string | null
    receivingBankName?: string | null
    receivingBankAccount?: string | null
    dividendUploadHistoryId?: number | null
    remarks: string
    entryDate?: Date | string
  }

  export type ShareCreateManyShareholderInput = {
    id?: number
    unitsOfShare: number
    ownershipType: $Enums.OwnershipType
    ownershipDate: string
    cost: number
    remarks?: string | null
  }

  export type ShareHistoryCreateManyShareholderInput = {
    id?: number
    ownershipType: $Enums.OwnershipType
    unitsOfShareChanged: number
    balanceUnitsOfShare: number
    transactionDate: string
    ratePerShare: number
    shareTransferHistoryId?: number | null
    shareUploadHistoryId?: number | null
    remarks?: string | null
    entryDateTime?: Date | string
  }

  export type ShareTransferHistoryCreateManyTransferingShareholderInput = {
    id?: number
    receivingShareholderId: number
    transferType: $Enums.TransferType
    remarks: string
    transferRate: number
    wacc: number
    transferredUnitsOfShare: number
    totalGain: number
    transferDate: string
    entryDate?: Date | string
  }

  export type ShareTransferHistoryCreateManyReceivingShareholderInput = {
    id?: number
    transferingShareholderId: number
    transferType: $Enums.TransferType
    remarks: string
    transferRate: number
    wacc: number
    transferredUnitsOfShare: number
    totalGain: number
    transferDate: string
    entryDate?: Date | string
  }

  export type WaccHistoryCreateManyShareholderInput = {
    id?: number
    totalCost: number
    totalUnitsOfShare: number
    wacc: number
    calculationDate: string
  }

  export type DividendUpdateWithoutShareholderInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    sendingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    sendingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dividendUploadHistory?: DividendUploadHistoryUpdateOneWithoutDividendNestedInput
  }

  export type DividendUncheckedUpdateWithoutShareholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    sendingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    sendingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividendUploadHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DividendUncheckedUpdateManyWithoutShareholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    sendingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    sendingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankName?: NullableStringFieldUpdateOperationsInput | string | null
    receivingBankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    dividendUploadHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareUpdateWithoutShareholderInput = {
    unitsOfShare?: FloatFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    ownershipDate?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShareUncheckedUpdateWithoutShareholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    unitsOfShare?: FloatFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    ownershipDate?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShareUncheckedUpdateManyWithoutShareholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    unitsOfShare?: FloatFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    ownershipDate?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShareHistoryUpdateWithoutShareholderInput = {
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFieldUpdateOperationsInput | number
    balanceUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    ratePerShare?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    shareTransferHistory?: ShareTransferHistoryUpdateOneWithoutShareHistoryNestedInput
    shareUploadHistory?: ShareUploadHistoryUpdateOneWithoutShareHistoryNestedInput
  }

  export type ShareHistoryUncheckedUpdateWithoutShareholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFieldUpdateOperationsInput | number
    balanceUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    ratePerShare?: FloatFieldUpdateOperationsInput | number
    shareTransferHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    shareUploadHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareHistoryUncheckedUpdateManyWithoutShareholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownershipType?: EnumOwnershipTypeFieldUpdateOperationsInput | $Enums.OwnershipType
    unitsOfShareChanged?: FloatFieldUpdateOperationsInput | number
    balanceUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    transactionDate?: StringFieldUpdateOperationsInput | string
    ratePerShare?: FloatFieldUpdateOperationsInput | number
    shareTransferHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    shareUploadHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareTransferHistoryUpdateWithoutTransferingShareholderInput = {
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    remarks?: StringFieldUpdateOperationsInput | string
    transferRate?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    transferredUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    totalGain?: FloatFieldUpdateOperationsInput | number
    transferDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receivingShareholder?: ShareholderUpdateOneRequiredWithoutReceivedShareHistoryNestedInput
    shareHistory?: ShareHistoryUpdateManyWithoutShareTransferHistoryNestedInput
  }

  export type ShareTransferHistoryUncheckedUpdateWithoutTransferingShareholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receivingShareholderId?: IntFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    remarks?: StringFieldUpdateOperationsInput | string
    transferRate?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    transferredUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    totalGain?: FloatFieldUpdateOperationsInput | number
    transferDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shareHistory?: ShareHistoryUncheckedUpdateManyWithoutShareTransferHistoryNestedInput
  }

  export type ShareTransferHistoryUncheckedUpdateManyWithoutTransferingShareholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receivingShareholderId?: IntFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    remarks?: StringFieldUpdateOperationsInput | string
    transferRate?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    transferredUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    totalGain?: FloatFieldUpdateOperationsInput | number
    transferDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareTransferHistoryUpdateWithoutReceivingShareholderInput = {
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    remarks?: StringFieldUpdateOperationsInput | string
    transferRate?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    transferredUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    totalGain?: FloatFieldUpdateOperationsInput | number
    transferDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transferingShareholder?: ShareholderUpdateOneRequiredWithoutTransferredShareHistoryNestedInput
    shareHistory?: ShareHistoryUpdateManyWithoutShareTransferHistoryNestedInput
  }

  export type ShareTransferHistoryUncheckedUpdateWithoutReceivingShareholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    transferingShareholderId?: IntFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    remarks?: StringFieldUpdateOperationsInput | string
    transferRate?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    transferredUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    totalGain?: FloatFieldUpdateOperationsInput | number
    transferDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shareHistory?: ShareHistoryUncheckedUpdateManyWithoutShareTransferHistoryNestedInput
  }

  export type ShareTransferHistoryUncheckedUpdateManyWithoutReceivingShareholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    transferingShareholderId?: IntFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    remarks?: StringFieldUpdateOperationsInput | string
    transferRate?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    transferredUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    totalGain?: FloatFieldUpdateOperationsInput | number
    transferDate?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaccHistoryUpdateWithoutShareholderInput = {
    totalCost?: FloatFieldUpdateOperationsInput | number
    totalUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    calculationDate?: StringFieldUpdateOperationsInput | string
  }

  export type WaccHistoryUncheckedUpdateWithoutShareholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    totalUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    calculationDate?: StringFieldUpdateOperationsInput | string
  }

  export type WaccHistoryUncheckedUpdateManyWithoutShareholderInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    totalUnitsOfShare?: FloatFieldUpdateOperationsInput | number
    wacc?: FloatFieldUpdateOperationsInput | number
    calculationDate?: StringFieldUpdateOperationsInput | string
  }

  export type SecurityTransactionDetailCreateManySecurityInput = {
    id?: number
    quantity: number
    price: number
    amount: number
    securityAdditionNature?: $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS: $Enums.SecurityClassificationAsPerNFRS
    securityTransactionId: number
    remarks?: string | null
  }

  export type SecurityTransactionDetailUpdateWithoutSecurityInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    securityAdditionNature?: NullableEnumSecurityAdditionNatureFieldUpdateOperationsInput | $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS?: EnumSecurityClassificationAsPerNFRSFieldUpdateOperationsInput | $Enums.SecurityClassificationAsPerNFRS
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    securityTransaction?: SecurityTransactionUpdateOneRequiredWithoutSecurityTransactionDetailNestedInput
  }

  export type SecurityTransactionDetailUncheckedUpdateWithoutSecurityInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    securityAdditionNature?: NullableEnumSecurityAdditionNatureFieldUpdateOperationsInput | $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS?: EnumSecurityClassificationAsPerNFRSFieldUpdateOperationsInput | $Enums.SecurityClassificationAsPerNFRS
    securityTransactionId?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecurityTransactionDetailUncheckedUpdateManyWithoutSecurityInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    securityAdditionNature?: NullableEnumSecurityAdditionNatureFieldUpdateOperationsInput | $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS?: EnumSecurityClassificationAsPerNFRSFieldUpdateOperationsInput | $Enums.SecurityClassificationAsPerNFRS
    securityTransactionId?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecurityTransactionDetailCreateManySecurityTransactionInput = {
    id?: number
    quantity: number
    price: number
    amount: number
    securityAdditionNature?: $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS: $Enums.SecurityClassificationAsPerNFRS
    securityId: number
    remarks?: string | null
  }

  export type SecurityTransactionDetailUpdateWithoutSecurityTransactionInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    securityAdditionNature?: NullableEnumSecurityAdditionNatureFieldUpdateOperationsInput | $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS?: EnumSecurityClassificationAsPerNFRSFieldUpdateOperationsInput | $Enums.SecurityClassificationAsPerNFRS
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    security?: SecurityUpdateOneRequiredWithoutSecurityTransactionDetailNestedInput
  }

  export type SecurityTransactionDetailUncheckedUpdateWithoutSecurityTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    securityAdditionNature?: NullableEnumSecurityAdditionNatureFieldUpdateOperationsInput | $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS?: EnumSecurityClassificationAsPerNFRSFieldUpdateOperationsInput | $Enums.SecurityClassificationAsPerNFRS
    securityId?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecurityTransactionDetailUncheckedUpdateManyWithoutSecurityTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    securityAdditionNature?: NullableEnumSecurityAdditionNatureFieldUpdateOperationsInput | $Enums.SecurityAdditionNature | null
    securityClassificationAsPerNFRS?: EnumSecurityClassificationAsPerNFRSFieldUpdateOperationsInput | $Enums.SecurityClassificationAsPerNFRS
    securityId?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model SupplierTransaction
 * 
 */
export type SupplierTransaction = $Result.DefaultSelection<Prisma.$SupplierTransactionPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Batch
 * 
 */
export type Batch = $Result.DefaultSelection<Prisma.$BatchPayload>
/**
 * Model CustomerCredit
 * 
 */
export type CustomerCredit = $Result.DefaultSelection<Prisma.$CustomerCreditPayload>
/**
 * Model Movement
 * 
 */
export type Movement = $Result.DefaultSelection<Prisma.$MovementPayload>
/**
 * Model MovementItem
 * 
 */
export type MovementItem = $Result.DefaultSelection<Prisma.$MovementItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountRole: {
  STAFF: 'STAFF',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN',
  DEVELOPER: 'DEVELOPER'
};

export type AccountRole = (typeof AccountRole)[keyof typeof AccountRole]


export const SupplierTransactionType: {
  PURCHASE: 'PURCHASE',
  PAYMENT: 'PAYMENT',
  RETURN: 'RETURN'
};

export type SupplierTransactionType = (typeof SupplierTransactionType)[keyof typeof SupplierTransactionType]


export const Unit: {
  PIECE: 'PIECE',
  BOX: 'BOX',
  PACK: 'PACK',
  ROLL: 'ROLL',
  TUBE: 'TUBE',
  BAG: 'BAG',
  CARTON: 'CARTON',
  BOTTLE: 'BOTTLE',
  PALLET: 'PALLET'
};

export type Unit = (typeof Unit)[keyof typeof Unit]


export const MovementType: {
  SALE: 'SALE',
  PURCHASE: 'PURCHASE',
  RETURN: 'RETURN',
  ADJUSTMENT: 'ADJUSTMENT',
  EXPIRED: 'EXPIRED'
};

export type MovementType = (typeof MovementType)[keyof typeof MovementType]


export const PaymentType: {
  Cash: 'Cash',
  Transaction: 'Transaction'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]

}

export type AccountRole = $Enums.AccountRole

export const AccountRole: typeof $Enums.AccountRole

export type SupplierTransactionType = $Enums.SupplierTransactionType

export const SupplierTransactionType: typeof $Enums.SupplierTransactionType

export type Unit = $Enums.Unit

export const Unit: typeof $Enums.Unit

export type MovementType = $Enums.MovementType

export const MovementType: typeof $Enums.MovementType

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
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
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplierTransaction`: Exposes CRUD operations for the **SupplierTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierTransactions
    * const supplierTransactions = await prisma.supplierTransaction.findMany()
    * ```
    */
  get supplierTransaction(): Prisma.SupplierTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batch`: Exposes CRUD operations for the **Batch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batches
    * const batches = await prisma.batch.findMany()
    * ```
    */
  get batch(): Prisma.BatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerCredit`: Exposes CRUD operations for the **CustomerCredit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerCredits
    * const customerCredits = await prisma.customerCredit.findMany()
    * ```
    */
  get customerCredit(): Prisma.CustomerCreditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movement`: Exposes CRUD operations for the **Movement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movements
    * const movements = await prisma.movement.findMany()
    * ```
    */
  get movement(): Prisma.MovementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movementItem`: Exposes CRUD operations for the **MovementItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovementItems
    * const movementItems = await prisma.movementItem.findMany()
    * ```
    */
  get movementItem(): Prisma.MovementItemDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Customer: 'Customer',
    Supplier: 'Supplier',
    SupplierTransaction: 'SupplierTransaction',
    Product: 'Product',
    Batch: 'Batch',
    CustomerCredit: 'CustomerCredit',
    Movement: 'Movement',
    MovementItem: 'MovementItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "customer" | "supplier" | "supplierTransaction" | "product" | "batch" | "customerCredit" | "movement" | "movementItem"
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
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      SupplierTransaction: {
        payload: Prisma.$SupplierTransactionPayload<ExtArgs>
        fields: Prisma.SupplierTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierTransactionPayload>
          }
          findFirst: {
            args: Prisma.SupplierTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierTransactionPayload>
          }
          findMany: {
            args: Prisma.SupplierTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierTransactionPayload>[]
          }
          create: {
            args: Prisma.SupplierTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierTransactionPayload>
          }
          createMany: {
            args: Prisma.SupplierTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierTransactionPayload>[]
          }
          delete: {
            args: Prisma.SupplierTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierTransactionPayload>
          }
          update: {
            args: Prisma.SupplierTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierTransactionPayload>
          }
          deleteMany: {
            args: Prisma.SupplierTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierTransactionPayload>[]
          }
          upsert: {
            args: Prisma.SupplierTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierTransactionPayload>
          }
          aggregate: {
            args: Prisma.SupplierTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierTransaction>
          }
          groupBy: {
            args: Prisma.SupplierTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierTransactionCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Batch: {
        payload: Prisma.$BatchPayload<ExtArgs>
        fields: Prisma.BatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findFirst: {
            args: Prisma.BatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findMany: {
            args: Prisma.BatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          create: {
            args: Prisma.BatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          createMany: {
            args: Prisma.BatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          delete: {
            args: Prisma.BatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          update: {
            args: Prisma.BatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          deleteMany: {
            args: Prisma.BatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          upsert: {
            args: Prisma.BatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          aggregate: {
            args: Prisma.BatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatch>
          }
          groupBy: {
            args: Prisma.BatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchCountArgs<ExtArgs>
            result: $Utils.Optional<BatchCountAggregateOutputType> | number
          }
        }
      }
      CustomerCredit: {
        payload: Prisma.$CustomerCreditPayload<ExtArgs>
        fields: Prisma.CustomerCreditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerCreditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCreditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerCreditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCreditPayload>
          }
          findFirst: {
            args: Prisma.CustomerCreditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCreditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerCreditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCreditPayload>
          }
          findMany: {
            args: Prisma.CustomerCreditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCreditPayload>[]
          }
          create: {
            args: Prisma.CustomerCreditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCreditPayload>
          }
          createMany: {
            args: Prisma.CustomerCreditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCreditPayload>[]
          }
          delete: {
            args: Prisma.CustomerCreditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCreditPayload>
          }
          update: {
            args: Prisma.CustomerCreditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCreditPayload>
          }
          deleteMany: {
            args: Prisma.CustomerCreditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerCreditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerCreditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCreditPayload>[]
          }
          upsert: {
            args: Prisma.CustomerCreditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerCreditPayload>
          }
          aggregate: {
            args: Prisma.CustomerCreditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerCredit>
          }
          groupBy: {
            args: Prisma.CustomerCreditGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerCreditGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCreditCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCreditCountAggregateOutputType> | number
          }
        }
      }
      Movement: {
        payload: Prisma.$MovementPayload<ExtArgs>
        fields: Prisma.MovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          findFirst: {
            args: Prisma.MovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          findMany: {
            args: Prisma.MovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>[]
          }
          create: {
            args: Prisma.MovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          createMany: {
            args: Prisma.MovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>[]
          }
          delete: {
            args: Prisma.MovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          update: {
            args: Prisma.MovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          deleteMany: {
            args: Prisma.MovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>[]
          }
          upsert: {
            args: Prisma.MovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          aggregate: {
            args: Prisma.MovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovement>
          }
          groupBy: {
            args: Prisma.MovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovementCountArgs<ExtArgs>
            result: $Utils.Optional<MovementCountAggregateOutputType> | number
          }
        }
      }
      MovementItem: {
        payload: Prisma.$MovementItemPayload<ExtArgs>
        fields: Prisma.MovementItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovementItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovementItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>
          }
          findFirst: {
            args: Prisma.MovementItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovementItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>
          }
          findMany: {
            args: Prisma.MovementItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>[]
          }
          create: {
            args: Prisma.MovementItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>
          }
          createMany: {
            args: Prisma.MovementItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovementItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>[]
          }
          delete: {
            args: Prisma.MovementItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>
          }
          update: {
            args: Prisma.MovementItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>
          }
          deleteMany: {
            args: Prisma.MovementItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovementItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovementItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>[]
          }
          upsert: {
            args: Prisma.MovementItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>
          }
          aggregate: {
            args: Prisma.MovementItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovementItem>
          }
          groupBy: {
            args: Prisma.MovementItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovementItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovementItemCountArgs<ExtArgs>
            result: $Utils.Optional<MovementItemCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    customer?: CustomerOmit
    supplier?: SupplierOmit
    supplierTransaction?: SupplierTransactionOmit
    product?: ProductOmit
    batch?: BatchOmit
    customerCredit?: CustomerCreditOmit
    movement?: MovementOmit
    movementItem?: MovementItemOmit
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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    credits: number
    movements: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credits?: boolean | CustomerCountOutputTypeCountCreditsArgs
    movements?: boolean | CustomerCountOutputTypeCountMovementsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountCreditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerCreditWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    transactions: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | SupplierCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierTransactionWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    batches: number
    movements: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batches?: boolean | ProductCountOutputTypeCountBatchesArgs
    movements?: boolean | ProductCountOutputTypeCountMovementsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementItemWhereInput
  }


  /**
   * Count Type BatchCountOutputType
   */

  export type BatchCountOutputType = {
    movements: number
  }

  export type BatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movements?: boolean | BatchCountOutputTypeCountMovementsArgs
  }

  // Custom InputTypes
  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchCountOutputType
     */
    select?: BatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeCountMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementItemWhereInput
  }


  /**
   * Count Type MovementCountOutputType
   */

  export type MovementCountOutputType = {
    items: number
  }

  export type MovementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | MovementCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * MovementCountOutputType without action
   */
  export type MovementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementCountOutputType
     */
    select?: MovementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovementCountOutputType without action
   */
  export type MovementCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fistName: string | null
    lastName: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    role: $Enums.AccountRole | null
    passwordHash: string | null
    createdLocally: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fistName: string | null
    lastName: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    role: $Enums.AccountRole | null
    passwordHash: string | null
    createdLocally: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fistName: number
    lastName: number
    email: number
    createdAt: number
    updatedAt: number
    username: number
    role: number
    passwordHash: number
    createdLocally: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fistName?: true
    lastName?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    role?: true
    passwordHash?: true
    createdLocally?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fistName?: true
    lastName?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    role?: true
    passwordHash?: true
    createdLocally?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fistName?: true
    lastName?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    role?: true
    passwordHash?: true
    createdLocally?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fistName: string
    lastName: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    username: string
    role: $Enums.AccountRole
    passwordHash: string
    createdLocally: boolean
    _count: UserCountAggregateOutputType | null
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
    fistName?: boolean
    lastName?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    role?: boolean
    passwordHash?: boolean
    createdLocally?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fistName?: boolean
    lastName?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    role?: boolean
    passwordHash?: boolean
    createdLocally?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fistName?: boolean
    lastName?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    role?: boolean
    passwordHash?: boolean
    createdLocally?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fistName?: boolean
    lastName?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    role?: boolean
    passwordHash?: boolean
    createdLocally?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fistName" | "lastName" | "email" | "createdAt" | "updatedAt" | "username" | "role" | "passwordHash" | "createdLocally", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fistName: string
      lastName: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
      username: string
      role: $Enums.AccountRole
      passwordHash: string
      createdLocally: boolean
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
    readonly id: FieldRef<"User", 'String'>
    readonly fistName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly username: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'AccountRole'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdLocally: FieldRef<"User", 'Boolean'>
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
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    contactName: string | null
    tinNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    contactName: string | null
    tinNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    address: number
    contactName: number
    tinNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    contactName?: true
    tinNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    contactName?: true
    tinNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    contactName?: true
    tinNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    address: string | null
    contactName: string | null
    tinNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    contactName?: boolean
    tinNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credits?: boolean | Customer$creditsArgs<ExtArgs>
    movements?: boolean | Customer$movementsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    contactName?: boolean
    tinNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    contactName?: boolean
    tinNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    contactName?: boolean
    tinNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "address" | "contactName" | "tinNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credits?: boolean | Customer$creditsArgs<ExtArgs>
    movements?: boolean | Customer$movementsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      credits: Prisma.$CustomerCreditPayload<ExtArgs>[]
      movements: Prisma.$MovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      address: string | null
      contactName: string | null
      tinNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    credits<T extends Customer$creditsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$creditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerCreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movements<T extends Customer$movementsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly contactName: FieldRef<"Customer", 'String'>
    readonly tinNumber: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.credits
   */
  export type Customer$creditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCredit
     */
    select?: CustomerCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCredit
     */
    omit?: CustomerCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCreditInclude<ExtArgs> | null
    where?: CustomerCreditWhereInput
    orderBy?: CustomerCreditOrderByWithRelationInput | CustomerCreditOrderByWithRelationInput[]
    cursor?: CustomerCreditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerCreditScalarFieldEnum | CustomerCreditScalarFieldEnum[]
  }

  /**
   * Customer.movements
   */
  export type Customer$movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    where?: MovementWhereInput
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    cursor?: MovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    balance: number | null
  }

  export type SupplierSumAggregateOutputType = {
    balance: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    contactName: string | null
    tinNumber: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    contactName: string | null
    tinNumber: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    address: number
    contactName: number
    tinNumber: number
    balance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    balance?: true
  }

  export type SupplierSumAggregateInputType = {
    balance?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    contactName?: true
    tinNumber?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    contactName?: true
    tinNumber?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    contactName?: true
    tinNumber?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    email: string | null
    address: string | null
    contactName: string | null
    tinNumber: string | null
    balance: number
    createdAt: Date
    updatedAt: Date
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    contactName?: boolean
    tinNumber?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | Supplier$transactionsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    contactName?: boolean
    tinNumber?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    contactName?: boolean
    tinNumber?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    contactName?: boolean
    tinNumber?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "address" | "contactName" | "tinNumber" | "balance" | "createdAt" | "updatedAt", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Supplier$transactionsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      transactions: Prisma.$SupplierTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      email: string | null
      address: string | null
      contactName: string | null
      tinNumber: string | null
      balance: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends Supplier$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
    readonly contactName: FieldRef<"Supplier", 'String'>
    readonly tinNumber: FieldRef<"Supplier", 'String'>
    readonly balance: FieldRef<"Supplier", 'Float'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.transactions
   */
  export type Supplier$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierTransaction
     */
    select?: SupplierTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierTransaction
     */
    omit?: SupplierTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierTransactionInclude<ExtArgs> | null
    where?: SupplierTransactionWhereInput
    orderBy?: SupplierTransactionOrderByWithRelationInput | SupplierTransactionOrderByWithRelationInput[]
    cursor?: SupplierTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierTransactionScalarFieldEnum | SupplierTransactionScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model SupplierTransaction
   */

  export type AggregateSupplierTransaction = {
    _count: SupplierTransactionCountAggregateOutputType | null
    _avg: SupplierTransactionAvgAggregateOutputType | null
    _sum: SupplierTransactionSumAggregateOutputType | null
    _min: SupplierTransactionMinAggregateOutputType | null
    _max: SupplierTransactionMaxAggregateOutputType | null
  }

  export type SupplierTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type SupplierTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type SupplierTransactionMinAggregateOutputType = {
    id: string | null
    supplierId: string | null
    type: $Enums.SupplierTransactionType | null
    amount: number | null
    reference: string | null
    note: string | null
    createdAt: Date | null
  }

  export type SupplierTransactionMaxAggregateOutputType = {
    id: string | null
    supplierId: string | null
    type: $Enums.SupplierTransactionType | null
    amount: number | null
    reference: string | null
    note: string | null
    createdAt: Date | null
  }

  export type SupplierTransactionCountAggregateOutputType = {
    id: number
    supplierId: number
    type: number
    amount: number
    reference: number
    note: number
    createdAt: number
    _all: number
  }


  export type SupplierTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type SupplierTransactionSumAggregateInputType = {
    amount?: true
  }

  export type SupplierTransactionMinAggregateInputType = {
    id?: true
    supplierId?: true
    type?: true
    amount?: true
    reference?: true
    note?: true
    createdAt?: true
  }

  export type SupplierTransactionMaxAggregateInputType = {
    id?: true
    supplierId?: true
    type?: true
    amount?: true
    reference?: true
    note?: true
    createdAt?: true
  }

  export type SupplierTransactionCountAggregateInputType = {
    id?: true
    supplierId?: true
    type?: true
    amount?: true
    reference?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type SupplierTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierTransaction to aggregate.
     */
    where?: SupplierTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierTransactions to fetch.
     */
    orderBy?: SupplierTransactionOrderByWithRelationInput | SupplierTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierTransactions
    **/
    _count?: true | SupplierTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierTransactionMaxAggregateInputType
  }

  export type GetSupplierTransactionAggregateType<T extends SupplierTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierTransaction[P]>
      : GetScalarType<T[P], AggregateSupplierTransaction[P]>
  }




  export type SupplierTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierTransactionWhereInput
    orderBy?: SupplierTransactionOrderByWithAggregationInput | SupplierTransactionOrderByWithAggregationInput[]
    by: SupplierTransactionScalarFieldEnum[] | SupplierTransactionScalarFieldEnum
    having?: SupplierTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierTransactionCountAggregateInputType | true
    _avg?: SupplierTransactionAvgAggregateInputType
    _sum?: SupplierTransactionSumAggregateInputType
    _min?: SupplierTransactionMinAggregateInputType
    _max?: SupplierTransactionMaxAggregateInputType
  }

  export type SupplierTransactionGroupByOutputType = {
    id: string
    supplierId: string
    type: $Enums.SupplierTransactionType
    amount: number
    reference: string | null
    note: string | null
    createdAt: Date
    _count: SupplierTransactionCountAggregateOutputType | null
    _avg: SupplierTransactionAvgAggregateOutputType | null
    _sum: SupplierTransactionSumAggregateOutputType | null
    _min: SupplierTransactionMinAggregateOutputType | null
    _max: SupplierTransactionMaxAggregateOutputType | null
  }

  type GetSupplierTransactionGroupByPayload<T extends SupplierTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierTransactionGroupByOutputType[P]>
        }
      >
    >


  export type SupplierTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    type?: boolean
    amount?: boolean
    reference?: boolean
    note?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierTransaction"]>

  export type SupplierTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    type?: boolean
    amount?: boolean
    reference?: boolean
    note?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierTransaction"]>

  export type SupplierTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    type?: boolean
    amount?: boolean
    reference?: boolean
    note?: boolean
    createdAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierTransaction"]>

  export type SupplierTransactionSelectScalar = {
    id?: boolean
    supplierId?: boolean
    type?: boolean
    amount?: boolean
    reference?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type SupplierTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplierId" | "type" | "amount" | "reference" | "note" | "createdAt", ExtArgs["result"]["supplierTransaction"]>
  export type SupplierTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type SupplierTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type SupplierTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $SupplierTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierTransaction"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplierId: string
      type: $Enums.SupplierTransactionType
      amount: number
      reference: string | null
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["supplierTransaction"]>
    composites: {}
  }

  type SupplierTransactionGetPayload<S extends boolean | null | undefined | SupplierTransactionDefaultArgs> = $Result.GetResult<Prisma.$SupplierTransactionPayload, S>

  type SupplierTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierTransactionCountAggregateInputType | true
    }

  export interface SupplierTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierTransaction'], meta: { name: 'SupplierTransaction' } }
    /**
     * Find zero or one SupplierTransaction that matches the filter.
     * @param {SupplierTransactionFindUniqueArgs} args - Arguments to find a SupplierTransaction
     * @example
     * // Get one SupplierTransaction
     * const supplierTransaction = await prisma.supplierTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierTransactionFindUniqueArgs>(args: SelectSubset<T, SupplierTransactionFindUniqueArgs<ExtArgs>>): Prisma__SupplierTransactionClient<$Result.GetResult<Prisma.$SupplierTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupplierTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierTransactionFindUniqueOrThrowArgs} args - Arguments to find a SupplierTransaction
     * @example
     * // Get one SupplierTransaction
     * const supplierTransaction = await prisma.supplierTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierTransactionClient<$Result.GetResult<Prisma.$SupplierTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupplierTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTransactionFindFirstArgs} args - Arguments to find a SupplierTransaction
     * @example
     * // Get one SupplierTransaction
     * const supplierTransaction = await prisma.supplierTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierTransactionFindFirstArgs>(args?: SelectSubset<T, SupplierTransactionFindFirstArgs<ExtArgs>>): Prisma__SupplierTransactionClient<$Result.GetResult<Prisma.$SupplierTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupplierTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTransactionFindFirstOrThrowArgs} args - Arguments to find a SupplierTransaction
     * @example
     * // Get one SupplierTransaction
     * const supplierTransaction = await prisma.supplierTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierTransactionClient<$Result.GetResult<Prisma.$SupplierTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupplierTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierTransactions
     * const supplierTransactions = await prisma.supplierTransaction.findMany()
     * 
     * // Get first 10 SupplierTransactions
     * const supplierTransactions = await prisma.supplierTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierTransactionWithIdOnly = await prisma.supplierTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierTransactionFindManyArgs>(args?: SelectSubset<T, SupplierTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupplierTransaction.
     * @param {SupplierTransactionCreateArgs} args - Arguments to create a SupplierTransaction.
     * @example
     * // Create one SupplierTransaction
     * const SupplierTransaction = await prisma.supplierTransaction.create({
     *   data: {
     *     // ... data to create a SupplierTransaction
     *   }
     * })
     * 
     */
    create<T extends SupplierTransactionCreateArgs>(args: SelectSubset<T, SupplierTransactionCreateArgs<ExtArgs>>): Prisma__SupplierTransactionClient<$Result.GetResult<Prisma.$SupplierTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupplierTransactions.
     * @param {SupplierTransactionCreateManyArgs} args - Arguments to create many SupplierTransactions.
     * @example
     * // Create many SupplierTransactions
     * const supplierTransaction = await prisma.supplierTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierTransactionCreateManyArgs>(args?: SelectSubset<T, SupplierTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierTransactions and returns the data saved in the database.
     * @param {SupplierTransactionCreateManyAndReturnArgs} args - Arguments to create many SupplierTransactions.
     * @example
     * // Create many SupplierTransactions
     * const supplierTransaction = await prisma.supplierTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierTransactions and only return the `id`
     * const supplierTransactionWithIdOnly = await prisma.supplierTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupplierTransaction.
     * @param {SupplierTransactionDeleteArgs} args - Arguments to delete one SupplierTransaction.
     * @example
     * // Delete one SupplierTransaction
     * const SupplierTransaction = await prisma.supplierTransaction.delete({
     *   where: {
     *     // ... filter to delete one SupplierTransaction
     *   }
     * })
     * 
     */
    delete<T extends SupplierTransactionDeleteArgs>(args: SelectSubset<T, SupplierTransactionDeleteArgs<ExtArgs>>): Prisma__SupplierTransactionClient<$Result.GetResult<Prisma.$SupplierTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupplierTransaction.
     * @param {SupplierTransactionUpdateArgs} args - Arguments to update one SupplierTransaction.
     * @example
     * // Update one SupplierTransaction
     * const supplierTransaction = await prisma.supplierTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierTransactionUpdateArgs>(args: SelectSubset<T, SupplierTransactionUpdateArgs<ExtArgs>>): Prisma__SupplierTransactionClient<$Result.GetResult<Prisma.$SupplierTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupplierTransactions.
     * @param {SupplierTransactionDeleteManyArgs} args - Arguments to filter SupplierTransactions to delete.
     * @example
     * // Delete a few SupplierTransactions
     * const { count } = await prisma.supplierTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierTransactionDeleteManyArgs>(args?: SelectSubset<T, SupplierTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierTransactions
     * const supplierTransaction = await prisma.supplierTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierTransactionUpdateManyArgs>(args: SelectSubset<T, SupplierTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierTransactions and returns the data updated in the database.
     * @param {SupplierTransactionUpdateManyAndReturnArgs} args - Arguments to update many SupplierTransactions.
     * @example
     * // Update many SupplierTransactions
     * const supplierTransaction = await prisma.supplierTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupplierTransactions and only return the `id`
     * const supplierTransactionWithIdOnly = await prisma.supplierTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupplierTransaction.
     * @param {SupplierTransactionUpsertArgs} args - Arguments to update or create a SupplierTransaction.
     * @example
     * // Update or create a SupplierTransaction
     * const supplierTransaction = await prisma.supplierTransaction.upsert({
     *   create: {
     *     // ... data to create a SupplierTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierTransaction we want to update
     *   }
     * })
     */
    upsert<T extends SupplierTransactionUpsertArgs>(args: SelectSubset<T, SupplierTransactionUpsertArgs<ExtArgs>>): Prisma__SupplierTransactionClient<$Result.GetResult<Prisma.$SupplierTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupplierTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTransactionCountArgs} args - Arguments to filter SupplierTransactions to count.
     * @example
     * // Count the number of SupplierTransactions
     * const count = await prisma.supplierTransaction.count({
     *   where: {
     *     // ... the filter for the SupplierTransactions we want to count
     *   }
     * })
    **/
    count<T extends SupplierTransactionCountArgs>(
      args?: Subset<T, SupplierTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierTransactionAggregateArgs>(args: Subset<T, SupplierTransactionAggregateArgs>): Prisma.PrismaPromise<GetSupplierTransactionAggregateType<T>>

    /**
     * Group by SupplierTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTransactionGroupByArgs} args - Group by arguments.
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
      T extends SupplierTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierTransactionGroupByArgs['orderBy'] }
        : { orderBy?: SupplierTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierTransaction model
   */
  readonly fields: SupplierTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SupplierTransaction model
   */
  interface SupplierTransactionFieldRefs {
    readonly id: FieldRef<"SupplierTransaction", 'String'>
    readonly supplierId: FieldRef<"SupplierTransaction", 'String'>
    readonly type: FieldRef<"SupplierTransaction", 'SupplierTransactionType'>
    readonly amount: FieldRef<"SupplierTransaction", 'Float'>
    readonly reference: FieldRef<"SupplierTransaction", 'String'>
    readonly note: FieldRef<"SupplierTransaction", 'String'>
    readonly createdAt: FieldRef<"SupplierTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierTransaction findUnique
   */
  export type SupplierTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierTransaction
     */
    select?: SupplierTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierTransaction
     */
    omit?: SupplierTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SupplierTransaction to fetch.
     */
    where: SupplierTransactionWhereUniqueInput
  }

  /**
   * SupplierTransaction findUniqueOrThrow
   */
  export type SupplierTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierTransaction
     */
    select?: SupplierTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierTransaction
     */
    omit?: SupplierTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SupplierTransaction to fetch.
     */
    where: SupplierTransactionWhereUniqueInput
  }

  /**
   * SupplierTransaction findFirst
   */
  export type SupplierTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierTransaction
     */
    select?: SupplierTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierTransaction
     */
    omit?: SupplierTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SupplierTransaction to fetch.
     */
    where?: SupplierTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierTransactions to fetch.
     */
    orderBy?: SupplierTransactionOrderByWithRelationInput | SupplierTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierTransactions.
     */
    cursor?: SupplierTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierTransactions.
     */
    distinct?: SupplierTransactionScalarFieldEnum | SupplierTransactionScalarFieldEnum[]
  }

  /**
   * SupplierTransaction findFirstOrThrow
   */
  export type SupplierTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierTransaction
     */
    select?: SupplierTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierTransaction
     */
    omit?: SupplierTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SupplierTransaction to fetch.
     */
    where?: SupplierTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierTransactions to fetch.
     */
    orderBy?: SupplierTransactionOrderByWithRelationInput | SupplierTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierTransactions.
     */
    cursor?: SupplierTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierTransactions.
     */
    distinct?: SupplierTransactionScalarFieldEnum | SupplierTransactionScalarFieldEnum[]
  }

  /**
   * SupplierTransaction findMany
   */
  export type SupplierTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierTransaction
     */
    select?: SupplierTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierTransaction
     */
    omit?: SupplierTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierTransactionInclude<ExtArgs> | null
    /**
     * Filter, which SupplierTransactions to fetch.
     */
    where?: SupplierTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierTransactions to fetch.
     */
    orderBy?: SupplierTransactionOrderByWithRelationInput | SupplierTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierTransactions.
     */
    cursor?: SupplierTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierTransactions.
     */
    skip?: number
    distinct?: SupplierTransactionScalarFieldEnum | SupplierTransactionScalarFieldEnum[]
  }

  /**
   * SupplierTransaction create
   */
  export type SupplierTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierTransaction
     */
    select?: SupplierTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierTransaction
     */
    omit?: SupplierTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierTransaction.
     */
    data: XOR<SupplierTransactionCreateInput, SupplierTransactionUncheckedCreateInput>
  }

  /**
   * SupplierTransaction createMany
   */
  export type SupplierTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierTransactions.
     */
    data: SupplierTransactionCreateManyInput | SupplierTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierTransaction createManyAndReturn
   */
  export type SupplierTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierTransaction
     */
    select?: SupplierTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierTransaction
     */
    omit?: SupplierTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many SupplierTransactions.
     */
    data: SupplierTransactionCreateManyInput | SupplierTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierTransaction update
   */
  export type SupplierTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierTransaction
     */
    select?: SupplierTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierTransaction
     */
    omit?: SupplierTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierTransaction.
     */
    data: XOR<SupplierTransactionUpdateInput, SupplierTransactionUncheckedUpdateInput>
    /**
     * Choose, which SupplierTransaction to update.
     */
    where: SupplierTransactionWhereUniqueInput
  }

  /**
   * SupplierTransaction updateMany
   */
  export type SupplierTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierTransactions.
     */
    data: XOR<SupplierTransactionUpdateManyMutationInput, SupplierTransactionUncheckedUpdateManyInput>
    /**
     * Filter which SupplierTransactions to update
     */
    where?: SupplierTransactionWhereInput
    /**
     * Limit how many SupplierTransactions to update.
     */
    limit?: number
  }

  /**
   * SupplierTransaction updateManyAndReturn
   */
  export type SupplierTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierTransaction
     */
    select?: SupplierTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierTransaction
     */
    omit?: SupplierTransactionOmit<ExtArgs> | null
    /**
     * The data used to update SupplierTransactions.
     */
    data: XOR<SupplierTransactionUpdateManyMutationInput, SupplierTransactionUncheckedUpdateManyInput>
    /**
     * Filter which SupplierTransactions to update
     */
    where?: SupplierTransactionWhereInput
    /**
     * Limit how many SupplierTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierTransaction upsert
   */
  export type SupplierTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierTransaction
     */
    select?: SupplierTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierTransaction
     */
    omit?: SupplierTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierTransaction to update in case it exists.
     */
    where: SupplierTransactionWhereUniqueInput
    /**
     * In case the SupplierTransaction found by the `where` argument doesn't exist, create a new SupplierTransaction with this data.
     */
    create: XOR<SupplierTransactionCreateInput, SupplierTransactionUncheckedCreateInput>
    /**
     * In case the SupplierTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierTransactionUpdateInput, SupplierTransactionUncheckedUpdateInput>
  }

  /**
   * SupplierTransaction delete
   */
  export type SupplierTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierTransaction
     */
    select?: SupplierTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierTransaction
     */
    omit?: SupplierTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierTransactionInclude<ExtArgs> | null
    /**
     * Filter which SupplierTransaction to delete.
     */
    where: SupplierTransactionWhereUniqueInput
  }

  /**
   * SupplierTransaction deleteMany
   */
  export type SupplierTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierTransactions to delete
     */
    where?: SupplierTransactionWhereInput
    /**
     * Limit how many SupplierTransactions to delete.
     */
    limit?: number
  }

  /**
   * SupplierTransaction without action
   */
  export type SupplierTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierTransaction
     */
    select?: SupplierTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierTransaction
     */
    omit?: SupplierTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    sellingPrice: number | null
    stock: number | null
    lowStockAlert: number | null
  }

  export type ProductSumAggregateOutputType = {
    sellingPrice: number | null
    stock: number | null
    lowStockAlert: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    sku: string | null
    barcode: string | null
    category: string | null
    unit: $Enums.Unit | null
    sellingPrice: number | null
    description: string | null
    stock: number | null
    lowStockAlert: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sku: string | null
    barcode: string | null
    category: string | null
    unit: $Enums.Unit | null
    sellingPrice: number | null
    description: string | null
    stock: number | null
    lowStockAlert: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    sku: number
    barcode: number
    category: number
    unit: number
    sellingPrice: number
    description: number
    stock: number
    lowStockAlert: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    sellingPrice?: true
    stock?: true
    lowStockAlert?: true
  }

  export type ProductSumAggregateInputType = {
    sellingPrice?: true
    stock?: true
    lowStockAlert?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    barcode?: true
    category?: true
    unit?: true
    sellingPrice?: true
    description?: true
    stock?: true
    lowStockAlert?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    barcode?: true
    category?: true
    unit?: true
    sellingPrice?: true
    description?: true
    stock?: true
    lowStockAlert?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    barcode?: true
    category?: true
    unit?: true
    sellingPrice?: true
    description?: true
    stock?: true
    lowStockAlert?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    sku: string | null
    barcode: string | null
    category: string | null
    unit: $Enums.Unit | null
    sellingPrice: number
    description: string | null
    stock: number
    lowStockAlert: number | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    category?: boolean
    unit?: boolean
    sellingPrice?: boolean
    description?: boolean
    stock?: boolean
    lowStockAlert?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batches?: boolean | Product$batchesArgs<ExtArgs>
    movements?: boolean | Product$movementsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    category?: boolean
    unit?: boolean
    sellingPrice?: boolean
    description?: boolean
    stock?: boolean
    lowStockAlert?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    category?: boolean
    unit?: boolean
    sellingPrice?: boolean
    description?: boolean
    stock?: boolean
    lowStockAlert?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    sku?: boolean
    barcode?: boolean
    category?: boolean
    unit?: boolean
    sellingPrice?: boolean
    description?: boolean
    stock?: boolean
    lowStockAlert?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sku" | "barcode" | "category" | "unit" | "sellingPrice" | "description" | "stock" | "lowStockAlert" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batches?: boolean | Product$batchesArgs<ExtArgs>
    movements?: boolean | Product$movementsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      batches: Prisma.$BatchPayload<ExtArgs>[]
      movements: Prisma.$MovementItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sku: string | null
      barcode: string | null
      category: string | null
      unit: $Enums.Unit | null
      sellingPrice: number
      description: string | null
      stock: number
      lowStockAlert: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    batches<T extends Product$batchesArgs<ExtArgs> = {}>(args?: Subset<T, Product$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movements<T extends Product$movementsArgs<ExtArgs> = {}>(args?: Subset<T, Product$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly barcode: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly unit: FieldRef<"Product", 'Unit'>
    readonly sellingPrice: FieldRef<"Product", 'Float'>
    readonly description: FieldRef<"Product", 'String'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly lowStockAlert: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.batches
   */
  export type Product$batchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    cursor?: BatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Product.movements
   */
  export type Product$movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    where?: MovementItemWhereInput
    orderBy?: MovementItemOrderByWithRelationInput | MovementItemOrderByWithRelationInput[]
    cursor?: MovementItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovementItemScalarFieldEnum | MovementItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Batch
   */

  export type AggregateBatch = {
    _count: BatchCountAggregateOutputType | null
    _avg: BatchAvgAggregateOutputType | null
    _sum: BatchSumAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  export type BatchAvgAggregateOutputType = {
    quantity: number | null
    remainingQty: number | null
    costPrice: number | null
    sellingPrice: number | null
  }

  export type BatchSumAggregateOutputType = {
    quantity: number | null
    remainingQty: number | null
    costPrice: number | null
    sellingPrice: number | null
  }

  export type BatchMinAggregateOutputType = {
    id: string | null
    productId: string | null
    supplierId: string | null
    batchNumber: string | null
    invoiceNumber: string | null
    quantity: number | null
    remainingQty: number | null
    costPrice: number | null
    sellingPrice: number | null
    manufactureDate: Date | null
    expiryDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BatchMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    supplierId: string | null
    batchNumber: string | null
    invoiceNumber: string | null
    quantity: number | null
    remainingQty: number | null
    costPrice: number | null
    sellingPrice: number | null
    manufactureDate: Date | null
    expiryDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BatchCountAggregateOutputType = {
    id: number
    productId: number
    supplierId: number
    batchNumber: number
    invoiceNumber: number
    quantity: number
    remainingQty: number
    costPrice: number
    sellingPrice: number
    manufactureDate: number
    expiryDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BatchAvgAggregateInputType = {
    quantity?: true
    remainingQty?: true
    costPrice?: true
    sellingPrice?: true
  }

  export type BatchSumAggregateInputType = {
    quantity?: true
    remainingQty?: true
    costPrice?: true
    sellingPrice?: true
  }

  export type BatchMinAggregateInputType = {
    id?: true
    productId?: true
    supplierId?: true
    batchNumber?: true
    invoiceNumber?: true
    quantity?: true
    remainingQty?: true
    costPrice?: true
    sellingPrice?: true
    manufactureDate?: true
    expiryDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BatchMaxAggregateInputType = {
    id?: true
    productId?: true
    supplierId?: true
    batchNumber?: true
    invoiceNumber?: true
    quantity?: true
    remainingQty?: true
    costPrice?: true
    sellingPrice?: true
    manufactureDate?: true
    expiryDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BatchCountAggregateInputType = {
    id?: true
    productId?: true
    supplierId?: true
    batchNumber?: true
    invoiceNumber?: true
    quantity?: true
    remainingQty?: true
    costPrice?: true
    sellingPrice?: true
    manufactureDate?: true
    expiryDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batch to aggregate.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Batches
    **/
    _count?: true | BatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchMaxAggregateInputType
  }

  export type GetBatchAggregateType<T extends BatchAggregateArgs> = {
        [P in keyof T & keyof AggregateBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatch[P]>
      : GetScalarType<T[P], AggregateBatch[P]>
  }




  export type BatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithAggregationInput | BatchOrderByWithAggregationInput[]
    by: BatchScalarFieldEnum[] | BatchScalarFieldEnum
    having?: BatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchCountAggregateInputType | true
    _avg?: BatchAvgAggregateInputType
    _sum?: BatchSumAggregateInputType
    _min?: BatchMinAggregateInputType
    _max?: BatchMaxAggregateInputType
  }

  export type BatchGroupByOutputType = {
    id: string
    productId: string
    supplierId: string | null
    batchNumber: string | null
    invoiceNumber: string | null
    quantity: number
    remainingQty: number
    costPrice: number
    sellingPrice: number
    manufactureDate: Date
    expiryDate: Date
    createdAt: Date
    updatedAt: Date
    _count: BatchCountAggregateOutputType | null
    _avg: BatchAvgAggregateOutputType | null
    _sum: BatchSumAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  type GetBatchGroupByPayload<T extends BatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchGroupByOutputType[P]>
            : GetScalarType<T[P], BatchGroupByOutputType[P]>
        }
      >
    >


  export type BatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    supplierId?: boolean
    batchNumber?: boolean
    invoiceNumber?: boolean
    quantity?: boolean
    remainingQty?: boolean
    costPrice?: boolean
    sellingPrice?: boolean
    manufactureDate?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    movements?: boolean | Batch$movementsArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    supplierId?: boolean
    batchNumber?: boolean
    invoiceNumber?: boolean
    quantity?: boolean
    remainingQty?: boolean
    costPrice?: boolean
    sellingPrice?: boolean
    manufactureDate?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    supplierId?: boolean
    batchNumber?: boolean
    invoiceNumber?: boolean
    quantity?: boolean
    remainingQty?: boolean
    costPrice?: boolean
    sellingPrice?: boolean
    manufactureDate?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectScalar = {
    id?: boolean
    productId?: boolean
    supplierId?: boolean
    batchNumber?: boolean
    invoiceNumber?: boolean
    quantity?: boolean
    remainingQty?: boolean
    costPrice?: boolean
    sellingPrice?: boolean
    manufactureDate?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "supplierId" | "batchNumber" | "invoiceNumber" | "quantity" | "remainingQty" | "costPrice" | "sellingPrice" | "manufactureDate" | "expiryDate" | "createdAt" | "updatedAt", ExtArgs["result"]["batch"]>
  export type BatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    movements?: boolean | Batch$movementsArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type BatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $BatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Batch"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      movements: Prisma.$MovementItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      supplierId: string | null
      batchNumber: string | null
      invoiceNumber: string | null
      quantity: number
      remainingQty: number
      costPrice: number
      sellingPrice: number
      manufactureDate: Date
      expiryDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["batch"]>
    composites: {}
  }

  type BatchGetPayload<S extends boolean | null | undefined | BatchDefaultArgs> = $Result.GetResult<Prisma.$BatchPayload, S>

  type BatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchCountAggregateInputType | true
    }

  export interface BatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Batch'], meta: { name: 'Batch' } }
    /**
     * Find zero or one Batch that matches the filter.
     * @param {BatchFindUniqueArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchFindUniqueArgs>(args: SelectSubset<T, BatchFindUniqueArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Batch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchFindUniqueOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchFindFirstArgs>(args?: SelectSubset<T, BatchFindFirstArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batches
     * const batches = await prisma.batch.findMany()
     * 
     * // Get first 10 Batches
     * const batches = await prisma.batch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchWithIdOnly = await prisma.batch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchFindManyArgs>(args?: SelectSubset<T, BatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Batch.
     * @param {BatchCreateArgs} args - Arguments to create a Batch.
     * @example
     * // Create one Batch
     * const Batch = await prisma.batch.create({
     *   data: {
     *     // ... data to create a Batch
     *   }
     * })
     * 
     */
    create<T extends BatchCreateArgs>(args: SelectSubset<T, BatchCreateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Batches.
     * @param {BatchCreateManyArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchCreateManyArgs>(args?: SelectSubset<T, BatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Batches and returns the data saved in the database.
     * @param {BatchCreateManyAndReturnArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BatchCreateManyAndReturnArgs>(args?: SelectSubset<T, BatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Batch.
     * @param {BatchDeleteArgs} args - Arguments to delete one Batch.
     * @example
     * // Delete one Batch
     * const Batch = await prisma.batch.delete({
     *   where: {
     *     // ... filter to delete one Batch
     *   }
     * })
     * 
     */
    delete<T extends BatchDeleteArgs>(args: SelectSubset<T, BatchDeleteArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Batch.
     * @param {BatchUpdateArgs} args - Arguments to update one Batch.
     * @example
     * // Update one Batch
     * const batch = await prisma.batch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchUpdateArgs>(args: SelectSubset<T, BatchUpdateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Batches.
     * @param {BatchDeleteManyArgs} args - Arguments to filter Batches to delete.
     * @example
     * // Delete a few Batches
     * const { count } = await prisma.batch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchDeleteManyArgs>(args?: SelectSubset<T, BatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchUpdateManyArgs>(args: SelectSubset<T, BatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches and returns the data updated in the database.
     * @param {BatchUpdateManyAndReturnArgs} args - Arguments to update many Batches.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.updateManyAndReturn({
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
    updateManyAndReturn<T extends BatchUpdateManyAndReturnArgs>(args: SelectSubset<T, BatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Batch.
     * @param {BatchUpsertArgs} args - Arguments to update or create a Batch.
     * @example
     * // Update or create a Batch
     * const batch = await prisma.batch.upsert({
     *   create: {
     *     // ... data to create a Batch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batch we want to update
     *   }
     * })
     */
    upsert<T extends BatchUpsertArgs>(args: SelectSubset<T, BatchUpsertArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchCountArgs} args - Arguments to filter Batches to count.
     * @example
     * // Count the number of Batches
     * const count = await prisma.batch.count({
     *   where: {
     *     // ... the filter for the Batches we want to count
     *   }
     * })
    **/
    count<T extends BatchCountArgs>(
      args?: Subset<T, BatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BatchAggregateArgs>(args: Subset<T, BatchAggregateArgs>): Prisma.PrismaPromise<GetBatchAggregateType<T>>

    /**
     * Group by Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchGroupByArgs} args - Group by arguments.
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
      T extends BatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchGroupByArgs['orderBy'] }
        : { orderBy?: BatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Batch model
   */
  readonly fields: BatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Batch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movements<T extends Batch$movementsArgs<ExtArgs> = {}>(args?: Subset<T, Batch$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Batch model
   */
  interface BatchFieldRefs {
    readonly id: FieldRef<"Batch", 'String'>
    readonly productId: FieldRef<"Batch", 'String'>
    readonly supplierId: FieldRef<"Batch", 'String'>
    readonly batchNumber: FieldRef<"Batch", 'String'>
    readonly invoiceNumber: FieldRef<"Batch", 'String'>
    readonly quantity: FieldRef<"Batch", 'Int'>
    readonly remainingQty: FieldRef<"Batch", 'Int'>
    readonly costPrice: FieldRef<"Batch", 'Float'>
    readonly sellingPrice: FieldRef<"Batch", 'Float'>
    readonly manufactureDate: FieldRef<"Batch", 'DateTime'>
    readonly expiryDate: FieldRef<"Batch", 'DateTime'>
    readonly createdAt: FieldRef<"Batch", 'DateTime'>
    readonly updatedAt: FieldRef<"Batch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Batch findUnique
   */
  export type BatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findUniqueOrThrow
   */
  export type BatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findFirst
   */
  export type BatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findFirstOrThrow
   */
  export type BatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findMany
   */
  export type BatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batches to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch create
   */
  export type BatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Batch.
     */
    data: XOR<BatchCreateInput, BatchUncheckedCreateInput>
  }

  /**
   * Batch createMany
   */
  export type BatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batch createManyAndReturn
   */
  export type BatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Batch update
   */
  export type BatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Batch.
     */
    data: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
    /**
     * Choose, which Batch to update.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch updateMany
   */
  export type BatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
  }

  /**
   * Batch updateManyAndReturn
   */
  export type BatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Batch upsert
   */
  export type BatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Batch to update in case it exists.
     */
    where: BatchWhereUniqueInput
    /**
     * In case the Batch found by the `where` argument doesn't exist, create a new Batch with this data.
     */
    create: XOR<BatchCreateInput, BatchUncheckedCreateInput>
    /**
     * In case the Batch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
  }

  /**
   * Batch delete
   */
  export type BatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter which Batch to delete.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch deleteMany
   */
  export type BatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batches to delete
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to delete.
     */
    limit?: number
  }

  /**
   * Batch.movements
   */
  export type Batch$movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    where?: MovementItemWhereInput
    orderBy?: MovementItemOrderByWithRelationInput | MovementItemOrderByWithRelationInput[]
    cursor?: MovementItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovementItemScalarFieldEnum | MovementItemScalarFieldEnum[]
  }

  /**
   * Batch without action
   */
  export type BatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
  }


  /**
   * Model CustomerCredit
   */

  export type AggregateCustomerCredit = {
    _count: CustomerCreditCountAggregateOutputType | null
    _avg: CustomerCreditAvgAggregateOutputType | null
    _sum: CustomerCreditSumAggregateOutputType | null
    _min: CustomerCreditMinAggregateOutputType | null
    _max: CustomerCreditMaxAggregateOutputType | null
  }

  export type CustomerCreditAvgAggregateOutputType = {
    amount: number | null
    paidAmount: number | null
  }

  export type CustomerCreditSumAggregateOutputType = {
    amount: number | null
    paidAmount: number | null
  }

  export type CustomerCreditMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    amount: number | null
    paidAmount: number | null
    isPaid: boolean | null
    reference: string | null
    note: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCreditMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    amount: number | null
    paidAmount: number | null
    isPaid: boolean | null
    reference: string | null
    note: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCreditCountAggregateOutputType = {
    id: number
    customerId: number
    amount: number
    paidAmount: number
    isPaid: number
    reference: number
    note: number
    dueDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerCreditAvgAggregateInputType = {
    amount?: true
    paidAmount?: true
  }

  export type CustomerCreditSumAggregateInputType = {
    amount?: true
    paidAmount?: true
  }

  export type CustomerCreditMinAggregateInputType = {
    id?: true
    customerId?: true
    amount?: true
    paidAmount?: true
    isPaid?: true
    reference?: true
    note?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCreditMaxAggregateInputType = {
    id?: true
    customerId?: true
    amount?: true
    paidAmount?: true
    isPaid?: true
    reference?: true
    note?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCreditCountAggregateInputType = {
    id?: true
    customerId?: true
    amount?: true
    paidAmount?: true
    isPaid?: true
    reference?: true
    note?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerCreditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerCredit to aggregate.
     */
    where?: CustomerCreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCredits to fetch.
     */
    orderBy?: CustomerCreditOrderByWithRelationInput | CustomerCreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerCreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCredits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCredits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerCredits
    **/
    _count?: true | CustomerCreditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerCreditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerCreditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerCreditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerCreditMaxAggregateInputType
  }

  export type GetCustomerCreditAggregateType<T extends CustomerCreditAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerCredit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerCredit[P]>
      : GetScalarType<T[P], AggregateCustomerCredit[P]>
  }




  export type CustomerCreditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerCreditWhereInput
    orderBy?: CustomerCreditOrderByWithAggregationInput | CustomerCreditOrderByWithAggregationInput[]
    by: CustomerCreditScalarFieldEnum[] | CustomerCreditScalarFieldEnum
    having?: CustomerCreditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCreditCountAggregateInputType | true
    _avg?: CustomerCreditAvgAggregateInputType
    _sum?: CustomerCreditSumAggregateInputType
    _min?: CustomerCreditMinAggregateInputType
    _max?: CustomerCreditMaxAggregateInputType
  }

  export type CustomerCreditGroupByOutputType = {
    id: string
    customerId: string
    amount: number
    paidAmount: number
    isPaid: boolean
    reference: string | null
    note: string | null
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCreditCountAggregateOutputType | null
    _avg: CustomerCreditAvgAggregateOutputType | null
    _sum: CustomerCreditSumAggregateOutputType | null
    _min: CustomerCreditMinAggregateOutputType | null
    _max: CustomerCreditMaxAggregateOutputType | null
  }

  type GetCustomerCreditGroupByPayload<T extends CustomerCreditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerCreditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerCreditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerCreditGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerCreditGroupByOutputType[P]>
        }
      >
    >


  export type CustomerCreditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    amount?: boolean
    paidAmount?: boolean
    isPaid?: boolean
    reference?: boolean
    note?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerCredit"]>

  export type CustomerCreditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    amount?: boolean
    paidAmount?: boolean
    isPaid?: boolean
    reference?: boolean
    note?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerCredit"]>

  export type CustomerCreditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    amount?: boolean
    paidAmount?: boolean
    isPaid?: boolean
    reference?: boolean
    note?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerCredit"]>

  export type CustomerCreditSelectScalar = {
    id?: boolean
    customerId?: boolean
    amount?: boolean
    paidAmount?: boolean
    isPaid?: boolean
    reference?: boolean
    note?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerCreditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "amount" | "paidAmount" | "isPaid" | "reference" | "note" | "dueDate" | "createdAt" | "updatedAt", ExtArgs["result"]["customerCredit"]>
  export type CustomerCreditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomerCreditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomerCreditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $CustomerCreditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerCredit"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      amount: number
      paidAmount: number
      isPaid: boolean
      reference: string | null
      note: string | null
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customerCredit"]>
    composites: {}
  }

  type CustomerCreditGetPayload<S extends boolean | null | undefined | CustomerCreditDefaultArgs> = $Result.GetResult<Prisma.$CustomerCreditPayload, S>

  type CustomerCreditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerCreditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCreditCountAggregateInputType | true
    }

  export interface CustomerCreditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerCredit'], meta: { name: 'CustomerCredit' } }
    /**
     * Find zero or one CustomerCredit that matches the filter.
     * @param {CustomerCreditFindUniqueArgs} args - Arguments to find a CustomerCredit
     * @example
     * // Get one CustomerCredit
     * const customerCredit = await prisma.customerCredit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerCreditFindUniqueArgs>(args: SelectSubset<T, CustomerCreditFindUniqueArgs<ExtArgs>>): Prisma__CustomerCreditClient<$Result.GetResult<Prisma.$CustomerCreditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerCredit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerCreditFindUniqueOrThrowArgs} args - Arguments to find a CustomerCredit
     * @example
     * // Get one CustomerCredit
     * const customerCredit = await prisma.customerCredit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerCreditFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerCreditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerCreditClient<$Result.GetResult<Prisma.$CustomerCreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerCredit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCreditFindFirstArgs} args - Arguments to find a CustomerCredit
     * @example
     * // Get one CustomerCredit
     * const customerCredit = await prisma.customerCredit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerCreditFindFirstArgs>(args?: SelectSubset<T, CustomerCreditFindFirstArgs<ExtArgs>>): Prisma__CustomerCreditClient<$Result.GetResult<Prisma.$CustomerCreditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerCredit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCreditFindFirstOrThrowArgs} args - Arguments to find a CustomerCredit
     * @example
     * // Get one CustomerCredit
     * const customerCredit = await prisma.customerCredit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerCreditFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerCreditFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerCreditClient<$Result.GetResult<Prisma.$CustomerCreditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerCredits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCreditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerCredits
     * const customerCredits = await prisma.customerCredit.findMany()
     * 
     * // Get first 10 CustomerCredits
     * const customerCredits = await prisma.customerCredit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerCreditWithIdOnly = await prisma.customerCredit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerCreditFindManyArgs>(args?: SelectSubset<T, CustomerCreditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerCreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerCredit.
     * @param {CustomerCreditCreateArgs} args - Arguments to create a CustomerCredit.
     * @example
     * // Create one CustomerCredit
     * const CustomerCredit = await prisma.customerCredit.create({
     *   data: {
     *     // ... data to create a CustomerCredit
     *   }
     * })
     * 
     */
    create<T extends CustomerCreditCreateArgs>(args: SelectSubset<T, CustomerCreditCreateArgs<ExtArgs>>): Prisma__CustomerCreditClient<$Result.GetResult<Prisma.$CustomerCreditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerCredits.
     * @param {CustomerCreditCreateManyArgs} args - Arguments to create many CustomerCredits.
     * @example
     * // Create many CustomerCredits
     * const customerCredit = await prisma.customerCredit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreditCreateManyArgs>(args?: SelectSubset<T, CustomerCreditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerCredits and returns the data saved in the database.
     * @param {CustomerCreditCreateManyAndReturnArgs} args - Arguments to create many CustomerCredits.
     * @example
     * // Create many CustomerCredits
     * const customerCredit = await prisma.customerCredit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerCredits and only return the `id`
     * const customerCreditWithIdOnly = await prisma.customerCredit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreditCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerCreditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerCredit.
     * @param {CustomerCreditDeleteArgs} args - Arguments to delete one CustomerCredit.
     * @example
     * // Delete one CustomerCredit
     * const CustomerCredit = await prisma.customerCredit.delete({
     *   where: {
     *     // ... filter to delete one CustomerCredit
     *   }
     * })
     * 
     */
    delete<T extends CustomerCreditDeleteArgs>(args: SelectSubset<T, CustomerCreditDeleteArgs<ExtArgs>>): Prisma__CustomerCreditClient<$Result.GetResult<Prisma.$CustomerCreditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerCredit.
     * @param {CustomerCreditUpdateArgs} args - Arguments to update one CustomerCredit.
     * @example
     * // Update one CustomerCredit
     * const customerCredit = await prisma.customerCredit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerCreditUpdateArgs>(args: SelectSubset<T, CustomerCreditUpdateArgs<ExtArgs>>): Prisma__CustomerCreditClient<$Result.GetResult<Prisma.$CustomerCreditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerCredits.
     * @param {CustomerCreditDeleteManyArgs} args - Arguments to filter CustomerCredits to delete.
     * @example
     * // Delete a few CustomerCredits
     * const { count } = await prisma.customerCredit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerCreditDeleteManyArgs>(args?: SelectSubset<T, CustomerCreditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerCredits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCreditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerCredits
     * const customerCredit = await prisma.customerCredit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerCreditUpdateManyArgs>(args: SelectSubset<T, CustomerCreditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerCredits and returns the data updated in the database.
     * @param {CustomerCreditUpdateManyAndReturnArgs} args - Arguments to update many CustomerCredits.
     * @example
     * // Update many CustomerCredits
     * const customerCredit = await prisma.customerCredit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerCredits and only return the `id`
     * const customerCreditWithIdOnly = await prisma.customerCredit.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerCreditUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerCreditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerCreditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerCredit.
     * @param {CustomerCreditUpsertArgs} args - Arguments to update or create a CustomerCredit.
     * @example
     * // Update or create a CustomerCredit
     * const customerCredit = await prisma.customerCredit.upsert({
     *   create: {
     *     // ... data to create a CustomerCredit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerCredit we want to update
     *   }
     * })
     */
    upsert<T extends CustomerCreditUpsertArgs>(args: SelectSubset<T, CustomerCreditUpsertArgs<ExtArgs>>): Prisma__CustomerCreditClient<$Result.GetResult<Prisma.$CustomerCreditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerCredits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCreditCountArgs} args - Arguments to filter CustomerCredits to count.
     * @example
     * // Count the number of CustomerCredits
     * const count = await prisma.customerCredit.count({
     *   where: {
     *     // ... the filter for the CustomerCredits we want to count
     *   }
     * })
    **/
    count<T extends CustomerCreditCountArgs>(
      args?: Subset<T, CustomerCreditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCreditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerCredit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCreditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerCreditAggregateArgs>(args: Subset<T, CustomerCreditAggregateArgs>): Prisma.PrismaPromise<GetCustomerCreditAggregateType<T>>

    /**
     * Group by CustomerCredit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCreditGroupByArgs} args - Group by arguments.
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
      T extends CustomerCreditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerCreditGroupByArgs['orderBy'] }
        : { orderBy?: CustomerCreditGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerCreditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerCreditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerCredit model
   */
  readonly fields: CustomerCreditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerCredit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerCreditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CustomerCredit model
   */
  interface CustomerCreditFieldRefs {
    readonly id: FieldRef<"CustomerCredit", 'String'>
    readonly customerId: FieldRef<"CustomerCredit", 'String'>
    readonly amount: FieldRef<"CustomerCredit", 'Float'>
    readonly paidAmount: FieldRef<"CustomerCredit", 'Float'>
    readonly isPaid: FieldRef<"CustomerCredit", 'Boolean'>
    readonly reference: FieldRef<"CustomerCredit", 'String'>
    readonly note: FieldRef<"CustomerCredit", 'String'>
    readonly dueDate: FieldRef<"CustomerCredit", 'DateTime'>
    readonly createdAt: FieldRef<"CustomerCredit", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerCredit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerCredit findUnique
   */
  export type CustomerCreditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCredit
     */
    select?: CustomerCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCredit
     */
    omit?: CustomerCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCreditInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCredit to fetch.
     */
    where: CustomerCreditWhereUniqueInput
  }

  /**
   * CustomerCredit findUniqueOrThrow
   */
  export type CustomerCreditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCredit
     */
    select?: CustomerCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCredit
     */
    omit?: CustomerCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCreditInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCredit to fetch.
     */
    where: CustomerCreditWhereUniqueInput
  }

  /**
   * CustomerCredit findFirst
   */
  export type CustomerCreditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCredit
     */
    select?: CustomerCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCredit
     */
    omit?: CustomerCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCreditInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCredit to fetch.
     */
    where?: CustomerCreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCredits to fetch.
     */
    orderBy?: CustomerCreditOrderByWithRelationInput | CustomerCreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerCredits.
     */
    cursor?: CustomerCreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCredits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCredits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerCredits.
     */
    distinct?: CustomerCreditScalarFieldEnum | CustomerCreditScalarFieldEnum[]
  }

  /**
   * CustomerCredit findFirstOrThrow
   */
  export type CustomerCreditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCredit
     */
    select?: CustomerCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCredit
     */
    omit?: CustomerCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCreditInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCredit to fetch.
     */
    where?: CustomerCreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCredits to fetch.
     */
    orderBy?: CustomerCreditOrderByWithRelationInput | CustomerCreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerCredits.
     */
    cursor?: CustomerCreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCredits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCredits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerCredits.
     */
    distinct?: CustomerCreditScalarFieldEnum | CustomerCreditScalarFieldEnum[]
  }

  /**
   * CustomerCredit findMany
   */
  export type CustomerCreditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCredit
     */
    select?: CustomerCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCredit
     */
    omit?: CustomerCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCreditInclude<ExtArgs> | null
    /**
     * Filter, which CustomerCredits to fetch.
     */
    where?: CustomerCreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerCredits to fetch.
     */
    orderBy?: CustomerCreditOrderByWithRelationInput | CustomerCreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerCredits.
     */
    cursor?: CustomerCreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerCredits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerCredits.
     */
    skip?: number
    distinct?: CustomerCreditScalarFieldEnum | CustomerCreditScalarFieldEnum[]
  }

  /**
   * CustomerCredit create
   */
  export type CustomerCreditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCredit
     */
    select?: CustomerCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCredit
     */
    omit?: CustomerCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCreditInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerCredit.
     */
    data: XOR<CustomerCreditCreateInput, CustomerCreditUncheckedCreateInput>
  }

  /**
   * CustomerCredit createMany
   */
  export type CustomerCreditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerCredits.
     */
    data: CustomerCreditCreateManyInput | CustomerCreditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerCredit createManyAndReturn
   */
  export type CustomerCreditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCredit
     */
    select?: CustomerCreditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCredit
     */
    omit?: CustomerCreditOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerCredits.
     */
    data: CustomerCreditCreateManyInput | CustomerCreditCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCreditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerCredit update
   */
  export type CustomerCreditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCredit
     */
    select?: CustomerCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCredit
     */
    omit?: CustomerCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCreditInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerCredit.
     */
    data: XOR<CustomerCreditUpdateInput, CustomerCreditUncheckedUpdateInput>
    /**
     * Choose, which CustomerCredit to update.
     */
    where: CustomerCreditWhereUniqueInput
  }

  /**
   * CustomerCredit updateMany
   */
  export type CustomerCreditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerCredits.
     */
    data: XOR<CustomerCreditUpdateManyMutationInput, CustomerCreditUncheckedUpdateManyInput>
    /**
     * Filter which CustomerCredits to update
     */
    where?: CustomerCreditWhereInput
    /**
     * Limit how many CustomerCredits to update.
     */
    limit?: number
  }

  /**
   * CustomerCredit updateManyAndReturn
   */
  export type CustomerCreditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCredit
     */
    select?: CustomerCreditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCredit
     */
    omit?: CustomerCreditOmit<ExtArgs> | null
    /**
     * The data used to update CustomerCredits.
     */
    data: XOR<CustomerCreditUpdateManyMutationInput, CustomerCreditUncheckedUpdateManyInput>
    /**
     * Filter which CustomerCredits to update
     */
    where?: CustomerCreditWhereInput
    /**
     * Limit how many CustomerCredits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCreditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerCredit upsert
   */
  export type CustomerCreditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCredit
     */
    select?: CustomerCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCredit
     */
    omit?: CustomerCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCreditInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerCredit to update in case it exists.
     */
    where: CustomerCreditWhereUniqueInput
    /**
     * In case the CustomerCredit found by the `where` argument doesn't exist, create a new CustomerCredit with this data.
     */
    create: XOR<CustomerCreditCreateInput, CustomerCreditUncheckedCreateInput>
    /**
     * In case the CustomerCredit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerCreditUpdateInput, CustomerCreditUncheckedUpdateInput>
  }

  /**
   * CustomerCredit delete
   */
  export type CustomerCreditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCredit
     */
    select?: CustomerCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCredit
     */
    omit?: CustomerCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCreditInclude<ExtArgs> | null
    /**
     * Filter which CustomerCredit to delete.
     */
    where: CustomerCreditWhereUniqueInput
  }

  /**
   * CustomerCredit deleteMany
   */
  export type CustomerCreditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerCredits to delete
     */
    where?: CustomerCreditWhereInput
    /**
     * Limit how many CustomerCredits to delete.
     */
    limit?: number
  }

  /**
   * CustomerCredit without action
   */
  export type CustomerCreditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCredit
     */
    select?: CustomerCreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerCredit
     */
    omit?: CustomerCreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerCreditInclude<ExtArgs> | null
  }


  /**
   * Model Movement
   */

  export type AggregateMovement = {
    _count: MovementCountAggregateOutputType | null
    _min: MovementMinAggregateOutputType | null
    _max: MovementMaxAggregateOutputType | null
  }

  export type MovementMinAggregateOutputType = {
    id: string | null
    type: $Enums.MovementType | null
    note: string | null
    issueNumber: string | null
    paymentType: $Enums.PaymentType | null
    customerId: string | null
    createdAt: Date | null
  }

  export type MovementMaxAggregateOutputType = {
    id: string | null
    type: $Enums.MovementType | null
    note: string | null
    issueNumber: string | null
    paymentType: $Enums.PaymentType | null
    customerId: string | null
    createdAt: Date | null
  }

  export type MovementCountAggregateOutputType = {
    id: number
    type: number
    note: number
    issueNumber: number
    paymentType: number
    customerId: number
    createdAt: number
    _all: number
  }


  export type MovementMinAggregateInputType = {
    id?: true
    type?: true
    note?: true
    issueNumber?: true
    paymentType?: true
    customerId?: true
    createdAt?: true
  }

  export type MovementMaxAggregateInputType = {
    id?: true
    type?: true
    note?: true
    issueNumber?: true
    paymentType?: true
    customerId?: true
    createdAt?: true
  }

  export type MovementCountAggregateInputType = {
    id?: true
    type?: true
    note?: true
    issueNumber?: true
    paymentType?: true
    customerId?: true
    createdAt?: true
    _all?: true
  }

  export type MovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movement to aggregate.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movements
    **/
    _count?: true | MovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovementMaxAggregateInputType
  }

  export type GetMovementAggregateType<T extends MovementAggregateArgs> = {
        [P in keyof T & keyof AggregateMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovement[P]>
      : GetScalarType<T[P], AggregateMovement[P]>
  }




  export type MovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementWhereInput
    orderBy?: MovementOrderByWithAggregationInput | MovementOrderByWithAggregationInput[]
    by: MovementScalarFieldEnum[] | MovementScalarFieldEnum
    having?: MovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovementCountAggregateInputType | true
    _min?: MovementMinAggregateInputType
    _max?: MovementMaxAggregateInputType
  }

  export type MovementGroupByOutputType = {
    id: string
    type: $Enums.MovementType
    note: string | null
    issueNumber: string | null
    paymentType: $Enums.PaymentType
    customerId: string | null
    createdAt: Date
    _count: MovementCountAggregateOutputType | null
    _min: MovementMinAggregateOutputType | null
    _max: MovementMaxAggregateOutputType | null
  }

  type GetMovementGroupByPayload<T extends MovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovementGroupByOutputType[P]>
            : GetScalarType<T[P], MovementGroupByOutputType[P]>
        }
      >
    >


  export type MovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    note?: boolean
    issueNumber?: boolean
    paymentType?: boolean
    customerId?: boolean
    createdAt?: boolean
    customer?: boolean | Movement$customerArgs<ExtArgs>
    items?: boolean | Movement$itemsArgs<ExtArgs>
    _count?: boolean | MovementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movement"]>

  export type MovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    note?: boolean
    issueNumber?: boolean
    paymentType?: boolean
    customerId?: boolean
    createdAt?: boolean
    customer?: boolean | Movement$customerArgs<ExtArgs>
  }, ExtArgs["result"]["movement"]>

  export type MovementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    note?: boolean
    issueNumber?: boolean
    paymentType?: boolean
    customerId?: boolean
    createdAt?: boolean
    customer?: boolean | Movement$customerArgs<ExtArgs>
  }, ExtArgs["result"]["movement"]>

  export type MovementSelectScalar = {
    id?: boolean
    type?: boolean
    note?: boolean
    issueNumber?: boolean
    paymentType?: boolean
    customerId?: boolean
    createdAt?: boolean
  }

  export type MovementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "note" | "issueNumber" | "paymentType" | "customerId" | "createdAt", ExtArgs["result"]["movement"]>
  export type MovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Movement$customerArgs<ExtArgs>
    items?: boolean | Movement$itemsArgs<ExtArgs>
    _count?: boolean | MovementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Movement$customerArgs<ExtArgs>
  }
  export type MovementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Movement$customerArgs<ExtArgs>
  }

  export type $MovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movement"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      items: Prisma.$MovementItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.MovementType
      note: string | null
      issueNumber: string | null
      paymentType: $Enums.PaymentType
      customerId: string | null
      createdAt: Date
    }, ExtArgs["result"]["movement"]>
    composites: {}
  }

  type MovementGetPayload<S extends boolean | null | undefined | MovementDefaultArgs> = $Result.GetResult<Prisma.$MovementPayload, S>

  type MovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovementCountAggregateInputType | true
    }

  export interface MovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movement'], meta: { name: 'Movement' } }
    /**
     * Find zero or one Movement that matches the filter.
     * @param {MovementFindUniqueArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovementFindUniqueArgs>(args: SelectSubset<T, MovementFindUniqueArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovementFindUniqueOrThrowArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovementFindUniqueOrThrowArgs>(args: SelectSubset<T, MovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindFirstArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovementFindFirstArgs>(args?: SelectSubset<T, MovementFindFirstArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindFirstOrThrowArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovementFindFirstOrThrowArgs>(args?: SelectSubset<T, MovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movements
     * const movements = await prisma.movement.findMany()
     * 
     * // Get first 10 Movements
     * const movements = await prisma.movement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movementWithIdOnly = await prisma.movement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovementFindManyArgs>(args?: SelectSubset<T, MovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movement.
     * @param {MovementCreateArgs} args - Arguments to create a Movement.
     * @example
     * // Create one Movement
     * const Movement = await prisma.movement.create({
     *   data: {
     *     // ... data to create a Movement
     *   }
     * })
     * 
     */
    create<T extends MovementCreateArgs>(args: SelectSubset<T, MovementCreateArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movements.
     * @param {MovementCreateManyArgs} args - Arguments to create many Movements.
     * @example
     * // Create many Movements
     * const movement = await prisma.movement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovementCreateManyArgs>(args?: SelectSubset<T, MovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movements and returns the data saved in the database.
     * @param {MovementCreateManyAndReturnArgs} args - Arguments to create many Movements.
     * @example
     * // Create many Movements
     * const movement = await prisma.movement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movements and only return the `id`
     * const movementWithIdOnly = await prisma.movement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovementCreateManyAndReturnArgs>(args?: SelectSubset<T, MovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movement.
     * @param {MovementDeleteArgs} args - Arguments to delete one Movement.
     * @example
     * // Delete one Movement
     * const Movement = await prisma.movement.delete({
     *   where: {
     *     // ... filter to delete one Movement
     *   }
     * })
     * 
     */
    delete<T extends MovementDeleteArgs>(args: SelectSubset<T, MovementDeleteArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movement.
     * @param {MovementUpdateArgs} args - Arguments to update one Movement.
     * @example
     * // Update one Movement
     * const movement = await prisma.movement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovementUpdateArgs>(args: SelectSubset<T, MovementUpdateArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movements.
     * @param {MovementDeleteManyArgs} args - Arguments to filter Movements to delete.
     * @example
     * // Delete a few Movements
     * const { count } = await prisma.movement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovementDeleteManyArgs>(args?: SelectSubset<T, MovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movements
     * const movement = await prisma.movement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovementUpdateManyArgs>(args: SelectSubset<T, MovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movements and returns the data updated in the database.
     * @param {MovementUpdateManyAndReturnArgs} args - Arguments to update many Movements.
     * @example
     * // Update many Movements
     * const movement = await prisma.movement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movements and only return the `id`
     * const movementWithIdOnly = await prisma.movement.updateManyAndReturn({
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
    updateManyAndReturn<T extends MovementUpdateManyAndReturnArgs>(args: SelectSubset<T, MovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movement.
     * @param {MovementUpsertArgs} args - Arguments to update or create a Movement.
     * @example
     * // Update or create a Movement
     * const movement = await prisma.movement.upsert({
     *   create: {
     *     // ... data to create a Movement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movement we want to update
     *   }
     * })
     */
    upsert<T extends MovementUpsertArgs>(args: SelectSubset<T, MovementUpsertArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementCountArgs} args - Arguments to filter Movements to count.
     * @example
     * // Count the number of Movements
     * const count = await prisma.movement.count({
     *   where: {
     *     // ... the filter for the Movements we want to count
     *   }
     * })
    **/
    count<T extends MovementCountArgs>(
      args?: Subset<T, MovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovementAggregateArgs>(args: Subset<T, MovementAggregateArgs>): Prisma.PrismaPromise<GetMovementAggregateType<T>>

    /**
     * Group by Movement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementGroupByArgs} args - Group by arguments.
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
      T extends MovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovementGroupByArgs['orderBy'] }
        : { orderBy?: MovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movement model
   */
  readonly fields: MovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends Movement$customerArgs<ExtArgs> = {}>(args?: Subset<T, Movement$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Movement$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Movement$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Movement model
   */
  interface MovementFieldRefs {
    readonly id: FieldRef<"Movement", 'String'>
    readonly type: FieldRef<"Movement", 'MovementType'>
    readonly note: FieldRef<"Movement", 'String'>
    readonly issueNumber: FieldRef<"Movement", 'String'>
    readonly paymentType: FieldRef<"Movement", 'PaymentType'>
    readonly customerId: FieldRef<"Movement", 'String'>
    readonly createdAt: FieldRef<"Movement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movement findUnique
   */
  export type MovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement findUniqueOrThrow
   */
  export type MovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement findFirst
   */
  export type MovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movements.
     */
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement findFirstOrThrow
   */
  export type MovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movements.
     */
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement findMany
   */
  export type MovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movements to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement create
   */
  export type MovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The data needed to create a Movement.
     */
    data: XOR<MovementCreateInput, MovementUncheckedCreateInput>
  }

  /**
   * Movement createMany
   */
  export type MovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movements.
     */
    data: MovementCreateManyInput | MovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movement createManyAndReturn
   */
  export type MovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * The data used to create many Movements.
     */
    data: MovementCreateManyInput | MovementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movement update
   */
  export type MovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The data needed to update a Movement.
     */
    data: XOR<MovementUpdateInput, MovementUncheckedUpdateInput>
    /**
     * Choose, which Movement to update.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement updateMany
   */
  export type MovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movements.
     */
    data: XOR<MovementUpdateManyMutationInput, MovementUncheckedUpdateManyInput>
    /**
     * Filter which Movements to update
     */
    where?: MovementWhereInput
    /**
     * Limit how many Movements to update.
     */
    limit?: number
  }

  /**
   * Movement updateManyAndReturn
   */
  export type MovementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * The data used to update Movements.
     */
    data: XOR<MovementUpdateManyMutationInput, MovementUncheckedUpdateManyInput>
    /**
     * Filter which Movements to update
     */
    where?: MovementWhereInput
    /**
     * Limit how many Movements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movement upsert
   */
  export type MovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The filter to search for the Movement to update in case it exists.
     */
    where: MovementWhereUniqueInput
    /**
     * In case the Movement found by the `where` argument doesn't exist, create a new Movement with this data.
     */
    create: XOR<MovementCreateInput, MovementUncheckedCreateInput>
    /**
     * In case the Movement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovementUpdateInput, MovementUncheckedUpdateInput>
  }

  /**
   * Movement delete
   */
  export type MovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter which Movement to delete.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement deleteMany
   */
  export type MovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movements to delete
     */
    where?: MovementWhereInput
    /**
     * Limit how many Movements to delete.
     */
    limit?: number
  }

  /**
   * Movement.customer
   */
  export type Movement$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Movement.items
   */
  export type Movement$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    where?: MovementItemWhereInput
    orderBy?: MovementItemOrderByWithRelationInput | MovementItemOrderByWithRelationInput[]
    cursor?: MovementItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovementItemScalarFieldEnum | MovementItemScalarFieldEnum[]
  }

  /**
   * Movement without action
   */
  export type MovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
  }


  /**
   * Model MovementItem
   */

  export type AggregateMovementItem = {
    _count: MovementItemCountAggregateOutputType | null
    _avg: MovementItemAvgAggregateOutputType | null
    _sum: MovementItemSumAggregateOutputType | null
    _min: MovementItemMinAggregateOutputType | null
    _max: MovementItemMaxAggregateOutputType | null
  }

  export type MovementItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type MovementItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type MovementItemMinAggregateOutputType = {
    id: string | null
    movementId: string | null
    productId: string | null
    batchId: string | null
    quantity: number | null
    unitPrice: number | null
    createdAt: Date | null
  }

  export type MovementItemMaxAggregateOutputType = {
    id: string | null
    movementId: string | null
    productId: string | null
    batchId: string | null
    quantity: number | null
    unitPrice: number | null
    createdAt: Date | null
  }

  export type MovementItemCountAggregateOutputType = {
    id: number
    movementId: number
    productId: number
    batchId: number
    quantity: number
    unitPrice: number
    createdAt: number
    _all: number
  }


  export type MovementItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type MovementItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type MovementItemMinAggregateInputType = {
    id?: true
    movementId?: true
    productId?: true
    batchId?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
  }

  export type MovementItemMaxAggregateInputType = {
    id?: true
    movementId?: true
    productId?: true
    batchId?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
  }

  export type MovementItemCountAggregateInputType = {
    id?: true
    movementId?: true
    productId?: true
    batchId?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
    _all?: true
  }

  export type MovementItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovementItem to aggregate.
     */
    where?: MovementItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementItems to fetch.
     */
    orderBy?: MovementItemOrderByWithRelationInput | MovementItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovementItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovementItems
    **/
    _count?: true | MovementItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovementItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovementItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovementItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovementItemMaxAggregateInputType
  }

  export type GetMovementItemAggregateType<T extends MovementItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMovementItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovementItem[P]>
      : GetScalarType<T[P], AggregateMovementItem[P]>
  }




  export type MovementItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementItemWhereInput
    orderBy?: MovementItemOrderByWithAggregationInput | MovementItemOrderByWithAggregationInput[]
    by: MovementItemScalarFieldEnum[] | MovementItemScalarFieldEnum
    having?: MovementItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovementItemCountAggregateInputType | true
    _avg?: MovementItemAvgAggregateInputType
    _sum?: MovementItemSumAggregateInputType
    _min?: MovementItemMinAggregateInputType
    _max?: MovementItemMaxAggregateInputType
  }

  export type MovementItemGroupByOutputType = {
    id: string
    movementId: string
    productId: string
    batchId: string | null
    quantity: number
    unitPrice: number
    createdAt: Date
    _count: MovementItemCountAggregateOutputType | null
    _avg: MovementItemAvgAggregateOutputType | null
    _sum: MovementItemSumAggregateOutputType | null
    _min: MovementItemMinAggregateOutputType | null
    _max: MovementItemMaxAggregateOutputType | null
  }

  type GetMovementItemGroupByPayload<T extends MovementItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovementItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovementItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovementItemGroupByOutputType[P]>
            : GetScalarType<T[P], MovementItemGroupByOutputType[P]>
        }
      >
    >


  export type MovementItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movementId?: boolean
    productId?: boolean
    batchId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    movement?: boolean | MovementDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    batch?: boolean | MovementItem$batchArgs<ExtArgs>
  }, ExtArgs["result"]["movementItem"]>

  export type MovementItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movementId?: boolean
    productId?: boolean
    batchId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    movement?: boolean | MovementDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    batch?: boolean | MovementItem$batchArgs<ExtArgs>
  }, ExtArgs["result"]["movementItem"]>

  export type MovementItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movementId?: boolean
    productId?: boolean
    batchId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    movement?: boolean | MovementDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    batch?: boolean | MovementItem$batchArgs<ExtArgs>
  }, ExtArgs["result"]["movementItem"]>

  export type MovementItemSelectScalar = {
    id?: boolean
    movementId?: boolean
    productId?: boolean
    batchId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
  }

  export type MovementItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movementId" | "productId" | "batchId" | "quantity" | "unitPrice" | "createdAt", ExtArgs["result"]["movementItem"]>
  export type MovementItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movement?: boolean | MovementDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    batch?: boolean | MovementItem$batchArgs<ExtArgs>
  }
  export type MovementItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movement?: boolean | MovementDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    batch?: boolean | MovementItem$batchArgs<ExtArgs>
  }
  export type MovementItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movement?: boolean | MovementDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    batch?: boolean | MovementItem$batchArgs<ExtArgs>
  }

  export type $MovementItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovementItem"
    objects: {
      movement: Prisma.$MovementPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      batch: Prisma.$BatchPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      movementId: string
      productId: string
      batchId: string | null
      quantity: number
      unitPrice: number
      createdAt: Date
    }, ExtArgs["result"]["movementItem"]>
    composites: {}
  }

  type MovementItemGetPayload<S extends boolean | null | undefined | MovementItemDefaultArgs> = $Result.GetResult<Prisma.$MovementItemPayload, S>

  type MovementItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovementItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovementItemCountAggregateInputType | true
    }

  export interface MovementItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovementItem'], meta: { name: 'MovementItem' } }
    /**
     * Find zero or one MovementItem that matches the filter.
     * @param {MovementItemFindUniqueArgs} args - Arguments to find a MovementItem
     * @example
     * // Get one MovementItem
     * const movementItem = await prisma.movementItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovementItemFindUniqueArgs>(args: SelectSubset<T, MovementItemFindUniqueArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovementItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovementItemFindUniqueOrThrowArgs} args - Arguments to find a MovementItem
     * @example
     * // Get one MovementItem
     * const movementItem = await prisma.movementItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovementItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MovementItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovementItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementItemFindFirstArgs} args - Arguments to find a MovementItem
     * @example
     * // Get one MovementItem
     * const movementItem = await prisma.movementItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovementItemFindFirstArgs>(args?: SelectSubset<T, MovementItemFindFirstArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovementItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementItemFindFirstOrThrowArgs} args - Arguments to find a MovementItem
     * @example
     * // Get one MovementItem
     * const movementItem = await prisma.movementItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovementItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MovementItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovementItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovementItems
     * const movementItems = await prisma.movementItem.findMany()
     * 
     * // Get first 10 MovementItems
     * const movementItems = await prisma.movementItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movementItemWithIdOnly = await prisma.movementItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovementItemFindManyArgs>(args?: SelectSubset<T, MovementItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovementItem.
     * @param {MovementItemCreateArgs} args - Arguments to create a MovementItem.
     * @example
     * // Create one MovementItem
     * const MovementItem = await prisma.movementItem.create({
     *   data: {
     *     // ... data to create a MovementItem
     *   }
     * })
     * 
     */
    create<T extends MovementItemCreateArgs>(args: SelectSubset<T, MovementItemCreateArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovementItems.
     * @param {MovementItemCreateManyArgs} args - Arguments to create many MovementItems.
     * @example
     * // Create many MovementItems
     * const movementItem = await prisma.movementItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovementItemCreateManyArgs>(args?: SelectSubset<T, MovementItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovementItems and returns the data saved in the database.
     * @param {MovementItemCreateManyAndReturnArgs} args - Arguments to create many MovementItems.
     * @example
     * // Create many MovementItems
     * const movementItem = await prisma.movementItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovementItems and only return the `id`
     * const movementItemWithIdOnly = await prisma.movementItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovementItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MovementItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovementItem.
     * @param {MovementItemDeleteArgs} args - Arguments to delete one MovementItem.
     * @example
     * // Delete one MovementItem
     * const MovementItem = await prisma.movementItem.delete({
     *   where: {
     *     // ... filter to delete one MovementItem
     *   }
     * })
     * 
     */
    delete<T extends MovementItemDeleteArgs>(args: SelectSubset<T, MovementItemDeleteArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovementItem.
     * @param {MovementItemUpdateArgs} args - Arguments to update one MovementItem.
     * @example
     * // Update one MovementItem
     * const movementItem = await prisma.movementItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovementItemUpdateArgs>(args: SelectSubset<T, MovementItemUpdateArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovementItems.
     * @param {MovementItemDeleteManyArgs} args - Arguments to filter MovementItems to delete.
     * @example
     * // Delete a few MovementItems
     * const { count } = await prisma.movementItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovementItemDeleteManyArgs>(args?: SelectSubset<T, MovementItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovementItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovementItems
     * const movementItem = await prisma.movementItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovementItemUpdateManyArgs>(args: SelectSubset<T, MovementItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovementItems and returns the data updated in the database.
     * @param {MovementItemUpdateManyAndReturnArgs} args - Arguments to update many MovementItems.
     * @example
     * // Update many MovementItems
     * const movementItem = await prisma.movementItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovementItems and only return the `id`
     * const movementItemWithIdOnly = await prisma.movementItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends MovementItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MovementItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovementItem.
     * @param {MovementItemUpsertArgs} args - Arguments to update or create a MovementItem.
     * @example
     * // Update or create a MovementItem
     * const movementItem = await prisma.movementItem.upsert({
     *   create: {
     *     // ... data to create a MovementItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovementItem we want to update
     *   }
     * })
     */
    upsert<T extends MovementItemUpsertArgs>(args: SelectSubset<T, MovementItemUpsertArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovementItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementItemCountArgs} args - Arguments to filter MovementItems to count.
     * @example
     * // Count the number of MovementItems
     * const count = await prisma.movementItem.count({
     *   where: {
     *     // ... the filter for the MovementItems we want to count
     *   }
     * })
    **/
    count<T extends MovementItemCountArgs>(
      args?: Subset<T, MovementItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovementItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovementItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovementItemAggregateArgs>(args: Subset<T, MovementItemAggregateArgs>): Prisma.PrismaPromise<GetMovementItemAggregateType<T>>

    /**
     * Group by MovementItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementItemGroupByArgs} args - Group by arguments.
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
      T extends MovementItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovementItemGroupByArgs['orderBy'] }
        : { orderBy?: MovementItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovementItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovementItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovementItem model
   */
  readonly fields: MovementItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovementItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovementItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movement<T extends MovementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovementDefaultArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    batch<T extends MovementItem$batchArgs<ExtArgs> = {}>(args?: Subset<T, MovementItem$batchArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MovementItem model
   */
  interface MovementItemFieldRefs {
    readonly id: FieldRef<"MovementItem", 'String'>
    readonly movementId: FieldRef<"MovementItem", 'String'>
    readonly productId: FieldRef<"MovementItem", 'String'>
    readonly batchId: FieldRef<"MovementItem", 'String'>
    readonly quantity: FieldRef<"MovementItem", 'Int'>
    readonly unitPrice: FieldRef<"MovementItem", 'Int'>
    readonly createdAt: FieldRef<"MovementItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MovementItem findUnique
   */
  export type MovementItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * Filter, which MovementItem to fetch.
     */
    where: MovementItemWhereUniqueInput
  }

  /**
   * MovementItem findUniqueOrThrow
   */
  export type MovementItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * Filter, which MovementItem to fetch.
     */
    where: MovementItemWhereUniqueInput
  }

  /**
   * MovementItem findFirst
   */
  export type MovementItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * Filter, which MovementItem to fetch.
     */
    where?: MovementItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementItems to fetch.
     */
    orderBy?: MovementItemOrderByWithRelationInput | MovementItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovementItems.
     */
    cursor?: MovementItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovementItems.
     */
    distinct?: MovementItemScalarFieldEnum | MovementItemScalarFieldEnum[]
  }

  /**
   * MovementItem findFirstOrThrow
   */
  export type MovementItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * Filter, which MovementItem to fetch.
     */
    where?: MovementItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementItems to fetch.
     */
    orderBy?: MovementItemOrderByWithRelationInput | MovementItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovementItems.
     */
    cursor?: MovementItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovementItems.
     */
    distinct?: MovementItemScalarFieldEnum | MovementItemScalarFieldEnum[]
  }

  /**
   * MovementItem findMany
   */
  export type MovementItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * Filter, which MovementItems to fetch.
     */
    where?: MovementItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementItems to fetch.
     */
    orderBy?: MovementItemOrderByWithRelationInput | MovementItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovementItems.
     */
    cursor?: MovementItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementItems.
     */
    skip?: number
    distinct?: MovementItemScalarFieldEnum | MovementItemScalarFieldEnum[]
  }

  /**
   * MovementItem create
   */
  export type MovementItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MovementItem.
     */
    data: XOR<MovementItemCreateInput, MovementItemUncheckedCreateInput>
  }

  /**
   * MovementItem createMany
   */
  export type MovementItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovementItems.
     */
    data: MovementItemCreateManyInput | MovementItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovementItem createManyAndReturn
   */
  export type MovementItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * The data used to create many MovementItems.
     */
    data: MovementItemCreateManyInput | MovementItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovementItem update
   */
  export type MovementItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MovementItem.
     */
    data: XOR<MovementItemUpdateInput, MovementItemUncheckedUpdateInput>
    /**
     * Choose, which MovementItem to update.
     */
    where: MovementItemWhereUniqueInput
  }

  /**
   * MovementItem updateMany
   */
  export type MovementItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovementItems.
     */
    data: XOR<MovementItemUpdateManyMutationInput, MovementItemUncheckedUpdateManyInput>
    /**
     * Filter which MovementItems to update
     */
    where?: MovementItemWhereInput
    /**
     * Limit how many MovementItems to update.
     */
    limit?: number
  }

  /**
   * MovementItem updateManyAndReturn
   */
  export type MovementItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * The data used to update MovementItems.
     */
    data: XOR<MovementItemUpdateManyMutationInput, MovementItemUncheckedUpdateManyInput>
    /**
     * Filter which MovementItems to update
     */
    where?: MovementItemWhereInput
    /**
     * Limit how many MovementItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovementItem upsert
   */
  export type MovementItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MovementItem to update in case it exists.
     */
    where: MovementItemWhereUniqueInput
    /**
     * In case the MovementItem found by the `where` argument doesn't exist, create a new MovementItem with this data.
     */
    create: XOR<MovementItemCreateInput, MovementItemUncheckedCreateInput>
    /**
     * In case the MovementItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovementItemUpdateInput, MovementItemUncheckedUpdateInput>
  }

  /**
   * MovementItem delete
   */
  export type MovementItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * Filter which MovementItem to delete.
     */
    where: MovementItemWhereUniqueInput
  }

  /**
   * MovementItem deleteMany
   */
  export type MovementItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovementItems to delete
     */
    where?: MovementItemWhereInput
    /**
     * Limit how many MovementItems to delete.
     */
    limit?: number
  }

  /**
   * MovementItem.batch
   */
  export type MovementItem$batchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    where?: BatchWhereInput
  }

  /**
   * MovementItem without action
   */
  export type MovementItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovementItem
     */
    omit?: MovementItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
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
    fistName: 'fistName',
    lastName: 'lastName',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    username: 'username',
    role: 'role',
    passwordHash: 'passwordHash',
    createdLocally: 'createdLocally'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    address: 'address',
    contactName: 'contactName',
    tinNumber: 'tinNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    contactName: 'contactName',
    tinNumber: 'tinNumber',
    balance: 'balance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const SupplierTransactionScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    type: 'type',
    amount: 'amount',
    reference: 'reference',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type SupplierTransactionScalarFieldEnum = (typeof SupplierTransactionScalarFieldEnum)[keyof typeof SupplierTransactionScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sku: 'sku',
    barcode: 'barcode',
    category: 'category',
    unit: 'unit',
    sellingPrice: 'sellingPrice',
    description: 'description',
    stock: 'stock',
    lowStockAlert: 'lowStockAlert',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const BatchScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    supplierId: 'supplierId',
    batchNumber: 'batchNumber',
    invoiceNumber: 'invoiceNumber',
    quantity: 'quantity',
    remainingQty: 'remainingQty',
    costPrice: 'costPrice',
    sellingPrice: 'sellingPrice',
    manufactureDate: 'manufactureDate',
    expiryDate: 'expiryDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BatchScalarFieldEnum = (typeof BatchScalarFieldEnum)[keyof typeof BatchScalarFieldEnum]


  export const CustomerCreditScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    amount: 'amount',
    paidAmount: 'paidAmount',
    isPaid: 'isPaid',
    reference: 'reference',
    note: 'note',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerCreditScalarFieldEnum = (typeof CustomerCreditScalarFieldEnum)[keyof typeof CustomerCreditScalarFieldEnum]


  export const MovementScalarFieldEnum: {
    id: 'id',
    type: 'type',
    note: 'note',
    issueNumber: 'issueNumber',
    paymentType: 'paymentType',
    customerId: 'customerId',
    createdAt: 'createdAt'
  };

  export type MovementScalarFieldEnum = (typeof MovementScalarFieldEnum)[keyof typeof MovementScalarFieldEnum]


  export const MovementItemScalarFieldEnum: {
    id: 'id',
    movementId: 'movementId',
    productId: 'productId',
    batchId: 'batchId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    createdAt: 'createdAt'
  };

  export type MovementItemScalarFieldEnum = (typeof MovementItemScalarFieldEnum)[keyof typeof MovementItemScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AccountRole'
   */
  export type EnumAccountRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountRole'>
    


  /**
   * Reference to a field of type 'AccountRole[]'
   */
  export type ListEnumAccountRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SupplierTransactionType'
   */
  export type EnumSupplierTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SupplierTransactionType'>
    


  /**
   * Reference to a field of type 'SupplierTransactionType[]'
   */
  export type ListEnumSupplierTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SupplierTransactionType[]'>
    


  /**
   * Reference to a field of type 'Unit'
   */
  export type EnumUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Unit'>
    


  /**
   * Reference to a field of type 'Unit[]'
   */
  export type ListEnumUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Unit[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MovementType'
   */
  export type EnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType'>
    


  /**
   * Reference to a field of type 'MovementType[]'
   */
  export type ListEnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType[]'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentType[]'
   */
  export type ListEnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fistName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    username?: StringFilter<"User"> | string
    role?: EnumAccountRoleFilter<"User"> | $Enums.AccountRole
    passwordHash?: StringFilter<"User"> | string
    createdLocally?: BoolFilter<"User"> | boolean
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fistName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdLocally?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fistName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumAccountRoleFilter<"User"> | $Enums.AccountRole
    passwordHash?: StringFilter<"User"> | string
    createdLocally?: BoolFilter<"User"> | boolean
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fistName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdLocally?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fistName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    username?: StringWithAggregatesFilter<"User"> | string
    role?: EnumAccountRoleWithAggregatesFilter<"User"> | $Enums.AccountRole
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdLocally?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    contactName?: StringNullableFilter<"Customer"> | string | null
    tinNumber?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    credits?: CustomerCreditListRelationFilter
    movements?: MovementListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    contactName?: SortOrderInput | SortOrder
    tinNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credits?: CustomerCreditOrderByRelationAggregateInput
    movements?: MovementOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    tinNumber?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    address?: StringNullableFilter<"Customer"> | string | null
    contactName?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    credits?: CustomerCreditListRelationFilter
    movements?: MovementListRelationFilter
  }, "id" | "phone" | "tinNumber">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    contactName?: SortOrderInput | SortOrder
    tinNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    contactName?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    tinNumber?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    name?: StringFilter<"Supplier"> | string
    phone?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    contactName?: StringNullableFilter<"Supplier"> | string | null
    tinNumber?: StringNullableFilter<"Supplier"> | string | null
    balance?: FloatFilter<"Supplier"> | number
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    transactions?: SupplierTransactionListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    contactName?: SortOrderInput | SortOrder
    tinNumber?: SortOrderInput | SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: SupplierTransactionOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tinNumber?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    phone?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    contactName?: StringNullableFilter<"Supplier"> | string | null
    balance?: FloatFilter<"Supplier"> | number
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    transactions?: SupplierTransactionListRelationFilter
  }, "id" | "tinNumber">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    contactName?: SortOrderInput | SortOrder
    tinNumber?: SortOrderInput | SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    name?: StringWithAggregatesFilter<"Supplier"> | string
    phone?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    email?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    address?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    contactName?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    tinNumber?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    balance?: FloatWithAggregatesFilter<"Supplier"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type SupplierTransactionWhereInput = {
    AND?: SupplierTransactionWhereInput | SupplierTransactionWhereInput[]
    OR?: SupplierTransactionWhereInput[]
    NOT?: SupplierTransactionWhereInput | SupplierTransactionWhereInput[]
    id?: StringFilter<"SupplierTransaction"> | string
    supplierId?: StringFilter<"SupplierTransaction"> | string
    type?: EnumSupplierTransactionTypeFilter<"SupplierTransaction"> | $Enums.SupplierTransactionType
    amount?: FloatFilter<"SupplierTransaction"> | number
    reference?: StringNullableFilter<"SupplierTransaction"> | string | null
    note?: StringNullableFilter<"SupplierTransaction"> | string | null
    createdAt?: DateTimeFilter<"SupplierTransaction"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }

  export type SupplierTransactionOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reference?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
  }

  export type SupplierTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierTransactionWhereInput | SupplierTransactionWhereInput[]
    OR?: SupplierTransactionWhereInput[]
    NOT?: SupplierTransactionWhereInput | SupplierTransactionWhereInput[]
    supplierId?: StringFilter<"SupplierTransaction"> | string
    type?: EnumSupplierTransactionTypeFilter<"SupplierTransaction"> | $Enums.SupplierTransactionType
    amount?: FloatFilter<"SupplierTransaction"> | number
    reference?: StringNullableFilter<"SupplierTransaction"> | string | null
    note?: StringNullableFilter<"SupplierTransaction"> | string | null
    createdAt?: DateTimeFilter<"SupplierTransaction"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }, "id">

  export type SupplierTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reference?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SupplierTransactionCountOrderByAggregateInput
    _avg?: SupplierTransactionAvgOrderByAggregateInput
    _max?: SupplierTransactionMaxOrderByAggregateInput
    _min?: SupplierTransactionMinOrderByAggregateInput
    _sum?: SupplierTransactionSumOrderByAggregateInput
  }

  export type SupplierTransactionScalarWhereWithAggregatesInput = {
    AND?: SupplierTransactionScalarWhereWithAggregatesInput | SupplierTransactionScalarWhereWithAggregatesInput[]
    OR?: SupplierTransactionScalarWhereWithAggregatesInput[]
    NOT?: SupplierTransactionScalarWhereWithAggregatesInput | SupplierTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierTransaction"> | string
    supplierId?: StringWithAggregatesFilter<"SupplierTransaction"> | string
    type?: EnumSupplierTransactionTypeWithAggregatesFilter<"SupplierTransaction"> | $Enums.SupplierTransactionType
    amount?: FloatWithAggregatesFilter<"SupplierTransaction"> | number
    reference?: StringNullableWithAggregatesFilter<"SupplierTransaction"> | string | null
    note?: StringNullableWithAggregatesFilter<"SupplierTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SupplierTransaction"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    sku?: StringNullableFilter<"Product"> | string | null
    barcode?: StringNullableFilter<"Product"> | string | null
    category?: StringNullableFilter<"Product"> | string | null
    unit?: EnumUnitNullableFilter<"Product"> | $Enums.Unit | null
    sellingPrice?: FloatFilter<"Product"> | number
    description?: StringNullableFilter<"Product"> | string | null
    stock?: IntFilter<"Product"> | number
    lowStockAlert?: IntNullableFilter<"Product"> | number | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    batches?: BatchListRelationFilter
    movements?: MovementItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    sellingPrice?: SortOrder
    description?: SortOrderInput | SortOrder
    stock?: SortOrder
    lowStockAlert?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batches?: BatchOrderByRelationAggregateInput
    movements?: MovementItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    barcode?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    sku?: StringNullableFilter<"Product"> | string | null
    category?: StringNullableFilter<"Product"> | string | null
    unit?: EnumUnitNullableFilter<"Product"> | $Enums.Unit | null
    sellingPrice?: FloatFilter<"Product"> | number
    description?: StringNullableFilter<"Product"> | string | null
    stock?: IntFilter<"Product"> | number
    lowStockAlert?: IntNullableFilter<"Product"> | number | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    batches?: BatchListRelationFilter
    movements?: MovementItemListRelationFilter
  }, "id" | "barcode">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    sellingPrice?: SortOrder
    description?: SortOrderInput | SortOrder
    stock?: SortOrder
    lowStockAlert?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringNullableWithAggregatesFilter<"Product"> | string | null
    barcode?: StringNullableWithAggregatesFilter<"Product"> | string | null
    category?: StringNullableWithAggregatesFilter<"Product"> | string | null
    unit?: EnumUnitNullableWithAggregatesFilter<"Product"> | $Enums.Unit | null
    sellingPrice?: FloatWithAggregatesFilter<"Product"> | number
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    stock?: IntWithAggregatesFilter<"Product"> | number
    lowStockAlert?: IntNullableWithAggregatesFilter<"Product"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type BatchWhereInput = {
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    id?: StringFilter<"Batch"> | string
    productId?: StringFilter<"Batch"> | string
    supplierId?: StringNullableFilter<"Batch"> | string | null
    batchNumber?: StringNullableFilter<"Batch"> | string | null
    invoiceNumber?: StringNullableFilter<"Batch"> | string | null
    quantity?: IntFilter<"Batch"> | number
    remainingQty?: IntFilter<"Batch"> | number
    costPrice?: FloatFilter<"Batch"> | number
    sellingPrice?: FloatFilter<"Batch"> | number
    manufactureDate?: DateTimeFilter<"Batch"> | Date | string
    expiryDate?: DateTimeFilter<"Batch"> | Date | string
    createdAt?: DateTimeFilter<"Batch"> | Date | string
    updatedAt?: DateTimeFilter<"Batch"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    movements?: MovementItemListRelationFilter
  }

  export type BatchOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    batchNumber?: SortOrderInput | SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    quantity?: SortOrder
    remainingQty?: SortOrder
    costPrice?: SortOrder
    sellingPrice?: SortOrder
    manufactureDate?: SortOrder
    expiryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    movements?: MovementItemOrderByRelationAggregateInput
  }

  export type BatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    productId?: StringFilter<"Batch"> | string
    supplierId?: StringNullableFilter<"Batch"> | string | null
    batchNumber?: StringNullableFilter<"Batch"> | string | null
    invoiceNumber?: StringNullableFilter<"Batch"> | string | null
    quantity?: IntFilter<"Batch"> | number
    remainingQty?: IntFilter<"Batch"> | number
    costPrice?: FloatFilter<"Batch"> | number
    sellingPrice?: FloatFilter<"Batch"> | number
    manufactureDate?: DateTimeFilter<"Batch"> | Date | string
    expiryDate?: DateTimeFilter<"Batch"> | Date | string
    createdAt?: DateTimeFilter<"Batch"> | Date | string
    updatedAt?: DateTimeFilter<"Batch"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    movements?: MovementItemListRelationFilter
  }, "id">

  export type BatchOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    batchNumber?: SortOrderInput | SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    quantity?: SortOrder
    remainingQty?: SortOrder
    costPrice?: SortOrder
    sellingPrice?: SortOrder
    manufactureDate?: SortOrder
    expiryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BatchCountOrderByAggregateInput
    _avg?: BatchAvgOrderByAggregateInput
    _max?: BatchMaxOrderByAggregateInput
    _min?: BatchMinOrderByAggregateInput
    _sum?: BatchSumOrderByAggregateInput
  }

  export type BatchScalarWhereWithAggregatesInput = {
    AND?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    OR?: BatchScalarWhereWithAggregatesInput[]
    NOT?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Batch"> | string
    productId?: StringWithAggregatesFilter<"Batch"> | string
    supplierId?: StringNullableWithAggregatesFilter<"Batch"> | string | null
    batchNumber?: StringNullableWithAggregatesFilter<"Batch"> | string | null
    invoiceNumber?: StringNullableWithAggregatesFilter<"Batch"> | string | null
    quantity?: IntWithAggregatesFilter<"Batch"> | number
    remainingQty?: IntWithAggregatesFilter<"Batch"> | number
    costPrice?: FloatWithAggregatesFilter<"Batch"> | number
    sellingPrice?: FloatWithAggregatesFilter<"Batch"> | number
    manufactureDate?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
    expiryDate?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
  }

  export type CustomerCreditWhereInput = {
    AND?: CustomerCreditWhereInput | CustomerCreditWhereInput[]
    OR?: CustomerCreditWhereInput[]
    NOT?: CustomerCreditWhereInput | CustomerCreditWhereInput[]
    id?: StringFilter<"CustomerCredit"> | string
    customerId?: StringFilter<"CustomerCredit"> | string
    amount?: FloatFilter<"CustomerCredit"> | number
    paidAmount?: FloatFilter<"CustomerCredit"> | number
    isPaid?: BoolFilter<"CustomerCredit"> | boolean
    reference?: StringNullableFilter<"CustomerCredit"> | string | null
    note?: StringNullableFilter<"CustomerCredit"> | string | null
    dueDate?: DateTimeNullableFilter<"CustomerCredit"> | Date | string | null
    createdAt?: DateTimeFilter<"CustomerCredit"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerCredit"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type CustomerCreditOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    paidAmount?: SortOrder
    isPaid?: SortOrder
    reference?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type CustomerCreditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerCreditWhereInput | CustomerCreditWhereInput[]
    OR?: CustomerCreditWhereInput[]
    NOT?: CustomerCreditWhereInput | CustomerCreditWhereInput[]
    customerId?: StringFilter<"CustomerCredit"> | string
    amount?: FloatFilter<"CustomerCredit"> | number
    paidAmount?: FloatFilter<"CustomerCredit"> | number
    isPaid?: BoolFilter<"CustomerCredit"> | boolean
    reference?: StringNullableFilter<"CustomerCredit"> | string | null
    note?: StringNullableFilter<"CustomerCredit"> | string | null
    dueDate?: DateTimeNullableFilter<"CustomerCredit"> | Date | string | null
    createdAt?: DateTimeFilter<"CustomerCredit"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerCredit"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type CustomerCreditOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    paidAmount?: SortOrder
    isPaid?: SortOrder
    reference?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCreditCountOrderByAggregateInput
    _avg?: CustomerCreditAvgOrderByAggregateInput
    _max?: CustomerCreditMaxOrderByAggregateInput
    _min?: CustomerCreditMinOrderByAggregateInput
    _sum?: CustomerCreditSumOrderByAggregateInput
  }

  export type CustomerCreditScalarWhereWithAggregatesInput = {
    AND?: CustomerCreditScalarWhereWithAggregatesInput | CustomerCreditScalarWhereWithAggregatesInput[]
    OR?: CustomerCreditScalarWhereWithAggregatesInput[]
    NOT?: CustomerCreditScalarWhereWithAggregatesInput | CustomerCreditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomerCredit"> | string
    customerId?: StringWithAggregatesFilter<"CustomerCredit"> | string
    amount?: FloatWithAggregatesFilter<"CustomerCredit"> | number
    paidAmount?: FloatWithAggregatesFilter<"CustomerCredit"> | number
    isPaid?: BoolWithAggregatesFilter<"CustomerCredit"> | boolean
    reference?: StringNullableWithAggregatesFilter<"CustomerCredit"> | string | null
    note?: StringNullableWithAggregatesFilter<"CustomerCredit"> | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"CustomerCredit"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomerCredit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerCredit"> | Date | string
  }

  export type MovementWhereInput = {
    AND?: MovementWhereInput | MovementWhereInput[]
    OR?: MovementWhereInput[]
    NOT?: MovementWhereInput | MovementWhereInput[]
    id?: StringFilter<"Movement"> | string
    type?: EnumMovementTypeFilter<"Movement"> | $Enums.MovementType
    note?: StringNullableFilter<"Movement"> | string | null
    issueNumber?: StringNullableFilter<"Movement"> | string | null
    paymentType?: EnumPaymentTypeFilter<"Movement"> | $Enums.PaymentType
    customerId?: StringNullableFilter<"Movement"> | string | null
    createdAt?: DateTimeFilter<"Movement"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    items?: MovementItemListRelationFilter
  }

  export type MovementOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    note?: SortOrderInput | SortOrder
    issueNumber?: SortOrderInput | SortOrder
    paymentType?: SortOrder
    customerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    items?: MovementItemOrderByRelationAggregateInput
  }

  export type MovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovementWhereInput | MovementWhereInput[]
    OR?: MovementWhereInput[]
    NOT?: MovementWhereInput | MovementWhereInput[]
    type?: EnumMovementTypeFilter<"Movement"> | $Enums.MovementType
    note?: StringNullableFilter<"Movement"> | string | null
    issueNumber?: StringNullableFilter<"Movement"> | string | null
    paymentType?: EnumPaymentTypeFilter<"Movement"> | $Enums.PaymentType
    customerId?: StringNullableFilter<"Movement"> | string | null
    createdAt?: DateTimeFilter<"Movement"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    items?: MovementItemListRelationFilter
  }, "id">

  export type MovementOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    note?: SortOrderInput | SortOrder
    issueNumber?: SortOrderInput | SortOrder
    paymentType?: SortOrder
    customerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MovementCountOrderByAggregateInput
    _max?: MovementMaxOrderByAggregateInput
    _min?: MovementMinOrderByAggregateInput
  }

  export type MovementScalarWhereWithAggregatesInput = {
    AND?: MovementScalarWhereWithAggregatesInput | MovementScalarWhereWithAggregatesInput[]
    OR?: MovementScalarWhereWithAggregatesInput[]
    NOT?: MovementScalarWhereWithAggregatesInput | MovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movement"> | string
    type?: EnumMovementTypeWithAggregatesFilter<"Movement"> | $Enums.MovementType
    note?: StringNullableWithAggregatesFilter<"Movement"> | string | null
    issueNumber?: StringNullableWithAggregatesFilter<"Movement"> | string | null
    paymentType?: EnumPaymentTypeWithAggregatesFilter<"Movement"> | $Enums.PaymentType
    customerId?: StringNullableWithAggregatesFilter<"Movement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Movement"> | Date | string
  }

  export type MovementItemWhereInput = {
    AND?: MovementItemWhereInput | MovementItemWhereInput[]
    OR?: MovementItemWhereInput[]
    NOT?: MovementItemWhereInput | MovementItemWhereInput[]
    id?: StringFilter<"MovementItem"> | string
    movementId?: StringFilter<"MovementItem"> | string
    productId?: StringFilter<"MovementItem"> | string
    batchId?: StringNullableFilter<"MovementItem"> | string | null
    quantity?: IntFilter<"MovementItem"> | number
    unitPrice?: IntFilter<"MovementItem"> | number
    createdAt?: DateTimeFilter<"MovementItem"> | Date | string
    movement?: XOR<MovementScalarRelationFilter, MovementWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    batch?: XOR<BatchNullableScalarRelationFilter, BatchWhereInput> | null
  }

  export type MovementItemOrderByWithRelationInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    batchId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    movement?: MovementOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    batch?: BatchOrderByWithRelationInput
  }

  export type MovementItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovementItemWhereInput | MovementItemWhereInput[]
    OR?: MovementItemWhereInput[]
    NOT?: MovementItemWhereInput | MovementItemWhereInput[]
    movementId?: StringFilter<"MovementItem"> | string
    productId?: StringFilter<"MovementItem"> | string
    batchId?: StringNullableFilter<"MovementItem"> | string | null
    quantity?: IntFilter<"MovementItem"> | number
    unitPrice?: IntFilter<"MovementItem"> | number
    createdAt?: DateTimeFilter<"MovementItem"> | Date | string
    movement?: XOR<MovementScalarRelationFilter, MovementWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    batch?: XOR<BatchNullableScalarRelationFilter, BatchWhereInput> | null
  }, "id">

  export type MovementItemOrderByWithAggregationInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    batchId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    _count?: MovementItemCountOrderByAggregateInput
    _avg?: MovementItemAvgOrderByAggregateInput
    _max?: MovementItemMaxOrderByAggregateInput
    _min?: MovementItemMinOrderByAggregateInput
    _sum?: MovementItemSumOrderByAggregateInput
  }

  export type MovementItemScalarWhereWithAggregatesInput = {
    AND?: MovementItemScalarWhereWithAggregatesInput | MovementItemScalarWhereWithAggregatesInput[]
    OR?: MovementItemScalarWhereWithAggregatesInput[]
    NOT?: MovementItemScalarWhereWithAggregatesInput | MovementItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MovementItem"> | string
    movementId?: StringWithAggregatesFilter<"MovementItem"> | string
    productId?: StringWithAggregatesFilter<"MovementItem"> | string
    batchId?: StringNullableWithAggregatesFilter<"MovementItem"> | string | null
    quantity?: IntWithAggregatesFilter<"MovementItem"> | number
    unitPrice?: IntWithAggregatesFilter<"MovementItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MovementItem"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fistName: string
    lastName?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    role: $Enums.AccountRole
    passwordHash: string
    createdLocally: boolean
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fistName: string
    lastName?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    role: $Enums.AccountRole
    passwordHash: string
    createdLocally: boolean
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fistName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdLocally?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fistName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdLocally?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyInput = {
    id?: string
    fistName: string
    lastName?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    role: $Enums.AccountRole
    passwordHash: string
    createdLocally: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fistName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdLocally?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fistName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumAccountRoleFieldUpdateOperationsInput | $Enums.AccountRole
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdLocally?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    contactName?: string | null
    tinNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: CustomerCreditCreateNestedManyWithoutCustomerInput
    movements?: MovementCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    contactName?: string | null
    tinNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: CustomerCreditUncheckedCreateNestedManyWithoutCustomerInput
    movements?: MovementUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    tinNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: CustomerCreditUpdateManyWithoutCustomerNestedInput
    movements?: MovementUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    tinNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: CustomerCreditUncheckedUpdateManyWithoutCustomerNestedInput
    movements?: MovementUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    contactName?: string | null
    tinNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    tinNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    tinNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    address?: string | null
    contactName?: string | null
    tinNumber?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: SupplierTransactionCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    address?: string | null
    contactName?: string | null
    tinNumber?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: SupplierTransactionUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    tinNumber?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: SupplierTransactionUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    tinNumber?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: SupplierTransactionUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    address?: string | null
    contactName?: string | null
    tinNumber?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    tinNumber?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    tinNumber?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierTransactionCreateInput = {
    id?: string
    type: $Enums.SupplierTransactionType
    amount: number
    reference?: string | null
    note?: string | null
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutTransactionsInput
  }

  export type SupplierTransactionUncheckedCreateInput = {
    id?: string
    supplierId: string
    type: $Enums.SupplierTransactionType
    amount: number
    reference?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type SupplierTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSupplierTransactionTypeFieldUpdateOperationsInput | $Enums.SupplierTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type SupplierTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    type?: EnumSupplierTransactionTypeFieldUpdateOperationsInput | $Enums.SupplierTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierTransactionCreateManyInput = {
    id?: string
    supplierId: string
    type: $Enums.SupplierTransactionType
    amount: number
    reference?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type SupplierTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSupplierTransactionTypeFieldUpdateOperationsInput | $Enums.SupplierTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    type?: EnumSupplierTransactionTypeFieldUpdateOperationsInput | $Enums.SupplierTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    sku?: string | null
    barcode?: string | null
    category?: string | null
    unit?: $Enums.Unit | null
    sellingPrice: number
    description?: string | null
    stock?: number
    lowStockAlert?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchCreateNestedManyWithoutProductInput
    movements?: MovementItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    sku?: string | null
    barcode?: string | null
    category?: string | null
    unit?: $Enums.Unit | null
    sellingPrice: number
    description?: string | null
    stock?: number
    lowStockAlert?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchUncheckedCreateNestedManyWithoutProductInput
    movements?: MovementItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableEnumUnitFieldUpdateOperationsInput | $Enums.Unit | null
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    lowStockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchUpdateManyWithoutProductNestedInput
    movements?: MovementItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableEnumUnitFieldUpdateOperationsInput | $Enums.Unit | null
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    lowStockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchUncheckedUpdateManyWithoutProductNestedInput
    movements?: MovementItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    sku?: string | null
    barcode?: string | null
    category?: string | null
    unit?: $Enums.Unit | null
    sellingPrice: number
    description?: string | null
    stock?: number
    lowStockAlert?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableEnumUnitFieldUpdateOperationsInput | $Enums.Unit | null
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    lowStockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableEnumUnitFieldUpdateOperationsInput | $Enums.Unit | null
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    lowStockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchCreateInput = {
    id?: string
    supplierId?: string | null
    batchNumber?: string | null
    invoiceNumber?: string | null
    quantity?: number
    remainingQty?: number
    costPrice?: number
    sellingPrice?: number
    manufactureDate: Date | string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutBatchesInput
    movements?: MovementItemCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateInput = {
    id?: string
    productId: string
    supplierId?: string | null
    batchNumber?: string | null
    invoiceNumber?: string | null
    quantity?: number
    remainingQty?: number
    costPrice?: number
    sellingPrice?: number
    manufactureDate: Date | string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: MovementItemUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutBatchesNestedInput
    movements?: MovementItemUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: MovementItemUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type BatchCreateManyInput = {
    id?: string
    productId: string
    supplierId?: string | null
    batchNumber?: string | null
    invoiceNumber?: string | null
    quantity?: number
    remainingQty?: number
    costPrice?: number
    sellingPrice?: number
    manufactureDate: Date | string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreditCreateInput = {
    id?: string
    amount: number
    paidAmount?: number
    isPaid?: boolean
    reference?: string | null
    note?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutCreditsInput
  }

  export type CustomerCreditUncheckedCreateInput = {
    id?: string
    customerId: string
    amount: number
    paidAmount?: number
    isPaid?: boolean
    reference?: string | null
    note?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCreditsNestedInput
  }

  export type CustomerCreditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreditCreateManyInput = {
    id?: string
    customerId: string
    amount: number
    paidAmount?: number
    isPaid?: boolean
    reference?: string | null
    note?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementCreateInput = {
    id?: string
    type: $Enums.MovementType
    note?: string | null
    issueNumber?: string | null
    paymentType: $Enums.PaymentType
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutMovementsInput
    items?: MovementItemCreateNestedManyWithoutMovementInput
  }

  export type MovementUncheckedCreateInput = {
    id?: string
    type: $Enums.MovementType
    note?: string | null
    issueNumber?: string | null
    paymentType: $Enums.PaymentType
    customerId?: string | null
    createdAt?: Date | string
    items?: MovementItemUncheckedCreateNestedManyWithoutMovementInput
  }

  export type MovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutMovementsNestedInput
    items?: MovementItemUpdateManyWithoutMovementNestedInput
  }

  export type MovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: MovementItemUncheckedUpdateManyWithoutMovementNestedInput
  }

  export type MovementCreateManyInput = {
    id?: string
    type: $Enums.MovementType
    note?: string | null
    issueNumber?: string | null
    paymentType: $Enums.PaymentType
    customerId?: string | null
    createdAt?: Date | string
  }

  export type MovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementItemCreateInput = {
    id?: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
    movement: MovementCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutMovementsInput
    batch?: BatchCreateNestedOneWithoutMovementsInput
  }

  export type MovementItemUncheckedCreateInput = {
    id?: string
    movementId: string
    productId: string
    batchId?: string | null
    quantity: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type MovementItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movement?: MovementUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutMovementsNestedInput
    batch?: BatchUpdateOneWithoutMovementsNestedInput
  }

  export type MovementItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    movementId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementItemCreateManyInput = {
    id?: string
    movementId: string
    productId: string
    batchId?: string | null
    quantity: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type MovementItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    movementId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumAccountRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountRole | EnumAccountRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountRoleFilter<$PrismaModel> | $Enums.AccountRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fistName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdLocally?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fistName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdLocally?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fistName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdLocally?: SortOrder
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

  export type EnumAccountRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountRole | EnumAccountRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountRoleWithAggregatesFilter<$PrismaModel> | $Enums.AccountRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountRoleFilter<$PrismaModel>
    _max?: NestedEnumAccountRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CustomerCreditListRelationFilter = {
    every?: CustomerCreditWhereInput
    some?: CustomerCreditWhereInput
    none?: CustomerCreditWhereInput
  }

  export type MovementListRelationFilter = {
    every?: MovementWhereInput
    some?: MovementWhereInput
    none?: MovementWhereInput
  }

  export type CustomerCreditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    contactName?: SortOrder
    tinNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    contactName?: SortOrder
    tinNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    contactName?: SortOrder
    tinNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type SupplierTransactionListRelationFilter = {
    every?: SupplierTransactionWhereInput
    some?: SupplierTransactionWhereInput
    none?: SupplierTransactionWhereInput
  }

  export type SupplierTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    contactName?: SortOrder
    tinNumber?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    contactName?: SortOrder
    tinNumber?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    contactName?: SortOrder
    tinNumber?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    balance?: SortOrder
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

  export type EnumSupplierTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SupplierTransactionType | EnumSupplierTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SupplierTransactionType[] | ListEnumSupplierTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SupplierTransactionType[] | ListEnumSupplierTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSupplierTransactionTypeFilter<$PrismaModel> | $Enums.SupplierTransactionType
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type SupplierTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SupplierTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumSupplierTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SupplierTransactionType | EnumSupplierTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SupplierTransactionType[] | ListEnumSupplierTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SupplierTransactionType[] | ListEnumSupplierTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSupplierTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SupplierTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSupplierTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumSupplierTransactionTypeFilter<$PrismaModel>
  }

  export type EnumUnitNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUnitNullableFilter<$PrismaModel> | $Enums.Unit | null
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

  export type BatchListRelationFilter = {
    every?: BatchWhereInput
    some?: BatchWhereInput
    none?: BatchWhereInput
  }

  export type MovementItemListRelationFilter = {
    every?: MovementItemWhereInput
    some?: MovementItemWhereInput
    none?: MovementItemWhereInput
  }

  export type BatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovementItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    sellingPrice?: SortOrder
    description?: SortOrder
    stock?: SortOrder
    lowStockAlert?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    sellingPrice?: SortOrder
    stock?: SortOrder
    lowStockAlert?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    sellingPrice?: SortOrder
    description?: SortOrder
    stock?: SortOrder
    lowStockAlert?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    sellingPrice?: SortOrder
    description?: SortOrder
    stock?: SortOrder
    lowStockAlert?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    sellingPrice?: SortOrder
    stock?: SortOrder
    lowStockAlert?: SortOrder
  }

  export type EnumUnitNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUnitNullableWithAggregatesFilter<$PrismaModel> | $Enums.Unit | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUnitNullableFilter<$PrismaModel>
    _max?: NestedEnumUnitNullableFilter<$PrismaModel>
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

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type BatchCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrder
    batchNumber?: SortOrder
    invoiceNumber?: SortOrder
    quantity?: SortOrder
    remainingQty?: SortOrder
    costPrice?: SortOrder
    sellingPrice?: SortOrder
    manufactureDate?: SortOrder
    expiryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BatchAvgOrderByAggregateInput = {
    quantity?: SortOrder
    remainingQty?: SortOrder
    costPrice?: SortOrder
    sellingPrice?: SortOrder
  }

  export type BatchMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrder
    batchNumber?: SortOrder
    invoiceNumber?: SortOrder
    quantity?: SortOrder
    remainingQty?: SortOrder
    costPrice?: SortOrder
    sellingPrice?: SortOrder
    manufactureDate?: SortOrder
    expiryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BatchMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrder
    batchNumber?: SortOrder
    invoiceNumber?: SortOrder
    quantity?: SortOrder
    remainingQty?: SortOrder
    costPrice?: SortOrder
    sellingPrice?: SortOrder
    manufactureDate?: SortOrder
    expiryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BatchSumOrderByAggregateInput = {
    quantity?: SortOrder
    remainingQty?: SortOrder
    costPrice?: SortOrder
    sellingPrice?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type CustomerCreditCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    paidAmount?: SortOrder
    isPaid?: SortOrder
    reference?: SortOrder
    note?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerCreditAvgOrderByAggregateInput = {
    amount?: SortOrder
    paidAmount?: SortOrder
  }

  export type CustomerCreditMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    paidAmount?: SortOrder
    isPaid?: SortOrder
    reference?: SortOrder
    note?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerCreditMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    paidAmount?: SortOrder
    isPaid?: SortOrder
    reference?: SortOrder
    note?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerCreditSumOrderByAggregateInput = {
    amount?: SortOrder
    paidAmount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type MovementCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    note?: SortOrder
    issueNumber?: SortOrder
    paymentType?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovementMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    note?: SortOrder
    issueNumber?: SortOrder
    paymentType?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovementMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    note?: SortOrder
    issueNumber?: SortOrder
    paymentType?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type MovementScalarRelationFilter = {
    is?: MovementWhereInput
    isNot?: MovementWhereInput
  }

  export type BatchNullableScalarRelationFilter = {
    is?: BatchWhereInput | null
    isNot?: BatchWhereInput | null
  }

  export type MovementItemCountOrderByAggregateInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    batchId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type MovementItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type MovementItemMaxOrderByAggregateInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    batchId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type MovementItemMinOrderByAggregateInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    batchId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type MovementItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumAccountRoleFieldUpdateOperationsInput = {
    set?: $Enums.AccountRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CustomerCreditCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerCreditCreateWithoutCustomerInput, CustomerCreditUncheckedCreateWithoutCustomerInput> | CustomerCreditCreateWithoutCustomerInput[] | CustomerCreditUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerCreditCreateOrConnectWithoutCustomerInput | CustomerCreditCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerCreditCreateManyCustomerInputEnvelope
    connect?: CustomerCreditWhereUniqueInput | CustomerCreditWhereUniqueInput[]
  }

  export type MovementCreateNestedManyWithoutCustomerInput = {
    create?: XOR<MovementCreateWithoutCustomerInput, MovementUncheckedCreateWithoutCustomerInput> | MovementCreateWithoutCustomerInput[] | MovementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutCustomerInput | MovementCreateOrConnectWithoutCustomerInput[]
    createMany?: MovementCreateManyCustomerInputEnvelope
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
  }

  export type CustomerCreditUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerCreditCreateWithoutCustomerInput, CustomerCreditUncheckedCreateWithoutCustomerInput> | CustomerCreditCreateWithoutCustomerInput[] | CustomerCreditUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerCreditCreateOrConnectWithoutCustomerInput | CustomerCreditCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerCreditCreateManyCustomerInputEnvelope
    connect?: CustomerCreditWhereUniqueInput | CustomerCreditWhereUniqueInput[]
  }

  export type MovementUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<MovementCreateWithoutCustomerInput, MovementUncheckedCreateWithoutCustomerInput> | MovementCreateWithoutCustomerInput[] | MovementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutCustomerInput | MovementCreateOrConnectWithoutCustomerInput[]
    createMany?: MovementCreateManyCustomerInputEnvelope
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
  }

  export type CustomerCreditUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerCreditCreateWithoutCustomerInput, CustomerCreditUncheckedCreateWithoutCustomerInput> | CustomerCreditCreateWithoutCustomerInput[] | CustomerCreditUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerCreditCreateOrConnectWithoutCustomerInput | CustomerCreditCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerCreditUpsertWithWhereUniqueWithoutCustomerInput | CustomerCreditUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerCreditCreateManyCustomerInputEnvelope
    set?: CustomerCreditWhereUniqueInput | CustomerCreditWhereUniqueInput[]
    disconnect?: CustomerCreditWhereUniqueInput | CustomerCreditWhereUniqueInput[]
    delete?: CustomerCreditWhereUniqueInput | CustomerCreditWhereUniqueInput[]
    connect?: CustomerCreditWhereUniqueInput | CustomerCreditWhereUniqueInput[]
    update?: CustomerCreditUpdateWithWhereUniqueWithoutCustomerInput | CustomerCreditUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerCreditUpdateManyWithWhereWithoutCustomerInput | CustomerCreditUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerCreditScalarWhereInput | CustomerCreditScalarWhereInput[]
  }

  export type MovementUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<MovementCreateWithoutCustomerInput, MovementUncheckedCreateWithoutCustomerInput> | MovementCreateWithoutCustomerInput[] | MovementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutCustomerInput | MovementCreateOrConnectWithoutCustomerInput[]
    upsert?: MovementUpsertWithWhereUniqueWithoutCustomerInput | MovementUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: MovementCreateManyCustomerInputEnvelope
    set?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    disconnect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    delete?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    update?: MovementUpdateWithWhereUniqueWithoutCustomerInput | MovementUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: MovementUpdateManyWithWhereWithoutCustomerInput | MovementUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: MovementScalarWhereInput | MovementScalarWhereInput[]
  }

  export type CustomerCreditUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerCreditCreateWithoutCustomerInput, CustomerCreditUncheckedCreateWithoutCustomerInput> | CustomerCreditCreateWithoutCustomerInput[] | CustomerCreditUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerCreditCreateOrConnectWithoutCustomerInput | CustomerCreditCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerCreditUpsertWithWhereUniqueWithoutCustomerInput | CustomerCreditUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerCreditCreateManyCustomerInputEnvelope
    set?: CustomerCreditWhereUniqueInput | CustomerCreditWhereUniqueInput[]
    disconnect?: CustomerCreditWhereUniqueInput | CustomerCreditWhereUniqueInput[]
    delete?: CustomerCreditWhereUniqueInput | CustomerCreditWhereUniqueInput[]
    connect?: CustomerCreditWhereUniqueInput | CustomerCreditWhereUniqueInput[]
    update?: CustomerCreditUpdateWithWhereUniqueWithoutCustomerInput | CustomerCreditUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerCreditUpdateManyWithWhereWithoutCustomerInput | CustomerCreditUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerCreditScalarWhereInput | CustomerCreditScalarWhereInput[]
  }

  export type MovementUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<MovementCreateWithoutCustomerInput, MovementUncheckedCreateWithoutCustomerInput> | MovementCreateWithoutCustomerInput[] | MovementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutCustomerInput | MovementCreateOrConnectWithoutCustomerInput[]
    upsert?: MovementUpsertWithWhereUniqueWithoutCustomerInput | MovementUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: MovementCreateManyCustomerInputEnvelope
    set?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    disconnect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    delete?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    update?: MovementUpdateWithWhereUniqueWithoutCustomerInput | MovementUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: MovementUpdateManyWithWhereWithoutCustomerInput | MovementUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: MovementScalarWhereInput | MovementScalarWhereInput[]
  }

  export type SupplierTransactionCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierTransactionCreateWithoutSupplierInput, SupplierTransactionUncheckedCreateWithoutSupplierInput> | SupplierTransactionCreateWithoutSupplierInput[] | SupplierTransactionUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierTransactionCreateOrConnectWithoutSupplierInput | SupplierTransactionCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierTransactionCreateManySupplierInputEnvelope
    connect?: SupplierTransactionWhereUniqueInput | SupplierTransactionWhereUniqueInput[]
  }

  export type SupplierTransactionUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierTransactionCreateWithoutSupplierInput, SupplierTransactionUncheckedCreateWithoutSupplierInput> | SupplierTransactionCreateWithoutSupplierInput[] | SupplierTransactionUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierTransactionCreateOrConnectWithoutSupplierInput | SupplierTransactionCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierTransactionCreateManySupplierInputEnvelope
    connect?: SupplierTransactionWhereUniqueInput | SupplierTransactionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SupplierTransactionUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierTransactionCreateWithoutSupplierInput, SupplierTransactionUncheckedCreateWithoutSupplierInput> | SupplierTransactionCreateWithoutSupplierInput[] | SupplierTransactionUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierTransactionCreateOrConnectWithoutSupplierInput | SupplierTransactionCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierTransactionUpsertWithWhereUniqueWithoutSupplierInput | SupplierTransactionUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierTransactionCreateManySupplierInputEnvelope
    set?: SupplierTransactionWhereUniqueInput | SupplierTransactionWhereUniqueInput[]
    disconnect?: SupplierTransactionWhereUniqueInput | SupplierTransactionWhereUniqueInput[]
    delete?: SupplierTransactionWhereUniqueInput | SupplierTransactionWhereUniqueInput[]
    connect?: SupplierTransactionWhereUniqueInput | SupplierTransactionWhereUniqueInput[]
    update?: SupplierTransactionUpdateWithWhereUniqueWithoutSupplierInput | SupplierTransactionUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierTransactionUpdateManyWithWhereWithoutSupplierInput | SupplierTransactionUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierTransactionScalarWhereInput | SupplierTransactionScalarWhereInput[]
  }

  export type SupplierTransactionUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierTransactionCreateWithoutSupplierInput, SupplierTransactionUncheckedCreateWithoutSupplierInput> | SupplierTransactionCreateWithoutSupplierInput[] | SupplierTransactionUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierTransactionCreateOrConnectWithoutSupplierInput | SupplierTransactionCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierTransactionUpsertWithWhereUniqueWithoutSupplierInput | SupplierTransactionUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierTransactionCreateManySupplierInputEnvelope
    set?: SupplierTransactionWhereUniqueInput | SupplierTransactionWhereUniqueInput[]
    disconnect?: SupplierTransactionWhereUniqueInput | SupplierTransactionWhereUniqueInput[]
    delete?: SupplierTransactionWhereUniqueInput | SupplierTransactionWhereUniqueInput[]
    connect?: SupplierTransactionWhereUniqueInput | SupplierTransactionWhereUniqueInput[]
    update?: SupplierTransactionUpdateWithWhereUniqueWithoutSupplierInput | SupplierTransactionUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierTransactionUpdateManyWithWhereWithoutSupplierInput | SupplierTransactionUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierTransactionScalarWhereInput | SupplierTransactionScalarWhereInput[]
  }

  export type SupplierCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<SupplierCreateWithoutTransactionsInput, SupplierUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutTransactionsInput
    connect?: SupplierWhereUniqueInput
  }

  export type EnumSupplierTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SupplierTransactionType
  }

  export type SupplierUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<SupplierCreateWithoutTransactionsInput, SupplierUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutTransactionsInput
    upsert?: SupplierUpsertWithoutTransactionsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutTransactionsInput, SupplierUpdateWithoutTransactionsInput>, SupplierUncheckedUpdateWithoutTransactionsInput>
  }

  export type BatchCreateNestedManyWithoutProductInput = {
    create?: XOR<BatchCreateWithoutProductInput, BatchUncheckedCreateWithoutProductInput> | BatchCreateWithoutProductInput[] | BatchUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutProductInput | BatchCreateOrConnectWithoutProductInput[]
    createMany?: BatchCreateManyProductInputEnvelope
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type MovementItemCreateNestedManyWithoutProductInput = {
    create?: XOR<MovementItemCreateWithoutProductInput, MovementItemUncheckedCreateWithoutProductInput> | MovementItemCreateWithoutProductInput[] | MovementItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutProductInput | MovementItemCreateOrConnectWithoutProductInput[]
    createMany?: MovementItemCreateManyProductInputEnvelope
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
  }

  export type BatchUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<BatchCreateWithoutProductInput, BatchUncheckedCreateWithoutProductInput> | BatchCreateWithoutProductInput[] | BatchUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutProductInput | BatchCreateOrConnectWithoutProductInput[]
    createMany?: BatchCreateManyProductInputEnvelope
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type MovementItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<MovementItemCreateWithoutProductInput, MovementItemUncheckedCreateWithoutProductInput> | MovementItemCreateWithoutProductInput[] | MovementItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutProductInput | MovementItemCreateOrConnectWithoutProductInput[]
    createMany?: MovementItemCreateManyProductInputEnvelope
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
  }

  export type NullableEnumUnitFieldUpdateOperationsInput = {
    set?: $Enums.Unit | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BatchUpdateManyWithoutProductNestedInput = {
    create?: XOR<BatchCreateWithoutProductInput, BatchUncheckedCreateWithoutProductInput> | BatchCreateWithoutProductInput[] | BatchUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutProductInput | BatchCreateOrConnectWithoutProductInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutProductInput | BatchUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BatchCreateManyProductInputEnvelope
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutProductInput | BatchUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutProductInput | BatchUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type MovementItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<MovementItemCreateWithoutProductInput, MovementItemUncheckedCreateWithoutProductInput> | MovementItemCreateWithoutProductInput[] | MovementItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutProductInput | MovementItemCreateOrConnectWithoutProductInput[]
    upsert?: MovementItemUpsertWithWhereUniqueWithoutProductInput | MovementItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: MovementItemCreateManyProductInputEnvelope
    set?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    disconnect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    delete?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    update?: MovementItemUpdateWithWhereUniqueWithoutProductInput | MovementItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: MovementItemUpdateManyWithWhereWithoutProductInput | MovementItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: MovementItemScalarWhereInput | MovementItemScalarWhereInput[]
  }

  export type BatchUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<BatchCreateWithoutProductInput, BatchUncheckedCreateWithoutProductInput> | BatchCreateWithoutProductInput[] | BatchUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutProductInput | BatchCreateOrConnectWithoutProductInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutProductInput | BatchUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BatchCreateManyProductInputEnvelope
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutProductInput | BatchUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutProductInput | BatchUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type MovementItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<MovementItemCreateWithoutProductInput, MovementItemUncheckedCreateWithoutProductInput> | MovementItemCreateWithoutProductInput[] | MovementItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutProductInput | MovementItemCreateOrConnectWithoutProductInput[]
    upsert?: MovementItemUpsertWithWhereUniqueWithoutProductInput | MovementItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: MovementItemCreateManyProductInputEnvelope
    set?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    disconnect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    delete?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    update?: MovementItemUpdateWithWhereUniqueWithoutProductInput | MovementItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: MovementItemUpdateManyWithWhereWithoutProductInput | MovementItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: MovementItemScalarWhereInput | MovementItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutBatchesInput = {
    create?: XOR<ProductCreateWithoutBatchesInput, ProductUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBatchesInput
    connect?: ProductWhereUniqueInput
  }

  export type MovementItemCreateNestedManyWithoutBatchInput = {
    create?: XOR<MovementItemCreateWithoutBatchInput, MovementItemUncheckedCreateWithoutBatchInput> | MovementItemCreateWithoutBatchInput[] | MovementItemUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutBatchInput | MovementItemCreateOrConnectWithoutBatchInput[]
    createMany?: MovementItemCreateManyBatchInputEnvelope
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
  }

  export type MovementItemUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<MovementItemCreateWithoutBatchInput, MovementItemUncheckedCreateWithoutBatchInput> | MovementItemCreateWithoutBatchInput[] | MovementItemUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutBatchInput | MovementItemCreateOrConnectWithoutBatchInput[]
    createMany?: MovementItemCreateManyBatchInputEnvelope
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutBatchesNestedInput = {
    create?: XOR<ProductCreateWithoutBatchesInput, ProductUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBatchesInput
    upsert?: ProductUpsertWithoutBatchesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutBatchesInput, ProductUpdateWithoutBatchesInput>, ProductUncheckedUpdateWithoutBatchesInput>
  }

  export type MovementItemUpdateManyWithoutBatchNestedInput = {
    create?: XOR<MovementItemCreateWithoutBatchInput, MovementItemUncheckedCreateWithoutBatchInput> | MovementItemCreateWithoutBatchInput[] | MovementItemUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutBatchInput | MovementItemCreateOrConnectWithoutBatchInput[]
    upsert?: MovementItemUpsertWithWhereUniqueWithoutBatchInput | MovementItemUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: MovementItemCreateManyBatchInputEnvelope
    set?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    disconnect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    delete?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    update?: MovementItemUpdateWithWhereUniqueWithoutBatchInput | MovementItemUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: MovementItemUpdateManyWithWhereWithoutBatchInput | MovementItemUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: MovementItemScalarWhereInput | MovementItemScalarWhereInput[]
  }

  export type MovementItemUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<MovementItemCreateWithoutBatchInput, MovementItemUncheckedCreateWithoutBatchInput> | MovementItemCreateWithoutBatchInput[] | MovementItemUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutBatchInput | MovementItemCreateOrConnectWithoutBatchInput[]
    upsert?: MovementItemUpsertWithWhereUniqueWithoutBatchInput | MovementItemUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: MovementItemCreateManyBatchInputEnvelope
    set?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    disconnect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    delete?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    update?: MovementItemUpdateWithWhereUniqueWithoutBatchInput | MovementItemUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: MovementItemUpdateManyWithWhereWithoutBatchInput | MovementItemUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: MovementItemScalarWhereInput | MovementItemScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutCreditsInput = {
    create?: XOR<CustomerCreateWithoutCreditsInput, CustomerUncheckedCreateWithoutCreditsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCreditsInput
    connect?: CustomerWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CustomerUpdateOneRequiredWithoutCreditsNestedInput = {
    create?: XOR<CustomerCreateWithoutCreditsInput, CustomerUncheckedCreateWithoutCreditsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCreditsInput
    upsert?: CustomerUpsertWithoutCreditsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutCreditsInput, CustomerUpdateWithoutCreditsInput>, CustomerUncheckedUpdateWithoutCreditsInput>
  }

  export type CustomerCreateNestedOneWithoutMovementsInput = {
    create?: XOR<CustomerCreateWithoutMovementsInput, CustomerUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutMovementsInput
    connect?: CustomerWhereUniqueInput
  }

  export type MovementItemCreateNestedManyWithoutMovementInput = {
    create?: XOR<MovementItemCreateWithoutMovementInput, MovementItemUncheckedCreateWithoutMovementInput> | MovementItemCreateWithoutMovementInput[] | MovementItemUncheckedCreateWithoutMovementInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutMovementInput | MovementItemCreateOrConnectWithoutMovementInput[]
    createMany?: MovementItemCreateManyMovementInputEnvelope
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
  }

  export type MovementItemUncheckedCreateNestedManyWithoutMovementInput = {
    create?: XOR<MovementItemCreateWithoutMovementInput, MovementItemUncheckedCreateWithoutMovementInput> | MovementItemCreateWithoutMovementInput[] | MovementItemUncheckedCreateWithoutMovementInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutMovementInput | MovementItemCreateOrConnectWithoutMovementInput[]
    createMany?: MovementItemCreateManyMovementInputEnvelope
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
  }

  export type EnumMovementTypeFieldUpdateOperationsInput = {
    set?: $Enums.MovementType
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type CustomerUpdateOneWithoutMovementsNestedInput = {
    create?: XOR<CustomerCreateWithoutMovementsInput, CustomerUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutMovementsInput
    upsert?: CustomerUpsertWithoutMovementsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutMovementsInput, CustomerUpdateWithoutMovementsInput>, CustomerUncheckedUpdateWithoutMovementsInput>
  }

  export type MovementItemUpdateManyWithoutMovementNestedInput = {
    create?: XOR<MovementItemCreateWithoutMovementInput, MovementItemUncheckedCreateWithoutMovementInput> | MovementItemCreateWithoutMovementInput[] | MovementItemUncheckedCreateWithoutMovementInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutMovementInput | MovementItemCreateOrConnectWithoutMovementInput[]
    upsert?: MovementItemUpsertWithWhereUniqueWithoutMovementInput | MovementItemUpsertWithWhereUniqueWithoutMovementInput[]
    createMany?: MovementItemCreateManyMovementInputEnvelope
    set?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    disconnect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    delete?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    update?: MovementItemUpdateWithWhereUniqueWithoutMovementInput | MovementItemUpdateWithWhereUniqueWithoutMovementInput[]
    updateMany?: MovementItemUpdateManyWithWhereWithoutMovementInput | MovementItemUpdateManyWithWhereWithoutMovementInput[]
    deleteMany?: MovementItemScalarWhereInput | MovementItemScalarWhereInput[]
  }

  export type MovementItemUncheckedUpdateManyWithoutMovementNestedInput = {
    create?: XOR<MovementItemCreateWithoutMovementInput, MovementItemUncheckedCreateWithoutMovementInput> | MovementItemCreateWithoutMovementInput[] | MovementItemUncheckedCreateWithoutMovementInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutMovementInput | MovementItemCreateOrConnectWithoutMovementInput[]
    upsert?: MovementItemUpsertWithWhereUniqueWithoutMovementInput | MovementItemUpsertWithWhereUniqueWithoutMovementInput[]
    createMany?: MovementItemCreateManyMovementInputEnvelope
    set?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    disconnect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    delete?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    update?: MovementItemUpdateWithWhereUniqueWithoutMovementInput | MovementItemUpdateWithWhereUniqueWithoutMovementInput[]
    updateMany?: MovementItemUpdateManyWithWhereWithoutMovementInput | MovementItemUpdateManyWithWhereWithoutMovementInput[]
    deleteMany?: MovementItemScalarWhereInput | MovementItemScalarWhereInput[]
  }

  export type MovementCreateNestedOneWithoutItemsInput = {
    create?: XOR<MovementCreateWithoutItemsInput, MovementUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MovementCreateOrConnectWithoutItemsInput
    connect?: MovementWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutMovementsInput = {
    create?: XOR<ProductCreateWithoutMovementsInput, ProductUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMovementsInput
    connect?: ProductWhereUniqueInput
  }

  export type BatchCreateNestedOneWithoutMovementsInput = {
    create?: XOR<BatchCreateWithoutMovementsInput, BatchUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: BatchCreateOrConnectWithoutMovementsInput
    connect?: BatchWhereUniqueInput
  }

  export type MovementUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<MovementCreateWithoutItemsInput, MovementUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MovementCreateOrConnectWithoutItemsInput
    upsert?: MovementUpsertWithoutItemsInput
    connect?: MovementWhereUniqueInput
    update?: XOR<XOR<MovementUpdateToOneWithWhereWithoutItemsInput, MovementUpdateWithoutItemsInput>, MovementUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: XOR<ProductCreateWithoutMovementsInput, ProductUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMovementsInput
    upsert?: ProductUpsertWithoutMovementsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutMovementsInput, ProductUpdateWithoutMovementsInput>, ProductUncheckedUpdateWithoutMovementsInput>
  }

  export type BatchUpdateOneWithoutMovementsNestedInput = {
    create?: XOR<BatchCreateWithoutMovementsInput, BatchUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: BatchCreateOrConnectWithoutMovementsInput
    upsert?: BatchUpsertWithoutMovementsInput
    disconnect?: BatchWhereInput | boolean
    delete?: BatchWhereInput | boolean
    connect?: BatchWhereUniqueInput
    update?: XOR<XOR<BatchUpdateToOneWithWhereWithoutMovementsInput, BatchUpdateWithoutMovementsInput>, BatchUncheckedUpdateWithoutMovementsInput>
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

  export type NestedEnumAccountRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountRole | EnumAccountRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountRoleFilter<$PrismaModel> | $Enums.AccountRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumAccountRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountRole | EnumAccountRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountRole[] | ListEnumAccountRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountRoleWithAggregatesFilter<$PrismaModel> | $Enums.AccountRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountRoleFilter<$PrismaModel>
    _max?: NestedEnumAccountRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumSupplierTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SupplierTransactionType | EnumSupplierTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SupplierTransactionType[] | ListEnumSupplierTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SupplierTransactionType[] | ListEnumSupplierTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSupplierTransactionTypeFilter<$PrismaModel> | $Enums.SupplierTransactionType
  }

  export type NestedEnumSupplierTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SupplierTransactionType | EnumSupplierTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SupplierTransactionType[] | ListEnumSupplierTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SupplierTransactionType[] | ListEnumSupplierTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSupplierTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SupplierTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSupplierTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumSupplierTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumUnitNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUnitNullableFilter<$PrismaModel> | $Enums.Unit | null
  }

  export type NestedEnumUnitNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel> | null
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUnitNullableWithAggregatesFilter<$PrismaModel> | $Enums.Unit | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUnitNullableFilter<$PrismaModel>
    _max?: NestedEnumUnitNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type CustomerCreditCreateWithoutCustomerInput = {
    id?: string
    amount: number
    paidAmount?: number
    isPaid?: boolean
    reference?: string | null
    note?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreditUncheckedCreateWithoutCustomerInput = {
    id?: string
    amount: number
    paidAmount?: number
    isPaid?: boolean
    reference?: string | null
    note?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreditCreateOrConnectWithoutCustomerInput = {
    where: CustomerCreditWhereUniqueInput
    create: XOR<CustomerCreditCreateWithoutCustomerInput, CustomerCreditUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerCreditCreateManyCustomerInputEnvelope = {
    data: CustomerCreditCreateManyCustomerInput | CustomerCreditCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type MovementCreateWithoutCustomerInput = {
    id?: string
    type: $Enums.MovementType
    note?: string | null
    issueNumber?: string | null
    paymentType: $Enums.PaymentType
    createdAt?: Date | string
    items?: MovementItemCreateNestedManyWithoutMovementInput
  }

  export type MovementUncheckedCreateWithoutCustomerInput = {
    id?: string
    type: $Enums.MovementType
    note?: string | null
    issueNumber?: string | null
    paymentType: $Enums.PaymentType
    createdAt?: Date | string
    items?: MovementItemUncheckedCreateNestedManyWithoutMovementInput
  }

  export type MovementCreateOrConnectWithoutCustomerInput = {
    where: MovementWhereUniqueInput
    create: XOR<MovementCreateWithoutCustomerInput, MovementUncheckedCreateWithoutCustomerInput>
  }

  export type MovementCreateManyCustomerInputEnvelope = {
    data: MovementCreateManyCustomerInput | MovementCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreditUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerCreditWhereUniqueInput
    update: XOR<CustomerCreditUpdateWithoutCustomerInput, CustomerCreditUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerCreditCreateWithoutCustomerInput, CustomerCreditUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerCreditUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerCreditWhereUniqueInput
    data: XOR<CustomerCreditUpdateWithoutCustomerInput, CustomerCreditUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerCreditUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerCreditScalarWhereInput
    data: XOR<CustomerCreditUpdateManyMutationInput, CustomerCreditUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreditScalarWhereInput = {
    AND?: CustomerCreditScalarWhereInput | CustomerCreditScalarWhereInput[]
    OR?: CustomerCreditScalarWhereInput[]
    NOT?: CustomerCreditScalarWhereInput | CustomerCreditScalarWhereInput[]
    id?: StringFilter<"CustomerCredit"> | string
    customerId?: StringFilter<"CustomerCredit"> | string
    amount?: FloatFilter<"CustomerCredit"> | number
    paidAmount?: FloatFilter<"CustomerCredit"> | number
    isPaid?: BoolFilter<"CustomerCredit"> | boolean
    reference?: StringNullableFilter<"CustomerCredit"> | string | null
    note?: StringNullableFilter<"CustomerCredit"> | string | null
    dueDate?: DateTimeNullableFilter<"CustomerCredit"> | Date | string | null
    createdAt?: DateTimeFilter<"CustomerCredit"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerCredit"> | Date | string
  }

  export type MovementUpsertWithWhereUniqueWithoutCustomerInput = {
    where: MovementWhereUniqueInput
    update: XOR<MovementUpdateWithoutCustomerInput, MovementUncheckedUpdateWithoutCustomerInput>
    create: XOR<MovementCreateWithoutCustomerInput, MovementUncheckedCreateWithoutCustomerInput>
  }

  export type MovementUpdateWithWhereUniqueWithoutCustomerInput = {
    where: MovementWhereUniqueInput
    data: XOR<MovementUpdateWithoutCustomerInput, MovementUncheckedUpdateWithoutCustomerInput>
  }

  export type MovementUpdateManyWithWhereWithoutCustomerInput = {
    where: MovementScalarWhereInput
    data: XOR<MovementUpdateManyMutationInput, MovementUncheckedUpdateManyWithoutCustomerInput>
  }

  export type MovementScalarWhereInput = {
    AND?: MovementScalarWhereInput | MovementScalarWhereInput[]
    OR?: MovementScalarWhereInput[]
    NOT?: MovementScalarWhereInput | MovementScalarWhereInput[]
    id?: StringFilter<"Movement"> | string
    type?: EnumMovementTypeFilter<"Movement"> | $Enums.MovementType
    note?: StringNullableFilter<"Movement"> | string | null
    issueNumber?: StringNullableFilter<"Movement"> | string | null
    paymentType?: EnumPaymentTypeFilter<"Movement"> | $Enums.PaymentType
    customerId?: StringNullableFilter<"Movement"> | string | null
    createdAt?: DateTimeFilter<"Movement"> | Date | string
  }

  export type SupplierTransactionCreateWithoutSupplierInput = {
    id?: string
    type: $Enums.SupplierTransactionType
    amount: number
    reference?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type SupplierTransactionUncheckedCreateWithoutSupplierInput = {
    id?: string
    type: $Enums.SupplierTransactionType
    amount: number
    reference?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type SupplierTransactionCreateOrConnectWithoutSupplierInput = {
    where: SupplierTransactionWhereUniqueInput
    create: XOR<SupplierTransactionCreateWithoutSupplierInput, SupplierTransactionUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierTransactionCreateManySupplierInputEnvelope = {
    data: SupplierTransactionCreateManySupplierInput | SupplierTransactionCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type SupplierTransactionUpsertWithWhereUniqueWithoutSupplierInput = {
    where: SupplierTransactionWhereUniqueInput
    update: XOR<SupplierTransactionUpdateWithoutSupplierInput, SupplierTransactionUncheckedUpdateWithoutSupplierInput>
    create: XOR<SupplierTransactionCreateWithoutSupplierInput, SupplierTransactionUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierTransactionUpdateWithWhereUniqueWithoutSupplierInput = {
    where: SupplierTransactionWhereUniqueInput
    data: XOR<SupplierTransactionUpdateWithoutSupplierInput, SupplierTransactionUncheckedUpdateWithoutSupplierInput>
  }

  export type SupplierTransactionUpdateManyWithWhereWithoutSupplierInput = {
    where: SupplierTransactionScalarWhereInput
    data: XOR<SupplierTransactionUpdateManyMutationInput, SupplierTransactionUncheckedUpdateManyWithoutSupplierInput>
  }

  export type SupplierTransactionScalarWhereInput = {
    AND?: SupplierTransactionScalarWhereInput | SupplierTransactionScalarWhereInput[]
    OR?: SupplierTransactionScalarWhereInput[]
    NOT?: SupplierTransactionScalarWhereInput | SupplierTransactionScalarWhereInput[]
    id?: StringFilter<"SupplierTransaction"> | string
    supplierId?: StringFilter<"SupplierTransaction"> | string
    type?: EnumSupplierTransactionTypeFilter<"SupplierTransaction"> | $Enums.SupplierTransactionType
    amount?: FloatFilter<"SupplierTransaction"> | number
    reference?: StringNullableFilter<"SupplierTransaction"> | string | null
    note?: StringNullableFilter<"SupplierTransaction"> | string | null
    createdAt?: DateTimeFilter<"SupplierTransaction"> | Date | string
  }

  export type SupplierCreateWithoutTransactionsInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    address?: string | null
    contactName?: string | null
    tinNumber?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    address?: string | null
    contactName?: string | null
    tinNumber?: string | null
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierCreateOrConnectWithoutTransactionsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutTransactionsInput, SupplierUncheckedCreateWithoutTransactionsInput>
  }

  export type SupplierUpsertWithoutTransactionsInput = {
    update: XOR<SupplierUpdateWithoutTransactionsInput, SupplierUncheckedUpdateWithoutTransactionsInput>
    create: XOR<SupplierCreateWithoutTransactionsInput, SupplierUncheckedCreateWithoutTransactionsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutTransactionsInput, SupplierUncheckedUpdateWithoutTransactionsInput>
  }

  export type SupplierUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    tinNumber?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    tinNumber?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchCreateWithoutProductInput = {
    id?: string
    supplierId?: string | null
    batchNumber?: string | null
    invoiceNumber?: string | null
    quantity?: number
    remainingQty?: number
    costPrice?: number
    sellingPrice?: number
    manufactureDate: Date | string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: MovementItemCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateWithoutProductInput = {
    id?: string
    supplierId?: string | null
    batchNumber?: string | null
    invoiceNumber?: string | null
    quantity?: number
    remainingQty?: number
    costPrice?: number
    sellingPrice?: number
    manufactureDate: Date | string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: MovementItemUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchCreateOrConnectWithoutProductInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutProductInput, BatchUncheckedCreateWithoutProductInput>
  }

  export type BatchCreateManyProductInputEnvelope = {
    data: BatchCreateManyProductInput | BatchCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type MovementItemCreateWithoutProductInput = {
    id?: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
    movement: MovementCreateNestedOneWithoutItemsInput
    batch?: BatchCreateNestedOneWithoutMovementsInput
  }

  export type MovementItemUncheckedCreateWithoutProductInput = {
    id?: string
    movementId: string
    batchId?: string | null
    quantity: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type MovementItemCreateOrConnectWithoutProductInput = {
    where: MovementItemWhereUniqueInput
    create: XOR<MovementItemCreateWithoutProductInput, MovementItemUncheckedCreateWithoutProductInput>
  }

  export type MovementItemCreateManyProductInputEnvelope = {
    data: MovementItemCreateManyProductInput | MovementItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BatchUpsertWithWhereUniqueWithoutProductInput = {
    where: BatchWhereUniqueInput
    update: XOR<BatchUpdateWithoutProductInput, BatchUncheckedUpdateWithoutProductInput>
    create: XOR<BatchCreateWithoutProductInput, BatchUncheckedCreateWithoutProductInput>
  }

  export type BatchUpdateWithWhereUniqueWithoutProductInput = {
    where: BatchWhereUniqueInput
    data: XOR<BatchUpdateWithoutProductInput, BatchUncheckedUpdateWithoutProductInput>
  }

  export type BatchUpdateManyWithWhereWithoutProductInput = {
    where: BatchScalarWhereInput
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyWithoutProductInput>
  }

  export type BatchScalarWhereInput = {
    AND?: BatchScalarWhereInput | BatchScalarWhereInput[]
    OR?: BatchScalarWhereInput[]
    NOT?: BatchScalarWhereInput | BatchScalarWhereInput[]
    id?: StringFilter<"Batch"> | string
    productId?: StringFilter<"Batch"> | string
    supplierId?: StringNullableFilter<"Batch"> | string | null
    batchNumber?: StringNullableFilter<"Batch"> | string | null
    invoiceNumber?: StringNullableFilter<"Batch"> | string | null
    quantity?: IntFilter<"Batch"> | number
    remainingQty?: IntFilter<"Batch"> | number
    costPrice?: FloatFilter<"Batch"> | number
    sellingPrice?: FloatFilter<"Batch"> | number
    manufactureDate?: DateTimeFilter<"Batch"> | Date | string
    expiryDate?: DateTimeFilter<"Batch"> | Date | string
    createdAt?: DateTimeFilter<"Batch"> | Date | string
    updatedAt?: DateTimeFilter<"Batch"> | Date | string
  }

  export type MovementItemUpsertWithWhereUniqueWithoutProductInput = {
    where: MovementItemWhereUniqueInput
    update: XOR<MovementItemUpdateWithoutProductInput, MovementItemUncheckedUpdateWithoutProductInput>
    create: XOR<MovementItemCreateWithoutProductInput, MovementItemUncheckedCreateWithoutProductInput>
  }

  export type MovementItemUpdateWithWhereUniqueWithoutProductInput = {
    where: MovementItemWhereUniqueInput
    data: XOR<MovementItemUpdateWithoutProductInput, MovementItemUncheckedUpdateWithoutProductInput>
  }

  export type MovementItemUpdateManyWithWhereWithoutProductInput = {
    where: MovementItemScalarWhereInput
    data: XOR<MovementItemUpdateManyMutationInput, MovementItemUncheckedUpdateManyWithoutProductInput>
  }

  export type MovementItemScalarWhereInput = {
    AND?: MovementItemScalarWhereInput | MovementItemScalarWhereInput[]
    OR?: MovementItemScalarWhereInput[]
    NOT?: MovementItemScalarWhereInput | MovementItemScalarWhereInput[]
    id?: StringFilter<"MovementItem"> | string
    movementId?: StringFilter<"MovementItem"> | string
    productId?: StringFilter<"MovementItem"> | string
    batchId?: StringNullableFilter<"MovementItem"> | string | null
    quantity?: IntFilter<"MovementItem"> | number
    unitPrice?: IntFilter<"MovementItem"> | number
    createdAt?: DateTimeFilter<"MovementItem"> | Date | string
  }

  export type ProductCreateWithoutBatchesInput = {
    id?: string
    name: string
    sku?: string | null
    barcode?: string | null
    category?: string | null
    unit?: $Enums.Unit | null
    sellingPrice: number
    description?: string | null
    stock?: number
    lowStockAlert?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: MovementItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBatchesInput = {
    id?: string
    name: string
    sku?: string | null
    barcode?: string | null
    category?: string | null
    unit?: $Enums.Unit | null
    sellingPrice: number
    description?: string | null
    stock?: number
    lowStockAlert?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: MovementItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBatchesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBatchesInput, ProductUncheckedCreateWithoutBatchesInput>
  }

  export type MovementItemCreateWithoutBatchInput = {
    id?: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
    movement: MovementCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutMovementsInput
  }

  export type MovementItemUncheckedCreateWithoutBatchInput = {
    id?: string
    movementId: string
    productId: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type MovementItemCreateOrConnectWithoutBatchInput = {
    where: MovementItemWhereUniqueInput
    create: XOR<MovementItemCreateWithoutBatchInput, MovementItemUncheckedCreateWithoutBatchInput>
  }

  export type MovementItemCreateManyBatchInputEnvelope = {
    data: MovementItemCreateManyBatchInput | MovementItemCreateManyBatchInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutBatchesInput = {
    update: XOR<ProductUpdateWithoutBatchesInput, ProductUncheckedUpdateWithoutBatchesInput>
    create: XOR<ProductCreateWithoutBatchesInput, ProductUncheckedCreateWithoutBatchesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutBatchesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutBatchesInput, ProductUncheckedUpdateWithoutBatchesInput>
  }

  export type ProductUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableEnumUnitFieldUpdateOperationsInput | $Enums.Unit | null
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    lowStockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: MovementItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableEnumUnitFieldUpdateOperationsInput | $Enums.Unit | null
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    lowStockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: MovementItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type MovementItemUpsertWithWhereUniqueWithoutBatchInput = {
    where: MovementItemWhereUniqueInput
    update: XOR<MovementItemUpdateWithoutBatchInput, MovementItemUncheckedUpdateWithoutBatchInput>
    create: XOR<MovementItemCreateWithoutBatchInput, MovementItemUncheckedCreateWithoutBatchInput>
  }

  export type MovementItemUpdateWithWhereUniqueWithoutBatchInput = {
    where: MovementItemWhereUniqueInput
    data: XOR<MovementItemUpdateWithoutBatchInput, MovementItemUncheckedUpdateWithoutBatchInput>
  }

  export type MovementItemUpdateManyWithWhereWithoutBatchInput = {
    where: MovementItemScalarWhereInput
    data: XOR<MovementItemUpdateManyMutationInput, MovementItemUncheckedUpdateManyWithoutBatchInput>
  }

  export type CustomerCreateWithoutCreditsInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    contactName?: string | null
    tinNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: MovementCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutCreditsInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    contactName?: string | null
    tinNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: MovementUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutCreditsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCreditsInput, CustomerUncheckedCreateWithoutCreditsInput>
  }

  export type CustomerUpsertWithoutCreditsInput = {
    update: XOR<CustomerUpdateWithoutCreditsInput, CustomerUncheckedUpdateWithoutCreditsInput>
    create: XOR<CustomerCreateWithoutCreditsInput, CustomerUncheckedCreateWithoutCreditsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutCreditsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutCreditsInput, CustomerUncheckedUpdateWithoutCreditsInput>
  }

  export type CustomerUpdateWithoutCreditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    tinNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: MovementUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCreditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    tinNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: MovementUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutMovementsInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    contactName?: string | null
    tinNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: CustomerCreditCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutMovementsInput = {
    id?: string
    name: string
    phone?: string | null
    address?: string | null
    contactName?: string | null
    tinNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: CustomerCreditUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutMovementsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutMovementsInput, CustomerUncheckedCreateWithoutMovementsInput>
  }

  export type MovementItemCreateWithoutMovementInput = {
    id?: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutMovementsInput
    batch?: BatchCreateNestedOneWithoutMovementsInput
  }

  export type MovementItemUncheckedCreateWithoutMovementInput = {
    id?: string
    productId: string
    batchId?: string | null
    quantity: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type MovementItemCreateOrConnectWithoutMovementInput = {
    where: MovementItemWhereUniqueInput
    create: XOR<MovementItemCreateWithoutMovementInput, MovementItemUncheckedCreateWithoutMovementInput>
  }

  export type MovementItemCreateManyMovementInputEnvelope = {
    data: MovementItemCreateManyMovementInput | MovementItemCreateManyMovementInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutMovementsInput = {
    update: XOR<CustomerUpdateWithoutMovementsInput, CustomerUncheckedUpdateWithoutMovementsInput>
    create: XOR<CustomerCreateWithoutMovementsInput, CustomerUncheckedCreateWithoutMovementsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutMovementsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutMovementsInput, CustomerUncheckedUpdateWithoutMovementsInput>
  }

  export type CustomerUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    tinNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: CustomerCreditUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    tinNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: CustomerCreditUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type MovementItemUpsertWithWhereUniqueWithoutMovementInput = {
    where: MovementItemWhereUniqueInput
    update: XOR<MovementItemUpdateWithoutMovementInput, MovementItemUncheckedUpdateWithoutMovementInput>
    create: XOR<MovementItemCreateWithoutMovementInput, MovementItemUncheckedCreateWithoutMovementInput>
  }

  export type MovementItemUpdateWithWhereUniqueWithoutMovementInput = {
    where: MovementItemWhereUniqueInput
    data: XOR<MovementItemUpdateWithoutMovementInput, MovementItemUncheckedUpdateWithoutMovementInput>
  }

  export type MovementItemUpdateManyWithWhereWithoutMovementInput = {
    where: MovementItemScalarWhereInput
    data: XOR<MovementItemUpdateManyMutationInput, MovementItemUncheckedUpdateManyWithoutMovementInput>
  }

  export type MovementCreateWithoutItemsInput = {
    id?: string
    type: $Enums.MovementType
    note?: string | null
    issueNumber?: string | null
    paymentType: $Enums.PaymentType
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutMovementsInput
  }

  export type MovementUncheckedCreateWithoutItemsInput = {
    id?: string
    type: $Enums.MovementType
    note?: string | null
    issueNumber?: string | null
    paymentType: $Enums.PaymentType
    customerId?: string | null
    createdAt?: Date | string
  }

  export type MovementCreateOrConnectWithoutItemsInput = {
    where: MovementWhereUniqueInput
    create: XOR<MovementCreateWithoutItemsInput, MovementUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutMovementsInput = {
    id?: string
    name: string
    sku?: string | null
    barcode?: string | null
    category?: string | null
    unit?: $Enums.Unit | null
    sellingPrice: number
    description?: string | null
    stock?: number
    lowStockAlert?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutMovementsInput = {
    id?: string
    name: string
    sku?: string | null
    barcode?: string | null
    category?: string | null
    unit?: $Enums.Unit | null
    sellingPrice: number
    description?: string | null
    stock?: number
    lowStockAlert?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutMovementsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMovementsInput, ProductUncheckedCreateWithoutMovementsInput>
  }

  export type BatchCreateWithoutMovementsInput = {
    id?: string
    supplierId?: string | null
    batchNumber?: string | null
    invoiceNumber?: string | null
    quantity?: number
    remainingQty?: number
    costPrice?: number
    sellingPrice?: number
    manufactureDate: Date | string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutBatchesInput
  }

  export type BatchUncheckedCreateWithoutMovementsInput = {
    id?: string
    productId: string
    supplierId?: string | null
    batchNumber?: string | null
    invoiceNumber?: string | null
    quantity?: number
    remainingQty?: number
    costPrice?: number
    sellingPrice?: number
    manufactureDate: Date | string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BatchCreateOrConnectWithoutMovementsInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutMovementsInput, BatchUncheckedCreateWithoutMovementsInput>
  }

  export type MovementUpsertWithoutItemsInput = {
    update: XOR<MovementUpdateWithoutItemsInput, MovementUncheckedUpdateWithoutItemsInput>
    create: XOR<MovementCreateWithoutItemsInput, MovementUncheckedCreateWithoutItemsInput>
    where?: MovementWhereInput
  }

  export type MovementUpdateToOneWithWhereWithoutItemsInput = {
    where?: MovementWhereInput
    data: XOR<MovementUpdateWithoutItemsInput, MovementUncheckedUpdateWithoutItemsInput>
  }

  export type MovementUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutMovementsNestedInput
  }

  export type MovementUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutMovementsInput = {
    update: XOR<ProductUpdateWithoutMovementsInput, ProductUncheckedUpdateWithoutMovementsInput>
    create: XOR<ProductCreateWithoutMovementsInput, ProductUncheckedCreateWithoutMovementsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutMovementsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutMovementsInput, ProductUncheckedUpdateWithoutMovementsInput>
  }

  export type ProductUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableEnumUnitFieldUpdateOperationsInput | $Enums.Unit | null
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    lowStockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableEnumUnitFieldUpdateOperationsInput | $Enums.Unit | null
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    lowStockAlert?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchUncheckedUpdateManyWithoutProductNestedInput
  }

  export type BatchUpsertWithoutMovementsInput = {
    update: XOR<BatchUpdateWithoutMovementsInput, BatchUncheckedUpdateWithoutMovementsInput>
    create: XOR<BatchCreateWithoutMovementsInput, BatchUncheckedCreateWithoutMovementsInput>
    where?: BatchWhereInput
  }

  export type BatchUpdateToOneWithWhereWithoutMovementsInput = {
    where?: BatchWhereInput
    data: XOR<BatchUpdateWithoutMovementsInput, BatchUncheckedUpdateWithoutMovementsInput>
  }

  export type BatchUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutBatchesNestedInput
  }

  export type BatchUncheckedUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreditCreateManyCustomerInput = {
    id?: string
    amount: number
    paidAmount?: number
    isPaid?: boolean
    reference?: string | null
    note?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovementCreateManyCustomerInput = {
    id?: string
    type: $Enums.MovementType
    note?: string | null
    issueNumber?: string | null
    paymentType: $Enums.PaymentType
    createdAt?: Date | string
  }

  export type CustomerCreditUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreditUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreditUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: MovementItemUpdateManyWithoutMovementNestedInput
  }

  export type MovementUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: MovementItemUncheckedUpdateManyWithoutMovementNestedInput
  }

  export type MovementUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierTransactionCreateManySupplierInput = {
    id?: string
    type: $Enums.SupplierTransactionType
    amount: number
    reference?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type SupplierTransactionUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSupplierTransactionTypeFieldUpdateOperationsInput | $Enums.SupplierTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierTransactionUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSupplierTransactionTypeFieldUpdateOperationsInput | $Enums.SupplierTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierTransactionUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSupplierTransactionTypeFieldUpdateOperationsInput | $Enums.SupplierTransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchCreateManyProductInput = {
    id?: string
    supplierId?: string | null
    batchNumber?: string | null
    invoiceNumber?: string | null
    quantity?: number
    remainingQty?: number
    costPrice?: number
    sellingPrice?: number
    manufactureDate: Date | string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovementItemCreateManyProductInput = {
    id?: string
    movementId: string
    batchId?: string | null
    quantity: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type BatchUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: MovementItemUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: MovementItemUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    remainingQty?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    manufactureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movement?: MovementUpdateOneRequiredWithoutItemsNestedInput
    batch?: BatchUpdateOneWithoutMovementsNestedInput
  }

  export type MovementItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    movementId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    movementId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementItemCreateManyBatchInput = {
    id?: string
    movementId: string
    productId: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type MovementItemUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movement?: MovementUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutMovementsNestedInput
  }

  export type MovementItemUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    movementId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementItemUncheckedUpdateManyWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    movementId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementItemCreateManyMovementInput = {
    id?: string
    productId: string
    batchId?: string | null
    quantity: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type MovementItemUpdateWithoutMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutMovementsNestedInput
    batch?: BatchUpdateOneWithoutMovementsNestedInput
  }

  export type MovementItemUncheckedUpdateWithoutMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementItemUncheckedUpdateManyWithoutMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
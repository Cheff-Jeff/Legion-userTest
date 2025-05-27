
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
 * Model Util
 * 
 */
export type Util = $Result.DefaultSelection<Prisma.$UtilPayload>
/**
 * Model Block
 * 
 */
export type Block = $Result.DefaultSelection<Prisma.$BlockPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model CategoryTree
 * 
 */
export type CategoryTree = $Result.DefaultSelection<Prisma.$CategoryTreePayload>
/**
 * Model CategoriesOnBlocks
 * 
 */
export type CategoriesOnBlocks = $Result.DefaultSelection<Prisma.$CategoriesOnBlocksPayload>
/**
 * Model TagsOnBlocks
 * 
 */
export type TagsOnBlocks = $Result.DefaultSelection<Prisma.$TagsOnBlocksPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Utils
 * const utils = await prisma.util.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Utils
   * const utils = await prisma.util.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.util`: Exposes CRUD operations for the **Util** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utils
    * const utils = await prisma.util.findMany()
    * ```
    */
  get util(): Prisma.UtilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.block`: Exposes CRUD operations for the **Block** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.block.findMany()
    * ```
    */
  get block(): Prisma.BlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryTree`: Exposes CRUD operations for the **CategoryTree** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryTrees
    * const categoryTrees = await prisma.categoryTree.findMany()
    * ```
    */
  get categoryTree(): Prisma.CategoryTreeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoriesOnBlocks`: Exposes CRUD operations for the **CategoriesOnBlocks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoriesOnBlocks
    * const categoriesOnBlocks = await prisma.categoriesOnBlocks.findMany()
    * ```
    */
  get categoriesOnBlocks(): Prisma.CategoriesOnBlocksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tagsOnBlocks`: Exposes CRUD operations for the **TagsOnBlocks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TagsOnBlocks
    * const tagsOnBlocks = await prisma.tagsOnBlocks.findMany()
    * ```
    */
  get tagsOnBlocks(): Prisma.TagsOnBlocksDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Util: 'Util',
    Block: 'Block',
    Category: 'Category',
    Tag: 'Tag',
    CategoryTree: 'CategoryTree',
    CategoriesOnBlocks: 'CategoriesOnBlocks',
    TagsOnBlocks: 'TagsOnBlocks'
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
      modelProps: "util" | "block" | "category" | "tag" | "categoryTree" | "categoriesOnBlocks" | "tagsOnBlocks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Util: {
        payload: Prisma.$UtilPayload<ExtArgs>
        fields: Prisma.UtilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilPayload>
          }
          findFirst: {
            args: Prisma.UtilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilPayload>
          }
          findMany: {
            args: Prisma.UtilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilPayload>[]
          }
          create: {
            args: Prisma.UtilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilPayload>
          }
          createMany: {
            args: Prisma.UtilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UtilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilPayload>
          }
          update: {
            args: Prisma.UtilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilPayload>
          }
          deleteMany: {
            args: Prisma.UtilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UtilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilPayload>
          }
          aggregate: {
            args: Prisma.UtilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtil>
          }
          groupBy: {
            args: Prisma.UtilGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilCountArgs<ExtArgs>
            result: $Utils.Optional<UtilCountAggregateOutputType> | number
          }
        }
      }
      Block: {
        payload: Prisma.$BlockPayload<ExtArgs>
        fields: Prisma.BlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findFirst: {
            args: Prisma.BlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findMany: {
            args: Prisma.BlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          create: {
            args: Prisma.BlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          createMany: {
            args: Prisma.BlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          update: {
            args: Prisma.BlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          deleteMany: {
            args: Prisma.BlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlock>
          }
          groupBy: {
            args: Prisma.BlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockCountArgs<ExtArgs>
            result: $Utils.Optional<BlockCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      CategoryTree: {
        payload: Prisma.$CategoryTreePayload<ExtArgs>
        fields: Prisma.CategoryTreeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryTreeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTreePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryTreeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTreePayload>
          }
          findFirst: {
            args: Prisma.CategoryTreeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTreePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryTreeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTreePayload>
          }
          findMany: {
            args: Prisma.CategoryTreeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTreePayload>[]
          }
          create: {
            args: Prisma.CategoryTreeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTreePayload>
          }
          createMany: {
            args: Prisma.CategoryTreeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryTreeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTreePayload>
          }
          update: {
            args: Prisma.CategoryTreeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTreePayload>
          }
          deleteMany: {
            args: Prisma.CategoryTreeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryTreeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryTreeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryTreePayload>
          }
          aggregate: {
            args: Prisma.CategoryTreeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryTree>
          }
          groupBy: {
            args: Prisma.CategoryTreeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryTreeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryTreeCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryTreeCountAggregateOutputType> | number
          }
        }
      }
      CategoriesOnBlocks: {
        payload: Prisma.$CategoriesOnBlocksPayload<ExtArgs>
        fields: Prisma.CategoriesOnBlocksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesOnBlocksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnBlocksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesOnBlocksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnBlocksPayload>
          }
          findFirst: {
            args: Prisma.CategoriesOnBlocksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnBlocksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesOnBlocksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnBlocksPayload>
          }
          findMany: {
            args: Prisma.CategoriesOnBlocksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnBlocksPayload>[]
          }
          create: {
            args: Prisma.CategoriesOnBlocksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnBlocksPayload>
          }
          createMany: {
            args: Prisma.CategoriesOnBlocksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriesOnBlocksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnBlocksPayload>
          }
          update: {
            args: Prisma.CategoriesOnBlocksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnBlocksPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesOnBlocksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesOnBlocksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesOnBlocksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnBlocksPayload>
          }
          aggregate: {
            args: Prisma.CategoriesOnBlocksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoriesOnBlocks>
          }
          groupBy: {
            args: Prisma.CategoriesOnBlocksGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesOnBlocksGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesOnBlocksCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesOnBlocksCountAggregateOutputType> | number
          }
        }
      }
      TagsOnBlocks: {
        payload: Prisma.$TagsOnBlocksPayload<ExtArgs>
        fields: Prisma.TagsOnBlocksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsOnBlocksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnBlocksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsOnBlocksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnBlocksPayload>
          }
          findFirst: {
            args: Prisma.TagsOnBlocksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnBlocksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsOnBlocksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnBlocksPayload>
          }
          findMany: {
            args: Prisma.TagsOnBlocksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnBlocksPayload>[]
          }
          create: {
            args: Prisma.TagsOnBlocksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnBlocksPayload>
          }
          createMany: {
            args: Prisma.TagsOnBlocksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagsOnBlocksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnBlocksPayload>
          }
          update: {
            args: Prisma.TagsOnBlocksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnBlocksPayload>
          }
          deleteMany: {
            args: Prisma.TagsOnBlocksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagsOnBlocksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagsOnBlocksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagsOnBlocksPayload>
          }
          aggregate: {
            args: Prisma.TagsOnBlocksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTagsOnBlocks>
          }
          groupBy: {
            args: Prisma.TagsOnBlocksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsOnBlocksGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsOnBlocksCountArgs<ExtArgs>
            result: $Utils.Optional<TagsOnBlocksCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    util?: UtilOmit
    block?: BlockOmit
    category?: CategoryOmit
    tag?: TagOmit
    categoryTree?: CategoryTreeOmit
    categoriesOnBlocks?: CategoriesOnBlocksOmit
    tagsOnBlocks?: TagsOnBlocksOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type BlockCountOutputType
   */

  export type BlockCountOutputType = {
    categories: number
    tags: number
  }

  export type BlockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | BlockCountOutputTypeCountCategoriesArgs
    tags?: boolean | BlockCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * BlockCountOutputType without action
   */
  export type BlockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCountOutputType
     */
    select?: BlockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlockCountOutputType without action
   */
  export type BlockCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesOnBlocksWhereInput
  }

  /**
   * BlockCountOutputType without action
   */
  export type BlockCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsOnBlocksWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Blocks: number
    ancestors: number
    descendants: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Blocks?: boolean | CategoryCountOutputTypeCountBlocksArgs
    ancestors?: boolean | CategoryCountOutputTypeCountAncestorsArgs
    descendants?: boolean | CategoryCountOutputTypeCountDescendantsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesOnBlocksWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountAncestorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryTreeWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountDescendantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryTreeWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    Blocks: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Blocks?: boolean | TagCountOutputTypeCountBlocksArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsOnBlocksWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Util
   */

  export type AggregateUtil = {
    _count: UtilCountAggregateOutputType | null
    _avg: UtilAvgAggregateOutputType | null
    _sum: UtilSumAggregateOutputType | null
    _min: UtilMinAggregateOutputType | null
    _max: UtilMaxAggregateOutputType | null
  }

  export type UtilAvgAggregateOutputType = {
    id: number | null
  }

  export type UtilSumAggregateOutputType = {
    id: number | null
  }

  export type UtilMinAggregateOutputType = {
    id: number | null
    name: string | null
    commitData: string | null
  }

  export type UtilMaxAggregateOutputType = {
    id: number | null
    name: string | null
    commitData: string | null
  }

  export type UtilCountAggregateOutputType = {
    id: number
    name: number
    commitData: number
    _all: number
  }


  export type UtilAvgAggregateInputType = {
    id?: true
  }

  export type UtilSumAggregateInputType = {
    id?: true
  }

  export type UtilMinAggregateInputType = {
    id?: true
    name?: true
    commitData?: true
  }

  export type UtilMaxAggregateInputType = {
    id?: true
    name?: true
    commitData?: true
  }

  export type UtilCountAggregateInputType = {
    id?: true
    name?: true
    commitData?: true
    _all?: true
  }

  export type UtilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Util to aggregate.
     */
    where?: UtilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utils to fetch.
     */
    orderBy?: UtilOrderByWithRelationInput | UtilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utils
    **/
    _count?: true | UtilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilMaxAggregateInputType
  }

  export type GetUtilAggregateType<T extends UtilAggregateArgs> = {
        [P in keyof T & keyof AggregateUtil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtil[P]>
      : GetScalarType<T[P], AggregateUtil[P]>
  }




  export type UtilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilWhereInput
    orderBy?: UtilOrderByWithAggregationInput | UtilOrderByWithAggregationInput[]
    by: UtilScalarFieldEnum[] | UtilScalarFieldEnum
    having?: UtilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilCountAggregateInputType | true
    _avg?: UtilAvgAggregateInputType
    _sum?: UtilSumAggregateInputType
    _min?: UtilMinAggregateInputType
    _max?: UtilMaxAggregateInputType
  }

  export type UtilGroupByOutputType = {
    id: number
    name: string
    commitData: string
    _count: UtilCountAggregateOutputType | null
    _avg: UtilAvgAggregateOutputType | null
    _sum: UtilSumAggregateOutputType | null
    _min: UtilMinAggregateOutputType | null
    _max: UtilMaxAggregateOutputType | null
  }

  type GetUtilGroupByPayload<T extends UtilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilGroupByOutputType[P]>
            : GetScalarType<T[P], UtilGroupByOutputType[P]>
        }
      >
    >


  export type UtilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    commitData?: boolean
  }, ExtArgs["result"]["util"]>



  export type UtilSelectScalar = {
    id?: boolean
    name?: boolean
    commitData?: boolean
  }

  export type UtilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "commitData", ExtArgs["result"]["util"]>

  export type $UtilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Util"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      commitData: string
    }, ExtArgs["result"]["util"]>
    composites: {}
  }

  type UtilGetPayload<S extends boolean | null | undefined | UtilDefaultArgs> = $Result.GetResult<Prisma.$UtilPayload, S>

  type UtilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilCountAggregateInputType | true
    }

  export interface UtilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Util'], meta: { name: 'Util' } }
    /**
     * Find zero or one Util that matches the filter.
     * @param {UtilFindUniqueArgs} args - Arguments to find a Util
     * @example
     * // Get one Util
     * const util = await prisma.util.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilFindUniqueArgs>(args: SelectSubset<T, UtilFindUniqueArgs<ExtArgs>>): Prisma__UtilClient<$Result.GetResult<Prisma.$UtilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Util that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilFindUniqueOrThrowArgs} args - Arguments to find a Util
     * @example
     * // Get one Util
     * const util = await prisma.util.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilClient<$Result.GetResult<Prisma.$UtilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Util that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilFindFirstArgs} args - Arguments to find a Util
     * @example
     * // Get one Util
     * const util = await prisma.util.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilFindFirstArgs>(args?: SelectSubset<T, UtilFindFirstArgs<ExtArgs>>): Prisma__UtilClient<$Result.GetResult<Prisma.$UtilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Util that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilFindFirstOrThrowArgs} args - Arguments to find a Util
     * @example
     * // Get one Util
     * const util = await prisma.util.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilClient<$Result.GetResult<Prisma.$UtilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utils
     * const utils = await prisma.util.findMany()
     * 
     * // Get first 10 Utils
     * const utils = await prisma.util.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilWithIdOnly = await prisma.util.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilFindManyArgs>(args?: SelectSubset<T, UtilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Util.
     * @param {UtilCreateArgs} args - Arguments to create a Util.
     * @example
     * // Create one Util
     * const Util = await prisma.util.create({
     *   data: {
     *     // ... data to create a Util
     *   }
     * })
     * 
     */
    create<T extends UtilCreateArgs>(args: SelectSubset<T, UtilCreateArgs<ExtArgs>>): Prisma__UtilClient<$Result.GetResult<Prisma.$UtilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utils.
     * @param {UtilCreateManyArgs} args - Arguments to create many Utils.
     * @example
     * // Create many Utils
     * const util = await prisma.util.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilCreateManyArgs>(args?: SelectSubset<T, UtilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Util.
     * @param {UtilDeleteArgs} args - Arguments to delete one Util.
     * @example
     * // Delete one Util
     * const Util = await prisma.util.delete({
     *   where: {
     *     // ... filter to delete one Util
     *   }
     * })
     * 
     */
    delete<T extends UtilDeleteArgs>(args: SelectSubset<T, UtilDeleteArgs<ExtArgs>>): Prisma__UtilClient<$Result.GetResult<Prisma.$UtilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Util.
     * @param {UtilUpdateArgs} args - Arguments to update one Util.
     * @example
     * // Update one Util
     * const util = await prisma.util.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilUpdateArgs>(args: SelectSubset<T, UtilUpdateArgs<ExtArgs>>): Prisma__UtilClient<$Result.GetResult<Prisma.$UtilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utils.
     * @param {UtilDeleteManyArgs} args - Arguments to filter Utils to delete.
     * @example
     * // Delete a few Utils
     * const { count } = await prisma.util.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilDeleteManyArgs>(args?: SelectSubset<T, UtilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utils
     * const util = await prisma.util.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilUpdateManyArgs>(args: SelectSubset<T, UtilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Util.
     * @param {UtilUpsertArgs} args - Arguments to update or create a Util.
     * @example
     * // Update or create a Util
     * const util = await prisma.util.upsert({
     *   create: {
     *     // ... data to create a Util
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Util we want to update
     *   }
     * })
     */
    upsert<T extends UtilUpsertArgs>(args: SelectSubset<T, UtilUpsertArgs<ExtArgs>>): Prisma__UtilClient<$Result.GetResult<Prisma.$UtilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilCountArgs} args - Arguments to filter Utils to count.
     * @example
     * // Count the number of Utils
     * const count = await prisma.util.count({
     *   where: {
     *     // ... the filter for the Utils we want to count
     *   }
     * })
    **/
    count<T extends UtilCountArgs>(
      args?: Subset<T, UtilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Util.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilAggregateArgs>(args: Subset<T, UtilAggregateArgs>): Prisma.PrismaPromise<GetUtilAggregateType<T>>

    /**
     * Group by Util.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilGroupByArgs} args - Group by arguments.
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
      T extends UtilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilGroupByArgs['orderBy'] }
        : { orderBy?: UtilGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Util model
   */
  readonly fields: UtilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Util.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Util model
   */
  interface UtilFieldRefs {
    readonly id: FieldRef<"Util", 'Int'>
    readonly name: FieldRef<"Util", 'String'>
    readonly commitData: FieldRef<"Util", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Util findUnique
   */
  export type UtilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Util
     */
    select?: UtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Util
     */
    omit?: UtilOmit<ExtArgs> | null
    /**
     * Filter, which Util to fetch.
     */
    where: UtilWhereUniqueInput
  }

  /**
   * Util findUniqueOrThrow
   */
  export type UtilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Util
     */
    select?: UtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Util
     */
    omit?: UtilOmit<ExtArgs> | null
    /**
     * Filter, which Util to fetch.
     */
    where: UtilWhereUniqueInput
  }

  /**
   * Util findFirst
   */
  export type UtilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Util
     */
    select?: UtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Util
     */
    omit?: UtilOmit<ExtArgs> | null
    /**
     * Filter, which Util to fetch.
     */
    where?: UtilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utils to fetch.
     */
    orderBy?: UtilOrderByWithRelationInput | UtilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utils.
     */
    cursor?: UtilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utils.
     */
    distinct?: UtilScalarFieldEnum | UtilScalarFieldEnum[]
  }

  /**
   * Util findFirstOrThrow
   */
  export type UtilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Util
     */
    select?: UtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Util
     */
    omit?: UtilOmit<ExtArgs> | null
    /**
     * Filter, which Util to fetch.
     */
    where?: UtilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utils to fetch.
     */
    orderBy?: UtilOrderByWithRelationInput | UtilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utils.
     */
    cursor?: UtilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utils.
     */
    distinct?: UtilScalarFieldEnum | UtilScalarFieldEnum[]
  }

  /**
   * Util findMany
   */
  export type UtilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Util
     */
    select?: UtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Util
     */
    omit?: UtilOmit<ExtArgs> | null
    /**
     * Filter, which Utils to fetch.
     */
    where?: UtilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utils to fetch.
     */
    orderBy?: UtilOrderByWithRelationInput | UtilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utils.
     */
    cursor?: UtilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utils.
     */
    skip?: number
    distinct?: UtilScalarFieldEnum | UtilScalarFieldEnum[]
  }

  /**
   * Util create
   */
  export type UtilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Util
     */
    select?: UtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Util
     */
    omit?: UtilOmit<ExtArgs> | null
    /**
     * The data needed to create a Util.
     */
    data: XOR<UtilCreateInput, UtilUncheckedCreateInput>
  }

  /**
   * Util createMany
   */
  export type UtilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utils.
     */
    data: UtilCreateManyInput | UtilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Util update
   */
  export type UtilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Util
     */
    select?: UtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Util
     */
    omit?: UtilOmit<ExtArgs> | null
    /**
     * The data needed to update a Util.
     */
    data: XOR<UtilUpdateInput, UtilUncheckedUpdateInput>
    /**
     * Choose, which Util to update.
     */
    where: UtilWhereUniqueInput
  }

  /**
   * Util updateMany
   */
  export type UtilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utils.
     */
    data: XOR<UtilUpdateManyMutationInput, UtilUncheckedUpdateManyInput>
    /**
     * Filter which Utils to update
     */
    where?: UtilWhereInput
    /**
     * Limit how many Utils to update.
     */
    limit?: number
  }

  /**
   * Util upsert
   */
  export type UtilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Util
     */
    select?: UtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Util
     */
    omit?: UtilOmit<ExtArgs> | null
    /**
     * The filter to search for the Util to update in case it exists.
     */
    where: UtilWhereUniqueInput
    /**
     * In case the Util found by the `where` argument doesn't exist, create a new Util with this data.
     */
    create: XOR<UtilCreateInput, UtilUncheckedCreateInput>
    /**
     * In case the Util was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilUpdateInput, UtilUncheckedUpdateInput>
  }

  /**
   * Util delete
   */
  export type UtilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Util
     */
    select?: UtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Util
     */
    omit?: UtilOmit<ExtArgs> | null
    /**
     * Filter which Util to delete.
     */
    where: UtilWhereUniqueInput
  }

  /**
   * Util deleteMany
   */
  export type UtilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utils to delete
     */
    where?: UtilWhereInput
    /**
     * Limit how many Utils to delete.
     */
    limit?: number
  }

  /**
   * Util without action
   */
  export type UtilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Util
     */
    select?: UtilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Util
     */
    omit?: UtilOmit<ExtArgs> | null
  }


  /**
   * Model Block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  export type BlockAvgAggregateOutputType = {
    id: number | null
  }

  export type BlockSumAggregateOutputType = {
    id: number | null
  }

  export type BlockMinAggregateOutputType = {
    id: number | null
    coreScript: string | null
    css: string | null
    cssUrl: string | null
    pending: boolean | null
    blockShortName: string | null
    blockHtml: string | null
    translatedCode: string | null
    scriptName: string | null
    scriptUrl: string | null
    headingFont: string | null
    bodyFont: string | null
    repositoryName: string | null
    repositoryUrl: string | null
  }

  export type BlockMaxAggregateOutputType = {
    id: number | null
    coreScript: string | null
    css: string | null
    cssUrl: string | null
    pending: boolean | null
    blockShortName: string | null
    blockHtml: string | null
    translatedCode: string | null
    scriptName: string | null
    scriptUrl: string | null
    headingFont: string | null
    bodyFont: string | null
    repositoryName: string | null
    repositoryUrl: string | null
  }

  export type BlockCountAggregateOutputType = {
    id: number
    coreScript: number
    css: number
    cssUrl: number
    pending: number
    blockShortName: number
    blockHtml: number
    translatedCode: number
    scriptName: number
    scriptUrl: number
    headingFont: number
    bodyFont: number
    repositoryName: number
    repositoryUrl: number
    _all: number
  }


  export type BlockAvgAggregateInputType = {
    id?: true
  }

  export type BlockSumAggregateInputType = {
    id?: true
  }

  export type BlockMinAggregateInputType = {
    id?: true
    coreScript?: true
    css?: true
    cssUrl?: true
    pending?: true
    blockShortName?: true
    blockHtml?: true
    translatedCode?: true
    scriptName?: true
    scriptUrl?: true
    headingFont?: true
    bodyFont?: true
    repositoryName?: true
    repositoryUrl?: true
  }

  export type BlockMaxAggregateInputType = {
    id?: true
    coreScript?: true
    css?: true
    cssUrl?: true
    pending?: true
    blockShortName?: true
    blockHtml?: true
    translatedCode?: true
    scriptName?: true
    scriptUrl?: true
    headingFont?: true
    bodyFont?: true
    repositoryName?: true
    repositoryUrl?: true
  }

  export type BlockCountAggregateInputType = {
    id?: true
    coreScript?: true
    css?: true
    cssUrl?: true
    pending?: true
    blockShortName?: true
    blockHtml?: true
    translatedCode?: true
    scriptName?: true
    scriptUrl?: true
    headingFont?: true
    bodyFont?: true
    repositoryName?: true
    repositoryUrl?: true
    _all?: true
  }

  export type BlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Block to aggregate.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocks
    **/
    _count?: true | BlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockMaxAggregateInputType
  }

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>
  }




  export type BlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithAggregationInput | BlockOrderByWithAggregationInput[]
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum
    having?: BlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCountAggregateInputType | true
    _avg?: BlockAvgAggregateInputType
    _sum?: BlockSumAggregateInputType
    _min?: BlockMinAggregateInputType
    _max?: BlockMaxAggregateInputType
  }

  export type BlockGroupByOutputType = {
    id: number
    coreScript: string | null
    css: string
    cssUrl: string | null
    pending: boolean
    blockShortName: string
    blockHtml: string
    translatedCode: string | null
    scriptName: string | null
    scriptUrl: string | null
    headingFont: string | null
    bodyFont: string | null
    repositoryName: string | null
    repositoryUrl: string | null
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  type GetBlockGroupByPayload<T extends BlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>
        }
      >
    >


  export type BlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coreScript?: boolean
    css?: boolean
    cssUrl?: boolean
    pending?: boolean
    blockShortName?: boolean
    blockHtml?: boolean
    translatedCode?: boolean
    scriptName?: boolean
    scriptUrl?: boolean
    headingFont?: boolean
    bodyFont?: boolean
    repositoryName?: boolean
    repositoryUrl?: boolean
    categories?: boolean | Block$categoriesArgs<ExtArgs>
    tags?: boolean | Block$tagsArgs<ExtArgs>
    _count?: boolean | BlockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>



  export type BlockSelectScalar = {
    id?: boolean
    coreScript?: boolean
    css?: boolean
    cssUrl?: boolean
    pending?: boolean
    blockShortName?: boolean
    blockHtml?: boolean
    translatedCode?: boolean
    scriptName?: boolean
    scriptUrl?: boolean
    headingFont?: boolean
    bodyFont?: boolean
    repositoryName?: boolean
    repositoryUrl?: boolean
  }

  export type BlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coreScript" | "css" | "cssUrl" | "pending" | "blockShortName" | "blockHtml" | "translatedCode" | "scriptName" | "scriptUrl" | "headingFont" | "bodyFont" | "repositoryName" | "repositoryUrl", ExtArgs["result"]["block"]>
  export type BlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Block$categoriesArgs<ExtArgs>
    tags?: boolean | Block$tagsArgs<ExtArgs>
    _count?: boolean | BlockCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Block"
    objects: {
      categories: Prisma.$CategoriesOnBlocksPayload<ExtArgs>[]
      tags: Prisma.$TagsOnBlocksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      coreScript: string | null
      css: string
      cssUrl: string | null
      pending: boolean
      blockShortName: string
      blockHtml: string
      translatedCode: string | null
      scriptName: string | null
      scriptUrl: string | null
      headingFont: string | null
      bodyFont: string | null
      repositoryName: string | null
      repositoryUrl: string | null
    }, ExtArgs["result"]["block"]>
    composites: {}
  }

  type BlockGetPayload<S extends boolean | null | undefined | BlockDefaultArgs> = $Result.GetResult<Prisma.$BlockPayload, S>

  type BlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockCountAggregateInputType | true
    }

  export interface BlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Block'], meta: { name: 'Block' } }
    /**
     * Find zero or one Block that matches the filter.
     * @param {BlockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockFindUniqueArgs>(args: SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Block that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockFindFirstArgs>(args?: SelectSubset<T, BlockFindFirstArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockWithIdOnly = await prisma.block.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockFindManyArgs>(args?: SelectSubset<T, BlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Block.
     * @param {BlockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     * 
     */
    create<T extends BlockCreateArgs>(args: SelectSubset<T, BlockCreateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blocks.
     * @param {BlockCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockCreateManyArgs>(args?: SelectSubset<T, BlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Block.
     * @param {BlockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     * 
     */
    delete<T extends BlockDeleteArgs>(args: SelectSubset<T, BlockDeleteArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Block.
     * @param {BlockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockUpdateArgs>(args: SelectSubset<T, BlockUpdateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blocks.
     * @param {BlockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockDeleteManyArgs>(args?: SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockUpdateManyArgs>(args: SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Block.
     * @param {BlockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
     */
    upsert<T extends BlockUpsertArgs>(args: SelectSubset<T, BlockUpsertArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends BlockCountArgs>(
      args?: Subset<T, BlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockAggregateArgs>(args: Subset<T, BlockAggregateArgs>): Prisma.PrismaPromise<GetBlockAggregateType<T>>

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockGroupByArgs} args - Group by arguments.
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
      T extends BlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockGroupByArgs['orderBy'] }
        : { orderBy?: BlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Block model
   */
  readonly fields: BlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Block$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Block$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesOnBlocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Block$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Block$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsOnBlocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Block model
   */
  interface BlockFieldRefs {
    readonly id: FieldRef<"Block", 'Int'>
    readonly coreScript: FieldRef<"Block", 'String'>
    readonly css: FieldRef<"Block", 'String'>
    readonly cssUrl: FieldRef<"Block", 'String'>
    readonly pending: FieldRef<"Block", 'Boolean'>
    readonly blockShortName: FieldRef<"Block", 'String'>
    readonly blockHtml: FieldRef<"Block", 'String'>
    readonly translatedCode: FieldRef<"Block", 'String'>
    readonly scriptName: FieldRef<"Block", 'String'>
    readonly scriptUrl: FieldRef<"Block", 'String'>
    readonly headingFont: FieldRef<"Block", 'String'>
    readonly bodyFont: FieldRef<"Block", 'String'>
    readonly repositoryName: FieldRef<"Block", 'String'>
    readonly repositoryUrl: FieldRef<"Block", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Block findUnique
   */
  export type BlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findUniqueOrThrow
   */
  export type BlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findFirst
   */
  export type BlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findFirstOrThrow
   */
  export type BlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findMany
   */
  export type BlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block create
   */
  export type BlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to create a Block.
     */
    data: XOR<BlockCreateInput, BlockUncheckedCreateInput>
  }

  /**
   * Block createMany
   */
  export type BlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Block update
   */
  export type BlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to update a Block.
     */
    data: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
    /**
     * Choose, which Block to update.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block updateMany
   */
  export type BlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to update.
     */
    limit?: number
  }

  /**
   * Block upsert
   */
  export type BlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The filter to search for the Block to update in case it exists.
     */
    where: BlockWhereUniqueInput
    /**
     * In case the Block found by the `where` argument doesn't exist, create a new Block with this data.
     */
    create: XOR<BlockCreateInput, BlockUncheckedCreateInput>
    /**
     * In case the Block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
  }

  /**
   * Block delete
   */
  export type BlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter which Block to delete.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block deleteMany
   */
  export type BlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to delete.
     */
    limit?: number
  }

  /**
   * Block.categories
   */
  export type Block$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnBlocks
     */
    select?: CategoriesOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOnBlocks
     */
    omit?: CategoriesOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOnBlocksInclude<ExtArgs> | null
    where?: CategoriesOnBlocksWhereInput
    orderBy?: CategoriesOnBlocksOrderByWithRelationInput | CategoriesOnBlocksOrderByWithRelationInput[]
    cursor?: CategoriesOnBlocksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesOnBlocksScalarFieldEnum | CategoriesOnBlocksScalarFieldEnum[]
  }

  /**
   * Block.tags
   */
  export type Block$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnBlocks
     */
    select?: TagsOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnBlocks
     */
    omit?: TagsOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnBlocksInclude<ExtArgs> | null
    where?: TagsOnBlocksWhereInput
    orderBy?: TagsOnBlocksOrderByWithRelationInput | TagsOnBlocksOrderByWithRelationInput[]
    cursor?: TagsOnBlocksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsOnBlocksScalarFieldEnum | TagsOnBlocksScalarFieldEnum[]
  }

  /**
   * Block without action
   */
  export type BlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    category: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    category: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    category: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    category?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    category?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    category?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    category: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    Blocks?: boolean | Category$BlocksArgs<ExtArgs>
    ancestors?: boolean | Category$ancestorsArgs<ExtArgs>
    descendants?: boolean | Category$descendantsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    category?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Blocks?: boolean | Category$BlocksArgs<ExtArgs>
    ancestors?: boolean | Category$ancestorsArgs<ExtArgs>
    descendants?: boolean | Category$descendantsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Blocks: Prisma.$CategoriesOnBlocksPayload<ExtArgs>[]
      ancestors: Prisma.$CategoryTreePayload<ExtArgs>[]
      descendants: Prisma.$CategoryTreePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Blocks<T extends Category$BlocksArgs<ExtArgs> = {}>(args?: Subset<T, Category$BlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesOnBlocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ancestors<T extends Category$ancestorsArgs<ExtArgs> = {}>(args?: Subset<T, Category$ancestorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryTreePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    descendants<T extends Category$descendantsArgs<ExtArgs> = {}>(args?: Subset<T, Category$descendantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryTreePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly category: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.Blocks
   */
  export type Category$BlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnBlocks
     */
    select?: CategoriesOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOnBlocks
     */
    omit?: CategoriesOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOnBlocksInclude<ExtArgs> | null
    where?: CategoriesOnBlocksWhereInput
    orderBy?: CategoriesOnBlocksOrderByWithRelationInput | CategoriesOnBlocksOrderByWithRelationInput[]
    cursor?: CategoriesOnBlocksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesOnBlocksScalarFieldEnum | CategoriesOnBlocksScalarFieldEnum[]
  }

  /**
   * Category.ancestors
   */
  export type Category$ancestorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryTree
     */
    select?: CategoryTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryTree
     */
    omit?: CategoryTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTreeInclude<ExtArgs> | null
    where?: CategoryTreeWhereInput
    orderBy?: CategoryTreeOrderByWithRelationInput | CategoryTreeOrderByWithRelationInput[]
    cursor?: CategoryTreeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryTreeScalarFieldEnum | CategoryTreeScalarFieldEnum[]
  }

  /**
   * Category.descendants
   */
  export type Category$descendantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryTree
     */
    select?: CategoryTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryTree
     */
    omit?: CategoryTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTreeInclude<ExtArgs> | null
    where?: CategoryTreeWhereInput
    orderBy?: CategoryTreeOrderByWithRelationInput | CategoryTreeOrderByWithRelationInput[]
    cursor?: CategoryTreeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryTreeScalarFieldEnum | CategoryTreeScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    tag: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    tag: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    tag: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    tag?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    tag?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    tag?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    tag: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag?: boolean
    Blocks?: boolean | Tag$BlocksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>



  export type TagSelectScalar = {
    id?: boolean
    tag?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tag", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Blocks?: boolean | Tag$BlocksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      Blocks: Prisma.$TagsOnBlocksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tag: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Blocks<T extends Tag$BlocksArgs<ExtArgs> = {}>(args?: Subset<T, Tag$BlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsOnBlocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly tag: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.Blocks
   */
  export type Tag$BlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnBlocks
     */
    select?: TagsOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnBlocks
     */
    omit?: TagsOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnBlocksInclude<ExtArgs> | null
    where?: TagsOnBlocksWhereInput
    orderBy?: TagsOnBlocksOrderByWithRelationInput | TagsOnBlocksOrderByWithRelationInput[]
    cursor?: TagsOnBlocksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsOnBlocksScalarFieldEnum | TagsOnBlocksScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model CategoryTree
   */

  export type AggregateCategoryTree = {
    _count: CategoryTreeCountAggregateOutputType | null
    _avg: CategoryTreeAvgAggregateOutputType | null
    _sum: CategoryTreeSumAggregateOutputType | null
    _min: CategoryTreeMinAggregateOutputType | null
    _max: CategoryTreeMaxAggregateOutputType | null
  }

  export type CategoryTreeAvgAggregateOutputType = {
    ancestorId: number | null
    descendantId: number | null
    depth: number | null
  }

  export type CategoryTreeSumAggregateOutputType = {
    ancestorId: number | null
    descendantId: number | null
    depth: number | null
  }

  export type CategoryTreeMinAggregateOutputType = {
    ancestorId: number | null
    descendantId: number | null
    depth: number | null
  }

  export type CategoryTreeMaxAggregateOutputType = {
    ancestorId: number | null
    descendantId: number | null
    depth: number | null
  }

  export type CategoryTreeCountAggregateOutputType = {
    ancestorId: number
    descendantId: number
    depth: number
    _all: number
  }


  export type CategoryTreeAvgAggregateInputType = {
    ancestorId?: true
    descendantId?: true
    depth?: true
  }

  export type CategoryTreeSumAggregateInputType = {
    ancestorId?: true
    descendantId?: true
    depth?: true
  }

  export type CategoryTreeMinAggregateInputType = {
    ancestorId?: true
    descendantId?: true
    depth?: true
  }

  export type CategoryTreeMaxAggregateInputType = {
    ancestorId?: true
    descendantId?: true
    depth?: true
  }

  export type CategoryTreeCountAggregateInputType = {
    ancestorId?: true
    descendantId?: true
    depth?: true
    _all?: true
  }

  export type CategoryTreeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryTree to aggregate.
     */
    where?: CategoryTreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryTrees to fetch.
     */
    orderBy?: CategoryTreeOrderByWithRelationInput | CategoryTreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryTreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryTrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryTrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryTrees
    **/
    _count?: true | CategoryTreeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryTreeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryTreeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryTreeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryTreeMaxAggregateInputType
  }

  export type GetCategoryTreeAggregateType<T extends CategoryTreeAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryTree]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryTree[P]>
      : GetScalarType<T[P], AggregateCategoryTree[P]>
  }




  export type CategoryTreeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryTreeWhereInput
    orderBy?: CategoryTreeOrderByWithAggregationInput | CategoryTreeOrderByWithAggregationInput[]
    by: CategoryTreeScalarFieldEnum[] | CategoryTreeScalarFieldEnum
    having?: CategoryTreeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryTreeCountAggregateInputType | true
    _avg?: CategoryTreeAvgAggregateInputType
    _sum?: CategoryTreeSumAggregateInputType
    _min?: CategoryTreeMinAggregateInputType
    _max?: CategoryTreeMaxAggregateInputType
  }

  export type CategoryTreeGroupByOutputType = {
    ancestorId: number
    descendantId: number
    depth: number
    _count: CategoryTreeCountAggregateOutputType | null
    _avg: CategoryTreeAvgAggregateOutputType | null
    _sum: CategoryTreeSumAggregateOutputType | null
    _min: CategoryTreeMinAggregateOutputType | null
    _max: CategoryTreeMaxAggregateOutputType | null
  }

  type GetCategoryTreeGroupByPayload<T extends CategoryTreeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryTreeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryTreeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryTreeGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryTreeGroupByOutputType[P]>
        }
      >
    >


  export type CategoryTreeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ancestorId?: boolean
    descendantId?: boolean
    depth?: boolean
    ancestor?: boolean | CategoryDefaultArgs<ExtArgs>
    descendant?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryTree"]>



  export type CategoryTreeSelectScalar = {
    ancestorId?: boolean
    descendantId?: boolean
    depth?: boolean
  }

  export type CategoryTreeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ancestorId" | "descendantId" | "depth", ExtArgs["result"]["categoryTree"]>
  export type CategoryTreeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ancestor?: boolean | CategoryDefaultArgs<ExtArgs>
    descendant?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $CategoryTreePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryTree"
    objects: {
      ancestor: Prisma.$CategoryPayload<ExtArgs>
      descendant: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ancestorId: number
      descendantId: number
      depth: number
    }, ExtArgs["result"]["categoryTree"]>
    composites: {}
  }

  type CategoryTreeGetPayload<S extends boolean | null | undefined | CategoryTreeDefaultArgs> = $Result.GetResult<Prisma.$CategoryTreePayload, S>

  type CategoryTreeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryTreeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryTreeCountAggregateInputType | true
    }

  export interface CategoryTreeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryTree'], meta: { name: 'CategoryTree' } }
    /**
     * Find zero or one CategoryTree that matches the filter.
     * @param {CategoryTreeFindUniqueArgs} args - Arguments to find a CategoryTree
     * @example
     * // Get one CategoryTree
     * const categoryTree = await prisma.categoryTree.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryTreeFindUniqueArgs>(args: SelectSubset<T, CategoryTreeFindUniqueArgs<ExtArgs>>): Prisma__CategoryTreeClient<$Result.GetResult<Prisma.$CategoryTreePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryTree that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryTreeFindUniqueOrThrowArgs} args - Arguments to find a CategoryTree
     * @example
     * // Get one CategoryTree
     * const categoryTree = await prisma.categoryTree.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryTreeFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryTreeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryTreeClient<$Result.GetResult<Prisma.$CategoryTreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryTree that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTreeFindFirstArgs} args - Arguments to find a CategoryTree
     * @example
     * // Get one CategoryTree
     * const categoryTree = await prisma.categoryTree.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryTreeFindFirstArgs>(args?: SelectSubset<T, CategoryTreeFindFirstArgs<ExtArgs>>): Prisma__CategoryTreeClient<$Result.GetResult<Prisma.$CategoryTreePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryTree that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTreeFindFirstOrThrowArgs} args - Arguments to find a CategoryTree
     * @example
     * // Get one CategoryTree
     * const categoryTree = await prisma.categoryTree.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryTreeFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryTreeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryTreeClient<$Result.GetResult<Prisma.$CategoryTreePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryTrees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTreeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryTrees
     * const categoryTrees = await prisma.categoryTree.findMany()
     * 
     * // Get first 10 CategoryTrees
     * const categoryTrees = await prisma.categoryTree.findMany({ take: 10 })
     * 
     * // Only select the `ancestorId`
     * const categoryTreeWithAncestorIdOnly = await prisma.categoryTree.findMany({ select: { ancestorId: true } })
     * 
     */
    findMany<T extends CategoryTreeFindManyArgs>(args?: SelectSubset<T, CategoryTreeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryTreePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryTree.
     * @param {CategoryTreeCreateArgs} args - Arguments to create a CategoryTree.
     * @example
     * // Create one CategoryTree
     * const CategoryTree = await prisma.categoryTree.create({
     *   data: {
     *     // ... data to create a CategoryTree
     *   }
     * })
     * 
     */
    create<T extends CategoryTreeCreateArgs>(args: SelectSubset<T, CategoryTreeCreateArgs<ExtArgs>>): Prisma__CategoryTreeClient<$Result.GetResult<Prisma.$CategoryTreePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryTrees.
     * @param {CategoryTreeCreateManyArgs} args - Arguments to create many CategoryTrees.
     * @example
     * // Create many CategoryTrees
     * const categoryTree = await prisma.categoryTree.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryTreeCreateManyArgs>(args?: SelectSubset<T, CategoryTreeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoryTree.
     * @param {CategoryTreeDeleteArgs} args - Arguments to delete one CategoryTree.
     * @example
     * // Delete one CategoryTree
     * const CategoryTree = await prisma.categoryTree.delete({
     *   where: {
     *     // ... filter to delete one CategoryTree
     *   }
     * })
     * 
     */
    delete<T extends CategoryTreeDeleteArgs>(args: SelectSubset<T, CategoryTreeDeleteArgs<ExtArgs>>): Prisma__CategoryTreeClient<$Result.GetResult<Prisma.$CategoryTreePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryTree.
     * @param {CategoryTreeUpdateArgs} args - Arguments to update one CategoryTree.
     * @example
     * // Update one CategoryTree
     * const categoryTree = await prisma.categoryTree.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryTreeUpdateArgs>(args: SelectSubset<T, CategoryTreeUpdateArgs<ExtArgs>>): Prisma__CategoryTreeClient<$Result.GetResult<Prisma.$CategoryTreePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryTrees.
     * @param {CategoryTreeDeleteManyArgs} args - Arguments to filter CategoryTrees to delete.
     * @example
     * // Delete a few CategoryTrees
     * const { count } = await prisma.categoryTree.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryTreeDeleteManyArgs>(args?: SelectSubset<T, CategoryTreeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryTrees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTreeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryTrees
     * const categoryTree = await prisma.categoryTree.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryTreeUpdateManyArgs>(args: SelectSubset<T, CategoryTreeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryTree.
     * @param {CategoryTreeUpsertArgs} args - Arguments to update or create a CategoryTree.
     * @example
     * // Update or create a CategoryTree
     * const categoryTree = await prisma.categoryTree.upsert({
     *   create: {
     *     // ... data to create a CategoryTree
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryTree we want to update
     *   }
     * })
     */
    upsert<T extends CategoryTreeUpsertArgs>(args: SelectSubset<T, CategoryTreeUpsertArgs<ExtArgs>>): Prisma__CategoryTreeClient<$Result.GetResult<Prisma.$CategoryTreePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryTrees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTreeCountArgs} args - Arguments to filter CategoryTrees to count.
     * @example
     * // Count the number of CategoryTrees
     * const count = await prisma.categoryTree.count({
     *   where: {
     *     // ... the filter for the CategoryTrees we want to count
     *   }
     * })
    **/
    count<T extends CategoryTreeCountArgs>(
      args?: Subset<T, CategoryTreeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryTreeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryTree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTreeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryTreeAggregateArgs>(args: Subset<T, CategoryTreeAggregateArgs>): Prisma.PrismaPromise<GetCategoryTreeAggregateType<T>>

    /**
     * Group by CategoryTree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryTreeGroupByArgs} args - Group by arguments.
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
      T extends CategoryTreeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryTreeGroupByArgs['orderBy'] }
        : { orderBy?: CategoryTreeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryTreeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryTreeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryTree model
   */
  readonly fields: CategoryTreeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryTree.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryTreeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ancestor<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    descendant<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CategoryTree model
   */
  interface CategoryTreeFieldRefs {
    readonly ancestorId: FieldRef<"CategoryTree", 'Int'>
    readonly descendantId: FieldRef<"CategoryTree", 'Int'>
    readonly depth: FieldRef<"CategoryTree", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CategoryTree findUnique
   */
  export type CategoryTreeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryTree
     */
    select?: CategoryTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryTree
     */
    omit?: CategoryTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTreeInclude<ExtArgs> | null
    /**
     * Filter, which CategoryTree to fetch.
     */
    where: CategoryTreeWhereUniqueInput
  }

  /**
   * CategoryTree findUniqueOrThrow
   */
  export type CategoryTreeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryTree
     */
    select?: CategoryTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryTree
     */
    omit?: CategoryTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTreeInclude<ExtArgs> | null
    /**
     * Filter, which CategoryTree to fetch.
     */
    where: CategoryTreeWhereUniqueInput
  }

  /**
   * CategoryTree findFirst
   */
  export type CategoryTreeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryTree
     */
    select?: CategoryTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryTree
     */
    omit?: CategoryTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTreeInclude<ExtArgs> | null
    /**
     * Filter, which CategoryTree to fetch.
     */
    where?: CategoryTreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryTrees to fetch.
     */
    orderBy?: CategoryTreeOrderByWithRelationInput | CategoryTreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryTrees.
     */
    cursor?: CategoryTreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryTrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryTrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryTrees.
     */
    distinct?: CategoryTreeScalarFieldEnum | CategoryTreeScalarFieldEnum[]
  }

  /**
   * CategoryTree findFirstOrThrow
   */
  export type CategoryTreeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryTree
     */
    select?: CategoryTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryTree
     */
    omit?: CategoryTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTreeInclude<ExtArgs> | null
    /**
     * Filter, which CategoryTree to fetch.
     */
    where?: CategoryTreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryTrees to fetch.
     */
    orderBy?: CategoryTreeOrderByWithRelationInput | CategoryTreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryTrees.
     */
    cursor?: CategoryTreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryTrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryTrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryTrees.
     */
    distinct?: CategoryTreeScalarFieldEnum | CategoryTreeScalarFieldEnum[]
  }

  /**
   * CategoryTree findMany
   */
  export type CategoryTreeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryTree
     */
    select?: CategoryTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryTree
     */
    omit?: CategoryTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTreeInclude<ExtArgs> | null
    /**
     * Filter, which CategoryTrees to fetch.
     */
    where?: CategoryTreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryTrees to fetch.
     */
    orderBy?: CategoryTreeOrderByWithRelationInput | CategoryTreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryTrees.
     */
    cursor?: CategoryTreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryTrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryTrees.
     */
    skip?: number
    distinct?: CategoryTreeScalarFieldEnum | CategoryTreeScalarFieldEnum[]
  }

  /**
   * CategoryTree create
   */
  export type CategoryTreeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryTree
     */
    select?: CategoryTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryTree
     */
    omit?: CategoryTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTreeInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryTree.
     */
    data: XOR<CategoryTreeCreateInput, CategoryTreeUncheckedCreateInput>
  }

  /**
   * CategoryTree createMany
   */
  export type CategoryTreeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryTrees.
     */
    data: CategoryTreeCreateManyInput | CategoryTreeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryTree update
   */
  export type CategoryTreeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryTree
     */
    select?: CategoryTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryTree
     */
    omit?: CategoryTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTreeInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryTree.
     */
    data: XOR<CategoryTreeUpdateInput, CategoryTreeUncheckedUpdateInput>
    /**
     * Choose, which CategoryTree to update.
     */
    where: CategoryTreeWhereUniqueInput
  }

  /**
   * CategoryTree updateMany
   */
  export type CategoryTreeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryTrees.
     */
    data: XOR<CategoryTreeUpdateManyMutationInput, CategoryTreeUncheckedUpdateManyInput>
    /**
     * Filter which CategoryTrees to update
     */
    where?: CategoryTreeWhereInput
    /**
     * Limit how many CategoryTrees to update.
     */
    limit?: number
  }

  /**
   * CategoryTree upsert
   */
  export type CategoryTreeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryTree
     */
    select?: CategoryTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryTree
     */
    omit?: CategoryTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTreeInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryTree to update in case it exists.
     */
    where: CategoryTreeWhereUniqueInput
    /**
     * In case the CategoryTree found by the `where` argument doesn't exist, create a new CategoryTree with this data.
     */
    create: XOR<CategoryTreeCreateInput, CategoryTreeUncheckedCreateInput>
    /**
     * In case the CategoryTree was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryTreeUpdateInput, CategoryTreeUncheckedUpdateInput>
  }

  /**
   * CategoryTree delete
   */
  export type CategoryTreeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryTree
     */
    select?: CategoryTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryTree
     */
    omit?: CategoryTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTreeInclude<ExtArgs> | null
    /**
     * Filter which CategoryTree to delete.
     */
    where: CategoryTreeWhereUniqueInput
  }

  /**
   * CategoryTree deleteMany
   */
  export type CategoryTreeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryTrees to delete
     */
    where?: CategoryTreeWhereInput
    /**
     * Limit how many CategoryTrees to delete.
     */
    limit?: number
  }

  /**
   * CategoryTree without action
   */
  export type CategoryTreeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryTree
     */
    select?: CategoryTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryTree
     */
    omit?: CategoryTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryTreeInclude<ExtArgs> | null
  }


  /**
   * Model CategoriesOnBlocks
   */

  export type AggregateCategoriesOnBlocks = {
    _count: CategoriesOnBlocksCountAggregateOutputType | null
    _avg: CategoriesOnBlocksAvgAggregateOutputType | null
    _sum: CategoriesOnBlocksSumAggregateOutputType | null
    _min: CategoriesOnBlocksMinAggregateOutputType | null
    _max: CategoriesOnBlocksMaxAggregateOutputType | null
  }

  export type CategoriesOnBlocksAvgAggregateOutputType = {
    id: number | null
    blockId: number | null
    categoryId: number | null
  }

  export type CategoriesOnBlocksSumAggregateOutputType = {
    id: number | null
    blockId: number | null
    categoryId: number | null
  }

  export type CategoriesOnBlocksMinAggregateOutputType = {
    id: number | null
    blockId: number | null
    categoryId: number | null
  }

  export type CategoriesOnBlocksMaxAggregateOutputType = {
    id: number | null
    blockId: number | null
    categoryId: number | null
  }

  export type CategoriesOnBlocksCountAggregateOutputType = {
    id: number
    blockId: number
    categoryId: number
    _all: number
  }


  export type CategoriesOnBlocksAvgAggregateInputType = {
    id?: true
    blockId?: true
    categoryId?: true
  }

  export type CategoriesOnBlocksSumAggregateInputType = {
    id?: true
    blockId?: true
    categoryId?: true
  }

  export type CategoriesOnBlocksMinAggregateInputType = {
    id?: true
    blockId?: true
    categoryId?: true
  }

  export type CategoriesOnBlocksMaxAggregateInputType = {
    id?: true
    blockId?: true
    categoryId?: true
  }

  export type CategoriesOnBlocksCountAggregateInputType = {
    id?: true
    blockId?: true
    categoryId?: true
    _all?: true
  }

  export type CategoriesOnBlocksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriesOnBlocks to aggregate.
     */
    where?: CategoriesOnBlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOnBlocks to fetch.
     */
    orderBy?: CategoriesOnBlocksOrderByWithRelationInput | CategoriesOnBlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesOnBlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOnBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOnBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoriesOnBlocks
    **/
    _count?: true | CategoriesOnBlocksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesOnBlocksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesOnBlocksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesOnBlocksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesOnBlocksMaxAggregateInputType
  }

  export type GetCategoriesOnBlocksAggregateType<T extends CategoriesOnBlocksAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoriesOnBlocks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoriesOnBlocks[P]>
      : GetScalarType<T[P], AggregateCategoriesOnBlocks[P]>
  }




  export type CategoriesOnBlocksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesOnBlocksWhereInput
    orderBy?: CategoriesOnBlocksOrderByWithAggregationInput | CategoriesOnBlocksOrderByWithAggregationInput[]
    by: CategoriesOnBlocksScalarFieldEnum[] | CategoriesOnBlocksScalarFieldEnum
    having?: CategoriesOnBlocksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesOnBlocksCountAggregateInputType | true
    _avg?: CategoriesOnBlocksAvgAggregateInputType
    _sum?: CategoriesOnBlocksSumAggregateInputType
    _min?: CategoriesOnBlocksMinAggregateInputType
    _max?: CategoriesOnBlocksMaxAggregateInputType
  }

  export type CategoriesOnBlocksGroupByOutputType = {
    id: number
    blockId: number
    categoryId: number
    _count: CategoriesOnBlocksCountAggregateOutputType | null
    _avg: CategoriesOnBlocksAvgAggregateOutputType | null
    _sum: CategoriesOnBlocksSumAggregateOutputType | null
    _min: CategoriesOnBlocksMinAggregateOutputType | null
    _max: CategoriesOnBlocksMaxAggregateOutputType | null
  }

  type GetCategoriesOnBlocksGroupByPayload<T extends CategoriesOnBlocksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesOnBlocksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesOnBlocksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesOnBlocksGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesOnBlocksGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesOnBlocksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockId?: boolean
    categoryId?: boolean
    Block?: boolean | BlockDefaultArgs<ExtArgs>
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoriesOnBlocks"]>



  export type CategoriesOnBlocksSelectScalar = {
    id?: boolean
    blockId?: boolean
    categoryId?: boolean
  }

  export type CategoriesOnBlocksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blockId" | "categoryId", ExtArgs["result"]["categoriesOnBlocks"]>
  export type CategoriesOnBlocksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Block?: boolean | BlockDefaultArgs<ExtArgs>
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $CategoriesOnBlocksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoriesOnBlocks"
    objects: {
      Block: Prisma.$BlockPayload<ExtArgs>
      Category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      blockId: number
      categoryId: number
    }, ExtArgs["result"]["categoriesOnBlocks"]>
    composites: {}
  }

  type CategoriesOnBlocksGetPayload<S extends boolean | null | undefined | CategoriesOnBlocksDefaultArgs> = $Result.GetResult<Prisma.$CategoriesOnBlocksPayload, S>

  type CategoriesOnBlocksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesOnBlocksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesOnBlocksCountAggregateInputType | true
    }

  export interface CategoriesOnBlocksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoriesOnBlocks'], meta: { name: 'CategoriesOnBlocks' } }
    /**
     * Find zero or one CategoriesOnBlocks that matches the filter.
     * @param {CategoriesOnBlocksFindUniqueArgs} args - Arguments to find a CategoriesOnBlocks
     * @example
     * // Get one CategoriesOnBlocks
     * const categoriesOnBlocks = await prisma.categoriesOnBlocks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesOnBlocksFindUniqueArgs>(args: SelectSubset<T, CategoriesOnBlocksFindUniqueArgs<ExtArgs>>): Prisma__CategoriesOnBlocksClient<$Result.GetResult<Prisma.$CategoriesOnBlocksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoriesOnBlocks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesOnBlocksFindUniqueOrThrowArgs} args - Arguments to find a CategoriesOnBlocks
     * @example
     * // Get one CategoriesOnBlocks
     * const categoriesOnBlocks = await prisma.categoriesOnBlocks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesOnBlocksFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesOnBlocksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesOnBlocksClient<$Result.GetResult<Prisma.$CategoriesOnBlocksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriesOnBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnBlocksFindFirstArgs} args - Arguments to find a CategoriesOnBlocks
     * @example
     * // Get one CategoriesOnBlocks
     * const categoriesOnBlocks = await prisma.categoriesOnBlocks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesOnBlocksFindFirstArgs>(args?: SelectSubset<T, CategoriesOnBlocksFindFirstArgs<ExtArgs>>): Prisma__CategoriesOnBlocksClient<$Result.GetResult<Prisma.$CategoriesOnBlocksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriesOnBlocks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnBlocksFindFirstOrThrowArgs} args - Arguments to find a CategoriesOnBlocks
     * @example
     * // Get one CategoriesOnBlocks
     * const categoriesOnBlocks = await prisma.categoriesOnBlocks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesOnBlocksFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesOnBlocksFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesOnBlocksClient<$Result.GetResult<Prisma.$CategoriesOnBlocksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoriesOnBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnBlocksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoriesOnBlocks
     * const categoriesOnBlocks = await prisma.categoriesOnBlocks.findMany()
     * 
     * // Get first 10 CategoriesOnBlocks
     * const categoriesOnBlocks = await prisma.categoriesOnBlocks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesOnBlocksWithIdOnly = await prisma.categoriesOnBlocks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesOnBlocksFindManyArgs>(args?: SelectSubset<T, CategoriesOnBlocksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesOnBlocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoriesOnBlocks.
     * @param {CategoriesOnBlocksCreateArgs} args - Arguments to create a CategoriesOnBlocks.
     * @example
     * // Create one CategoriesOnBlocks
     * const CategoriesOnBlocks = await prisma.categoriesOnBlocks.create({
     *   data: {
     *     // ... data to create a CategoriesOnBlocks
     *   }
     * })
     * 
     */
    create<T extends CategoriesOnBlocksCreateArgs>(args: SelectSubset<T, CategoriesOnBlocksCreateArgs<ExtArgs>>): Prisma__CategoriesOnBlocksClient<$Result.GetResult<Prisma.$CategoriesOnBlocksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoriesOnBlocks.
     * @param {CategoriesOnBlocksCreateManyArgs} args - Arguments to create many CategoriesOnBlocks.
     * @example
     * // Create many CategoriesOnBlocks
     * const categoriesOnBlocks = await prisma.categoriesOnBlocks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesOnBlocksCreateManyArgs>(args?: SelectSubset<T, CategoriesOnBlocksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoriesOnBlocks.
     * @param {CategoriesOnBlocksDeleteArgs} args - Arguments to delete one CategoriesOnBlocks.
     * @example
     * // Delete one CategoriesOnBlocks
     * const CategoriesOnBlocks = await prisma.categoriesOnBlocks.delete({
     *   where: {
     *     // ... filter to delete one CategoriesOnBlocks
     *   }
     * })
     * 
     */
    delete<T extends CategoriesOnBlocksDeleteArgs>(args: SelectSubset<T, CategoriesOnBlocksDeleteArgs<ExtArgs>>): Prisma__CategoriesOnBlocksClient<$Result.GetResult<Prisma.$CategoriesOnBlocksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoriesOnBlocks.
     * @param {CategoriesOnBlocksUpdateArgs} args - Arguments to update one CategoriesOnBlocks.
     * @example
     * // Update one CategoriesOnBlocks
     * const categoriesOnBlocks = await prisma.categoriesOnBlocks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesOnBlocksUpdateArgs>(args: SelectSubset<T, CategoriesOnBlocksUpdateArgs<ExtArgs>>): Prisma__CategoriesOnBlocksClient<$Result.GetResult<Prisma.$CategoriesOnBlocksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoriesOnBlocks.
     * @param {CategoriesOnBlocksDeleteManyArgs} args - Arguments to filter CategoriesOnBlocks to delete.
     * @example
     * // Delete a few CategoriesOnBlocks
     * const { count } = await prisma.categoriesOnBlocks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesOnBlocksDeleteManyArgs>(args?: SelectSubset<T, CategoriesOnBlocksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriesOnBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnBlocksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoriesOnBlocks
     * const categoriesOnBlocks = await prisma.categoriesOnBlocks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesOnBlocksUpdateManyArgs>(args: SelectSubset<T, CategoriesOnBlocksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoriesOnBlocks.
     * @param {CategoriesOnBlocksUpsertArgs} args - Arguments to update or create a CategoriesOnBlocks.
     * @example
     * // Update or create a CategoriesOnBlocks
     * const categoriesOnBlocks = await prisma.categoriesOnBlocks.upsert({
     *   create: {
     *     // ... data to create a CategoriesOnBlocks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoriesOnBlocks we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesOnBlocksUpsertArgs>(args: SelectSubset<T, CategoriesOnBlocksUpsertArgs<ExtArgs>>): Prisma__CategoriesOnBlocksClient<$Result.GetResult<Prisma.$CategoriesOnBlocksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoriesOnBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnBlocksCountArgs} args - Arguments to filter CategoriesOnBlocks to count.
     * @example
     * // Count the number of CategoriesOnBlocks
     * const count = await prisma.categoriesOnBlocks.count({
     *   where: {
     *     // ... the filter for the CategoriesOnBlocks we want to count
     *   }
     * })
    **/
    count<T extends CategoriesOnBlocksCountArgs>(
      args?: Subset<T, CategoriesOnBlocksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesOnBlocksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoriesOnBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnBlocksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesOnBlocksAggregateArgs>(args: Subset<T, CategoriesOnBlocksAggregateArgs>): Prisma.PrismaPromise<GetCategoriesOnBlocksAggregateType<T>>

    /**
     * Group by CategoriesOnBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnBlocksGroupByArgs} args - Group by arguments.
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
      T extends CategoriesOnBlocksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesOnBlocksGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesOnBlocksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesOnBlocksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesOnBlocksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoriesOnBlocks model
   */
  readonly fields: CategoriesOnBlocksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoriesOnBlocks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesOnBlocksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Block<T extends BlockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlockDefaultArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CategoriesOnBlocks model
   */
  interface CategoriesOnBlocksFieldRefs {
    readonly id: FieldRef<"CategoriesOnBlocks", 'Int'>
    readonly blockId: FieldRef<"CategoriesOnBlocks", 'Int'>
    readonly categoryId: FieldRef<"CategoriesOnBlocks", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CategoriesOnBlocks findUnique
   */
  export type CategoriesOnBlocksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnBlocks
     */
    select?: CategoriesOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOnBlocks
     */
    omit?: CategoriesOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOnBlocksInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOnBlocks to fetch.
     */
    where: CategoriesOnBlocksWhereUniqueInput
  }

  /**
   * CategoriesOnBlocks findUniqueOrThrow
   */
  export type CategoriesOnBlocksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnBlocks
     */
    select?: CategoriesOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOnBlocks
     */
    omit?: CategoriesOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOnBlocksInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOnBlocks to fetch.
     */
    where: CategoriesOnBlocksWhereUniqueInput
  }

  /**
   * CategoriesOnBlocks findFirst
   */
  export type CategoriesOnBlocksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnBlocks
     */
    select?: CategoriesOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOnBlocks
     */
    omit?: CategoriesOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOnBlocksInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOnBlocks to fetch.
     */
    where?: CategoriesOnBlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOnBlocks to fetch.
     */
    orderBy?: CategoriesOnBlocksOrderByWithRelationInput | CategoriesOnBlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriesOnBlocks.
     */
    cursor?: CategoriesOnBlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOnBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOnBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriesOnBlocks.
     */
    distinct?: CategoriesOnBlocksScalarFieldEnum | CategoriesOnBlocksScalarFieldEnum[]
  }

  /**
   * CategoriesOnBlocks findFirstOrThrow
   */
  export type CategoriesOnBlocksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnBlocks
     */
    select?: CategoriesOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOnBlocks
     */
    omit?: CategoriesOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOnBlocksInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOnBlocks to fetch.
     */
    where?: CategoriesOnBlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOnBlocks to fetch.
     */
    orderBy?: CategoriesOnBlocksOrderByWithRelationInput | CategoriesOnBlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriesOnBlocks.
     */
    cursor?: CategoriesOnBlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOnBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOnBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriesOnBlocks.
     */
    distinct?: CategoriesOnBlocksScalarFieldEnum | CategoriesOnBlocksScalarFieldEnum[]
  }

  /**
   * CategoriesOnBlocks findMany
   */
  export type CategoriesOnBlocksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnBlocks
     */
    select?: CategoriesOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOnBlocks
     */
    omit?: CategoriesOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOnBlocksInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOnBlocks to fetch.
     */
    where?: CategoriesOnBlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOnBlocks to fetch.
     */
    orderBy?: CategoriesOnBlocksOrderByWithRelationInput | CategoriesOnBlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoriesOnBlocks.
     */
    cursor?: CategoriesOnBlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOnBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOnBlocks.
     */
    skip?: number
    distinct?: CategoriesOnBlocksScalarFieldEnum | CategoriesOnBlocksScalarFieldEnum[]
  }

  /**
   * CategoriesOnBlocks create
   */
  export type CategoriesOnBlocksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnBlocks
     */
    select?: CategoriesOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOnBlocks
     */
    omit?: CategoriesOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOnBlocksInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoriesOnBlocks.
     */
    data: XOR<CategoriesOnBlocksCreateInput, CategoriesOnBlocksUncheckedCreateInput>
  }

  /**
   * CategoriesOnBlocks createMany
   */
  export type CategoriesOnBlocksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoriesOnBlocks.
     */
    data: CategoriesOnBlocksCreateManyInput | CategoriesOnBlocksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoriesOnBlocks update
   */
  export type CategoriesOnBlocksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnBlocks
     */
    select?: CategoriesOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOnBlocks
     */
    omit?: CategoriesOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOnBlocksInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoriesOnBlocks.
     */
    data: XOR<CategoriesOnBlocksUpdateInput, CategoriesOnBlocksUncheckedUpdateInput>
    /**
     * Choose, which CategoriesOnBlocks to update.
     */
    where: CategoriesOnBlocksWhereUniqueInput
  }

  /**
   * CategoriesOnBlocks updateMany
   */
  export type CategoriesOnBlocksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoriesOnBlocks.
     */
    data: XOR<CategoriesOnBlocksUpdateManyMutationInput, CategoriesOnBlocksUncheckedUpdateManyInput>
    /**
     * Filter which CategoriesOnBlocks to update
     */
    where?: CategoriesOnBlocksWhereInput
    /**
     * Limit how many CategoriesOnBlocks to update.
     */
    limit?: number
  }

  /**
   * CategoriesOnBlocks upsert
   */
  export type CategoriesOnBlocksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnBlocks
     */
    select?: CategoriesOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOnBlocks
     */
    omit?: CategoriesOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOnBlocksInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoriesOnBlocks to update in case it exists.
     */
    where: CategoriesOnBlocksWhereUniqueInput
    /**
     * In case the CategoriesOnBlocks found by the `where` argument doesn't exist, create a new CategoriesOnBlocks with this data.
     */
    create: XOR<CategoriesOnBlocksCreateInput, CategoriesOnBlocksUncheckedCreateInput>
    /**
     * In case the CategoriesOnBlocks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesOnBlocksUpdateInput, CategoriesOnBlocksUncheckedUpdateInput>
  }

  /**
   * CategoriesOnBlocks delete
   */
  export type CategoriesOnBlocksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnBlocks
     */
    select?: CategoriesOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOnBlocks
     */
    omit?: CategoriesOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOnBlocksInclude<ExtArgs> | null
    /**
     * Filter which CategoriesOnBlocks to delete.
     */
    where: CategoriesOnBlocksWhereUniqueInput
  }

  /**
   * CategoriesOnBlocks deleteMany
   */
  export type CategoriesOnBlocksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriesOnBlocks to delete
     */
    where?: CategoriesOnBlocksWhereInput
    /**
     * Limit how many CategoriesOnBlocks to delete.
     */
    limit?: number
  }

  /**
   * CategoriesOnBlocks without action
   */
  export type CategoriesOnBlocksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnBlocks
     */
    select?: CategoriesOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriesOnBlocks
     */
    omit?: CategoriesOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesOnBlocksInclude<ExtArgs> | null
  }


  /**
   * Model TagsOnBlocks
   */

  export type AggregateTagsOnBlocks = {
    _count: TagsOnBlocksCountAggregateOutputType | null
    _avg: TagsOnBlocksAvgAggregateOutputType | null
    _sum: TagsOnBlocksSumAggregateOutputType | null
    _min: TagsOnBlocksMinAggregateOutputType | null
    _max: TagsOnBlocksMaxAggregateOutputType | null
  }

  export type TagsOnBlocksAvgAggregateOutputType = {
    id: number | null
    blockId: number | null
    tagId: number | null
  }

  export type TagsOnBlocksSumAggregateOutputType = {
    id: number | null
    blockId: number | null
    tagId: number | null
  }

  export type TagsOnBlocksMinAggregateOutputType = {
    id: number | null
    blockId: number | null
    tagId: number | null
  }

  export type TagsOnBlocksMaxAggregateOutputType = {
    id: number | null
    blockId: number | null
    tagId: number | null
  }

  export type TagsOnBlocksCountAggregateOutputType = {
    id: number
    blockId: number
    tagId: number
    _all: number
  }


  export type TagsOnBlocksAvgAggregateInputType = {
    id?: true
    blockId?: true
    tagId?: true
  }

  export type TagsOnBlocksSumAggregateInputType = {
    id?: true
    blockId?: true
    tagId?: true
  }

  export type TagsOnBlocksMinAggregateInputType = {
    id?: true
    blockId?: true
    tagId?: true
  }

  export type TagsOnBlocksMaxAggregateInputType = {
    id?: true
    blockId?: true
    tagId?: true
  }

  export type TagsOnBlocksCountAggregateInputType = {
    id?: true
    blockId?: true
    tagId?: true
    _all?: true
  }

  export type TagsOnBlocksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagsOnBlocks to aggregate.
     */
    where?: TagsOnBlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnBlocks to fetch.
     */
    orderBy?: TagsOnBlocksOrderByWithRelationInput | TagsOnBlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsOnBlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TagsOnBlocks
    **/
    _count?: true | TagsOnBlocksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsOnBlocksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsOnBlocksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsOnBlocksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsOnBlocksMaxAggregateInputType
  }

  export type GetTagsOnBlocksAggregateType<T extends TagsOnBlocksAggregateArgs> = {
        [P in keyof T & keyof AggregateTagsOnBlocks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTagsOnBlocks[P]>
      : GetScalarType<T[P], AggregateTagsOnBlocks[P]>
  }




  export type TagsOnBlocksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsOnBlocksWhereInput
    orderBy?: TagsOnBlocksOrderByWithAggregationInput | TagsOnBlocksOrderByWithAggregationInput[]
    by: TagsOnBlocksScalarFieldEnum[] | TagsOnBlocksScalarFieldEnum
    having?: TagsOnBlocksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsOnBlocksCountAggregateInputType | true
    _avg?: TagsOnBlocksAvgAggregateInputType
    _sum?: TagsOnBlocksSumAggregateInputType
    _min?: TagsOnBlocksMinAggregateInputType
    _max?: TagsOnBlocksMaxAggregateInputType
  }

  export type TagsOnBlocksGroupByOutputType = {
    id: number
    blockId: number | null
    tagId: number | null
    _count: TagsOnBlocksCountAggregateOutputType | null
    _avg: TagsOnBlocksAvgAggregateOutputType | null
    _sum: TagsOnBlocksSumAggregateOutputType | null
    _min: TagsOnBlocksMinAggregateOutputType | null
    _max: TagsOnBlocksMaxAggregateOutputType | null
  }

  type GetTagsOnBlocksGroupByPayload<T extends TagsOnBlocksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsOnBlocksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsOnBlocksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsOnBlocksGroupByOutputType[P]>
            : GetScalarType<T[P], TagsOnBlocksGroupByOutputType[P]>
        }
      >
    >


  export type TagsOnBlocksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockId?: boolean
    tagId?: boolean
    Block?: boolean | TagsOnBlocks$BlockArgs<ExtArgs>
    Tag?: boolean | TagsOnBlocks$TagArgs<ExtArgs>
  }, ExtArgs["result"]["tagsOnBlocks"]>



  export type TagsOnBlocksSelectScalar = {
    id?: boolean
    blockId?: boolean
    tagId?: boolean
  }

  export type TagsOnBlocksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blockId" | "tagId", ExtArgs["result"]["tagsOnBlocks"]>
  export type TagsOnBlocksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Block?: boolean | TagsOnBlocks$BlockArgs<ExtArgs>
    Tag?: boolean | TagsOnBlocks$TagArgs<ExtArgs>
  }

  export type $TagsOnBlocksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TagsOnBlocks"
    objects: {
      Block: Prisma.$BlockPayload<ExtArgs> | null
      Tag: Prisma.$TagPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      blockId: number | null
      tagId: number | null
    }, ExtArgs["result"]["tagsOnBlocks"]>
    composites: {}
  }

  type TagsOnBlocksGetPayload<S extends boolean | null | undefined | TagsOnBlocksDefaultArgs> = $Result.GetResult<Prisma.$TagsOnBlocksPayload, S>

  type TagsOnBlocksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagsOnBlocksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsOnBlocksCountAggregateInputType | true
    }

  export interface TagsOnBlocksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TagsOnBlocks'], meta: { name: 'TagsOnBlocks' } }
    /**
     * Find zero or one TagsOnBlocks that matches the filter.
     * @param {TagsOnBlocksFindUniqueArgs} args - Arguments to find a TagsOnBlocks
     * @example
     * // Get one TagsOnBlocks
     * const tagsOnBlocks = await prisma.tagsOnBlocks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagsOnBlocksFindUniqueArgs>(args: SelectSubset<T, TagsOnBlocksFindUniqueArgs<ExtArgs>>): Prisma__TagsOnBlocksClient<$Result.GetResult<Prisma.$TagsOnBlocksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TagsOnBlocks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagsOnBlocksFindUniqueOrThrowArgs} args - Arguments to find a TagsOnBlocks
     * @example
     * // Get one TagsOnBlocks
     * const tagsOnBlocks = await prisma.tagsOnBlocks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagsOnBlocksFindUniqueOrThrowArgs>(args: SelectSubset<T, TagsOnBlocksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagsOnBlocksClient<$Result.GetResult<Prisma.$TagsOnBlocksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TagsOnBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnBlocksFindFirstArgs} args - Arguments to find a TagsOnBlocks
     * @example
     * // Get one TagsOnBlocks
     * const tagsOnBlocks = await prisma.tagsOnBlocks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagsOnBlocksFindFirstArgs>(args?: SelectSubset<T, TagsOnBlocksFindFirstArgs<ExtArgs>>): Prisma__TagsOnBlocksClient<$Result.GetResult<Prisma.$TagsOnBlocksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TagsOnBlocks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnBlocksFindFirstOrThrowArgs} args - Arguments to find a TagsOnBlocks
     * @example
     * // Get one TagsOnBlocks
     * const tagsOnBlocks = await prisma.tagsOnBlocks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagsOnBlocksFindFirstOrThrowArgs>(args?: SelectSubset<T, TagsOnBlocksFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagsOnBlocksClient<$Result.GetResult<Prisma.$TagsOnBlocksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TagsOnBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnBlocksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TagsOnBlocks
     * const tagsOnBlocks = await prisma.tagsOnBlocks.findMany()
     * 
     * // Get first 10 TagsOnBlocks
     * const tagsOnBlocks = await prisma.tagsOnBlocks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsOnBlocksWithIdOnly = await prisma.tagsOnBlocks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagsOnBlocksFindManyArgs>(args?: SelectSubset<T, TagsOnBlocksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsOnBlocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TagsOnBlocks.
     * @param {TagsOnBlocksCreateArgs} args - Arguments to create a TagsOnBlocks.
     * @example
     * // Create one TagsOnBlocks
     * const TagsOnBlocks = await prisma.tagsOnBlocks.create({
     *   data: {
     *     // ... data to create a TagsOnBlocks
     *   }
     * })
     * 
     */
    create<T extends TagsOnBlocksCreateArgs>(args: SelectSubset<T, TagsOnBlocksCreateArgs<ExtArgs>>): Prisma__TagsOnBlocksClient<$Result.GetResult<Prisma.$TagsOnBlocksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TagsOnBlocks.
     * @param {TagsOnBlocksCreateManyArgs} args - Arguments to create many TagsOnBlocks.
     * @example
     * // Create many TagsOnBlocks
     * const tagsOnBlocks = await prisma.tagsOnBlocks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagsOnBlocksCreateManyArgs>(args?: SelectSubset<T, TagsOnBlocksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TagsOnBlocks.
     * @param {TagsOnBlocksDeleteArgs} args - Arguments to delete one TagsOnBlocks.
     * @example
     * // Delete one TagsOnBlocks
     * const TagsOnBlocks = await prisma.tagsOnBlocks.delete({
     *   where: {
     *     // ... filter to delete one TagsOnBlocks
     *   }
     * })
     * 
     */
    delete<T extends TagsOnBlocksDeleteArgs>(args: SelectSubset<T, TagsOnBlocksDeleteArgs<ExtArgs>>): Prisma__TagsOnBlocksClient<$Result.GetResult<Prisma.$TagsOnBlocksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TagsOnBlocks.
     * @param {TagsOnBlocksUpdateArgs} args - Arguments to update one TagsOnBlocks.
     * @example
     * // Update one TagsOnBlocks
     * const tagsOnBlocks = await prisma.tagsOnBlocks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagsOnBlocksUpdateArgs>(args: SelectSubset<T, TagsOnBlocksUpdateArgs<ExtArgs>>): Prisma__TagsOnBlocksClient<$Result.GetResult<Prisma.$TagsOnBlocksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TagsOnBlocks.
     * @param {TagsOnBlocksDeleteManyArgs} args - Arguments to filter TagsOnBlocks to delete.
     * @example
     * // Delete a few TagsOnBlocks
     * const { count } = await prisma.tagsOnBlocks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagsOnBlocksDeleteManyArgs>(args?: SelectSubset<T, TagsOnBlocksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TagsOnBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnBlocksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TagsOnBlocks
     * const tagsOnBlocks = await prisma.tagsOnBlocks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagsOnBlocksUpdateManyArgs>(args: SelectSubset<T, TagsOnBlocksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TagsOnBlocks.
     * @param {TagsOnBlocksUpsertArgs} args - Arguments to update or create a TagsOnBlocks.
     * @example
     * // Update or create a TagsOnBlocks
     * const tagsOnBlocks = await prisma.tagsOnBlocks.upsert({
     *   create: {
     *     // ... data to create a TagsOnBlocks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TagsOnBlocks we want to update
     *   }
     * })
     */
    upsert<T extends TagsOnBlocksUpsertArgs>(args: SelectSubset<T, TagsOnBlocksUpsertArgs<ExtArgs>>): Prisma__TagsOnBlocksClient<$Result.GetResult<Prisma.$TagsOnBlocksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TagsOnBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnBlocksCountArgs} args - Arguments to filter TagsOnBlocks to count.
     * @example
     * // Count the number of TagsOnBlocks
     * const count = await prisma.tagsOnBlocks.count({
     *   where: {
     *     // ... the filter for the TagsOnBlocks we want to count
     *   }
     * })
    **/
    count<T extends TagsOnBlocksCountArgs>(
      args?: Subset<T, TagsOnBlocksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsOnBlocksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TagsOnBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnBlocksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsOnBlocksAggregateArgs>(args: Subset<T, TagsOnBlocksAggregateArgs>): Prisma.PrismaPromise<GetTagsOnBlocksAggregateType<T>>

    /**
     * Group by TagsOnBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnBlocksGroupByArgs} args - Group by arguments.
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
      T extends TagsOnBlocksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsOnBlocksGroupByArgs['orderBy'] }
        : { orderBy?: TagsOnBlocksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagsOnBlocksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsOnBlocksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TagsOnBlocks model
   */
  readonly fields: TagsOnBlocksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TagsOnBlocks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsOnBlocksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Block<T extends TagsOnBlocks$BlockArgs<ExtArgs> = {}>(args?: Subset<T, TagsOnBlocks$BlockArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Tag<T extends TagsOnBlocks$TagArgs<ExtArgs> = {}>(args?: Subset<T, TagsOnBlocks$TagArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TagsOnBlocks model
   */
  interface TagsOnBlocksFieldRefs {
    readonly id: FieldRef<"TagsOnBlocks", 'Int'>
    readonly blockId: FieldRef<"TagsOnBlocks", 'Int'>
    readonly tagId: FieldRef<"TagsOnBlocks", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TagsOnBlocks findUnique
   */
  export type TagsOnBlocksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnBlocks
     */
    select?: TagsOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnBlocks
     */
    omit?: TagsOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnBlocksInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnBlocks to fetch.
     */
    where: TagsOnBlocksWhereUniqueInput
  }

  /**
   * TagsOnBlocks findUniqueOrThrow
   */
  export type TagsOnBlocksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnBlocks
     */
    select?: TagsOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnBlocks
     */
    omit?: TagsOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnBlocksInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnBlocks to fetch.
     */
    where: TagsOnBlocksWhereUniqueInput
  }

  /**
   * TagsOnBlocks findFirst
   */
  export type TagsOnBlocksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnBlocks
     */
    select?: TagsOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnBlocks
     */
    omit?: TagsOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnBlocksInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnBlocks to fetch.
     */
    where?: TagsOnBlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnBlocks to fetch.
     */
    orderBy?: TagsOnBlocksOrderByWithRelationInput | TagsOnBlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsOnBlocks.
     */
    cursor?: TagsOnBlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsOnBlocks.
     */
    distinct?: TagsOnBlocksScalarFieldEnum | TagsOnBlocksScalarFieldEnum[]
  }

  /**
   * TagsOnBlocks findFirstOrThrow
   */
  export type TagsOnBlocksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnBlocks
     */
    select?: TagsOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnBlocks
     */
    omit?: TagsOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnBlocksInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnBlocks to fetch.
     */
    where?: TagsOnBlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnBlocks to fetch.
     */
    orderBy?: TagsOnBlocksOrderByWithRelationInput | TagsOnBlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsOnBlocks.
     */
    cursor?: TagsOnBlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsOnBlocks.
     */
    distinct?: TagsOnBlocksScalarFieldEnum | TagsOnBlocksScalarFieldEnum[]
  }

  /**
   * TagsOnBlocks findMany
   */
  export type TagsOnBlocksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnBlocks
     */
    select?: TagsOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnBlocks
     */
    omit?: TagsOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnBlocksInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnBlocks to fetch.
     */
    where?: TagsOnBlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnBlocks to fetch.
     */
    orderBy?: TagsOnBlocksOrderByWithRelationInput | TagsOnBlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TagsOnBlocks.
     */
    cursor?: TagsOnBlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnBlocks.
     */
    skip?: number
    distinct?: TagsOnBlocksScalarFieldEnum | TagsOnBlocksScalarFieldEnum[]
  }

  /**
   * TagsOnBlocks create
   */
  export type TagsOnBlocksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnBlocks
     */
    select?: TagsOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnBlocks
     */
    omit?: TagsOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnBlocksInclude<ExtArgs> | null
    /**
     * The data needed to create a TagsOnBlocks.
     */
    data?: XOR<TagsOnBlocksCreateInput, TagsOnBlocksUncheckedCreateInput>
  }

  /**
   * TagsOnBlocks createMany
   */
  export type TagsOnBlocksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TagsOnBlocks.
     */
    data: TagsOnBlocksCreateManyInput | TagsOnBlocksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TagsOnBlocks update
   */
  export type TagsOnBlocksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnBlocks
     */
    select?: TagsOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnBlocks
     */
    omit?: TagsOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnBlocksInclude<ExtArgs> | null
    /**
     * The data needed to update a TagsOnBlocks.
     */
    data: XOR<TagsOnBlocksUpdateInput, TagsOnBlocksUncheckedUpdateInput>
    /**
     * Choose, which TagsOnBlocks to update.
     */
    where: TagsOnBlocksWhereUniqueInput
  }

  /**
   * TagsOnBlocks updateMany
   */
  export type TagsOnBlocksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TagsOnBlocks.
     */
    data: XOR<TagsOnBlocksUpdateManyMutationInput, TagsOnBlocksUncheckedUpdateManyInput>
    /**
     * Filter which TagsOnBlocks to update
     */
    where?: TagsOnBlocksWhereInput
    /**
     * Limit how many TagsOnBlocks to update.
     */
    limit?: number
  }

  /**
   * TagsOnBlocks upsert
   */
  export type TagsOnBlocksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnBlocks
     */
    select?: TagsOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnBlocks
     */
    omit?: TagsOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnBlocksInclude<ExtArgs> | null
    /**
     * The filter to search for the TagsOnBlocks to update in case it exists.
     */
    where: TagsOnBlocksWhereUniqueInput
    /**
     * In case the TagsOnBlocks found by the `where` argument doesn't exist, create a new TagsOnBlocks with this data.
     */
    create: XOR<TagsOnBlocksCreateInput, TagsOnBlocksUncheckedCreateInput>
    /**
     * In case the TagsOnBlocks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsOnBlocksUpdateInput, TagsOnBlocksUncheckedUpdateInput>
  }

  /**
   * TagsOnBlocks delete
   */
  export type TagsOnBlocksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnBlocks
     */
    select?: TagsOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnBlocks
     */
    omit?: TagsOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnBlocksInclude<ExtArgs> | null
    /**
     * Filter which TagsOnBlocks to delete.
     */
    where: TagsOnBlocksWhereUniqueInput
  }

  /**
   * TagsOnBlocks deleteMany
   */
  export type TagsOnBlocksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagsOnBlocks to delete
     */
    where?: TagsOnBlocksWhereInput
    /**
     * Limit how many TagsOnBlocks to delete.
     */
    limit?: number
  }

  /**
   * TagsOnBlocks.Block
   */
  export type TagsOnBlocks$BlockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    where?: BlockWhereInput
  }

  /**
   * TagsOnBlocks.Tag
   */
  export type TagsOnBlocks$TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
  }

  /**
   * TagsOnBlocks without action
   */
  export type TagsOnBlocksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnBlocks
     */
    select?: TagsOnBlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TagsOnBlocks
     */
    omit?: TagsOnBlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsOnBlocksInclude<ExtArgs> | null
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


  export const UtilScalarFieldEnum: {
    id: 'id',
    name: 'name',
    commitData: 'commitData'
  };

  export type UtilScalarFieldEnum = (typeof UtilScalarFieldEnum)[keyof typeof UtilScalarFieldEnum]


  export const BlockScalarFieldEnum: {
    id: 'id',
    coreScript: 'coreScript',
    css: 'css',
    cssUrl: 'cssUrl',
    pending: 'pending',
    blockShortName: 'blockShortName',
    blockHtml: 'blockHtml',
    translatedCode: 'translatedCode',
    scriptName: 'scriptName',
    scriptUrl: 'scriptUrl',
    headingFont: 'headingFont',
    bodyFont: 'bodyFont',
    repositoryName: 'repositoryName',
    repositoryUrl: 'repositoryUrl'
  };

  export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    category: 'category'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    tag: 'tag'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const CategoryTreeScalarFieldEnum: {
    ancestorId: 'ancestorId',
    descendantId: 'descendantId',
    depth: 'depth'
  };

  export type CategoryTreeScalarFieldEnum = (typeof CategoryTreeScalarFieldEnum)[keyof typeof CategoryTreeScalarFieldEnum]


  export const CategoriesOnBlocksScalarFieldEnum: {
    id: 'id',
    blockId: 'blockId',
    categoryId: 'categoryId'
  };

  export type CategoriesOnBlocksScalarFieldEnum = (typeof CategoriesOnBlocksScalarFieldEnum)[keyof typeof CategoriesOnBlocksScalarFieldEnum]


  export const TagsOnBlocksScalarFieldEnum: {
    id: 'id',
    blockId: 'blockId',
    tagId: 'tagId'
  };

  export type TagsOnBlocksScalarFieldEnum = (typeof TagsOnBlocksScalarFieldEnum)[keyof typeof TagsOnBlocksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UtilOrderByRelevanceFieldEnum: {
    name: 'name',
    commitData: 'commitData'
  };

  export type UtilOrderByRelevanceFieldEnum = (typeof UtilOrderByRelevanceFieldEnum)[keyof typeof UtilOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BlockOrderByRelevanceFieldEnum: {
    coreScript: 'coreScript',
    css: 'css',
    cssUrl: 'cssUrl',
    blockShortName: 'blockShortName',
    blockHtml: 'blockHtml',
    translatedCode: 'translatedCode',
    scriptName: 'scriptName',
    scriptUrl: 'scriptUrl',
    headingFont: 'headingFont',
    bodyFont: 'bodyFont',
    repositoryName: 'repositoryName',
    repositoryUrl: 'repositoryUrl'
  };

  export type BlockOrderByRelevanceFieldEnum = (typeof BlockOrderByRelevanceFieldEnum)[keyof typeof BlockOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    category: 'category'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const TagOrderByRelevanceFieldEnum: {
    tag: 'tag'
  };

  export type TagOrderByRelevanceFieldEnum = (typeof TagOrderByRelevanceFieldEnum)[keyof typeof TagOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UtilWhereInput = {
    AND?: UtilWhereInput | UtilWhereInput[]
    OR?: UtilWhereInput[]
    NOT?: UtilWhereInput | UtilWhereInput[]
    id?: IntFilter<"Util"> | number
    name?: StringFilter<"Util"> | string
    commitData?: StringFilter<"Util"> | string
  }

  export type UtilOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    commitData?: SortOrder
    _relevance?: UtilOrderByRelevanceInput
  }

  export type UtilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: UtilWhereInput | UtilWhereInput[]
    OR?: UtilWhereInput[]
    NOT?: UtilWhereInput | UtilWhereInput[]
    commitData?: StringFilter<"Util"> | string
  }, "id" | "name">

  export type UtilOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    commitData?: SortOrder
    _count?: UtilCountOrderByAggregateInput
    _avg?: UtilAvgOrderByAggregateInput
    _max?: UtilMaxOrderByAggregateInput
    _min?: UtilMinOrderByAggregateInput
    _sum?: UtilSumOrderByAggregateInput
  }

  export type UtilScalarWhereWithAggregatesInput = {
    AND?: UtilScalarWhereWithAggregatesInput | UtilScalarWhereWithAggregatesInput[]
    OR?: UtilScalarWhereWithAggregatesInput[]
    NOT?: UtilScalarWhereWithAggregatesInput | UtilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Util"> | number
    name?: StringWithAggregatesFilter<"Util"> | string
    commitData?: StringWithAggregatesFilter<"Util"> | string
  }

  export type BlockWhereInput = {
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    id?: IntFilter<"Block"> | number
    coreScript?: StringNullableFilter<"Block"> | string | null
    css?: StringFilter<"Block"> | string
    cssUrl?: StringNullableFilter<"Block"> | string | null
    pending?: BoolFilter<"Block"> | boolean
    blockShortName?: StringFilter<"Block"> | string
    blockHtml?: StringFilter<"Block"> | string
    translatedCode?: StringNullableFilter<"Block"> | string | null
    scriptName?: StringNullableFilter<"Block"> | string | null
    scriptUrl?: StringNullableFilter<"Block"> | string | null
    headingFont?: StringNullableFilter<"Block"> | string | null
    bodyFont?: StringNullableFilter<"Block"> | string | null
    repositoryName?: StringNullableFilter<"Block"> | string | null
    repositoryUrl?: StringNullableFilter<"Block"> | string | null
    categories?: CategoriesOnBlocksListRelationFilter
    tags?: TagsOnBlocksListRelationFilter
  }

  export type BlockOrderByWithRelationInput = {
    id?: SortOrder
    coreScript?: SortOrderInput | SortOrder
    css?: SortOrder
    cssUrl?: SortOrderInput | SortOrder
    pending?: SortOrder
    blockShortName?: SortOrder
    blockHtml?: SortOrder
    translatedCode?: SortOrderInput | SortOrder
    scriptName?: SortOrderInput | SortOrder
    scriptUrl?: SortOrderInput | SortOrder
    headingFont?: SortOrderInput | SortOrder
    bodyFont?: SortOrderInput | SortOrder
    repositoryName?: SortOrderInput | SortOrder
    repositoryUrl?: SortOrderInput | SortOrder
    categories?: CategoriesOnBlocksOrderByRelationAggregateInput
    tags?: TagsOnBlocksOrderByRelationAggregateInput
    _relevance?: BlockOrderByRelevanceInput
  }

  export type BlockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    coreScript?: StringNullableFilter<"Block"> | string | null
    css?: StringFilter<"Block"> | string
    cssUrl?: StringNullableFilter<"Block"> | string | null
    pending?: BoolFilter<"Block"> | boolean
    blockShortName?: StringFilter<"Block"> | string
    blockHtml?: StringFilter<"Block"> | string
    translatedCode?: StringNullableFilter<"Block"> | string | null
    scriptName?: StringNullableFilter<"Block"> | string | null
    scriptUrl?: StringNullableFilter<"Block"> | string | null
    headingFont?: StringNullableFilter<"Block"> | string | null
    bodyFont?: StringNullableFilter<"Block"> | string | null
    repositoryName?: StringNullableFilter<"Block"> | string | null
    repositoryUrl?: StringNullableFilter<"Block"> | string | null
    categories?: CategoriesOnBlocksListRelationFilter
    tags?: TagsOnBlocksListRelationFilter
  }, "id">

  export type BlockOrderByWithAggregationInput = {
    id?: SortOrder
    coreScript?: SortOrderInput | SortOrder
    css?: SortOrder
    cssUrl?: SortOrderInput | SortOrder
    pending?: SortOrder
    blockShortName?: SortOrder
    blockHtml?: SortOrder
    translatedCode?: SortOrderInput | SortOrder
    scriptName?: SortOrderInput | SortOrder
    scriptUrl?: SortOrderInput | SortOrder
    headingFont?: SortOrderInput | SortOrder
    bodyFont?: SortOrderInput | SortOrder
    repositoryName?: SortOrderInput | SortOrder
    repositoryUrl?: SortOrderInput | SortOrder
    _count?: BlockCountOrderByAggregateInput
    _avg?: BlockAvgOrderByAggregateInput
    _max?: BlockMaxOrderByAggregateInput
    _min?: BlockMinOrderByAggregateInput
    _sum?: BlockSumOrderByAggregateInput
  }

  export type BlockScalarWhereWithAggregatesInput = {
    AND?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    OR?: BlockScalarWhereWithAggregatesInput[]
    NOT?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Block"> | number
    coreScript?: StringNullableWithAggregatesFilter<"Block"> | string | null
    css?: StringWithAggregatesFilter<"Block"> | string
    cssUrl?: StringNullableWithAggregatesFilter<"Block"> | string | null
    pending?: BoolWithAggregatesFilter<"Block"> | boolean
    blockShortName?: StringWithAggregatesFilter<"Block"> | string
    blockHtml?: StringWithAggregatesFilter<"Block"> | string
    translatedCode?: StringNullableWithAggregatesFilter<"Block"> | string | null
    scriptName?: StringNullableWithAggregatesFilter<"Block"> | string | null
    scriptUrl?: StringNullableWithAggregatesFilter<"Block"> | string | null
    headingFont?: StringNullableWithAggregatesFilter<"Block"> | string | null
    bodyFont?: StringNullableWithAggregatesFilter<"Block"> | string | null
    repositoryName?: StringNullableWithAggregatesFilter<"Block"> | string | null
    repositoryUrl?: StringNullableWithAggregatesFilter<"Block"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    category?: StringFilter<"Category"> | string
    Blocks?: CategoriesOnBlocksListRelationFilter
    ancestors?: CategoryTreeListRelationFilter
    descendants?: CategoryTreeListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    Blocks?: CategoriesOnBlocksOrderByRelationAggregateInput
    ancestors?: CategoryTreeOrderByRelationAggregateInput
    descendants?: CategoryTreeOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    category?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    Blocks?: CategoriesOnBlocksListRelationFilter
    ancestors?: CategoryTreeListRelationFilter
    descendants?: CategoryTreeListRelationFilter
  }, "id" | "category">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    category?: StringWithAggregatesFilter<"Category"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    tag?: StringFilter<"Tag"> | string
    Blocks?: TagsOnBlocksListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    tag?: SortOrder
    Blocks?: TagsOnBlocksOrderByRelationAggregateInput
    _relevance?: TagOrderByRelevanceInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tag?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    Blocks?: TagsOnBlocksListRelationFilter
  }, "id" | "tag">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    tag?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    tag?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type CategoryTreeWhereInput = {
    AND?: CategoryTreeWhereInput | CategoryTreeWhereInput[]
    OR?: CategoryTreeWhereInput[]
    NOT?: CategoryTreeWhereInput | CategoryTreeWhereInput[]
    ancestorId?: IntFilter<"CategoryTree"> | number
    descendantId?: IntFilter<"CategoryTree"> | number
    depth?: IntFilter<"CategoryTree"> | number
    ancestor?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    descendant?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type CategoryTreeOrderByWithRelationInput = {
    ancestorId?: SortOrder
    descendantId?: SortOrder
    depth?: SortOrder
    ancestor?: CategoryOrderByWithRelationInput
    descendant?: CategoryOrderByWithRelationInput
  }

  export type CategoryTreeWhereUniqueInput = Prisma.AtLeast<{
    ancestorId_descendantId?: CategoryTreeAncestorIdDescendantIdCompoundUniqueInput
    AND?: CategoryTreeWhereInput | CategoryTreeWhereInput[]
    OR?: CategoryTreeWhereInput[]
    NOT?: CategoryTreeWhereInput | CategoryTreeWhereInput[]
    ancestorId?: IntFilter<"CategoryTree"> | number
    descendantId?: IntFilter<"CategoryTree"> | number
    depth?: IntFilter<"CategoryTree"> | number
    ancestor?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    descendant?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "ancestorId_descendantId">

  export type CategoryTreeOrderByWithAggregationInput = {
    ancestorId?: SortOrder
    descendantId?: SortOrder
    depth?: SortOrder
    _count?: CategoryTreeCountOrderByAggregateInput
    _avg?: CategoryTreeAvgOrderByAggregateInput
    _max?: CategoryTreeMaxOrderByAggregateInput
    _min?: CategoryTreeMinOrderByAggregateInput
    _sum?: CategoryTreeSumOrderByAggregateInput
  }

  export type CategoryTreeScalarWhereWithAggregatesInput = {
    AND?: CategoryTreeScalarWhereWithAggregatesInput | CategoryTreeScalarWhereWithAggregatesInput[]
    OR?: CategoryTreeScalarWhereWithAggregatesInput[]
    NOT?: CategoryTreeScalarWhereWithAggregatesInput | CategoryTreeScalarWhereWithAggregatesInput[]
    ancestorId?: IntWithAggregatesFilter<"CategoryTree"> | number
    descendantId?: IntWithAggregatesFilter<"CategoryTree"> | number
    depth?: IntWithAggregatesFilter<"CategoryTree"> | number
  }

  export type CategoriesOnBlocksWhereInput = {
    AND?: CategoriesOnBlocksWhereInput | CategoriesOnBlocksWhereInput[]
    OR?: CategoriesOnBlocksWhereInput[]
    NOT?: CategoriesOnBlocksWhereInput | CategoriesOnBlocksWhereInput[]
    id?: IntFilter<"CategoriesOnBlocks"> | number
    blockId?: IntFilter<"CategoriesOnBlocks"> | number
    categoryId?: IntFilter<"CategoriesOnBlocks"> | number
    Block?: XOR<BlockScalarRelationFilter, BlockWhereInput>
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type CategoriesOnBlocksOrderByWithRelationInput = {
    id?: SortOrder
    blockId?: SortOrder
    categoryId?: SortOrder
    Block?: BlockOrderByWithRelationInput
    Category?: CategoryOrderByWithRelationInput
  }

  export type CategoriesOnBlocksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriesOnBlocksWhereInput | CategoriesOnBlocksWhereInput[]
    OR?: CategoriesOnBlocksWhereInput[]
    NOT?: CategoriesOnBlocksWhereInput | CategoriesOnBlocksWhereInput[]
    blockId?: IntFilter<"CategoriesOnBlocks"> | number
    categoryId?: IntFilter<"CategoriesOnBlocks"> | number
    Block?: XOR<BlockScalarRelationFilter, BlockWhereInput>
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id">

  export type CategoriesOnBlocksOrderByWithAggregationInput = {
    id?: SortOrder
    blockId?: SortOrder
    categoryId?: SortOrder
    _count?: CategoriesOnBlocksCountOrderByAggregateInput
    _avg?: CategoriesOnBlocksAvgOrderByAggregateInput
    _max?: CategoriesOnBlocksMaxOrderByAggregateInput
    _min?: CategoriesOnBlocksMinOrderByAggregateInput
    _sum?: CategoriesOnBlocksSumOrderByAggregateInput
  }

  export type CategoriesOnBlocksScalarWhereWithAggregatesInput = {
    AND?: CategoriesOnBlocksScalarWhereWithAggregatesInput | CategoriesOnBlocksScalarWhereWithAggregatesInput[]
    OR?: CategoriesOnBlocksScalarWhereWithAggregatesInput[]
    NOT?: CategoriesOnBlocksScalarWhereWithAggregatesInput | CategoriesOnBlocksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategoriesOnBlocks"> | number
    blockId?: IntWithAggregatesFilter<"CategoriesOnBlocks"> | number
    categoryId?: IntWithAggregatesFilter<"CategoriesOnBlocks"> | number
  }

  export type TagsOnBlocksWhereInput = {
    AND?: TagsOnBlocksWhereInput | TagsOnBlocksWhereInput[]
    OR?: TagsOnBlocksWhereInput[]
    NOT?: TagsOnBlocksWhereInput | TagsOnBlocksWhereInput[]
    id?: IntFilter<"TagsOnBlocks"> | number
    blockId?: IntNullableFilter<"TagsOnBlocks"> | number | null
    tagId?: IntNullableFilter<"TagsOnBlocks"> | number | null
    Block?: XOR<BlockNullableScalarRelationFilter, BlockWhereInput> | null
    Tag?: XOR<TagNullableScalarRelationFilter, TagWhereInput> | null
  }

  export type TagsOnBlocksOrderByWithRelationInput = {
    id?: SortOrder
    blockId?: SortOrderInput | SortOrder
    tagId?: SortOrderInput | SortOrder
    Block?: BlockOrderByWithRelationInput
    Tag?: TagOrderByWithRelationInput
  }

  export type TagsOnBlocksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagsOnBlocksWhereInput | TagsOnBlocksWhereInput[]
    OR?: TagsOnBlocksWhereInput[]
    NOT?: TagsOnBlocksWhereInput | TagsOnBlocksWhereInput[]
    blockId?: IntNullableFilter<"TagsOnBlocks"> | number | null
    tagId?: IntNullableFilter<"TagsOnBlocks"> | number | null
    Block?: XOR<BlockNullableScalarRelationFilter, BlockWhereInput> | null
    Tag?: XOR<TagNullableScalarRelationFilter, TagWhereInput> | null
  }, "id">

  export type TagsOnBlocksOrderByWithAggregationInput = {
    id?: SortOrder
    blockId?: SortOrderInput | SortOrder
    tagId?: SortOrderInput | SortOrder
    _count?: TagsOnBlocksCountOrderByAggregateInput
    _avg?: TagsOnBlocksAvgOrderByAggregateInput
    _max?: TagsOnBlocksMaxOrderByAggregateInput
    _min?: TagsOnBlocksMinOrderByAggregateInput
    _sum?: TagsOnBlocksSumOrderByAggregateInput
  }

  export type TagsOnBlocksScalarWhereWithAggregatesInput = {
    AND?: TagsOnBlocksScalarWhereWithAggregatesInput | TagsOnBlocksScalarWhereWithAggregatesInput[]
    OR?: TagsOnBlocksScalarWhereWithAggregatesInput[]
    NOT?: TagsOnBlocksScalarWhereWithAggregatesInput | TagsOnBlocksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TagsOnBlocks"> | number
    blockId?: IntNullableWithAggregatesFilter<"TagsOnBlocks"> | number | null
    tagId?: IntNullableWithAggregatesFilter<"TagsOnBlocks"> | number | null
  }

  export type UtilCreateInput = {
    name: string
    commitData: string
  }

  export type UtilUncheckedCreateInput = {
    id?: number
    name: string
    commitData: string
  }

  export type UtilUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    commitData?: StringFieldUpdateOperationsInput | string
  }

  export type UtilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    commitData?: StringFieldUpdateOperationsInput | string
  }

  export type UtilCreateManyInput = {
    id?: number
    name: string
    commitData: string
  }

  export type UtilUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    commitData?: StringFieldUpdateOperationsInput | string
  }

  export type UtilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    commitData?: StringFieldUpdateOperationsInput | string
  }

  export type BlockCreateInput = {
    coreScript?: string | null
    css: string
    cssUrl?: string | null
    pending?: boolean
    blockShortName: string
    blockHtml: string
    translatedCode?: string | null
    scriptName?: string | null
    scriptUrl?: string | null
    headingFont?: string | null
    bodyFont?: string | null
    repositoryName?: string | null
    repositoryUrl?: string | null
    categories?: CategoriesOnBlocksCreateNestedManyWithoutBlockInput
    tags?: TagsOnBlocksCreateNestedManyWithoutBlockInput
  }

  export type BlockUncheckedCreateInput = {
    id?: number
    coreScript?: string | null
    css: string
    cssUrl?: string | null
    pending?: boolean
    blockShortName: string
    blockHtml: string
    translatedCode?: string | null
    scriptName?: string | null
    scriptUrl?: string | null
    headingFont?: string | null
    bodyFont?: string | null
    repositoryName?: string | null
    repositoryUrl?: string | null
    categories?: CategoriesOnBlocksUncheckedCreateNestedManyWithoutBlockInput
    tags?: TagsOnBlocksUncheckedCreateNestedManyWithoutBlockInput
  }

  export type BlockUpdateInput = {
    coreScript?: NullableStringFieldUpdateOperationsInput | string | null
    css?: StringFieldUpdateOperationsInput | string
    cssUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pending?: BoolFieldUpdateOperationsInput | boolean
    blockShortName?: StringFieldUpdateOperationsInput | string
    blockHtml?: StringFieldUpdateOperationsInput | string
    translatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    scriptName?: NullableStringFieldUpdateOperationsInput | string | null
    scriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryName?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnBlocksUpdateManyWithoutBlockNestedInput
    tags?: TagsOnBlocksUpdateManyWithoutBlockNestedInput
  }

  export type BlockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    coreScript?: NullableStringFieldUpdateOperationsInput | string | null
    css?: StringFieldUpdateOperationsInput | string
    cssUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pending?: BoolFieldUpdateOperationsInput | boolean
    blockShortName?: StringFieldUpdateOperationsInput | string
    blockHtml?: StringFieldUpdateOperationsInput | string
    translatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    scriptName?: NullableStringFieldUpdateOperationsInput | string | null
    scriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryName?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnBlocksUncheckedUpdateManyWithoutBlockNestedInput
    tags?: TagsOnBlocksUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type BlockCreateManyInput = {
    id?: number
    coreScript?: string | null
    css: string
    cssUrl?: string | null
    pending?: boolean
    blockShortName: string
    blockHtml: string
    translatedCode?: string | null
    scriptName?: string | null
    scriptUrl?: string | null
    headingFont?: string | null
    bodyFont?: string | null
    repositoryName?: string | null
    repositoryUrl?: string | null
  }

  export type BlockUpdateManyMutationInput = {
    coreScript?: NullableStringFieldUpdateOperationsInput | string | null
    css?: StringFieldUpdateOperationsInput | string
    cssUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pending?: BoolFieldUpdateOperationsInput | boolean
    blockShortName?: StringFieldUpdateOperationsInput | string
    blockHtml?: StringFieldUpdateOperationsInput | string
    translatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    scriptName?: NullableStringFieldUpdateOperationsInput | string | null
    scriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryName?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    coreScript?: NullableStringFieldUpdateOperationsInput | string | null
    css?: StringFieldUpdateOperationsInput | string
    cssUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pending?: BoolFieldUpdateOperationsInput | boolean
    blockShortName?: StringFieldUpdateOperationsInput | string
    blockHtml?: StringFieldUpdateOperationsInput | string
    translatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    scriptName?: NullableStringFieldUpdateOperationsInput | string | null
    scriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryName?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    category: string
    Blocks?: CategoriesOnBlocksCreateNestedManyWithoutCategoryInput
    ancestors?: CategoryTreeCreateNestedManyWithoutAncestorInput
    descendants?: CategoryTreeCreateNestedManyWithoutDescendantInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    category: string
    Blocks?: CategoriesOnBlocksUncheckedCreateNestedManyWithoutCategoryInput
    ancestors?: CategoryTreeUncheckedCreateNestedManyWithoutAncestorInput
    descendants?: CategoryTreeUncheckedCreateNestedManyWithoutDescendantInput
  }

  export type CategoryUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    Blocks?: CategoriesOnBlocksUpdateManyWithoutCategoryNestedInput
    ancestors?: CategoryTreeUpdateManyWithoutAncestorNestedInput
    descendants?: CategoryTreeUpdateManyWithoutDescendantNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    Blocks?: CategoriesOnBlocksUncheckedUpdateManyWithoutCategoryNestedInput
    ancestors?: CategoryTreeUncheckedUpdateManyWithoutAncestorNestedInput
    descendants?: CategoryTreeUncheckedUpdateManyWithoutDescendantNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    category: string
  }

  export type CategoryUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    tag: string
    Blocks?: TagsOnBlocksCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    tag: string
    Blocks?: TagsOnBlocksUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    tag?: StringFieldUpdateOperationsInput | string
    Blocks?: TagsOnBlocksUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
    Blocks?: TagsOnBlocksUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    tag: string
  }

  export type TagUpdateManyMutationInput = {
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryTreeCreateInput = {
    depth?: number
    ancestor: CategoryCreateNestedOneWithoutAncestorsInput
    descendant: CategoryCreateNestedOneWithoutDescendantsInput
  }

  export type CategoryTreeUncheckedCreateInput = {
    ancestorId: number
    descendantId: number
    depth?: number
  }

  export type CategoryTreeUpdateInput = {
    depth?: IntFieldUpdateOperationsInput | number
    ancestor?: CategoryUpdateOneRequiredWithoutAncestorsNestedInput
    descendant?: CategoryUpdateOneRequiredWithoutDescendantsNestedInput
  }

  export type CategoryTreeUncheckedUpdateInput = {
    ancestorId?: IntFieldUpdateOperationsInput | number
    descendantId?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryTreeCreateManyInput = {
    ancestorId: number
    descendantId: number
    depth?: number
  }

  export type CategoryTreeUpdateManyMutationInput = {
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryTreeUncheckedUpdateManyInput = {
    ancestorId?: IntFieldUpdateOperationsInput | number
    descendantId?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesOnBlocksCreateInput = {
    Block: BlockCreateNestedOneWithoutCategoriesInput
    Category: CategoryCreateNestedOneWithoutBlocksInput
  }

  export type CategoriesOnBlocksUncheckedCreateInput = {
    id?: number
    blockId: number
    categoryId: number
  }

  export type CategoriesOnBlocksUpdateInput = {
    Block?: BlockUpdateOneRequiredWithoutCategoriesNestedInput
    Category?: CategoryUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type CategoriesOnBlocksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesOnBlocksCreateManyInput = {
    id?: number
    blockId: number
    categoryId: number
  }

  export type CategoriesOnBlocksUpdateManyMutationInput = {

  }

  export type CategoriesOnBlocksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnBlocksCreateInput = {
    Block?: BlockCreateNestedOneWithoutTagsInput
    Tag?: TagCreateNestedOneWithoutBlocksInput
  }

  export type TagsOnBlocksUncheckedCreateInput = {
    id?: number
    blockId?: number | null
    tagId?: number | null
  }

  export type TagsOnBlocksUpdateInput = {
    Block?: BlockUpdateOneWithoutTagsNestedInput
    Tag?: TagUpdateOneWithoutBlocksNestedInput
  }

  export type TagsOnBlocksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockId?: NullableIntFieldUpdateOperationsInput | number | null
    tagId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagsOnBlocksCreateManyInput = {
    id?: number
    blockId?: number | null
    tagId?: number | null
  }

  export type TagsOnBlocksUpdateManyMutationInput = {

  }

  export type TagsOnBlocksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockId?: NullableIntFieldUpdateOperationsInput | number | null
    tagId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UtilOrderByRelevanceInput = {
    fields: UtilOrderByRelevanceFieldEnum | UtilOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UtilCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    commitData?: SortOrder
  }

  export type UtilAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UtilMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    commitData?: SortOrder
  }

  export type UtilMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    commitData?: SortOrder
  }

  export type UtilSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoriesOnBlocksListRelationFilter = {
    every?: CategoriesOnBlocksWhereInput
    some?: CategoriesOnBlocksWhereInput
    none?: CategoriesOnBlocksWhereInput
  }

  export type TagsOnBlocksListRelationFilter = {
    every?: TagsOnBlocksWhereInput
    some?: TagsOnBlocksWhereInput
    none?: TagsOnBlocksWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoriesOnBlocksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagsOnBlocksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockOrderByRelevanceInput = {
    fields: BlockOrderByRelevanceFieldEnum | BlockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BlockCountOrderByAggregateInput = {
    id?: SortOrder
    coreScript?: SortOrder
    css?: SortOrder
    cssUrl?: SortOrder
    pending?: SortOrder
    blockShortName?: SortOrder
    blockHtml?: SortOrder
    translatedCode?: SortOrder
    scriptName?: SortOrder
    scriptUrl?: SortOrder
    headingFont?: SortOrder
    bodyFont?: SortOrder
    repositoryName?: SortOrder
    repositoryUrl?: SortOrder
  }

  export type BlockAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlockMaxOrderByAggregateInput = {
    id?: SortOrder
    coreScript?: SortOrder
    css?: SortOrder
    cssUrl?: SortOrder
    pending?: SortOrder
    blockShortName?: SortOrder
    blockHtml?: SortOrder
    translatedCode?: SortOrder
    scriptName?: SortOrder
    scriptUrl?: SortOrder
    headingFont?: SortOrder
    bodyFont?: SortOrder
    repositoryName?: SortOrder
    repositoryUrl?: SortOrder
  }

  export type BlockMinOrderByAggregateInput = {
    id?: SortOrder
    coreScript?: SortOrder
    css?: SortOrder
    cssUrl?: SortOrder
    pending?: SortOrder
    blockShortName?: SortOrder
    blockHtml?: SortOrder
    translatedCode?: SortOrder
    scriptName?: SortOrder
    scriptUrl?: SortOrder
    headingFont?: SortOrder
    bodyFont?: SortOrder
    repositoryName?: SortOrder
    repositoryUrl?: SortOrder
  }

  export type BlockSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CategoryTreeListRelationFilter = {
    every?: CategoryTreeWhereInput
    some?: CategoryTreeWhereInput
    none?: CategoryTreeWhereInput
  }

  export type CategoryTreeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagOrderByRelevanceInput = {
    fields: TagOrderByRelevanceFieldEnum | TagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type CategoryTreeAncestorIdDescendantIdCompoundUniqueInput = {
    ancestorId: number
    descendantId: number
  }

  export type CategoryTreeCountOrderByAggregateInput = {
    ancestorId?: SortOrder
    descendantId?: SortOrder
    depth?: SortOrder
  }

  export type CategoryTreeAvgOrderByAggregateInput = {
    ancestorId?: SortOrder
    descendantId?: SortOrder
    depth?: SortOrder
  }

  export type CategoryTreeMaxOrderByAggregateInput = {
    ancestorId?: SortOrder
    descendantId?: SortOrder
    depth?: SortOrder
  }

  export type CategoryTreeMinOrderByAggregateInput = {
    ancestorId?: SortOrder
    descendantId?: SortOrder
    depth?: SortOrder
  }

  export type CategoryTreeSumOrderByAggregateInput = {
    ancestorId?: SortOrder
    descendantId?: SortOrder
    depth?: SortOrder
  }

  export type BlockScalarRelationFilter = {
    is?: BlockWhereInput
    isNot?: BlockWhereInput
  }

  export type CategoriesOnBlocksCountOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoriesOnBlocksAvgOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoriesOnBlocksMaxOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoriesOnBlocksMinOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoriesOnBlocksSumOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    categoryId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BlockNullableScalarRelationFilter = {
    is?: BlockWhereInput | null
    isNot?: BlockWhereInput | null
  }

  export type TagNullableScalarRelationFilter = {
    is?: TagWhereInput | null
    isNot?: TagWhereInput | null
  }

  export type TagsOnBlocksCountOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    tagId?: SortOrder
  }

  export type TagsOnBlocksAvgOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    tagId?: SortOrder
  }

  export type TagsOnBlocksMaxOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    tagId?: SortOrder
  }

  export type TagsOnBlocksMinOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    tagId?: SortOrder
  }

  export type TagsOnBlocksSumOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    tagId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriesOnBlocksCreateNestedManyWithoutBlockInput = {
    create?: XOR<CategoriesOnBlocksCreateWithoutBlockInput, CategoriesOnBlocksUncheckedCreateWithoutBlockInput> | CategoriesOnBlocksCreateWithoutBlockInput[] | CategoriesOnBlocksUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: CategoriesOnBlocksCreateOrConnectWithoutBlockInput | CategoriesOnBlocksCreateOrConnectWithoutBlockInput[]
    createMany?: CategoriesOnBlocksCreateManyBlockInputEnvelope
    connect?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
  }

  export type TagsOnBlocksCreateNestedManyWithoutBlockInput = {
    create?: XOR<TagsOnBlocksCreateWithoutBlockInput, TagsOnBlocksUncheckedCreateWithoutBlockInput> | TagsOnBlocksCreateWithoutBlockInput[] | TagsOnBlocksUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: TagsOnBlocksCreateOrConnectWithoutBlockInput | TagsOnBlocksCreateOrConnectWithoutBlockInput[]
    createMany?: TagsOnBlocksCreateManyBlockInputEnvelope
    connect?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
  }

  export type CategoriesOnBlocksUncheckedCreateNestedManyWithoutBlockInput = {
    create?: XOR<CategoriesOnBlocksCreateWithoutBlockInput, CategoriesOnBlocksUncheckedCreateWithoutBlockInput> | CategoriesOnBlocksCreateWithoutBlockInput[] | CategoriesOnBlocksUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: CategoriesOnBlocksCreateOrConnectWithoutBlockInput | CategoriesOnBlocksCreateOrConnectWithoutBlockInput[]
    createMany?: CategoriesOnBlocksCreateManyBlockInputEnvelope
    connect?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
  }

  export type TagsOnBlocksUncheckedCreateNestedManyWithoutBlockInput = {
    create?: XOR<TagsOnBlocksCreateWithoutBlockInput, TagsOnBlocksUncheckedCreateWithoutBlockInput> | TagsOnBlocksCreateWithoutBlockInput[] | TagsOnBlocksUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: TagsOnBlocksCreateOrConnectWithoutBlockInput | TagsOnBlocksCreateOrConnectWithoutBlockInput[]
    createMany?: TagsOnBlocksCreateManyBlockInputEnvelope
    connect?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CategoriesOnBlocksUpdateManyWithoutBlockNestedInput = {
    create?: XOR<CategoriesOnBlocksCreateWithoutBlockInput, CategoriesOnBlocksUncheckedCreateWithoutBlockInput> | CategoriesOnBlocksCreateWithoutBlockInput[] | CategoriesOnBlocksUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: CategoriesOnBlocksCreateOrConnectWithoutBlockInput | CategoriesOnBlocksCreateOrConnectWithoutBlockInput[]
    upsert?: CategoriesOnBlocksUpsertWithWhereUniqueWithoutBlockInput | CategoriesOnBlocksUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: CategoriesOnBlocksCreateManyBlockInputEnvelope
    set?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    disconnect?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    delete?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    connect?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    update?: CategoriesOnBlocksUpdateWithWhereUniqueWithoutBlockInput | CategoriesOnBlocksUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: CategoriesOnBlocksUpdateManyWithWhereWithoutBlockInput | CategoriesOnBlocksUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: CategoriesOnBlocksScalarWhereInput | CategoriesOnBlocksScalarWhereInput[]
  }

  export type TagsOnBlocksUpdateManyWithoutBlockNestedInput = {
    create?: XOR<TagsOnBlocksCreateWithoutBlockInput, TagsOnBlocksUncheckedCreateWithoutBlockInput> | TagsOnBlocksCreateWithoutBlockInput[] | TagsOnBlocksUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: TagsOnBlocksCreateOrConnectWithoutBlockInput | TagsOnBlocksCreateOrConnectWithoutBlockInput[]
    upsert?: TagsOnBlocksUpsertWithWhereUniqueWithoutBlockInput | TagsOnBlocksUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: TagsOnBlocksCreateManyBlockInputEnvelope
    set?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    disconnect?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    delete?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    connect?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    update?: TagsOnBlocksUpdateWithWhereUniqueWithoutBlockInput | TagsOnBlocksUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: TagsOnBlocksUpdateManyWithWhereWithoutBlockInput | TagsOnBlocksUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: TagsOnBlocksScalarWhereInput | TagsOnBlocksScalarWhereInput[]
  }

  export type CategoriesOnBlocksUncheckedUpdateManyWithoutBlockNestedInput = {
    create?: XOR<CategoriesOnBlocksCreateWithoutBlockInput, CategoriesOnBlocksUncheckedCreateWithoutBlockInput> | CategoriesOnBlocksCreateWithoutBlockInput[] | CategoriesOnBlocksUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: CategoriesOnBlocksCreateOrConnectWithoutBlockInput | CategoriesOnBlocksCreateOrConnectWithoutBlockInput[]
    upsert?: CategoriesOnBlocksUpsertWithWhereUniqueWithoutBlockInput | CategoriesOnBlocksUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: CategoriesOnBlocksCreateManyBlockInputEnvelope
    set?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    disconnect?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    delete?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    connect?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    update?: CategoriesOnBlocksUpdateWithWhereUniqueWithoutBlockInput | CategoriesOnBlocksUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: CategoriesOnBlocksUpdateManyWithWhereWithoutBlockInput | CategoriesOnBlocksUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: CategoriesOnBlocksScalarWhereInput | CategoriesOnBlocksScalarWhereInput[]
  }

  export type TagsOnBlocksUncheckedUpdateManyWithoutBlockNestedInput = {
    create?: XOR<TagsOnBlocksCreateWithoutBlockInput, TagsOnBlocksUncheckedCreateWithoutBlockInput> | TagsOnBlocksCreateWithoutBlockInput[] | TagsOnBlocksUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: TagsOnBlocksCreateOrConnectWithoutBlockInput | TagsOnBlocksCreateOrConnectWithoutBlockInput[]
    upsert?: TagsOnBlocksUpsertWithWhereUniqueWithoutBlockInput | TagsOnBlocksUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: TagsOnBlocksCreateManyBlockInputEnvelope
    set?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    disconnect?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    delete?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    connect?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    update?: TagsOnBlocksUpdateWithWhereUniqueWithoutBlockInput | TagsOnBlocksUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: TagsOnBlocksUpdateManyWithWhereWithoutBlockInput | TagsOnBlocksUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: TagsOnBlocksScalarWhereInput | TagsOnBlocksScalarWhereInput[]
  }

  export type CategoriesOnBlocksCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoriesOnBlocksCreateWithoutCategoryInput, CategoriesOnBlocksUncheckedCreateWithoutCategoryInput> | CategoriesOnBlocksCreateWithoutCategoryInput[] | CategoriesOnBlocksUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoriesOnBlocksCreateOrConnectWithoutCategoryInput | CategoriesOnBlocksCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoriesOnBlocksCreateManyCategoryInputEnvelope
    connect?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
  }

  export type CategoryTreeCreateNestedManyWithoutAncestorInput = {
    create?: XOR<CategoryTreeCreateWithoutAncestorInput, CategoryTreeUncheckedCreateWithoutAncestorInput> | CategoryTreeCreateWithoutAncestorInput[] | CategoryTreeUncheckedCreateWithoutAncestorInput[]
    connectOrCreate?: CategoryTreeCreateOrConnectWithoutAncestorInput | CategoryTreeCreateOrConnectWithoutAncestorInput[]
    createMany?: CategoryTreeCreateManyAncestorInputEnvelope
    connect?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
  }

  export type CategoryTreeCreateNestedManyWithoutDescendantInput = {
    create?: XOR<CategoryTreeCreateWithoutDescendantInput, CategoryTreeUncheckedCreateWithoutDescendantInput> | CategoryTreeCreateWithoutDescendantInput[] | CategoryTreeUncheckedCreateWithoutDescendantInput[]
    connectOrCreate?: CategoryTreeCreateOrConnectWithoutDescendantInput | CategoryTreeCreateOrConnectWithoutDescendantInput[]
    createMany?: CategoryTreeCreateManyDescendantInputEnvelope
    connect?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
  }

  export type CategoriesOnBlocksUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoriesOnBlocksCreateWithoutCategoryInput, CategoriesOnBlocksUncheckedCreateWithoutCategoryInput> | CategoriesOnBlocksCreateWithoutCategoryInput[] | CategoriesOnBlocksUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoriesOnBlocksCreateOrConnectWithoutCategoryInput | CategoriesOnBlocksCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoriesOnBlocksCreateManyCategoryInputEnvelope
    connect?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
  }

  export type CategoryTreeUncheckedCreateNestedManyWithoutAncestorInput = {
    create?: XOR<CategoryTreeCreateWithoutAncestorInput, CategoryTreeUncheckedCreateWithoutAncestorInput> | CategoryTreeCreateWithoutAncestorInput[] | CategoryTreeUncheckedCreateWithoutAncestorInput[]
    connectOrCreate?: CategoryTreeCreateOrConnectWithoutAncestorInput | CategoryTreeCreateOrConnectWithoutAncestorInput[]
    createMany?: CategoryTreeCreateManyAncestorInputEnvelope
    connect?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
  }

  export type CategoryTreeUncheckedCreateNestedManyWithoutDescendantInput = {
    create?: XOR<CategoryTreeCreateWithoutDescendantInput, CategoryTreeUncheckedCreateWithoutDescendantInput> | CategoryTreeCreateWithoutDescendantInput[] | CategoryTreeUncheckedCreateWithoutDescendantInput[]
    connectOrCreate?: CategoryTreeCreateOrConnectWithoutDescendantInput | CategoryTreeCreateOrConnectWithoutDescendantInput[]
    createMany?: CategoryTreeCreateManyDescendantInputEnvelope
    connect?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
  }

  export type CategoriesOnBlocksUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoriesOnBlocksCreateWithoutCategoryInput, CategoriesOnBlocksUncheckedCreateWithoutCategoryInput> | CategoriesOnBlocksCreateWithoutCategoryInput[] | CategoriesOnBlocksUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoriesOnBlocksCreateOrConnectWithoutCategoryInput | CategoriesOnBlocksCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoriesOnBlocksUpsertWithWhereUniqueWithoutCategoryInput | CategoriesOnBlocksUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoriesOnBlocksCreateManyCategoryInputEnvelope
    set?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    disconnect?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    delete?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    connect?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    update?: CategoriesOnBlocksUpdateWithWhereUniqueWithoutCategoryInput | CategoriesOnBlocksUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoriesOnBlocksUpdateManyWithWhereWithoutCategoryInput | CategoriesOnBlocksUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoriesOnBlocksScalarWhereInput | CategoriesOnBlocksScalarWhereInput[]
  }

  export type CategoryTreeUpdateManyWithoutAncestorNestedInput = {
    create?: XOR<CategoryTreeCreateWithoutAncestorInput, CategoryTreeUncheckedCreateWithoutAncestorInput> | CategoryTreeCreateWithoutAncestorInput[] | CategoryTreeUncheckedCreateWithoutAncestorInput[]
    connectOrCreate?: CategoryTreeCreateOrConnectWithoutAncestorInput | CategoryTreeCreateOrConnectWithoutAncestorInput[]
    upsert?: CategoryTreeUpsertWithWhereUniqueWithoutAncestorInput | CategoryTreeUpsertWithWhereUniqueWithoutAncestorInput[]
    createMany?: CategoryTreeCreateManyAncestorInputEnvelope
    set?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    disconnect?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    delete?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    connect?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    update?: CategoryTreeUpdateWithWhereUniqueWithoutAncestorInput | CategoryTreeUpdateWithWhereUniqueWithoutAncestorInput[]
    updateMany?: CategoryTreeUpdateManyWithWhereWithoutAncestorInput | CategoryTreeUpdateManyWithWhereWithoutAncestorInput[]
    deleteMany?: CategoryTreeScalarWhereInput | CategoryTreeScalarWhereInput[]
  }

  export type CategoryTreeUpdateManyWithoutDescendantNestedInput = {
    create?: XOR<CategoryTreeCreateWithoutDescendantInput, CategoryTreeUncheckedCreateWithoutDescendantInput> | CategoryTreeCreateWithoutDescendantInput[] | CategoryTreeUncheckedCreateWithoutDescendantInput[]
    connectOrCreate?: CategoryTreeCreateOrConnectWithoutDescendantInput | CategoryTreeCreateOrConnectWithoutDescendantInput[]
    upsert?: CategoryTreeUpsertWithWhereUniqueWithoutDescendantInput | CategoryTreeUpsertWithWhereUniqueWithoutDescendantInput[]
    createMany?: CategoryTreeCreateManyDescendantInputEnvelope
    set?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    disconnect?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    delete?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    connect?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    update?: CategoryTreeUpdateWithWhereUniqueWithoutDescendantInput | CategoryTreeUpdateWithWhereUniqueWithoutDescendantInput[]
    updateMany?: CategoryTreeUpdateManyWithWhereWithoutDescendantInput | CategoryTreeUpdateManyWithWhereWithoutDescendantInput[]
    deleteMany?: CategoryTreeScalarWhereInput | CategoryTreeScalarWhereInput[]
  }

  export type CategoriesOnBlocksUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoriesOnBlocksCreateWithoutCategoryInput, CategoriesOnBlocksUncheckedCreateWithoutCategoryInput> | CategoriesOnBlocksCreateWithoutCategoryInput[] | CategoriesOnBlocksUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoriesOnBlocksCreateOrConnectWithoutCategoryInput | CategoriesOnBlocksCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoriesOnBlocksUpsertWithWhereUniqueWithoutCategoryInput | CategoriesOnBlocksUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoriesOnBlocksCreateManyCategoryInputEnvelope
    set?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    disconnect?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    delete?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    connect?: CategoriesOnBlocksWhereUniqueInput | CategoriesOnBlocksWhereUniqueInput[]
    update?: CategoriesOnBlocksUpdateWithWhereUniqueWithoutCategoryInput | CategoriesOnBlocksUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoriesOnBlocksUpdateManyWithWhereWithoutCategoryInput | CategoriesOnBlocksUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoriesOnBlocksScalarWhereInput | CategoriesOnBlocksScalarWhereInput[]
  }

  export type CategoryTreeUncheckedUpdateManyWithoutAncestorNestedInput = {
    create?: XOR<CategoryTreeCreateWithoutAncestorInput, CategoryTreeUncheckedCreateWithoutAncestorInput> | CategoryTreeCreateWithoutAncestorInput[] | CategoryTreeUncheckedCreateWithoutAncestorInput[]
    connectOrCreate?: CategoryTreeCreateOrConnectWithoutAncestorInput | CategoryTreeCreateOrConnectWithoutAncestorInput[]
    upsert?: CategoryTreeUpsertWithWhereUniqueWithoutAncestorInput | CategoryTreeUpsertWithWhereUniqueWithoutAncestorInput[]
    createMany?: CategoryTreeCreateManyAncestorInputEnvelope
    set?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    disconnect?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    delete?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    connect?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    update?: CategoryTreeUpdateWithWhereUniqueWithoutAncestorInput | CategoryTreeUpdateWithWhereUniqueWithoutAncestorInput[]
    updateMany?: CategoryTreeUpdateManyWithWhereWithoutAncestorInput | CategoryTreeUpdateManyWithWhereWithoutAncestorInput[]
    deleteMany?: CategoryTreeScalarWhereInput | CategoryTreeScalarWhereInput[]
  }

  export type CategoryTreeUncheckedUpdateManyWithoutDescendantNestedInput = {
    create?: XOR<CategoryTreeCreateWithoutDescendantInput, CategoryTreeUncheckedCreateWithoutDescendantInput> | CategoryTreeCreateWithoutDescendantInput[] | CategoryTreeUncheckedCreateWithoutDescendantInput[]
    connectOrCreate?: CategoryTreeCreateOrConnectWithoutDescendantInput | CategoryTreeCreateOrConnectWithoutDescendantInput[]
    upsert?: CategoryTreeUpsertWithWhereUniqueWithoutDescendantInput | CategoryTreeUpsertWithWhereUniqueWithoutDescendantInput[]
    createMany?: CategoryTreeCreateManyDescendantInputEnvelope
    set?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    disconnect?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    delete?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    connect?: CategoryTreeWhereUniqueInput | CategoryTreeWhereUniqueInput[]
    update?: CategoryTreeUpdateWithWhereUniqueWithoutDescendantInput | CategoryTreeUpdateWithWhereUniqueWithoutDescendantInput[]
    updateMany?: CategoryTreeUpdateManyWithWhereWithoutDescendantInput | CategoryTreeUpdateManyWithWhereWithoutDescendantInput[]
    deleteMany?: CategoryTreeScalarWhereInput | CategoryTreeScalarWhereInput[]
  }

  export type TagsOnBlocksCreateNestedManyWithoutTagInput = {
    create?: XOR<TagsOnBlocksCreateWithoutTagInput, TagsOnBlocksUncheckedCreateWithoutTagInput> | TagsOnBlocksCreateWithoutTagInput[] | TagsOnBlocksUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnBlocksCreateOrConnectWithoutTagInput | TagsOnBlocksCreateOrConnectWithoutTagInput[]
    createMany?: TagsOnBlocksCreateManyTagInputEnvelope
    connect?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
  }

  export type TagsOnBlocksUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<TagsOnBlocksCreateWithoutTagInput, TagsOnBlocksUncheckedCreateWithoutTagInput> | TagsOnBlocksCreateWithoutTagInput[] | TagsOnBlocksUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnBlocksCreateOrConnectWithoutTagInput | TagsOnBlocksCreateOrConnectWithoutTagInput[]
    createMany?: TagsOnBlocksCreateManyTagInputEnvelope
    connect?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
  }

  export type TagsOnBlocksUpdateManyWithoutTagNestedInput = {
    create?: XOR<TagsOnBlocksCreateWithoutTagInput, TagsOnBlocksUncheckedCreateWithoutTagInput> | TagsOnBlocksCreateWithoutTagInput[] | TagsOnBlocksUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnBlocksCreateOrConnectWithoutTagInput | TagsOnBlocksCreateOrConnectWithoutTagInput[]
    upsert?: TagsOnBlocksUpsertWithWhereUniqueWithoutTagInput | TagsOnBlocksUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TagsOnBlocksCreateManyTagInputEnvelope
    set?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    disconnect?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    delete?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    connect?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    update?: TagsOnBlocksUpdateWithWhereUniqueWithoutTagInput | TagsOnBlocksUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TagsOnBlocksUpdateManyWithWhereWithoutTagInput | TagsOnBlocksUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TagsOnBlocksScalarWhereInput | TagsOnBlocksScalarWhereInput[]
  }

  export type TagsOnBlocksUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<TagsOnBlocksCreateWithoutTagInput, TagsOnBlocksUncheckedCreateWithoutTagInput> | TagsOnBlocksCreateWithoutTagInput[] | TagsOnBlocksUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnBlocksCreateOrConnectWithoutTagInput | TagsOnBlocksCreateOrConnectWithoutTagInput[]
    upsert?: TagsOnBlocksUpsertWithWhereUniqueWithoutTagInput | TagsOnBlocksUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TagsOnBlocksCreateManyTagInputEnvelope
    set?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    disconnect?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    delete?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    connect?: TagsOnBlocksWhereUniqueInput | TagsOnBlocksWhereUniqueInput[]
    update?: TagsOnBlocksUpdateWithWhereUniqueWithoutTagInput | TagsOnBlocksUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TagsOnBlocksUpdateManyWithWhereWithoutTagInput | TagsOnBlocksUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TagsOnBlocksScalarWhereInput | TagsOnBlocksScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutAncestorsInput = {
    create?: XOR<CategoryCreateWithoutAncestorsInput, CategoryUncheckedCreateWithoutAncestorsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAncestorsInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutDescendantsInput = {
    create?: XOR<CategoryCreateWithoutDescendantsInput, CategoryUncheckedCreateWithoutDescendantsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDescendantsInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutAncestorsNestedInput = {
    create?: XOR<CategoryCreateWithoutAncestorsInput, CategoryUncheckedCreateWithoutAncestorsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAncestorsInput
    upsert?: CategoryUpsertWithoutAncestorsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutAncestorsInput, CategoryUpdateWithoutAncestorsInput>, CategoryUncheckedUpdateWithoutAncestorsInput>
  }

  export type CategoryUpdateOneRequiredWithoutDescendantsNestedInput = {
    create?: XOR<CategoryCreateWithoutDescendantsInput, CategoryUncheckedCreateWithoutDescendantsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDescendantsInput
    upsert?: CategoryUpsertWithoutDescendantsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutDescendantsInput, CategoryUpdateWithoutDescendantsInput>, CategoryUncheckedUpdateWithoutDescendantsInput>
  }

  export type BlockCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<BlockCreateWithoutCategoriesInput, BlockUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BlockCreateOrConnectWithoutCategoriesInput
    connect?: BlockWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutBlocksInput = {
    create?: XOR<CategoryCreateWithoutBlocksInput, CategoryUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBlocksInput
    connect?: CategoryWhereUniqueInput
  }

  export type BlockUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<BlockCreateWithoutCategoriesInput, BlockUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BlockCreateOrConnectWithoutCategoriesInput
    upsert?: BlockUpsertWithoutCategoriesInput
    connect?: BlockWhereUniqueInput
    update?: XOR<XOR<BlockUpdateToOneWithWhereWithoutCategoriesInput, BlockUpdateWithoutCategoriesInput>, BlockUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<CategoryCreateWithoutBlocksInput, CategoryUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBlocksInput
    upsert?: CategoryUpsertWithoutBlocksInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBlocksInput, CategoryUpdateWithoutBlocksInput>, CategoryUncheckedUpdateWithoutBlocksInput>
  }

  export type BlockCreateNestedOneWithoutTagsInput = {
    create?: XOR<BlockCreateWithoutTagsInput, BlockUncheckedCreateWithoutTagsInput>
    connectOrCreate?: BlockCreateOrConnectWithoutTagsInput
    connect?: BlockWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutBlocksInput = {
    create?: XOR<TagCreateWithoutBlocksInput, TagUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: TagCreateOrConnectWithoutBlocksInput
    connect?: TagWhereUniqueInput
  }

  export type BlockUpdateOneWithoutTagsNestedInput = {
    create?: XOR<BlockCreateWithoutTagsInput, BlockUncheckedCreateWithoutTagsInput>
    connectOrCreate?: BlockCreateOrConnectWithoutTagsInput
    upsert?: BlockUpsertWithoutTagsInput
    disconnect?: BlockWhereInput | boolean
    delete?: BlockWhereInput | boolean
    connect?: BlockWhereUniqueInput
    update?: XOR<XOR<BlockUpdateToOneWithWhereWithoutTagsInput, BlockUpdateWithoutTagsInput>, BlockUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneWithoutBlocksNestedInput = {
    create?: XOR<TagCreateWithoutBlocksInput, TagUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: TagCreateOrConnectWithoutBlocksInput
    upsert?: TagUpsertWithoutBlocksInput
    disconnect?: TagWhereInput | boolean
    delete?: TagWhereInput | boolean
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutBlocksInput, TagUpdateWithoutBlocksInput>, TagUncheckedUpdateWithoutBlocksInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriesOnBlocksCreateWithoutBlockInput = {
    Category: CategoryCreateNestedOneWithoutBlocksInput
  }

  export type CategoriesOnBlocksUncheckedCreateWithoutBlockInput = {
    id?: number
    categoryId: number
  }

  export type CategoriesOnBlocksCreateOrConnectWithoutBlockInput = {
    where: CategoriesOnBlocksWhereUniqueInput
    create: XOR<CategoriesOnBlocksCreateWithoutBlockInput, CategoriesOnBlocksUncheckedCreateWithoutBlockInput>
  }

  export type CategoriesOnBlocksCreateManyBlockInputEnvelope = {
    data: CategoriesOnBlocksCreateManyBlockInput | CategoriesOnBlocksCreateManyBlockInput[]
    skipDuplicates?: boolean
  }

  export type TagsOnBlocksCreateWithoutBlockInput = {
    Tag?: TagCreateNestedOneWithoutBlocksInput
  }

  export type TagsOnBlocksUncheckedCreateWithoutBlockInput = {
    id?: number
    tagId?: number | null
  }

  export type TagsOnBlocksCreateOrConnectWithoutBlockInput = {
    where: TagsOnBlocksWhereUniqueInput
    create: XOR<TagsOnBlocksCreateWithoutBlockInput, TagsOnBlocksUncheckedCreateWithoutBlockInput>
  }

  export type TagsOnBlocksCreateManyBlockInputEnvelope = {
    data: TagsOnBlocksCreateManyBlockInput | TagsOnBlocksCreateManyBlockInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesOnBlocksUpsertWithWhereUniqueWithoutBlockInput = {
    where: CategoriesOnBlocksWhereUniqueInput
    update: XOR<CategoriesOnBlocksUpdateWithoutBlockInput, CategoriesOnBlocksUncheckedUpdateWithoutBlockInput>
    create: XOR<CategoriesOnBlocksCreateWithoutBlockInput, CategoriesOnBlocksUncheckedCreateWithoutBlockInput>
  }

  export type CategoriesOnBlocksUpdateWithWhereUniqueWithoutBlockInput = {
    where: CategoriesOnBlocksWhereUniqueInput
    data: XOR<CategoriesOnBlocksUpdateWithoutBlockInput, CategoriesOnBlocksUncheckedUpdateWithoutBlockInput>
  }

  export type CategoriesOnBlocksUpdateManyWithWhereWithoutBlockInput = {
    where: CategoriesOnBlocksScalarWhereInput
    data: XOR<CategoriesOnBlocksUpdateManyMutationInput, CategoriesOnBlocksUncheckedUpdateManyWithoutBlockInput>
  }

  export type CategoriesOnBlocksScalarWhereInput = {
    AND?: CategoriesOnBlocksScalarWhereInput | CategoriesOnBlocksScalarWhereInput[]
    OR?: CategoriesOnBlocksScalarWhereInput[]
    NOT?: CategoriesOnBlocksScalarWhereInput | CategoriesOnBlocksScalarWhereInput[]
    id?: IntFilter<"CategoriesOnBlocks"> | number
    blockId?: IntFilter<"CategoriesOnBlocks"> | number
    categoryId?: IntFilter<"CategoriesOnBlocks"> | number
  }

  export type TagsOnBlocksUpsertWithWhereUniqueWithoutBlockInput = {
    where: TagsOnBlocksWhereUniqueInput
    update: XOR<TagsOnBlocksUpdateWithoutBlockInput, TagsOnBlocksUncheckedUpdateWithoutBlockInput>
    create: XOR<TagsOnBlocksCreateWithoutBlockInput, TagsOnBlocksUncheckedCreateWithoutBlockInput>
  }

  export type TagsOnBlocksUpdateWithWhereUniqueWithoutBlockInput = {
    where: TagsOnBlocksWhereUniqueInput
    data: XOR<TagsOnBlocksUpdateWithoutBlockInput, TagsOnBlocksUncheckedUpdateWithoutBlockInput>
  }

  export type TagsOnBlocksUpdateManyWithWhereWithoutBlockInput = {
    where: TagsOnBlocksScalarWhereInput
    data: XOR<TagsOnBlocksUpdateManyMutationInput, TagsOnBlocksUncheckedUpdateManyWithoutBlockInput>
  }

  export type TagsOnBlocksScalarWhereInput = {
    AND?: TagsOnBlocksScalarWhereInput | TagsOnBlocksScalarWhereInput[]
    OR?: TagsOnBlocksScalarWhereInput[]
    NOT?: TagsOnBlocksScalarWhereInput | TagsOnBlocksScalarWhereInput[]
    id?: IntFilter<"TagsOnBlocks"> | number
    blockId?: IntNullableFilter<"TagsOnBlocks"> | number | null
    tagId?: IntNullableFilter<"TagsOnBlocks"> | number | null
  }

  export type CategoriesOnBlocksCreateWithoutCategoryInput = {
    Block: BlockCreateNestedOneWithoutCategoriesInput
  }

  export type CategoriesOnBlocksUncheckedCreateWithoutCategoryInput = {
    id?: number
    blockId: number
  }

  export type CategoriesOnBlocksCreateOrConnectWithoutCategoryInput = {
    where: CategoriesOnBlocksWhereUniqueInput
    create: XOR<CategoriesOnBlocksCreateWithoutCategoryInput, CategoriesOnBlocksUncheckedCreateWithoutCategoryInput>
  }

  export type CategoriesOnBlocksCreateManyCategoryInputEnvelope = {
    data: CategoriesOnBlocksCreateManyCategoryInput | CategoriesOnBlocksCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryTreeCreateWithoutAncestorInput = {
    depth?: number
    descendant: CategoryCreateNestedOneWithoutDescendantsInput
  }

  export type CategoryTreeUncheckedCreateWithoutAncestorInput = {
    descendantId: number
    depth?: number
  }

  export type CategoryTreeCreateOrConnectWithoutAncestorInput = {
    where: CategoryTreeWhereUniqueInput
    create: XOR<CategoryTreeCreateWithoutAncestorInput, CategoryTreeUncheckedCreateWithoutAncestorInput>
  }

  export type CategoryTreeCreateManyAncestorInputEnvelope = {
    data: CategoryTreeCreateManyAncestorInput | CategoryTreeCreateManyAncestorInput[]
    skipDuplicates?: boolean
  }

  export type CategoryTreeCreateWithoutDescendantInput = {
    depth?: number
    ancestor: CategoryCreateNestedOneWithoutAncestorsInput
  }

  export type CategoryTreeUncheckedCreateWithoutDescendantInput = {
    ancestorId: number
    depth?: number
  }

  export type CategoryTreeCreateOrConnectWithoutDescendantInput = {
    where: CategoryTreeWhereUniqueInput
    create: XOR<CategoryTreeCreateWithoutDescendantInput, CategoryTreeUncheckedCreateWithoutDescendantInput>
  }

  export type CategoryTreeCreateManyDescendantInputEnvelope = {
    data: CategoryTreeCreateManyDescendantInput | CategoryTreeCreateManyDescendantInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesOnBlocksUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoriesOnBlocksWhereUniqueInput
    update: XOR<CategoriesOnBlocksUpdateWithoutCategoryInput, CategoriesOnBlocksUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoriesOnBlocksCreateWithoutCategoryInput, CategoriesOnBlocksUncheckedCreateWithoutCategoryInput>
  }

  export type CategoriesOnBlocksUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoriesOnBlocksWhereUniqueInput
    data: XOR<CategoriesOnBlocksUpdateWithoutCategoryInput, CategoriesOnBlocksUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoriesOnBlocksUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoriesOnBlocksScalarWhereInput
    data: XOR<CategoriesOnBlocksUpdateManyMutationInput, CategoriesOnBlocksUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryTreeUpsertWithWhereUniqueWithoutAncestorInput = {
    where: CategoryTreeWhereUniqueInput
    update: XOR<CategoryTreeUpdateWithoutAncestorInput, CategoryTreeUncheckedUpdateWithoutAncestorInput>
    create: XOR<CategoryTreeCreateWithoutAncestorInput, CategoryTreeUncheckedCreateWithoutAncestorInput>
  }

  export type CategoryTreeUpdateWithWhereUniqueWithoutAncestorInput = {
    where: CategoryTreeWhereUniqueInput
    data: XOR<CategoryTreeUpdateWithoutAncestorInput, CategoryTreeUncheckedUpdateWithoutAncestorInput>
  }

  export type CategoryTreeUpdateManyWithWhereWithoutAncestorInput = {
    where: CategoryTreeScalarWhereInput
    data: XOR<CategoryTreeUpdateManyMutationInput, CategoryTreeUncheckedUpdateManyWithoutAncestorInput>
  }

  export type CategoryTreeScalarWhereInput = {
    AND?: CategoryTreeScalarWhereInput | CategoryTreeScalarWhereInput[]
    OR?: CategoryTreeScalarWhereInput[]
    NOT?: CategoryTreeScalarWhereInput | CategoryTreeScalarWhereInput[]
    ancestorId?: IntFilter<"CategoryTree"> | number
    descendantId?: IntFilter<"CategoryTree"> | number
    depth?: IntFilter<"CategoryTree"> | number
  }

  export type CategoryTreeUpsertWithWhereUniqueWithoutDescendantInput = {
    where: CategoryTreeWhereUniqueInput
    update: XOR<CategoryTreeUpdateWithoutDescendantInput, CategoryTreeUncheckedUpdateWithoutDescendantInput>
    create: XOR<CategoryTreeCreateWithoutDescendantInput, CategoryTreeUncheckedCreateWithoutDescendantInput>
  }

  export type CategoryTreeUpdateWithWhereUniqueWithoutDescendantInput = {
    where: CategoryTreeWhereUniqueInput
    data: XOR<CategoryTreeUpdateWithoutDescendantInput, CategoryTreeUncheckedUpdateWithoutDescendantInput>
  }

  export type CategoryTreeUpdateManyWithWhereWithoutDescendantInput = {
    where: CategoryTreeScalarWhereInput
    data: XOR<CategoryTreeUpdateManyMutationInput, CategoryTreeUncheckedUpdateManyWithoutDescendantInput>
  }

  export type TagsOnBlocksCreateWithoutTagInput = {
    Block?: BlockCreateNestedOneWithoutTagsInput
  }

  export type TagsOnBlocksUncheckedCreateWithoutTagInput = {
    id?: number
    blockId?: number | null
  }

  export type TagsOnBlocksCreateOrConnectWithoutTagInput = {
    where: TagsOnBlocksWhereUniqueInput
    create: XOR<TagsOnBlocksCreateWithoutTagInput, TagsOnBlocksUncheckedCreateWithoutTagInput>
  }

  export type TagsOnBlocksCreateManyTagInputEnvelope = {
    data: TagsOnBlocksCreateManyTagInput | TagsOnBlocksCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type TagsOnBlocksUpsertWithWhereUniqueWithoutTagInput = {
    where: TagsOnBlocksWhereUniqueInput
    update: XOR<TagsOnBlocksUpdateWithoutTagInput, TagsOnBlocksUncheckedUpdateWithoutTagInput>
    create: XOR<TagsOnBlocksCreateWithoutTagInput, TagsOnBlocksUncheckedCreateWithoutTagInput>
  }

  export type TagsOnBlocksUpdateWithWhereUniqueWithoutTagInput = {
    where: TagsOnBlocksWhereUniqueInput
    data: XOR<TagsOnBlocksUpdateWithoutTagInput, TagsOnBlocksUncheckedUpdateWithoutTagInput>
  }

  export type TagsOnBlocksUpdateManyWithWhereWithoutTagInput = {
    where: TagsOnBlocksScalarWhereInput
    data: XOR<TagsOnBlocksUpdateManyMutationInput, TagsOnBlocksUncheckedUpdateManyWithoutTagInput>
  }

  export type CategoryCreateWithoutAncestorsInput = {
    category: string
    Blocks?: CategoriesOnBlocksCreateNestedManyWithoutCategoryInput
    descendants?: CategoryTreeCreateNestedManyWithoutDescendantInput
  }

  export type CategoryUncheckedCreateWithoutAncestorsInput = {
    id?: number
    category: string
    Blocks?: CategoriesOnBlocksUncheckedCreateNestedManyWithoutCategoryInput
    descendants?: CategoryTreeUncheckedCreateNestedManyWithoutDescendantInput
  }

  export type CategoryCreateOrConnectWithoutAncestorsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutAncestorsInput, CategoryUncheckedCreateWithoutAncestorsInput>
  }

  export type CategoryCreateWithoutDescendantsInput = {
    category: string
    Blocks?: CategoriesOnBlocksCreateNestedManyWithoutCategoryInput
    ancestors?: CategoryTreeCreateNestedManyWithoutAncestorInput
  }

  export type CategoryUncheckedCreateWithoutDescendantsInput = {
    id?: number
    category: string
    Blocks?: CategoriesOnBlocksUncheckedCreateNestedManyWithoutCategoryInput
    ancestors?: CategoryTreeUncheckedCreateNestedManyWithoutAncestorInput
  }

  export type CategoryCreateOrConnectWithoutDescendantsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutDescendantsInput, CategoryUncheckedCreateWithoutDescendantsInput>
  }

  export type CategoryUpsertWithoutAncestorsInput = {
    update: XOR<CategoryUpdateWithoutAncestorsInput, CategoryUncheckedUpdateWithoutAncestorsInput>
    create: XOR<CategoryCreateWithoutAncestorsInput, CategoryUncheckedCreateWithoutAncestorsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutAncestorsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutAncestorsInput, CategoryUncheckedUpdateWithoutAncestorsInput>
  }

  export type CategoryUpdateWithoutAncestorsInput = {
    category?: StringFieldUpdateOperationsInput | string
    Blocks?: CategoriesOnBlocksUpdateManyWithoutCategoryNestedInput
    descendants?: CategoryTreeUpdateManyWithoutDescendantNestedInput
  }

  export type CategoryUncheckedUpdateWithoutAncestorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    Blocks?: CategoriesOnBlocksUncheckedUpdateManyWithoutCategoryNestedInput
    descendants?: CategoryTreeUncheckedUpdateManyWithoutDescendantNestedInput
  }

  export type CategoryUpsertWithoutDescendantsInput = {
    update: XOR<CategoryUpdateWithoutDescendantsInput, CategoryUncheckedUpdateWithoutDescendantsInput>
    create: XOR<CategoryCreateWithoutDescendantsInput, CategoryUncheckedCreateWithoutDescendantsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutDescendantsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutDescendantsInput, CategoryUncheckedUpdateWithoutDescendantsInput>
  }

  export type CategoryUpdateWithoutDescendantsInput = {
    category?: StringFieldUpdateOperationsInput | string
    Blocks?: CategoriesOnBlocksUpdateManyWithoutCategoryNestedInput
    ancestors?: CategoryTreeUpdateManyWithoutAncestorNestedInput
  }

  export type CategoryUncheckedUpdateWithoutDescendantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    Blocks?: CategoriesOnBlocksUncheckedUpdateManyWithoutCategoryNestedInput
    ancestors?: CategoryTreeUncheckedUpdateManyWithoutAncestorNestedInput
  }

  export type BlockCreateWithoutCategoriesInput = {
    coreScript?: string | null
    css: string
    cssUrl?: string | null
    pending?: boolean
    blockShortName: string
    blockHtml: string
    translatedCode?: string | null
    scriptName?: string | null
    scriptUrl?: string | null
    headingFont?: string | null
    bodyFont?: string | null
    repositoryName?: string | null
    repositoryUrl?: string | null
    tags?: TagsOnBlocksCreateNestedManyWithoutBlockInput
  }

  export type BlockUncheckedCreateWithoutCategoriesInput = {
    id?: number
    coreScript?: string | null
    css: string
    cssUrl?: string | null
    pending?: boolean
    blockShortName: string
    blockHtml: string
    translatedCode?: string | null
    scriptName?: string | null
    scriptUrl?: string | null
    headingFont?: string | null
    bodyFont?: string | null
    repositoryName?: string | null
    repositoryUrl?: string | null
    tags?: TagsOnBlocksUncheckedCreateNestedManyWithoutBlockInput
  }

  export type BlockCreateOrConnectWithoutCategoriesInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutCategoriesInput, BlockUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutBlocksInput = {
    category: string
    ancestors?: CategoryTreeCreateNestedManyWithoutAncestorInput
    descendants?: CategoryTreeCreateNestedManyWithoutDescendantInput
  }

  export type CategoryUncheckedCreateWithoutBlocksInput = {
    id?: number
    category: string
    ancestors?: CategoryTreeUncheckedCreateNestedManyWithoutAncestorInput
    descendants?: CategoryTreeUncheckedCreateNestedManyWithoutDescendantInput
  }

  export type CategoryCreateOrConnectWithoutBlocksInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBlocksInput, CategoryUncheckedCreateWithoutBlocksInput>
  }

  export type BlockUpsertWithoutCategoriesInput = {
    update: XOR<BlockUpdateWithoutCategoriesInput, BlockUncheckedUpdateWithoutCategoriesInput>
    create: XOR<BlockCreateWithoutCategoriesInput, BlockUncheckedCreateWithoutCategoriesInput>
    where?: BlockWhereInput
  }

  export type BlockUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: BlockWhereInput
    data: XOR<BlockUpdateWithoutCategoriesInput, BlockUncheckedUpdateWithoutCategoriesInput>
  }

  export type BlockUpdateWithoutCategoriesInput = {
    coreScript?: NullableStringFieldUpdateOperationsInput | string | null
    css?: StringFieldUpdateOperationsInput | string
    cssUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pending?: BoolFieldUpdateOperationsInput | boolean
    blockShortName?: StringFieldUpdateOperationsInput | string
    blockHtml?: StringFieldUpdateOperationsInput | string
    translatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    scriptName?: NullableStringFieldUpdateOperationsInput | string | null
    scriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryName?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TagsOnBlocksUpdateManyWithoutBlockNestedInput
  }

  export type BlockUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    coreScript?: NullableStringFieldUpdateOperationsInput | string | null
    css?: StringFieldUpdateOperationsInput | string
    cssUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pending?: BoolFieldUpdateOperationsInput | boolean
    blockShortName?: StringFieldUpdateOperationsInput | string
    blockHtml?: StringFieldUpdateOperationsInput | string
    translatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    scriptName?: NullableStringFieldUpdateOperationsInput | string | null
    scriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryName?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TagsOnBlocksUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type CategoryUpsertWithoutBlocksInput = {
    update: XOR<CategoryUpdateWithoutBlocksInput, CategoryUncheckedUpdateWithoutBlocksInput>
    create: XOR<CategoryCreateWithoutBlocksInput, CategoryUncheckedCreateWithoutBlocksInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBlocksInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBlocksInput, CategoryUncheckedUpdateWithoutBlocksInput>
  }

  export type CategoryUpdateWithoutBlocksInput = {
    category?: StringFieldUpdateOperationsInput | string
    ancestors?: CategoryTreeUpdateManyWithoutAncestorNestedInput
    descendants?: CategoryTreeUpdateManyWithoutDescendantNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBlocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    ancestors?: CategoryTreeUncheckedUpdateManyWithoutAncestorNestedInput
    descendants?: CategoryTreeUncheckedUpdateManyWithoutDescendantNestedInput
  }

  export type BlockCreateWithoutTagsInput = {
    coreScript?: string | null
    css: string
    cssUrl?: string | null
    pending?: boolean
    blockShortName: string
    blockHtml: string
    translatedCode?: string | null
    scriptName?: string | null
    scriptUrl?: string | null
    headingFont?: string | null
    bodyFont?: string | null
    repositoryName?: string | null
    repositoryUrl?: string | null
    categories?: CategoriesOnBlocksCreateNestedManyWithoutBlockInput
  }

  export type BlockUncheckedCreateWithoutTagsInput = {
    id?: number
    coreScript?: string | null
    css: string
    cssUrl?: string | null
    pending?: boolean
    blockShortName: string
    blockHtml: string
    translatedCode?: string | null
    scriptName?: string | null
    scriptUrl?: string | null
    headingFont?: string | null
    bodyFont?: string | null
    repositoryName?: string | null
    repositoryUrl?: string | null
    categories?: CategoriesOnBlocksUncheckedCreateNestedManyWithoutBlockInput
  }

  export type BlockCreateOrConnectWithoutTagsInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutTagsInput, BlockUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutBlocksInput = {
    tag: string
  }

  export type TagUncheckedCreateWithoutBlocksInput = {
    id?: number
    tag: string
  }

  export type TagCreateOrConnectWithoutBlocksInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutBlocksInput, TagUncheckedCreateWithoutBlocksInput>
  }

  export type BlockUpsertWithoutTagsInput = {
    update: XOR<BlockUpdateWithoutTagsInput, BlockUncheckedUpdateWithoutTagsInput>
    create: XOR<BlockCreateWithoutTagsInput, BlockUncheckedCreateWithoutTagsInput>
    where?: BlockWhereInput
  }

  export type BlockUpdateToOneWithWhereWithoutTagsInput = {
    where?: BlockWhereInput
    data: XOR<BlockUpdateWithoutTagsInput, BlockUncheckedUpdateWithoutTagsInput>
  }

  export type BlockUpdateWithoutTagsInput = {
    coreScript?: NullableStringFieldUpdateOperationsInput | string | null
    css?: StringFieldUpdateOperationsInput | string
    cssUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pending?: BoolFieldUpdateOperationsInput | boolean
    blockShortName?: StringFieldUpdateOperationsInput | string
    blockHtml?: StringFieldUpdateOperationsInput | string
    translatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    scriptName?: NullableStringFieldUpdateOperationsInput | string | null
    scriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryName?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnBlocksUpdateManyWithoutBlockNestedInput
  }

  export type BlockUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    coreScript?: NullableStringFieldUpdateOperationsInput | string | null
    css?: StringFieldUpdateOperationsInput | string
    cssUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pending?: BoolFieldUpdateOperationsInput | boolean
    blockShortName?: StringFieldUpdateOperationsInput | string
    blockHtml?: StringFieldUpdateOperationsInput | string
    translatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    scriptName?: NullableStringFieldUpdateOperationsInput | string | null
    scriptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryName?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnBlocksUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type TagUpsertWithoutBlocksInput = {
    update: XOR<TagUpdateWithoutBlocksInput, TagUncheckedUpdateWithoutBlocksInput>
    create: XOR<TagCreateWithoutBlocksInput, TagUncheckedCreateWithoutBlocksInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutBlocksInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutBlocksInput, TagUncheckedUpdateWithoutBlocksInput>
  }

  export type TagUpdateWithoutBlocksInput = {
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutBlocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesOnBlocksCreateManyBlockInput = {
    id?: number
    categoryId: number
  }

  export type TagsOnBlocksCreateManyBlockInput = {
    id?: number
    tagId?: number | null
  }

  export type CategoriesOnBlocksUpdateWithoutBlockInput = {
    Category?: CategoryUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type CategoriesOnBlocksUncheckedUpdateWithoutBlockInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesOnBlocksUncheckedUpdateManyWithoutBlockInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnBlocksUpdateWithoutBlockInput = {
    Tag?: TagUpdateOneWithoutBlocksNestedInput
  }

  export type TagsOnBlocksUncheckedUpdateWithoutBlockInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagsOnBlocksUncheckedUpdateManyWithoutBlockInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoriesOnBlocksCreateManyCategoryInput = {
    id?: number
    blockId: number
  }

  export type CategoryTreeCreateManyAncestorInput = {
    descendantId: number
    depth?: number
  }

  export type CategoryTreeCreateManyDescendantInput = {
    ancestorId: number
    depth?: number
  }

  export type CategoriesOnBlocksUpdateWithoutCategoryInput = {
    Block?: BlockUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoriesOnBlocksUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesOnBlocksUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryTreeUpdateWithoutAncestorInput = {
    depth?: IntFieldUpdateOperationsInput | number
    descendant?: CategoryUpdateOneRequiredWithoutDescendantsNestedInput
  }

  export type CategoryTreeUncheckedUpdateWithoutAncestorInput = {
    descendantId?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryTreeUncheckedUpdateManyWithoutAncestorInput = {
    descendantId?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryTreeUpdateWithoutDescendantInput = {
    depth?: IntFieldUpdateOperationsInput | number
    ancestor?: CategoryUpdateOneRequiredWithoutAncestorsNestedInput
  }

  export type CategoryTreeUncheckedUpdateWithoutDescendantInput = {
    ancestorId?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryTreeUncheckedUpdateManyWithoutDescendantInput = {
    ancestorId?: IntFieldUpdateOperationsInput | number
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnBlocksCreateManyTagInput = {
    id?: number
    blockId?: number | null
  }

  export type TagsOnBlocksUpdateWithoutTagInput = {
    Block?: BlockUpdateOneWithoutTagsNestedInput
  }

  export type TagsOnBlocksUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagsOnBlocksUncheckedUpdateManyWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockId?: NullableIntFieldUpdateOperationsInput | number | null
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
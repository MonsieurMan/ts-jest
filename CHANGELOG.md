# [27.0.0-next.10](https://github.com/kulshekhar/ts-jest/compare/v27.0.0-next.9...v27.0.0-next.10) (2021-03-30)


### Bug Fixes

* **compiler:** retype check other files if processing file is used by those ones in watch mode ([#2481](https://github.com/kulshekhar/ts-jest/issues/2481)) ([ac8f3d0](https://github.com/kulshekhar/ts-jest/commit/ac8f3d025de67bfc2708a8422ee657fc42455513)), closes [#943](https://github.com/kulshekhar/ts-jest/issues/943)
* declare missing export for `jest-preset` ([#2477](https://github.com/kulshekhar/ts-jest/issues/2477)) ([fc3da9b](https://github.com/kulshekhar/ts-jest/commit/fc3da9b09e366c5491633d7bf0545716531f6d76))


### Features

* support jest **27.0.0-next.6** ([#2476](https://github.com/kulshekhar/ts-jest/issues/2476)) ([6452e30](https://github.com/kulshekhar/ts-jest/commit/6452e30e818c303018b2c21aba4d4c5f901f3e63))


## BREAKING CHANGES

* follow Jest node engines ([#2478](https://github.com/kulshekhar/ts-jest/pull/2478)) ([1fecf7f](https://github.com/kulshekhar/ts-jest/commit/1fecf7ff92a5f1a0cc6ea1d27026f9f54a3d5ead))
* add `exports` field to `package.json`, see https://nodejs.org/api/packages.html#packages_package_entry_points ([#2467](https://github.com/kulshekhar/ts-jest/pull/2467)) ([d3aba3e](https://github.com/kulshekhar/ts-jest/commit/d3aba3e103f85b3a42d0e2ecaea9d3457917319e))



# [27.0.0-next.9](https://github.com/kulshekhar/ts-jest/compare/v27.0.0-next.8...v27.0.0-next.9) (2021-03-19)


### Bug Fixes

* **compiler:** initialize compiler with `.ts`/`.tsx`/`.d.ts` files only ([#2458](https://github.com/kulshekhar/ts-jest/issues/2458)) ([a89f0e2](https://github.com/kulshekhar/ts-jest/commit/a89f0e2061e01440337dde4134639ff6a2d69936)), closes [#2445](https://github.com/kulshekhar/ts-jest/issues/2445)


### Features

* adopt `jest@27.0.0-next.5` ([#2450](https://github.com/kulshekhar/ts-jest/issues/2450)) ([b714da3](https://github.com/kulshekhar/ts-jest/commit/b714da36e2cb9fa7cc22591b12f301d904334a3f)), closes [#2459](https://github.com/kulshekhar/ts-jest/issues/2459)



## [26.5.4](https://github.com/kulshekhar/ts-jest/compare/v26.5.3...v26.5.4) (2021-03-17)


### Bug Fixes

* **compiler:** initialize compiler with `.ts`/`.tsx`/`.d.ts` files only ([#2457](https://github.com/kulshekhar/ts-jest/issues/2457)) ([1dc731a](https://github.com/kulshekhar/ts-jest/commit/1dc731a5faf7cda59db1cc642eb99fae973b1246)), closes [#2445](https://github.com/kulshekhar/ts-jest/issues/2445)



# [27.0.0-next.8](https://github.com/kulshekhar/ts-jest/compare/v27.0.0-next.7...v27.0.0-next.8) (2021-03-11)


### Bug Fixes

* **compiler:** resolve nested imported modules for each processing file ([#2436](https://github.com/kulshekhar/ts-jest/issues/2436)) ([3cb9019](https://github.com/kulshekhar/ts-jest/commit/3cb9019289bb64deecffaf52e840faf6a4656092)), closes [#1390](https://github.com/kulshekhar/ts-jest/issues/1390) [#1747](https://github.com/kulshekhar/ts-jest/issues/1747)
* **config:** create fallback jest config when jest config is `undefined` ([#2433](https://github.com/kulshekhar/ts-jest/issues/2433)) ([c6d6e4c](https://github.com/kulshekhar/ts-jest/commit/c6d6e4cd534e1c368fcb7141784ee43584525ca4)), closes [#2085](https://github.com/kulshekhar/ts-jest/issues/2085)
* remove `@types/jest` from direct dep ([#2409](https://github.com/kulshekhar/ts-jest/issues/2409)) ([8913120](https://github.com/kulshekhar/ts-jest/commit/89131203c358c8f9e89655800e500a9e88a17334)), closes [#2406](https://github.com/kulshekhar/ts-jest/issues/2406) [#2411](https://github.com/kulshekhar/ts-jest/issues/2411)
* **compiler:** return original file content and show warning on emit skip ([#2410](https://github.com/kulshekhar/ts-jest/issues/2410)) ([c2b2164](https://github.com/kulshekhar/ts-jest/commit/c2b2164ddd1e606fc2490326244a6efc63f6c4a0)), closes [#2407](https://github.com/kulshekhar/ts-jest/issues/2407)
* **compiler:** type check correctly in watch mode when a file content itself has changed ([#2405](https://github.com/kulshekhar/ts-jest/issues/2405)) ([064bf3a](https://github.com/kulshekhar/ts-jest/commit/064bf3a73e9a304aa9366d27db8973b68be23ffd)), closes [#2118](https://github.com/kulshekhar/ts-jest/issues/2118)


### Features

* adopt jest **27.0.0-next.4** ([#2435](https://github.com/kulshekhar/ts-jest/issues/2435)) ([1d411f2](https://github.com/kulshekhar/ts-jest/commit/1d411f285e4f7eff7982c3917b6b91b5af617e8a))



## [26.5.3](https://github.com/kulshekhar/ts-jest/compare/v26.5.2...v26.5.3) (2021-03-03)


### Bug Fixes

* **config:** create fallback jest config when jest config is undefined ([#2421](https://github.com/kulshekhar/ts-jest/issues/2421)) ([0fb6b45](https://github.com/kulshekhar/ts-jest/commit/0fb6b45e7dc3dd7588d27f09ac9a8849dff470cb)), closes [#2085](https://github.com/kulshekhar/ts-jest/issues/2085)
* remove `@types/jest` from direct dep ([#2416](https://github.com/kulshekhar/ts-jest/issues/2416)) ([060302e](https://github.com/kulshekhar/ts-jest/commit/060302ed1eb8708df0acd7ab1d613ff06fc08cf3)), closes [#2406](https://github.com/kulshekhar/ts-jest/issues/2406) [#2411](https://github.com/kulshekhar/ts-jest/issues/2411)
* **compiler:** return original file content on emit skip ([#2408](https://github.com/kulshekhar/ts-jest/issues/2408)) ([cfba8f4](https://github.com/kulshekhar/ts-jest/commit/cfba8f423dd59536d8b1e1374ef2b20bff2ed857)), closes [#2407](https://github.com/kulshekhar/ts-jest/issues/2407)



# [27.0.0-next.7](https://github.com/kulshekhar/ts-jest/compare/v27.0.0-next.6...v27.0.0-next.7) (2021-02-24)


### Bug Fixes

* **compiler:** exclude files in `outDir` from compiler source files ([#2375](https://github.com/kulshekhar/ts-jest/issues/2375)) ([ec68c74](https://github.com/kulshekhar/ts-jest/commit/ec68c74bccf56d682a7ed9e5c48ea676dcf3fbf9)), closes [#2350](https://github.com/kulshekhar/ts-jest/issues/2350) [#2374](https://github.com/kulshekhar/ts-jest/issues/2374)
* **config:** cache config and compiler correctly between runs ([#2356](https://github.com/kulshekhar/ts-jest/issues/2356)) ([5f91336](https://github.com/kulshekhar/ts-jest/commit/5f91336b9023da1051cc85b509ad02c525679fcb))
* **config:** improve emit skipped error message ([#2358](https://github.com/kulshekhar/ts-jest/issues/2358)) ([2ae8df4](https://github.com/kulshekhar/ts-jest/commit/2ae8df4515d6f6e975e57719a89184b5583f9e2f)), closes [#2350](https://github.com/kulshekhar/ts-jest/issues/2350)
* **typings:** set correct typing for `tsconfig` option ([#2383](https://github.com/kulshekhar/ts-jest/issues/2383)) ([584324a](https://github.com/kulshekhar/ts-jest/commit/584324a60c0784275e9bf8bcfd0814735a250d24)), closes [#2368](https://github.com/kulshekhar/ts-jest/issues/2368)



## [26.5.2](https://github.com/kulshekhar/ts-jest/compare/v26.5.1...v26.5.2) (2021-02-21)


### Bug Fixes

* **compiler:** exclude files in `outDir` from compiler source files ([#2376](https://github.com/kulshekhar/ts-jest/issues/2376)) ([9034677](https://github.com/kulshekhar/ts-jest/commit/9034677f9ce0968339d3d942a70e888996fac532)), closes [#2350](https://github.com/kulshekhar/ts-jest/issues/2350) [#2374](https://github.com/kulshekhar/ts-jest/issues/2374)
* **config:** define `matchTestFilePath` before `setupTsJestCfg` ([#2373](https://github.com/kulshekhar/ts-jest/issues/2373)) ([c427fea](https://github.com/kulshekhar/ts-jest/commit/c427fea48a24b5ce6e8b9260d3c322583b062a77)), closes [#2371](https://github.com/kulshekhar/ts-jest/issues/2371)
* **config:** improve emit skipped error message ([#2357](https://github.com/kulshekhar/ts-jest/issues/2357)) ([f2808bb](https://github.com/kulshekhar/ts-jest/commit/f2808bb0b15231c67ccb9a97ed606741213c03e6))
* **typings:** set correct typing for `tsconfig`/`tsConfig` option ([#2377](https://github.com/kulshekhar/ts-jest/issues/2377)) ([d4f6aff](https://github.com/kulshekhar/ts-jest/commit/d4f6aff3f181761bf25c64ff1a97dd19a69196f9)), closes [#2368](https://github.com/kulshekhar/ts-jest/issues/2368)


# [27.0.0-next.6](https://github.com/kulshekhar/ts-jest/compare/v27.0.0-next.5...v27.0.0-next.6) (2021-02-11)


### Bug Fixes

* **config:** invalidate Jest transform cache when `astTransformers` value changes ([#2345](https://github.com/kulshekhar/ts-jest/issues/2345)) ([d726016](https://github.com/kulshekhar/ts-jest/commit/d726016a17a26215fad782cf57bb9b9bec807307))


### Features

* **compiler:** expose `TsCompiler` as public api ([#2344](https://github.com/kulshekhar/ts-jest/issues/2344)) ([871cd6a](https://github.com/kulshekhar/ts-jest/commit/871cd6a3abb10569a04d05f72bbb41c952665ed4))
* **config:** support typed config options for jest config typescript ([#2335](https://github.com/kulshekhar/ts-jest/issues/2335)) ([3cfc37b](https://github.com/kulshekhar/ts-jest/commit/3cfc37b1eba125fe861cea0415095dbe1f538520))
* **presets:** add typing for `presets` entry point ([#2337](https://github.com/kulshekhar/ts-jest/issues/2337)) ([1a3058f](https://github.com/kulshekhar/ts-jest/commit/1a3058f3b7f8a2e377cb6a7e829cea310a06d4fa))



## [26.5.1](https://github.com/kulshekhar/ts-jest/compare/v26.5.0...v26.5.1) (2021-02-09)


### Features

* **config:** support typed config options for jest config typescript ([#2336](https://github.com/kulshekhar/ts-jest/issues/2336)) ([f4f5d32](https://github.com/kulshekhar/ts-jest/commit/f4f5d3205d1c80e545a32c02c6a66e7e91386f7f))
* **presets:** add typing for `presets` entry point ([#2341](https://github.com/kulshekhar/ts-jest/issues/2341)) ([e12b004](https://github.com/kulshekhar/ts-jest/commit/e12b004dcc5848d5ae0638e885147c54e11cc72b)), closes [#2325](https://github.com/kulshekhar/ts-jest/issues/2325)



# [27.0.0-next.5](https://github.com/kulshekhar/ts-jest/compare/v27.0.0-next.4...v27.0.0-next.5) (2021-02-04)


### Features

* **compiler:** allow custom transformers to access internal `Program` ([#2299](https://github.com/kulshekhar/ts-jest/issues/2299)) ([387964f](https://github.com/kulshekhar/ts-jest/commit/387964faed14ce24d2cf8170a04eee244d69b8b9))


### BREAKING CHANGES

`ts-jest` custom AST transformer function signature has changed to
```
import type { TsCompilerInstance } from 'ts-jest/dist/types'

export function factory(compilerInstance: TsCompilerInstance) {
   //...
}
```



# [26.5.0](https://github.com/kulshekhar/ts-jest/compare/v26.5.0...v26.4.4) (2021-01-29)


### Bug Fixes

* reduce size of `node_modules` when adding `ts-jest` ([#2309](https://github.com/kulshekhar/ts-jest/issues/2309)) ([6bf2e8a](https://github.com/kulshekhar/ts-jest/commit/b8d5d2090567f23947d9efd87f5f869b16bf2e8a))


### Features

* introduce `exclude` to exclude files from diagnostics ([#2308](https://github.com/kulshekhar/ts-jest/issues/2308)) ([cd82fd3](https://github.com/kulshekhar/ts-jest/commit/0c555c250774a7fd9e356cf20a3d8b693cd82fd3))


### DEPRECATIONS

* **config**: deprecate `pathRegex` in favor of `exclude` ([#2308](https://github.com/kulshekhar/ts-jest/issues/2308)) ([cd82fd3](https://github.com/kulshekhar/ts-jest/commit/0c555c250774a7fd9e356cf20a3d8b693cd82fd3))



# [27.0.0-next.4](https://github.com/kulshekhar/ts-jest/compare/v27.0.0-next.3...v27.0.0-next.4) (2021-01-22)


### Features

* **config:** replace `pathRegex` with `exclude` ([#2295](https://github.com/kulshekhar/ts-jest/issues/2295)) ([f2f99c3](https://github.com/kulshekhar/ts-jest/commit/f2f99c3a46ac18a1fd6cc98922329b71a7e8c4e8))
* **config:** type checking `js` files based on `checkJs` ([#2283](https://github.com/kulshekhar/ts-jest/issues/2283)) ([1e04433](https://github.com/kulshekhar/ts-jest/commit/1e044335a38907ff5c06eb43efeb2e5fd9769a0c))


### BREAKING CHANGES

* One is currently using `pathRegex` should use `exclude` with Glob patterns.
* If one currently relies on type check for `js` files, please set `checkJs: true` in your tsconfig



# [27.0.0-next.3](https://github.com/kulshekhar/ts-jest/compare/v27.0.0-next.2...v27.0.0-next.3) (2021-01-14)


### Bug Fixes

* reduce size of node_modules when adding ts-jest ([#2263](https://github.com/kulshekhar/ts-jest/issues/2263)) ([8e0675c](https://github.com/kulshekhar/ts-jest/commit/8e0675c02b6095af6656df50c8782c01ad9e87a3))


### Features

* **compiler:** support ESM for `isolatedModules: false` ([#2269](https://github.com/kulshekhar/ts-jest/issues/2269)) ([9bb0c05](https://github.com/kulshekhar/ts-jest/commit/9bb0c054a3a7bd8949b0c12b2bb42348f69e2e2e)), closes [#1709](https://github.com/kulshekhar/ts-jest/issues/1709)



# [27.0.0-next.2](https://github.com/kulshekhar/ts-jest/compare/v27.0.0-alpha.1...v27.0.0-next.2) (2020-12-17)


### Bug Fixes

* redo type checking when type has changed in watch mode ([#2167](https://github.com/kulshekhar/ts-jest/issues/2167)) ([ec70365](https://github.com/kulshekhar/ts-jest/commit/ec7036517ac218c2dc9cc20f5127025d21d5ada6)), closes [#2118](https://github.com/kulshekhar/ts-jest/issues/2118) [#1122](https://github.com/kulshekhar/ts-jest/issues/1122) [#943](https://github.com/kulshekhar/ts-jest/issues/943)


### Features

* **compiler:** allow `isolatedModule: true` to have ESM support ([#2219](https://github.com/kulshekhar/ts-jest/issues/2219)) ([e101db0](https://github.com/kulshekhar/ts-jest/commit/e101db01095ce75ce9a48e27a1d9bf84bb8e19ee)), closes [#1709](https://github.com/kulshekhar/ts-jest/issues/1709)
* **presets:** add 3 new presets to work with ESM ([#2207](https://github.com/kulshekhar/ts-jest/issues/2207)) ([c277858](https://github.com/kulshekhar/ts-jest/commit/c277858c7820d8873c2d7d0c6e3704a47868d600))
* allow subclasses of `TsJestTransformer` to have version checking ([#2176](https://github.com/kulshekhar/ts-jest/issues/2176)) ([ca8d7c4](https://github.com/kulshekhar/ts-jest/commit/ca8d7c44779105ef208d17cdd8c6baaf96b479ad))
* support jest 27 ([#2171](https://github.com/kulshekhar/ts-jest/issues/2171)) ([9909b9d](https://github.com/kulshekhar/ts-jest/commit/9909b9d6b6c72b4c64d2d0ff46f142b2a65a7eae))


### Performance Improvements

* reuse jest file system cache for `isolatedModules: false` ([#2189](https://github.com/kulshekhar/ts-jest/issues/2189)) ([68f446b](https://github.com/kulshekhar/ts-jest/commit/68f446b8351bb8925ac4822aa631aa6b23f2f711))



# [27.0.0-alpha.1](https://github.com/kulshekhar/ts-jest/compare/v27.0.0-alpha.0...v27.0.0-alpha.1) (2020-11-26)


### BREAKING CHANGES

* By default, when no `target` is defined in `tsconfig`, `ts-jest` will transform codes to ES2015 syntax
* Now both `isolatedModules: true` and `isolatedModule: false` codes are in one single class `TsCompiler` which is an instance created in `TsJestCompiler` based on config option `compiler` with value `typescript` or `ttypescript`.




# [27.0.0-alpha.0](https://github.com/kulshekhar/ts-jest/compare/v26.4.4...v27.0.0-alpha.0) (2020-11-11)


### Build System

* **devs-infra:** build package with target `es2015` ([#2130](https://github.com/kulshekhar/ts-jest/issues/2130)) ([6bd101c](https://github.com/kulshekhar/ts-jest/commit/6bd101ccde60e263352de5bee4a6bd38987eb0ca))


### Code Refactoring

* **config:** remove support for `astTransformers` string array ([#2129](https://github.com/kulshekhar/ts-jest/issues/2129)) ([1e0b2ce](https://github.com/kulshekhar/ts-jest/commit/1e0b2ce5599a35c108712456e455bf29c8c5fd24))
* **config:** remove support for `packageJson` option ([#2128](https://github.com/kulshekhar/ts-jest/issues/2128)) ([05916b9](https://github.com/kulshekhar/ts-jest/commit/05916b920160da5b43a20b47025eea43b4a1a5c3))
* move jest transformer class to package entry ([#2122](https://github.com/kulshekhar/ts-jest/issues/2122)) ([5bbfd06](https://github.com/kulshekhar/ts-jest/commit/5bbfd06a0c114dbecd75b763bcfa76d4a6203ab1))
* **config:** remove support for `tsConfig` option ([#2127](https://github.com/kulshekhar/ts-jest/issues/2127)) ([3cc9b80](https://github.com/kulshekhar/ts-jest/commit/3cc9b806be2b2096b981253d39ca40df65bb0f7b))


### BREAKING CHANGES

* **config:** `packageJson` config option is not used in internal `ts-jest` so this option is now removed
* **devs-infra:** `ts-jest` no longer ships with `es5` build but now with `es2015`
* **config:** One is defining ast transformers in `jest.config.js`/`package.json` should change to
```
// jest.config.js
module.exports = {
   //...
   globals: {
      'ts-jest': {
         astTransformers: {
           before: ['your_before_transformer_path'],
           after: ['your_after_transformer_path'],
           afterDeclarations: ['your_afterDeclarations_transformer_path'],
         }
      }
   }
}
```

or
```
// package.json
{
  "jest": {
     "globals": {
        "ts-jest": {
           "astTransformers": {
              "before": ["your_before_transformer_path"],
              "after": ["your_after_transformer_path"],
              "afterDeclarations": ["your_afterDeclarations_transformer_path"]
           }
        }
     }
  }
}
```
- One currently refers type in `jest.config.js`
```
/** @typedef {import('ts-jest')} */
module.exports = {
  //...
}
```

should change to
```
/** @typedef {import('ts-jest/dist/types')} */
module.exports = {
  //...
}
```

- Remove possibilities to import `mocked`, `createJestPreset`, `pathsToModuleNameMapper` from package entry. One should change to
```
import { mocked, createJestPreset, pathsToModuleNameMapper` } from 'ts-jest/utils'
```
* **config:** One currently uses `tsConfig` should change to `tsconfig` in your `jest.config.js` or `package.json`



## [26.4.4](https://github.com/kulshekhar/ts-jest/compare/v26.4.3...v26.4.4) (2020-11-08)


### Bug Fixes

* revert usage of `@jest/create-cache-key-function` ([#2108](https://github.com/kulshekhar/ts-jest/issues/2108)) ([dee8231](https://github.com/kulshekhar/ts-jest/commit/dee823172ce1e8eb9e0b2dd3aeed1ab4033bd0d9)), closes [#2080](https://github.com/kulshekhar/ts-jest/issues/2080) [#2090](https://github.com/kulshekhar/ts-jest/issues/2090) [#2104](https://github.com/kulshekhar/ts-jest/issues/2104)


### Features

* **testing:** expose all types for util `mocked` ([#2096](https://github.com/kulshekhar/ts-jest/issues/2096)) ([b1d072b](https://github.com/kulshekhar/ts-jest/commit/b1d072b52b9a7665b3a6914b0895f84f6ee3f8c0)), closes [#2086](https://github.com/kulshekhar/ts-jest/issues/2086)



## [26.4.3](https://github.com/kulshekhar/ts-jest/compare/v26.4.2...v26.4.3) (2020-10-26)


### Bug Fixes

* **compiler:** only exclude test files when initializing compiler ([#2062](https://github.com/kulshekhar/ts-jest/issues/2062)) ([7264c13](https://github.com/kulshekhar/ts-jest/commit/7264c137114b6dd895624e3476dd7ec57b64ee13)), closes [#2061](https://github.com/kulshekhar/ts-jest/issues/2061), [#2068](https://github.com/kulshekhar/ts-jest/issues/2068), [#2072](https://github.com/kulshekhar/ts-jest/issues/2072), [#2073](https://github.com/kulshekhar/ts-jest/issues/2073)
* **config:** resolve `.babelrc` file path before attempting to read it ([#2071](https://github.com/kulshekhar/ts-jest/issues/2071)) ([681bfef](https://github.com/kulshekhar/ts-jest/commit/681bfef41744f09cd50b71072f4d001cb58da82e)), closes [#2064](https://github.com/kulshekhar/ts-jest/issues/2064)


### Features

* **config:** allow to override resolve tsconfig behavior ([#2063](https://github.com/kulshekhar/ts-jest/issues/2063)) ([9f46ace](https://github.com/kulshekhar/ts-jest/commit/9f46acefceb1fa71ee2e8b3b3c172ceb0544b4c4))



## [26.4.2](https://github.com/kulshekhar/ts-jest/compare/v26.4.1...v26.4.2) (2020-10-23)


### Features

* **config:** expose several typings as public apis ([#2054](https://github.com/kulshekhar/ts-jest/issues/2054)) ([3b6b705](https://github.com/kulshekhar/ts-jest/commit/3b6b7055e2b9c74e81fb91596c807ace02ab77a1))


### Performance Improvements

* **compiler:** speed up bootstrap time for `isolatedModules:false` ([#2055](https://github.com/kulshekhar/ts-jest/issues/2055)) ([230b5dd](https://github.com/kulshekhar/ts-jest/commit/230b5ddbee55357d25dd190cd45aa8a30d7f31e0))


### DEPRECATIONS

* **config**: deprecate `tsConfig` in favor of `tsconfig` ([#1997](https://github.com/kulshekhar/ts-jest/pull/1997))
* **config**: deprecate `packageJson` since internal codes don't use it anymore ([#2034](https://github.com/kulshekhar/ts-jest/pull/2034))



## [26.4.1](https://github.com/kulshekhar/ts-jest/compare/v26.4.0...v26.4.1) (2020-09-29)


### Bug Fixes

* **utils:** `MaybeMockedConstructor` returns T ([#1976](https://github.com/kulshekhar/ts-jest/issues/1976)) ([b7712b2](https://github.com/kulshekhar/ts-jest/commit/b7712b2055d8f32dd97999de1d94e8f3515d79e8))
* **utils:** revert `path.join` and add check on prefix ends with `/` ([#1989](https://github.com/kulshekhar/ts-jest/issues/1989)) ([3d9035b](https://github.com/kulshekhar/ts-jest/commit/3d9035bd70dc087d4c5a943bb2fe2af2d0822875)), closes [#1982](https://github.com/kulshekhar/ts-jest/issues/1982)



# [26.4.0](https://github.com/kulshekhar/ts-jest/compare/v26.3.0...v26.4.0) (2020-09-20)


### Bug Fixes

* **utils:** `pathsToModuleNameMapper` resolve path mapping with `path.join` ([#1969](https://github.com/kulshekhar/ts-jest/issues/1969)) ([81fce4c](https://github.com/kulshekhar/ts-jest/commit/81fce4c090811a1cc071579a99dc193fb976b117)), closes [#1968](https://github.com/kulshekhar/ts-jest/issues/1968)
* set minimum `jest-util` version at 26.1.0 ([#1914](https://github.com/kulshekhar/ts-jest/issues/1914)) ([f00414c](https://github.com/kulshekhar/ts-jest/commit/f00414c6fbf8fc5413fd33d0a271c4a164c50d45)), closes [#1913](https://github.com/kulshekhar/ts-jest/issues/1913)


### Features

* **config:** allow custom options in custom transformers ([#1966](https://github.com/kulshekhar/ts-jest/issues/1966)) ([1452ce4](https://github.com/kulshekhar/ts-jest/commit/1452ce4afcd36049cddd0db0861f1ac26b66f8c1)), closes [#1942](https://github.com/kulshekhar/ts-jest/issues/1942)
* **transformers:** support hoisting when using `@jest/globals` ([#1937](https://github.com/kulshekhar/ts-jest/issues/1937)) ([0e5be15](https://github.com/kulshekhar/ts-jest/commit/0e5be1597d755fed11869f67df05eeea54b3106f)), closes [#1593](https://github.com/kulshekhar/ts-jest/issues/1593)
* **transformers:** add `path-mapping` custom AST transformer ([#1927](https://github.com/kulshekhar/ts-jest/issues/1927)) ([3325186](https://github.com/kulshekhar/ts-jest/commit/3325186b6e55f41eb9bf7d81e092a358fc402b13))


### Performance Improvements

* **compiler:** remove `createProgram` for `isolatedModules: true` to boost startup speed ([#1941](https://github.com/kulshekhar/ts-jest/issues/1941)) ([dd84534](https://github.com/kulshekhar/ts-jest/commit/dd8453401840862186f991e2d514e0d328a67987))



# [26.3.0](https://github.com/kulshekhar/ts-jest/compare/v26.2.0...v26.3.0) (2020-08-25)


### Bug Fixes

* **config:** compute cache key without reading `package.json` ([#1893](https://github.com/kulshekhar/ts-jest/issues/1893)) ([4875a58](https://github.com/kulshekhar/ts-jest/commit/4875a58345666e0407f9f5b3f95049ae2c9d056d)), closes [#1892](https://github.com/kulshekhar/ts-jest/issues/1892)


### Features

* support TypeScript 4.0 ([#1889](https://github.com/kulshekhar/ts-jest/issues/1889)) ([f070e93](https://github.com/kulshekhar/ts-jest/commit/f070e9334a9cf31fa6f0d73b3f69d805be72601d))



# [26.2.0](https://github.com/kulshekhar/ts-jest/compare/v26.1.4...v26.2.0) (2020-08-11)


### Bug Fixes

* move `@types/jest` to dependencies to work well with yarn 2 ([#1859](https://github.com/kulshekhar/ts-jest/issues/1859)) ([5eb1389](https://github.com/kulshekhar/ts-jest/commit/5eb1389caaa0431e49ae6ca26b18e290208e0a0a)), closes [#1857](https://github.com/kulshekhar/ts-jest/issues/1857)


### Features

* **config:** support `after` and `afterDeclarations` AST transformers ([#1831](https://github.com/kulshekhar/ts-jest/issues/1831)) ([be20a7c](https://github.com/kulshekhar/ts-jest/commit/be20a7c78c97027b33aec178da0f533095790871))
* allow opt-out version warning message by environment variable `TS_JEST_DISABLE_VER_CHECKER` ([#1821](https://github.com/kulshekhar/ts-jest/issues/1821)) ([e6b42fc](https://github.com/kulshekhar/ts-jest/commit/e6b42fcd7a75c7b14e636a45cda04de18a46908b)), closes [#1774](https://github.com/kulshekhar/ts-jest/issues/1774)



## [26.1.4](https://github.com/kulshekhar/ts-jest/compare/v26.1.3...v26.1.4) (2020-07-28)


### Bug Fixes

* **compiler:** check if test file exists before doing type check ([#1827](https://github.com/kulshekhar/ts-jest/issues/1827)) ([cc89d5b](https://github.com/kulshekhar/ts-jest/commit/cc89d5b1f912975cd29114c5b3b0bf18426816da)), closes [#1506](https://github.com/kulshekhar/ts-jest/issues/1506)



## [26.1.3](https://github.com/kulshekhar/ts-jest/compare/v26.1.2...v26.1.3) (2020-07-16)


### Bug Fixes

* revert [#1793](https://github.com/kulshekhar/ts-jest/issues/1793) ([#1804](https://github.com/kulshekhar/ts-jest/issues/1804)) ([5095525](https://github.com/kulshekhar/ts-jest/commit/5095525333c8579c9c5e7f3149294b31f28d6774))



## [26.1.2](https://github.com/kulshekhar/ts-jest/compare/v26.1.1...v26.1.2) (2020-07-13)


### Bug Fixes

* **compiler:** use `resolveModuleNames` TypeScript API to get resolved modules for test files ([#1784](https://github.com/kulshekhar/ts-jest/issues/1784)) ([5f26054](https://github.com/kulshekhar/ts-jest/commit/5f2605457e94b548bd7b9b28fc968554f7eefa91)), closes [#1747](https://github.com/kulshekhar/ts-jest/issues/1747)
* **config:** invalidate cache when other options in `tsconfig` change ([#1788](https://github.com/kulshekhar/ts-jest/issues/1788)) ([6948855](https://github.com/kulshekhar/ts-jest/commit/69488552eca2846f3fc6ba86ab49d7893caaf521))


### Performance Improvements

* **compiler:** cache module resolution for `isolatedModules: false` ([#1786](https://github.com/kulshekhar/ts-jest/issues/1786)) ([7f731ed](https://github.com/kulshekhar/ts-jest/commit/7f731ed8a02755aeb41ecb27df4eaf16db2ddd95))
* **compiler:** use `globsToMatcher` from `jest-util` ([#1754](https://github.com/kulshekhar/ts-jest/issues/1754)) ([44f3913](https://github.com/kulshekhar/ts-jest/commit/44f3913c2a017734ed87346b1c5fbec639d02062))



<a name="26.1.1"></a>
## [26.1.1](https://github.com/kulshekhar/ts-jest/compare/v26.1.0...v26.1.1) (2020-06-21)


### Bug Fixes

* **compiler:** generate source map correctly when tsconfig `mapRoot` is set ([#1741](https://github.com/kulshekhar/ts-jest/issues/1741)) ([01ac417](https://github.com/kulshekhar/ts-jest/commit/01ac417)), closes [#1718](https://github.com/kulshekhar/ts-jest/issues/1718)
* **config:** show version warning when using ts-jest without babel ([#1729](https://github.com/kulshekhar/ts-jest/issues/1729)) ([e512bc0](https://github.com/kulshekhar/ts-jest/commit/e512bc0)), fixes [#1678-issuecomment-641930332](https://github.com//github.com/kulshekhar/ts-jest/pull/1678/issues/issuecomment-641930332), [#1678-issuecomment-639528993](https://github.com//github.com/kulshekhar/ts-jest/pull/1678/issues/issuecomment-639528993)



<a name="26.1.0"></a>
# [26.1.0](https://github.com/kulshekhar/ts-jest/compare/v26.0.0...v26.1.0) (2020-05-30)


### Bug Fixes

* **typing:** don't mark `BabelConfig` as internal type ([#1667](https://github.com/kulshekhar/ts-jest/issues/1667)) ([558c307](https://github.com/kulshekhar/ts-jest/commit/558c307)), closes [#1666](https://github.com/kulshekhar/ts-jest/issues/1666)


### Features

* **config:** show a warning message when TypeScript `target` version doesn't match with recommended NodeJs version ([#1678](https://github.com/kulshekhar/ts-jest/issues/1678)) ([085bdf5](https://github.com/kulshekhar/ts-jest/commit/085bdf5))
* **config:** support multiple paths for `pathsToModuleNameMapper` ([#1690](https://github.com/kulshekhar/ts-jest/issues/1690)) ([a727bd5](https://github.com/kulshekhar/ts-jest/commit/a727bd5))
* support TypeScript 3.9 ([#1653](https://github.com/kulshekhar/ts-jest/issues/1653)) ([fc3d5ad](https://github.com/kulshekhar/ts-jest/commit/fc3d5ad))



<a name="26.0.0"></a>
# [26.0.0](https://github.com/kulshekhar/ts-jest/compare/v25.5.1...v26.0.0) (2020-05-15)


### Bug Fixes

* **compiler:** return `undefined` for `getScriptVersion` when a file doesn't exist in memory cache ([#1641](https://github.com/kulshekhar/ts-jest/issues/1641)) ([6851b8e](https://github.com/kulshekhar/ts-jest/commit/6851b8e))


### Features

* support Jest v26 ([#1602](https://github.com/kulshekhar/ts-jest/issues/1602)) ([23b7741](https://github.com/kulshekhar/ts-jest/commit/23b7741))


### BREAKING CHANGES

* Requires a minimum of TypeScript v3.8
* Drop support for Node 8 


<a name="25.5.1"></a>
## [25.5.1](https://github.com/kulshekhar/ts-jest/compare/v25.5.0...v25.5.1) (2020-05-09)


### Bug Fixes

* **compiler:** don't resolve files from build folder for `projectReferences` ([#1614](https://github.com/kulshekhar/ts-jest/issues/1614)) ([74b92d3](https://github.com/kulshekhar/ts-jest/commit/74b92d3))
* **config:** don't set `include` value of `tsconfig` to empty array ([#1606](https://github.com/kulshekhar/ts-jest/issues/1606)) ([8a29aaa](https://github.com/kulshekhar/ts-jest/commit/8a29aaa))



<a name="25.5.0"></a>
# [25.5.0](https://github.com/kulshekhar/ts-jest/compare/v25.4.0...v25.5.0) (2020-05-05)


### Bug Fixes

* **compiler:** make `projectReferences` work with `isolatedModules: false` ([#1541](https://github.com/kulshekhar/ts-jest/issues/1541)) ([3e8efbe](https://github.com/kulshekhar/ts-jest/commit/3e8efbe))
* **compiler:** allow using `files` provided by `tsconfig` ([#1562](https://github.com/kulshekhar/ts-jest/issues/1562)) ([a9f02bd](https://github.com/kulshekhar/ts-jest/commit/a9f02bd))
* **config:** verify `testMatchPatterns` contain RegExp instance or string type values ([#1569](https://github.com/kulshekhar/ts-jest/issues/1569)) ([7f85bab](https://github.com/kulshekhar/ts-jest/commit/7f85bab))


### Features

* **config:** add `tsconfig` alias to `tsConfig` option ([#1565](https://github.com/kulshekhar/ts-jest/issues/1565)) ([c10eb6d](https://github.com/kulshekhar/ts-jest/commit/c10eb6d))
* **config:** define 'ts-jest' on `ConfigGlobals` interface of `@jest/types` ([#1592](https://github.com/kulshekhar/ts-jest/issues/1592)) ([4526392](https://github.com/kulshekhar/ts-jest/commit/4526392))


### Performance Improvements

* **compiler:** don’t write compile output to file system but rely on jest cache ([#1561](https://github.com/kulshekhar/ts-jest/issues/1561)) ([d11a4ea](https://github.com/kulshekhar/ts-jest/commit/d11a4ea))
* **compiler:** improve performance for `isolatedModules: false` ([#1558](https://github.com/kulshekhar/ts-jest/issues/1558)) ([85c09e3](https://github.com/kulshekhar/ts-jest/commit/85c09e3))


### BREAKING CHANGES

* Any custom typing files or files which are needed to be compiled and intended to use with `jest` need to be defined in `files` option of `tsconfig`.

For example:
```
// tsconfig.json
{
   // ...other configs
   "files": [
       "my-custom-typings.d.ts",
       "my-global-module.ts"
   ]
}
```
* **compiler:** `incremental` and `compilerHost` options are no longer available. Please remove it from your `ts-jest` config.



<a name="25.5.0-beta.0"></a>
# [25.5.0-beta.0](https://github.com/kulshekhar/ts-jest/compare/v25.5.0-alpha.0...v25.5.0-beta.0) (2020-04-29)


### Bug Fixes

* **compiler:** allow using `files` provided by `tsconfig` ([#1562](https://github.com/kulshekhar/ts-jest/issues/1562)) ([907a280](https://github.com/kulshekhar/ts-jest/commit/907a280))
* **config:** verify `testMatchPatterns` contain `RegExp` instance or `string` type values ([#1569](https://github.com/kulshekhar/ts-jest/issues/1569)) ([7f85bab](https://github.com/kulshekhar/ts-jest/commit/7f85bab))


### Features

* **config:** add `tsconfig` alias to `tsConfig` option ([#1565](https://github.com/kulshekhar/ts-jest/issues/1565)) ([c10eb6d](https://github.com/kulshekhar/ts-jest/commit/c10eb6d))


### Performance Improvements

* **compiler:** don’t write compile output to file system but rely on `jest` cache ([#1561](https://github.com/kulshekhar/ts-jest/issues/1561)) ([07b5f62](https://github.com/kulshekhar/ts-jest/commit/07b5f62))


### BREAKING CHANGES

* Any custom typing files or files which are needed to be compiled and intended to use with `jest` need to be defined in `files` option of `tsconfig`.

For example
```
// tsconfig.json
{
   // ...other configs
   "files": [
       "my-custom-typings.d.ts".
       "my-global-module.ts"
   ]
}
```



<a name="25.5.0-alpha.0"></a>
# [25.5.0-alpha.0](https://github.com/kulshekhar/ts-jest/compare/v25.4.0...v25.5.0-alpha.0) (2020-04-22)


### Bug Fixes

* **compiler:** make `projectReferences` work with `isolatedModules: false` ([#1541](https://github.com/kulshekhar/ts-jest/issues/1541)) ([3e8efbe](https://github.com/kulshekhar/ts-jest/commit/3e8efbe))

### Performance

* **compiler:** improve performance for `isolatedModules: false` ([#1558](https://github.com/kulshekhar/ts-jest/issues/1558)) ([85c09e3](https://github.com/kulshekhar/ts-jest/commit/85c09e3))

### BREAKING CHANGES

* **config:** `compilerHost` and `incremental` options are no longer available



<a name="25.4.0"></a>
# [25.4.0](https://github.com/kulshekhar/ts-jest/compare/v25.3.1...v25.4.0) (2020-04-17)


### Bug Fixes

* **compiler:** make `projectReferences` work with `isolatedModules: true` ([#1527](https://github.com/kulshekhar/ts-jest/issues/1527)) ([aa6b74c](https://github.com/kulshekhar/ts-jest/commit/aa6b74c))
* **compiler:** make sure `LanguageService` updated with test file information before getting diagnostics for test file ([#1507](https://github.com/kulshekhar/ts-jest/issues/1507)) ([311eaeb](https://github.com/kulshekhar/ts-jest/commit/311eaeb))
* **config:** set default `outDir` when `allowJs` is true and no `outDir` in `tsconfig` ([#1502](https://github.com/kulshekhar/ts-jest/issues/1502)) ([1a287ad](https://github.com/kulshekhar/ts-jest/commit/1a287ad))
* **config:** use original jest config object instead of stringified config ([#1511](https://github.com/kulshekhar/ts-jest/issues/1511)) ([4f0bb33](https://github.com/kulshekhar/ts-jest/commit/4f0bb33))



<a name="25.3.1"></a>
## [25.3.1](https://github.com/kulshekhar/ts-jest/compare/v25.3.0...v25.3.1) (2020-04-03)


### Bug Fixes

* only do type checking while compiling file ([#1483](https://github.com/kulshekhar/ts-jest/issues/1483)) ([dbc0a08](https://github.com/kulshekhar/ts-jest/commit/dbc0a08))
* **config:** set default outDir for enabled allowJs without outDir ([#1472](https://github.com/kulshekhar/ts-jest/issues/1472)) ([57c7af0](https://github.com/kulshekhar/ts-jest/commit/57c7af0))



<a name="25.3.0"></a>
# [25.3.0](https://github.com/kulshekhar/ts-jest/compare/25.2.1...v25.3.0) (2020-03-30)


### Bug Fixes

* add `jest-config` to dependencies list ([6d9e0d8](https://github.com/kulshekhar/ts-jest/commit/6d9e0d8))
* always do type check for all files provided to ts-jest transformer for non-watch mode ([#1450](https://github.com/kulshekhar/ts-jest/issues/1450)) ([107e062](https://github.com/kulshekhar/ts-jest/commit/107e062))


### Chores

* **docs:** add `TROUBLESHOOTING` ([96cd9b3](https://github.com/kulshekhar/ts-jest/commit/b8ebf36))


### Features

* **compiler:** expose internal ts `Program` via ConfigSet `TsCompiler` ([#1433](https://github.com/kulshekhar/ts-jest/issues/1433)) ([7153246](https://github.com/kulshekhar/ts-jest/commit/7153246))
* **config:** add incremental option ([#1418](https://github.com/kulshekhar/ts-jest/issues/1418)) ([5a69bce](https://github.com/kulshekhar/ts-jest/commit/5a69bce))


### BREAKING CHANGES

* **config:** improve diagnostics message ([#1444](https://github.com/kulshekhar/ts-jest/issues/1444)) ([96cd9b3](https://github.com/kulshekhar/ts-jest/commit/96cd9b3)). This will affect to any snapshots or assertion against diagnostics messages



<a name="25.2.1"></a>
# [25.2.1](https://github.com/kulshekhar/ts-jest/compare/25.2.0...25.2.1) (2020-02-21)


### Bug Fixes

* **compiler:** allow transformation of typescript files in node_modules ([#1385](https://github.com/kulshekhar/ts-jest/issues/1385)) ([814405e](https://github.com/kulshekhar/ts-jest/commit/814405e))
* **docs:** fixing slack link and some minor typos in documenation ([#1404](https://github.com/kulshekhar/ts-jest/issues/1404)) ([3e2e008](https://github.com/kulshekhar/ts-jest/commit/3e2e008))
* **transformer:** add deepUnmock to hoist method list ([#1372](https://github.com/kulshekhar/ts-jest/issues/1372)) ([0fbbc00](https://github.com/kulshekhar/ts-jest/commit/0fbbc00))
* **util:** use resolve package typescript package in yarn workspaces ([#1377](https://github.com/kulshekhar/ts-jest/issues/1377)) ([a63808c](https://github.com/kulshekhar/ts-jest/commit/a63808c))



<a name="25.2.0"></a>
# [25.2.0](https://github.com/kulshekhar/ts-jest/compare/v25.1.0...v25.2.0) (2020-02-03)


### Bug Fixes

* **config:** let babel-jest handle loading babel config ([#1370](https://github.com/kulshekhar/ts-jest/issues/1370))



<a name="25.1.0"></a>
# [25.1.0](https://github.com/kulshekhar/ts-jest/compare/v25.0.0...v25.1.0) (2020-01-30)


### Bug Fixes

* jest 25 type definitions ([#1363](https://github.com/kulshekhar/ts-jest/issues/1363)) ([ba82a9e](https://github.com/kulshekhar/ts-jest/commit/ba82a9e))



<a name="25.0.0"></a>
# [25.0.0](https://github.com/kulshekhar/ts-jest/compare/v24.3.0...v25.0.0) (2020-01-23)


### Features

* support Jest 25 ([#1355](https://github.com/kulshekhar/ts-jest/issues/1355))



<a name="24.3.0"></a>
# [24.3.0](https://github.com/kulshekhar/ts-jest/compare/v24.2.0...v24.3.0) (2020-01-07)


### Bug Fixes

* **config:** support babel config file path as string ([#1332](https://github.com/kulshekhar/ts-jest/issues/1332)) ([78a53c2](https://github.com/kulshekhar/ts-jest/commit/78a53c2))



<a name="24.2.0"></a>
# [24.2.0](https://github.com/kulshekhar/ts-jest/compare/v24.1.0...v24.2.0) (2019-11-22)


### Bug Fixes

* **compiler:** pass filename to sha function instead of file extension ([ac1ac97](https://github.com/kulshekhar/ts-jest/commit/ac1ac97))
* **transformers:** hoist jest.enableAutomock and jest.disableAutomock ([ac50bc3](https://github.com/kulshekhar/ts-jest/commit/ac50bc3))
* typescript serviceHost cache miss on Windows operating systems ([26ee731](https://github.com/kulshekhar/ts-jest/commit/26ee731))



<a name="24.1.0"></a>
# [24.1.0](https://github.com/kulshekhar/ts-jest/compare/v24.0.2...v24.1.0) (2019-09-12)


### Bug Fixes

* **perf:** add cache for fs calls ([#908](https://github.com/kulshekhar/ts-jest/issues/908)) ([3dada81](https://github.com/kulshekhar/ts-jest/commit/3dada81))
* [#825](https://github.com/kulshekhar/ts-jest/issues/825) handle symlinked modules (ala pnpm) correctly ([e190b23](https://github.com/kulshekhar/ts-jest/commit/e190b23))
* handle tsBuildInfoFile option ([f9583e9](https://github.com/kulshekhar/ts-jest/commit/f9583e9)), closes [#1095](https://github.com/kulshekhar/ts-jest/issues/1095)
* **types:** unforce esModuleInterop in tsconfig.json ([c2d39b6](https://github.com/kulshekhar/ts-jest/commit/c2d39b6))



<a name="24.0.2"></a>
## [24.0.2](https://github.com/kulshekhar/ts-jest/compare/v24.0.1...v24.0.2) (2019-04-05)



<a name="24.0.1"></a>
## [24.0.1](https://github.com/kulshekhar/ts-jest/compare/v24.0.0...v24.0.1) (2019-03-30)


### Bug Fixes

* update call to globIgnore ([#1002](https://github.com/kulshekhar/ts-jest/issues/1002)) ([#1003](https://github.com/kulshekhar/ts-jest/issues/1003)) ([05b63af](https://github.com/kulshekhar/ts-jest/commit/05b63af))


### Features

* **config:** specify package.json location ([#823](https://github.com/kulshekhar/ts-jest/issues/823)) ([#1013](https://github.com/kulshekhar/ts-jest/issues/1013)) ([fb7dd55](https://github.com/kulshekhar/ts-jest/commit/fb7dd55))



<a name="24.0.0"></a>
# [24.0.0](https://github.com/kulshekhar/ts-jest/compare/v23.10.5...v24.0.0) (2019-02-18)


### Bug Fixes

* cli test ([1d67101](https://github.com/kulshekhar/ts-jest/commit/1d67101))
* module tests and some snapshots ([999f889](https://github.com/kulshekhar/ts-jest/commit/999f889))
* remove unused snapshots ([108b08b](https://github.com/kulshekhar/ts-jest/commit/108b08b))
* some tests ([d0f2231](https://github.com/kulshekhar/ts-jest/commit/d0f2231))
* test command ([8372b5e](https://github.com/kulshekhar/ts-jest/commit/8372b5e))
* test path for windows (attempt 1) ([6824ac4](https://github.com/kulshekhar/ts-jest/commit/6824ac4))
* test path for windows (attempt 2) ([eb2fc8a](https://github.com/kulshekhar/ts-jest/commit/eb2fc8a))


### Features

* **jest:** bump to 24 ([defcb77](https://github.com/kulshekhar/ts-jest/commit/defcb77))



<a name="23.10.4"></a>
## [23.10.4](https://github.com/kulshekhar/ts-jest/compare/v23.10.3...v23.10.4) (2018-10-06)


### Bug Fixes

* **cache:** adds project's dep versions to cache key ([6cacbea](https://github.com/kulshekhar/ts-jest/commit/6cacbea)), closes [#785](https://github.com/kulshekhar/ts-jest/issues/785)
* **cli:** change options to better reflect the new presets ([68abcfb](https://github.com/kulshekhar/ts-jest/commit/68abcfb))
* **helpers:** deprecate import from ts-jest, now ts-jest/utils ([33ff29f](https://github.com/kulshekhar/ts-jest/commit/33ff29f)), closes [#782](https://github.com/kulshekhar/ts-jest/issues/782)
* **typings:** typo in presets definition file ([53767ab](https://github.com/kulshekhar/ts-jest/commit/53767ab))
* **typings:** wrong import in preset typings + test ([94dc4e7](https://github.com/kulshekhar/ts-jest/commit/94dc4e7))



<a name="23.10.3"></a>
## [23.10.3](https://github.com/kulshekhar/ts-jest/compare/v23.10.2...v23.10.3) (2018-09-30)


### Bug Fixes

* **compiler:** do not force module kind if piping babel ([acebc8c](https://github.com/kulshekhar/ts-jest/commit/acebc8c)), closes [#767](https://github.com/kulshekhar/ts-jest/issues/767)


### Features

* **helpers:** adds a mocked test helper for mock typings ([f976135](https://github.com/kulshekhar/ts-jest/commit/f976135)), closes [#576](https://github.com/kulshekhar/ts-jest/issues/576)



<a name="23.10.2"></a>
## [23.10.2](https://github.com/kulshekhar/ts-jest/compare/v23.10.1...v23.10.2) (2018-09-26)


### Bug Fixes

* **cache:** resolved tsconfig in cache key + pkg digest ([e891608](https://github.com/kulshekhar/ts-jest/commit/e891608)), closes [#749](https://github.com/kulshekhar/ts-jest/issues/749)
* **cli:** resets testMatch if using testRegex option ([31ad0aa](https://github.com/kulshekhar/ts-jest/commit/31ad0aa)), closes [#756](https://github.com/kulshekhar/ts-jest/issues/756)
* **diagnostics:** throws only for category warning and error ([bb28849](https://github.com/kulshekhar/ts-jest/commit/bb28849)), closes [#748](https://github.com/kulshekhar/ts-jest/issues/748)
* **import:** wrong error message when a module exists but fails ([e0d6c57](https://github.com/kulshekhar/ts-jest/commit/e0d6c57))
* **preset:** createJestPreset fails with base and no array ([3c325e8](https://github.com/kulshekhar/ts-jest/commit/3c325e8))


### Features

* **cli:** CLI 'config:migrate' now detects best preset ([febd8d3](https://github.com/kulshekhar/ts-jest/commit/febd8d3))
* **preset:** adds 2 presets along the default one ([9f3d759](https://github.com/kulshekhar/ts-jest/commit/9f3d759))
* **preset:** adds presets typings and export all presets ([f55d895](https://github.com/kulshekhar/ts-jest/commit/f55d895))
* **typings:** emit declaration files, filtering out internals ([4f10f7e](https://github.com/kulshekhar/ts-jest/commit/4f10f7e)), closes [#745](https://github.com/kulshekhar/ts-jest/issues/745)



<a name="23.10.1"></a>
## [23.10.1](https://github.com/kulshekhar/ts-jest/compare/v23.10.0...v23.10.1) (2018-09-20)


### Bug Fixes

* **compile:** js files were never transpiled thru TS ([374dca1](https://github.com/kulshekhar/ts-jest/commit/374dca1)), closes [#740](https://github.com/kulshekhar/ts-jest/issues/740)
* **config:** warn instead of forcing ESM interoperability ([a2a4be2](https://github.com/kulshekhar/ts-jest/commit/a2a4be2))
* **windows:** normalize paths ([c12dfff](https://github.com/kulshekhar/ts-jest/commit/c12dfff))



<a name="23.10.0"></a>
# [23.10.0](https://github.com/kulshekhar/ts-jest/compare/v23.10.0-beta.6...v23.10.0) (2018-09-19)


### Bug Fixes

* **babel:** fixes the babel 6 hack ([c8d51cf](https://github.com/kulshekhar/ts-jest/commit/c8d51cf))
* **config:** jsx should also be considered as js files ([6c32a93](https://github.com/kulshekhar/ts-jest/commit/6c32a93))


### Features

* **hints:** warns if transform matches js without allowJs ([952cc87](https://github.com/kulshekhar/ts-jest/commit/952cc87))



<a name="23.10.0-beta.6"></a>
# [23.10.0-beta.6](https://github.com/kulshekhar/ts-jest/compare/v23.10.0-beta.5...v23.10.0-beta.6) (2018-09-13)


### Bug Fixes

* **babel:** instrumentation was done twice when using babel ([659a7fb](https://github.com/kulshekhar/ts-jest/commit/659a7fb)), closes [#713](https://github.com/kulshekhar/ts-jest/issues/713)
* **cache:** includes all parameters in cache key computing ([70e1867](https://github.com/kulshekhar/ts-jest/commit/70e1867))
* **e2e:** fixes the eval tool (not used yet) ([939d13a](https://github.com/kulshekhar/ts-jest/commit/939d13a))



<a name="23.10.0-beta.5"></a>
# [23.10.0-beta.5](https://github.com/kulshekhar/ts-jest/compare/v23.10.0-beta.4...v23.10.0-beta.5) (2018-09-12)


### Bug Fixes

* **package:** fixes the outdated package-lock ([c5a5b7a](https://github.com/kulshekhar/ts-jest/commit/c5a5b7a))


### Features

* **diagnostics:** add option to enable/disable first-TS-error-throws ([2c840c2](https://github.com/kulshekhar/ts-jest/commit/2c840c2))



<a name="23.10.0-beta.4"></a>
# [23.10.0-beta.4](https://github.com/kulshekhar/ts-jest/compare/v23.10.0-beta.3...v23.10.0-beta.4) (2018-09-06)


### Bug Fixes

* **config:** fixes a bug in the tsconfig file resolver ([3910f2c](https://github.com/kulshekhar/ts-jest/commit/3910f2c))



<a name="23.10.0-beta.3"></a>
# [23.10.0-beta.3](https://github.com/kulshekhar/ts-jest/compare/v23.10.0-beta.2...v23.10.0-beta.3) (2018-09-06)


### Bug Fixes

* **config:** fixes a bug in path resolver ([ceb0424](https://github.com/kulshekhar/ts-jest/commit/ceb0424))


### Features

* **cli:** adds a cli tool to migrate old config ([714f5f0](https://github.com/kulshekhar/ts-jest/commit/714f5f0))
* **cli:** ads a simple config:init helper + tests ([6700522](https://github.com/kulshekhar/ts-jest/commit/6700522))
* **config:** exposes custom transformers to config for presets ([885bc44](https://github.com/kulshekhar/ts-jest/commit/885bc44))
* **logger:** adds ts-jest version in the logger's context ([bb0c06e](https://github.com/kulshekhar/ts-jest/commit/bb0c06e))


### Performance Improvements

* **bundle:** improves bundle size ([34eedc3](https://github.com/kulshekhar/ts-jest/commit/34eedc3))



<a name="23.10.0-beta.2"></a>
# [23.10.0-beta.2](https://github.com/kulshekhar/ts-jest/compare/v23.10.0-beta.1...v23.10.0-beta.2) (2018-09-02)


### Bug Fixes

* **caching:** fixes a possible cache collision ([9c38694](https://github.com/kulshekhar/ts-jest/commit/9c38694))
* **testing:** change logging level for some utility ([16f125a](https://github.com/kulshekhar/ts-jest/commit/16f125a))


### Features

* **config:** typeCheck default to true (langauge service) ([623b2f4](https://github.com/kulshekhar/ts-jest/commit/623b2f4))


### BREAKING CHANGES

* **config:** Language service will be used by default from now on



<a name="23.10.0-beta.1"></a>
# [23.10.0-beta.1](https://github.com/kulshekhar/ts-jest/compare/v23.1.4...v23.10.0-beta.1) (2018-09-01)


### Bug Fixes

* **ci:** can't use runInBand for e2e: cache collision ([db650f4](https://github.com/kulshekhar/ts-jest/commit/db650f4))
* **ci:** do not run e2e sub-tests in band ([18ad865](https://github.com/kulshekhar/ts-jest/commit/18ad865))
* **ci:** ensure npm is present with ci ([edb6eda](https://github.com/kulshekhar/ts-jest/commit/edb6eda))
* **logger:** removes cyclic imports ([5ef980f](https://github.com/kulshekhar/ts-jest/commit/5ef980f))
* babel-config + adds test ([12146c3](https://github.com/kulshekhar/ts-jest/commit/12146c3))
* fixes js style to be node < 10 compatible ([83d7517](https://github.com/kulshekhar/ts-jest/commit/83d7517))
* hoisting per level + memoize fix ([31847b0](https://github.com/kulshekhar/ts-jest/commit/31847b0))
* jest 22 did not have default config ([cbaddc3](https://github.com/kulshekhar/ts-jest/commit/cbaddc3))
* makes node 6 happy ([f6f82b8](https://github.com/kulshekhar/ts-jest/commit/f6f82b8))
* makes node6 happy ([f170285](https://github.com/kulshekhar/ts-jest/commit/f170285))
* makes window happy ([36fbebe](https://github.com/kulshekhar/ts-jest/commit/36fbebe))
* node 6 unhappy again... ([703ad0b](https://github.com/kulshekhar/ts-jest/commit/703ad0b))
* normalizes bundle hash on any node version ([ce7afaf](https://github.com/kulshekhar/ts-jest/commit/ce7afaf))
* npm coming with node 6 doesn't talk `ci` ([b87198d](https://github.com/kulshekhar/ts-jest/commit/b87198d))
* source maps ([89a30c9](https://github.com/kulshekhar/ts-jest/commit/89a30c9))
* typos + node 6 compat ([0ed1587](https://github.com/kulshekhar/ts-jest/commit/0ed1587))
* updates templates ([f2e1da2](https://github.com/kulshekhar/ts-jest/commit/f2e1da2))
* uses cross-platform spawn + fix pkg versions ([ac1599c](https://github.com/kulshekhar/ts-jest/commit/ac1599c))
* we are not writing files, use normalized EOL ([47fff43](https://github.com/kulshekhar/ts-jest/commit/47fff43))
* **tests:** CI fixes ([34a41ea](https://github.com/kulshekhar/ts-jest/commit/34a41ea))
* **tests:** detect npm version to use or not ci ([683a1e5](https://github.com/kulshekhar/ts-jest/commit/683a1e5))
* **tests:** do not use babel in our tests + new API for simple ([3e4de3e](https://github.com/kulshekhar/ts-jest/commit/3e4de3e))
* **tests:** more sanitizing for windows compat ([faae274](https://github.com/kulshekhar/ts-jest/commit/faae274))


### Features

* **config:** adds a helper to build moduleNameMapper from paths ([7b8598e](https://github.com/kulshekhar/ts-jest/commit/7b8598e)), closes [#364](https://github.com/kulshekhar/ts-jest/issues/364)
* **logging:** improves log messages + tests ([5d03c4d](https://github.com/kulshekhar/ts-jest/commit/5d03c4d))
* adds logging + better hashing ([4322701](https://github.com/kulshekhar/ts-jest/commit/4322701))
* allow env var to add diagnostic codes to ignore ([777edf5](https://github.com/kulshekhar/ts-jest/commit/777edf5))
* cache key + tests ([bd55448](https://github.com/kulshekhar/ts-jest/commit/bd55448))
* diagnostics, different compilers, ... ([f26ebf0](https://github.com/kulshekhar/ts-jest/commit/f26ebf0))
* directly writes to stdio so jest does not swallow ([6a7f01f](https://github.com/kulshekhar/ts-jest/commit/6a7f01f))
* handles stringifyContentPathRegex ([3fcb4bd](https://github.com/kulshekhar/ts-jest/commit/3fcb4bd))
* hoisting + tests + many other things ([6186e84](https://github.com/kulshekhar/ts-jest/commit/6186e84))
* io serializer + other test utils ([d03e0e7](https://github.com/kulshekhar/ts-jest/commit/d03e0e7))
* jest preset ([beb50b5](https://github.com/kulshekhar/ts-jest/commit/beb50b5))
* warn about unsupported versions ([1103071](https://github.com/kulshekhar/ts-jest/commit/1103071))
* **test:** jest serializers ([dfa9c0f](https://github.com/kulshekhar/ts-jest/commit/dfa9c0f))
* **tests:** more test tools + adds test related to debuggin issues ([8dcafca](https://github.com/kulshekhar/ts-jest/commit/8dcafca))


### Performance Improvements

* **babel:** uses babel-jest cache key as part of ours ([f51c4a7](https://github.com/kulshekhar/ts-jest/commit/f51c4a7))
* **cache:** share config-sets for parallel test running ([090ca7b](https://github.com/kulshekhar/ts-jest/commit/090ca7b))
* **tests:** run e2e tests in band ([b3e94ff](https://github.com/kulshekhar/ts-jest/commit/b3e94ff))
* detects changes in templates and bundle ([2a3da21](https://github.com/kulshekhar/ts-jest/commit/2a3da21))
* do not type check if fileName doesn't match ([cc45adc](https://github.com/kulshekhar/ts-jest/commit/cc45adc))
* faster tests ([37a0187](https://github.com/kulshekhar/ts-jest/commit/37a0187))
* improves speed of local test after 1st run ([cc04021](https://github.com/kulshekhar/ts-jest/commit/cc04021))
* more cleaning ([c48f7b8](https://github.com/kulshekhar/ts-jest/commit/c48f7b8))
* trying to improve travis-ci conf ([e4b4d95](https://github.com/kulshekhar/ts-jest/commit/e4b4d95))



<a name="23.1.3"></a>
## [23.1.3](https://github.com/kulshekhar/ts-jest/compare/v23.1.2...v23.1.3) (2018-08-06)


### Bug Fixes

* allow (but deprecate) use of old preprocessor.js ([a65079f](https://github.com/kulshekhar/ts-jest/commit/a65079f))
* big refactor + fixes (mainly cache key + coverage) ([e46caae](https://github.com/kulshekhar/ts-jest/commit/e46caae))
* fixes coverage and tests ([09500c2](https://github.com/kulshekhar/ts-jest/commit/09500c2))
* gracefully load [@babel](https://github.com/babel)/core or babel-core ([98b2410](https://github.com/kulshekhar/ts-jest/commit/98b2410))
* hack for babel < 6 so that breakpoints do work ([90c74ef](https://github.com/kulshekhar/ts-jest/commit/90c74ef)), closes [#627](https://github.com/kulshekhar/ts-jest/issues/627)
* resolves correctly config file path (fix [#636](https://github.com/kulshekhar/ts-jest/issues/636)) ([5ab100c](https://github.com/kulshekhar/ts-jest/commit/5ab100c))
* test rootDir to handle preset-angular ([8a6a8f7](https://github.com/kulshekhar/ts-jest/commit/8a6a8f7))
* wrong error message ([c955083](https://github.com/kulshekhar/ts-jest/commit/c955083))
* **html:** correctly transforms html source when needed ([9a2d74f](https://github.com/kulshekhar/ts-jest/commit/9a2d74f))
* **lint:** fixes tslint script & lint issues ([60ab36e](https://github.com/kulshekhar/ts-jest/commit/60ab36e))
* **package:** update fs-extra to version 6.0.1 ([7e73536](https://github.com/kulshekhar/ts-jest/commit/7e73536))
* **package:** update pkg-dir to version 3.0.0 ([3fb8f9f](https://github.com/kulshekhar/ts-jest/commit/3fb8f9f))
* **package:** update yargs to version 12.0.1 ([390ffcd](https://github.com/kulshekhar/ts-jest/commit/390ffcd))
* **source-maps:** fix source maps options/calls ([76e27c1](https://github.com/kulshekhar/ts-jest/commit/76e27c1))
* Typo in utils.ts ([#534](https://github.com/kulshekhar/ts-jest/issues/534)) ([a650260](https://github.com/kulshekhar/ts-jest/commit/a650260))


### Performance Improvements

* do not hash cache key, jest does it underneath ([fbe4f1f](https://github.com/kulshekhar/ts-jest/commit/fbe4f1f))



<a name="22.4.5"></a>
## [22.4.5](https://github.com/kulshekhar/ts-jest/compare/v22.4.4...v22.4.5) (2018-05-05)



<a name="22.4.1"></a>
## [22.4.1](https://github.com/kulshekhar/ts-jest/compare/v22.4.0...v22.4.1) (2018-03-02)


### Bug Fixes

* **package:** update source-map-support to version 0.5.0 ([f0aab12](https://github.com/kulshekhar/ts-jest/commit/f0aab12))
* **package:** update yargs to version 10.0.3 ([5cdf969](https://github.com/kulshekhar/ts-jest/commit/5cdf969))
* **package:** update yargs to version 11.0.0 ([7e9ce40](https://github.com/kulshekhar/ts-jest/commit/7e9ce40))
* add startDir to if-clause ([eed5311](https://github.com/kulshekhar/ts-jest/commit/eed5311))
* **package:** update yargs to version 9.0.1 ([#326](https://github.com/kulshekhar/ts-jest/issues/326)) ([8bf9924](https://github.com/kulshekhar/ts-jest/commit/8bf9924))


### Features

* add option to run TypeScript diagnostics ([13b77d9](https://github.com/kulshekhar/ts-jest/commit/13b77d9))



<a name="21.0.1"></a>
## [21.0.1](https://github.com/kulshekhar/ts-jest/compare/v21.0.0...v21.0.1) (2017-09-14)



<a name="21.0.0"></a>
# [21.0.0](https://github.com/kulshekhar/ts-jest/compare/v20.0.14...v21.0.0) (2017-09-05)



<a name="20.0.14"></a>
## [20.0.14](https://github.com/kulshekhar/ts-jest/compare/v20.0.13...v20.0.14) (2017-09-01)



<a name="20.0.13"></a>
## [20.0.13](https://github.com/kulshekhar/ts-jest/compare/v20.0.12...v20.0.13) (2017-08-30)



<a name="20.0.12"></a>
## [20.0.12](https://github.com/kulshekhar/ts-jest/compare/v20.0.11...v20.0.12) (2017-08-30)



<a name="20.0.11"></a>
## [20.0.11](https://github.com/kulshekhar/ts-jest/compare/v20.0.9...v20.0.11) (2017-08-29)



<a name="20.0.9"></a>
## [20.0.9](https://github.com/kulshekhar/ts-jest/compare/20.0.9...v20.0.9) (2017-08-04)


### Bug Fixes

* **package:** update fs-extra to version 4.0.0 ([5be18fb](https://github.com/kulshekhar/ts-jest/commit/5be18fb))



<a name="20.0.7"></a>
## [20.0.7](https://github.com/kulshekhar/ts-jest/compare/17.0.3...20.0.7) (2017-07-07)


### Bug Fixes

* peer dependency against Typescript 2.x ([cb08128](https://github.com/kulshekhar/ts-jest/commit/cb08128))
* remove outDir when collecting coverage ([c076956](https://github.com/kulshekhar/ts-jest/commit/c076956))
* **package:** update fs-extra to version 3.0.0 ([906be12](https://github.com/kulshekhar/ts-jest/commit/906be12))
* **package:** update yargs to version 8.0.1 ([0b2ea98](https://github.com/kulshekhar/ts-jest/commit/0b2ea98))


### Features

* export transpileIfTypescript ([6f835af](https://github.com/kulshekhar/ts-jest/commit/6f835af))



<a name="17.0.3"></a>
## [17.0.3](https://github.com/kulshekhar/ts-jest/compare/17.0.2...17.0.3) (2016-12-01)



<a name="17.0.2"></a>
## [17.0.2](https://github.com/kulshekhar/ts-jest/compare/17.0.1...17.0.2) (2016-12-01)



<a name="17.0.1"></a>
## [17.0.1](https://github.com/kulshekhar/ts-jest/compare/17.0.0...17.0.1) (2016-11-30)



<a name="17.0.0"></a>
# [17.0.0](https://github.com/kulshekhar/ts-jest/compare/0.1.13...17.0.0) (2016-11-09)



<a name="0.1.13"></a>
## [0.1.13](https://github.com/kulshekhar/ts-jest/compare/0.1.12...0.1.13) (2016-11-07)



<a name="0.1.12"></a>
## [0.1.12](https://github.com/kulshekhar/ts-jest/compare/0.1.11...0.1.12) (2016-11-03)



<a name="0.1.11"></a>
## [0.1.11](https://github.com/kulshekhar/ts-jest/compare/0.1.10...0.1.11) (2016-10-27)



<a name="0.1.10"></a>
## [0.1.10](https://github.com/kulshekhar/ts-jest/compare/0.1.9...0.1.10) (2016-10-26)



<a name="0.1.9"></a>
## [0.1.9](https://github.com/kulshekhar/ts-jest/compare/0.1.8...0.1.9) (2016-10-24)



<a name="0.1.8"></a>
## [0.1.8](https://github.com/kulshekhar/ts-jest/compare/0.1.7...0.1.8) (2016-10-14)



<a name="0.1.7"></a>
## [0.1.7](https://github.com/kulshekhar/ts-jest/compare/0.1.6...0.1.7) (2016-10-10)



<a name="0.1.6"></a>
## [0.1.6](https://github.com/kulshekhar/ts-jest/compare/0.1.5...0.1.6) (2016-10-08)



<a name="0.1.5"></a>
## [0.1.5](https://github.com/kulshekhar/ts-jest/compare/0.1.4...0.1.5) (2016-09-22)



<a name="0.1.4"></a>
## [0.1.4](https://github.com/kulshekhar/ts-jest/compare/0.1.3...0.1.4) (2016-09-16)



<a name="0.1.3"></a>
## [0.1.3](https://github.com/kulshekhar/ts-jest/compare/0.1.2...0.1.3) (2016-08-31)



<a name="0.1.2"></a>
## [0.1.2](https://github.com/kulshekhar/ts-jest/compare/0.1.1...0.1.2) (2016-08-31)



<a name="0.1.1"></a>
## [0.1.1](https://github.com/kulshekhar/ts-jest/compare/0.1.0...0.1.1) (2016-08-31)



<a name="0.1.0"></a>
# [0.1.0](https://github.com/kulshekhar/ts-jest/compare/0.0.1...0.1.0) (2016-08-31)



<a name="0.0.1"></a>
## [0.0.1](https://github.com/kulshekhar/ts-jest/compare/0.0.0...0.0.1) (2016-08-30)



<a name="0.0.0"></a>
# 0.0.0 (2016-08-30)




---
prev:
  text: 'Using the Compiler'
  link: './usage'
next: false
---
# Syntax <Badge type="warning" text="Partially complete"/>

:::warning
It is untested whether the order in which code blocks appear has any affect on the compilation.
:::

## Headers

There are headers at the beginning of each `.ntscript` file. The compiler references these headers to determine how to compile the file.

### Output Directory <Badge type="danger" text="required" />

The `dir` header is used to specify the output directory in which to save the compiled datapack. The target path must contain a `datapacks` directory. It must be denoted by using quotes around the path.

```ntscript
dir "C:\Users\Wiki\AppData\Roaming\.minecraft\saves\ExampleWorld"
```

### Pack Description <Badge type="tip" text="optional" />

The `desc` header is used to include a description in the compiled `pack.mcmeta`. It must be denoted by using quotes around the path.

```ntscript
desc "This is a cool description!"
```

### Scale <Badge type="tip" text="optional" />

The `scale` header is used to specify the multiplier of `double` type values. If not specified, `scale` defaults to `10000`
:::warning
It is untested whether `.ntscript` files which use non-integers work as expected.
:::
# Codeblocks

A codeblock is anything which starts with a keyword (`define`, `clock`, `if`), and ends with an `end` key.

## `define`

The `define` codeblock is used to define various types of NetherScript and Minecraft data.

### Entity Selectors

Entity selectors can be defined with two methods:

```ntscript
define @NAME = @FULL_SELECTOR
```

or

```ntscript
define @NAME : @FULL_SELECTOR
```

where `@NAME` represents a valid id prepended by an `@` symbol, and `@FULL_SELECTOR` is a valid Minecraft entity selector.

:::info Example
```ntscript
define @ExplodingCow : @e[type=cow,tag=exploding_cow]
```
:::
# Resetting

Upon compilation, NetherScript inside of the `reset` codeblock is put into the `NAMESPACE:reset` function in the compiled datapack. The reset codeblock is required for the compiler to function, even if it must remain empty.

```ntscript
reset
    # reset scoreboards
    # clear data
    # etc ...
end
```


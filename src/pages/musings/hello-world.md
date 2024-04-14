---
layout: '@layouts/PostLayout.astro'
title: 'Hello, World!'
pubDate: 2024-04-14
description: 'Are things working?'
author: 'Varun Narravula'
image:
  url: 'https://i.redd.it/x891ae81g3b71.png'
  alt: 'The "This is fine" dog with everything around it on fire meme'
tags: ['hello', 'blog']
---

This is mostly a test to see if things are working. If things aren't working,
something is horribly wrong, so send me a message! Of course, I want people to
read what I'm saying, right?

I love using Markdown for posts, but more often than not, it has its
shortcomings as a language. I often use
[neorg](https://github.com/nvim-neorg/neorg) inside `neovim` to write my posts,
and then convert them to Markdown after that. It has great support for a lot of
things, but it's still beta-quality software. However, if you use `neovim`, it's
worth a try.

---

## Code Blocks

```nix
{
   Damn = "you use Nix?";
   Yeah = "I use Nix";
   "That's" = "so cool!";
}
```

```zig
const std = @import("std");
const print = std.debug.print;
const testing = std.testing;

pub fn main() !void {
    print("Whoa, you use Zig?\n", .{});
}

test "1 + 1 = 2?" {
    const actual = 1 + 1;
    testing.expectEqual(actual, 2);
}
```

```ts
const eww: () => void = () => {
  console.log('Eww, TypeScript.');
  console.log("At least it's not JavaScript.");
};
```

## Thanks

Thanks for reading this! Why did you read it though? Are you seriously that
bored?

Do something better with yourself, haha.

![Yoshi dying](https://i.pinimg.com/originals/5f/2a/a7/5f2aa75c6dbb75d8bd232e727e514071.gif)

Fin.

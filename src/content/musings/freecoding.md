---
title: 'Freecoding - An Alternative To Vibe Coding'
date: 2025/06/20
description: 'A manifesto against vibe coding, and for an alternative'
image:
  url: '/assets/mario-hates-cursor-ide.png'
  alt:
    'Mario throws himself off a building after looking at AI-powered Cursor IDE'
tags: ['programming', 'ai']
---

Knowledge is power. Especially in an age where knowledge is being outsourced to
entities that we don't even _know_ much about yet.

[A very American mentality](https://www.forbes.com/sites/jackkelly/2024/10/15/the-globalization-and-offshoring-of-us-jobs-have-hit-americans-hard),
to say the least.

_What the fuck are you talking about, Varun?_, you may ask. Great question.

I'm talking about large language models (LLMs) and their widespread effects on
society, and especially on that of tech workers. Actually, let's zoom in on our
target: so-called **"vibe coding"**. A term that was only coined
[four months ago](https://xcancel.com/karpathy/status/1886192184808149383) by a
really damn smart guy, but with the AI bros frothing at the mouth following
close behind. That Twitter thread is genuinely sickening to read. As members of
the post-industrial world, we have taken many steps backwards, convincing
ourselves that LLMs and their sycophants are the sole way forward towards some
Wall-E-esque goal[^wall-e].

This all sounds the ramblings[^ramblings] of a man who's gone slightly insane,
right? I think I have in this regard, but for damn good reason. Many tech
workers have utilized AI in this way, and justified the terrible tradeoffs that
this brings about by mindlessly quoting "efficiency" and "productivity"; they
are collectively paying the price of not learning for some minimal, short-lived
success.

I'd imagine the following words have probably been spoken somewhere in a
nondescript office building's coffee break room in San Francisco:

_Oh my, Jared[^jared], look at the new application that's on the front page of
Hacker News and Reddit this week! It's vibe coded, and probably made up of piles
of shit-tier spaghetti code that even an Italian will gawk at. Another
money-maker, successfully come to fruition with just the power of imprecise
thoughts and contrived delusions of grandeur!_

To be frank, I'm APPALLED at the state of post-LLM programming these days. It's
genuinely disgusting to me that people will literally give up thinking about
system design and architecture, reduce it all down to the pure essence of "It's
just computer code!" without regard to how it works. And after they adopt this
insulting attitude, they then spit out complete trash and dress it up like a pig
with lipstick, and then make MILLIONS off their trash, all without due respect
to the sources of their material.

It's as if drop-shippers have found their new grift. Like they've turned to vibe
coding to make a quick buck off some bullshit B2B SaaS product that'll die in
the next 2 years after they get their venture capital money and disappear off
the face of the Earth. What a terrible way to live life.

So, on my never ending quest for knowledge, I decided to move in the opposite
direction: something that I now call **freecoding** :: like
[free climbing](https://en.wikipedia.org/wiki/Free_climbing), but for coding;

> _freecoding_ :: an approach to producing computer programs by usage of minimal
> tooling needed to get the task done, which often involves the constant
> questioning of what is truly "necessary" in a programmer's workflow

And yes, I'm coining this term in direct opposition to vibe coding.

Let's learn[^learn].

## A Swing And A Miss

My experience with vibe coding was atrocious. Think about vibe coding this way.
Every time I tried it[^trying-vibe-coding], it felt like I was picking up a
large multi-dimensional hammer, swinging it at a nail the size of a few atoms,
and somehow missing. Because that's basically what it is.

The very first time I tried to vibe code, it was in April 2025 at a university
[hackathon](https://sfhacks.io); my first one, too. Hackathons are supposedly
the best environment for this sort of "style" of coding, if you can call it
that. The goal? Shit out a proof-of-concept product over a weekend that does
something that would have otherwise taken a much longer time to spec out code
for.

It went _horribly_.

We were building a CLI in Go for a new version control system, and I thought it
would be a cool time to try vibe coding. I didn't want to scaffold out a whole
web application AND a large CLI boilerplate, since I wanted to show off our
product's functionality! Focus on the business logic, rather than the routine
boring stuff, right? So I installed a Copilot-like plugin into my Neovim
environment, pulled up a ChatGPT tab, and went off to the races. And from that
point on, I was more dumbfounded than impressed.

Because **_nothing worked at all!!!_** Well, that's a bit of an overstatement,
but when things didn't work, shit hit the fan real fast.

Unless I (and my hackathon buddies) went into an astounding amount of detail in
order to describe the application requirements, our LLMs would confidently shit
out command scaffolds that were just _wrong_. When I tried to lead it down the
path to the actual that requirements I wanted, they would initially agree with
me, as if they were repenting of their sinful ways. But to my dismay, they would
stubbornly continue down the same paths they initially came up with. Like a
fucking donkey, begging for water even as the trough is right in front of him!

Using the wrong command scaffolding and names? Contriving different ideas for
our version control strategies that were blatantly ripping off Git (which we
were explicitly trying to avoid)? Fucking up styles and not using Tailwind and
resorting to terrible CSS that made no sense? You name it, the LLM would fuck it
up!

In the times that it was successful, it was always with some hidden cost.
Usually, it was countless minutes of getting frustrated at output that just was
not useful, along with the lack of the euphoria that a programmer usually gets
from, you know, actually doing something!

At the very least, if I wrote code that did not work with my own hands, I would
learn more about _why_ the code I wrote was bad, and how to design my systems
better. Instead, I was spending my time chasing bugs that I would have _never_
created in the first place if I had just spent the damn time creating the code.

**I was replacing personal growth with laziness, and that's just not acceptable.
Nor should it be treated as such.**

Cue a few little snippets of my ranting over those few cursed days:

> No, I don't want to pull in random-ass React dependencies just because!
> Fucking hell, Gippity[^gippity], do you _really_ want another
> [left-pad](https://en.wikipedia.org/wiki/Npm_left-pad_incident) incident or
> something?

> Huh? Stop trying to combine these two unrelated pieces of code because you
> think "don't repeat yourself" is divine command[^dry]!

> What the fuck??? Who thought it was a good idea to keep checking for the HTTP
> method being called like 5 different times? Oh right! Copilot DOESN'T KNOW
> WHAT THE FUCK IT'S DOING! SINCE WHEN DID IT EVER????

Not to mention the fact that since LLMs don't always search the internet for
documentation, we would sometimes get old, deprecated, or removed APIs in our
code that were replaceable by better patterns. It almost felt like my group and
I were at slot machines, just hoping to hit the jackpot by hitting the
"Generate" button again and again and again[^luck].

Guys, this is not what people meant when they said to
["program by wishful thinking"](https://flatrick.github.io/notes/Programming-by-Wishful-Thinking/)!
We're supposed to be LEARNING from our mistakes, not just praying for dear life
that the next time we "prompt engineer" our badly-phrased requirements, we get
useful output! Have we heard of the colloquial definition of
insanity[^insanity], people?? That's exactly what's happening here! Yet it's as
if Jesus himself had come down and enacted Isaiah 6:9-10 on just
programmers[^isaiah].

We must, and _can_ do better than this.

## Oh, That's What The Hammer Is For?

So, instead of attempting to get the AI to swing the fucking hammer for us,
let's, I don't know, _try doing it ourselves!_ That was my first thought after
this absolutely horrid experience.

However, I decided to go one step further. I asked myself this question:

> How did the programmers of old learn the lessons they did?

Oh! They DID IT THE HARD WAY. If they didn't have the tools they needed, they
did the hard work of researching requirements, figuring out a PLAN OF ACTION,
and just fucking doing it themselves. Hardcore as fuck, and I love it. Because
they had no other choice.

Old programmers, such as my OS principles
[university professor](https://cs.sfsu.edu/people/robert-bierman), are almost
always remarkably amazing at what they can do, since they understand the
fundamentals of programming from first principles. So I wanted to emulate their
ways of thinking.

To test this out, I stripped out as many tools as I thought were possible to
strip out of my setup, and to work on a Go application for a few days, to see
how it would go. The project in question,
[`nixos-cli`](https://github.com/nix-community/nixos-cli), was rather large, but
organized well, so I thought it would be the perfect way to dip my toes into
this intimidating way of creating code without much assistance.

The only tools I had on hand? My text editor (Neovim) with a mostly vanilla
configuration (no LSP/autocomplete though, just Telescope and few plugins to
make navigation slightly easier), `go`, `make`, my terminal (`kitty`), some
small command-line tools like `fzf` and such, my web browser[^browser], and
that's it. Nothing else.

### Swinging The Hammer Myself

Let's start freecoding!

I was in the middle of a rewrite of this project from Zig to Go. As such, my
goal for this freecoding session was to port the `nixos option` command's TUI,
but only using documentation, as well as occasionally resorting to browsing
issue trackers and examples to get a feel for dependencies I was using.

_Oh man, I struggled at first_.

I didn't realize how much I relied on LSP and such to move around
badly-organized codebases. Not to mention, how did I even look for invocations
and other such things?

Simple: use `grep`/`rg` and name variables better so that they're more
["`grep`-pable"](https://mrcoles.com/is-it-greppable/)!

What about errors? How would I know if my code had errors? How would I start
testing my code?

My process of writing code started to change after asking these questions: I
started recompiling quite frequently to check for errors, and was writing less
useless code and testing it more frequently as a result. I even started mocking
out my desired behavior in comments and in super rough design documents, rather
than just diving in headfirst.

**I seemed to have forgotten that source code is communication between not just
the developer and computer, but between developers as well.** And once I
realized this, it all clicked, and my world exploded for the better.

Navigating around package names and functions forced me to think about how I was
organizing my code better, and made me create better abstractions around my
screens and program state. Not to mention that it helped me research different
solutions to problems that I ran into, since I was finally asking the correct
questions about my own code before I even typed it into the buffer. This was
looking good!

I had the `nixos option` rewrite complete in a week, all while going to and from
my university and working on it during classes. Even though this was much slower
than I would have liked it to be, I learned a ton throughout the process about
many things. Some things like how the Elm architecture translated to a much more
imperative programming language, how to mimic Rust-style enums with interfaces,
and many other fruitful revelations came from just turning the fucking
autocomplete off.

Just think about that for a second. This is a great source of knowledge! And it
just came from turning my tools off and understanding why they were there in the
first place. And now, hell, I can probably work more effectively in more
restricted environments and am more adaptable to shitty situations thrown at me.

One of my friends mentioned this same phenomenon too in different ways. Quote
from one of our conversations about this (with some editorializing for clarity):

> Yeah, I actually did the whole "freecoding" thing subconsciously during our
> filesystems[^filesystems] project. There's I think some mechanism in my brain
> where I try to make code more readable when I'm not using an LSP or have
> legitimate syntax highlighting. The process of "paper and pen" compilation in
> my head as I'm writing code is valuable, since the best way to not get
> compiler errors when writing with 0 tooling is to just not write any fucking
> compiler errors (5head, etc.).

Let's be frank for a second. _This doesn't seem like some big realization!_, you
may be thinking. And you're right. **It's the way that most fruitful learning
happens: by understanding from first principles why you need the tools you do.**
You're not gonna know what a hydraulic press is for if you don't know what the
fuck the term "pressure" is.

So now the question arises: regardless of the fact that I had this enlightening
experience from programming with minimal tooling, why should people not use LLMs
for code? Are LLMs not just another tool in the box, just like LSP and code
autocomplete? Are they really as damaging as I claim they are to programming
knowledge?

## The Beasts That Cannot Comprehend

LLMs are fundamentally just
[next-word-predictors](https://bea.stollnitz.com/blog/how-gpt-works-technical/)
with a decently high degree of accuracy. While this seems like a rather
reductive view of the amazing technology behind them like the
[transformer architecture](<https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)>),
the whole idea is that with a high degree of accuracy, they are able to simulate
intelligent output.

This next-token tech has existed for a while in the form of other precursors,
such as [Markov chains](https://en.wikipedia.org/wiki/Markov_chain). So this
isn't a new, groundbreaking concept, it's just an evolved version of it.

However, this means that no real semantic information is being encoded about
tokens, but rather LLMs will be learning about how likely one token is to follow
another.

Think about it this way: I want an LLM to evaluate the expression "1 + 1 =".
However, the LLM only knows what the token "1" is in relation to other tokens,
since it sees it as an "embedding" (aka some numerical value in a
multi-dimensional space). It _may_ predict that "2" is the next token after
this, due to the fact that it's probably seen this relation in its training
data.

That's INCREDIBLY wasteful calculations to predict what the next token is when
it comes to mathematical expressions, simply because the LLM has no idea what a
"number" even is definitionally. It only sees what the number token is in
approximation to other tokens in its datasets. Not to mention that a nonzero
chance of being wrong should never happen when attempting to evaluate
expressions. You don't expect a fucking calculator to be wrong, right? So why
should we suddenly start trusting the output of something that has the potential
to be confidently wrong by its own core design principles?

Let's take this concern, and apply it mathematically with some basic statistics.
Since an LLM is a token _predictor_, it has some nonzero chance of generating
incorrect predictions. Let's see how this can spiral during a prompt-based
conversation; assume a flat per-token accuracy rate of 99.99% over a wide
variety of situations, so a 0.01% chance of error for the next token. This is
probably more generous than I can give most LLMs credit for, but I digress.

The possibility that all tokens are theoretically correct assuming this flat
per-token accuracy relies on the probability of purely independent events all
following a predicted outcome, as represented in the following formula, where
`n` is the number of events:

$$
P_{all correct} = p^n = 0.9999^n
$$

Interestingly, in this formula, since I am treating each event as purely
independent, this is probably the highest rate of accuracy that could be
achieved for this hypothetical LLM in particular. But I'll get into why that's a
problem later.

The expected number of errors is linearly growing, would then follow this
formula:

$$
E(n) = n * (1 - p) = n * (1 - 0.9999) = n * 0.0001
$$

With some more realistic numbers of tokens:

- 1000 tokens :: $E(1000) = 1000 * 0.0001 = 0.1$
- 10,000 tokens :: $E(10000) = 10000 * 0.0001 = 1$
- 100,000 tokens :: $E(100000) = 100000 * 0.0001 = 10$

10 errors over a 100,000 token conversation? Doesn't seem like much at first.
But here's the real kicker: **semantic drift**.

Remember what I said earlier about treating each event as purely independent?
Well, that's just not the way models work. A _next-token predictor_ is always
generating dependent events by definition!

This leads to all sorts of cascading errors, and thus error probability is no
longer linearly growing, but rather _exponential_. One "error" could easily be a
categorical one that shifts the entire conversation in a completely unwanted
direction with even more "errors", especially ones generated early on in an LLM
prompting session. Models don't recover from this easily without some
re-grounding, either in the form of introducing new/better context or just a
full blown new prompting session without the previous errors (aka putting in
more coins spinning the wheel again).

Programs usually have tons of moving parts to them, so mistakes can very easily
compound to give you a terrible developer experience. One variable name that
didn't get translated over? Oops, sorry! Time to look through and replace it.
Misleading comments that go unnoticed since they don't interfere with code
execution? You betcha! A logic bug in one small place that you didn't think
there should be one? Have fun drinking away your sorrows at 3 AM wondering why
something broke because it was a `>` rather than a `>=` sign\![^stoned] Because
the LLM is so smart, apparently.

Not to mention the fact that if one relies on AI for test generation, and is the
type of developer to have the mental binary between "It works!" and "Why no
work?"[^why-no-work] and nothing else in the brain (cue: aka vibe coders), they
run into another problem. Their tests might just straight-up be wrong, and it'll
slip right past their empty brain and into code that I'll have an aneurysm
looking at two years later.

And the most insidious of all: generating code that works, but is _complete
fucking spaghetti_ that is so tangled that even Mario himself would struggle to
eat it. Tech debt is very real, and someone ends up paying the price for it down
the line. And it sure as hell isn't the AI that generated the slop.

### The Heroes They Could Not Comprehend

This mountain of problems is why I massively respect the programmers of old and
the people that are willing to dive into unknown topics without the comfort of
an LLM.

To be quite frank, I probably would have fallen into the same hole, had I not
been interested in the likes of Zig and Nix. Two of my favorite pieces of tech
in existence as of the time of writing; both were focused on very different
realms, but they oddly had one thing in common in 2022.

**Both had a terrible lack of datasets and resources for LLMs to train on.**

And oh boy, was that a fucking blessing in disguise for me.

I remember there were countless times that I tried to generate Nix code for my
system, thinking that it would find the right options in the module system and
correct configurations to create for me. That it would come up with the right
abstractions. Nah, it just generated nonexistent module options and blatantly
told me false things about how the Nix module system worked to merge modules
together, and caused me to go down rabbit holes for _days_ on wild goose chases.

I tried to do the same things with Zig, but oh my God, it was somehow _worse_.
Because it wouldn't just come up with nonexistent APIs from the standard lib or
try to hallucinate terrible-performing code that would throw instances of very
obvious detectable illegal behavior or not use the language effectively.

Nah, it would just **throw out invalid syntax.** And _trust me_, it took
everything in me to not crash out and shut down in the middle of physics class
when that happened[^invalid-syntax].

Who the hell is this pipe dream of vibe coding even fooling? Tons of people,
unfortunately. Just look at tech bro LinkedIn. Or maybe listen to an investors
meeting at YCombinator when they are deciding who to fund in their next
batch[^yc]. Or actually, don't. Save yourself some sanity.

## The Fool Says In His Heart: I Can Vibe Code![^the-fool]

Ah, the ones that refuse to learn, and thus cannot even see that they are the
fools in this game. Fools don't know that they are fools, right? They think that
they're wise.

So how is it that despite my massively positive experiences with the lack of AI
in my programming career, that vast swaths of programmers and tech CEOs are
enamored by their siren-like singing? _Why were they fooled by the fancy
weighted billion-side dice?[^dice]_

The real answer? The fools have always existed when it comes to new tech.

Every single time another SF-based AI CEO
[floats another promise of an "artificial general intelligence"](https://www.tomsguide.com/ai/chatgpt/sam-altman-claims-agi-is-coming-in-2025-and-machines-will-be-able-to-think-like-humans-when-it-happens)
(AGI), another piece of my soul leaves my body out of sheer cringe. Since
somehow the next iteration of a fancy next-word predictor is the sign of
ultimate intelligence for our species. Give me a fucking break.

Not only do we have AI CEOs blatantly lying about their products' capabilities
in an unprecedented way, the drop-shippers and tech bros EAT THAT SHIT UP. They
shill the ever-living FUCK out of Claude and the like, and it's like they can
never shut up about their latest course on how to utilize it "properly". The
middle managers hear "We can hire less developers!" and go straight for layoffs,
thinking that the cost for fully AI-assisted coding will be less than hiring
junior developers. Then startup founders follow after this example, thinking
"Maybe I don't need to hire a developer and I can make this idea myself!"

Can you? You can, but for a price. And a very hidden one. There's no such thing
as a free lunch, you've heard this thousands of times!!! Why do you never
learn??? Have you seen the [prices](https://docs.cursor.com/models) for tools
like Cursor IDE and the like? They're **fucking outrageous**.

At the time of writing, there is a Free plan that allows 200 requests _per
month_. That's pure gambler's fallacy, a pure distillation of that "Just one
more prompt, bro!" attitude, so pure that it looks blue[^breaking-bad]! Oh, but
it gets worse.

Pay $20 per month, and you get 500 requests! Hell yeah, more tickets for the
slot machine! Not to mention as long as you wait in line for a little longer
each time, you can actually spin the wheel as many times as you want! Because
you technically get unlimited "requests", just on a much slower mode. Because
that's economically sustainable, right?

Well, OK, hold on. What if you use another model? "Bring your own model", just
like you'd BYOB some moonshine to a house party or something, except much worse.
Well, it's charged per request.

But what's a request even? As per documentation:

> A request represents a single message sent to the model, which includes your
> message, any relevant context from your codebase, and the model’s response.
>
> One request is $0.04.

WHAT??????

25 requests is 1 dollar????

> "Hit me. Hit me. Hit me. Why no work? Fuck, I guess hit me again!"

That's exactly what I imagine vibe coders saying when they are in front of this
absolute fucking Ponzi scheme of an application that is Cursor, or any other
so-called "agentic coder" or whatever memetic juice they're on again.

And the even more outrageous thing about it? When investors eventually get tired
of sinking trillions of dollars into AI for massively diminishing returns, AI
companies will charge out their ass to break even and not die. And then these
vibe coder fucks will pay even MORE just to get the same shit-tier output, all
because they are not willing to learn the fucking tech themselves.

This is pure, out-in-the-open
[vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in), just like Apple
would have done. They reel you in like a fish, hoping you become reliant on
their tooling, and then eventually extort you for what you've got. And vibe
coders will happily pay these exorbitant fees, smugly thinking that they've
successfully put us real engineers out of a job like the fools they are. Steve
Jobs would be so proud of Cursor and OpenAI. And no, _that's not a fucking
compliment_, as some tech bros would have you believe.

## Reconciliation?

Is it possible to reconcile vibe coding with freecoding? More specifically, can
they coexist?

_Possibly_.

As much as I bash on AI dumbing down the general populace, in the hands of
master craftsmen it can take them quite far. While I am no master craftsman, I
can very confidently say that liberal usage of AI has helped me learn how to
utilize complex systems such as Kubernetes quite quickly. Hell, I used ChatGPT
at work to help me put together a GitHub Actions `actions-runner-controller`
setup with self-hosted Nix caching and other tools, despite never having worked
with Kubernetes in any meaningful capacity beforehand. But the key is that I've
learned how to utilize it while doing so, and will absolutely remember the
concepts and mistakes that I have made and learn from them, even with that
liberal AI usage.

Remember low-code tools? I put vibe coding squarely in the same place. It's for
the people who don't have an innate desire to learn how complex computer systems
work in order to bring their ideas to life. Or, more crassly, the ones that
simply don't regard code as the art form that it is.

Actually, hold on. Let's generalize that a step further. **Vibe coding is for
the people that want to profit off the work of others without actually doing any
of the work themselves, or at least the most minimal amount possible.** Like
people that don't want to pay artists properly for their work, and instead
remove watermarks from stock photos and pass it off as real in their games and
media.

A remarkably simple analogy, right?

My goal for writing this piece isn't to be critical of AI. Many people far
smarter than I am have done so with far more compelling points. I am a fan of
what AI can bring to the table, but it sure as hell isn't this trash that is
vibe coding. Us humans, we can be far more effective when we use the generative
capabilities of AI with correct context from our own sources of knowledge,
rather than offloading the knowledge itself to the machines and reaping the
limited profits until it's too late.

Just remember: when vibe coders hit that "Generate" button, they utilize the
massive amounts of work that went into making the data for these models to
consume. All with nothing but that disrespectful "Just one more prompt, bro!"
attitude. They pay massive amounts of money to companies instead of doing
themselves a favor and learning the technology for themselves, or at the very
least, God forbid, stimulating the economy by creating a job for someone.

Respect the process or not, it's your choice at the end of the day to vibe code
or not. It's not like you can gain muscles by having an industrial machine doing
the lifting for you, but I have no say in whether or not you'll choose to put in
the work or not. I can only rant about how bad it is for you, and hope you see
the same way I do afterward.

Fin.

A special thanks to my friends Zachary Howe and Vignesh Guruswami for reading my
article before publishing it and for suggesting improvements.

[^outsourcing]:
    If you didn't get the joke: Americans are very prone to outsourcing their
    jobs; we're basically at the point that people have started to outsource
    their own thinking as well.

[^wall-e]:
    Yes, this does remind me of the movie Wall-E. In Wall-E, the whole reason
    that the world turned into a landfill was in the name of human progress. I
    highly recommend watching Zoe Bee's video
    [In Defense of Inefficiency](https://www.youtube.com/watch?v=7-_rK0KkB6k)
    for more on the topic.

[^ramblings]:
    Bear with me here. Simply put, I can't really stand here anymore and claim
    that the people that have fully embraced AI are somehow in the right
    anymore. IMO, the usage of AI in such a way that it becomes core to your
    workflow is a disservice to your own cognitive abilities, and that's not
    something I can excuse as just a valid "tradeoff".

[^jared]:
    I don't know why I used the name Jared. If your name's Jared and this
    doesn't apply to you, sorry.

[^learn]:
    Please. Let's learn. It's good for you. I swear. Unless you're too
    brain-rotted by LLMs to understand what the concept of real learning means.

[^trying-vibe-coding]:
    Admittedly, after this this experience, I never tried to vibe code again.
    Terrible
    [developer experience](https://github.blog/enterprise-software/collaboration/developer-experience-what-is-it-and-why-should-you-care/),
    to say the least.

[^gippity]:
    "Gippity" is the endearing term that my friends and I have started to use
    for ChatGPT. Other LLMs have their own: Gemini is "Jiminy", so on, so forth.
    Thanks, [ThePrimeagen](https://www.twitch.tv/theprimeagen), for being such a
    terrible influence on us. Also, "SQL" is now pronounced "squeal". Crucify
    me.

[^dry]:
    Yes, it's very possible to overdo the Don't Repeat Yourself (DRY) principle.
    And LLMs are very prone to this, since they have limited knowledge about
    your systems that you are designing.

[^luck]:
    Funny enough, the "Just one more prompt, bro!" attitude is something that I
    found about while reading this great
    [article](https://pivot-to-ai.com/2025/06/05/generative-ai-runs-on-gambling-addiction-just-one-more-prompt-bro/)
    that made the connection click for me. Amazing read, give it a go.

[^insanity]:
    The "definition of insanity" as mentioned here is "doing the same thing over
    and over again and expecting a different result"; this is often
    mis-attributed to Albert Einstein, but regardless of the origin, it's a damn
    good quip on being adaptable instead of banging your head against the
    fucking wall.

[^isaiah]:
    "_Be ever hearing, but never understanding; be ever seeing, but never
    perceiving. Make the heart of this people calloused; make their ears dull
    and close their eyes. Otherwise they might see with their eyes, hear with
    their ears, understand with their hearts, and turn and be healed._" ~>
    Isaiah 6:9-10.

[^browser]:
    Don't you dare say it. A browser is a critical part of using the Internet
    and viewing documentation, especially in Go when looking for dependencies
    and such, so I don't want to hear anything about "Oh but you can just search
    up answers to questions!" Because no, I didn't. Trust me on this, that would
    have defeated the whole point of the exercise; ego lifting/programming is
    bad for everyone involved.

[^filesystems]:
    For context, both him and I had to write a full-blown
    [FAT](https://en.wikipedia.org/wiki/File_Allocation_Table)-style filesystem
    with a Linux-like shell for our OS principles class. It was really fun, and
    I learned quite a lot. Thanks to my friend Vignesh for this quote, by the
    way.

[^stoned]:
    I was stoned while writing this, so I definitely could have thought of
    better examples. But I feel like this catches my emotions about the subject
    better.

[^why-no-work]: Hi Matt. Why no work?
[^invalid-syntax]:
    Crashing out here is definitely a symptom of the "Just one more prompt,
    bro!" attitude I just mentioned in the earlier footnote. Very telling. Funny
    enough, LLMs will still struggle with Zig, since it's such a moving target.
    It even struggled in a recent interview that I had with Bun, where I decided
    to try it out due to a terrible time constraint of implementing `find` in 1
    hour with nothing but the C stdlib in Zig. Sometimes, hell, it's even
    struggled with Go when I've attempted to ask it for advice, since it didn't
    know the reflection APIs very well and thought that integer range syntax was
    invalid despite being in the latest version (1.24 at time of writing).

[^yc]:
    Because LOOK AT
    [HOW MANY AI COMPANIES](https://www.ycombinator.com/companies/industry/ai)
    are funded by YCombinator! Scrolling down this genuinely gave me whiplash,
    and makes me wonder what will happen to all that money when this bubble
    pops. They shoulda given it to me, at least I would have bought a better
    drum kit and made some music or some shit.

[^the-fool]:
    A reference to Psalm 14:1: "_The fool says in his heart, there is no God!_"
    I'm [atheist](/musings/the-unchristian), so I don't believe this, but still
    funny to reference regardless.

[^dice]:
    Because damn, it really does feel like rolling dice sometimes. Just one that
    has millions of "weights" (parameters) in some multi-dimensional directions
    that I can't even comprehend.

[^breaking-bad]:
    Yes, this is a vague Breaking Bad reference to the blue sky they sold.
    Because vibe coding is basically a drug.

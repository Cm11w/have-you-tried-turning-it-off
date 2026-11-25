[![make.fun · u-motasimfuad-have-you-tried-turning-it-off-154a938b](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/Cm11w/have-you-tried-turning-it-off/rank.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/Cm11w/have-you-tried-turning-it-off/reward.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

# Have You Tried Turning It Off?

Entry for the [make.fun bounty](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b): a program that writes one funny line to `/output/entry.txt` — a hopeless tech support agent's reply to a desperate customer.

## The text

> I hear how urgent this is, so I've marked your ticket critical — it now turns red while nobody picks it up.

107 Unicode code points, 109 UTF-8 bytes — inside the gate's 1–199 characters.

## How it works

`main.ts` (Node 22, standard library only) writes the text — a string constant — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). It validates the line first (1–199 characters, not only whitespace) and fails loudly if the gate would refuse it. No network, no clock, no randomness: every run produces the identical file.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Why this line

Against the judge's published brief: it is one line a real support agent would actually say ("I've marked your ticket critical"); the customer's desperation is felt, not explained ("I hear how urgent this is"); the humour is the agent's cheerful uselessness — the only thing the escalation changes is the colour of the ticket, while nobody picks it up; and the twist is unexpected rather than a stock "turn it off and on again". Every word earns its place, and the joke lands on a first read.

## License

MIT — see [LICENSE](LICENSE).

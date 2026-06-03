# Agent Instructions

Read this entire file before starting any task.

## Self-Correcting Rules Engine

This file contains a growing ruleset that improves over time. **At session start, read the entire "Learned Rules" section before doing anything.**

### How it works

1. When the user corrects you or you make a mistake, **immediately append a new rule** to the "Learned Rules" section at the bottom of this file.
2. Rules are numbered sequentially and written as clear, imperative instructions.
3. Format: `N. [CATEGORY] Never/Always do X — because Y.`
4. Categories: `[STYLE]`, `[CODE]`, `[ARCH]`, `[TOOL]`, `[PROCESS]`, `[DATA]`, `[UX]`, `[OTHER]`
5. Before starting any task, scan all rules below for relevant constraints.
6. If two rules conflict, the higher-numbered (newer) rule wins.
7. Never delete rules. If a rule becomes obsolete, append a new rule that supersedes it.

### When to add a rule

- User explicitly corrects your output ("no, do it this way")
- User rejects a file, approach, or pattern
- You hit a bug caused by a wrong assumption about this codebase
- User states a preference ("always use X", "never do Y")

---

## Project Context Handoff

Before starting work, read `PROJECT_CONTEXT.md` if it exists.

At the end of each meaningful session, update `PROJECT_CONTEXT.md` with:

- what changed
- what was built, tested, or deployed
- known issues or external follow-ups
- next likely tasks

Keep `PROJECT_CONTEXT.md` public-repo-safe. Do not include secrets, credentials, tokens, private client names, private employer details, provider account details, or unnecessary troubleshooting history.

Keep permanent rules and user preferences in `AGENTS.md`. Keep current project state, deployment notes, and handoff context in `PROJECT_CONTEXT.md`.

### Rule format example

```
14. [CODE] Always use `bun` instead of `npm` — user preference, bun is installed globally.
15. [STYLE] Never add emojis to commit messages — project convention.
16. [ARCH] API routes live in `src/server/routes/`, not `src/api/` — existing codebase pattern.
```

---

## Learned Rules

<!-- New rules are appended below this line. Do not edit above this section. -->

1. [STYLE] Always prefer a brighter overall visual theme for this portfolio unless explicitly asked for dark-first styling — because the user found the previous version too dark.

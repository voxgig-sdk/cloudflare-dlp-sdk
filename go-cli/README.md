# cloudflare-dlp-cli

boru-driven command-line client **and** interactive REPL for the CloudflareDlp
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudflare-dlp-cli)
make build

# 2. See usage (words, entities, env vars)
./cloudflare-dlp-cli --help

# 3. Provide credentials once, via the environment
export CLOUDFLARE_DLP_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./cloudflare-dlp-cli list dlp_custom_prompt_topic
./cloudflare-dlp-cli load 1 dlp_custom_prompt_topic            # {id:1} shorthand
./cloudflare-dlp-cli load '{id:1}' dlp_custom_prompt_topic       # explicit match map
./cloudflare-dlp-cli update '{name:"x"}' dlp_custom_prompt_topic
./cloudflare-dlp-cli list dlp_data_class

# 5. Override the API base URL for a single call
CLOUDFLARE_DLP_BASE=https://api.example.com ./cloudflare-dlp-cli list dlp_custom_prompt_topic

# 6. No arguments -> interactive REPL
./cloudflare-dlp-cli
cloudflare-dlp> list dlp_custom_prompt_topic
cloudflare-dlp> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cloudflare-dlp-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export CLOUDFLARE_DLP_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/cloudflare-dlp-cli list dlp_custom_prompt_topic
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./cloudflare-dlp-cli list dlp_custom_prompt_topic
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Load a single record

```sh
./cloudflare-dlp-cli load 1 dlp_custom_prompt_topic          # scalar shorthand for {id:1}
./cloudflare-dlp-cli load '{id:1}' dlp_custom_prompt_topic     # explicit match map
```

The query is either a **scalar** (`1`, treated as `{id:1}`) or a **match map**
(`{id:1}`, `{slug:"acme"}`). Quote the map so your shell passes it through intact.

### Update a record

```sh
./cloudflare-dlp-cli update '{id:1,name:"new"}' dlp_custom_prompt_topic
```

The match map carries both the selector and the new field values; the updated
record is printed back.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDFLARE_DLP_APIKEY=sk_live_xxx            # API key
export CLOUDFLARE_DLP_BASE=https://api.example.com  # optional: override the API base URL
./cloudflare-dlp-cli list dlp_custom_prompt_topic
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `cloudflare-dlp>`). Each line is
evaluated as its own boru expression:

```text
$ ./cloudflare-dlp-cli
cloudflare-dlp> list dlp_custom_prompt_topic
cloudflare-dlp> /help
cloudflare-dlp> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 33 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `dlp_custom_prompt_topic`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDFLARE_DLP_APIKEY` | API key sent with every request. |
| `CLOUDFLARE_DLP_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/cloudflare-dlp-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 33 entities this SDK exposes (any is valid as `<entity>`):

dlp_custom_prompt_topic dlp_data_class dlp_data_tag dlp_data_tag_category dlp_data_tag_category_template dlp_dataset dlp_document_fingerprint dlp_email dlp_entry dlp_integration_entry dlp_predefined_entry dlp_profile dlp_sensitivity_group dlp_sensitivity_group_template dlp_sensitivity_level dlp_setting policy posture_api_create_remediation_job posture_api_create_webhook_job posture_api_export_job posture_api_finding posture_api_finding_instance posture_api_finding_type posture_api_paginated_content_asset_list posture_api_paginated_export_job_list posture_api_paginated_finding_instance_list posture_api_paginated_finding_list posture_api_paginated_finding_type_list posture_api_paginated_remediation_job_list posture_api_paginated_remediation_type_list posture_api_webhook posture_api_webhook_list webhook

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./cloudflare-dlp-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.

.PHONY: run
run:
	@cd puppeteer && deno task start

.PHONY: fmt
fmt:
	@cd puppeteer && deno fmt

.PHONY: lint
lint:
	@cd puppeteer && deno lint

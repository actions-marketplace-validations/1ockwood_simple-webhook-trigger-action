# Simple Webhook Trigger

An extremely simple JavaScript action for triggering webhooks. Useful for triggering deploys on Cloudflare Pages, Netlify, etc., and other situations where you only need to send a simple request to a webhook URL.

The code and dependencies ([@actions/core](https://github.com/actions/toolkit/tree/main/packages/core) are compiled to `dist` using [@vercel/ncc](https://github.com/vercel/ncc).

## Inputs

### `webhook-url`

[**Required**] The URL for the webhook to trigger.

### `webhook-method`

[**Optional**] The method used for triggering the webhook, e.g., `POST`, `GET`, etc. Defaults to `POST`.

## Outputs

This action does not set any outputs.

## Example usage

```yaml
uses: 1ockwood/simple-webhook-trigger-action@v1
with:
  webhook-url: ${{ secrets.DEPLOY_WEBHOOK_URL }}
```

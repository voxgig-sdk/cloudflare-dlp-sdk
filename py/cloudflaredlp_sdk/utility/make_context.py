# CloudflareDlp SDK utility: make_context

from cloudflaredlp_sdk.core.context import CloudflareDlpContext


def make_context_util(ctxmap, basectx):
    return CloudflareDlpContext(ctxmap, basectx)

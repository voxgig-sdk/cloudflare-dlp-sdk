# CloudflareDlp SDK exists test

import pytest
from cloudflaredlp_sdk import CloudflareDlpSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloudflareDlpSDK.test(None, None)
        assert testsdk is not None

# DlpEmail entity test

import json
import os
import time

import pytest

from cloudflaredlp_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflaredlp_sdk import CloudflareDlpSDK
from cloudflaredlp_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestDlpEmailEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareDlpSDK.test(None, None)
        ent = testsdk.DlpEmail(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "dlp_email": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = CloudflareDlpSDK.test(seed, None)
        seen = list(base.DlpEmail(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from cloudflaredlp_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = CloudflareDlpSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.DlpEmail(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _dlp_email_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "dlp_email." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_DLP_TEST_DLP_EMAIL_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        dlp_email_ref01_ent = client.DlpEmail(None)
        dlp_email_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.dlp_email"), "dlp_email_ref01"))
        dlp_email_ref01_data["account_id"] = setup["idmap"]["account01"]

        dlp_email_ref01_data = helpers.to_map(runner.entity_data(dlp_email_ref01_ent.create(dlp_email_ref01_data, None)))
        assert dlp_email_ref01_data is not None

        # LIST
        dlp_email_ref01_match = {
            "account_id": setup["idmap"]["account01"],
        }

        dlp_email_ref01_list_result = dlp_email_ref01_ent.list(dlp_email_ref01_match, None)
        assert isinstance(dlp_email_ref01_list_result, list)

        # UPDATE
        dlp_email_ref01_data_up0_up = {
            "account_id": setup["idmap"]["account_id"],
        }

        dlp_email_ref01_markdef_up0_name = "description"
        dlp_email_ref01_markdef_up0_value = "Mark01-dlp_email_ref01_" + str(setup["now"])
        dlp_email_ref01_data_up0_up[dlp_email_ref01_markdef_up0_name] = dlp_email_ref01_markdef_up0_value

        dlp_email_ref01_resdata_up0 = helpers.to_map(runner.entity_data(dlp_email_ref01_ent.update(dlp_email_ref01_data_up0_up, None)))
        assert dlp_email_ref01_resdata_up0 is not None
        assert dlp_email_ref01_resdata_up0[dlp_email_ref01_markdef_up0_name] == dlp_email_ref01_markdef_up0_value

        # LOAD
        dlp_email_ref01_match_dt0 = {}
        dlp_email_ref01_data_dt0_loaded = dlp_email_ref01_ent.load(dlp_email_ref01_match_dt0, None)
        assert dlp_email_ref01_data_dt0_loaded is not None


        # LIST
        dlp_email_ref01_match_rt0 = {
            "account_id": setup["idmap"]["account01"],
        }

        dlp_email_ref01_list_rt0_result = dlp_email_ref01_ent.list(dlp_email_ref01_match_rt0, None)
        assert isinstance(dlp_email_ref01_list_rt0_result, list)



def _dlp_email_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/dlp_email/DlpEmailTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareDlpSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["dlp_email01", "dlp_email02", "dlp_email03", "account01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "CLOUDFLARE_DLP_TEST_DLP_EMAIL_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_DLP_TEST_DLP_EMAIL_ENTID": idmap,
        "CLOUDFLARE_DLP_TEST_LIVE": "FALSE",
        "CLOUDFLARE_DLP_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_DLP_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_DLP_TEST_DLP_EMAIL_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("account_id") is None:
        idmap_resolved["account_id"] = idmap_resolved.get("account01")

    if env.get("CLOUDFLARE_DLP_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("CLOUDFLARE_DLP_APIKEY"),
            },
            extra or {},
        ])
        client = CloudflareDlpSDK(helpers.to_map(merged_opts))

    _live = env.get("CLOUDFLARE_DLP_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("CLOUDFLARE_DLP_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }

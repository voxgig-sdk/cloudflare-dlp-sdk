
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudflareDlpSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloudflareDlpSDK.test()
    equal(testsdk instanceof CloudflareDlpSDK, true,
      'CloudflareDlpSDK.test() must return a client synchronously')
  })

})

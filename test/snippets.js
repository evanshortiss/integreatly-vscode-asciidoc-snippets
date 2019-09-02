'use strict'

const { readFileSync } = require('fs')
const { resolve } = require('path')
const assert = require('assert')

describe('snippets.json', () => {
  it('should contain well-formed JSON', () => {
    let snippetsJsonString
    let snippetsJsonObject

    try {
      snippetsJsonString = readFileSync(resolve(__dirname, '..', 'snippets.json'))
    } catch (e) {
      throw new Error('failed to read snippets.json file')
    }

    try {
      snippetsJsonObject = JSON.parse(snippetsJsonString)
    } catch (e) {
      console.error('snippets.json was malformed')
      throw e
    }

    // Validate snippets.json is a non-empty object
    assert.equal(typeof snippetsJsonObject, 'object')
    assert.notEqual(Object.keys(snippetsJsonObject), 0)

    // Validate each snippet entry
    Object.entries(snippetsJsonObject).forEach((value) => {
      const entry = value[1]
      const actualKeys = Object.keys(entry)
      const expectedKeys = ['body', 'prefix', 'description']

      assert.equal(actualKeys.length, expectedKeys.length)
      expectedKeys.forEach((key) => {
        assert(actualKeys.includes(key))
        assert.equal(typeof entry[key], 'string')
      })
    })
  })
})

import { it, expect } from 'vitest'

import { start } from '../index'

it('start should be defined', () => {
  expect(start).toEqual('hello world')
})

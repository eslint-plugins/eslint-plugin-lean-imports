import rule from '../../lib/rules/import';
import eslint from 'eslint';

const tester = new eslint.RuleTester();

tester.run('src/rules/import', rule, {
  valid: [
    {
      code: 'import "something"',
      parser: 'babel-eslint',
      options: ['lodash']
    },
    {
      code: 'import something from "something"',
      parser: 'babel-eslint',
      options: ['lodash']
    },
    {
      code: 'import lodash from "something"',
      parser: 'babel-eslint',
      options: ['lodash']
    },
    {
      code: 'import { something } from "something"',
      parser: 'babel-eslint',
      options: ['lodash']
    },
    {
      code: 'import { default as other } from "something"',
      parser: 'babel-eslint',
      options: ['lodash']
    },
    {
      code: 'import find from "lodash/collection/find"',
      parser: 'babel-eslint',
      options: ['lodash']
    },
    {
      code: 'import find from "react-bootstrap/lib/component"',
      parser: 'babel-eslint',
      options: ['react-bootstrap', 'lodash']
    }
  ],
  invalid: [
    {
      code: 'import "lodash"',
      parser: 'babel-eslint',
      options: ['lodash'],
      errors: [{
        message: 'Importing the entire lodash library is not permitted, please import the specific functions you need'
      }]
    },
    {
      code: 'import _ from "lodash"',
      parser: 'babel-eslint',
      options: ['lodash'],
      errors: [{
        message: 'Importing the entire lodash library is not permitted, please import the specific functions you need'
      }]
    },
    {
      code: 'import lodash from "lodash"',
      parser: 'babel-eslint',
      options: ['lodash'],
      errors: [{
        message: 'Importing the entire lodash library is not permitted, please import the specific functions you need'
      }]
    },
    {
      code: 'import { something } from "lodash"',
      parser: 'babel-eslint',
      options: ['lodash'],
      errors: [{
        message: 'Importing the entire lodash library is not permitted, please import the specific functions you need'
      }]
    },
    {
      code: 'import { default as other } from "lodash"',
      parser: 'babel-eslint',
      options: ['lodash'],
      errors: [{
        message: 'Importing the entire lodash library is not permitted, please import the specific functions you need'
      }]
    },
    {
      code: 'import rb from "react-bootstrap"',
      parser: 'babel-eslint',
      options: ['lodash', 'react-bootstrap'],
      errors: [{
        message: 'Importing the entire react-bootstrap library is not permitted, please import the specific functions you need'
      }]
    }
  ]
});

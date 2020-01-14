import { expectType } from 'tsd';
import cristianoRonaldo = require('.');

expectType<Promise<Object>>(cristianoRonaldo());
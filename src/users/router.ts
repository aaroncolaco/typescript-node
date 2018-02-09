'use strict';

import * as express from 'express';
import Controller from './controller';

const router = express.Router();

router.get('/', Controller.getAllUsers);

module.exports = router;

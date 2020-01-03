"use strict";

import graph from "fbgraph";
import { Response, Request, NextFunction } from "express";


/**
 * GET /api
 * List of API examples.
 */
export const getApi = (req: Request, res: Response) => {
    res.json({
        title: "API Examples"
    });
};
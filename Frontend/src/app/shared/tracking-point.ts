// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { Point } from './point';

export interface TrackingPoint extends Point {
    id: number;
    time: number;
    provider: string;
    locationProvider: number;
    debug: boolean;
    accuracy: number;
    speed: number;
    bearing: number;
    tripId: number;
    assetId: string;
    trackingDeviceId: string;
}

import * as turf from '@turf/helpers';
import turfCenter from '@turf/center';
import turfDistance from '@turf/distance';
import turfMidpoint from '@turf/midpoint';
import turfArea from '@turf/area';
import bearing from '@turf/bearing'
const turfNearesPointOnLine = require('@turf/nearest-point-on-line').default
const turfBooleanClockwise = require('@turf/boolean-clockwise').default
const booleanPointInPolygon = require('@turf/boolean-point-in-polygon').default
const turfTruncate = require('@turf/truncate').default
const turfBooleanIntersects = require('@turf/boolean-intersects').default
const turfBooleanPointInPolygon = require('@turf/boolean-point-in-polygon').default
const turfRhumbBearing = require('@turf/rhumb-bearing').default
const turfRhumbDestination = require('@turf/rhumb-destination').default
const turfBooleanWithin = require('@turf/boolean-within').default
const turfBooleanOverlap = require('@turf/boolean-overlap').default
const transformTranslate = require('@turf/transform-translate').default
const turfTransformRotate = require('@turf/transform-rotate').default
const turfLineIntersect = require('@turf/line-intersect').default

type IPoint = [number, number];

export class Gis {
  public static rhumbBearing(start: IPoint, end: IPoint, options?: { final?: boolean }): number {
    return turfRhumbBearing(start, end, options);
  }

  public static booleanClockWise(shape: any): boolean {
    return turfBooleanClockwise(shape);
  }

  public static turfBearing(start: any, end: any): number {
    return bearing(start, end);
  }
  public static rhumbDestination(origin: any, distance: number, bearing: number, options?: { units?: any }): any {
    return turfRhumbDestination(origin, distance, bearing, options).geometry.coordinates as any;
  }

  public static area(path: IPoint[]): number {
    return turfArea(turf.polygon([path]));
  }

  static distance(point1: any, point2: any, units: 'meters' | 'kilometers' | 'miles' | 'degrees'): number {
    return turfDistance(point1, point2, units);
  }

  static nearestPointOnLine(line: any, point: any): any {
    return turfNearesPointOnLine(line, point);
  }

  public static transformRotate<Path extends IPoint | IPoint[]>(path: Path, angle: number, options?: { pivot?: IPoint; mutate?: boolean; }): Path {
    if (isPoint(path)) {
      return turfTransformRotate(turf.point(path), angle, options).geometry.coordinates as Path;
    }
    const isPolygon = isValidPolygonPath(path as IPoint[]);
    if (isPolygon) {
      return turfTransformRotate(turf.polygon([path as IPoint[]]), angle, options).geometry.coordinates[0] as Path;
    }
    return turfTransformRotate(turf.lineString(path as IPoint[]), angle, options).geometry.coordinates as Path;
  }

  public static booleanWithin(a: IPoint[], b: IPoint[]): boolean {
    return turfBooleanWithin(turf.polygon([a]), turf.polygon([b]));
  }

  public static booleanPointInPolygon(point: any, path: IPoint[], options?: { ignoreBoundary?: boolean }): boolean {
    return turfBooleanPointInPolygon(point, turf.polygon([path]), options);
  }

  public static findTopLeftMostPoint(points: IPoint[]): IPoint | undefined {
    if (!points || points.length === 0) {
      console.error('No points provided');
      return undefined;
    }
    const validPoints = points.filter(point => {
      const isValid = Array.isArray(point) && point.length === 2 && !isNaN(point[0]) && !isNaN(point[1]);
      if (!isValid) {
        console.error('Invalid point:', point);
      }
      return isValid;
    });

    if (validPoints.length === 0) {
      console.error('No valid points found');
      return undefined;
    }

    const adjustedPoints = validPoints.map(point => {
      const adjustedPoint = [point[0] < 0 ? point[0] + 360 : point[0], point[1]] as IPoint;
      console.log('Adjusted point:', adjustedPoint);
      return adjustedPoint;
    });

    const sortedPoints = adjustedPoints.sort((a, b) => {
      const sortResult = a[1] !== b[1] ? b[1] - a[1] : a[0] - b[0];
      console.log(`Comparing points ${a} and ${b}: ${sortResult}`);
      return sortResult;
    });

    const topLeftPoint = sortedPoints[0];
    console.log('Top-left point:', topLeftPoint);

    return topLeftPoint;
  }



  public static pointFeatureToPoint(point: any): IPoint {
    const coordinates = point.geometry.coordinates;
    if (!validateCoordinates(coordinates)) {
        throw new Error(`Invalid coordinates: ${coordinates}`);
    }
    return coordinates;
  }
}

// Helper functions
function isPoint(point: IPoint | IPoint[]): point is IPoint {
  return typeof point[0] === 'number' && typeof point[1] === 'number';
}

function isValidPolygonPath(path: IPoint[]): boolean {
  return path.length >= 4 && isPointEqual(path[0], path[path.length - 1]);
}

function isPointEqual(a: IPoint, b: IPoint): boolean {
  return a[0] === b[0] && a[1] === b[1];
}

function validateCoordinates(coord: IPoint): boolean {
  return Array.isArray(coord) && coord.length === 2 && !isNaN(coord[0]) && !isNaN(coord[1]);
}

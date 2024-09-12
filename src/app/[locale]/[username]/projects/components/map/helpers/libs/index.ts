export function hashPolygonPath(path: any[]): string {
    let result = '';
    for (const point of path) {
      result += hashPoint(point);
    }
    return result;
  }
  
  export function hashPoint(point: any, precision: number = 6): string {
    return `${point[1].toFixed(precision)},${point[0].toFixed(precision)}`;
  }
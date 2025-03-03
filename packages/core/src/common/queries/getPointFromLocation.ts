import { Location, Path, Point, Range } from 'slate';
import { TEditor } from '../../types/slate/TEditor';

/**
 * Get the point from a location (default: selection).
 * If the location is a range, get the anchor point.
 * If the location is a path, get the point at this path with offset 0.
 * If `focus` is true, get the focus point.
 */
export const getPointFromLocation = (
  editor: TEditor,
  {
    at = editor.selection,
    focus,
  }: {
    at?: Location | null;
    focus?: boolean;
  } = {}
) => {
  let point: Point | undefined;
  if (Range.isRange(at)) point = !focus ? at.anchor : at.focus;
  if (Point.isPoint(at)) point = at;
  if (Path.isPath(at)) point = { path: at, offset: 0 };

  return point;
};

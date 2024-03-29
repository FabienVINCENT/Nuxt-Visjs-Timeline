import type {TimelineEventPropertiesResult} from "vis-timeline/types";

export const events = [
  'click',
  'contextmenu',
  'currentTimeTick',
  'doubleClick',
  'drop',
  'mouseOver',
  'mouseDown',
  'mouseUp',
  'mouseMove',
  'groupDragged',
  'changed',
  'rangechange',
  'rangechanged',
  'select',
  'itemover',
  'itemout',
  'timechange',
  'timechanged',
  'markerchange',
  'markerchanged'
]


export type VisTimelineEvent = {
  click: TimelineEventPropertiesResult;
  contextmenu: TimelineEventPropertiesResult;
  currentTimeTick: TimelineEventPropertiesResult;
  doubleClick: TimelineEventPropertiesResult;
  drop: TimelineEventPropertiesResult;
  mouseOver: TimelineEventPropertiesResult;
  mouseDown: TimelineEventPropertiesResult;
  mouseUp: TimelineEventPropertiesResult;
  mouseMove: TimelineEventPropertiesResult;
  groupDragged: TimelineEventPropertiesResult;
  changed: TimelineEventPropertiesResult;
  rangechange: TimelineEventPropertiesResult;
  rangechanged: TimelineEventPropertiesResult;
  select: TimelineEventPropertiesResult;
  itemover: TimelineEventPropertiesResult;
  itemout: TimelineEventPropertiesResult;
  timechange: TimelineEventPropertiesResult;
  timechanged: TimelineEventPropertiesResult;
  markerchange: TimelineEventPropertiesResult;
  markerchanged: TimelineEventPropertiesResult;
}

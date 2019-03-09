/*
New API enums. Generated from Freeze20
*/
/* eslint-disable */
var ActionCode = {}; ActionCode.AC_FLYTO = 0; ActionCode.AC_CIRCLEPATTERN = 1; ActionCode.AC_OVALPATTERN = 2; ActionCode.AC_LINEPATTERN = 3; ActionCode.AC_ARCPATTERN = 4; ActionCode.AC_FOLLOWBEHIND = 5; ActionCode.AC_FOLLOWABOVE = 6; ActionCode.AC_FOLLOWBELOW = 7; ActionCode.AC_FOLLOWRIGHT = 8; ActionCode.AC_FOLLOWLEFT = 9; ActionCode.AC_FOLLOWBEHINDANDABOVE = 10; ActionCode.AC_FOLLOWCOCKPIT = 11; ActionCode.AC_FOLLOWFROMGROUND = 12; ActionCode.AC_STOP = 13; ActionCode.AC_JUMP = 14; ActionCode.AC_DELETE = 15; ActionCode.AC_EDIT_FINISHED = 16; ActionCode.AC_OBJECT_ADDED = 17; ActionCode.AC_PLAY = 18; ActionCode.AC_SHOW = 19; ActionCode.AC_EDIT_STARTED = 20; ActionCode.AC_SELCHANGED = 21; ActionCode.AC_WAYPOINT_REACHED = 22; ActionCode.AC_GROUP_ADDED = 23; ActionCode.AC_LAYER_ADDED = 24; ActionCode.AC_LAYER_REFRESHED = 25; ActionCode.AC_ITEM_MOVED=26; var AltitudeTypeCode = {}; AltitudeTypeCode.ATC_TERRAIN_RELATIVE = 0; AltitudeTypeCode.ATC_PIVOT_RELATIVE = 1; AltitudeTypeCode.ATC_ON_TERRAIN = 2; AltitudeTypeCode.ATC_TERRAIN_ABSOLUTE = 3; AltitudeTypeCode.ATC_DEFAULT = 999; var DynamicMotionStyle = {}; DynamicMotionStyle.MOTION_GROUND_VEHICLE = 0; DynamicMotionStyle.MOTION_AIRPLANE = 1; DynamicMotionStyle.MOTION_HELICOPTER = 2; DynamicMotionStyle.MOTION_HOVER = 3; var DynamicObjectType = {}; DynamicObjectType.DYNAMIC_3D_MODEL = 0; DynamicObjectType.DYNAMIC_TEXT_LABEL = 1; DynamicObjectType.DYNAMIC_IMAGE_LABEL = 2; DynamicObjectType.DYNAMIC_VIRTUAL = 3; var LabelStyle = {}; LabelStyle.LS_DEFAULT = 0; LabelStyle.LS_STREET = 1; LabelStyle.LS_STATE = 2; var MsgClient6 = {}; MsgClient6.MC_LEFT = 0; MsgClient6.MC_MAIN = 2; MsgClient6.MC_MESSAGE_BAR = 3; MsgClient6.MC_FLOAT = 4; MsgClient6.MC_POPUP = 5; var MsgType = {}; MsgType.TYPE_TEXT = 0; MsgType.TYPE_URL = 1; MsgType.TYPE_SCRIPT = 3; var ModelTypeCode = {}; ModelTypeCode.MT_NORMAL = 0; ModelTypeCode.MT_ANIMATION = 1; ModelTypeCode.MT_PROGRESSIVE = 2; var LayerGeometryType = {}; LayerGeometryType.LGT_POINT = 0; LayerGeometryType.LGT_POLYLINE = 1; LayerGeometryType.LGT_POLYGON = 2; LayerGeometryType.LGT_COLLECTION = 3; LayerGeometryType.LGT_NONE = -1; var SphereStyle = {}; SphereStyle.SPHERE_NORMAL = 0; SphereStyle.SPHERE_UPPER_HALF = 1; SphereStyle.SPHERE_LOWER_HALF = 2; SphereStyle.SPHERE_UPPER_HALF_BASE = 3; SphereStyle.SPHERE_LOWER_HALF_BASE = 4; var ElevationBehaviorMode = {}; ElevationBehaviorMode.EB_REPLACE = 0; ElevationBehaviorMode.EB_BELOW = 1; ElevationBehaviorMode.EB_ABOVE = 2; var EditItemFlags = {}; EditItemFlags.EDIT_ITEM_USE_PROPERTY = 0; EditItemFlags.EDIT_ITEM = 1; EditItemFlags.EDIT_ITEM_VERTICES = 2; EditItemFlags.EDIT_ITEM_BUILDING_ROOF = 3; var ItemCode = {}; ItemCode.SELECTED = 10; ItemCode.CHILD = 11; ItemCode.FIRSTVISIBLE = 12; ItemCode.NEXT = 13; ItemCode.NEXTVISIBLE = 14; ItemCode.PARENT = 15; ItemCode.PREVIOUS = 16; ItemCode.PREVIOUSVISIBLE = 17; ItemCode.ROOT = 18; var SortType = {}; SortType.SORT_ALPHABETICALLY_AZ = 0; SortType.SORT_ALPHABETICALLY_ZA = 1; SortType.SORT_BY_TYPE = 2; SortType.SORT_NO_SORT = 3; var WorldPointType = {}; WorldPointType.WPT_MODEL = 1; WorldPointType.WPT_LABEL = 2; WorldPointType.WPT_PRIMITIVE = 4; WorldPointType.WPT_ANIM = 8; WorldPointType.WPT_BUILDING = 16; WorldPointType.WPT_SKY = 32; WorldPointType.WPT_ACCURATE_CPT = 64; WorldPointType.WPT_BBOX_CPT = 128; WorldPointType.WPT_VIDEO = 256; WorldPointType.WPT_UNDERGROUND = 512; WorldPointType.WPT_SCREEN_OVERLAY = 1024; WorldPointType.WPT_SCREEN_CONTROL = 2048; WorldPointType.WPT_SCREEN_COVERED = 4096; WorldPointType.WPT_ALL = -1; var MouseInputMode = {}; MouseInputMode.MI_FREE_FLIGHT = 0; MouseInputMode.MI_COM_CLIENT = 1; MouseInputMode.MI_CONTROLLED_FLIGHT = 2; MouseInputMode.MI_EDIT = 3; MouseInputMode.MI_MEASURAMENT = 4; var MessageBarTextAlignment = {}; MessageBarTextAlignment.MBT_LEFT = 0; MessageBarTextAlignment.MBT_CENTER = 1; MessageBarTextAlignment.MBT_RIGHT = 2; var AccuracyLevel = {}; AccuracyLevel.ACCURACY_NORMAL = 0; AccuracyLevel.ACCURACY_BEST_FROM_MEMORY = 1; AccuracyLevel.ACCURACY_BEST_FROM_MPT = 2; var PermissionType = {}; PermissionType.LMP_ENABLE_ALL = 0; PermissionType.LMP_DISABLE_API = 1; PermissionType.LMP_DISABLE_UI = 2; PermissionType.LMP_DISABLE_ALL = -1; var SliderDisplayMode = {}; SliderDisplayMode.MODE_TIME_NONE = 0; SliderDisplayMode.MODE_FIXED_TIME = 1; SliderDisplayMode.MODE_TIME = 2; SliderDisplayMode.MODE_RANGE_PROJECT = 4; SliderDisplayMode.MODE_RANGE_CUSTOM = 8; SliderDisplayMode.MODE_ADJUST_FOR_GROUP = 16; var TimeZoneType = {}; TimeZoneType.TIME_ZONE_TYPE_MY_COMPUTER = 0; TimeZoneType.TIME_ZONE_TYPE_UTC = 1; TimeZoneType.TIME_ZONE_TYPE_SPECIFIC = 2; var TEVesrionType = {}; TEVesrionType.TEVT_PRO = 0; TEVesrionType.TEVT_PLUS = 1; TEVesrionType.TEVT_VIEWER = 2; TEVesrionType.TEVT_UNKNOWN = -1; var ObjectTypeCode = {}; ObjectTypeCode.OT_UNDEFINED = 0; ObjectTypeCode.OT_POLYLINE = 1; ObjectTypeCode.OT_POLYGON = 2; ObjectTypeCode.OT_RECTANGLE = 3; ObjectTypeCode.OT_REGULAR_POLYGON = 4; ObjectTypeCode.OT_CIRCLE = 5; ObjectTypeCode.OT_3D_POLYGON = 6; ObjectTypeCode.OT_BUILDING = 7; ObjectTypeCode.OT_BOX = 8; ObjectTypeCode.OT_PYRAMID = 9; ObjectTypeCode.OT_CYLINDER = 10; ObjectTypeCode.OT_CONE = 11; ObjectTypeCode.OT_ELLIPSE = 12; ObjectTypeCode.OT_ARC = 13; ObjectTypeCode.OT_ARROW = 14; ObjectTypeCode.OT_3D_ARROW = 15; ObjectTypeCode.OT_SPHERE = 16; ObjectTypeCode.OT_MODEL = 17; ObjectTypeCode.OT_LABEL = 18; ObjectTypeCode.OT_LOCATION = 19; ObjectTypeCode.OT_TREE_HOTLINK = 20; ObjectTypeCode.OT_ROUTE = 21; ObjectTypeCode.OT_MESSAGE = 22; ObjectTypeCode.OT_DYNAMIC = 23; ObjectTypeCode.OT_IMAGE_LABEL = 24; ObjectTypeCode.OT_THREAT_DOME = 25; ObjectTypeCode.OT_IMAGERY_LAYER = 26; ObjectTypeCode.OT_TERRAIN_VIDEO = 27; ObjectTypeCode.OT_POINT_CLOUD = 28; ObjectTypeCode.OT_ELEVATION_LAYER = 29; ObjectTypeCode.OT_TERRAIN_MODIFIER = 30; ObjectTypeCode.OT_TERRAIN_HOLE = 31; ObjectTypeCode.OT_POPUP_MESSAGE = 32; ObjectTypeCode.OT_FEATURE = 33; ObjectTypeCode.OT_PRESENTATION = 34; ObjectTypeCode.OT_ANALYSIS_LOS = 35; var SGGeometryTypeId = {}; SGGeometryTypeId.SG_POINT = 0; SGGeometryTypeId.SG_LINESTRING = 1; SGGeometryTypeId.SG_LINEARRING = 2; SGGeometryTypeId.SG_POLYGON = 3; SGGeometryTypeId.SG_MULTIPOINT = 4; SGGeometryTypeId.SG_MULTILINESTRING = 5; SGGeometryTypeId.SG_MULTIPOLYGON = 6; var BuildingStyleCode = {}; BuildingStyleCode.BS_STRETCH_TERRAIN = 0; BuildingStyleCode.BS_POLYGONS = 1; var IntersectionType = {}; IntersectionType.IT_NONE = 0; IntersectionType.IT_INTERSECT = 1; IntersectionType.IT_WITHIN = 2; var StreamLayerStatus = {}; StreamLayerStatus.SLS_NOT_STREAMED_LAYER = 0; StreamLayerStatus.SLS_STREAMING = 1; StreamLayerStatus.SLS_STREAM_PAUSED = 2; var AltitudeUnitCode = {}; AltitudeUnitCode.AU_METER = 0; AltitudeUnitCode.AU_FEET = 1; AltitudeUnitCode.AU_CENTIMETER = 2; AltitudeUnitCode.AU_DECIMETER = 3; AltitudeUnitCode.AU_INCHE = 4; AltitudeUnitCode.AU_YARD = 5; AltitudeUnitCode.AU_UNDEFINED = -1; var LabelLockMode = {}; LabelLockMode.LM_DECAL = 0; LabelLockMode.LM_AXIS = 1; LabelLockMode.LM_AXIS_TEXTUP = 2; LabelLockMode.LM_AXIS_AUTOPITCH = 3; LabelLockMode.LM_AXIS_AUTOPITCH_TEXTUP = 4; var DistributionDir = {}; DistributionDir.DOWN_UP = 0; DistributionDir.UP_DOWN = 1; DistributionDir.RIGHT_LEFT = 2; DistributionDir.LEFT_RIGHT = 3; DistributionDir.FRONT_BACK = 4; DistributionDir.BACK_FRONT = 5; var CPTDataFormat = {}; CPTDataFormat.CPT_DF_INTENSITY = 0; CPTDataFormat.CPT_DF_RGB = 1; var _HTML_POPUP_FLAGS = {}; _HTML_POPUP_FLAGS.HTML_POPUP_NONE = 0; _HTML_POPUP_FLAGS.HTML_POPUP_ANCHOR_3D_WINDOW = 1; _HTML_POPUP_FLAGS.HTML_POPUP_ALLOW_DRAG = 2; _HTML_POPUP_FLAGS.HTML_POPUP_NO_CAPTION = 4; _HTML_POPUP_FLAGS.HTML_POPUP_USE_DEFAULT_POS = 8; _HTML_POPUP_FLAGS.HTML_POPUP_USE_LAST_SIZE = 16; _HTML_POPUP_FLAGS.HTML_POPUP_ALLOW_RESIZE = 32; _HTML_POPUP_FLAGS.HTML_POPUP_ADD_SHADOW = 64; _HTML_POPUP_FLAGS.HTML_POPUP_NO_BORDER = 128; _HTML_POPUP_FLAGS.HTML_POPUP_SET_FOCUS_TO_RENDER = 256; _HTML_POPUP_FLAGS.HTML_POPUP_NOT_USE_POINTER = 512; _HTML_POPUP_FLAGS.HTML_POPUP_ALWAYS_VISIBLE = 1024; _HTML_POPUP_FLAGS.HTML_POPUP_USE_LAST_POS = 2048; _HTML_POPUP_FLAGS.HTML_POPUP_USE_TEXT_AS_INNER_HTML = 4096; var PresentationStepContinue = {}; PresentationStepContinue.PSC_MOUSECLICK = 0; PresentationStepContinue.PSC_WAIT = 1; var PresentationStepFlightSpeed = {}; PresentationStepFlightSpeed.PSFS_VERYSLOW = 0; PresentationStepFlightSpeed.PSFS_SLOW = 1; PresentationStepFlightSpeed.PSFS_NORMAL = 2; PresentationStepFlightSpeed.PSFS_FAST = 3; PresentationStepFlightSpeed.PSFS_VERYFAST = 4; var PresentationPlayAlgorithm = {}; PresentationPlayAlgorithm.PPA_FLYTO = 0; PresentationPlayAlgorithm.PPA_SPLINE = 1; var PresentationPlayMode = {}; PresentationPlayMode.PPM_AUTOMATIC = 0; PresentationPlayMode.PPM_MANUAL = 1; var PresentationCaptionSizeType = {}; PresentationCaptionSizeType.PCST_FIXED = 0; PresentationCaptionSizeType.PCST_AUTOMATICALLYADJUST = 1; var PresentationCaptionPosition = {}; PresentationCaptionPosition.PCP_TOPLEFT = 0; PresentationCaptionPosition.PCP_TOPCENTER = 1; PresentationCaptionPosition.PCP_TOPRIGHT = 2; PresentationCaptionPosition.PCP_BOTTOMLEFT = 3; PresentationCaptionPosition.PCP_BOTTOMCENTER = 4; PresentationCaptionPosition.PCP_BOTTOMRIGHT = 5; var PresentationStatus = {}; PresentationStatus.PS_PLAYING = 0; PresentationStatus.PS_NOTPLAYING = 1; PresentationStatus.PS_PAUSED = 2; PresentationStatus.PS_WAITINGTIME = 3; PresentationStatus.PS_WAITINGCLICK = 4; var VideoPlayStatus = {}; VideoPlayStatus.VPS_PAUSE = 0; VideoPlayStatus.VPS_PLAY = 1; VideoPlayStatus.VPS_STOP = 2; var ContainerSite = {}; ContainerSite.CS_DOCK_LEFT = 0; ContainerSite.CS_DOCK_RIGHT = 1; ContainerSite.CS_DOCK_TOP = 2; ContainerSite.CS_DOCK_BOTTOM = 3; ContainerSite.CS_DOCK_FLOAT = 4; ContainerSite.CS_MAIN = 5; ContainerSite.CS_NOT_VALID = -1; var FaceFillTypeCode = {}; FaceFillTypeCode.FACE_COLOR = 0; FaceFillTypeCode.FACE_TEXTURE = 1; FaceFillTypeCode.FACE_TERRAIN_TEXTURE = 2; FaceFillTypeCode.FACE_UNDEFINED = -1; var RoofStyleCode = {}; RoofStyleCode.ROOFTOP_FLAT = 0; RoofStyleCode.ROOFTOP_ANGULAR = 1; var PresentationStepType = {}; PresentationStepType.ST_LOCATION = 0; PresentationStepType.ST_DYNAMICOBJECT = 1; PresentationStepType.ST_GROUPOROBJECT = 2; PresentationStepType.ST_UNDERGROUNDMODE = 3; PresentationStepType.ST_TIMESLIDER = 4; PresentationStepType.ST_CURRENTTIME = 5; PresentationStepType.ST_MESSAGE = 6; PresentationStepType.ST_TOOL = 7; PresentationStepType.ST_CAPTION = 8; PresentationStepType.ST_RESTARTDYNAMICOBJECT = 9; PresentationStepType.ST_FLIGHTSPEEDFACTOR = 10; PresentationStepType.ST_CLEARCAPTION = -1; var TilingMethodCode = {}; TilingMethodCode.TM_TILES_PER_SIDE = 0; TilingMethodCode.TM_TILES_PER_AXIS = 0; TilingMethodCode.TM_METERS_PER_TILE = 1; TilingMethodCode.TM_UNDEFINED = -1; var AttributeTypeCode = {}; AttributeTypeCode.AT_TEXT = 0; AttributeTypeCode.AT_INTEGER = 1; AttributeTypeCode.AT_DOUBLE = 2; AttributeTypeCode.AT_UNKNOWN = -1; var FeatureState = {}; FeatureState.FS_NONE = 0; FeatureState.FS_NEW = 1; FeatureState.FS_MODIFIED = 2; FeatureState.FS_DELETED = 3;
const CircularRouteType ={CRT_STOP_AT_THE_END:0,CRT_MOVE_TO_START:1,CRT_JUMP_TO_START:2}

export default {
  AccuracyLevel,
  ItemCode,
  AltitudeTypeCode,
  DynamicMotionStyle,
  CircularRouteType
}

<template>
  <Collapse accordion>
    <Panel name="1">Home
      <div slot="content" class="cbp-hrsub">

            <input
              type="button"
              style="background:url(img/Select.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="select"
            >

            <input
              type="button"
              style="background:url(img/AreaSelect.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="AreaSelect"
            >

            <input
              type="button"
              style="background:url(img/pen.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="pen"
            >

            <input
              type="button"
              style="background:url(img/undergroundmode.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="undergroundmode"
            >

            <input
              type="button"
              style="background:url(img/location.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="location"
            >

            <input
              type="button"
              style="background:url(img/projectsetting.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="projectsetting"
            >

            <input
              type="button"
              style="background:url(img/publish.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="publish"
            >

            <input
              type="button"
              style="background:url(img/hideterrain.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="hideterrain"
            >

            <input
              type="button"
              style="background:url(img/fov.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="fov"
            >

            <input
              type="button"
              style="background:url(img/extracttompt.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="extracttompt"
            >

            <input
              type="button"
              style="background:url(img/extracttovrml.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="extracttovrml"
            >

            <input
              type="button"
              style="background:url(img/collaboration.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="collaboration"
            >

            <input
              type="button"
              style="background:url(img/urbandesign.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="urbandesign"
            >

            <input
              type="button"
              style="background:url(img/duplicateobjects.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="duplicateobjects"
            >

            <input
              type="button"
              style="background:url(img/imagerycomparison.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="imagerycomparison"
            >

            <input
              type="button"
              style="background:url(img/snapshotcomparison.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="snapshotcomparison"
            >
      </div>
    </Panel>
    <Panel name="2">Analysis
      <div slot="content" class="cbp-hrsub">
            <input
              type="button"
              style="background:url(img/query.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="query"
            >

            <input
              type="button"
              style="background:url(img/distance.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="distance"
            >

            <input
              type="button"
              style="background:url(img/HRuler02.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="Hdistance"
            >

            <input
              type="button"
              style="background:url(img/3DRuler.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="3Ddistance"
            >

            <input
              type="button"
              style="background:url(img/area.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="area"
            >

            <input
              type="button"
              style="background:url(img/contourmap.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="contourmap"
            >

            <input
              type="button"
              style="background:url(img/AreaContour.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="Areacontourmap"
            >

            <input
              type="button"
              style="background:url(img/AreaTerrainMap.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="AreaTerrainMap"
            >

            <input
              type="button"
              style="background:url(img/slopemap.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="slopemap"
            >

            <input
              type="button"
              style="background:url(img/SlopeColorMap.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="SlopeColorMap"
            >

            <input
              type="button"
              style="background:url(img/SlopeDirections.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="SlopeDirections"
            >

            <input
              type="button"
              style="background:url(img/bestpath.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="bestpath"
            >

            <input
              type="button"
              style="background:url(img/terrainprofile.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="terrainprofile"
            >

            <input
              type="button"
              style="background:url(img/flood.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="flood"
            >

            <input
              type="button"
              style="background:url(img/volume.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="volume"
            >

            <input
              type="button"
              style="background:url(img/lineofsight.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="lineofsight"
            >

            <input
              type="button"
              style="background:url(img/viewshed.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="viewshed"
            >

            <input
              type="button"
              style="background:url(img/viewshedonroute.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="viewshedonroute"
            >

            <input
              type="button"
              style="background:url(img/threatdome.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="threatdome"
            >

            <input
              type="button"
              style="background:url(img/shadow.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="shadow"
            >

            <input
              type="button"
              style="background:url(img/selectionshadow.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="selectionshadow"
            >

            <input
              type="button"
              style="background:url(img/shadowquery.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="shadowquery"
            >
      </div>
    </Panel>
    <Panel name="3">Layers
      <div slot="content" class="cbp-hrsub">

            <input
              type="button"
              style="background:url(img/loadlayer.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="loadlayer"
            >

            <input
              type="button"
              style="background:url(img/datalibrary.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="datalibrary"
            >

            <input
              type="button"
              style="background:url(img/osmlayers.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="osmlayers"
            >

            <input
              type="button"
              style="background:url(img/newlayer.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="newlayer"
            >

            <input
              type="button"
              style="background:url(img/fly.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="fly"
            >

            <input
              type="button"
              style="background:url(img/kml.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="kml"
            >

            <input
              type="button"
              style="background:url(img/3dml.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="3dml"
            >

            <input
              type="button"
              style="background:url(img/bim.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="bim"
            >

            <input
              type="button"
              style="background:url(img/pointcloud.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="pointcloud"
            >

            <input
              type="button"
              style="background:url(img/imagerylayer.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="imagerylayer"
            >

            <input
              type="button"
              style="background:url(img/elevationlayer.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="elevationlayer"
            >

            <input
              type="button"
              style="background:url(img/osmmap.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="osmmap"
            >

            <input
              type="button"
              style="background:url(img/make3dml.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="make3dml"
            >

            <input
              type="button"
              style="background:url(img/makexpl.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="makexpl"
            >

            <input
              type="button"
              style="background:url(img/makecpt.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="makecpt"
            >

            <input
              type="button"
              style="background:url(img/resolutionpyramid.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="resolutionpyramid"
            >
      </div>
    </Panel>
    <Panel name="4">Objects
      <div slot="content" class="cbp-hrsub">

            <input
              type="button"
              style="background:url(img/text.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="text"
            >

            <input
              type="button"
              style="background:url(img/image.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="image"
            >

            <input
              type="button"
              style="background:url(img/videoonterrain.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="videoonterrain"
            >

            <input
              type="button"
              style="background:url(img/videobillboard.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="videobillboard"
            >

            <input
              type="button"
              style="background:url(img/polyline.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="polyline"
            >

            <input
              type="button"
              style="background:url(img/polygon.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="polygon"
            >

            <input
              type="button"
              style="background:url(img/3dmodel.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="3dmodel"
            >

            <input
              type="button"
              style="background:url(img/building.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="building"
            >

            <input
              type="button"
              style="background:url(img/modifyterrain.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="modifyterrain"
            >

            <input
              type="button"
              style="background:url(img/holeonterrain.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="holeonterrain"
            >

            <input
              type="button"
              style="background:url(img/groundobject.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="groundobject"
            >

            <input
              type="button"
              style="background:url(img/aerialobject.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="aerialobject"
            >

            <input
              type="button"
              style="background:url(img/movebytime.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="movebytime"
            >

            <input
              type="button"
              style="background:url(img/datalibrary.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="datalibrary"
            >

            <input
              type="button"
              style="background:url(img/sketchupwarehouse.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="sketchupwarehouse"
            >

        </div>
    </Panel>
    <Panel name="5">Shapes
      <div slot="content" class="cbp-hrsub">
            <input
              type="button"
              style="background:url(img/rectangle.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="rectangle"
            >

            <input
              type="button"
              style="background:url(img/regularpolygon.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="regularpolygon"
            >

            <input
              type="button"
              style="background:url(img/arrow.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="arrow"
            >

            <input
              type="button"
              style="background:url(img/circle.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="circle"
            >

            <input
              type="button"
              style="background:url(img/ellipse.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="ellipse"
            >

            <input
              type="button"
              style="background:url(img/arc.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="arc"
            >

            <input
              type="button"
              style="background:url(img/3dpolygon.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="3dpolygon"
            >

            <input
              type="button"
              style="background:url(img/box.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="box"
            >

            <input
              type="button"
              style="background:url(img/cylinder.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="cylinder"
            >

            <input
              type="button"
              style="background:url(img/sphere.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="sphere"
            >

            <input
              type="button"
              style="background:url(img/cone.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="cone"
            >

            <input
              type="button"
              style="background:url(img/pyramid.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="pyramid"
            >

            <input
              type="button"
              style="background:url(img/3darrow.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="3darrow"
            >
      </div>
    </Panel>
    <Panel name="6">Navigation
      <div slot="content" class="cbp-hrsub">

            <input
              type="button"
              style="background:url(img/3d.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="3d"
            >

            <input
              type="button"
              style="background:url(img/2d.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="2d"
            >

            <input
              type="button"
              style="background:url(img/2dn.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="2dn"
            >

            <input
              type="button"
              style="background:url(img/zoom.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="zoom"
            >

            <input
              type="button"
              style="background:url(img/north.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="north"
            >

            <input
              type="button"
              style="background:url(img/rotate.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="rotate"
            >

            <input
              type="button"
              style="background:url(img/follow.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="follow"
            >

            <input
              type="button"
              style="background:url(img/collisiondetection.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="collisiondetection"
            >

            <input
              type="button"
              style="background:url(img/slidemode.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="slidemode"
            >

            <input
              type="button"
              style="background:url(img/map.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="map"
            >

            <input
              type="button"
              style="background:url(img/gps.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="gps"
            >

            <input
              type="button"
              style="background:url(img/target.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="target"
            >

            <input
              type="button"
              style="background:url(img/multiplecoordsys.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="multiplecoordsys"
            >

            <input
              type="button"
              style="background:url(img/lookaround.png) no-repeat;width:66px;height:66px;"
              @click="runCommand"
              id="lookaround"
            >
      </div>
    </Panel>
  </Collapse>
</template>

<script>
/* eslint-disable */
export default {
  name: "ControlPanel",
  components: {},
  props: {
    sgWorld: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
    };
  },
  computed: {},
  methods: {
    runCommand({target}) {
      let id = target.id
      console.log(`command${id}`)
      switch (id) {
        case "select":
          this.sgWorld.Command.Execute(1021, 0);
          break;
        case "AreaSelect":
          this.sgWorld.Command.Execute(1024, 0);
          break;
        case "pen":
          alert("need work!");
          break;
        case "undergroundmode":
          this.sgWorld.Command.Execute(1027, 0);
          break;
        case "location":
          this.sgWorld.Command.Execute(1016, 0);
          break;
        case "projectsettings":
          this.sgWorld.Command.Execute(1020, 0);
          break;
        case "publish":
          this.sgWorld.Command.Execute(1007, 0);
          break;
        case "query":
          this.sgWorld.Command.Execute(1023, 0);
          break;
        case "distance":
          this.sgWorld.Command.Execute(1035, 0);
          break;
        case "Hdistance":
          this.sgWorld.Command.Execute(1034, 0);
          break;
        case "3Ddistance":
          this.sgWorld.Command.Execute(1036, 0);
          break;
        case "area":
          this.sgWorld.Command.Execute(1165, 0);
          break;
        case "contourmap":
          this.sgWorld.Command.Execute(2216, 0);
          break;
        case "Areacontourmap":
          this.sgWorld.Command.Execute(1039, 0);
          break;
        case "AreaTerrainMap":
          this.sgWorld.Command.Execute(1040, 0);
          break;
        case "slopemap":
          this.sgWorld.Command.Execute(2217, 0);
          break;
        case "SlopeColorMap":
          this.sgWorld.Command.Execute(1092, 0);
          break;
        case "SlopeDirections":
          this.sgWorld.Command.Execute(1094, 0);
          break;
        case "bestpath":
          this.sgWorld.Command.Execute(1042, 0);
          break;
        case "terrainprofile":
          this.sgWorld.Command.Execute(1149, 28);
          break;
        case "flood":
          this.sgWorld.Command.Execute(1044, 0);
          break;
        case "volume":
          this.sgWorld.Command.Execute(1045, 0);
          break;
        case "lineofsight":
          this.sgWorld.Command.Execute(1046, 0);
          break;
        case "viewshed":
          this.sgWorld.Command.Execute(1047, 0);
          break;
        case "viewshedonroute":
          this.sgWorld.Command.Execute(2002, 0);
          break;
        case "threatdome":
          this.sgWorld.Command.Execute(1149, 33);
          break;
        case "shadow":
          this.sgWorld.Command.Execute(2118, 0);
          break;
        case "selectionshadow":
          this.sgWorld.Command.Execute(2119, 0);
          break;
        case "shadowquery":
          this.sgWorld.Command.Execute(1149, 27);
          break;
        case "imagerycomparison":
          this.sgWorld.Command.Execute(1149, 34);
          break;
        case "snapshotcomparison":
          this.sgWorld.Command.Execute(1149, 35);
          break;
        case "loadlayer":
          this.sgWorld.Command.Execute(1013, 0);
          break;
        case "datalibrary":
          this.sgWorld.Command.Execute(1149, 20);
          break;
        case "osmlayers":
          //this.sgWorld.Command.Execute(N/A,N/A);
          alert("No supported!");
          break;
        case "newlayer":
          this.sgWorld.Command.Execute(1013, 11);
          break;
        case "fly":
          this.sgWorld.Command.Execute(1013, 2);
          break;
        case "kml":
          this.sgWorld.Command.Execute(1013, 3);
          break;
        case "3dml":
          this.sgWorld.Command.Execute(2110, 0);
          break;
        case "bim":
          this.sgWorld.Command.Execute(1149, 36);
          break;
        case "pointcloud":
          this.sgWorld.Command.Execute(1012, 25);
          break;
        case "imagerylayer":
          //2 - Imagery Layer from File
          //3 - TerraGate Layer
          //4 - Web Map Service (WMS)
          //4 - Web Map Tile Service (WMTS)
          //5 - Oracle Spatial Database
          //6 - ArcSDE Database
          //7 - ECW Image Web Server
          this.sgWorld.Command.Execute(1014, 2);
          break;
        case "elevationlayer":
          //19 - Elevation Layer from File
          //20 - TerraGate Layer
          //21 - Web Map Service (WMS)
          //21 - Web Map Tile Service (WMTS)
          //22 - Oracle Spatial Database
          //23 - ArcSDE Database
          //24 - ECW Image Web Server
          this.sgWorld.Command.Execute(1014, 19);
          break;
        case "osmmap":
          //this.sgWorld.Command.Execute(N/A,N/A);
          alert("This is a dynamic menu coming from the server.");
          break;
        case "make3dml":
          this.sgWorld.Command.Execute(1149, 18);
          break;
        case "makexpt":
          this.sgWorld.Command.Execute(1149, 11);
          break;
        case "makecpt":
          this.sgWorld.Command.Execute(1149, 10);
          break;
        case "resolutionpyramid":
          this.sgWorld.Command.Execute(1149, 12);
          break;
        case "text":
          this.sgWorld.Command.Execute(1012, 0);
          break;
        case "iamge":
          this.sgWorld.Command.Execute(1012, 1);
          break;
        case "videoonterrain":
          this.sgWorld.Command.Execute(1012, 2);
          break;
        case "videobillboard":
          this.sgWorld.Command.Execute(1012, 3);
          break;
        case "polyline":
          this.sgWorld.Command.Execute(1012, 4);
          break;
        case "polygon":
          this.sgWorld.Command.Execute(1012, 5);
          break;
        case "rectangle":
          this.sgWorld.Command.Execute(1012, 6);
          break;
        case "regularpolygon":
          this.sgWorld.Command.Execute(1012, 7);
          break;
        case "arrow":
          this.sgWorld.Command.Execute(1012, 8);
          break;
        case "circle":
          this.sgWorld.Command.Execute(1012, 9);
          break;
        case "ellipse":
          this.sgWorld.Command.Execute(1012, 10);
          break;
        case "arc":
          this.sgWorld.Command.Execute(1012, 11);
          break;
        case "3dmodel":
          this.sgWorld.Command.Execute(1012, 13);
          break;
        case "3dpolygon":
          this.sgWorld.Command.Execute(1012, 17);
          break;
        case "box":
          this.sgWorld.Command.Execute(1012, 18);
          break;
        case "cylinder":
          this.sgWorld.Command.Execute(1012, 20);
          break;
        case "sphere":
          this.sgWorld.Command.Execute(1012, 21);
          break;
        case "cone":
          this.sgWorld.Command.Execute(1012, 22);
          break;
        case "pyramid":
          this.sgWorld.Command.Execute(1012, 23);
          break;
        case "3darrow":
          this.sgWorld.Command.Execute(1012, 24);
          break;
        case "building":
          this.sgWorld.Command.Execute(1012, 14);
          break;
        case "modifyterrain":
          this.sgWorld.Command.Execute(1012, 15);
          break;
        case "holeonterrain":
          this.sgWorld.Command.Execute(1012, 16);
          break;
        case "groundobject":
          this.sgWorld.Command.Execute(1012, 26);
          break;
        case "aerialobject":
          this.sgWorld.Command.Execute(1012, 27);
          break;
        case "movebytime":
          this.sgWorld.Command.Execute(1012, 47);
          break;
        case "datalibrary":
          this.sgWorld.Command.Execute(1149, 13);
          break;
        case "sketchupwarehouse":
          this.sgWorld.Command.Execute(1149, 15);
          break;
        case "3d":
          this.sgWorld.Command.Execute(1052, 0);
          break;
        case "2d":
          this.sgWorld.Command.Execute(1053, 0);
          break;
        case "2dn":
          this.sgWorld.Command.Execute(1054, 0);
          break;
        case "zoom":
          //Globe Level--5
          //Country Level--4
          //State Level--3
          //City Level--2
          //Street Level--1
          //House Level--0
          this.sgWorld.Command.Execute(1055, 5);
          break;
        case "north":
          this.sgWorld.Command.Execute(1056, 0);
          break;
        case "rotate":
          this.sgWorld.Command.Execute(1057, 0);
          break;
        case "follow":
          //Circle Pattern--0
          //Oval Pattern--1
          //Arc Pattern--2
          //Line Pattern--3
          //Behind Object--4
          //Above Object--5
          //From Below--6
          //From Right--7
          //From Left--8
          //From Behind and Above--9
          //Cockpit View--10
          //From Ground Location--11
          this.sgWorld.Command.Execute(1057, 1);
          break;
        case "collisiondetection":
          this.sgWorld.Command.Execute(1140, 0);
          break;
        case "slidemode":
          this.sgWorld.Command.Execute(1050, 0);
          break;
        case "map":
          //Navigation Map Settings
          //Display Navigation Map--N/A
          this.sgWorld.Command.Execute(1058, 0);
          break;
        case "gps":
          this.sgWorld.Command.Execute(1149, 1);
          break;
        case "target":
          this.sgWorld.Command.Execute(1149, 2);
          break;
        case "multiplecoordsys":
          this.sgWorld.Command.Execute(1149, 3);
          break;
        case "lookaround":
          this.sgWorld.Command.Execute(1149, 37);
          break;
        case "hideterrain":
          //Null – Toggle
          //0 – Show
          //1 – Hide
          this.sgWorld.Command.Execute(1059, 0);
          break;
        case "fov":
          //Can be one of the following values: 90.0; 70.0; 53.0; 45.0; 35.0; 25.0; 15.0
          this.sgWorld.Command.Execute(1066, 90.0);
          break;
        case "snapshot":
          //Snapshot to New Window--1067
          //Snapshot to File--1068
          this.sgWorld.Command.Execute(1067, 0);
          break;
        case "extracttompt":
          this.sgWorld.Command.Execute(1141, 0);
          break;
        case "extracttovrml":
          this.sgWorld.Command.Execute(1142, 0);
          break;
        case "collaboration":
          this.sgWorld.Command.Execute(1149, 4);
          break;
        case "urbandesign":
          this.sgWorld.Command.Execute(1149, 38);
          break;
        case "duplicateobjects":
          this.sgWorld.Command.Execute(1149, 6);
          break;
        case "powerlines":
          this.sgWorld.Command.Execute(1149, 7);
          break;
        case "pipelines":
          this.sgWorld.Command.Execute(1149, 8);
          break;
        case "fenceandwall":
          this.sgWorld.Command.Execute(1149, 17);
          break;
        case "timespantags":
          this.sgWorld.Command.Execute(1149, 9);
          break;
        case "blockwidth":
          this.sgWorld.Command.Execute(1149, 16);
          break;
        default:
          alert("NO Find!");
          break;
      }
    }
  },
  watch: {
  },
  mounted() {
    console.log("mounted!");
  },
  updated() {
    console.log("updated!");
  },
  destroyed() {
    console.log("destroyed!");
  },
  activated() {
    console.log("activated!");
  },
  deactivated() {
    console.log("deactivated!");
  }
};
</script>

<style scoped lang="less">
  .cbp-hrsub {
     input {
       margin: 9px;
     }
  }
</style>

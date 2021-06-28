export const commands = [
  {
    title: "Introduction",
    depth: 0,
    children: [
      {
        title: "General Information",
        text: "# General Information\nSD_NAUTILUS has been created in 2015. at 'SavaDesign' DOO, as in-house toolbox in everyday tasks. It is constantly in use (and testing) and constantly in development. At the moment it has over 130 commands, from simple automation 'scripts' to very complex tools, all made for the increase in the efficiency and reducing number of errors in everyday tasks in the ship design office.\nToolbox contains over 130 tools in the working environment of rhinoceros 3D:\n- 3D modeling\n- Class documentation (2D drawings)\n- Workshop documentation (2D drawings)\n- Workshop production information (cutting files, profile sketches, templates)\n\n SD_NAUTILUS is based on the platform of rhinoceros 3D® for many reasons:\n- Rhino offers great tools, simple interface and full freedom od 3D modeling at affordable price.\n- Rhino is used by naval architects worldwide and has been established in the world of naval architecture as one of the essential tools.\n- Naval architecture students all over the world learn rhinoceros during their studies, so training costs for new people working in rhino is greatly reduced.",
        images: [],
        depth: 1,
      },
      {
        title: "Use cases",
        text: "# Aimed for small and medium sized shipyards and design offices\nThis is due to the fact that it is based on a normal rhino 3D model, without any 'intelligence' behind it.\n\nThere is no central database for the project - the only thing you need is 3D model that can be made with or without the plugin! But non-existence of the 'intelligence' and the database is also a drawback that makes working on large scale projects challenging.\n\nSD_NAUTILUS closes the complete shipbuilding lifecycle, from design to production, everything inside rhino.",
        images: ["/plugin/usecases/image1.png"],
        depth: 1,
      },
      {
        title: "Basics",
        text: "# Basics\nAlthough SD_NAUTILUS covers wide scope of tools, the most powerful tools are in the processing of the 3D model.\n\nTools like:\n- positioner\n-  mat. spec creator,\n- part extractor and \n- 2D section creator \n\nsignificantly increase the efficiency of creating class and workshop documentation. These tools are actually 'post-processor' type of tools - they start form the 3D model and create 'output' from it, more or less automatically.\n\nFor 'post-processing' of the model, the 3D model can be created even without the plugin itself, and without any conversions later on.  of course, some modeling 'Guidelines' must be followed in order to make the 3D model compatible with the plugin.  By using the built-in rhino worksession tools, modeling work can be spread to multiple workstations, which significantly shortens the time needed to get 3D model ready and with model ready, the real power of SD_NAUTILUS comes to surface.\n## How it works\n3D model is the central part of the SD_NAUTILUS.  \nTherefore, keeping 3D model accurate, clean and up-to-date is the essential for the efficient usage of the plugin.  \nFor any rhino 3D model to be used with SD_NAUTILUS, it has to fulfill the following:  \n- All objects must be valid solid objects  \n- Simple conventions must be followed for layer naming",
        images: ["/plugin/basics/image1.png"],
        depth: 1,
      },
    ],
  },
  {
    title: "Common Workflow",
    depth: 0,
    children: [
      {
        title: "HULL FORMING",
        text: "SD_NAUTILUS common workflow - HULL FORMING",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
      {
        title: "HIDROSTATICS",
        text: "SD_NAUTILUS common workflow - HIDROSTATICS",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
      {
        title: "CLASS DOCUMENTATION",
        text: "SD_NAUTILUS common workflow - CLASS DOCUMENTATION",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
      {
        title: "WORKSHOP DOCUMENTATION",
        text: "SD_NAUTILUS common workflow - WORKSHOP DOCUMENTATION",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
    ],
  },
  {
    title: "Positioning",
    depth: 0,
    children: [
      {
        title: "About positioning",
        text: "# About  positioning the model\nWith model ready, next step is to assign part IDs to each part of structure.\n\nSD_NAUTILUS has unique positioning algorithm able to find the same parts in the structure and assigns the same ID to them.\n\nThe Algorithm successfully identifies mirror parts and assign ps/sb suffixes to the part IDs.\n\nIn case the algorithm can not determine if the parts are same, it will assign different ID-s to them, to avoid possible errors later on.",
        images: ["/plugin/positioning/image1.png"],
        depth: 1,
      },
      {
        title: "positioning-command-1",
        text: "positioning-command-1",
        images: ["/plugin/positioning/image1.png"],
        depth: 1,
      },
      {
        title: "positioning-command-2",
        text: "positioning-command-2",
        images: [],
        depth: 1,
      },
    ],
  },
  {
    title: "3D model reports",
    depth: 0,
    children: [
      {
        title: "About 3D model reports",
        text: "# About 3D model reports \nRegardless if the 3D model is for class or workshop documentation, very important info is the part list, weight and center of gravity and the preliminary material specification.  \nAll these information are extracted directly form the model  \n- for the designers weight and cog are very important during the design processor  \n- for the shipyard preliminary material specifications is very important to prepare material on time, weight and cog are valuable for unit handling.",
        images: ["/plugin/3dmodel/image1.png", "/plugin/3dmodel/image2.png"],
        depth: 1,
      },
      {
        title: "3d-model-command-1",
        text: "3d-model-command-1",
        images: [],
        depth: 1,
      },
      {
        title: "3d-model-command-2",
        text: "3d-model-command-2",
        images: [],
        depth: 1,
      },
      {
        title: "3d-model-command-3",
        text: "3d-model-command-3",
        images: [],
        depth: 1,
      },
    ],
  },
  {
    title: "2D drawings",
    depth: 0,
    children: [
      {
        title: "About 2D drawings",
        text: "# About 2D drawings\n\nAnother purpose of 3D model is to make easily accurate 2D sections and views for 2D documentation, class or workshop.  \n\nThere are many commands in plugin that allows easy creating 2D views from the 3D model and spped-up work on 2D sections.  For example, there is tool for automatic placement of leaders with ID`s on each part in the section, tools for placing welding and other symbols on the section,fast placing of dimensions...",
        images: ["/plugin/2ddrawing/image1.png"],
        depth: 1,
      },
      {
        title: "2d-drawings-command-1",
        text: "2d-drawings-command-1",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
      {
        title: "2d-drawings-command-2",
        text: "2d-drawings-command-2",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
    ],
  },
  {
    title: "Extracting plate parts",
    depth: 0,
    children: [
      {
        title: "About extracting plate parts",
        text: "# About extracting plate parts\nSD_NAUTILUS has set of tools for efficient extraction of the parts form the model and Preparing them for the cutting. Cutting contours are produced for each part, together with marking lines.\n\nfeatures include:\n- automatic both sides marking\n- automatic part id and orientation info marking\n- automatic marking of parts ID`s on the marking lines.\n\nTools for plate expansion are based on built-it rhino unrolling and expansion capabilities, combined into efficient and reliable tools.\nAnother set of ttols help quickly create or modify cutting files - cutting contours, marking lines and text labels.\n\nCreated parts are ready for exporting to DXF and imorting into any nesting softrware for further processing.",
        images: ["/plugin/extplateparts/image1.png"],
        depth: 1,
      },
      {
        title: "extracting-plate-parts-command-1",
        text: "extracting-plate-parts-command-1",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
    ],
  },
  {
    title: "Extracting profile parts",
    depth: 0,
    children: [
      {
        title: "extracting-profile-parts-command-1",
        text: "extracting-profile-parts-command-1",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
      {
        title: "extracting-profile-parts-command-2",
        text: "extracting-profile-parts-command-2",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
      {
        title: "extracting-profile-parts-command-3",
        text: "extracting-profile-parts-command-3",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
      {
        title: "extracting-profile-parts-command-3",
        text: "extracting-profile-parts-command-3",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
    ],
  },
  {
    title: "Calculations",
    depth: 0,
    children: [
      {
        title: "calculations-command-1",
        text: "calculations-command-1",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
      {
        title: "calculations-command-2",
        text: "calculations-command-2",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
      {
        title: "calculations-command-3",
        text: "calculations-command-3",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
    ],
  },
  {
    title: "SD_HYDRO",
    depth: 0,
    children: [
      {
        title: "sd-hydro-command-1",
        text: "sd-hydro-command-1",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
      {
        title: "sd-hydro-command-2",
        text: "sd-hydro-command-2",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
    ],
  },
  {
    title: "SD_LINESPLAN",
    depth: 0,
    children: [
      {
        title: "sd-linesplan-command-1",
        text: "sd-linesplan-command-1",
        images: ["/adora.png", "/adora.png", "/adora.png"],
        depth: 1,
      },
    ],
  },
  {
    title: "Final",
    text: "Final",
    images: [],
    depth: 0,
  },
];

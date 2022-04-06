var APP_DATA = {
  "scenes": [
    {
      "id": "0-beginning-and-end",
      "name": "Beginning and End",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0.4416995845009062,
        "pitch": 0.23539358257798426,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": 1.1430533894916,
          "pitch": 0.3760845966737314,
          "rotation": 0,
          "target": "1-villa-resort"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9774938241461797,
          "pitch": 0.573282534054421,
          "title": "Charter Ride<br>",
          "text": "Ride our comfortable boat to the Villa Resort.<br>"
        }
      ]
    },
    {
      "id": "1-villa-resort",
      "name": "Villa Resort",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.1060623160827312,
        "pitch": 0.24660652080518908,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": 0.035375287400750466,
          "pitch": 0.5856859779421715,
          "rotation": 0,
          "target": "3-restauraunt"
        },
        {
          "yaw": 1.6304312631101796,
          "pitch": 0.14290258300987801,
          "rotation": 0,
          "target": "2-beachjpg"
        },
        {
          "yaw": -1.5818904574832295,
          "pitch": 0.18786120768129244,
          "rotation": 0,
          "target": "0-beginning-and-end"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.619330369547205,
          "pitch": 0.3380330781447842,
          "title": "<div>Return to Marina</div>",
          "text": "Time to head off.&nbsp; Your day trip has ended.<br>"
        },
        {
          "yaw": -0.2285267185915565,
          "pitch": 0.28218989520634175,
          "title": "Lunch<br>",
          "text": "Enjoy a buffet lunch in our 5* Restauraunt.<br>"
        },
        {
          "yaw": 1.6775496162439048,
          "pitch": 0.03943703974020707,
          "title": "Beach",
          "text": "Enjoy some time swimming or tanning.<br>"
        }
      ]
    },
    {
      "id": "2-beachjpg",
      "name": "Beach.jpg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.46318353226004305,
        "pitch": 0.2297930111517843,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": 1.3791359265698553,
          "pitch": 0.04079868279299603,
          "rotation": 0.7853981633974483,
          "target": "1-villa-resort"
        },
        {
          "yaw": -3.060726336625743,
          "pitch": -0.109820887483016,
          "rotation": 0,
          "target": "1-villa-resort"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.315071769739344,
          "pitch": 0.18401585900471495,
          "title": "Return to the Villa<br>",
          "text": "Use the map to find your way back to our Villa.<br>"
        },
        {
          "yaw": 2.9743941183459697,
          "pitch": -0.2710354910337305,
          "title": "Secret Passage<br>",
          "text": "Back to Villa.<br>"
        }
      ]
    },
    {
      "id": "3-restauraunt",
      "name": "Restauraunt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1575,
      "initialViewParameters": {
        "yaw": 2.552208390800944,
        "pitch": 0.474507736948679,
        "fov": 1.35820747241737
      },
      "linkHotspots": [
        {
          "yaw": -2.5813625787348187,
          "pitch": 0.12690642670613173,
          "rotation": 0,
          "target": "2-beachjpg"
        },
        {
          "yaw": -0.6236076393185392,
          "pitch": 0.5800934073791755,
          "rotation": 5.497787143782138,
          "target": "1-villa-resort"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6358042768903616,
          "pitch": 0.3130433428495234,
          "title": "Villa<br>",
          "text": "Return to the Villa for some rest.<br>"
        },
        {
          "yaw": -2.7733483822236966,
          "pitch": -0.0735197955149598,
          "title": "Beach<br>",
          "text": "<div>Let's return to the beach.&nbsp; Rest in the sun.&nbsp; You deserve it.</div><div><br></div>"
        }
      ]
    }
  ],
  "name": "Day Trip to Paradise",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

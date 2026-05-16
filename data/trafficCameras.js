export const trafficIntersections = [
  {
    id: "RP-001",
    name: "Rond-point Gueliz",
    coords: [31.6370, -8.0100],
    cameras: [
      {
        id: "CAM-RP001-N",
        direction: "North",
        label: "Entree Nord",
        coords: [31.6400, -8.0100],
        vehicleCount: 18,
        roadSegment: [
          [31.6420, -8.0100],
          [31.6400, -8.0100],
          [31.6370, -8.0100]
        ]
      },
      {
        id: "CAM-RP001-S",
        direction: "South",
        label: "Entree Sud",
        coords: [31.6340, -8.0100],
        vehicleCount: 45,
        roadSegment: [
          [31.6320, -8.0100],
          [31.6340, -8.0100],
          [31.6370, -8.0100]
        ]
      },
      {
        id: "CAM-RP001-E",
        direction: "East",
        label: "Entree Est",
        coords: [31.6370, -8.0060],
        vehicleCount: 31,
        roadSegment: [
          [31.6370, -8.0020],
          [31.6370, -8.0060],
          [31.6370, -8.0100]
        ]
      },
      {
        id: "CAM-RP001-W",
        direction: "West",
        label: "Entree Ouest",
        coords: [31.6370, -8.0140],
        vehicleCount: 12,
        roadSegment: [
          [31.6370, -8.0180],
          [31.6370, -8.0140],
          [31.6370, -8.0100]
        ]
      }
    ]
  },
  {
    id: "RP-002",
    name: "Rond-point Bab Doukkala",
    coords: [31.6359, -7.9986],
    cameras: [
      {
        id: "CAM-RP002-N",
        direction: "North",
        label: "Entree Nord",
        coords: [31.6385, -7.9986],
        vehicleCount: 22,
        roadSegment: [
          [31.6410, -7.9986],
          [31.6385, -7.9986],
          [31.6359, -7.9986]
        ]
      },
      {
        id: "CAM-RP002-S",
        direction: "South",
        label: "Entree Sud",
        coords: [31.6330, -7.9986],
        vehicleCount: 9,
        roadSegment: [
          [31.6305, -7.9986],
          [31.6330, -7.9986],
          [31.6359, -7.9986]
        ]
      },
      {
        id: "CAM-RP002-E",
        direction: "East",
        label: "Entree Est",
        coords: [31.6359, -7.9940],
        vehicleCount: 48,
        roadSegment: [
          [31.6359, -7.9900],
          [31.6359, -7.9940],
          [31.6359, -7.9986]
        ]
      },
      {
        id: "CAM-RP002-W",
        direction: "West",
        label: "Entree Ouest",
        coords: [31.6359, -8.0030],
        vehicleCount: 16,
        roadSegment: [
          [31.6359, -8.0070],
          [31.6359, -8.0030],
          [31.6359, -7.9986]
        ]
      }
    ]
  },
  {
    id: "RP-003",
    name: "Rond-point Koutoubia",
    coords: [31.6244, -7.9932],
    cameras: [
      {
        id: "CAM-RP003-N",
        direction: "North",
        label: "Entree Nord",
        coords: [31.6270, -7.9932],
        vehicleCount: 36,
        roadSegment: [
          [31.6290, -7.9932],
          [31.6270, -7.9932],
          [31.6244, -7.9932]
        ]
      },
      {
        id: "CAM-RP003-S",
        direction: "South",
        label: "Entree Sud",
        coords: [31.6215, -7.9932],
        vehicleCount: 14,
        roadSegment: [
          [31.6195, -7.9932],
          [31.6215, -7.9932],
          [31.6244, -7.9932]
        ]
      },
      {
        id: "CAM-RP003-E",
        direction: "East",
        label: "Entree Est",
        coords: [31.6244, -7.9890],
        vehicleCount: 44,
        roadSegment: [
          [31.6244, -7.9850],
          [31.6244, -7.9890],
          [31.6244, -7.9932]
        ]
      },
      {
        id: "CAM-RP003-W",
        direction: "West",
        label: "Entree Ouest",
        coords: [31.6244, -7.9975],
        vehicleCount: 26,
        roadSegment: [
          [31.6244, -8.0010],
          [31.6244, -7.9975],
          [31.6244, -7.9932]
        ]
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.initialTrafficIntersections = trafficIntersections;
}

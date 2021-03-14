declare module '*.svg' {
  const content: any;
  export default content;
}

interface PointsCollected {
  type: 'POINTS_COLLECTED';
}

interface ReqPointsStatus {
  type: 'REQ_POINTS_STATUS';
}

interface PointsStatus {
  type: 'POINTS_STATUS';
  amount: number;
}

type MessageType = PointsCollected | ReqPointsStatus | PointsStatus;

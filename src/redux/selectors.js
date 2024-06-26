export const getMaterials = state => state.materials;

export const getDeliveryType = state => state.delivery.deliveryType;
export const getDeliveryPrice = state => state.delivery.deliveryPrice;
export const getDeliveryStorage = state => state.delivery.deliveryStorage;
export const getActiveStore = state => state.delivery.activeStore;

export const getMovingPrice = state => state.moving.movingPrice;
export const getIsMovingPriceAddToOrder = state =>
  state.moving.isMovingPriceAddToOrder;

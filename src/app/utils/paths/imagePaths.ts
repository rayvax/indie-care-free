import { getRandomIntInclusive } from "../random-utils";

export const getIconPath = (filename: string) => `/indie-care-free/icons/${filename}`;
export const getImagePath = (filename: string) => `/indie-care-free/images/${filename}`;
export const getAssetImagePath = (index: number) => `/indie-care-free/images/assets/${index}.webp`;
export const getRandomAssetImagePath = () => getAssetImagePath(getRandomIntInclusive(1, 19));
export const getAvatarPath = (avatarIndex: number) => `/indie-care-free/images/avatars/other users/${avatarIndex}.webp`;
export const logoPath = "/indie-care-free/images/logo.png";
export const mainUserAvatarPath = "/indie-care-free/images/avatars/main-user.webp";
export const categoriesPath = getImagePath('categories');
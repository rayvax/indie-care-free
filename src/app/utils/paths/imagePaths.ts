import { getRandomIntInclusive } from "../random-utils";

export const getIconPath = (filename: string) => `/icons/${filename}`;
export const getImagePath = (filename: string) => `/images/${filename}`;
export const getAssetImagePath = (index: number) => `/images/assets/${index}.webp`;
export const getRandomAssetImagePath = () => getAssetImagePath(getRandomIntInclusive(1, 19));
export const getAvatarPath = (avatarIndex: number) => `/images/avatars/other users/${avatarIndex}.webp`;
export const logoPath = "/images/logo.webp";
export const mainUserAvatarPath = "/images/avatars/main-user.webp";
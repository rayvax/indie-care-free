import { shuffle } from "../utils/array-utils";
import { getAvatarPath } from "../utils/paths/imagePaths";
import { AssetPreview } from "./asset";

export interface Profile
{
    name: string;
    email: string;
    avatar: string;

    followes: ProfilePreview[];
    followers: ProfilePreview[];

    assets: AssetPreview[];
    favouriteAssets: AssetPreview[];
}

export interface ProfilePreview
{
    name: string;
    avatar: string;
}

const mockUsernames: string[] = [
    'Rapid Fall',
    'Jade Bash',
    'Thunder Claw',
    'Rabid Stroke',
    'Scarlet Slinger',
    'Giant Undine',
    'Sabre Trogg',
    'Painted Dragonborn',
    'Forest Gargoyles',
    'Brightshadow',
    'Rumblescream',
    'Ironsong',
    'Swift Claw',
    'Rock Scream',
    'Dafal Marbleshaper',
    'Admaeck Bronzechest',
    'Lukratum Boulderbrow',
    'Glorirfonlim Sapphirehand',
    'Desdrom Redbraids',
    'Kossigith Bloodarm',
    'Thofaengrid Flintmaker',
    'Dusdreabelynn Giantmaker'
];

export const mockProfilePreviews: ProfilePreview[] = mockUsernames.map((username, i) =>
{
    return {
        name: username,
        avatar: getAvatarPath(i + 1)
    };
});

export const getRandomProfilePreviews = () =>
{
    shuffle(mockProfilePreviews);

    const randomEnd = Math.floor(Math.random() * mockProfilePreviews.length);

    return mockProfilePreviews.slice(0, randomEnd);
};
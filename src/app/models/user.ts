import { shuffle } from "../utils/array-utils";
import { getAvatarPath } from "../utils/paths/imagePaths";
import { getRandomIntInclusive } from "../utils/random-utils";
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

export function getRandomProfilePreviews(): ProfilePreview[];
export function getRandomProfilePreviews(count: number): ProfilePreview[];
export function getRandomProfilePreviews(count?: number): ProfilePreview[]
{
    if (!count)
        count = getRandomIntInclusive(1, mockProfilePreviews.length - 1);

    shuffle(mockProfilePreviews);
    return mockProfilePreviews.slice(0, count);
};
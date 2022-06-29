
import { shuffle } from "../utils/array-utils";
import { getInRange } from "../utils/math-utils";
import { getAssetImagePath } from "../utils/paths/imagePaths";
import { setDelay } from "../utils/promise-utils";
import { getRandomIntInclusive, getRandomNumber } from "../utils/random-utils";
import { ProfilePreview } from "./user";

export interface Asset
{
    title: string;
    mainImage: string;
    rating: number;

    author: ProfilePreview;

    tags: string[];
    license: string;

    description: string;
    downloads: DownloadFile[];

    comments: Comment[];
}

export interface BrowseAsset
{
    title: string;
    mainImage: string;

    rating: number;
    ratingsCount: number;
    isRated: boolean;

    isFavourited: boolean;
}

export interface AssetPreview
{
    title: string;
    mainImage: string;
}

interface DownloadFile
{
    title: string;
    weight: number;
}

const assetNames = [
    'Castle Crashers',
    'Beholder',
    'Zombies pack',
    'Craft the mine and be happy',
    'Hero assets',
    'Pixel tools v3',
    'Border into lands',
    'Broken Hero',
    'Midnight Hazard',
    'Rule of Assault',
    'Clash of Combat',
    'Power and Flashbacks',
    'Treason and Barbarians',
    'Grimforce',
    'Endorland',
    'Astrocell',
    'Dreadsky',
    'Rising Power',
    'Wild Resurrection',
    'Werewolves of Theories',
    'Realms of Bravery',
    'Search and Phantom',
    'Kings and Clans',
    'Ironreign',
    'Helltrail',
    'Altercell',
    'Borderkin',
    'Military Age',
    'Rune Battalion',
    'Beasts of Faith',
    'Force of Undoing',
    'Villains and Heroes',
    'Violence and Life',
    'Magepath',
    'Dataspace',
    'Siegewatch',
    'Clanphase',
    'Silent State',
    'Mass Emergency',
    'Retaliate of Hypocrisy',
    'Struggle of Prosecution',
    'Remorse and Guns',
    'Disorder and Chaos',
    'Alpharush',
    'Farshock',
    'Deltaborne',
    'Endorblade',
];


//returns random browse assets after delay
export const getMockBrowseAssets = (assetCount: number) =>
{
    assetCount = getInRange(assetCount, 0, assetNames.length);
    const names: string[] = shuffle(assetNames).slice(0, assetCount);

    return setDelay(() =>
    {
        const data = names.map((name, i) =>
        (
            {
                title: name,
                mainImage: getAssetImagePath(i + 1),

                rating: getRandomNumber(1, 5),
                ratingsCount: getRandomIntInclusive(1, 100),
                isRated: Math.random() > 0.85,

                isFavourited: Math.random() > 0.85,

            } as BrowseAsset
        ));

        return shuffle(data);
    }, 1000);
};

export const getMockAssetPreviews = (assetCount: number) =>
{
    assetCount = getInRange(assetCount, 0, assetNames.length);
    const names: string[] = shuffle(assetNames).slice(0, assetCount);

    return setDelay(() =>
    {
        const data = names.map((name, i) =>
        (
            {
                title: name,
                mainImage: getAssetImagePath(i + 1),
            } as AssetPreview
        ));

        return shuffle(data);
    }, 1000);
};

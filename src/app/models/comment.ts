import { ProfilePreview } from "./user";

export interface Comment 
{
    author: ProfilePreview;
    message: string;
}
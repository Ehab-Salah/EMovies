import { MovieItem } from "./movie-item";

export interface ActorsItem {
    adult:boolean;
    gender:number;
    id:number;
    known_for_department:string;
    name:string;
    original_name:string;
    popularity:number;
    profile_path:string;
    known_for:MovieItem[];
    
}

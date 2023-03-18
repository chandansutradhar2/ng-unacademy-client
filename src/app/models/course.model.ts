export interface Course {
    name: string;
    imageUrl?: string;
    description: string;
    createdBy: string;
    createdOn: string;
    totalDuration: string;
    level: COURSE_LEVEL;
}

export interface Review {
    rating: number;
    comment: string;
    createdOn: string;
    createdBy: string;
}

export enum COURSE_LEVEL {
    beginner = "beginner",
    intermediate = "intermediate",
    advance = "advance"
}